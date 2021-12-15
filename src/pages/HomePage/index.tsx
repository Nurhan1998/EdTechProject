import Layout from 'components/Layout';

import Banner from 'pages/HomePage/components/Banner';
import TitleContent from 'pages/HomePage/components/TitleContent';

import Actions from './components/Actions';
import List from './components/List';


const HomePage = (): JSX.Element => {
  const number = 132;
  return (
    <Layout pageClassName="home-page">
      <Banner/>
      <div className="main-content">
        <div className="main-content_header">
          <TitleContent count={number}/>
          <Actions/>
        </div>
        <List/>
      </div>
    </Layout>
  );
};

export default HomePage;
