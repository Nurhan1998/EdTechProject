import { createAction } from 'most-ui-kit';

import { INotificationAction } from 'store/notification/types';


export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS';
export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR';

export const showSuccess = createAction<INotificationAction>(NOTIFICATION_SUCCESS);
export const showError = createAction<INotificationAction>(NOTIFICATION_ERROR);
