import { IProgressBarProps } from 'components/ProgressBar/types';


export const ProgressBar = ({ current, max }: IProgressBarProps): JSX.Element => (
  <div className="user-card_status__wrapper">
    <span className="user-card_status__text">
      {current} / {max}
    </span>
    <span className="user-card_status__inner-wrapper" style={{ width: `${current / max * 100}%` }}/>
  </div>
);
