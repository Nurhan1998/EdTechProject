import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { DEFAULT_PAGE_SIZE } from 'configuration/constants';

import Layout from 'components/Layout';
import Preloader from 'components/Preloader';
import Pagination from 'components/Pagination';

import Banner from 'pages/HomePage/components/Banner';
import TitleContent from 'pages/HomePage/components/TitleContent';
import { Favorites } from 'pages/HomePage/components/Favorites';

import { getUsersListRequest } from 'store/users/actions';
import { makeSelectUsersListCount, makeSelectUsersListData, makeSelectUsersListFetching } from 'store/users/selectors';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';

import { getQuery } from 'utils/urlHelpers';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => {
  const query = getQuery();
  const { page } = query;
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);
  const usersCount = useSelector(makeSelectUsersListCount);
  const isUsersLoading = useSelector(makeSelectUsersListFetching);
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);

  useEffect(() => {
    if(query.page && !Array.isArray(query.page)) {
      setCurrentPage(parseInt(query?.page));
    }
  }, [query]);

  useEffect(() => {
    dispatch(getUsersListRequest({
      page: isEmpty(query) ? 1 : currentPage,
    }));
    // dispatch
    // eslint-disable-next-line
  },[currentPage, query]);

  useEffect(() => {
    dispatch(getSoftSkillsRequest());
    dispatch(getHardSkillsRequest());
    //need to call this only at first render
    //eslint-disable-next-line
  }, []);


  return (
    <Layout pageClassName="home-page">
      <Banner/>
      <Favorites/>
      <div className="main-content">
        <div className="main-content_header">
          <TitleContent count={usersCount}/>
          <Actions/>
        </div>
        {isUsersLoading ? (
          <Preloader/>
        ) : (
          <div>
            <List users={users}/>
          </div>
        )}
      </div>
      <Pagination
        page={currentPage}
        totalSize={usersCount}
        pageSize={DEFAULT_PAGE_SIZE}
        affectUrl
      />
    </Layout>
  );
};

export default HomePage;
