# Tailwind CSS Glow

A plugin for Tailwind CSS v3.0+ that provides utilities for glow.

## Installation

Install the plugin from npm or yarn:

```bash
npm i -D tailwindcss-glowup
# or yarn
yarn add -D tailwindcss-glowup
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-glowup'),
    // ...
  ],
}
```

## Basic usage

Now you can add the glow class to any vanilla HTML:

```
<div class="glow-sky-500 bg-sky-500"></div>
```

## License

Under the [MIT LICENSE](LICENSE.md)
