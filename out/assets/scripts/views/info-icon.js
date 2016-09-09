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
        })(this)), 250);
      },
      mouseleave: 'killTip'
    };

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.tip = options.tip;
      this.bodyView = views['body'].singleton();
      this.snippet = _.template(snippets['info-icon']);
      this.TooltipView = views['tooltip'];
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet());
    };

    _Class.prototype.showTip = function() {
      this.to = null;
      this.offset = this.$el.offset();
      this.tooltipView = new this.TooltipView({
        tip: this.tip
      });
      this.bodyView.$el.append(this.tooltipView.el);
      this.position();
      return this.tooltipView.$el.fadeIn(150);
    };

    _Class.prototype.getNubbinDescription = function() {
      var nubbin;
      nubbin = ['top', ''];
      if (+this.offset.left - 151 + this.tooltipView.$el.width() > views['body'].singleton().$el.width() - 30) {
        nubbin[1] = 'right';
      }
      if (+$(window).height() + views['body'].singleton().$el.scrollTop() < +this.offset.top + this.tooltipView.$el.height() + 35) {
        nubbin[0] = 'bottom';
      }
      return this.nubbinDescription = "" + nubbin[0] + nubbin[1];
    };

    _Class.prototype.position = function() {
      var $elTooltip;
      console.log(this.getNubbinDescription());
      $elTooltip = this.tooltipView.$el;
      if (this.nubbinDescription === 'top') {
        $elTooltip.css({
          position: 'absolute',
          left: (this.offset.left - 151) + "px",
          top: (+this.offset.top + 35) + "px"
        });
        $elTooltip.addClass('slds-nubbin--top');
      }
      if (this.nubbinDescription === 'topright') {
        $elTooltip.css({
          position: 'absolute',
          left: (this.offset.left - 280) + "px",
          top: (+this.offset.top + 35) + "px"
        });
        return $elTooltip.addClass('slds-nubbin--top-right');
      } else if (this.nubbinDescription === 'bottom') {
        $elTooltip.css({
          position: 'absolute',
          left: (this.offset.left - 151) + "px",
          top: (this.offset.top - this.tooltipView.$el.height() - 15) + "px"
        });
        return $elTooltip.addClass('slds-nubbin--bottom');
      } else if (this.nubbinDescription === 'bottomright') {
        $elTooltip.css({
          position: 'absolute',
          left: (this.offset.left - 280) + "px",
          top: (this.offset.top - this.tooltipView.$el.height() - 15) + "px"
        });
        return $elTooltip.addClass('slds-nubbin--bottom-right');
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
