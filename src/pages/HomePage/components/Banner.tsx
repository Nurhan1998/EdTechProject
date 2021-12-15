import { useState } from 'react';

import CrossLines from 'components/Icons/CrossLines';

const Banner = (): JSX.Element => {
  const [visible, setVisible] = useState(true);

  const handleClose = (): void => {
    setVisible(false);
  };
  return (
    <div className="banner-wrapper" style={{ display: visible ? 'static' : 'none' }}>
      <span className="hide-button" onClick={handleClose}><CrossLines/></span>
      <div className="cards-wrapper">

      </div>
    </div>
  );

};

export default  Banner;