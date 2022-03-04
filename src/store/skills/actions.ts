import { AxiosError } from 'axios';
import { createAction } from 'most-ui-kit';

import { IHardSkillModel, ISoftSkillModel } from 'store/skills/types';

export const STATE_KEY = '@skills';

export const GET_HARD_SKILLS_REQUEST = `${STATE_KEY}_GET_HARD_SKILLS_REQUEST`;
export const GET_HARD_SKILLS_SUCCESS = `${STATE_KEY}_GET_HARD_SKILLS_SUCCESS`;
export const GET_HARD_SKILLS_FAILURE = `${STATE_KEY}_GET_HARD_SKILLS_FAILURE`;
export const GET_SOFT_SKILLS_REQUEST = `${STATE_KEY}_GET_SOFT_SKILLS_REQUEST`;
export const GET_SOFT_SKILLS_SUCCESS = `${STATE_KEY}_GET_SOFT_SKILLS_SUCCESS`;
export const GET_SOFT_SKILLS_FAILURE = `${STATE_KEY}_GET_SOFT_SKILLS_FAILURE`;


export const getHardSkillsRequest = createAction(GET_HARD_SKILLS_REQUEST);
export const getHardSkillsSuccess = createAction<IHardSkillModel[]>(GET_HARD_SKILLS_SUCCESS);
export const getHardSkillsFailure = createAction<AxiosError>(GET_HARD_SKILLS_FAILURE);

export const getSoftSkillsRequest = createAction(GET_SOFT_SKILLS_REQUEST);
export const getSoftSkillsSuccess = createAction<ISoftSkillModel[]>(GET_SOFT_SKILLS_SUCCESS);
export const getSoftSkillsFailure = createAction<AxiosError>(GET_SOFT_SKILLS_FAILURE);
