import React, { FC } from 'react';
import { Flip, toast } from 'react-toastify';
//import 'react-toastify/scss/main.scss'
import 'react-toastify/dist/ReactToastify.css';

export type JToastRole = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR' | 'DEFAULT';

export interface JToastProps {
  message?: string;
  show: boolean;
  onClose?: () => void;
  delay?: number;
}

const JToast: FC<JToastProps> = (props) => {
  const notify = () => toast(props.message);
  return (
    <div>
      <button onClick={notify}> Notify !</button>
    </div>
  );
};

const dismissMessage = (toastId?: React.ReactText) => {
  return toastId ? toast.dismiss(toastId) : toast.dismiss();
};

const notifyMessage = (message: any, role?: JToastRole, millisToDisplay?: number) => {
  switch (role) {
    case 'INFO':
      return toast.info(message, millisToDisplay ? { autoClose: millisToDisplay } : {}
      );
    case 'SUCCESS':
      return toast.success(message,
        millisToDisplay ? { autoClose: millisToDisplay, transition: Flip } : {}
      );
    case 'WARNING':
      return toast.warn(message,
        millisToDisplay ? { autoClose: millisToDisplay } : {}
      );
    case 'ERROR':
      return toast.error(message,
        millisToDisplay ? { autoClose: millisToDisplay } : {}
      );
    default:
      return toast(message, millisToDisplay ? { autoClose: millisToDisplay } : {});
  }
};

export default JToast;
export { JToast, notifyMessage, dismissMessage };

JToast.displayName = 'JToast';