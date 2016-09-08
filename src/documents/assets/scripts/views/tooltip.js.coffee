views = PLP.namespace('views')
templates = PLP.namespace('templates')

class views['tooltip'] extends Backbone.View

  tagName: 'div'
  attributes:
    class: 'slds-popover slds-popover--tooltip slds-nubbin--top'
    role: 'tooltip'

  initialize: (options = {})->
    @content = options.tip
    @template = _.template(templates['tooltip'])
    @render()

  render: ->
    @$el.html @template({content: @content})


