import React, {useState, useEffect} from 'react';

import {ReactPortal} from '../../partials/react-portal/react-portal.component';
import {ModalPosition} from '../../../../react-app-env';

import './internet-alert.style.scss';

type TInternetAlertProps = {
  headingText?: string;
  bodyText?: string;
  buttonText?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
};
export const InternetAlert: React.FC<TInternetAlertProps> = ({
  headingText,
  bodyText,
  buttonText,
  width,
  backgroundColor,
  color,
  modalPosition,
}): JSX.Element => {
  const [isInternetDisconnected, setIsInternetDisconnected] = useState<boolean>(false);
  const [shouldCloseAlert, setShouldCloseAlert] = useState<boolean>(false);

  useEffect(() => {
    const offlineListener = (): void => {
      setIsInternetDisconnected(true);
    };

    window.addEventListener('offline', offlineListener);

    return () => {
      window.removeEventListener('offline', offlineListener);
    };
  });

  useEffect(() => {
    const onlineListener = (): void => {
      setIsInternetDisconnected(false);
    };

    window.addEventListener('online', onlineListener);

    return () => {
      window.removeEventListener('online', onlineListener);
    };
  });

  return (
    <ReactPortal>
      <>
        {isInternetDisconnected && !shouldCloseAlert && (
          <div
            role="alertdialog"
            aria-modal="true"
            className={`internet-alert-container modal-${modalPosition ? modalPosition : 'top'}`}
            aria-live="assertive"
            style={{
              width: !/((%)|(px)|(rem)|(em)|(ex)|(ch)|(vh)|(vw)|(vmin)|(vmax))$/.test(width ?? '')
                ? width + 'px'
                : width,
              background: backgroundColor,
              color,
            }}
          >
            <figure>
              <img
                data-test="internet-failure-img"
                src={`${process.env.PUBLIC_URL}/assets/images/wifi-lost-img.svg`}
                alt=""
              />
              <figcaption className="internet-failure-img__resource" aria-hidden="true">
                reference:image taken from flaticon platform
                https://www.flaticon.com/free-icon/lock_3983101?term=internet%20connection&page=1&position=78&related_item_id=3983101
              </figcaption>
            </figure>
            <h3 data-test="internet-failure-heading">{headingText || 'Internet Failure!'}</h3>
            <p data-test="internet-failure-body-text">
              {bodyText || "Sorry we can't continue, you seems to have gone offline.Try reconnecting."}
            </p>
            <button data-test="close-button" onClick={() => setShouldCloseAlert(true)}>
              {buttonText || 'Close'}
            </button>
          </div>
        )}
      </>
    </ReactPortal>
  );
};

export default InternetAlert;
