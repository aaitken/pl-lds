views = PLP.namespace('views')
templates = PLP.namespace('templates')
content = PLP.namespace('content')

class views['expenses-table-head'] extends Backbone.View

  initialize: (options = {})->
    @iconTemplate = _.template(templates['info-icon'])
    @content = content['expenses-table'].help
    @render()

  render: ->
    _.each @content, (item, i)=>
      @$("th:eq(#{parseInt(i+1)})").find('span').after @iconTemplate
