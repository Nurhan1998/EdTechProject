import { useRef } from 'react';
import cn from 'classnames';

import { getPageRange, generatePaginationItems, IPageItem } from 'utils/pagination';
import { setQuery } from 'utils/urlHelpers';


interface IPaginationProps {
  page: number;
  pageSize: number;
  totalSize: number;
  affectUrl: boolean;
  onPageChange?: (page: number) => void;
}

const Pagination = (props: IPaginationProps): JSX.Element => {
  const {
    pageSize,
    page,
    totalSize,
    affectUrl = true,
    onPageChange,
  } = props;

  const displayDotsRef = useRef<boolean>(true);

  const pageRange: Array<number> = getPageRange(totalSize, pageSize);
  const pageItems: Array<IPageItem> = generatePaginationItems(pageRange, page);

  const handlePageChange = (pageNumber: number) => (): void => {
    if(pageNumber === page) return;
    if (onPageChange) {
      onPageChange(pageNumber);
    }
    if (affectUrl) {
      setQuery({ page: pageNumber.toString() });
    }
  };


  return (
    <div className="pagination">
      <ul className="pagination-container">
        {pageItems.map((item, index) => {
          const { value, isActive } = item;

          if (isActive && typeof  value !== 'string') {
            displayDotsRef.current = true;
            return (
              <li
                key={value}
                className={cn({ selected: page === value })}
                onClick={handlePageChange(value)}
              >
                {value}
              </li>
            );
          }

          if (displayDotsRef.current) {
            displayDotsRef.current = false;
            return (
              <li key={`pageNumber_${index}`} className="break">{value}</li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
