import { IBannerCardProps } from 'pages/HomePage/types';

export const bannerCards: IBannerCardProps[] = [
  {
    text:'PICK',
    count:1,
    content:(
      <>
        <span className="d-block">Pick <span className="dedicated">Professions</span></span>
        <span className="d-block"> and <span className="dedicated">Hard skill</span></span>
      </>
    )
  },
  {
    text: 'SEND',
    count: 2,
    content: (
      <>
        <span className="d-block">Next click <span className="dedicated">View Profile</span></span>
        <span className="d-block">near suitable candidate</span>
      </>
    )
  },
  {
    text: 'VIEW',
    count: 3,
    content: (
      <>
        <span className="d-block">On profile page click <span className="dedicated">Send Request</span></span>
        <span className="d-block">and wait for the response in <span className="dedicated">Chat</span></span>
      </>
    )
  },
];