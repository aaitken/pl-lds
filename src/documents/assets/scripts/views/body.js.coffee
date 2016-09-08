views = PLP.namespace('views')

class views['body'] extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @setElement('body')
