import { ExtensionPage } from '../shared';

chrome.storage.local.set({ extensionPage: ExtensionPage.Popup });
window.location.href = 'index.html';
