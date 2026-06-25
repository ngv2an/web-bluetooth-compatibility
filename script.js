const browsers = ["Chrome", "Firefox", "Opera"];

const icons = {
  windows: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#00adef" d="M4 7l17-2v17H4zm0 18h17v17L4 40zm19-20l21-3v22H23zm0 22h21v22l-21-3z"/></svg>`,
  apple: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#333" d="M33 25c0-5 4-7 4-7-2-3-6-3-7-3-3 0-5 2-7 2s-4-2-7-2c-4 0-8 3-8 9 0 6 4 14 8 14 2 0 3-2 6-2s4 2 6 2c3 0 6-5 7-8-3-1-6-3-6-7zm-7-13c2-2 2-5 2-5s-3 0-5 2-2 5-2 5 3 0 5-2z"/></svg>`,
  linux: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="30" rx="13" ry="14" fill="#222"/><ellipse cx="24" cy="32" rx="9" ry="9" fill="#fff"/><circle cx="20" cy="18" r="6" fill="#222"/><circle cx="28" cy="18" r="6" fill="#222"/><circle cx="20" cy="18" r="2.5" fill="#fff"/><circle cx="28" cy="18" r="2.5" fill="#fff"/><path fill="#f5b400" d="M21 23l3 4 3-4-3-3z"/></svg>`,
  android: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><path fill="#3ddc84" d="M14 20h20v15a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3zM10 20a2 2 0 0 1 4 0v9a2 2 0 0 1-4 0zm24 0a2 2 0 0 1 4 0v9a2 2 0 0 1-4 0zM18 38h3v5a2 2 0 0 1-4 0v-5zm9 0h3v5a2 2 0 0 1-4 0v-5zM16 18a8 8 0 0 1 16 0z"/><circle cx="20" cy="14" r="1.3" fill="#fff"/><circle cx="28" cy="14" r="1.3" fill="#fff"/></svg>`,
  chromebook: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="9" width="36" height="24" rx="2" fill="#5f6368"/><rect x="9" y="12" width="30" height="18" fill="#fff"/><path d="M4 35h40l-2 4H6z" fill="#9aa0a6"/><circle cx="24" cy="21" r="5" fill="#4285f4"/></svg>`,
  appStore: `<img class="logo-sm" src="images/logo apple store.png" alt="App Store" />`,
};

const browserIcons = {
  Chrome: `<img class="logo-sm" src="images/logo chrome.png" alt="Chrome" />`,
  Firefox: `<img class="logo-sm" src="images/logo firefox.png" alt="Firefox" />`,
  Opera: `<img class="logo-sm" src="images/logo opera.png" alt="Opera" />`,
  Edge: `<img class="logo-sm" src="images/logo edge.png" alt="Edge" />`,
  Safari: `<img class="logo-sm" src="images/logo safari.png" alt="Safari" />`,
  Bluefy: `<img class="logo-sm" src="images/logo bluefy.png" alt="Bluefy" />`,
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
