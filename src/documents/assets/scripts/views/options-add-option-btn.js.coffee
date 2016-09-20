views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['options-add-option-btn'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  tagName: 'div'
  attributes:
    class: 'slds-dropdown-trigger slds-dropdown-trigger--click slds-m-bottom--x-large'
    'data-view': 'options-add-option-btn'

  events:
    click: ->
      @bodyView.closeAll()
      @toggleMenu(event)
      @handle()
  
  initialize: (options)->
    @$hook = options.$hook
    @snippet = _.template(snippets['options-add-option-btn'])
    @bodyView = views['body'].singleton()
    @render()

  render: ->
    @$el.html(@snippet)
    @$hook.find('h1:eq(0)').after(@el)
    
  toggleMenu: (event)->
    event.stopPropagation()
    @$el.toggleClass('slds-is-open')

  handle: ->
    val = $(event.target).attr('data-value') || $(event.target).find('span').attr('data-value')
    if val
      switch val
        when 'termination' then console.log '1'
        when 'contraction' then console.log '2'
        when 'cancellation' then console.log '3'
        when 'right to notice' then console.log '4'
        when 'right to parking' then console.log '5'
        when 'relocation' then console.log '6'
        when 'right to remeasure' then console.log '7'
        when 'right to purchase' then console.log '8'
        when 'purchase' then console.log '9'
        when 'expansion' then console.log '10'
        when 'renewal' then console.log '11'
        when 'rofo' then console.log '12'
        when 'rofr' then console.log '13'
        else null
      @$el.removeClass('slds-is-open')
