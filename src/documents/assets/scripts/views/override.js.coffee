views = window.PLP.views

class views.Override extends Backbone.View

  initialize: ->
    @setElement $('#btn-override')

  events:
    'click': ->
      if @$el.text() is "Override"
        @$el.text "Revert"
      else
        @$el.text "Override"

  
