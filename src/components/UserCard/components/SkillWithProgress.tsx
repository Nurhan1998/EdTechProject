import { ProgressBar } from 'components/ProgressBar';
import { ISkillsProps } from 'components/UserCard/types';



export const SkillWithProgress = (props: ISkillsProps): JSX.Element => {
  const { text, max, current } = props;
  return (
    <div className="user-card-skillWithProgress">
      <p className="text">{text}</p>
      <ProgressBar current={current} max={max}/>
    </div>
  );
};
