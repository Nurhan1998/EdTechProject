import { photos } from 'mocks/photos';

import ArrowDown from 'components/Icons/ArrowDown';
import RightArrows from 'components/Icons/RightArrows';

export const Favorites = (): JSX.Element => {
  const number = 15;
  return (
    <div className="home-page_favorites">
      <div className="home-page_favorites__actions">
        <div className="d-flex-centered">
          <ArrowDown/>
          <p className="title">Favorite candidates</p>
        </div>
        <p>View all</p>
      </div>
      <div className="home-page_favorites__content">
        <div className="text_container">
          <p>Social Media Marketing</p>
          <span>{`(${number})`}</span>
        </div>
        <div className="photos_container">
          <div className="photos">
            {photos.map(({ src }, idx)=> (
              <img key={idx} src={src} style={{ left: `${(idx+1)*16}px`, zIndex: `${idx+1}` }}/>
            ))}
          </div>
          <RightArrows color="#49A057"/>
        </div>
      </div>
    </div>
  );
};
