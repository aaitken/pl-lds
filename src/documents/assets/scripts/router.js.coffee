views = PLP.namespace('views')

class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'
    units: 'units'}

  initialize: ->
    @on 'route', ->
      views['submenu'].singleton().highlight()

  expenses: ->
    views['expenses-hanging-rack'].singleton({$hook: $('#deal-reports')}).show()
    views['expenses-table'].singleton()

  units: ->
    views['units-placeholder'].singleton({$hook: $('#deal-reports')}).show()
    
