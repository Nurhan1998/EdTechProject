import { TFormattedFormValues } from 'store/form/types';

import createAction from 'utils/createAction';

export const SAVE_SETTINGS_REQUEST = 'SAVE_SETTINGS_REQUEST';

export const saveSettingsRequest = createAction<TFormattedFormValues>(SAVE_SETTINGS_REQUEST);
