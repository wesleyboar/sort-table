/**
 * Inner HTML for the `<template id="sortable-table-filters">` element.
 * Injected into the DOM by `sortableTable.js` if not already present.
 */
export const FILTER_TEMPLATE_HTML = /* html */`
  <fieldset class="js-sortable-filter-list sortable-filter-list">
    <legend class="sr-only">Results in the table update as you type or select filters</legend>

    <label class="sortable-filter mr-auto">
      <i
        class="icon icon-search icon-md sortable-filter__icon"
        aria-label="Search"
      >Search</i>
      <input
        type="search"
        class="sortable-filter__input"
        placeholder="Search…"
      />
      <output class="js-sortable-total text-truncate" aria-atomic="true"></output>
    </label>

    <label class="sortable-filter">
      <span class="sortable-filter__label"></span>
      <select class="sortable-filter__input">
        <option value="">any</option>
      </select>
    </label>
  </fieldset>`;
