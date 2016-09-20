views = PLP.namespace('views')

class PLP.Router extends Backbone.Router

  routes: {
    expenses: 'expenses'
    units: 'units'
    'rents-and-incentives': 'rentsAndIncentives'
    'tenant-improvements': 'tenantImprovements'
    commissions: 'commissions'
    'rent-indexation': 'rentIndexation'
    guarantees: 'guarantees'
    options: 'options'
  }

  initialize: ->
    @on 'route', ->
      views['submenu'].singleton().highlight()

  expenses: ->
    views['expenses-hanging-rack'].singleton({$hook: $('#deal-reports')}).show()

  units: ->
    views['units-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  rentsAndIncentives: ->
    views['rents-and-incentives-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  tenantImprovements: ->
    views['tenant-improvements-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  commissions: ->
    views['commissions-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  rentIndexation: ->
    views['rent-indexation-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  guarantees: ->
    views['guarantees-placeholder'].singleton({$hook: $('#deal-reports')}).show()

  options: ->
    views['options'].singleton({$hook: $('#deal-reports')}).show()
    
