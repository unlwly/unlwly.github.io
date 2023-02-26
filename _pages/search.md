---
layout: page
title: Search
---

<style>
	#search-container {
	    max-width: 100%;
	}
	input[type=text] {
		font-size: normal;
	    outline: none;
	    padding: 1rem;
		background: var(--bg-stb);
	    width: 100%;
		-webkit-appearance: none;
		font-family: inherit;
		font-size: 100%;
		border: none;
	}
	#results-container {
		margin: .5rem 0 5em 0;
	}
</style>

<div id="search-container">
<input type="text" id="search-input" placeholder="Search...">
<ol id="results-container"></ol>
</div>

<script src="/assets/js/search-script.min.js" type="text/javascript"></script>
<script type="text/javascript">
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/assets/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{description}">{title}</a></li>',
  noResultsText: 'No results found',
  limit: 10,
  fuzzy: false,
  exclude: ['Welcome']
})
</script>