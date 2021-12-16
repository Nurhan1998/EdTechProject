import { langBaseExample, locationBaseExample, professions, socialBaseExample } from 'mocks/baseExample';

import Select from 'components/Select';


const Actions = (): JSX.Element => (
  <div className="home-page_actions__wrapper">
    <Select
      label="Profession"
      options={professions}
      className="home-page_actions__item"
    />
    <Select
      options={socialBaseExample}
      label="Hard skill"
      className="home-page_actions__item"
    />
    <Select
      options={locationBaseExample}
      label="Location"
      className="home-page_actions__item"
    />
    <Select
      options={langBaseExample}
      label="Language"
      className="home-page_actions__item"
    />
  </div>
);

export default Actions;
