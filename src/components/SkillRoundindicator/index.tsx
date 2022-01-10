import { CircularProgressbar } from 'react-circular-progressbar';


export interface ISkillRoundIndicatorProps {
  isExcellent?: boolean;
  percent: number;
  title: string;
  subtitle: string;
}

const SkillRoundIndicator = ({ isExcellent, percent, title, subtitle }:ISkillRoundIndicatorProps): JSX.Element => {
  const indicator = percent/10 * 100;
  return (
    <div className="indicator_wrapper">
      <div className="icon_wrapper">
        <CircularProgressbar
          styles={{ path: { stroke: 'url(#5BC9C1 , #337CF6)' } }}
          value={indicator}
        />
        {isExcellent ? <span className="excellent"/> : <span className="great"/>}
      </div>
      <div className="text_wrapper">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};
export default SkillRoundIndicator;
