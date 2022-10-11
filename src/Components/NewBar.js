import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { FaSuitcase } from "react-icons/fa";

import Data from "./Data";

const NewBar = (data) => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="">
      <div style={{ display: "Flex", height: "" }}>
        <Sidebar className="sidebar">
          <Menu>
            <div className="text-center">
              <img
                className="sidebarprofimg"
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              ></img>
            </div>
            <div className="text-center">
              <p className="m-1">
                <strong>Patric Becker</strong>
              </p>
            </div>
            <div className="text-center">
              <p className="administrator text-muted">Administrator</p>
            </div>

            <MenuItem className="mt-4">
              <div className="d-flex ">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/4373/4373065.png"
                ></img>
                <p className="administrator mx-3">Dashboard</p>
              </div>
            </MenuItem>

            <SubMenu icon={<FaSuitcase />} label="Job Pool">
              <MenuItem> Job List</MenuItem>
              <MenuItem> Create Job</MenuItem>
            </SubMenu>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/2/2994.png"
                ></img>
                <p className="administrator mx-3">Questionaries</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
                ></img>
                <p className="administrator mx-3">Users</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/1789/1789858.png"
                ></img>
                <p className="administrator mx-3">Brands</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170667.png"
                ></img>
                <p className="administrator mx-3">Job Reports</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/4168/4168148.png"
                ></img>
                <p className="administrator mx-3">Supervisors</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/2594/2594116.png"
                ></img>
                <p className="administrator mx-3">Sponsers</p>
              </div>
            </MenuItem>

            <MenuItem>
              <div className="d-flex">
                <img
                  className="sidedashimg"
                  src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                ></img>
                <p className="administrator mx-3">Account Settings</p>
              </div>
            </MenuItem>
          </Menu>
          <div className="text-center">
              <button className="btn btn-info my-5" onClick={()=>collapseSidebar() }>Collapse</button>
          </div>
        </Sidebar>

        <Data />
      </div>
    </div>
  );
};

export default NewBar;
