views = PLP.namespace('views')

class views['expenses-table'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement $('#expenses-table')
    @thead = new views['expenses-table-head'] {
      el: @$('#expenses-table-head')}
    @tbody = views['expenses-table-body'].singleton {
      el: @$('#expenses-table-body')}

  override: ->
    _.each @tbody.rowViews, (item)->
      item.makeOpexEditable()

  revert: ->
    _.each @tbody.rowViews, (item)->
      item.makeOpexRO()
