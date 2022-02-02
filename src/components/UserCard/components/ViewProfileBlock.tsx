import RightArrows from 'components/Icons/RightArrows';
import { IViewProfile } from 'components/UserCard/types';

export const ViewProfileBlock = (props: IViewProfile): JSX.Element => {
  const { text, onArrowsClick, isMobile } = props;


  return isMobile ? (
    <RightArrows color="#49A057"/>
  ) : (
    <div className="user-card-viewProfile" onClick={onArrowsClick}>
      <p className="title">{text}</p>
      <RightArrows color="#49A057"/>
    </div>
  );
};
