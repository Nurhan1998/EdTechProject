import { ProgressBar } from 'components/ProgressBar';

interface ISkillWithProgress {
  text?: string;
  current: number;
  max: number
}

const SkillWithProgress = (props: ISkillWithProgress): JSX.Element => {
  const { text, max, current } = props;
  return (
    <div className="skillWithProgress">
      <p className="text">{text}</p>
      <ProgressBar current={current} max={max}/>
    </div>
  );
};

export default SkillWithProgress;
