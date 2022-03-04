import { DEFAULT_AVATAR } from 'configuration/constants';

import CalendarWithPen from 'components/Icons/CalendarWithPen';
import VideoChat from 'components/Icons/VideoChat';

export interface IAvatarProps {
  photoUrl?: string;
  withIcons: boolean;
  leftIconAction?: () => void;
  rightIconAction?: () => void;
}

const UserCardAvatar = (props: IAvatarProps): JSX.Element => {
  const { withIcons, rightIconAction, leftIconAction, photoUrl } = props;
  return (
    <div className="userAvatar">
      <span className="img-wrapper">
        <img
          src={photoUrl || DEFAULT_AVATAR}
          alt="avatar"
        />
      </span>
      {withIcons && (
        <div className="avatar-footer">
          <span
            onClick={leftIconAction}
          >
            <CalendarWithPen/>
          </span>
          <span
            onClick={rightIconAction}>
            <VideoChat/>
          </span>
        </div>
      )}
    </div>
  );
};

export default UserCardAvatar;
