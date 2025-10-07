import React, { useState } from 'react'

const DayTimeSlots = () => {
    const [daySlots, setDaySlots] = useState(Array.from({length: 24}, (_, index) => {
        return index;
    }));
  return (
    <>
        {
            daySlots?.map((slot) => {
                return (
                    <div key={slot} className='slot'>{slot}:00</div>
                )
            })
        }
    </>
  )
}

export default DayTimeSlots