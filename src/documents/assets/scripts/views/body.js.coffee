views = PLP.namespace('views')

class views['body'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement('body')

  events:
    click: 'closeAll'
    touch: 'closeAll'

  closeAll: ->
    $('*').removeClass('slds-is-open')
