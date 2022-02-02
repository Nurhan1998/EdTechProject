export interface IUserCardComponent {
  text?: string;
  isMobile?: boolean;
  onArrowsClick?: () => void
}

export interface IUserCardTitle extends IUserCardComponent {
  text?: string;
  likesCount?: number;
  onCalendarClick?: () => void;
  onVideoChatClick?: () => void;
}

export interface IAvatarProps {
  photoUrl?: string;
  withIcons: boolean;
  leftIconAction?: () => void;
  rightIconAction?: () => void;
}

export interface ISkillsProps {
  text: string;
  current: number;
  max: number
  isMobile?: boolean
}

export interface IViewProfile {
  isMobile: boolean;
  text: string;
  onArrowsClick?: () => void;
}
