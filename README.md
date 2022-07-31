# Chrome Extension Scaffold using Angular

This is a scaffold for Chrome Extension development using Angular framework.

## Setup

1. Update name and description with your desire in `src/chrome-extension/manifest.json`.
2. Search and replace all the text "angular-chrome-extension-scaffold" with your desired name.
3. Install `pnpm` if not yet. Run `pnpm install`.
4. For development, run `pnpm run watch-angular` and `pnpm run watch-chrome-extension-webpack`.
5. The built files are in the `dist` folder.

To build for production, run `pnpm run build-prod`.

## Code Structure

There are basically 2 builds:
1. One is for building **Manifest file**, **Background script**, **Content scripts** (they are in `src/chrome-extension` folder, the folder also contains some Popup and Options files, but are just for redirecting to Angular built `index.html`);
2. The second one is for building **Popup page** and **Options page** (Angular code).

Folders you should care for development:
- `src/chrome-extension` folder:
  + `manifest.json`: the _Manifest file_.
  + `background.ts`: the _Background script_.
  + `content-script.ts/.css`: the _Content scripts_.
  + In `.ts` files, you can only `import` order things (interfaces, enums, etc.) from this folder or in `app/shared`. To be able to import from more, edit in the `[ts-loader include section]` in `chrome-extension-webpack.config.js`.
- `app/extension-popup` folder: the _Popup page_.
- `app/extension-options` folder: the _Options page_.
- `app/shared` folder: contains common code shared between 2 mentions builds above.
