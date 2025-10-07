import React, { useState } from 'react'
import DayTimeSlots from './DayTimeSlots'
import { dummyEventData } from '../utils/eventUtils';
import Events from './Events';

const DayView = () => {
  const [calendarData, setCalendarData] = useState(dummyEventData);

  return (
    <div className='calendar'>
        <DayTimeSlots />
        <div className='line'></div>
        <Events events={calendarData}/>
    </div>
  )
}

export default DayView