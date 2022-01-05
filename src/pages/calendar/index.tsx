import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout';
import Calendar from 'components/Calendar';

import { getCalendarRequest } from 'store/calendar/actions';
import { makeSelectUpcomingCourseData, makeSelectUpcomingCourseFetching } from 'store/calendar/selectors';

const CalendarPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const upComingCourses = useSelector(makeSelectUpcomingCourseData);
  const coursesFetching = useSelector(makeSelectUpcomingCourseFetching);

  useEffect(
    ()=>{
      dispatch(getCalendarRequest());
    },
    // Need to call this effect only once at render
    // eslint-disable-next-line
    []
  );
  return (
    <Layout withoutRightSidebar pageClassName="courses-page">
      <div className="calendar-page_wrapper">
        <Calendar isFetching={coursesFetching} upComingCourses={upComingCourses} />
        <div className="calendar-page_wrapper__footer">
          <div className="content">
            <div className="circle green"/>
            <p>Занятие онлайн</p>
          </div>
          <div className="content">
            <div className="circle blue"/>
            <p>Занятие в классе</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CalendarPage;
