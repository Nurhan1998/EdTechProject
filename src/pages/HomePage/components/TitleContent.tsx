import CalendarWithSearch from 'components/Icons/CalendarWithSearch';

interface ITitleContentProps {
    count: number
}

const TitleContent = ({ count }: ITitleContentProps): JSX.Element => (
  <div className="title-wrapper">
    <div className="title-left_side">
      <span><CalendarWithSearch/></span>
      <div>
        <p className="title-wrapper_text">Candidate list</p>
        <p className="title-wrapper_subtitle">select filters</p>
      </div>
    </div>
    <div className="title-right_side">
      <p className="title-wrapper_text">Results</p>
      <p className="title-wrapper_subtitle">{count} found</p>
    </div>
  </div>
);
export default TitleContent;