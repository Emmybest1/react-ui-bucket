import React from 'react';
import Button from '../button/button.component';
import Input from '../input/input.component';
import './button-search-bar.style.scss';

type TButtonSearchBarProps = {
  id: string;
  name: string;
  placeholder: string;
  tooltip?: boolean;
  toolTipHint?: string;
  [x: string]: any;
};

export const ButtonSearchBar: React.FC<TButtonSearchBarProps> = ({
  id,
  name,
  placeholder,
  onClick,
  toolTip,
  toolTipHint,
  ...otherProps
}): JSX.Element => {
  return (
    <span className="btn-search-bar-container">
      <Input id={id} type="search" name={name} placeholder={placeholder} className="search-bar" {...otherProps} />

      <Button className="search-btn" type="submit" onClick={onClick} toolTip={toolTip} toolTipHint={toolTipHint}>
        Search
      </Button>
    </span>
  );
};

export default ButtonSearchBar;
