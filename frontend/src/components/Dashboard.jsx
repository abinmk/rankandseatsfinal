// src/components/Dashboard.jsx
import React from 'react';
// Import AdminLTE CSS
import 'admin-lte/dist/css/adminlte.min.css';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Navbar content here */}
      </nav>
      {/* /.navbar */}

      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">Admin</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="/admin" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Content goes here */}
            <h1>Dashboard</h1>
          </div>
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

      {/* Footer */}
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">
          Anything you want
        </div>
        <strong>Copyright &copy; 2023 <a href="/">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>
      {/* /.footer */}
    </div>
  );
}

export default Dashboard;
