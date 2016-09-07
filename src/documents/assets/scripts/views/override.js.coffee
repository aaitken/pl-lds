views = window.PLP.views

class views.Override extends Backbone.View

  constructor: ->
    @el = $('#btn-override')
    super()

  events:
    'click': ->
      alert 'click'

  initialize: ->
    alert 'init'
