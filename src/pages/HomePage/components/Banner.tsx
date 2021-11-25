import { useState } from 'react';

import { BannerCard } from 'pages/HomePage/components/BannerCard';
import { ECardColors } from 'pages/HomePage/types';


const Banner = (): JSX.Element => {
  const [bannersState, setBannersState] = useState<string>('flex');
  const handleClose = (): void => setBannersState('none');

  return (
    <div className={`home-page_banner_${bannersState}`}>
      <button className="home-page_banner__close-button" onClick={handleClose}/>
      <ol className="home-page_banner__cards-wrapper">
        <BannerCard
          headerText="1st Step"
          centerText="PICK"
          content={
            <span>
              <span className="displayBlock">Pick&nbsp;
                <span className="home-page_banner__card-cw_content">Profession</span>&nbsp;and
              </span>
              <span className="home-page_banner__card-cw_content">
                Hard skill
              </span>
            </span>
          }
          color={ECardColors.VIOLETTE}
        />
        <BannerCard
          color={ECardColors.BLUE}
          headerText="2nd Step"
          centerText="VIEW"
          content={
            <span>
              <span className="displayBlock">Next click&nbsp;
                <span className="home-page_banner__card-cw_content">View Profile</span>

              </span> near suitable
              candidate
            </span>
          }
        />
        <BannerCard
          headerText="3rd Step"
          centerText="SEND"
          content={
            <span>
              <span className="displayBlock">On profile page click</span>
              <span className="home-page_banner__card-cw_content">Send Request</span>
              <span className="displayBlock">
                and wait for the response in
              </span>
              <span className="home-page_banner__card-cw_content">Chat</span>
            </span>
          }
          color={ECardColors.GREEN}
        />
      </ol>
    </div>
  );
};
export default Banner;
