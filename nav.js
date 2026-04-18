function renderNav(activePage) {
  const links = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Research' },
    { href: 'members.html',      label: 'Members' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'contact.html',      label: 'Contact' },
    { href: 'news.html',         label: 'News' },
    { href: 'volunteer.html',    label: 'Volunteer' },
  ];

  const linksHTML = links.map(link => {
    const isActive = link.href === activePage ? ' class="active"' : '';
    return `<a${isActive} href="${link.href}">${link.label}</a>`;
  }).join('\n        ');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">Darlington Lab</a>
        <div class="nav-links">
          ${linksHTML}
        </div>
      </div>
    </nav>
  `;
}
