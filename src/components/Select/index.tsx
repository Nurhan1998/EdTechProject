import cn from 'classnames';

import { ISelect, TSelectItem } from './types';

const Select = (props: ISelect): JSX.Element => {
  const { className, options, label, disabled } = props;
  return (
    <div className={cn('select_wrapper', className)}>
      {label && (
        <label className="select_label">{label}</label>
      )}
      <select
        disabled={disabled}
        className="select_field"
        // onChange={e => {
        //   if(onChange) onChange(e);
        // }}
      >
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
};

export default Select;
