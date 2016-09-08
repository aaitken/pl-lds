views = PLP.namespace('views')

class views['expenses-table'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement $('#expenses-table')
    @thead = new views['expenses-table-head'] {
      el: @$('#expenses-table-head')}
    @tbody = new views['expenses-table-body'] {
      el: @$('#expenses-table-body')}

  hide: ->
    @$el.hide()
