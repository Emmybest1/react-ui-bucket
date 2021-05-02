import React, {useState} from 'react';

import {Button, ReactPortal} from '../../../../react-ui-bucket';
import {IAPIEngineProps} from '../../../../react-app-env';

import '../../../../sass/_api-engine.scss';

interface IAPIErrorEngineProps extends IAPIEngineProps {
  retryFuncButtonText?: string;
  retryFunc?: Function | ((...args: any) => void | any);
}
export const ApiErrorEngine: React.FC<IAPIErrorEngineProps> = ({
  heading,
  message,
  modalPosition,
  retryFunc,
  retryFuncButtonText,
  shouldShowModal,
}): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(() => shouldShowModal ?? false);
  return (
    <>
      {showModal && (
        <ReactPortal>
          <div
            className={`api-engine-container api-error-engine-container modal-${modalPosition || 'top'}`}
            role="alert"
            aria-live="assertive"
            aria-labelledby="apiErrHeading"
          >
            <h4 id="apiErrHeading" className="api-heading pb-20">
              {heading || 'API Error'}
            </h4>
            <span className="row pb-20">
              <p className="api-symbol">X</p>
              <p className="api-message pl-20">{message}</p>
            </span>
            <div className="btn-wrapper">
              <Button onClick={() => (retryFunc ? retryFunc() : window.location.reload())}>
                {retryFuncButtonText || 'Reload Page'}
              </Button>
              <Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setShowModal(false)}>Close</Button>
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default ApiErrorEngine;
