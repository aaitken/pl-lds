views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['expenses-deal-reports-btn'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'div'
  className: 'plp-deal-reports-button plp-right slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['expenses-deal-reports-btn'])
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.append @el
