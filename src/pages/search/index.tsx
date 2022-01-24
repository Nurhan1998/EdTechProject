import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Input from 'components/Input';
import Preloader from 'components/Preloader';

import { UsersList } from 'pages/search/components/UsersList';

import { makeSelectUsersListData, makeSelectUsersListFetching } from 'store/users/selectors';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';
import { getUsersBySearchRequest } from 'store/users/actions';

const SearchStudent = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);
  const isUsersLoading = useSelector(makeSelectUsersListFetching);
  const [searchData, setSearchData] = useState('');

  const handleSearch = (): void => {
    dispatch(getUsersBySearchRequest({ name: searchData }));
  };

  useEffect(() => {
    dispatch(getSoftSkillsRequest());
    dispatch(getHardSkillsRequest());
    dispatch(getUsersBySearchRequest({ name: searchData }));
    //no need to call this if state changed
    // eslint-disable-next-line
  },[dispatch]);

  return (
    <div className="search-page">
      <div className="search-page_container">
        <div className="head">
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
          {isUsersLoading ? (
            <Preloader/>
          ) : (
            <UsersList users={users}/> 
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchStudent;
