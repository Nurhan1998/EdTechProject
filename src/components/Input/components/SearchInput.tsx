import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

import Search from 'components/Icons/Search';

export const SearchInput = (inputProps: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  const { type, className } = inputProps;
  return (
    <>
      <span className="search-icon"><Search/></span>
      <input
        {...inputProps}
        className={cn('input-wrapper_search', className)}
        type={type}
      />
    </>
  );
};
