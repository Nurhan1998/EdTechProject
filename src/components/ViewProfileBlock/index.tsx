import RightArrows from 'components/Icons/RightArrows';

interface IViewProfile {
  text?: string;
  onArrowsClick?: () => void;
  isMobile?: boolean
}

const ViewProfileBlock = (props: IViewProfile): JSX.Element => {
  const { text, onArrowsClick, isMobile } = props;

  return isMobile ? (
    <RightArrows color="#49A057"/>
  ) : (
    <div className="viewProfileBlock" onClick={onArrowsClick}>
      <p className="title">{text}</p>
      <RightArrows color="#49A057"/>
    </div>
  );
};

export default ViewProfileBlock;
