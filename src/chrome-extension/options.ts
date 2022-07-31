import { ExtensionPage } from '../shared/enums/extension-page';

chrome.storage.local.set({ extensionPage: ExtensionPage.Options });
window.location.href = 'index.html';
