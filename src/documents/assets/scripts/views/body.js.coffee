views = PLP.namespace('views')

class views['body'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement('body')

  events:
    click: 'closeAll'

  closeAll: ->
    views['analysis-title-menu'].singleton().$el.removeClass('slds-is-open')
    views['analysis-title-settings'].singleton().$el.removeClass('slds-is-open')
    
