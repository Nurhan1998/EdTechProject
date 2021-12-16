import { useState } from 'react';

import CrossLines from 'components/Icons/CrossLines';

import { BannerCard } from 'pages/HomePage/components/BanerCard';

import { bannerCards } from '../../../mocks/bannerCards';

const Banner = (): JSX.Element => {
  const [visible, setVisible] = useState(true);

  const handleClose = (): void => {
    setVisible(false);
  };
  return (
    <div className="banner-wrapper" style={{ display: visible ? 'static' : 'none' }}>
      <span className="hide-button" onClick={handleClose}><CrossLines/></span>
      <div className="cards-wrapper">
        {bannerCards.map((item, idx) => (
          <BannerCard key={idx} text={item.text} count={item.count} content={item.content}/>
        ))}
      </div>
    </div>
  );

};

export default  Banner;