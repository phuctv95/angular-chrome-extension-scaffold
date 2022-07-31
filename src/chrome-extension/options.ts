import { StorageData } from '../shared/models/storage-data';
import { ExtensionPage } from '../shared/enums/extension-page';

chrome.storage.local.set({ currentPage: ExtensionPage.Options } as StorageData);
window.location.href = 'index.html';
