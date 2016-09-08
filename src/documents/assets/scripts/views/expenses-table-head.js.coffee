views = PLP.namespace('views')
content = PLP.namespace('content')

class views['expenses-table-head'] extends Backbone.View

  initialize: (options = {})->
    that = this
    @InfoIconView = views['info-icon']
    @tipsContent = content['expenses-table'].tips
    @ExpensesTableOverrideView = views['expenses-table-override'] 
    @writeChildren()


  writeChildren: ->

    #info icons
    that = this
    _.each @$el.find('th:gt(0) span'), (item, i)->
      infoIconView = new that.InfoIconView({tip: that.tipsContent[i]})
      $(item).after infoIconView.el

    #override
    expensesTableOverrideView = new @ExpensesTableOverrideView()
    @$el.find('th:eq(1) span:eq(1)').after expensesTableOverrideView.el
