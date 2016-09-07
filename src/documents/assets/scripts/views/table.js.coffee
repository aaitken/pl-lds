views = window.PLP.views

class views.Table extends Backbone.View

  initialize: ->
    @setElement $('#expenses-table')
    @overrideBtn = new views.Override {
      el: @$('#expenses-table-override')
      parent: this}
    @tbody = new views.Tbody {
      el: @$('#expenses-table-body')
      parent: this}

          

  
