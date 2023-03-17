import React from 'react'

const RoomPageEditorSection = () => {
  return (
    <div className='bg-primary_gray flex-col border-2 w-[32rem] border-white h-[100vh] justify-start px-1 gap-4 pt-[5rem]'>
        <div className='w-auto'>
        <label htmlFor="topic">Language </label>
        <select  id="topic" name="topic">
          <option  value="array">C++</option>
          <option value="loop">Python</option>
          <option value="string">Java</option>
          <option value="graphs">Js</option>
        </select>
        </div>
    </div>
  )
}

export default RoomPageEditorSection