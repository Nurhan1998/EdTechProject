import { ProgressBar } from 'components/ProgressBar';

import { IUserCard } from '../types';


const UserCard = ({
  name,
  surName,
  hardSkill,
  statusHardSkill,
  softSkill,
  statusSoftSkill,
  avatar
}:IUserCard):JSX.Element => (
  <div className="user-card_wrapper">
    <div className="user-card_avatar">
      <span>
        <img src={avatar} alt="avatar"/>
        {name.substr(0, 1).toUpperCase()}
        {surName.substr(0, 1).toUpperCase()}
      </span>
    </div>
    <div className="user-card_info">
      <span>
        Hard Skill: {hardSkill}
      </span>
      <ProgressBar max={10} current={statusHardSkill}/>
    </div>
    <div className="user-card_skill">
      <span>
        Soft Skill: {softSkill}
      </span>
      <ProgressBar max={100} current={statusSoftSkill}/>
    </div>
    <div className="user-card_actions">
      <button>
        View profile
      </button>
    </div>
  </div>
);

export default UserCard;
