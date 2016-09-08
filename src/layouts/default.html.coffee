--- cson

styles: [
  '/assets/styles/salesforce-lightning-design-system.css'
  '/assets/styles/overrides.css'
  '/assets/styles/app.css']

scripts: [
  '/assets/scripts/vendors.js'
  '/assets/scripts/utils.js'
  '/assets/scripts/views.js'
  '/assets/scripts/content.js'
  '/assets/scripts/templates.js'
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
