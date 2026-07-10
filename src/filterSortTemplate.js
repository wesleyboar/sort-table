/**
 * Inner HTML for the `<template id="filtersort-filters">` element.
 * Injected into the DOM by `filterSort.js` if not already present.
 */
export const FILTER_TEMPLATE_HTML = /* html */`
  <fieldset class="js-filtersort-filter-list filtersort-filter-list">
    <legend class="sr-only">Results in the table update as you type or select filters</legend>

    <label class="filtersort-filter mr-auto">
      <i
        class="filtersort-filter__icon"
        aria-label="Search"
      >Search</i>
      <input
        type="search"
        class="filtersort-filter__input"
        placeholder="Search…"
      />
      <output class="js-filtersort-total" aria-atomic="true"></output>
    </label>

    <label class="filtersort-filter">
      <span class="filtersort-filter__label"></span>
      <select class="filtersort-filter__input">
        <option value="">any</option>
      </select>
    </label>
  </fieldset>`;
