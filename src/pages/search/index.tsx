import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { DEFAULT_PAGE_SIZE } from 'configuration/constants';

import Input from 'components/Input';
import Preloader from 'components/Preloader';
import Pagination from 'components/Pagination';

import { UsersList } from 'pages/search/components/UsersList';

import { makeSelectUsersListCount, makeSelectUsersListData, makeSelectUsersListFetching } from 'store/users/selectors';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';
import { getUsersBySearchRequest } from 'store/users/actions';

import { setQuery } from 'utils/urlHelpers';


const SearchStudent = (): JSX.Element => {
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);
  const usersCount = useSelector(makeSelectUsersListCount);
  const isUsersLoading = useSelector(makeSelectUsersListFetching);
  const [searchData, setSearchData] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);

  useEffect(() => {
    if(page && !Array.isArray(page)) {
      setCurrentPage(parseInt(page));
    }
  }, [page]);

  useEffect(() => {
    dispatch(getSoftSkillsRequest());
    dispatch(getHardSkillsRequest());
    //no need to call this if state changed
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    dispatch(getUsersBySearchRequest({
      name: searchData,
      page: currentPage,
    }));
    // dispatch
    // eslint-disable-next-line
  },[currentPage, page]);

  const handleSearch = (): void => {
    setQuery({ page: '1' });
    dispatch(getUsersBySearchRequest({
      name: searchData,
      page: currentPage,
    }));
  };

  return (
    <div className="search-page">
      <div className="search-page_container">
        {isUsersLoading ? (
          <Preloader/>
        ) : (
          <>
            <div className="head">
              <div className="hints">
                <p>Наша фирма ищет человека, который...</p>
                <p>Найдено {usersCount} профилей</p>
              </div>
              <Input
                inputProps={{
                  type: 'search',
                  color: 'white',
                  value: searchData,
                  onChange: e => setSearchData(e.target.value)
                }}
                onButtonClick={handleSearch}
              />
            </div>
            <div className="body">
              <UsersList users={users}/>
            </div>
            <Pagination
              page={currentPage}
              pageSize={DEFAULT_PAGE_SIZE}
              totalSize={usersCount}
              affectUrl
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchStudent;
