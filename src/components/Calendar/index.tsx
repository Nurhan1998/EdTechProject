import { useMemo } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { TEventContentArg } from 'components/Calendar/types';

import { ICourse } from 'store/calendar/types';

export interface IUpcomingCourses {
  isFetching: boolean;
  upComingCourses: ICourse[]
  handleClick?: () => void
}

const Calendar = ({ upComingCourses, handleClick }: IUpcomingCourses): JSX.Element => {

  const formatEvents = useMemo(
    () => upComingCourses.map(course => {
      const { title, start } = course;
      return {
        title,
        date: start,
        curator: course.curators[0],
      };
    }),
    [upComingCourses]
  );

  const eventContent =(arg: TEventContentArg) =>  (
    <div className="event-content">
      <p className="event-content_time">18: 00</p>
      <div className="event-content_theme"><p>{arg.event._def.title}</p></div>
      <p className="event-content_curator">
        {arg.event.extendedProps.curator?.firstname || 'Meelia Muld'}
      </p>
    </div>
  );


  const handleDateClick = (): void => {
    if(handleClick) handleClick();
    //some logic
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      customButtons={{
        myCustomButton: {
          text: 'Calendar'
        },
      }}
      headerToolbar={{
        left: 'myCustomButton',
        center: 'prev,title,next',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }}
      timeZone="UTC"
      buttonText={{
        dayGridMonth: 'Month',
        timeGridWeek: 'Week',
        timeGridDay: 'Day',
        listWeek: 'List',
      }}
      editable={true}
      eventDisplay={'background'}
      selectable={true}
      fixedWeekCount={false}
      events={formatEvents}
      eventContent={eventContent}
      height={688}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      eventMinHeight={114}
    />
  );
};
export default Calendar;
