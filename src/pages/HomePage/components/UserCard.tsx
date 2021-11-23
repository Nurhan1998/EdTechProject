import { IUserCard } from "../types";


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
      <div className="user-card_status__wrapper">
        <span className="user-card_status__text">
          {statusHardSkill} / 100
        </span>
        <span className="user-card_status__inner-wrapper" style={{width: `${statusHardSkill}0%`}} />
      </div>
    </div>
    <div className="user-card_skill">
      <span>
        Soft Skill: {softSkill}
      </span>
      <div className="user-card_status__wrapper">
        <span className="user-card_status__text">
          {statusSoftSkill} / 100
        </span>
        <span className="user-card_status__inner-wrapper" style={{width: `${statusSoftSkill}%`}} />
      </div>
    </div>
    <div className="user-card_actions">
      <button>
        View profile
      </button>
    </div>
  </div>
);

export default UserCard;
