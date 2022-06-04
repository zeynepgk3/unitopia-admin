class LeftSideMenu extends HTMLElement {
    connectedCallBack() {
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
                                <!-- eklenen -->
                                <li><a title="All Professors" href="duyuru-create.html"><span class="mini-sub-pro">Duyuru Ekle</span></a></li>
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