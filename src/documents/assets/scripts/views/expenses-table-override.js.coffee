views = PLP.namespace('views')

class views['expenses-table-override'] extends Backbone.View

  tagName: 'button'
  className: 'slds-button'
  
  initialize: ->
    @$el.text 'Override'

  events:
    'click': ->
      $spans = @$el.parent().find('span:eq(0), span:eq(2)')
      if @$el.text() is "Override"
        @$el.text "Revert"
        views['expenses-table'].singleton().override()
        $($spans[0]).text 'Override'
        $spans.addClass('plp-highlight')
      else
        @$el.text "Override"
        views['expenses-table'].singleton().revert()
        $($spans[0]).text 'Budgeted'
        $spans.removeClass('plp-highlight')
