import { validYouTubeUrl } from "@programmer_network/ajv";
import useAJVForm from "@programmer_network/use-ajv-form";
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
import { ToolbarGroupId } from "../../types";
import { LinkClickTarget } from "../ModalInput/types";
import { IRoughAnnotationAttrs } from "../RoughAnnotation";
import { ITiptapDropdownItem } from "../TiptapDropdown";
import { ILinkInputPosition, IUseToolbarProps } from "./Toolbar.types";
import { getToolbarIcons } from "./Toolbar.utils";

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
  const [linkInputPosition, setLinkInputPosition] =
    useState<ILinkInputPosition | null>(null);

  useEditorState({
    editor,
    selector: ({ editor: e }) => ({
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

  const prevIsInsideLinkRef = useRef(false);

  useEffect(() => {
    if (isInsideLink && !prevIsInsideLinkRef.current && !isLinkInputOpen) {
      if (!editor.view) {
        prevIsInsideLinkRef.current = isInsideLink;
        return;
      }

      const { from } = editor.state.selection;
      const coords = editor.view.coordsAtPos(from);

      setLinkInputPosition({
        x: coords.left,
        y: coords.bottom
      });

      const existingHref = editor.getAttributes("link")["href"] || "";
      linkInputForm.set({ link: existingHref });
      setIsLinkInputOpen(true);
    }

    prevIsInsideLinkRef.current = isInsideLink;
  }, [isInsideLink, isLinkInputOpen, editor, linkInputForm]);

  const allIcons = getToolbarIcons({ editor });

  const isItemEnabled = useCallback(
    (itemId: string) =>
      !toolbarItems ||
      toolbarItems.includes(itemId as keyof typeof TIPTAP_TOOLBAR_ITEMS),
    [toolbarItems]
  );

  const getIconById = useCallback(
    (itemId: string) => allIcons.find(icon => icon.id === itemId),
    [allIcons]
  );

  const isGroupEnabled = useCallback(
    (groupId: ToolbarGroupId) => {
      const groupItems = TOOLBAR_GROUPS[groupId as keyof typeof TOOLBAR_GROUPS];
      if (!groupItems) return false;
      return groupItems.some((item: string) => isItemEnabled(item));
    },
    [isItemEnabled]
  );

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

  const handleOpenLinkInput = useCallback(() => {
    if (!hasSelection || !editor.view) return;

    const { to } = editor.state.selection;
    const coords = editor.view.coordsAtPos(to);

    setLinkInputPosition({
      x: coords.left,
      y: coords.bottom
    });

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

  const insertVideo = useCallback(() => {
    if (!youtubeInputForm.isValid) return;

    editor.commands.setYoutubeVideo({
      src: youtubeInputForm.state.youtubeUrl.value
    });

    inputModal.setModalId("");
  }, [editor, inputModal, youtubeInputForm]);

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

  const insertDropdownItems = ((): ITiptapDropdownItem[] => {
    const items: ITiptapDropdownItem[] = [];

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
    ref,
    fileInputRef,
    isAnnotationDropdownOpen,
    isLinkInputOpen,
    linkInputPosition,
    hasSelection,
    hasExistingAnnotation,
    linkInputForm,
    youtubeInputForm,
    inputModal,
    typographyDropdownItems,
    listsDropdownItems,
    insertDropdownItems,
    insertLink,
    insertVideo,
    handleFileInputChange,
    handleApplyAnnotation,
    handleRemoveAnnotation,
    handleCloseAnnotationDropdown,
    handleToggleAnnotationDropdown,
    handleOpenLinkInput,
    handleCloseLinkInput,
    handleLinkInputChange,
    handleLinkSubmit,
    handleUnlink,
    isItemEnabled,
    isGroupEnabled,
    getIconById,
    getGroupIcons,
    imageExtensionEnabled: image.isExtensionEnabled
  };
};
