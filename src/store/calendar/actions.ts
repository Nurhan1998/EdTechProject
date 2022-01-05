import { AxiosError } from 'axios';

import { ICourse } from 'store/calendar/types';

import createAction from 'utils/createAction';


export const GET_CALENDAR_REQUEST = 'GET_CALENDAR_REQUEST';
export const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_SUCCESS';
export const GET_CALENDAR_FAILURE = 'GET_CALENDAR_FAILURE';

export const getCalendarRequest = createAction(GET_CALENDAR_REQUEST);
export const getCalendarSuccess = createAction<ICourse[]>(GET_CALENDAR_SUCCESS);
export const getCalendarFailure = createAction<AxiosError>(GET_CALENDAR_FAILURE);
