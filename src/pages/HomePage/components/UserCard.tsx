import { ProgressBar } from 'components/ProgressBar';
import CalendarWithPen from 'components/Icons/CalendarWithPen';
import VideoChat from 'components/Icons/VideoChat';
import Heart from 'components/Icons/Heart';
import RightArrows from 'components/Icons/RightArrows';

import { IUserCard } from '../types';


const UserCard = ({
  name,
  likesCount,
  surName,
  hardSkill,
  softSkill,
  avatar,
  skillName,
  progressbarColor,
}:IUserCard):JSX.Element => (
  <div className="user-card_wrapper">
    <div className="user-card_avatar">
      <span>
        <img src={avatar} alt="avatar"/>
      </span>
    </div>
    <div className="user-card_info">
      <div className="data">
        <div className="data_head">
          <p className="title">{`${name} ${surName}`}</p>
          <div className="icons">
            <CalendarWithPen/>
            <VideoChat/>
            <Heart filled/>
            <p className="text-red">{`(${likesCount||12})`}</p>
          </div>
        </div>
        <div className="data_content">
          <p className="text-grey">Hard skills</p>
          <p className="text-grey">Average index:<span className="text-bold">&nbsp;{`${hardSkill}/10`}</span></p>
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
              &nbsp;{`${softSkill / 10 * 100}%`}
            </span>
          </p>
        </div>
        <div className="data_content">
          <p className="text-grey">{skillName}</p>
          <ProgressBar current={9} max={10} color={progressbarColor}/>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
