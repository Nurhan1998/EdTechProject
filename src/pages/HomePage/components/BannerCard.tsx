import { FC } from 'react';
import cn from 'classnames';

import { ECardColors, TBannerCardProps } from 'pages/HomePage/types';


export const BannerCard: FC<TBannerCardProps> = ({ content, centerText, headerText, color, classPrefix }) => {
  const secondBlockClass = color === ECardColors.VIOLETTE ? '_block' : '_checkedBlock';
  const thirdBlockClass = color === ECardColors.GREEN ? '_checkedBlock' : '_block';
  return (
    <li className={`${classPrefix}__card-wrapper`}>
      <div className={cn(`${classPrefix}__card`, `${classPrefix}__card-${color}`)}>
        <p className={`${classPrefix}__card-headerText`}>
          {headerText}
        </p>
        <div className={`${classPrefix}__card-centerText`}>
          {centerText}
        </div>
        <p className={`${classPrefix}__card-contentWrapper`}>
          {content}
        </p>
        <div className={`${classPrefix}__card-footerBlocksWrapper`}>
          <div
            className={`${classPrefix}__card-footerBlocksWrapper_checkedBlock`}/>
          <div
            className={`${classPrefix}__card-footerBlocksWrapper${secondBlockClass}`}/>
          <div
            className={`${classPrefix}__card-footerBlocksWrapper${thirdBlockClass}`}/>
        </div>
      </div>
    </li>
  );
};
