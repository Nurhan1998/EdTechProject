import { fromJS } from 'immutable';

import { IPayloadAction } from 'store/types';
import { ICourse, TRecordOfCalendar } from 'store/calendar/types';
import {
  GET_CALENDAR_FAILURE,
  GET_CALENDAR_REQUEST, GET_CALENDAR_SUCCESS

} from 'store/calendar/actions';

import createReducer from 'utils/createReducer';
import getRequestState from 'utils/requestState';


const initialState: TRecordOfCalendar = fromJS({
  upComingCourses: getRequestState<Array<ICourse>>(),
});

const setUpComingCoursesFetching = (value: boolean) =>
  (state: TRecordOfCalendar): TRecordOfCalendar => state.setIn(['upComingCourses', 'fetching'], value);
const setUpComingCoursesData = (state: TRecordOfCalendar, action: IPayloadAction): TRecordOfCalendar =>
  state.setIn(['upComingCourses', 'data'], fromJS(action.payload));
const setUpComingCoursesFailure = (state: TRecordOfCalendar, action: IPayloadAction): TRecordOfCalendar =>
  state.setIn(['upComingCourses', 'error'], action.payload);

export default createReducer<TRecordOfCalendar>(initialState, {
  [GET_CALENDAR_REQUEST]: setUpComingCoursesFetching(true),
  [GET_CALENDAR_SUCCESS]: [setUpComingCoursesFetching(false), setUpComingCoursesData],
  [GET_CALENDAR_FAILURE]: [setUpComingCoursesFetching(false), setUpComingCoursesFailure],
});
