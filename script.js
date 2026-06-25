const browsers = ["Chrome", "Firefox", "Opera"];

const icons = {
  windows: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#00adef" d="M4 7l17-2v17H4zm0 18h17v17L4 40zm19-20l21-3v22H23zm0 22h21v22l-21-3z"/></svg>`,
  apple: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#333" d="M33 25c0-5 4-7 4-7-2-3-6-3-7-3-3 0-5 2-7 2s-4-2-7-2c-4 0-8 3-8 9 0 6 4 14 8 14 2 0 3-2 6-2s4 2 6 2c3 0 6-5 7-8-3-1-6-3-6-7zm-7-13c2-2 2-5 2-5s-3 0-5 2-2 5-2 5 3 0 5-2z"/></svg>`,
  linux: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="30" rx="13" ry="14" fill="#222"/><ellipse cx="24" cy="32" rx="9" ry="9" fill="#fff"/><circle cx="20" cy="18" r="6" fill="#222"/><circle cx="28" cy="18" r="6" fill="#222"/><circle cx="20" cy="18" r="2.5" fill="#fff"/><circle cx="28" cy="18" r="2.5" fill="#fff"/><path fill="#f5b400" d="M21 23l3 4 3-4-3-3z"/></svg>`,
  android: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#3ddc84" d="M14 20h20v15a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3zM10 20a2 2 0 0 1 4 0v9a2 2 0 0 1-4 0zm24 0a2 2 0 0 1 4 0v9a2 2 0 0 1-4 0zM18 38h3v5a2 2 0 0 1-4 0v-5zm9 0h3v5a2 2 0 0 1-4 0v-5zM16 18a8 8 0 0 1 16 0z"/><circle cx="20" cy="14" r="1.3" fill="#fff"/><circle cx="28" cy="14" r="1.3" fill="#fff"/></svg>`,
  chromebook: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="9" width="36" height="24" rx="2" fill="#5f6368"/><rect x="9" y="12" width="30" height="18" fill="#fff"/><path d="M4 35h40l-2 4H6z" fill="#9aa0a6"/><circle cx="24" cy="21" r="5" fill="#4285f4"/></svg>`,
  appStore: `<svg class="logo-sm" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.5 1.5c.1 1.1-.3 2.2-1 3-1 .8-2.1 1.3-3.3 1.2-.1-1.1.4-2.2 1.1-3 1-.8 2.1-1.3 3.2-1.2zM20 17c-.6 1.3-.9 1.9-1.6 3-1 1.6-2.5 3.5-4.3 3.5-1.6 0-2-.9-4.1-.9s-2.6.9-4.1.9c-1.8 0-3.2-1.8-4.2-3.4C-1 18.6-1.3 13.2 1.9 10.3c1-.9 2.4-1.6 3.9-1.6 1.7 0 2.7 1 4.1 1 1.3 0 2.1-1 4.1-1 1.3 0 2.7.7 3.7 2-3.2 1.8-2.7 6.4 2.3 6.3z"/></svg>`,
};

