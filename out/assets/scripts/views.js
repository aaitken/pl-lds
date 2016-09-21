(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['analysis-title-menu'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-dropdown-trigger slds-dropdown-trigger--click',
      'data-view': 'analysis-title-menu'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        return this.toggleMenu(event);
      }
    };

    _Class.prototype.initialize = function() {
      this.snippet = _.template(snippets['analysis-title-menu']);
      this.bodyView = views['body'].singleton();
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['analysis-title-settings'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-dropdown-trigger slds-dropdown-trigger--click',
      'data-view': 'analysis-title-settings'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        return this.toggleMenu(event);
      }
    };

    _Class.prototype.initialize = function() {
      this.snippet = _.template(snippets['analysis-title-settings']);
      this.bodyView = views['body'].singleton();
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.snippet);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views = PLP.namespace('views');

  views['analysis-title'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      this.setElement($('#analysis-title'));
      this.menu = views['analysis-title-menu'].singleton();
      this.settings = views['analysis-title-settings'].singleton();
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.find('h1 span').after(this.menu.el);
      return this.menu.$el.after(this.settings.el);
    };

    return _Class;

  })(Backbone.View);

}).call(this);

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

    _Class.prototype.events = {
      click: 'closeAll',
      touch: 'closeAll'
    };

    _Class.prototype.closeAll = function() {
      return $('*').removeClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['commissions-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['commissions-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['deal-reports-btn'] = (function(superClass) {
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

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      id: 'deal-reports',
      "class": 'plp-deal-reports-button slds-dropdown-trigger slds-dropdown-trigger--click',
      'data-view': 'deal-reports-btn'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        return this.toggleMenu(event);
      }
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.bodyView = views['body'].singleton();
      this.snippet = _.template(snippets['deal-reports-btn']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['expenses-hanging-rack'] = (function(superClass) {
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
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['expenses-hanging-rack']);
      this.render();
      return this.writeChildren();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    _Class.prototype.writeChildren = function() {
      return views['expenses-table'].singleton();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
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

(function() {
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

(function() {
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
      _.each(this.$el.find('th:gt(0) span:nth-child(1)'), function(item, i) {
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

(function() {
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
        var $spans;
        $spans = this.$el.parent().find('span:eq(0), span:eq(2)');
        if (this.$el.text() === "Override") {
          this.$el.text("Revert");
          views['expenses-table'].singleton().override();
          $($spans[0]).text('Override');
          return $spans.addClass('plp-highlight');
        } else {
          this.$el.text("Override");
          views['expenses-table'].singleton().revert();
          $($spans[0]).text('Budgeted');
          return $spans.removeClass('plp-highlight');
        }
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
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

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['guarantees-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['guarantees-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

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
      return "" + nubbin[0] + nubbin[1];
    };

    _Class.prototype.position = function() {
      var $elTooltip, bottomY, leftX, middleX, nubbinDescription, style, topY;
      $elTooltip = this.tooltipView.$el;
      middleX = this.offset.left - 151;
      leftX = this.offset.left - 287;
      bottomY = +this.offset.top + 35;
      topY = this.offset.top - this.tooltipView.$el.height() - 15;
      nubbinDescription = this.getNubbinDescription();
      if (nubbinDescription === 'top') {
        $elTooltip.css({
          left: middleX + "px",
          top: bottomY + "px"
        });
        $elTooltip.addClass('slds-nubbin--top');
      }
      if (nubbinDescription === 'topright') {
        $elTooltip.css({
          left: leftX + "px",
          top: bottomY + "px"
        });
        $elTooltip.addClass('slds-nubbin--top-right');
      } else if (nubbinDescription === 'bottom') {
        $elTooltip.css({
          left: middleX + "px",
          top: topY + "px"
        });
        $elTooltip.addClass('slds-nubbin--bottom');
      } else if (nubbinDescription === 'bottomright') {
        $elTooltip.css({
          left: leftX + "px",
          top: topY + "px"
        });
        $elTooltip.addClass('slds-nubbin--bottom-right');
      }
      style = $elTooltip.attr('style');
      return $elTooltip.attr('style', style += '; position: absolute');
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

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options-add-option-btn'] = (function(superClass) {
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

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'slds-dropdown-trigger slds-dropdown-trigger--click slds-m-bottom--x-large',
      'data-view': 'options-add-option-btn'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        this.toggleMenu(event);
        return this.handle();
      }
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options-add-option-btn']);
      this.bodyView = views['body'].singleton();
      this.terminationView = views['options-termination'];
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.find('h1:eq(0)').after(this.el);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    _Class.prototype.handle = function() {
      var val;
      val = $(event.target).attr('data-value') || $(event.target).find('span').attr('data-value');
      if (val) {
        this.$el.removeClass('slds-is-open slds-m-bottom--x-large').addClass('slds-m-bottom--medium');
        switch (val) {
          case 'termination':
            return this.terminationView.singleton({
              $hook: this.$el
            }).writeTable().writeRow();
          case 'contraction':
            return console.log('2');
          case 'cancellation':
            return console.log('3');
          case 'right to notice':
            return console.log('4');
          case 'right to parking':
            return console.log('5');
          case 'relocation':
            return console.log('6');
          case 'right to remeasure':
            return console.log('7');
          case 'right to purchase':
            return console.log('8');
          case 'purchase':
            return console.log('9');
          case 'expansion':
            return console.log('10');
          case 'renewal':
            return console.log('11');
          case 'rofo':
            return console.log('12');
          case 'rofr':
            return console.log('13');
          default:
            return null;
        }
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options-termination'] = (function(superClass) {
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

    _Class.prototype.attributes = {
      'data-view': 'options-termination'
    };

    _Class.prototype.events = function() {
      return {
        click: 'remove'
      };
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options-termination']);
      this.rowSnippet = _.template(snippets['options-termination-row']);
      return this.render();
    };

    _Class.prototype.writeRow = function() {
      return this.$el.find('tbody').prepend(this.rowSnippet);
    };

    _Class.prototype.writeTable = function() {
      if ($("[data-view='options-termination']").length === 0) {
        this.$hook.after(this.el);
      }
      return this;
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.writeTable();
    };

    _Class.prototype.remove = function() {
      var $target, targetName;
      $target = $(event.target);
      targetName = $target.prop('tagName').toLowerCase();
      if (targetName === 'use' || targetName === 'svg') {
        $target.parentsUntil('tbody').remove();
      }
      if (this.$el.find('tbody tr').length === 0) {
        return this.$el.detach();
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options'] = (function(superClass) {
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

    _Class.prototype.attributes = {
      'data-view': 'options'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options']);
      this.render();
      return this.writeChildren();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    _Class.prototype.writeChildren = function() {
      return views['options-add-option-btn'].singleton({
        $hook: this.$el
      });
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['rent-indexation-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['rent-indexation-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['rents-and-incentives-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['rents-and-incentives-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['submenu'] = (function(superClass) {
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

    _Class.prototype.events = {
      click: function(event) {
        if (event.target.nodeName.toLowerCase() === 'a') {
          return this.handleSelection(event.target);
        }
      }
    };

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      id: 'submenu',
      "class": 'plp-submenu slds-m-bottom--x-large slds-text-title',
      'data-view': 'submenu'
    };

    _Class.prototype.handleSelection = function(target) {
      return PLP.router.navigate($(target).attr('data-id'), {
        trigger: true
      });
    };

    _Class.prototype.highlight = function() {
      this.$el.find('a').removeClass('plp-is-active');
      return this.$el.find("[data-id=" + (document.location.hash.substr(1)) + "]").addClass('plp-is-active');
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['submenu']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet());
      return this.$hook.after(this.el);
    };

    _Class.prototype.size = function() {
      return _.each(this.$el.find('a'), (function(_this) {
        return function(item) {
          $(item).css({
            width: ($(item).width()) + "px"
          });
          return $(item).removeClass('plp-bold-for-sizing');
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['tenant-improvements-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['tenant-improvements-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
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

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['units-placeholder'] = (function(superClass) {
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

    _Class.prototype.tagName = 'h1';

    _Class.prototype.attributes = {
      "class": 'slds-text-heading--small slds-m-bottom--medium plp-placeholder-spacer',
      style: 'font-weight: regular'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['units-placeholder']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    _Class.prototype.show = function() {
      this.$hook.nextAll().hide();
      return this.$el.show();
    };

    return _Class;

  })(Backbone.View);

}).call(this);

(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['validation-switch'] = (function(superClass) {
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

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      "class": 'plp-right slds-form-element',
      'data-view': 'validation-switch'
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['validation-switch']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.after(this.el);
    };

    return _Class;

  })(Backbone.View);

}).call(this);
