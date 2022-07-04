import { useEffect, useState } from "react";
import {
  BlockEditorProvider,
  BlockList,
  ObserveTyping,
  WritingFlow,
} from "@wordpress/block-editor";
import { registerCoreBlocks } from "@wordpress/block-library";
import { SlotFillProvider } from "@wordpress/components";
import { ShortcutProvider } from "@wordpress/keyboard-shortcuts";

import "@wordpress/format-library";

import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/editor.css";
import "@wordpress/block-library/build-style/theme.css";
import "@wordpress/format-library/build-style/style.css";

const BlockEditor = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    registerCoreBlocks();
  }, []);

  const replaceBlocks = (nextBlocks: any) => {
    setBlocks(nextBlocks);
  };

  return (
    <>
      <ShortcutProvider>
        <SlotFillProvider>
          <BlockEditorProvider
            blocks={blocks.current}
            onChange={replaceBlocks}
            onInput={replaceBlocks}
          >
            <WritingFlow>
              <ObserveTyping>
                <BlockList />
              </ObserveTyping>
            </WritingFlow>
          </BlockEditorProvider>
        </SlotFillProvider>
      </ShortcutProvider>
    </>
  );
};

export default BlockEditor;
