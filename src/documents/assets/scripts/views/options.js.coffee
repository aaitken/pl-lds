views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  attributes:
    'data-view': 'options'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options'])
    @render()
    @writeChildren()

  render: ->
    @$el.html @snippet
    @$hook.after @el

  show: ->
    @$hook.nextAll().hide()
    @$el.show()

  writeChildren: ->
    views['options-add-option-btn'].singleton({$hook: @$el})
