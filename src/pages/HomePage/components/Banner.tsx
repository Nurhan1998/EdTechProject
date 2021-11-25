import { useState } from 'react';

import { BannerCard } from 'pages/HomePage/components/BannerCard';
import { ECardColors } from 'pages/HomePage/types';


const Banner = (): JSX.Element => {
  const classPrefix = 'home-page_banner';
  const [bannersState, setBannersState] = useState<string>('flex');
  const handleClose = (): void => setBannersState('none');

  const formatClassName = (selector = ''): string => selector ? `${classPrefix}_${selector}` : classPrefix;

  return (
    <div className={formatClassName(bannersState)}>
      <button className={formatClassName('_close-button')} onClick={handleClose}/>
      <ol className={formatClassName('_cards-wrapper')}>
        <BannerCard
          headerText="1st Step"
          centerText="PICK"
          content={
            <span>
              <span className={formatClassName('displayBlock')}>Pick&nbsp;
                <span className={formatClassName('_card-contentWrapper_content')}>Profession</span>&nbsp;and
              </span>
              <span className={formatClassName('_card-contentWrapper_content')}>
                Hard skill
              </span>
            </span>
          }
          color={ECardColors.VIOLETTE}
          classPrefix={classPrefix}
        />
        <BannerCard
          color={ECardColors.BLUE}
          classPrefix={classPrefix}
          headerText="2nd Step"
          centerText="VIEW"
          content={
            <span>
              <span className={formatClassName('displayBlock')}>Next click&nbsp;
                <span className={formatClassName('_card-contentWrapper_content')}>View Profile</span>
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
              <span className={formatClassName('displayBlock')}>On profile page click</span>
              <span className={formatClassName('_card-contentWrapper_content')}>Send Request</span>
              <span className={formatClassName('displayBlock')}>
                and wait for the response in
              </span>
              <span className={formatClassName('_card-contentWrapper_content')}>Chat</span>
            </span>
          }
          color={ECardColors.GREEN}
          classPrefix={classPrefix}
        />
      </ol>
    </div>
  );
};
export default Banner;
