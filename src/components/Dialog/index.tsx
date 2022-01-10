import cn from 'classnames';

export interface IDialog {
  text: string;
  confirmText: string;
  rejectText: string;
  isOpen: boolean;
  close: () => void;
  onConfirmAction?: () => void;
  onRejectAction?: () => void;
}

const Dialog = ({
  text,
  confirmText,
  rejectText,
  isOpen,
  close
}: IDialog): JSX.Element => (
  <div className={cn('dialog-wrapper', {
    invisible: !isOpen,
    visible: isOpen,
  })}>
    <div className="dialog-content">
      <span className="dialog-content_close" onClick={close}/>
      <p className="text">{text}</p>
      <div className="action-wrapper">
        <button>{confirmText}</button>
        <button>{rejectText}</button>
      </div>
    </div>
  </div>
);
export default Dialog;
