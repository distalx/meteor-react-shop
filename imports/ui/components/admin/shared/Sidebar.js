import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return(
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/admin">Admin</a>
          </div>
          <ul className="nav navbar-right top-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav side-nav">
              <li className="active">
                <a href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
              </li>
              <li>
                <a href="charts.html"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
              </li>
              <li>
                <a href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</a>
              </li>
              <li>
                <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
              </li>
              <li>
                <a href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
              </li>
              <li>
                <a href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                <ul id="demo" className="collapse">
                  <li>
                    <a href="#">Dropdown Item</a>
                  </li>
                  <li>
                    <a href="#">Dropdown Item</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</a>
              </li>
              <li>
                <a href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">
                  Dashboard <small>Statistics Overview</small>
                </h1>
                <ol className="breadcrumb">
                  <li className="active">
                    <i className="fa fa-dashboard"></i> Dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
