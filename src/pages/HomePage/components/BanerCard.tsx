import { useMediaQuery } from 'react-responsive';

import { IBannerCardProps } from 'pages/HomePage/types';


export const BannerCard = ({ count, content, text }: IBannerCardProps): JSX.Element =>{
  const isMobile = useMediaQuery({ query: 'max-width(375px)' });
  return (
    <div className="card">
      <div className={isMobile ? 'd-flex-centered' : ''}>
        <span className="count">{count}</span>
        <span className="text">{text}</span>
      </div>
      <div className="card-body">
        {content}
      </div>
    </div>
  );
};
