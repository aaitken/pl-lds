views = PLP.namespace('views')

class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'}

  expenses: ->
    views['expenses-hanging-rack'].singleton({$hook: $('#deal-reports')})
    views['expenses-table'].singleton()
    
