import { photos } from 'mocks/photos';

import MostBell from 'components/Icons/Header/MostBell';


const Profile = (): JSX.Element => {
  const name = 'Super';
  const surName = 'Investor';
  const imagePath = photos[0].src;
  return (
    <div className="header_profile__inner-wrapper" >
      <div className="d-flex-centered">
        <div className="header_profile__icon">
          {imagePath ? <img src={imagePath} alt="avatar"/> : (
            <>
              {name.substr(0, 1).toUpperCase()}
              {surName.substr(0, 1).toUpperCase()}
            </>
          )}
        </div>
        <div className="header_profile__title">
          <span>Hello,&nbsp;</span>
          {name}&nbsp;
          {surName}
        </div>
        <MostBell/>
      </div>
    </div>
  );
};

export default Profile;
