import { createAction } from 'most-ui-kit';

import { TFormattedFormValues } from 'store/form/types';

export const SAVE_SETTINGS_REQUEST = 'SAVE_SETTINGS_REQUEST';

export const saveSettingsRequest = createAction<TFormattedFormValues>(SAVE_SETTINGS_REQUEST);
