import { RecordOf } from 'immutable';
import { AxiosResponse } from 'axios';

import { AxiosResponseWithTotal, ResponseGenericType, THandler, TSelectorReturnType } from 'store/types';

export type TSignIn = {
  email: string;
  password: string;
}

export type TSignUp = TSignIn & {
  firstname: string;
  lastname: string;
  phone: string;
  country?: string;
  city?: string;
}

export interface ISkill {
  name: string;
  value: string
}

export interface IHSkillModel extends ISkill {
  hskill_id: string;
}

export interface ISkillModel extends ISkill {
  skill_id: string
}

export interface ILanguageModel {
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

export interface IProfileModel {
  address: string;
  city: string;
  country: string;
  created: string;
  creator_id: string;
  description: string;
  email: string;
  firstname: string;
  lastname: string;
  hskills: IHSkillModel[];
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
  skills: ISkillModel[];
  skip_guide: string;
  timezone: string;
}


export interface TSignInResponseData extends IToken {
  profile: IProfileModel;
}

export type TSignUpResponseData = Omit<IProfileModel, 'is_admin' | 'notes'> & {
  languages: ILanguageModel[];
  token: IToken
}

export interface IForgotPassword {
  email: string;
}

export interface IUsersListResponseData extends IProfileModel {
  languages: ILanguageModel[];
}

export interface IPagination {
  onpage: number;
  page: number;
}

export type TRecordOfSignInResponseData = RecordOf<TSignInResponseData>;
export type TRecordOfSignUpResponseData = RecordOf<TSignUpResponseData>;
export type TRecordOfUserListResponseData = RecordOf<IUsersListResponseData[]>;

export interface IUserState {
  signIn: ResponseGenericType<TRecordOfSignInResponseData>;
  token: string | null;
  profile: ResponseGenericType<RecordOf<IProfileModel>>;
  signUp: ResponseGenericType<TRecordOfSignUpResponseData>;
  forgotPassword: ResponseGenericType<boolean>;
  usersList: ResponseGenericType<TRecordOfUserListResponseData>;
  usersCount: number | null;
}

export type TRecordOfUser = RecordOf<IUserState>;
export type TSignInResponse = AxiosResponse<TSignInResponseData>;
export type TSignUpResponse = AxiosResponse<TSignUpResponseData>;
export type TUserListResponse = AxiosResponseWithTotal<IUsersListResponseData[]>;

export type TUserSelectorReturnType<T> = TSelectorReturnType<T, TRecordOfUser>;

export type TUserStoreHandler<T> = THandler<TRecordOfUser, T>;


