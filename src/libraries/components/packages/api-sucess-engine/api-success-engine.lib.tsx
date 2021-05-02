import React, {useState} from 'react';

import {Button, ReactPortal} from '../../../../react-ui-bucket';
import {IAPIEngineProps} from '../../../../react-app-env';

import '../../../../sass/_api-engine.scss';

export const ApiSuccessEngine: React.FC<IAPIEngineProps> = ({
  heading,
  message,
  modalPosition,
  shouldShowModal,
}): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(shouldShowModal);

  return (
    <>
      {showModal && (
        <ReactPortal>
          <div
            className={`api-engine-container api-success-engine-container  modal-${modalPosition || 'top'}`}
            role="alert"
            aria-live="assertive"
            aria-labelledby="apiSuccHeading"
          >
            <h4 id="apiSuccHeading" className="api-heading pb-20">
              {heading || 'API Error'}
            </h4>
            <span className="row pb-20">
              <p className="api-symbol">✔️</p>
              <p className="api-message pl-20">{message}</p>
            </span>
            <div className="btn-wrapper">
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default ApiSuccessEngine;
