views = window.PLP.views

class views.Override extends Backbone.View

  initialize: (options = {})->
    @parent = options.parent

  events:
    'click': ->
      if @$el.text() is "Override"
        @$el.text "Revert"
        @parent.tbody.makeOpexEditable() 
      else
        @$el.text "Override"
        @parent.tbody.makeOpexRO()
