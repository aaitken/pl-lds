class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'}

  expenses: ->
    PLP.views['expenses-table'].singleton()
    PLP.views['analysis-title'].singleton()
    PLP.views['validation-switch'].singleton({$hook: $('#top-tabs')})
    PLP.views['expenses-deal-reports-btn'].singleton({$hook: $('#submenu')})
    PLP.views['body'].singleton()
    
