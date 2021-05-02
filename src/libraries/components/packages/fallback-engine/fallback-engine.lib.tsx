import React from 'react';

import {useHistory} from 'react-router-dom';

import {IBaseComponentsProps} from '../../../../react-app-env';
import {Button} from '../../partials/button/button.component';

import './fallback-engine.style.scss';

interface IFallBackEngineProps extends IBaseComponentsProps {
  heading?: JSX.Element;
  textToDisplay: string;
  buttonText: string;
  fallBackPath: string;
}

export const FallBackEngine: React.FC<IFallBackEngineProps> = ({
  buttonText,
  fallBackPath,
  heading,
  textToDisplay,
}): JSX.Element => {
  const history = useHistory();

  return (
    <main className="fallback-main">
      <img src={`${process.env.PUBLIC_URL}/assets/images/error.png`} alt="" />

      {heading}
      <p>{textToDisplay}</p>
      <Button onClick={() => history.replace(fallBackPath)}>{buttonText}</Button>
    </main>
  );
};

export default FallBackEngine;
