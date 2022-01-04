import { ReactNotificationOptions, store } from 'react-notifications-component';

type TNotificationsProps = Omit<ReactNotificationOptions, 'container'> & {
  duration?: number
}

const сreateNotification = ({ type, message, duration = 4000 }: TNotificationsProps): string =>
  store.addNotification({
    message: message,
    width: 300,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: duration,
      waitForAnimation: true,
    }
  });



export default сreateNotification;
