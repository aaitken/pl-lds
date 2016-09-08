--- cson

styles: [
  '/assets/styles/salesforce-lightning-design-system.css'
  '/assets/styles/overrides.css'
  '/assets/styles/app.css']

scripts: [
  '/assets/scripts/vendor/jquery-3.1.0.js'
  '/assets/scripts/vendor/underscore-1.8.3.js'
  '/assets/scripts/vendor/backbone-1.3.3.js'
  '/assets/scripts/utils/namespacer.js'
  '/assets/scripts/content/expenses-table.js'
  '/assets/scripts/views/expenses-table.js'
  '/assets/scripts/views/expenses-table-body-row.js'
  '/assets/scripts/views/override.js'
  '/assets/scripts/templates/expenses-table-body-row.js'
  '/assets/scripts/templates/text-field.js'
  '/assets/scripts/templates/yes-no-select.js'
  '/assets/scripts/app.js']

---

doctype 5
html ->
  head ->
    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url, media:"all"
  body ->
    text @content

    #insert script using frontend plugin
    #this picks up incrementally-named document scripts as well
    for url in @assets('scripts')
      script src:url, defer:"defer"