const browserIcons = {
  Chrome: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="#fff"/><path fill="#e53935" d="M24 4a20 20 0 0 1 17.3 10H24a10 10 0 0 0-8.66 5L9.4 8.6A19.9 19.9 0 0 1 24 4z"/><path fill="#4caf50" d="M6.7 12.9 15.34 27a10 10 0 0 0 8.66 5l-6.13 10.62A20 20 0 0 1 6.7 12.9z"/><path fill="#ffc107" d="M44 24a20 20 0 0 1-26.13 18.62L26 28a10 10 0 0 0 7.6-14H44a20 20 0 0 1 0 10z"/><circle cx="24" cy="24" r="8" fill="#1976d2"/></svg>`,
  Firefox: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="#ff7139"/><path fill="#ffb822" d="M24 6c8 2 13 9 13 17 0 9-7 16-15 16-8 0-14-6-14-14 0-5 3-9 7-10-2 4 0 8 4 8 3 0 5-2 5-5 0-4-3-6-3-10 0-3 2-5 3-2z"/></svg>`,
  Opera: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="24" rx="20" ry="20" fill="#ff1b2d"/><ellipse cx="24" cy="24" rx="8" ry="13" fill="#fff"/></svg>`,
  Edge: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#1de9b6" d="M42 24c0 9-7 17-18 17-7 0-12-4-12-9 0-4 3-7 8-7 7 0 8 4 14 4 6 0 8-5 8-8z"/><path fill="#26c6da" d="M40 33c-2 5-9 8-16 8C13 41 4 33 4 22 4 11 13 4 24 4c-8 2-13 8-13 15 0 8 6 13 14 13 8 0 13-3 15 1z"/><path fill="#2962ff" d="M24 4c10 0 16 7 16 14 0 3-1 5-3 5H22c-2 0-3-1-3-3 0-5-4-7-7-7C14 7 18 4 24 4z"/></svg>`,
  Safari: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="#fff" stroke="#1e88e5" stroke-width="2"/><circle cx="24" cy="24" r="18" fill="#42a5f5"/><polygon fill="#fff" points="24,24 33,15 26,26"/><polygon fill="#ff5252" points="24,24 15,33 22,22"/></svg>`,
  Bluefy: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0a84ff"/><path fill="#fff" d="M22 8l9 8-6 6 6 6-9 8V22l-6 6-2-2 7-7-7-7 2-2 6 6V8zm3 6.5V21l3.2-3L25 14.5zM25 27v6.5l3.2-3.2L25 27z"/></svg>`,
};

function createBrowserTag(browser) {
  return `
    <div class="browser-tag">
      ${browserIcons[browser] || ""}
      <span>${browser}</span>
    </div>
  `;
}

const compatibilityRows = [
  {
    os: "Windows",
    icon: icons.windows,
    support: { Chrome: true, Firefox: false, Opera: true },
    other: { browser: "Edge", supported: true },
  },
  {
    os: "macOS",
    icon: icons.apple,
    support: { Chrome: true, Firefox: false, Opera: true },
    other: { browser: "Safari", supported: false },
  },
  {
    os: "Linux",
    icon: icons.linux,
    support: { Chrome: true, Firefox: false, Opera: true },
  },
  {
    os: "Android",
    icon: icons.android,
    support: { Chrome: true, Firefox: false, Opera: true },
  },
  {
    os: "iOS",
    icon: icons.apple,
    support: { Chrome: false, Firefox: false, Opera: false },
    other: {
      browser: "Bluefy",
      supported: true,
      link: {
        href: "https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055",
        label: "App Store",
      },
    },
  },
  {
    os: "ChromeOS",
    icon: icons.chromebook,
    support: { Chrome: true, Firefox: false, Opera: true },
  },
];

function createBadge(isSupported) {
  const statusText = isSupported ? "Supported" : "Not Supported";
  const statusClass = isSupported ? "yes" : "no";

  return `<span class="badge ${statusClass}">${statusText}</span>`;
}

function createStoreLink(link) {
  if (!link) {
    return "";
  }

  return `
    <a class="store-link" href="${link.href}" target="_blank" rel="noopener">
      ${icons.appStore}
      ${link.label}
    </a>
  `;
}

function createCompatibilityCell(row, browser) {
  return `
    <td>
      <div class="cell">
        ${createBrowserTag(browser)}
        ${createBadge(row.support[browser])}
      </div>
    </td>
  `;
}

function createOtherCell(other) {
  if (!other) {
    return `<td class="empty"></td>`;
  }

  return `
    <td>
      <div class="cell">
        ${createBrowserTag(other.browser)}
        ${createBadge(other.supported)}
        ${createStoreLink(other.link)}
      </div>
    </td>
  `;
}

function renderCompatibilityTable() {
  const tableBody = document.querySelector("#compatibility-body");

  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = compatibilityRows
    .map((row) => `
      <tr>
        <th>
          <div class="os-head">
            ${row.icon}
            ${row.os}
          </div>
        </th>
        ${browsers.map((browser) => createCompatibilityCell(row, browser)).join("")}
        ${createOtherCell(row.other)}
      </tr>
    `)
    .join("");
}

renderCompatibilityTable();
