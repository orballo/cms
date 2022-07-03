import IsolatedBlockEditor from "@automattic/isolated-block-editor";

import "@automattic/isolated-block-editor/build-browser/core.css";

const BlockEditor = () => (
  <IsolatedBlockEditor
    settings={{}}
    onSaveContent={async (html: string) => {}}
    onSaveBlocks={async (blocks: any) => {
      await fetch("http://localhost:8000/save", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blocks),
      });
    }}
    onLoad={async () => {
      const response = await fetch("http://localhost:8000/load");
      const payload = await response.json();
      return payload;
    }}
    onError={(error: any) => console.error(error)}
  ></IsolatedBlockEditor>
);

export default BlockEditor;
