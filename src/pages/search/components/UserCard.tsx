import { useMediaQuery } from 'react-responsive';

import UserCardWrapper from 'components/UserCardWrapper';
import UserCardInfo from 'components/UserCardInfo';
import CardInfoSection from 'components/CardInfoSection';
import Title from 'components/UserCardTitle';
import SkillWithProgress from 'components/SkillWithProgress';
import ViewProfileBlock from 'components/ViewProfileBlock';
import UserCardAvatar from 'components/UserCardAvatar';
import SkillsAverageItem from 'components/SkillsAvarageItem';

import { IUsersListResponseData } from 'store/users/types';


const UserCard = ({
  firstname,
  photo,
  hskills,
  skills
}: Partial<IUsersListResponseData>):JSX.Element => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const hardSkills = isMobile ? hskills?.slice(0,1) : hskills?.slice(0,3);
  const softSkills = isMobile ? skills?.slice(0,1) : skills?.slice(0,1);
  return (
    <UserCardWrapper>
      <UserCardAvatar withIcons photoUrl={photo}/>
      <UserCardInfo>
        <CardInfoSection>
          <Title
            isMobile={isMobile}
            text={firstname}
            likesCount={10}
          />
          <SkillsAverageItem
            isPercent
            isMobile={isMobile}
            text="Soft skills"
            current={9}
            max={10}
          />
          {hardSkills?.map(({ hskill_id, value,name }) => (
            <SkillWithProgress
              key={`${hskill_id}_${firstname}`}
              text={name}
              current={Number(value)}
              max={10}
              isMobile={isMobile}
            />
          ))}
        </CardInfoSection>
        <CardInfoSection>
          <SkillsAverageItem
            isMobile={isMobile}
            text="Hard skills"
            current={9}
            max={10}
          />
          {softSkills?.map(({ skill_id, value,name }) => (
            <SkillWithProgress
              key={`${skill_id}_${firstname}`}
              text={name}
              current={Number(value)}
              max={10}
              isMobile={isMobile}
            />
          ))}
          {!isMobile && (
            <ViewProfileBlock
              isMobile={isMobile}
              text="View Profile"
            />
          )}
        </CardInfoSection>
      </UserCardInfo>
    </UserCardWrapper>
  );
};

export default UserCard;
