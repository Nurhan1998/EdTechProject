import cn from 'classnames';

import { IProgressBarProps } from 'components/ProgressBar/types';


export const ProgressBar = (props: IProgressBarProps): JSX.Element => {
  const {
    current,
    max,
    width = 100,
    color='#50C0E8',
    title,
    className
  } = props;

  return (
    <div className={cn('progressbar', className)}>
      {title && <p className="progressbar-title">{title}</p>}
      <div className="progressbar-wrapper" style={{ width: width }}>
        <span
          className="progressbar-inner_wrapper"
          style={{
            width: `${current / max * 100}%`,
            backgroundColor: color
          }}
        />
      </div>
      <span className="progressbar-text">
        {current}
      </span>
    </div>
  );
};
