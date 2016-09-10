views = PLP.namespace('views')

class views['body'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement('body')

  events:
    click: 'closeAll'

  closeAll: ->
    $('*').removeClass('slds-is-open')
