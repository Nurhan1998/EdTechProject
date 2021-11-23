import cn from 'classnames';

import {ISelect, TSelectItem} from './types';

const Select = ({ className, options, label }:ISelect):JSX.Element => (
  <div className={cn("select_wrapper", className)}>
    {label && (
      <label className="select_label">{label}</label>
    )}
    <select className="select_field">
      {options.map((item: TSelectItem) => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
