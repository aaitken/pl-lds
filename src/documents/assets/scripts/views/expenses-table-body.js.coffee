views = PLP.namespace('views')
templates = PLP.namespace('templates')
content = PLP.namespace('content')

class views['expenses-table-body'] extends Backbone.View

  initialize: (options = {})->
    @rowTemplate = _.template(templates['expenses-table-body-row'])
    @inputTemplate = _.template(templates['text-field'])
    @selectTemplate = _.template(templates['yes-no-select'])
    @content = content['expenses-table'].tbody
    @render()

  render: ->
    _.each @content.reverse(), (item)=>
      @$el.prepend @rowTemplate({content: item})
      @$('td:eq(4)').html(@inputTemplate)
      @$('td:eq(2), td:eq(3), td:eq(5)').html(@selectTemplate)
