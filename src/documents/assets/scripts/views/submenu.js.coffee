views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['submenu'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  events:
    click: (event)->
      if event.target.nodeName.toLowerCase() is 'a'
        @handleSelection(event.target)

  tagName: 'div'
  attributes:
    id: 'submenu'
    class: 'plp-submenu slds-m-bottom--x-large slds-text-title'

  handleSelection: (target)->
    @$el.find('a').removeClass('plp-is-active')
    $(target).addClass('plp-is-active')
  
  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['submenu'])
    @render()

  render: ->
    @$el.html @snippet()
    @$hook.after @el
