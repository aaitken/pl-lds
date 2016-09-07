views = PLP.views
templates = PLP.templates

class views.Tbody extends Backbone.View

  initialize: (options = {})->
    @template = _.template(templates['text-field'])
    @values = []
    @parent = options.parent
    @opexCells = @$('td:nth-child(2)').slice(0, -1)

  makeOpexEditable: ->
    @rememberValues()
    _.each @opexCells, (cell, i)=>
      $(cell).html @template({val: @values[i]})

  makeOpexRO: ->
    _.each @opexCells, (cell, i)=>
      $(cell).text(@values[i])

  rememberValues: ->
    _.each @opexCells, (cell)=>
      @values.push $(cell).text().trim()
    
