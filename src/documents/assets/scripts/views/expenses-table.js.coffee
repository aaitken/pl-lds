views = PLP.namespace('views')

class views['expenses-table'] extends Backbone.View

  initialize: ->
    @setElement $('#bbv-expenses-table')
    @overrideBtn = new views.Override {
      el: @$('#expenses-table-override')
      parent: this}
    @tbody = new views['expenses-table-body-row'] {
      el: @$('#bbv-expenses-table-body')}
