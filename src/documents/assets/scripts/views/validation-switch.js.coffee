views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['validation-switch'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)


  tagName: 'div'
  attributes:
    class: 'plp-right slds-form-element'
    'data-view': 'validation-switch'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['validation-switch'])
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.after @el
