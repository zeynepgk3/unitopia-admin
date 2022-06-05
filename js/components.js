class LeftSideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href="index.html"><img class="main-logo" src="img/logo/logo.png" alt="" /></a>
                <strong><a href="index.html"><img src="img/logo/logosn.png" alt="" /></a></strong>
            </div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
                <nav class="sidebar-nav left-sidebar-menu-pro">
                    <ul class="metismenu" id="menu1">
                        <li class="active">
                            <a class="has-arrow" href="index.html">
                                <span class="educate-icon educate-home icon-wrap"></span>
                                <span class="mini-click-non">Genel</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="true">
                                <li><a title="All Professors" href="blog-create.html"><span class="mini-sub-pro">Blog Ekle</span></a></li>
                                <li><a title="All Professors" href="blog-list.html"><span class="mini-sub-pro">Tüm Bloglarım</span></a></li>
                            </ul>
                        </li>
                        <li class="active">
                            <a class="has-arrow" href="index.html">
                                <span class="educate-icon educate-home icon-wrap"></span>
                                <span class="mini-click-non">Admin</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="true">
                                <li><a title="All Professors" href="blog-approve.html"><span class="mini-sub-pro">Blog Onayla</span></a></li>
                                <li><a title="All Professors" href="announcement-list.html"><span class="mini-sub-pro">Duyurular</span></a></li>
                                <li><a title="All Professors" href="meal-list.html"><span class="mini-sub-pro">Yemek Listesi</span></a></li>
                            </ul>
                        </li>
                        <li class="active">
                            <a class="has-arrow" href="index.html">
                                <span class="educate-icon educate-home icon-wrap"></span>
                                <span class="mini-click-non">Diğer</span>
                            </a>
                            <ul class="submenu-angle" aria-expanded="true">
                                <li><a title="All Professors" href="404.html"><span class="mini-sub-pro">Ayarlar</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
        `
    }
}
customElements.define("left-side-menu", LeftSideMenu);

class MyHeaderAdmin extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <div class="header-advance-area">
            <div class="header-top-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-top-wraper">
                                <div class="row">
                                    <div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                        <div class="menu-switcher-pro">
                                            <button type="button" id="sidebarCollapse" class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
													<i class="educate-icon educate-nav"></i>
												</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12"></div>
                                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div class="header-right-info">
                                            <ul class="nav navbar-nav mai-top-nav header-right-menu">
                                                <li class="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><i class="educate-icon educate-bell" aria-hidden="true"></i><span class="indicator-nt"></span></a>
                                                    <div role="menu" class="notification-author dropdown-menu animated zoomIn">
                                                        <div class="notification-single-top">
                                                            <h1>Bildirim</h1>
                                                        </div>
                                                        <ul class="notification-menu">
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="educate-icon educate-checked edu-checked-pro admin-check-pro" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Advanda Cro</h2>
                                                                        <p>Please done this project as soon possible.</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="fa fa-cloud edu-cloud-computing-down" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Sulaiman din</h2>
                                                                        <p>Please done this project as soon possible.</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="fa fa-eraser edu-shield" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Victor Jara</h2>
                                                                        <p>Please done this project as soon possible.</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div class="notification-icon">
                                                                        <i class="fa fa-line-chart edu-analytics-arrow" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div class="notification-content">
                                                                        <span class="notification-date">16 Sept</span>
                                                                        <h2>Victor Jara</h2>
                                                                        <p>Please done this project as soon possible.</p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div class="notification-view">
                                                            <a href="#">View All Notification</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
                                                        <img src="img/product/pro4.jpg" alt="" />
                                                        <span class="admin-name">Prof.Anderson</span>
                                                        <i class="fa fa-angle-down edu-icon edu-down-arrow"></i>
                                                    </a>
                                                    <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                                        <li><a href="404.html"><span class="edu-icon edu-home-admin author-log-ic"></span>Profil</a>
                                                        </li>
                                                        <li><a href="login.html"><span class="edu-icon edu-locked author-log-ic"></span>Çıkış Yap</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define("my-header-admin", MyHeaderAdmin);