export interface IUserCard {
  id: string;
  avatar: string;
  name: string;
  surName: string;
  hardSkill: number;
  softSkill: number;
  likesCount: number;
  skillName: string;
  progressbarColor?: string;
}

export interface IBannerCardProps {
  text: string;
  count: number;
  content: JSX.Element;
}

export enum ECardColors {
  VIOLETTE = 'violette',
  GREEN = 'green',
  BLUE = 'blue',
}
