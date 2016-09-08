views = PLP.namespace('views')

class views['expenses-table-head'] extends Backbone.View

  initialize: (options = {})->
    that = this
    @InfoIconView = views['info-icon']
    @ExpensesTableOverrideView = views['expenses-table-override'] 
    @init()


  init: ->

    #info icons
    that = this
    _.each @$el.find('th:gt(0) span'), (item)->
      infoIconView = new that.InfoIconView()
      $(item).after infoIconView.el

    #override
    expensesTableOverrideView = new @ExpensesTableOverrideView()
    @$el.find('th:eq(1) span:eq(1)').after expensesTableOverrideView.el
