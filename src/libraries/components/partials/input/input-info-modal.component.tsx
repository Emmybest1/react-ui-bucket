import React from 'react';

import Button from '../button/button.component';
import {ReactPortal} from '../react-portal/react-portal.component';
import './input.style.scss';

type PropTypes = {
  info: React.ReactNode;
};

const InputInfoModal: React.FC<PropTypes> = ({info}): JSX.Element => {
  const [shouldShowModal, setShouldShowModal] = React.useState<boolean>(false);

  //control the emptiness and updating of infoCopy
  React.useEffect(() => {
    if (!!info) {
      setShouldShowModal(true);
    } else {
      setShouldShowModal(false);
    }

    return () => {
      setShouldShowModal(false);
    };
  }, [info]);
  return (
    <>
      {shouldShowModal && (
        <ReactPortal>
          <div className="input-info-modal-container modal-top">
            <div className="info-heading-wrapper">
              <h4 style={{display: 'flex', alignItems: 'center'}}>
                <i className="fa fa-info-circle fa-info-circle--white" style={{paddingRight: '5px'}}></i>
                Info
              </h4>
            </div>
            <div className="info-content-wrapper">{info}</div>

            <div className="ok-btn-wrapper">
              <Button onClick={() => setShouldShowModal(false)}>Ok</Button>
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default InputInfoModal;
