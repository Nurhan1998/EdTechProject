import { DEFAULT_AVATAR } from 'configuration/constants';

import { ProgressBar } from 'components/ProgressBar';
import CalendarWithPen from 'components/Icons/CalendarWithPen';
import VideoChat from 'components/Icons/VideoChat';
import Heart from 'components/Icons/Heart';
import RightArrows from 'components/Icons/RightArrows';

import { IUsersListResponseData } from 'store/users/types';



const UserCard = ({
  firstname,
  photo,
  hskills,
  skills
}: Partial<IUsersListResponseData>):JSX.Element => (
  <div className="user-card_wrapper">
    <div className="user-card_avatar">
      <span>
        <img
          src={photo || DEFAULT_AVATAR}
          alt="avatar"
        />
      </span>
      <div className="user-card_avatar__footer">
        <CalendarWithPen/>
        <VideoChat/>
      </div>
    </div>
    <div className="user-card_info">
      <div className="data">
        <div className="data_head">
          <p className="title">{firstname}</p>
          <div className="icons">
            <span className="icons_invisible">
              <CalendarWithPen/>
            </span>
            <span className="icons_invisible">
              <VideoChat/>
            </span>
            <div className="d-flex-centered">
              <Heart filled/>
              <p className="text-red">{`(${12})`}</p>
            </div>
            <span className="icons_visible">
              <RightArrows color="#49A057"/>
            </span>
          </div>
        </div>
        <div className="data_content">
          <p className="text-grey">Hard skills</p>
          <p className="text-grey">
            Average index:<span className="text-bold">&nbsp;{`${hskills?.length || 9}/10`}</span>
          </p>
        </div>
        <div className="data_content">
          <p className="text-grey">FaceBook</p>
          <ProgressBar current={9} max={10}/>
        </div>
      </div>
      <div className="data">
        <div className="data_right-head">
          <p className="title">View profile</p>
          <RightArrows color="#49A057"/>
        </div>
        <div className="data_content">
          <p className="text-grey">Soft skills</p>
          <p className="text-grey">
            Average index:
            <span className="text-bold">
              &nbsp;{`${skills?.length || 8 / 10 * 100}%`}
            </span>
          </p>
        </div>
        <div className="data_content">
          <p className="text-grey">Facebook</p>
          <ProgressBar current={83} max={100} color="#FFCD54"/>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
