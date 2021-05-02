import React from 'react';

import TestViews from '../baseview/base-view';
import {Button, ButtonClassName, ButtionStructures} from '../../libraries/components/partials/button/button.component';

export const Buttons: React.FC = (): JSX.Element => {
  return (
    <TestViews
      children={
        <div className="btns-container">
          <Button className={ButtonClassName.danger} buttonStructure={ButtionStructures.border}>
            Danger
          </Button>
          <Button className={ButtonClassName.warning} buttonStructure={ButtionStructures.curved}>
            Warning
          </Button>
          <Button className={ButtonClassName.success} buttonStructure={ButtionStructures.curvedBorder}>
            Curved Border
          </Button>
          <Button className={ButtonClassName.success}>Success</Button>
        </div>
      }
    />
  );
};

export default Buttons;
