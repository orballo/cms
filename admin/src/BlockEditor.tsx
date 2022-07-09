import { useEffect, useState } from "react";
import {
  BlockEditorProvider,
  BlockList,
  BlockInspector,
  ObserveTyping,
  WritingFlow,
} from "@wordpress/block-editor";
import { registerCoreBlocks } from "@wordpress/block-library";
import { SlotFillProvider } from "@wordpress/components";
import { ShortcutProvider } from "@wordpress/keyboard-shortcuts";

import "@wordpress/format-library";

import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/editor.css";
import "@wordpress/block-library/build-style/theme.css";
import "@wordpress/components/build-style/style.css";
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
    <div className="block-editor-container">
      <div className="block-editor-library"></div>

      <BlockEditorProvider
        className="provider"
        value={blocks}
        onChange={replaceBlocks}
        onInput={replaceBlocks}
      >
        <SlotFillProvider>
          <ShortcutProvider>
            <WritingFlow>
              <ObserveTyping>
                <BlockList className="blocklist" />
              </ObserveTyping>
            </WritingFlow>
          </ShortcutProvider>
        </SlotFillProvider>
      </BlockEditorProvider>

      <div className="block-editor-inspector"></div>
    </div>
  );
};

export default BlockEditor;
