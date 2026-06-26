const browsers = ["Chrome", "Firefox", "Opera"];

const icons = {
  windows: `<img class="logo-sm" src="images/logo windows.png" alt="Windows" />`,
  macos: `<img class="logo-sm" src="images/logo macos.png" alt="macOS" />`,
  ios: `<img class="logo-sm" src="images/logo ios.png" alt="iOS" />`,
  linux: `<img class="logo-sm" src="images/logo linux.png" alt="Linux" />`,
  android: `<img class="logo-sm" src="images/logo Android.png" alt="Android" />`,
  chromebook: `<svg class="logo-sm" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="9" width="36" height="24" rx="2" fill="#5f6368"/><rect x="9" y="12" width="30" height="18" fill="#fff"/><path d="M4 35h40l-2 4H6z" fill="#9aa0a6"/><circle cx="24" cy="21" r="5" fill="#4285f4"/></svg>`,
  appStore: `<img class="logo-sm" src="images/logo apple store.png" alt="App Store" />`,
};

const browserIcons = {
  Chrome: `<img class="logo-sm" src="images/logo chrome.png" alt="Chrome" />`,
  Firefox: `<img class="logo-sm" src="images/logo firefox.png" alt="Firefox" />`,
  Opera: `<img class="logo-sm" src="images/logo opera.png" alt="Opera" />`,
  Edge: `<img class="logo-sm" src="images/logo edge.png" alt="Edge" />`,
  Safari: `<img class="logo-sm" src="images/logo safari.png" alt="Safari" />`,
  "Mobile Safari": `<img class="logo-sm" src="images/logo safari.png" alt="Mobile Safari" />`,
  Bluefy: `<img class="logo-sm logo-bluefy" src="images/logo bluefy.png" alt="Bluefy" />`,
  "Samsung Browser": `<img class="logo-sm" src="images/logo samsung browser.png" alt="Samsung Browser" />`,
};

function createBrowserTag(browser) {
  return `
    <div class="browser-tag">
      ${browserIcons[browser] || ""}
      <span>${browser.replace(" ", "<br>")}</span>
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
    icon: icons.macos,
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
    mobile: { browser: "Samsung Browser", supported: true },
  },
  {
    os: "iOS",
    icon: icons.ios,
    support: { Chrome: false, Firefox: false, Opera: false },
    other: { browser: "Mobile Safari", supported: false },
    mobile: {
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
    support: { Chrome: true },
  },
];

const selectedParams = new URLSearchParams(window.location.search);
const selectedOs = (selectedParams.get("os") || "").trim().toLowerCase();
const selectedBrowser = (selectedParams.get("browser") || "").trim().toLowerCase();

function isSelected(os, browser) {
  return (
    selectedOs &&
    selectedBrowser &&
    os.toLowerCase() === selectedOs &&
    browser.toLowerCase() === selectedBrowser
  );
}

function isRowSelected(os) {
  return selectedOs && os.toLowerCase() === selectedOs;
}

function createBadge(isSupported) {
  const statusText = isSupported ? "✅ Supported" : "❌ Not Supported";
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
  if (row.support[browser] === undefined) {
    return `<td class="empty"></td>`;
  }

  const statusClass = row.support[browser] ? "yes" : "no";
  const selectedClass = isSelected(row.os, browser) ? " selected" : "";

  return `
    <td class="${statusClass}${selectedClass}">
      <div class="cell">
        ${createBrowserTag(browser)}
        ${createBadge(row.support[browser])}
      </div>
    </td>
  `;
}

function createSpecialCell(special, os) {
  if (!special) {
    return `<td class="empty"></td>`;
  }

  const statusClass = special.supported ? "yes" : "no";
  const selectedClass = isSelected(os, special.browser) ? " selected" : "";
  const browserTag = createBrowserTag(special.browser);
  const tag = special.link
    ? `<a class="browser-link" href="${special.link.href}" target="_blank" rel="noopener">${browserTag}</a>`
    : browserTag;

  return `
    <td class="${statusClass}${selectedClass}">
      <div class="cell">
        ${tag}
        ${createStoreLink(special.link)}
        ${createBadge(special.supported)}
      </div>
    </td>
  `;
}

function createOsHeader(row) {
  return `
    <th>
      <div class="os-head">
        ${row.icon}
        ${row.os}
      </div>
    </th>
  `;
}

function renderCompatibilityTable() {
  const tableBody = document.querySelector("#compatibility-body");

  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = compatibilityRows
    .map((row) => `
      <tr class="${isRowSelected(row.os) ? "row-selected" : ""}">
        ${createOsHeader(row)}
        ${createSpecialCell(row.other, row.os)}
        ${browsers.map((browser) => createCompatibilityCell(row, browser)).join("")}
        ${createSpecialCell(row.mobile, row.os)}
        ${createOsHeader(row)}
      </tr>
    `)
    .join("");
}

renderCompatibilityTable();
