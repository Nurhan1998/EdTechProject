import { IProgressBarProps } from 'components/ProgressBar/types';


export const ProgressBar = ({ current, max, width = 100, color='#50C0E8' }: IProgressBarProps): JSX.Element => (
  <div className="progressbar">
    <div className="progressbar-wrapper" style={{ width: width }}>
      <span className="progressbar-inner_wrapper" style={{ width: `${current / max * 100}%`, backgroundColor: color }}/>
    </div>
    <span className="progressbar-text">
      {current}
    </span>
  </div>
);
