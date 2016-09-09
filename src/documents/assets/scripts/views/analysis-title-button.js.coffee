views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['analysis-title-button'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()


  tagName: 'div'
  attributes:
    class: 'slds-dropdown-trigger slds-dropdown-trigger--click'
    'data-view': 'analysis-title-button'

  events:
    click: ->
      @toggleMenu(event)
  
  initialize: ->
    @snippet = _.template(snippets['analysis-title-button'])
    @render()

  render: ->
    @$el.html(@snippet)

  toggleMenu: (event)->
    event.stopPropagation()
    @$el.toggleClass('slds-is-open')
