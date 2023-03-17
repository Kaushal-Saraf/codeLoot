import React from 'react'
import ActiveRoomCard from './ActiveRoomCard'

const ActiveRooms = () => {
  return (
    <div className='flex justify-start gap-6 flex-wrap'>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
    </div>
  )
}

export default ActiveRooms