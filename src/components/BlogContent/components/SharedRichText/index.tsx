import { marked } from "marked";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function SharedRichText({ data }: Readonly<{ data: any }>) {
  const [markdownContent, setMarkdownContent] = useState(marked(data.body));

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={markdownContent}
        readOnly={true} // Makes the editor read-only
        modules={{ toolbar: false }} // Hides the toolbar
        className="custom-quill-editor" // Add custom class
      />
    </div>
  );
}
