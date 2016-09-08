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
    @offset = @getOffset()
    @tooltipView = new @TooltipView {tip: @tip}
    views['body'].singleton().$el.append @tooltipView.el
    @position()
    @tooltipView.$el.fadeIn(100)

  position: ->
    if parseInt(@offset.left-151 + @tooltipView.$el.width()) > views['body'].singleton().$el.width()
      @tooltipView.$el.attr('style', "position:absolute; left:#{@offset.left-280}px; top:#{parseInt(@offset.top+35)}px;")
      @tooltipView.$el.addClass('slds-nubbin--top-right') 
    else
      @tooltipView.$el.attr('style', "position:absolute; left:#{@offset.left-151}px; top:#{parseInt(@offset.top+35)}px;")
      @tooltipView.$el.addClass('slds-nubbin--top')
    

  killTip: ->
    if @to
      clearTimeout(@to)
    else
      @tooltipView.$el.fadeOut 100, =>
        @tooltipView.remove()
