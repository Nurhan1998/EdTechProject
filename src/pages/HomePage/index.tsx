import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Layout from 'components/Layout';

import Banner from 'pages/HomePage/components/Banner';
import TitleContent from 'pages/HomePage/components/TitleContent';
import { Favorites } from 'pages/HomePage/components/Favorites';

import { getUsersListRequest } from 'store/users/actions';
import { makeSelectUsersListData } from 'store/users/selectors';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsersListData);

  useEffect(() => {
    dispatch(getUsersListRequest());
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
        <List users={users}/>
      </div>
    </Layout>
  );
};

export default HomePage;
