import { useSelector } from 'react-redux';

import { DEFAULT_AVATAR } from 'configuration/constants';

import { ProgressBar } from 'components/ProgressBar';
import CalendarWithPen from 'components/Icons/CalendarWithPen';
import VideoChat from 'components/Icons/VideoChat';
import Heart from 'components/Icons/Heart';
import RightArrows from 'components/Icons/RightArrows';

import { IUsersListResponseData } from 'store/users/types';
import { makeSelectHardSkillsData, makeSelectSoftSkillsData } from 'store/skills/selectors';


const Card = ({
  firstname,
  photo,
  hskills,
  skills,
}: Partial<IUsersListResponseData>):JSX.Element => {
  const hardSkillsData = useSelector(makeSelectHardSkillsData);
  const softSkillsData = useSelector(makeSelectSoftSkillsData);
  const formattedHSkills = hardSkillsData?.slice(0, 1);
  const formattedSoftSkills = softSkillsData?.slice(0, 2);
  return (
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
              <div className="d-flex-centered">
                <Heart filled/>
                <p className="text-red">{`(${12})`}</p>
              </div>
            </div>
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
          {formattedSoftSkills?.map(item => (
            <div key={item.id} className="data_content">
              <ProgressBar
                width={120}
                color={'#FFCE55'}
                className="grade"
                title={item.name}
                current={8}
                max={10}
              />
            </div>
          ))}
        </div>
        <div className="data">
          <div className="data_content">
            <p className="text-grey">Hard skills</p>
            <p className="text-grey">
              Average index:<span className="text-bold">&nbsp;{`${hskills?.[0]?.value || 10}/10`}</span>
            </p>
          </div>
          {formattedHSkills?.map(item => (
            <div key={item.id} className="data_content">
              <ProgressBar
                width={126}
                color={'#50C0E8'}
                className="grade"
                title={item.name}
                current={7}
                max={10}
              />
            </div>
          ))}
          <div className="data_right-head">
            <p className="title">View profile</p>
            <RightArrows color="#49A057"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
