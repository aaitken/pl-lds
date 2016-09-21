views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-termination'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  attributes:
      'data-view': 'options-termination'

  events: ->
    click: 'remove'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-termination'])
    @rowSnippet = _.template(snippets['options-termination-row'])
    @render()

  writeRow: ->
    @$el.find('tbody').prepend(@rowSnippet)
    
  writeTable: ->
    if $("[data-view='options-termination']").length is 0
      @$hook.after(@el)
    return this

  render: ->
    @$el.html(@snippet)
    @writeTable()

  remove: ->
    $target = $(event.target)
    targetName = $target.prop('tagName').toLowerCase()
    if targetName in ['use', 'svg']
      $target.parentsUntil('tbody').remove()
    if @$el.find('tbody tr').length is 0
      @$el.detach()

