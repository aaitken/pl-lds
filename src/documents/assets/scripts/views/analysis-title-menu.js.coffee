views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['analysis-title-menu'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()


  tagName: 'div'
  attributes:
    class: 'slds-dropdown-trigger slds-dropdown-trigger--click'
    'data-view': 'analysis-title-menu'

  events:
    click: ->
      @bodyView.closeAll()
      @toggleMenu(event)
  
  initialize: ->
    @snippet = _.template(snippets['analysis-title-menu'])
    @bodyView = views['body'].singleton()
    @render()

  render: ->
    @$el.html(@snippet)

  toggleMenu: (event)->
    event.stopPropagation()
    @$el.toggleClass('slds-is-open')
