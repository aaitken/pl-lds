views = PLP.namespace('views')

class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'}

  expenses: ->
    views['submenu'].singleton({$hook: $('#kpi-container')})
    views['expenses-hanging-rack'].singleton({$hook: $('#submenu')})
    views['expenses-table'].singleton()
    views['analysis-title'].singleton()
    views['validation-switch'].singleton({$hook: $('#top-tabs')})
    views['expenses-deal-reports-btn'].singleton({$hook: $('#submenu')})
    views['body'].singleton()
    views['submenu'].singleton().size()
    
