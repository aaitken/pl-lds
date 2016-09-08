views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['info-icon'] extends Backbone.View

  tagName: 'span'
  className: 'slds-icon_container'

  events:
    click: ->
      alert 'info'

  initialize: ->
    @template = _.template(snippets['info-icon'])
    @render()

  render: ->
    @$el.html @template()
