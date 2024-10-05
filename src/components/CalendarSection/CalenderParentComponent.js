import React, { useState } from 'react';
import CalendarSection from './CalendarSection/CalenderSection'; // Ensure correct import

const ParentComponent = () => {
    console.log('Parent startDate:', startDate);
    console.log('Parent endDate:', endDate);
    console.log('Parent setStartDate:', setStartDate);
    console.log('Parent setEndDate:', setEndDate);
    
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <CalendarSection
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}  // Passing setStartDate as a prop
        setEndDate={setEndDate}      // Passing setEndDate as a prop
      />
    </div>
  );
};

export default ParentComponent;
