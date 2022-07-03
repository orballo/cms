import IsolatedBlockEditor from "@automattic/isolated-block-editor";

import "@automattic/isolated-block-editor/build-browser/core.css";

const BlockEditor = () => (
  <IsolatedBlockEditor
    settings={{}}
    onSaveContent={async (html: string) => {
      await fetch("http://localhost:8000/save", {
        method: "POST",
        body: html,
        mode: "no-cors",
      });
    }}
    onError={(error) => console.error(error)}
  ></IsolatedBlockEditor>
);

export default BlockEditor;
