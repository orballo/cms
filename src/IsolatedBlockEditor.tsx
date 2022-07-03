import IsolatedBlockEditor from "@automattic/isolated-block-editor";

import "@automattic/isolated-block-editor/build-browser/core.css";

const BlockEditor = () => (
  <IsolatedBlockEditor
    settings={{}}
    onSaveContent={(html) => console.log(html)}
    onError={(error) => console.error(error)}
  ></IsolatedBlockEditor>
);

export default BlockEditor;
