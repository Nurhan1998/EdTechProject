import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import { DEFAULT_PAGE_SIZE } from 'configuration/constants';

import Layout from 'components/Layout';
import Preloader from 'components/Preloader';
import Pagination from 'components/Pagination';

import TitleContent from 'pages/HomePage/components/TitleContent';
import Banner from 'pages/HomePage/components/Banner';
import { Favorites } from 'pages/HomePage/components/Favorites';

import { makeSelectUsersListCount, makeSelectUsersListData, makeSelectUsersListFetching } from 'store/users/selectors';
import { getUsersListRequest } from 'store/users/actions';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => {
  const router = useRouter();
  const { page } = router.query;
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);
  const usersCount = useSelector(makeSelectUsersListCount);
  const isUsersLoading = useSelector(makeSelectUsersListFetching);
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);

  useEffect(() => {
    if(page && !Array.isArray(page)) {
      setCurrentPage(parseInt(page));
    }
  }, [page]);

  useEffect(() => {
    dispatch(getUsersListRequest({
      page: isEmpty(page) ? 1 : currentPage,
    }));
    // dispatch
    // eslint-disable-next-line
  },[currentPage, page]);

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
