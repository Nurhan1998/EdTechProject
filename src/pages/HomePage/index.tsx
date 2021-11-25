import Layout from 'components/Layout';

import Banner from 'pages/HomePage/components/Banner';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => (
  <Layout pageClassName="home-page_wrapper">
    <Banner />
    <Actions />
    <List />
  </Layout>
);

export default HomePage;
