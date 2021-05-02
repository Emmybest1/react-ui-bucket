import React from 'react';
import './button.style.scss';

export enum ButtonClassName {
  danger = 'danger',
  warning = 'warning',
  success = 'success',
}

export enum ButtionStructures {
  border = 'border',
  curved = 'curved',
  curvedBorder = 'curved-border',
}

export interface IPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStructure?: ButtionStructures.border | ButtionStructures.curved | ButtionStructures.curvedBorder | string;
  className?: ButtonClassName.danger | ButtonClassName.warning | ButtonClassName.success | string;
  children: React.ReactNode;
  toolTip?: boolean;
  toolTipHint?: string;
}

export const Button: React.FC<IPropTypes> = ({
  buttonStructure,
  className,
  children,
  toolTip,
  toolTipHint,
}): JSX.Element => {
  const [toolTipShown, setToolTipShown] = React.useState<boolean>(false);

  const mouseEnterHandler = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    if (toolTip) {
      setTimeout(() => {
        setToolTipShown(true);
      }, 1000);
    }
    return;
  };

  const onMouseLeaveHandler = (): void => {
    if (toolTipShown) {
      setToolTipShown(false);
    }
    return;
  };

  return (
    <>
      {toolTip && toolTipShown && (
        <span className="btn-tooltip" role="tooltip" aria-hidden="true">
          {toolTipHint}
        </span>
      )}
      <button
        type="button"
        className={`react-ui-button ${className}`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        data-structure={buttonStructure}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
