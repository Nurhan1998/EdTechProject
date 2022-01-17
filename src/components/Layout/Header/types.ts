export interface IHeader {
  className?: string;
  visible: boolean;
  language: string;
  setLanguage: (language: string) => void;
  handleClickMenu: () => void;
}
