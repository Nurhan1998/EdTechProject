import { useState } from 'react';
import Pagination from 'rc-pagination';

import { IPaginationProps } from 'components/MostPagination/types';

const MostPagination = ({ page }: IPaginationProps): JSX.Element => {
  const [current, setCurrent] = useState(page);
  const handleChange = (number: number) => {
    setCurrent(number);
  };

  return (
    <div className="pagination">
      <div>
        <Pagination onChange={handleChange} current={current} />
      </div>
    </div>
  );
};

export default MostPagination;
