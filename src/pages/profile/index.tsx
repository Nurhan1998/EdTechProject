import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Layout from 'components/Layout';
import SkillRoundIndicator from 'components/SkillRoundindicator';
import { ProgressBar } from 'components/ProgressBar';

import { makeSelectProfileData } from 'store/users/selectors';
import { getProfileRequest } from 'store/users/actions';
import { makeSelectHardSkillsData, makeSelectSoftSkillsData } from 'store/skills/selectors';
import { getHardSkillsRequest, getSoftSkillsRequest } from 'store/skills/actions';

import { getRandomColor } from 'utils/getRandomColor';

const ProfilePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const profileData = useSelector(makeSelectProfileData);
  const hardSkillsData = useSelector(makeSelectHardSkillsData);
  const softSkillsData = useSelector(makeSelectSoftSkillsData);
  const isMobile = useMediaQuery({ query: 'max-width(500px)' });

  useEffect(()=>{
    if(!profileData){
      dispatch(getProfileRequest());
    }
  },[profileData, dispatch]);


  const hardSkills = hardSkillsData.slice(0,5);

  useEffect(()=> {
    dispatch(getHardSkillsRequest());
    dispatch(getSoftSkillsRequest());
    // Need to call this effect only once at render
    // eslint-disable-next-line
  },[]);

  return (
    <Layout pageClassName="profile-page" withoutRightSidebar>
      <div className="profile-page_inner__wrapper">
        <div className="top">
          <div className="avatar-wrapper">
            <img src={profileData?.photo}/>
          </div>
          <div className="letter_wrapper">
            <div className="letter-top">
              <div className="left">
                <p className="title">Cover letter</p>
                <p className="subtitle">(advice)</p>
              </div>
              <span className="right">Edit letter</span>
            </div>
            <div className="letter-body">
              <p>{profileData?.description}</p>
            </div>
          </div>
        </div>
        <div className="hard-skills_wrapper">
          <div className="skills-header">
            <SkillRoundIndicator isExcellent percent={5} subtitle="progress" title="Hard Skill" />
            <div className="right-side">
              <p className="fw-bold">Perfect</p>
              <span>Average index: <span className="fw-bold">10/10</span></span>
            </div>
          </div>
          <div className="skills-body">
            {hardSkills.map(item => (
              <ProgressBar
                width={isMobile? 191 : 330}
                color={getRandomColor()}
                className="grade"
                title={item.name}
                key={item.id}
                current={5}
                max={10}
              />
            ))}
          </div>
        </div>
        <div className="soft-skills_wrapper">
          <div className="skills-header">
            <SkillRoundIndicator percent={9} subtitle="progress" title="Hard Skill" />
            <div className="right-side">
              <p className="fw-bold">Great</p>
              <span>Average index: <span className="fw-bold">76.3%</span></span>
            </div>
          </div>
          <div className="skills-body">
            {softSkillsData.map(item => (
              <ProgressBar
                width={isMobile? 191 : 330}
                className="grade"
                title={item.name}
                key={item.id}
                current={5}
                max={10}
                color={getRandomColor()}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProfilePage;
