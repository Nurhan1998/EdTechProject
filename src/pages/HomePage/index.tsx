import Layout from 'components/Layout';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => (
  <Layout pageClassName="home-page_wrapper">
    <Actions/>
    <List/>
  </Layout>
);

export default HomePage;
