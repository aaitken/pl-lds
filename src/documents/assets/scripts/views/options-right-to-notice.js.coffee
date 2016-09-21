views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-right-to-notice'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  attributes:
      'data-view': 'options-right-to-notice'

  events: ->
    click: 'remove'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-right-to-notice'])
    @rowSnippet = _.template(snippets['options-right-to-notice-row'])
    @render()

  writeRow: ->
    @$el.find('tbody').prepend(@rowSnippet)
    @$el.find('tbody input:eq(0)').focus()

    
  writeTable: ->
    if $("[data-view='options-right-to-notice']").length is 0
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
