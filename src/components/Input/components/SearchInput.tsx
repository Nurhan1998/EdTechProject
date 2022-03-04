import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

import Search from 'components/Icons/Search';
import WhiteSearch from 'components/Icons/Search/whiteSearch';

interface ISearch {
  inputProps: InputHTMLAttributes<HTMLInputElement>,
  onButtonClick?: () => void
}

export const SearchInput = ({
  inputProps,
  onButtonClick
}: ISearch): JSX.Element => {
  const { className, color } = inputProps;
  return (
    <div className="search-wrapper">
      <span onClick={onButtonClick} className="search-icon">{color === 'white' ? <WhiteSearch/> : <Search/>}</span>
      <input
        {...inputProps}
        className={cn('search-input', className)}
      />
    </div>
  );
};
