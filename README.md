# Tailwind CSS Glowing

[![NPM version][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE)
[![Total Downloads][ico-downloads]][link-downloads]

A plugin for Tailwind CSS v3.0+ that provides utilities for glow.

## Installation

Install the plugin from npm or yarn:

```bash
npm i -D tailwindcss-glowing
# or yarn
yarn add -D tailwindcss-glowing
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-glowing'),
    // ...
  ],
}
```

## Basic usage

Now you can add the glow class to any vanilla HTML:

```html
<div class="glow glow-sky-500"></div>
```

Use the `glow-sm`, `glow`, `glow-md`, `glow-lg`, `glow-xl`, or `glow-2xl` utilities to apply different sized outer grow to an element:

```html
<div class="glow-md ..."></div>
<div class="glow-lg ..."></div>
<div class="glow-xl ..."></div>
<div class="glow-2xl ..."></div>
```

## License

Under the [MIT LICENSE](LICENSE.md)

[ico-version]: https://img.shields.io/npm/v/tailwindcss-glowing?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/tailwindcss-glowing?style=flat-square

[link-npm]: https://www.npmjs.com/package/tailwindcss-glowing
[link-downloads]: https://www.npmjs.com/package/tailwindcss-glowing
