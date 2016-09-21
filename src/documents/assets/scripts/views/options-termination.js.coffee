views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-termination'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  attributes:
      'data-view': 'options-termination'
      'style': 'display: none'

  events: ->
    click: 'remove'

  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-termination'])
    @rowSnippet = _.template(snippets['options-termination-row'])
    @render()

  writeRow: ->
    setTimeout (=>
      @$el.find('tbody').prepend(@rowSnippet)
      @$el.find('tbody input:eq(0)').focus()
      @$el.removeAttr('style')), 25 #timeout fixes non-rendering svg
    
    
  writeTable: ->
    if $("[data-view='options-termination']").length is 0
      @$hook.after(@el)
    @promote()
    return this

  promote: ->
    addOptionBtn = $("[data-view='options-add-option-btn']")[0]
    if @$el.prev()[0] isnt addOptionBtn
      $(addOptionBtn).after @$el

  render: ->
    @$el.html(@snippet)

  remove: ->
    $target = $(event.target)
    targetName = $target.prop('tagName').toLowerCase()
    if targetName in ['use', 'svg']
      $target.parentsUntil('tbody').remove()
    if @$el.find('tbody tr').length is 0
      @$el.detach()

