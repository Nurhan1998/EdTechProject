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
}: Partial<IUsersListResponseData>):JSX.Element => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <UserCardWrapper>
      <UserCardAvatar withIcons={isMobile} photoUrl={photo}/>
      <UserCardInfo>
        <CardInfoSection>
          <Title
            withIcons
            isMobile={isMobile}
            text={firstname}
            likesCount={10}
          />
          <SkillsAverageItem
            isMobile={isMobile}
            text="Hard skills"
            current={9}
            max={10}
          />
          <SkillWithProgress
            text="Facebook"
            current={7}
            max={10}
          />
        </CardInfoSection>
        <CardInfoSection>
          {!isMobile && (
            <ViewProfileBlock
              isMobile={isMobile}
              text="View Profile"
            />
          )}
          <SkillsAverageItem
            isPercent
            isMobile={isMobile}
            text="Soft skills"
            current={9}
            max={10}
          />
          <SkillWithProgress
            text="Facebook"
            current={9}
            max={10}
          />
        </CardInfoSection>
      </UserCardInfo>
    </UserCardWrapper>
  );
};

export default UserCard;
