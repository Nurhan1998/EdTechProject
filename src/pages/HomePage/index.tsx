import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { DEFAULT_PAGE_SIZE } from 'configuration/constants';

import Layout from 'components/Layout';
import Preloader from 'components/Preloader';
import Pagination from 'components/MostPagination';

import Banner from 'pages/HomePage/components/Banner';
import TitleContent from 'pages/HomePage/components/TitleContent';
import { Favorites } from 'pages/HomePage/components/Favorites';

import { getUsersListRequest } from 'store/users/actions';
import { makeSelectUsersListCount, makeSelectUsersListData, makeSelectUsersListFetching } from 'store/users/selectors';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);
  const count = useSelector(makeSelectUsersListCount);
  console.log(count);
  const isUsersLoading = useSelector(makeSelectUsersListFetching);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getSoftSkillsRequest());
    dispatch(getHardSkillsRequest());
    dispatch(getUsersListRequest({ page, onpage: DEFAULT_PAGE_SIZE }));
  },[dispatch]);

  const number = 132;
  return (
    <Layout pageClassName="home-page">
      <Banner/>
      <Favorites/>
      <div className="main-content">
        <div className="main-content_header">
          <TitleContent count={number}/>
          <Actions/>
        </div>
        {isUsersLoading ? <Preloader/> : <div>
          <List users={users}/>
          <Pagination page={page} setPage={setPage}/>
        </div>
        }
      </div>
    </Layout>
  );
};

export default HomePage;
