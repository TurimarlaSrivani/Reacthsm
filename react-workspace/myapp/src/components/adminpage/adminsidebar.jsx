//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar.css";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import {
  FaList,
  FaPoll,
  FaBriefcaseMedical,
  FaChartPie,
  FaCapsules,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { DiEnvato } from "react-icons/di";
import { GiMedicalThermometer } from "react-icons/gi";
import { BiAccessibility } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const Adminsidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="header">
      <Link to="/sidebar.css"></Link>
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square" maxMenuHeight={250}>
            <MenuItem active={true} icon={<FiHome />}>
              <Link to="/adminhome"></Link>
              Dashboard
            </MenuItem>
            <SubMenu title="Doctor" icon={<FaBriefcaseMedical />}>
            <Link to="/doctors">
              <MenuItem>Doctor List </MenuItem>
            </Link>
            </SubMenu>
            <SubMenu title="Patient" icon={<BiAccessibility />}>
            <Link to="/patients">
              <MenuItem>Patient List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Patient History" icon={<FaList />}>
            <Link to="/history">
              <MenuItem>Patient History List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Patient Case" icon={<GiMedicalThermometer />}>
            <Link to="/patientCase">
              <MenuItem>Patient Case List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Diet" icon={<DiEnvato />}>
            <Link to="/diet"> 
              <MenuItem>Diet List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Disease" icon={<FaCapsules />}>
            <Link to="/diseases">
              <MenuItem>Disease List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Insurance Policy" icon={<FaPoll />}>
              <Link to="/policies">
                <MenuItem>Insurance Policy List</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Finance" icon={<FaChartPie />}>
            <Link to="/finance">
              <MenuItem>Finance List</MenuItem>
              </Link>
            </SubMenu>
            <MenuItem icon={<FiLogOut />}>
              <Link to="/logout">Logout</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Adminsidebar;