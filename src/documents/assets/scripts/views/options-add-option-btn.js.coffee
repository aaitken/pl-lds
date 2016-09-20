views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-add-option-btn'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'div'
  attributes:
    class: 'slds-dropdown-trigger slds-dropdown-trigger--click slds-m-bottom--x-large'
    'data-view': 'options-add-option-btn'

  events:
    click: ->
      @bodyView.closeAll()
      @toggleMenu(event)
  
  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-add-option-btn'])
    @bodyView = views['body'].singleton()
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.find('h1:eq(0)').after(@el)
    

  toggleMenu: (event)->
    event.stopPropagation()
    @$el.toggleClass('slds-is-open')
