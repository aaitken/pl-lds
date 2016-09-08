views = PLP.namespace('views')

class views['expenses-table-override'] extends Backbone.View

  tagName: 'button'
  className: 'slds-button'
  
  initialize: ->
    @$el.text 'Override'

  events:
    'click': ->
      if @$el.text() is "Override"
        @$el.text "Revert"
        views['expenses-table'].singleton().override()
      else
        @$el.text "Override"
        views['expenses-table'].singleton().revert()
