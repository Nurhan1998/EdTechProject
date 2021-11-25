import { FC } from 'react';
import cn from 'classnames';

import { ECardColors, TBannerCardProps } from 'pages/HomePage/types';


export const BannerCard: FC<TBannerCardProps> = ({ content, centerText, headerText, color }) => {
  const secondBlockClass = color === ECardColors.VIOLETTE ? '_block' : '_checked';
  const thirdBlockClass = color === ECardColors.GREEN ? '_checked' : '_block';
  return (
    <li className="home-page_banner__card-wrapper">
      <div className={cn('home-page_banner__card', `home-page_banner__card-${color}`)}>
        <p className="home-page_banner__card-headerText">
          {headerText}
        </p>
        <div className="home-page_banner__card-centerText">
          {centerText}
        </div>
        <p className="home-page_banner__card-cw">
          {content}
        </p>
        <div className="home-page_banner__card-footerW">
          <div
            className="home-page_banner__card-footerW_checked"/>
          <div
            className={`home-page_banner__card-footerW${secondBlockClass}`}/>
          <div
            className={`home-page_banner__card-footerW${thirdBlockClass}`}/>
        </div>
      </div>
    </li>
  );
};
