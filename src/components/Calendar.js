import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../styles/Calendar.css';

function Calendar() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (<>
    <div className='calendar-full'>
      <div className='calendar-container'>
        <div className='calendar'>
          <GitHubCalendar username="stackpearson" />
        </div>
      </div>
    </div>

    <div className='calendar-small'>
      <div className='calendar-container'>
        <div className='calendar'>
          <GitHubCalendar 
          username="stackpearson" 
          transformData={selectLastHalfYear}
          hideColorLegend
          labels={{
            totalCount: '{{count}} contributions in the last 6mo'
          }}
          />
        </div>
      </div>
    </div>
        
  </>);
}

export default Calendar;