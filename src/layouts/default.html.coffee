--- cson

styles: [
  'assets/styles/salesforce-lightning-design-system.css']

scripts: []

---

doctype 5
html ->
  head ->
    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url, media:"all"
  body ->
    @content
