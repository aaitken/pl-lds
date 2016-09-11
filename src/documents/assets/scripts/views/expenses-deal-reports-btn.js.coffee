views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['expenses-deal-reports-btn'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'div'
  attributes:
    class: 'plp-deal-reports-button slds-dropdown-trigger slds-dropdown-trigger--click'
    'data-view': 'expenses-deal-reports-btn'

  events:
    click: ->
      @bodyView.closeAll()
      @toggleMenu(event)
  
  initialize: (options)->
    @$hook = options.$hook
    @bodyView = views['body'].singleton()
    @snippet = _.template(snippets['expenses-deal-reports-btn'])
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.after @el

  toggleMenu: (event)->
    event.stopPropagation()
    @$el.toggleClass('slds-is-open')
