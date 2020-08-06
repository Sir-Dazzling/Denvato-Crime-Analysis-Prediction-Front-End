import React, {Component} from 'react';
import $ from 'jquery';

import './Dashboard.styles.scss';

class Dashboard extends Component
{

  componentDidMount()
  {
    const x = $('x is a variable');
    console.log();

  $(function () {
      $('.sidebar-menu-collapsed').click(function () {
        $('body').toggleClass('noscroll');
      })
    });
  }


  render()
  {
    return(
      <div>
          {/* // <!-- sidebar menu start --> */}
<div class="sidebar-menu sticky-sidebar-menu">

{/* <!-- logo start --> */}
<div className="logo">
  <h1><a href="index.html">Denvato</a></h1>
</div>

{/* <!-- if logo is image enable this -->
<!-- image logo -- */}
{/* <div className="logo">
  <a href="index.html">
    <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style= {{height: "35px"}} />
  </a>
</div> */}
{/* <!-- //image logo --> */}

<div class="logo-icon text-center">
  <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon" /> </a>
</div>
{/* <!-- //logo end --> */}

<div class="sidebar-menu-inner">

  {/* <!-- sidebar nav start --> */}
  <ul class="nav nav-pills nav-stacked custom-nav">
    <li class="active"><a href="index.html"><i class="fa fa-tachometer"></i><span>Dashboard</span></a>
    </li>
    <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>File FIR for case</span></a></li>
  </ul>
  {/* <!-- //sidebar nav end -->
  <!-- toggle button start --> */}
  <a class="toggle-btn">
    <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
    <i class="fa fa-angle-double-right menu-collapsed__right"></i>
  </a>
  {/* <!-- //toggle button end --> */}
</div>
</div>
{/* <!-- //sidebar menu end -->
<!-- header-starts --> */}
<div class="header sticky-header">

{/* <!-- notification menu start --> */}
<div class="menu-right">
  <div class="navbar user-panel-top">
    <div class="search-box">
      <form action="#search-results.html" method="get">
        <input class="search-input" placeholder="Search Here..." type="search" id="search" />
        <button class="search-submit" value=""><span class="fa fa-search"></span></button>
      </form>
    </div>
    <div class="user-dropdown-details d-flex">
      <div class="profile_details_left">
        <ul class="nofitications-dropdown">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                class="fa fa-bell-o"></i><span class="badge blue">3</span></a>
            <ul class="dropdown-menu">
              <li>
                <div class="notification_header">
                  <h3>You have 3 new notifications</h3>
                </div>
              </li>
              <li><a href="#" class="grid">
                  <div class="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                  <div class="notification_desc">
                    <p>Johnson purchased template</p>
                    <span>Just Now</span>
                  </div>
                </a></li>
              <li class="odd"><a href="#" class="grid">
                  <div class="user_img"><img src="assets/images/avatar2.jpg" alt="" /></div>
                  <div class="notification_desc">
                    <p>New customer registered </p>
                    <span>1 hour ago</span>
                  </div>
                </a></li>
              <li><a href="#" class="grid">
                  <div class="user_img"><img src="assets/images/avatar3.jpg" alt="" /></div>
                  <div class="notification_desc">
                    <p>Lorem ipsum dolor sit amet </p>
                    <span>2 hours ago</span>
                  </div>
                </a></li>
              <li>
                <div class="notification_bottom">
                  <a href="#all" class="bg-primary">See all notifications</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="profile_details">
        <ul>
          <li class="dropdown profile_details_drop">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
              aria-expanded="false">
              <div class="profile_img">
                <img src="assets/images/dazz.jpg" class="rounded-circle" alt="" />
                <div class="user-active">
                  <span></span>
                </div>
              </div>
            </a>
            <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
              <li class="user-info">
                <h5 class="user-name">John Deo</h5>
                <span class="status ml-2">Available</span>
              </li>
              <li> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </li>
              <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li>
              <li> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </li>
              <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li>
              <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* <!--notification menu end --> */}
</div>
{/* <!-- //header-ends -->
<!-- main content start --> */}
<div class="main-content">

{/* <!-- content --> */}
<div class="container-fluid content-top-gap">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb my-breadcrumb">
    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
  </ol>
</nav>
<div class="welcome-msg pt-3 pb-4">
  <h1>Hi <span class="text-primary">Daniel!!!</span>, Welcome back to your dashboard</h1>
  <p>Role: Admin.</p>
</div>

{/* <!-- statistics data --> */}
<div class="statistics">
  <div class="row">
    <div class="col-xl-6 pr-xl-2">
      <div class="row">
        <div class="col-sm-6 pr-sm-2 statistics-grid">
          <div class="card card_border border-primary-top p-4">
            <i class="lnr lnr-users"> </i>
            <h3 class="text-primary number">Click here to Upload CSV</h3>
          </div>
        </div>
        <div class="col-sm-6 pl-sm-2 statistics-grid">
          <div class="card card_border border-primary-top p-4">
            <i class="lnr lnr-eye"> </i>
            <h3 class="text-secondary number">Manage User Accounts</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 pl-xl-2">
      <div class="row">
        <div class="col-sm-6 pr-sm-2 statistics-grid">
          <div class="card card_border border-primary-top p-4">
            <i class="lnr lnr-cloud-download"> </i>
            <h3 class="text-success number">View and run CRUD on Data</h3>
          </div>
        </div>
        <div class="col-sm-6 pl-sm-2 statistics-grid">
          <div class="card card_border border-primary-top p-4">
            <i class="lnr lnr-eye"> </i>
            <h3 class="text-danger number">View Latest FIR reports!!!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- //statistics data --> */}

{/* <!-- charts --> */}
<div class="chart">
  <div class="row">
    <div class="col-lg-6 pr-lg-2 chart-grid">
      <div class="card text-center card_border">
        <div class="card-header chart-grid__header">
          Bar Chart of Offences against Property in Lagos state(2017 vs 2018)
        </div>
        <div class="card-body">
          {/* <!-- bar chart --> */}
          <div id="container">
            <canvas id="barchart"></canvas>
          </div>
          {/* <!-- //bar chart --> */}
        </div>
        <div class="card-footer text-muted chart-grid__footer">
          Updated 2 hours ago
        </div>
      </div>
    </div>
    <div class="col-lg-6 pl-lg-2 chart-grid">
      <div class="card text-center card_border">
        <div class="card-header chart-grid__header">
          Line Chart of Offences against Persons in Lagos state(2017 vs 2018)
        </div>
        <div class="card-body">
          {/* <!-- line chart --> */}
          <div id="container">
            <canvas id="linechart"></canvas>
          </div>
          {/* <!-- //line chart --> */}
        </div>
        <div class="card-footer text-muted chart-grid__footer">
          Updated 5 hours ago
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- //charts --> */}

</div>
{/* <!-- //content --> */}
</div>
      </div>

  );
  };
    

}    
export default Dashboard;