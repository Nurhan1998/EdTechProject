import ReactPaginte from 'react-paginate';

import { IPaginationProps } from 'components/MostPagination/types';

const MostPagination = ({ page,setPage }: IPaginationProps): JSX.Element => {
  const handleChange = (selectedItem: { selected: number}) => {
    setPage(selectedItem.selected);
  };

  return (
    <div className="pagination">
      <div>
        <ReactPaginte
          pageCount={20}
          forcePage={page}
          onPageChange={handleChange}
          containerClassName={'pagination-container'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          activeClassName={'pagination__link--active'}
        />
      </div>
    </div>
  );
};

export default MostPagination;
