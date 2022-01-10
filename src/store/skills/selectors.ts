import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { IHardSkillModel, TSkillsRecordOf, TSkillsSelectorReturnType } from 'store/skills/types';

const selectState = (state: IApplicationState): TSkillsRecordOf | undefined => state.skills;

export const makeSelectHardSkillsData: TSkillsSelectorReturnType<IHardSkillModel[]> = createSelector(
  selectState,
  (state?: TSkillsRecordOf) => state?.getIn(['hardSkills', 'data'])?.toJS() || []
);

export const makeSelectSoftSkillsData: TSkillsSelectorReturnType<IHardSkillModel[]> = createSelector(
  selectState,
  (state?: TSkillsRecordOf) => state?.getIn(['softSkills', 'data'])?.toJS() || []
);
