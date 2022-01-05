import { RecordOf } from 'immutable';
import { AxiosResponse } from 'axios';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { IApplicationState, ResponseGenericType } from 'store/types';
import { IProfileModel } from 'store/users/types';


export interface ICourse {
  id: string,
  title: string,
  description: string,
  language: string,
  start: string,
  end: string,
  indoor: string,
  private: string,
  enrollment_type:string,
  price: string,
  taxrate: string,
  schedule: unknown,
  curators: TCurator[],
  is_active: string,
  link_zoom: string,
  link_telegram: string,
  link_form: string,
  is_deleted: string,
  created: string,
  creator_id: string,
  modified: string,
  modifier_id: string
}

export type TCurator = Omit<IProfileModel, 'is_admin' | 'notes'> & {
  languages: [],
}

export interface ICalendarState {
  upComingCourses: ResponseGenericType<ICourse[]>
}

export type TRecordOfCalendar = RecordOf<ICalendarState>
export type TCalendarResponse = AxiosResponse<ICourse[]>

export type TCalendarSelectorReturnType<T> = OutputSelector<
  [((state: IApplicationState) => TRecordOfCalendar)],
  T,
  (...args: SelectorResultArray<[((state: IApplicationState) => TRecordOfCalendar)]>) => T,
  GetParamsFromSelectors<[((state: IApplicationState) => TRecordOfCalendar)]>
>;
