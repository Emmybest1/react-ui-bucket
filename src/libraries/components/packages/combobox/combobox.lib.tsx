import React, {useState, useEffect} from 'react';

import Input from '../../partials/input/input.component';
import {useUniqueIds} from '../../../../hooks/useUniqueIds';
import {IComboboxItem} from '../../../../react-app-env';

import './combobox.style.scss';

export type TComboboxProps = {
  itemType: string; //itemType e.g fruits or countries
  items: IComboboxItem[];
  itemClickHandler?: Function | ((item: IComboboxItem, searchedKeyword: string) => void | any);
};

export const Combobox: React.FC<TComboboxProps> = ({itemType, items, itemClickHandler}): JSX.Element => {
  const [comboInputId] = useUniqueIds(1);
  const [searchedKeyword, setSearchedKeyword] = useState<string>('');
  const [isAriaExpanded, setIsAriaExpanded] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    !!searchedKeyword ? setIsAriaExpanded(true) : setIsAriaExpanded(false);
  }, [searchedKeyword]);

  return (
    <div
      className="combobox combobox-container"
      aria-expanded={isAriaExpanded}
      aria-owns="combobox-listbox"
      aria-haspopup="listbox"
    >
      <span className="combobox__input-wrapper" tabIndex={0}>
        <Input
          type="text"
          id={comboInputId}
          role="combobox"
          aria-autocomplete="list"
          aria-controls="combobox-listbox"
          className="combobox--input"
          value={selectedItem}
          data-testid="searchInput"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            setSearchedKeyword(ev.target.value);
            setSelectedItem(ev.target.value);
          }}
        />
        <span
          onClick={() => setIsAriaExpanded(!isAriaExpanded)}
          className="combobox-listbox-expander-btn"
          data-testid="itemsDropper"
        >
          <i className="fa fa-angle-down"></i>
        </span>
      </span>

      {isAriaExpanded && (
        <ul aria-label={`collection of ${itemType}`} role="listbox" id="combobox-listbox" className="combobox--listbox">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                itemClickHandler && itemClickHandler(item, searchedKeyword);
                setSelectedItem(item.value);
                setIsAriaExpanded(false);
              }}
              className={`list-item list-item--${
                item.value.toLowerCase().trim().includes(searchedKeyword.toLowerCase()) && 'green'
              }`}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
