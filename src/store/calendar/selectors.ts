import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { ICourse, TCalendarSelectorReturnType, TRecordOfCalendar } from 'store/calendar/types';

const selectState = (state: IApplicationState): TRecordOfCalendar | undefined => state.calendar;

export const makeSelectUpcomingCourseData: TCalendarSelectorReturnType<ICourse[]> = createSelector(
  selectState,
  (state?: TRecordOfCalendar) => state?.getIn(['upComingCourses', 'data'])?.toJS() || []
);

export const makeSelectUpcomingCourseFetching: TCalendarSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfCalendar) => state?.getIn(['upComingCourses', 'fetching']) || []
);
