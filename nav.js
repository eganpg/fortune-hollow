class SiteNav extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';
    this.innerHTML = `
      <nav class="site-nav">
        <div class="site-nav-inner">
          <a href="index.html" class="site-nav-logo">Fortune Hollow</a>
          <ul class="site-nav-links">
            <li><a href="index.html#about"         ${active === 'about'    ? 'class="active"' : ''}>About</a></li>
            <li><a href="index.html#animals"        ${active === 'farm'     ? 'class="active"' : ''}>The Farm</a></li>
            <li><a href="farm-visit-schedule.html"  ${active === 'schedule' ? 'class="active"' : ''}>Full Schedule</a></li>
            <li><a href="farm-store.html"           ${active === 'store'    ? 'class="active"' : ''}>Farm Store</a></li>
            <li><a href="index.html#book"           ${active === 'book'     ? 'class="active"' : ''}>Book</a></li>
          </ul>
        </div>
      </nav>`;
  }
}
customElements.define('site-nav', SiteNav);
