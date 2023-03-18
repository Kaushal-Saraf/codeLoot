import React from "react";
import ReactDOM from "react-dom";
import { useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
const RoomPageEditorSection = () => {
 
    const editorRef = useRef(null);
  
    function handleEditorDidMount(editor, monaco) {
      editorRef.current = editor; 
    }
    
    function showValue() {
      alert(editorRef.current.getValue());
    }
  return (

    <div className="bg-primary_gray flex-col border-2 w-[32rem] border-white h-[100vh] justify-start px-1 gap-4 pt-[5rem]">
      <div className="w-auto">
        <label htmlFor="topic">Language </label>
        <select id="topic" name="topic">
          <option value="array">C++</option>
          <option value="loop">Python</option>
          <option value="string">Java</option>
          <option value="graphs">Js</option>
        </select>
      </div>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default RoomPageEditorSection;
