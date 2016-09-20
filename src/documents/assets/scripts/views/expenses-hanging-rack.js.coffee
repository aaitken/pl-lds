views = PLP.namespace('views')
snippets = PLP.namespace('snippets')


class views['expenses-hanging-rack'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['expenses-hanging-rack'])
    @render()
    @writeChildren()

  render: ->
    @$el.html @snippet
    @$hook.after @el

  show: ->
    @$hook.nextAll().hide()
    @$el.show()

  writeChildren: ->
    views['expenses-table'].singleton()
    
