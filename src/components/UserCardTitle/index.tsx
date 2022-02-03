import CalendarWithPen from 'components/Icons/CalendarWithPen';
import VideoChat from 'components/Icons/VideoChat';
import Heart from 'components/Icons/Heart';
import RightArrows from 'components/Icons/RightArrows';

interface IUserCardTitle {
  text?: string;
  isMobile?: boolean;
  onArrowsClick?: () => void
  withIcons?: boolean;
  likesCount?: number;
  onCalendarClick?: () => void;
  onVideoChatClick?: () => void;
}

const Title = (props: IUserCardTitle): JSX.Element => {
  const {
    text,
    likesCount,
    isMobile,
    onVideoChatClick,
    onCalendarClick,
    onArrowsClick,
    withIcons
  } = props;

  return (
    <div className="user-card-title">
      <p className="title">{text}</p>
      <div className="icons">
        {!isMobile && withIcons && (
          <span onClick={onCalendarClick}>
            <CalendarWithPen/>
          </span>)}
        {!isMobile && withIcons && (
          <span onClick={onVideoChatClick}>
            <VideoChat/>
          </span>
        )}
        <div className="d-flex-centered">
          <Heart filled/>
          <p className="text-red">{`(${likesCount || 12})`}</p>
        </div>
      </div>
      {isMobile && (
        <span onClick={onArrowsClick}>
          <RightArrows color="#49A057"/>
        </span>
      )}
    </div>
  );
};

export default Title;
