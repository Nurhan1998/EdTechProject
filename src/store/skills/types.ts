import { RecordOf } from 'immutable';
import { AxiosResponse } from 'axios';

import { ResponseGenericType, THandler, TSelectorReturnType } from 'store/types';

export interface ISoftSkillModel {
  id: string;
  domain_id: string;
  name: string;
  is_deleted:string;
  created: string;
  creator_id: string;
  modified: string;
  modifier_id: string;
}

export interface IHardSkillModel extends ISoftSkillModel {
  can: string;
  knowledge: string;
}

export interface ISkillsState {
  hardSkills: ResponseGenericType<IHardSkillModel[]>
  softSkills: ResponseGenericType<ISoftSkillModel[]>
}

export type TSkillsRecordOf = RecordOf<ISkillsState>
export type THardSkillsResponse = AxiosResponse<IHardSkillModel[]>
export type TSoftSkillsResponse = AxiosResponse<ISoftSkillModel[]>
export type TSkillsStoreHandler<T> = THandler<TSkillsRecordOf, T>;

export type TSkillsSelectorReturnType<T> = TSelectorReturnType<T, TSkillsRecordOf>
