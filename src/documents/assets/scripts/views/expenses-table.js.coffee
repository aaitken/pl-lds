views = PLP.namespace('views')

class views['expenses-table'] extends Backbone.View

  initialize: ->
    @setElement $('#bbv-expenses-table')
    @overrideBtn = new views['expenses-table-override'] {
      el: @$('#expenses-table-override')
      parent: this}
    @thead = new views['expenses-table-head'] {
      el: @$('#bbv-expenses-table-head')}
    @tbody = new views['expenses-table-body'] {
      el: @$('#bbv-expenses-table-body')}
