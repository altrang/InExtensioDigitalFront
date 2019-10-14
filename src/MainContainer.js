import React, { useState } from "react";

import CheckboxDisplay from "./CheckboxDisplay";

// Set of checkboxes, list can be changed, master should be unique with key === 'master'
const checkboxesMain = [
  {
    name: "Master",
    checked: false,
    key: "master"
  },
  {
    name: "item1",
    checked: false,
    key: "item1"
  },
  {
    name: "item2",
    checked: false,
    key: "item2"
  },
  {
    name: "item3",
    checked: false,
    key: "item3"
  },
  {
    name: "item4",
    checked: false,
    key: "item4"
  }
];

const MainContainer = () => {
  // Getting default state for master and list
  const checkboxMaster = checkboxesMain.find(
    checkbox => checkbox.key === "master"
  );
  const checkboxList = checkboxesMain.filter(
    checkbox => checkbox.key !== "master"
  );

  // useState for updating master and list
  const [checkboxes, setChecked] = useState(checkboxList);
  const [master, setCheckedMaster] = useState(checkboxMaster);

  // Called when a checkbox is clicked
  const onCheckboxChange = (checkbox, i) => {
    // Creating new array to prevent state mutation
    const newCheckboxes = [...checkboxes];
    // if clicked checkbox is master set all checkboxes checked prop
    if (checkbox.key === "master") {
      setChecked(
        checkboxes.map(checkbox => ({ ...checkbox, checked: !master.checked }))
      );
      setCheckedMaster({ ...master, checked: !master.checked });
      // set checkbox and verify if all are checked
    } else {
      newCheckboxes[i] = { ...checkbox, checked: !checkbox.checked };
      const allChecked = newCheckboxes.filter(checkbox => checkbox.checked);
      allChecked.length === newCheckboxes.length
        ? setCheckedMaster({ ...master, checked: true })
        : setCheckedMaster({ ...master, checked: false });
      setChecked(newCheckboxes);
    }
  };

  return (
    <CheckboxDisplay
      checkboxList={checkboxes}
      checkboxMaster={master}
      onClickList={onCheckboxChange}
    />
  );
};

export default MainContainer;
