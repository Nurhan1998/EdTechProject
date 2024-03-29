import FavoriteUserCard from 'components/Layout/RightSideBar/components/FavoriteUserCard';
import Heart from 'components/Icons/Heart';
import RightArrows from 'components/Icons/RightArrows';

const RightSideBar = (): JSX.Element => {
  const number = 15;
  return (
    <div className="right-sidebar">
      <div className="right-sidebar_inner">
        <div className="title-wrapper">
          <span><Heart height={16} width={18} stroke="#000000" /></span>
          <p className="title">Favorite Candidates</p>
        </div>
        <div className="subtitle-wrapper">
          <p>{`Social Media Marketing (${number})`}</p>
          <span><RightArrows/></span>
        </div>
        <div>
          <FavoriteUserCard avatar="https://i.pravatar.cc/300?img=11" name={'Catrina'} hskill={10} sskill={10} />
          <FavoriteUserCard avatar="https://i.pravatar.cc/300?img=11" name={'Catrina'} hskill={10} sskill={10} />
        </div>
        <button>View all</button>
      </div>
    </div>
  );
};
export default RightSideBar;
