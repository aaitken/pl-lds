views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['rents-and-incentives-placeholder'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'h1'
  attributes:
    class: 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer'
    style: 'font-weight: regular'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['rents-and-incentives-placeholder'])
    @render()

  render: ->
    @$el.html @snippet
    @$hook.after @el

  show: ->
    @$hook.nextAll().hide()
    @$el.show()
