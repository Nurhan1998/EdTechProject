import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import CrossLines from 'components/Icons/CrossLines';

import { BannerCard } from 'pages/HomePage/components/BanerCard';


const Banner = (): JSX.Element => {
  const [visible, setVisible] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const handleClose = (): void => {
    setVisible(false);
  };

  return (
    <div className="banner-wrapper" style={{ display: visible ? 'static' : 'none' }}>
      <span className="hide-button" onClick={handleClose}><CrossLines/></span>
      <div className="cards-wrapper">
        <BannerCard
          text="PICK"
          count={1}
          content={
            <>
              <span className={isMobile ? '' : 'd-block'}>Pick <span className="dedicated">Professions</span></span>
              <span className={isMobile ? '' : 'd-block'}> and <span className="dedicated">Hard skill</span></span>
            </>}
        />
        <BannerCard
          text="VIEW"
          count={2}
          content={
            <>
              <span className={isMobile ? '' : 'd-block'}>
                Next click <span className="dedicated">View Profile&nbsp;</span>
              </span>
              <span className={isMobile ? '' : 'd-block'}>near suitable candidate</span>
            </>
          }
        />
        <BannerCard
          text="SEND"
          count={3}
          content={
            <>
              <span className={isMobile ? '' : 'd-block'}>
                On profile page click <span className="dedicated">Send Request&nbsp;</span>
              </span>
              <span className={isMobile ? '' : 'd-block'}>
                and wait for the response in <span className="dedicated">Chat</span>
              </span>
            </>
          }
        />
      </div>
    </div>
  );

};

export default  Banner;
