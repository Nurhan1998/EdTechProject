import { useMediaQuery } from 'react-responsive';

import { Avatar } from 'components/UserCard/components/Avatar';
import { Title } from 'components/UserCard/components/Title';
import { SkillsAverage } from 'components/UserCard/components/SkillsAverageItem';
import { SkillWithProgress } from 'components/UserCard/components/SkillWithProgress';
import { ViewProfileBlock } from 'components/UserCard/components/ViewProfileBlock';

import { IUsersListResponseData } from 'store/users/types';


const UserCard = ({
  firstname,
  photo,
}: Partial<IUsersListResponseData>):JSX.Element => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <div className="user-card_wrapper">
      <Avatar withIcons={isMobile} photoUrl={photo}/>
      <div className="user-card_info">
        <div className="data">
          <Title
            isMobile={isMobile}
            text={firstname}
            likesCount={10}
          />
          <SkillsAverage
            isMobile={isMobile}
            text="Hard skills"
            current={9}
            max={10}
          />
          <SkillWithProgress
            text="Facebook"
            current={7}
            max={10}
            isMobile={isMobile}
          />
        </div>
        <div className="data">
          {!isMobile && (
            <ViewProfileBlock
              isMobile={isMobile}
              text="View Profile"
            />
          )}
          <SkillsAverage
            isMobile={isMobile}
            text="Soft skills"
            current={9}
            max={10}
          />
          <SkillWithProgress
            text="Facebook"
            current={10}
            max={10}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
