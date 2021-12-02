import Select from 'components/Select';

import { langBaseExample, locationBaseExample, socialBaseExample } from '../../../mocks/baseExample';



const Actions = (): JSX.Element => (
  <div className="home-page_actions__wrapper">
    <Select
      options={socialBaseExample}
      label="Search by hard skill"
      className="home-page_actions__item"
    />
    <Select
      options={locationBaseExample}
      label="Search by location"
      className="home-page_actions__item"
    />
    <Select
      options={langBaseExample}
      label="Search by language"
      className="home-page_actions__item"
    />
  </div>
);

export default Actions;
