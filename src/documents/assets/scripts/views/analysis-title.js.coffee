views = PLP.namespace('views')
views = PLP.namespace('views')

class views['analysis-title'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement $('#analysis-title')
    @button = views['analysis-title-button'].singleton()
    @render()

  render: ->
    @$el.find('h1 span').after @button.el
