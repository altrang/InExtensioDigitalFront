import React from "react";

const CheckboxDisplay = ({ checkboxList, checkboxMaster, onClickList }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checkboxMaster.checked}
        onChange={() => onClickList(checkboxMaster)}
      />
      <label>{checkboxMaster.name}</label>

      {checkboxList.map((checkbox, i) => (
        <React.Fragment key={checkbox.key}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => onClickList(checkbox, i)}
          />
          <label>{checkbox.name}</label>
        </React.Fragment>
      ))}
    </>
  );
};

export default CheckboxDisplay;
