(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['body'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      return this.setElement('body');
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
  var content, snippets, templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  snippets = PLP.namespace('snippets');

  content = PLP.namespace('content');

  views['expenses-table-body-row'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'tr';

    _Class.prototype.initialize = function(options) {
      this.$opexCell = null;
      this.content = options.content;
      this.template = _.template(templates['expenses-table-body-row']);
      this.selectSnippet = _.template(snippets['yes-no-select']);
      this.inputTemplate = _.template(templates['text-field']);
      this.render();
      return this.attachData();
    };

    _Class.prototype.render = function() {
      var $el;
      $el = this.$el;
      $el.html(this.template({
        content: this.content
      }));
      this.$opexCell = $el.find('td:eq(1)');
      $el.find('td:eq(2), td:eq(3), td:eq(5)').html(this.selectSnippet);
      return $el.find('td:eq(4)').html(this.inputTemplate({
        content: ''
      }));
    };

    _Class.prototype.attachData = function() {
      return this.$opexCell.data({
        val: this.$opexCell.text().trim()
      });
    };

    _Class.prototype.makeOpexEditable = function() {
      return this.$opexCell.html(this.inputTemplate({
        content: this.$opexCell.data('val')
      }));
    };

    _Class.prototype.makeOpexRO = function() {
      return this.$opexCell.html(this.$opexCell.data('val'));
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
  var content, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  content = PLP.namespace('content');

  views['expenses-table-body'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function(options) {
      if (options == null) {
        options = {};
      }
      return this.instance != null ? this.instance : this.instance = new this(options);
    };

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.RowView = views['expenses-table-body-row'];
      this.rowViews = [];
      this.bodyContent = content['expenses-table'].tbody;
      return this.writeChildren();
    };

    _Class.prototype.writeChildren = function() {
      return _.each(this.bodyContent.reverse(), (function(_this) {
        return function(item) {
          _this.rowViews.push(new _this.RowView({
            content: item
          }));
          return _this.$el.prepend(_this.rowViews[_this.rowViews.length - 1].el);
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
  var content, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  content = PLP.namespace('content');

  views['expenses-table-head'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.initialize = function(options) {
      var that;
      if (options == null) {
        options = {};
      }
      that = this;
      this.InfoIconView = views['info-icon'];
      this.tipsContent = content['expenses-table'].tips;
      this.ExpensesTableOverrideView = views['expenses-table-override'];
      return this.writeChildren();
    };

    _Class.prototype.writeChildren = function() {
      var expensesTableOverrideView, that;
      that = this;
      _.each(this.$el.find('th:gt(0) span'), function(item, i) {
        var infoIconView;
        infoIconView = new that.InfoIconView({
          tip: that.tipsContent[i]
        });
        return $(item).after(infoIconView.el);
      });
      expensesTableOverrideView = new this.ExpensesTableOverrideView();
      return this.$el.find('th:eq(1) span:eq(1)').after(expensesTableOverrideView.el);
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['expenses-table-override'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'button';

    _Class.prototype.className = 'slds-button';

    _Class.prototype.initialize = function() {
      return this.$el.text('Override');
    };

    _Class.prototype.events = {
      'click': function() {
        if (this.$el.text() === "Override") {
          this.$el.text("Revert");
          return views['expenses-table'].singleton().override();
        } else {
          this.$el.text("Override");
          return views['expenses-table'].singleton().revert();
        }
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['expenses-table'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      this.setElement($('#expenses-table'));
      this.thead = new views['expenses-table-head']({
        el: this.$('#expenses-table-head')
      });
      return this.tbody = views['expenses-table-body'].singleton({
        el: this.$('#expenses-table-body')
      });
    };

    _Class.prototype.override = function() {
      return _.each(this.tbody.rowViews, function(item) {
        return item.makeOpexEditable();
      });
    };

    _Class.prototype.revert = function() {
      return _.each(this.tbody.rowViews, function(item) {
        return item.makeOpexRO();
      });
    };

    return _Class;

  })(Backbone.View);

}).call(this);
;(function() {
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
      if (parseInt(this.offset.left - 151 + this.tooltipView.$el.width()) > views['body'].singleton().$el.width()) {
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
;(function() {
  var templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  views['tooltip'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-popover slds-popover--tooltip',
      role: 'tooltip'
    };

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.content = options.tip;
      this.template = _.template(templates['tooltip']);
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.template({
        content: this.content
      }));
    };

    return _Class;

  })(Backbone.View);

}).call(this);
