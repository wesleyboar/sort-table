# `@tacc/sortable-table`

Sortable, filterable HTML tables powered by [List.js](https://listjs.com/) — for TACC CMS pages.

## Usage

### Via CDN (jsDelivr)

```html
<!-- CSS -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@tacc/sortable-table@0.1.0/src/sortableTable.css" />

<!-- List.js (required global dependency) -->
<script src="https://cdn.jsdelivr.net/npm/list.js@2.3.1/dist/list.min.js"
  crossorigin="anonymous"></script>

<!-- JS -->
<script type="module">
  import sortableTable from 'https://cdn.jsdelivr.net/npm/@tacc/sortable-table@0.1.0/src/sortableTable.js';
  sortableTable();
</script>
```

> **Note:** During pre-release, use commit SHA URLs instead of version tags:
> ```
> https://cdn.jsdelivr.net/gh/wesleyboar/sortable-table@<sha>/src/sortableTable.js
> ```

### Table markup

Add `class="js-sortable"` to any `<table>`. A `<thead>` with column headers and a `<tbody>` are required.

```html
<table class="js-sortable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Frontera</td><td>Active</td></tr>
    <tr><td>Stampede3</td><td>Active</td></tr>
  </tbody>
</table>
```

### Filter UI

To auto-build a filter bar above a table, add `id` and `data-sortable-filters` (JSON array of filter specs) to the table:

```html
<table id="my-table" class="js-sortable"
  data-sortable-filters='[
    { "type": "search" },
    { "type": "select", "column": 1 }
  ]'>
  …
</table>
```

Filter spec types:

| Type | Required fields | Optional fields |
|---|---|---|
| `"search"` | `type` | `placeholder` |
| `"select"` | `type`, `column` (0-based index) | `label` |

The filter `<template>` is self-injected by `sortableTable.js` on first call. No extra HTML is required.

### `sortableTable()` options

| Option | Default | Description |
|---|---|---|
| `scopeElement` | `document` | Root element to search for tables |
| `tableSelector` | `table.js-sortable` | CSS selector for target tables |
| `notSortableSelector` | `th.not-sortable` | Columns matching this are excluded |
| `buttonClass` | `''` | Extra class(es) on sort `<button>` elements (e.g. `'btn btn-link'`) |

## Third-party skin support

`sortableTable.css` includes optional visual rules that activate when these libraries are also loaded:

- **[TACC Core-Styles](https://github.com/TACC/Core-Styles):** Enhances the result-count font size (`--global-font-size--small`) and sort buttons styled as links (`.c-button--as-link`).
- **[Bootstrap](https://getbootstrap.com/) ≥4:** Supports sort buttons styled as links (`.btn-link`).

The table sorts and filters correctly without either library.

## Requirements

- `list.js` ≥2 must be loaded as `window.List` before `sortableTable()` is called.
