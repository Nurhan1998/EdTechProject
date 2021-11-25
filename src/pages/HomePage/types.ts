export interface IUserCard {
  id: string;
  avatar: string;
  name: string;
  surName: string;
  hardSkill: string;
  statusHardSkill: number;
  softSkill: string;
  statusSoftSkill: number;
}

export type TBannerCardProps = {
  color: string;
  classPrefix: string;
  headerText: string;
  centerText: string;
  content: JSX.Element;
}

export enum ECardColors {
  VIOLETTE = "violette",
  GREEN = "green",
  BLUE = "blue",
}
