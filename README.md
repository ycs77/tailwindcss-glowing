# Tailwind CSS Glowing

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
