views = PLP.namespace('views')
snippets = PLP.namespace('snippets')

class views['info-icon'] extends Backbone.View

  tagName: 'span'
  className: 'slds-icon_container'

  events:
    mouseenter: ->
      @to = setTimeout (=>
        @showTip()), 300
    mouseleave: 'killTip'

  initialize: (options = {})->
    @tip = options.tip
    @snippet = _.template(snippets['info-icon'])
    @TooltipView = views['tooltip']  
    @render()

  render: ->
    @$el.html @snippet()

  getOffset: ->
    @$el.offset()
  
  showTip: ->
    @to = null
    offset = @getOffset()
    @tooltipView = new @TooltipView {tip: @tip}
    views['body'].singleton().$el.append @tooltipView.el
    @tooltipView.$el.attr('style', "position:absolute; left:#{offset.left-151}px; top:#{parseInt(offset.top+35)}px;")
    @tooltipView.$el.fadeIn(100)

  killTip: ->
    if @to
      clearTimeout(@to)
    else
      @tooltipView.$el.fadeOut 100, =>
        @tooltipView.remove()
