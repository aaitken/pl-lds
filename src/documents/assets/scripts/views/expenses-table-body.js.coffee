views = PLP.namespace('views')
content = PLP.namespace('content')

class views['expenses-table-body'] extends Backbone.View

  initialize: (options = {})->
    @rowView = views['expenses-table-body-row']
    @bodyContent = content['expenses-table'].tbody
    @writeChildren()
    
  writeChildren: ->
    that = this
    _.each @bodyContent.reverse(), (item)=>
      rowView = new @rowView({content: item})
      @$el.prepend rowView.el
