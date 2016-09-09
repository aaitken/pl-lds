views = PLP.namespace('views')
views = PLP.namespace('views')

class views['analysis-title'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement $('#analysis-title')
    @menu = views['analysis-title-menu'].singleton()
    @settings = views['analysis-title-settings'].singleton()
    @render()

  render: ->
    @$el.find('h1 span').after @menu.el
    @menu.$el.after @settings.el
    
