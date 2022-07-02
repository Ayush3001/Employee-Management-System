import React from "react";
import { Link} from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  console.log("in sidebar");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="fas fa-home"></i>
              <Link className="sidebarLink" to="/home">
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-chart-area"></i>
              <Link className="sidebarLink" to="/holiday-list">
                2022 Holiday Calender
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="fas fa-user"></i>
              <a className="sidebarLink" href="/list">
                Employee
              </a>
            </li>
            <li className="sidebarListItem">
              <i className="far fa-plus-square"></i>
              <a className="sidebarLink" href="/add-user">
                Add Employee
              </a>
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-user-clock"></i>
              <Link className="sidebarLink" to="/leave">
                Leave Request
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>

          <p>Email: rawat.ayush01.ar@gmail.com</p>
          <p>Ph. No.: 8700500169 </p>
          <p>Malhan,Naya Gaon,Dehradun,Uttrakhand</p>
        </div>
      </div>
    </div>
  );
}
