import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const SortDropDown = () => {
  return (
    <MDBDropdown >
      <MDBDropdownToggle caret color="primary">
        Sort by
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Date</MDBDropdownItem>
        <MDBDropdownItem>Sacco</MDBDropdownItem>
        <MDBDropdownItem>Query</MDBDropdownItem>
        <MDBDropdownItem> Another action</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default SortDropDown;