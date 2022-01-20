import { IProfileModel } from 'store/users/types';

export type TSettingsRequestPayload = Omit<IProfileModel, 'skills'| 'hskills'> & {
  password?: string;
}
