class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'}

  expenses: ->
    PLP.views['expenses-table'].singleton()
    PLP.views['analysis-title'].singleton()
    PLP.views['validation-switch'].singleton({$hook: $('#top-tabs')})
    PLP.views['body'].singleton()
    
