import { FC } from 'react';

import { IProgressBarProps } from 'components/ProgressBar/types';


export const ProgressBar: FC<IProgressBarProps> = ({ current, max }): JSX.Element => (
  <div className="user-card_status__wrapper">
    <span className="user-card_status__text">
      {current} / {max}
    </span>
    <span className="user-card_status__inner-wrapper" style={{ width: `${current / max * 100}%` }}/>
  </div>
);
