import { RecordOf } from 'immutable';
import { AxiosResponse } from 'axios';

import { ResponseGenericType, TResponseType } from 'store/types';


export type TSignUpModel = {
  email: string;
  password: string;
  confirm_password?: string;
};

export type THSkillModel = {
  hskillid: string;
  name: string;
  value: string;
}

export type TProgileModel = {
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

export type TSignInPesponseData = {
  created: number;
  expired: number;
  id: string;
  now: number;
  refresh: number;
  token: string;
  profile: TProgileModel
}

export type TSignInState = {
  signIn: ResponseGenericType<TSignInPesponseData>;
};

export type TUserRecordOf = RecordOf<TSignInState>;

export type TSignInStateProps = Readonly<TSignInState> & TUserRecordOf | undefined;

export type TSignInResponse = AxiosResponse<TResponseType<TSignInPesponseData>>
