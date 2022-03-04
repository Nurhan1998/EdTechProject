import { useMediaQuery } from 'react-responsive';
import {
  UserCardWrapper,
  UserCardInfo,
  UserCardInfoSection,
  SkillWithProgress,
  SkillsAverageItem
} from 'most-ui-kit';

import Title from 'components/UserCardTitle';
import ViewProfileBlock from 'components/ViewProfileBlock';
import UserCardAvatar from 'components/UserCardAvatar';

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
        <UserCardInfoSection>
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
        </UserCardInfoSection>
        <UserCardInfoSection>
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
        </UserCardInfoSection>
      </UserCardInfo>
    </UserCardWrapper>
  );
};

export default UserCard;
