import { fromJS } from 'immutable';
import { AxiosError } from 'axios';
import { createReducer } from 'most-ui-kit';

import { IHardSkillModel, ISoftSkillModel, TSkillsRecordOf, TSkillsStoreHandler } from 'store/skills/types';
import {
  GET_HARD_SKILLS_FAILURE,
  GET_HARD_SKILLS_REQUEST, GET_HARD_SKILLS_SUCCESS, GET_SOFT_SKILLS_FAILURE,
  GET_SOFT_SKILLS_REQUEST,
  GET_SOFT_SKILLS_SUCCESS
} from 'store/skills/actions';

import getRequestState from 'utils/requestState';


const initialState:TSkillsRecordOf = fromJS({
  hardSkills: getRequestState<IHardSkillModel[]>(),
  softSkills: getRequestState<ISoftSkillModel[]>(),
});

const setHardSkillsFetching = (value: boolean): TSkillsStoreHandler<void> =>
  (state: TSkillsRecordOf): TSkillsRecordOf => state.setIn(['hardSkills', 'fetching'], value);
const setHardSkillsData: TSkillsStoreHandler<IHardSkillModel[]> = (state, action): TSkillsRecordOf =>
  state.setIn(['hardSkills', 'data'], fromJS(action.payload));
const setHardSkillsFailure: TSkillsStoreHandler<AxiosError> = (state, action): TSkillsRecordOf =>
  state.setIn(['hardSkills', 'error'], action.payload);

const setSoftSkillsFetching = (value: boolean):TSkillsStoreHandler<void> =>
  (state: TSkillsRecordOf): TSkillsRecordOf => state.setIn(['softSkills', 'fetching'], value);
const setSoftSkillsData: TSkillsStoreHandler<ISoftSkillModel[]> = (state, action): TSkillsRecordOf =>
  state.setIn(['softSkills', 'data'], fromJS(action.payload));
const setSoftSkillsFailure: TSkillsStoreHandler<AxiosError> = (state, action): TSkillsRecordOf =>
  state.setIn(['softSkills', 'error'], action.payload);

export default createReducer<TSkillsRecordOf>(initialState, {
  [GET_HARD_SKILLS_REQUEST]: setHardSkillsFetching(true),
  [GET_HARD_SKILLS_SUCCESS]: [setHardSkillsFetching(false), setHardSkillsData],
  [GET_HARD_SKILLS_FAILURE]: [setHardSkillsFetching(false), setHardSkillsFailure],

  [GET_SOFT_SKILLS_REQUEST]: setSoftSkillsFetching(true),
  [GET_SOFT_SKILLS_SUCCESS]: [setSoftSkillsFetching(false), setSoftSkillsData],
  [GET_SOFT_SKILLS_FAILURE]: [setSoftSkillsFetching(false), setSoftSkillsFailure]
});
