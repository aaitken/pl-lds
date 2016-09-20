views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options'])
    @render()

  render: ->
    @$el.html @snippet
    @$hook.after @el

  show: ->
    @$hook.nextAll().hide()
    @$el.show()
