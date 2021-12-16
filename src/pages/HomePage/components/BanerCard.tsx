import { IBannerCardProps } from 'pages/HomePage/types';


export const BannerCard = ({ count, content, text }: IBannerCardProps): JSX.Element => (
  <div className="card">
    <div>
      <span className="count">{count}</span>
      <span className="text">{text}</span>
    </div>
    <div className="card-body">
      {content}
    </div>
  </div>
);
