views = PLP.namespace('views')
templates = PLP.namespace('templates')

class views['info-icon'] extends Backbone.View

  tagName: 'span'
  className: 'slds-icon_container'

  events:
    click: ->
      alert 'info'

  initialize: ->
    @template = _.template(templates['info-icon'])
    @render()

  render: ->
    @$el.html @template()
