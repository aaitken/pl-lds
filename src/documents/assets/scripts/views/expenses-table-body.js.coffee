views = PLP.namespace('views')
content = PLP.namespace('content')

class views['expenses-table-body'] extends Backbone.View

  @singleton = (options = {})->
    @instance ?= new this(options)

  initialize: (options = {})->
    @RowView = views['expenses-table-body-row']
    @rowViews = []
    @bodyContent = content['expenses-table'].tbody
    @writeChildren()
    
  writeChildren: ->
    _.each @bodyContent.reverse(), (item)=>
      @rowViews.push new @RowView({content: item})
      @$el.prepend @rowViews[@rowViews.length - 1].el
