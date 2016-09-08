views = PLP.namespace('views')

class views['expenses-table-override'] extends Backbone.View

  tagName: 'button'
  className: 'slds-button'
  
  initialize: (options = {})->
    @$el.text 'Override'
    @parent = options.parent || ''

  events:
    'click': ->
      if @$el.text() is "Override"
        @$el.text "Revert"
        @parent.tbody.makeOpexEditable() 
      else
        @$el.text "Override"
        @parent.tbody.makeOpexRO()
