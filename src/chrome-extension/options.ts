import { ExtensionPage } from '../shared';

chrome.storage.local.set({ extensionPage: ExtensionPage.Options });
window.location.href = 'index.html';
