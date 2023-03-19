import React from "react";
import CodeMirror from "@uiw/react-codemirror"
import { useState } from "react";
import {javascript} from "@codemirror/lang-javascript"
import {python} from "@codemirror/lang-python"
import {dracula} from "@uiw/codemirror-theme-dracula"
import { ViewUpdate } from "@codemirror/view";
const RoomPageEditorSection = () => {
const [code,setCode]=useState("")
const onChange=React.useCallback((value,ViewUpdate)=>{
  console.log("value",value)
  setCode(value)
},[])
  return (
    <div className="bg-primary_gray flex-col border-2 w-[32rem] border-white h-[auto] justify-start px-1 gap-4 pt-[5rem]">
      <div className="w-auto items-center justify-start flex gap-2 mb-[5px]">
        <label htmlFor="topic">Language </label>
        <select id="topic" name="topic">
          <option value="array">C++</option>
          <option value="loop">Python</option>
          <option value="string">Java</option>
          <option value="graphs">Js</option>
        </select>
      </div>
      
      <CodeMirror value="console.log('hello')"
      height="auto"
      width="30rem"
      
      theme={dracula}
      onChange={onChange}
      extensions={[python({})]}
      ></CodeMirror>
    </div>
  );
};

export default RoomPageEditorSection;
