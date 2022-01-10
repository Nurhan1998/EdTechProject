import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

import Search from 'components/Icons/Search';

export const SearchInput = (inputProps: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  const { type, className } = inputProps;
  return (
    <div className="search-wrapper">
      <span className="search-icon"><Search/></span>
      <input
        {...inputProps}
        className={cn('search-input', className)}
        type={type}
      />
    </div>
  );
};
