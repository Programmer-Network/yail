import { useEditorState } from "@tiptap/react";
import { FC } from "react";

import { ICharacterCountProps } from "./CharacterCount.types";

const CharacterCount: FC<ICharacterCountProps> = ({ editor }) => {
  const { characters, words } = useEditorState({
    editor,
    selector: ({ editor: e }) => {
      const storage = e?.storage?.characterCount;
      return {
        characters: storage?.characters?.() ?? 0,
        words: storage?.words?.() ?? 0
      };
    }
  });

  return (
    <div className='yl:text-text/30 yl:absolute yl:bottom-2 yl:right-2 yl:text-[11px] yl:pointer-events-none yl:select-none'>
      {characters} characters · {words} words
    </div>
  );
};

CharacterCount.displayName = "CharacterCount";

export { CharacterCount };
