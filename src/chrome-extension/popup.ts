import { ExtensionPage } from '../shared/enums/extension-page';

chrome.storage.local.set({ extensionPage: ExtensionPage.Popup });
window.location.href = 'index.html';
