interface ISkillsAverage {
  text?: string;
  isMobile?: boolean;
  isPercent?: boolean;
  current: number;
  max: number
}

const SkillsAverageItem = (props: ISkillsAverage): JSX.Element => {
  const { max, current, text, isMobile, isPercent } = props;
  const value = isPercent ? `${current / max * 100}%` : `${current}/${max}`;

  return (
    <div className="skillsAverageItem">
      <p className="text">{text}</p>
      {!isMobile && (
        <>
          <p className="text">
            Average index:<span>&nbsp;{value}</span>
          </p>
        </>
      )}
      {isMobile && <span>&nbsp;{value}</span>}
    </div>
  );
};

export default SkillsAverageItem;
