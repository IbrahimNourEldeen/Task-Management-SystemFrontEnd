import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // ملف CSS مخصص للتحكم في الـ sidebar

const Sidebar = () => {
  return (
    <>
      {/* زر يظهر فقط في الشاشات الصغيرة */}
      <button
        className="btn btn-primary m-2 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
      >
        Sidebar
      </button>

      {/* Sidebar/Offcanvas */}
      <div
        className="offcanvas-lg offcanvas-start"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Sidebar
          </h5>
          <button
            type="button"
            className="btn-close d-lg-none" 
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column d-block">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link fw-bold">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-tasks" className="nav-link fw-bold">
                My Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className="nav-link fw-bold">
                Settings
              </NavLink>
            </li>
          </ul>
          <button onClick={()=>{}}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
