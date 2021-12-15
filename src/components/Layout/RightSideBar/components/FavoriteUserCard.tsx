import { IFavoriteUserCard } from 'components/Layout/RightSideBar/types';
import Heart from 'components/Icons/Heart';


const FavoriteUserCard = ({ name, hskill, sskill, avatar }: IFavoriteUserCard): JSX.Element => (
  <div className="user">
    <span className="user-avatar">
      <img src={avatar} alt="avatar"/>
    </span>
    <div className="user-info">
      <p className="user-info_title">{name}</p>
      <p className="user-info_subtitle">Hard skill <span className="score">{`${hskill}/10`}</span></p>
      <p className="user-info_subtitle">Soft skill <span className="score">{`${sskill/10 * 100}%`}</span></p>
    </div>
    <span className="heart"><Heart filled /></span>
  </div>
);
export default FavoriteUserCard;