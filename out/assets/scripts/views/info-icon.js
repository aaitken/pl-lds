(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['info-icon'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'span';

    _Class.prototype.className = 'slds-icon_container';

    _Class.prototype.events = {
      mouseenter: function() {
        return this.to = setTimeout(((function(_this) {
          return function() {
            return _this.showTip();
          };
        })(this)), 300);
      },
      mouseleave: 'killTip'
    };

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.tip = options.tip;
      this.snippet = _.template(snippets['info-icon']);
      this.TooltipView = views['tooltip'];
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet());
    };

    _Class.prototype.getOffset = function() {
      return this.$el.offset();
    };

    _Class.prototype.showTip = function() {
      this.to = null;
      this.offset = this.getOffset();
      this.tooltipView = new this.TooltipView({
        tip: this.tip
      });
      views['body'].singleton().$el.append(this.tooltipView.el);
      this.position();
      return this.tooltipView.$el.fadeIn(100);
    };

    _Class.prototype.position = function() {
      if (parseInt(this.offset.left - 151 + this.tooltipView.$el.width()) > views['body'].singleton().$el.width() - 30) {
        this.tooltipView.$el.attr('style', "position:absolute; left:" + (this.offset.left - 280) + "px; top:" + (parseInt(this.offset.top + 35)) + "px;");
        return this.tooltipView.$el.addClass('slds-nubbin--top-right');
      } else {
        this.tooltipView.$el.attr('style', "position:absolute; left:" + (this.offset.left - 151) + "px; top:" + (parseInt(this.offset.top + 35)) + "px;");
        return this.tooltipView.$el.addClass('slds-nubbin--top');
      }
    };

    _Class.prototype.killTip = function() {
      if (this.to) {
        return clearTimeout(this.to);
      } else {
        return this.tooltipView.$el.fadeOut(100, (function(_this) {
          return function() {
            return _this.tooltipView.remove();
          };
        })(this));
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);
