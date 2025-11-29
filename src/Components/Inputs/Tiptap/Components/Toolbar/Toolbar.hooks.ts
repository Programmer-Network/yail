import { validYouTubeUrl } from "@programmer_network/ajv";
import useAJVForm from "@programmer_network/use-ajv-form";
import { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import {
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import { useModalInput } from "../../../../../Hooks/useModalInput";
import { TIPTAP_TOOLBAR_ITEMS, TOOLBAR_GROUPS } from "../../constants";
import { TiptapControls, ToolbarGroupId } from "../../types";
import { LinkClickTarget } from "../ModalInput/types";
import { IRoughAnnotationAttrs } from "../RoughAnnotation";
import { ITiptapDropdownItem } from "../TiptapDropdown";
import { getToolbarIcons } from "./toolbar-icons";

interface IUseToolbarProps {
  editor: Editor;
  toolbarItems?: TiptapControls;
  image: {
    onSetImage?: (base64Image: string) => Promise<void>;
    isExtensionEnabled: boolean;
  };
  link: {
    isExtensionEnabled: boolean;
  };
  onImageUploadError?: (error: string) => void;
}

export const useToolbar = ({
  editor,
  toolbarItems,
  image,
  link,
  onImageUploadError
}: IUseToolbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAnnotationDropdownOpen, setIsAnnotationDropdownOpen] =
    useState(false);
  const [isLinkInputOpen, setIsLinkInputOpen] = useState(false);
  const [linkInputPosition, setLinkInputPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Subscribe to editor state changes - this is Tiptap's built-in way
  // to trigger re-renders when editor state changes (for active states, selection, etc.)
  useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      // Track enough state to trigger re-renders on relevant changes
      selectionFrom: e?.state.selection.from,
      selectionTo: e?.state.selection.to
    })
  });

  const inputModal = useModalInput({ ref: ref as RefObject<HTMLDivElement> });

  const linkInputForm = useAJVForm(
    { link: "" },
    {
      type: "object",
      required: ["link"],
      properties: {
        link: {
          type: "string",
          format: "uri"
        }
      }
    }
  );

  const youtubeInputForm = useAJVForm(
    { youtubeUrl: "" },
    {
      type: "object",
      required: ["youtubeUrl"],
      properties: {
        youtubeUrl: {
          type: "string",
          "is-youtube-url": true
        }
      }
    },
    {
      customKeywords: [validYouTubeUrl],
      debounceTime: 1
    }
  );

  const hasSelection = !editor.state.selection.empty;
  const hasExistingAnnotation = editor.isActive("roughAnnotation");
  const isInsideLink = editor.isActive("link");

  // Track previous link state to detect when user clicks into a link
  const prevIsInsideLinkRef = useRef(false);

  // Auto-open link input when user clicks/selects inside an existing link
  useEffect(() => {
    // Only trigger when transitioning from outside to inside a link
    if (isInsideLink && !prevIsInsideLinkRef.current && !isLinkInputOpen) {
      // Get position of the selection
      const { from } = editor.state.selection;
      const coords = editor.view.coordsAtPos(from);

      setLinkInputPosition({
        x: coords.left,
        y: coords.bottom
      });

      // Pre-fill with existing link URL
      const existingHref = editor.getAttributes("link")["href"] || "";
      linkInputForm.set({ link: existingHref });
      setIsLinkInputOpen(true);
    }

    // Update ref for next render
    prevIsInsideLinkRef.current = isInsideLink;
  }, [isInsideLink, isLinkInputOpen, editor, linkInputForm]);

  // Get all toolbar icons - no memoization so isActive updates on editor state changes
  const allIcons = getToolbarIcons({ editor });

  // Helper to check if item is enabled
  // If toolbarItems is undefined, all items are enabled
  const isItemEnabled = useCallback(
    (itemId: string) =>
      !toolbarItems ||
      toolbarItems.includes(itemId as keyof typeof TIPTAP_TOOLBAR_ITEMS),
    [toolbarItems]
  );

  // Helper to get icon config by id
  const getIconById = useCallback(
    (itemId: string) => allIcons.find(icon => icon.id === itemId),
    [allIcons]
  );

  // Check if any items in a group are enabled
  const isGroupEnabled = useCallback(
    (groupId: ToolbarGroupId) => {
      const groupItems = TOOLBAR_GROUPS[groupId as keyof typeof TOOLBAR_GROUPS];
      if (!groupItems) return false;
      return groupItems.some((item: string) => isItemEnabled(item));
    },
    [isItemEnabled]
  );

  // Insert link handler (legacy - for ModalInput)
  const insertLink = useCallback(
    (target: LinkClickTarget) => {
      if (!linkInputForm.isValid) return;

      if (target === LinkClickTarget.UnLink) {
        editor.commands.unsetLink();
        inputModal.setModalId("");
        return;
      }

      editor
        .chain()
        .focus()
        .setLink({ href: linkInputForm.state.link.value })
        .run();
      inputModal.setModalId("");
    },
    [editor, inputModal, linkInputForm]
  );

  // Link input handlers (new TiptapLinkInput)
  const handleOpenLinkInput = useCallback(() => {
    if (!hasSelection) return;

    // Get position of the selection end to position the link input
    const { to } = editor.state.selection;
    const coords = editor.view.coordsAtPos(to);

    setLinkInputPosition({
      x: coords.left,
      y: coords.bottom
    });

    // Pre-fill with existing link if any
    const existingHref = editor.getAttributes("link")["href"] || "";
    linkInputForm.set({ link: existingHref });
    setIsLinkInputOpen(true);
  }, [hasSelection, editor, linkInputForm]);

  const handleCloseLinkInput = useCallback(() => {
    setIsLinkInputOpen(false);
  }, []);

  const handleLinkInputChange = useCallback(
    (value: string) => {
      linkInputForm.set({ link: value });
    },
    [linkInputForm]
  );

  const handleLinkSubmit = useCallback(() => {
    if (!linkInputForm.isValid) return;

    editor
      .chain()
      .focus()
      .setLink({ href: linkInputForm.state.link.value })
      .run();
    setIsLinkInputOpen(false);
  }, [editor, linkInputForm]);

  const handleUnlink = useCallback(() => {
    editor.commands.unsetLink();
    setIsLinkInputOpen(false);
  }, [editor]);

  // Insert video handler
  const insertVideo = useCallback(() => {
    if (!youtubeInputForm.isValid) return;

    editor.commands.setYoutubeVideo({
      src: youtubeInputForm.state.youtubeUrl.value
    });

    inputModal.setModalId("");
  }, [editor, inputModal, youtubeInputForm]);

  // Handle image upload
  const handleImageUpload = useCallback(
    async (file: File) => {
      const reader = new FileReader();
      reader.onload = async event => {
        const base64 = event.target?.result as string;
        try {
          await image.onSetImage?.(base64);
          editor
            .chain()
            .focus()
            .insertContent([
              { type: "image", attrs: { src: base64 } },
              { type: "paragraph" }
            ])
            .focus("end")
            .run();
        } catch {
          onImageUploadError?.("Failed to upload image. Please try again.");
        }
      };
      reader.readAsDataURL(file);
    },
    [editor, image, onImageUploadError]
  );

  // Handle file input change
  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleImageUpload(file);
        e.target.value = "";
      }
    },
    [handleImageUpload]
  );

  // Annotation handlers
  const handleApplyAnnotation = useCallback(
    (attrs: IRoughAnnotationAttrs) => {
      editor.commands.setRoughAnnotation(attrs);
      setIsAnnotationDropdownOpen(false);
    },
    [editor]
  );

  const handleRemoveAnnotation = useCallback(() => {
    editor.commands.unsetRoughAnnotation();
    setIsAnnotationDropdownOpen(false);
  }, [editor]);

  const handleCloseAnnotationDropdown = useCallback(() => {
    setIsAnnotationDropdownOpen(false);
  }, []);

  const handleToggleAnnotationDropdown = useCallback(() => {
    const currentHasSelection = !editor.state.selection.empty;
    const isInsideAnnotation = editor.isActive("roughAnnotation");
    if (currentHasSelection || isInsideAnnotation) {
      setIsAnnotationDropdownOpen(prev => !prev);
    }
  }, [editor]);

  // Typography dropdown items - computed fresh each render for isActive updates
  const typographyDropdownItems = ((): ITiptapDropdownItem[] => {
    const items: ITiptapDropdownItem[] = [];
    const typographyItems = TOOLBAR_GROUPS[ToolbarGroupId.TYPOGRAPHY];

    typographyItems.forEach(itemId => {
      if (!isItemEnabled(itemId)) return;

      const icon = getIconById(itemId);
      if (!icon) return;

      items.push({
        id: itemId,
        label: icon.description || itemId,
        icon: icon.iconName,
        onClick: () => icon.onClick?.({} as MouseEvent<HTMLButtonElement>),
        isActive: icon.isActive,
        isDisabled:
          typeof icon.isDisabled === "function" ? icon.isDisabled() : false
      });
    });

    return items;
  })();

  // Lists dropdown items
  const listsDropdownItems = ((): ITiptapDropdownItem[] => {
    const items: ITiptapDropdownItem[] = [];
    const listItems = TOOLBAR_GROUPS[ToolbarGroupId.LISTS];

    listItems.forEach(itemId => {
      if (!isItemEnabled(itemId)) return;

      const icon = getIconById(itemId);
      if (!icon) return;

      items.push({
        id: itemId,
        label: icon.description || itemId,
        icon: icon.iconName,
        onClick: () => icon.onClick?.({} as MouseEvent<HTMLButtonElement>),
        isActive: icon.isActive,
        isDisabled:
          typeof icon.isDisabled === "function" ? icon.isDisabled() : false
      });
    });

    return items;
  })();

  // Insert dropdown items - computed fresh each render for isActive updates
  const insertDropdownItems = ((): ITiptapDropdownItem[] => {
    const items: ITiptapDropdownItem[] = [];

    // Link - now uses TiptapLinkInput
    if (isItemEnabled(TIPTAP_TOOLBAR_ITEMS.LINK) && link.isExtensionEnabled) {
      const icon = getIconById(TIPTAP_TOOLBAR_ITEMS.LINK);
      items.push({
        id: TIPTAP_TOOLBAR_ITEMS.LINK,
        label: "Link",
        icon: icon?.iconName,
        onClick: () => {
          handleOpenLinkInput();
        },
        isActive: editor.isActive("link"),
        isDisabled: !hasSelection
      });
    }

    // Image
    if (isItemEnabled(TIPTAP_TOOLBAR_ITEMS.IMAGE) && image.isExtensionEnabled) {
      const icon = getIconById(TIPTAP_TOOLBAR_ITEMS.IMAGE);
      items.push({
        id: TIPTAP_TOOLBAR_ITEMS.IMAGE,
        label: "Image",
        icon: icon?.iconName,
        onClick: () => fileInputRef.current?.click(),
        isActive: false
      });
    }

    // YouTube
    if (isItemEnabled(TIPTAP_TOOLBAR_ITEMS.YOUTUBE)) {
      const icon = getIconById(TIPTAP_TOOLBAR_ITEMS.YOUTUBE);
      items.push({
        id: TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
        label: "YouTube Video",
        icon: icon?.iconName,
        onClick: (e: MouseEvent) => {
          youtubeInputForm.set({ youtubeUrl: "" });
          inputModal.openModal(
            e as unknown as MouseEvent<HTMLButtonElement>,
            TIPTAP_TOOLBAR_ITEMS.YOUTUBE
          );
        },
        isActive: false,
        dividerAfter: isItemEnabled(TIPTAP_TOOLBAR_ITEMS.TABLE)
      });
    }

    // Table
    if (isItemEnabled(TIPTAP_TOOLBAR_ITEMS.TABLE)) {
      const icon = getIconById(TIPTAP_TOOLBAR_ITEMS.TABLE);
      items.push({
        id: TIPTAP_TOOLBAR_ITEMS.TABLE,
        label: "Table",
        icon: icon?.iconName,
        onClick: () => {
          editor.commands.insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: true
          });
        },
        isActive: editor.isActive("table")
      });
    }

    return items;
  })();

  // Get filtered icons for a specific group
  const getGroupIcons = useCallback(
    (groupId: ToolbarGroupId) => {
      const groupItems = TOOLBAR_GROUPS[groupId as keyof typeof TOOLBAR_GROUPS];
      if (!groupItems) return [];
      return allIcons.filter(
        icon =>
          (groupItems as readonly string[]).includes(icon.id) &&
          isItemEnabled(icon.id)
      );
    },
    [allIcons, isItemEnabled]
  );

  return {
    // Refs
    ref,
    fileInputRef,

    // State
    isAnnotationDropdownOpen,
    isLinkInputOpen,
    linkInputPosition,
    hasSelection,
    hasExistingAnnotation,

    // Forms
    linkInputForm,
    youtubeInputForm,

    // Modal
    inputModal,

    // Dropdown items
    typographyDropdownItems,
    listsDropdownItems,
    insertDropdownItems,

    // Handlers
    insertLink,
    insertVideo,
    handleFileInputChange,
    handleApplyAnnotation,
    handleRemoveAnnotation,
    handleCloseAnnotationDropdown,
    handleToggleAnnotationDropdown,

    // Link input handlers
    handleOpenLinkInput,
    handleCloseLinkInput,
    handleLinkInputChange,
    handleLinkSubmit,
    handleUnlink,

    // Helpers
    isItemEnabled,
    isGroupEnabled,
    getIconById,
    getGroupIcons,

    // Image extension
    imageExtensionEnabled: image.isExtensionEnabled
  };
};
