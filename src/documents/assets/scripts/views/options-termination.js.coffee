views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-termination'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  attributes:
      'data-view': 'options-termination'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-termination'])
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.after(@el)
