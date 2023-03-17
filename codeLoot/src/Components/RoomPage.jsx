import React from 'react'
import RoomPageQuestionSection from './RoomPageQuestionSection'
import RoomPageQuestionDisplaySection from './RoomPageQuestionDisplaySection'
import RoomPageEditorSection from './RoomPageEditorSection'
import LeaderBoardComponent from './LeaderBoardComponent'
const RoomPage = () => {
    
  return (
    <div className='flex w-full min-h-screen bg-primary_gray text-primary_green h-auto'>
     <RoomPageQuestionSection/>
     <RoomPageQuestionDisplaySection/>
     <RoomPageEditorSection/>
     <LeaderBoardComponent/>
    </div>
  )
}

export default RoomPage