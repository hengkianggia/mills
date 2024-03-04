import React from 'react'
import Div from '../helper/Div';

const SelectOption = ({label, dataOption}) => {
  return (
    <Div full flex column gap="1" relative>
      <label htmlFor="select" className="capitalize text-xs">
        {label}
      </label>
      <select
        id="select"
        className="w-full p-3 border border-gray-300"
        defaultValue={"masuk"}
      >
        {dataOption.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Div>
  );
}

export default SelectOption