views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['rent-indexation-placeholder'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'h1'
  attributes:
    class: 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer'
    style: 'font-weight: regular'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['rent-indexation-placeholder'])
    @render()

  render: ->
    @$el.html @snippet
    @$hook.after @el

  show: ->
    @$hook.nextAll().hide()
    @$el.show()
