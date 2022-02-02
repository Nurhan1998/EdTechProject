import { ISkillsProps } from 'components/UserCard/types';

export const SkillsAverage = (props: ISkillsProps): JSX.Element => {
  const { max, current, text, isMobile } = props;
  return (
    <div className="user-card-skillsAverage">
      <p className="text">{text}</p>
      {!isMobile && (
        <>
          <p className="text">
            Average index:<span>&nbsp;{`${current}/${max}`}</span>
          </p>
        </>
      )}
      {isMobile && <span>&nbsp;{`${current}/${max}`}</span>}
    </div>
  );
};
