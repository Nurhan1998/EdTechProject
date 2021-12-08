import { RecordOf } from 'immutable';
import { AxiosResponse } from 'axios';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { IApplicationState, ResponseGenericType, THandler } from 'store/types';


export type TSignInModel = {
  email: string;
  password: string;
};

export type TSignUpModel = TSignInModel & {
  firstname: string;
  lastname: string;
  phone: string;
  country?: string;
  city?: string;
}

export type THSkillModel = {
  hskillid: string;
  name: string;
  value: string;
}
export type TLanguageModel = {
  id: string;
  name: string;
}

export interface IToken {
  id: string;
  token: string;
  created: number;
  expired: number;
  refresh: number;
  now: number;
}

export type TProfileModel = {
  address: string;
  city: string;
  country: string;
  created: string;
  creator_id: string;
  description: string;
  email: string;
  firstname: string;
  hskill: THSkillModel[];
  id: string;
  is_active: string;
  is_admin: string;
  is_blocked: string;
  is_deleted: string;
  is_email_confirmed: string;
  is_hireable: string;
  is_phone_confirmed: string;
  language: string;
  modified: string;
  modifier_id: string;
  national_id: string;
  notes: string;
  paymentinfo: string;
  paymentmethod: string;
  phone: string;
  photo: string;
  postautomat: string;
  skills: THSkillModel[];
  skip_guide: string;
  timezone: string;
}

export type TSignUpResponseData = Omit<TProfileModel, 'is_admin' | 'notes'> & {
  lastname: string;
  languages: TLanguageModel[];
  token: IToken
}

export type TSignInResponseData = IToken & {
  profile: TProfileModel
}

export type TRecordOfSignInResponseData = RecordOf<TSignInResponseData>;

export interface IUserState {
  signIn: ResponseGenericType<TRecordOfSignInResponseData>;
  token: string | null;
  profile: ResponseGenericType<RecordOf<TProfileModel>>;
  signUp: ResponseGenericType<Record<string, string>>;// пока хз куда стучаться
}

export type TRecordOfUser = RecordOf<IUserState>;
export type TSignInResponse = AxiosResponse<TSignInResponseData>
export type TSignUpResponse = AxiosResponse<TSignUpResponseData>

export type TSelectorReturnType<T> = OutputSelector<[((state: IApplicationState) => TRecordOfUser)],
  T,
  (...args: SelectorResultArray<[((state: IApplicationState) => TRecordOfUser)]>) => T,
  GetParamsFromSelectors<[((state: IApplicationState) => TRecordOfUser)]>>;

export type TUserStoreHandler<T> = THandler<TRecordOfUser, T>;

