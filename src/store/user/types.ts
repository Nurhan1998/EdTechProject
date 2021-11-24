import { RecordOf } from 'immutable';

export interface IUserStore {
  token?: string;
}
export type TUserStoreRecord = RecordOf<IUserStore>;
