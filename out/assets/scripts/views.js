(function() {
  var content, templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  content = PLP.namespace('content');

  views['expenses-table-body'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.rowTemplate = _.template(templates['expenses-table-body-row']);
      this.inputTemplate = _.template(templates['text-field']);
      this.selectTemplate = _.template(templates['yes-no-select']);
      this.content = content['expenses-table'].tbody;
      return this.render();
    };

    _Class.prototype.render = function() {
      return _.each(this.content.reverse(), (function(_this) {
        return function(item) {
          _this.$el.prepend(_this.rowTemplate({
            content: item
          }));
          _this.$('td:eq(4)').html(_this.inputTemplate);
          return _this.$('td:eq(2), td:eq(3), td:eq(5)').html(_this.selectTemplate);
        };
      })(this));
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
      this.ExpensesTableOverrideView = views['expenses-table-override'];
      return this.init();
    };

    _Class.prototype.init = function() {
      var expensesTableOverrideView, that;
      that = this;
      _.each(this.$el.find('th:gt(0) span'), function(item) {
        var infoIconView;
        infoIconView = new that.InfoIconView();
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

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.$el.text('Override');
      return this.parent = options.parent || '';
    };

    _Class.prototype.events = {
      'click': function() {
        if (this.$el.text() === "Override") {
          this.$el.text("Revert");
          return this.parent.tbody.makeOpexEditable();
        } else {
          this.$el.text("Override");
          return this.parent.tbody.makeOpexRO();
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

    _Class.prototype.initialize = function() {
      this.setElement($('#expenses-table'));
      this.thead = new views['expenses-table-head']({
        el: this.$('#expenses-table-head')
      });
      return this.tbody = new views['expenses-table-body']({
        el: this.$('#expenses-table-body')
      });
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

  views['info-icon'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.tagName = 'span';

    _Class.prototype.className = 'slds-icon_container';

    _Class.prototype.events = {
      click: function() {
        return alert('info');
      }
    };

    _Class.prototype.initialize = function() {
      this.template = _.template(templates['info-icon']);
      return this.render();
    };

    _Class.prototype.render = function() {
      return this.$el.html(this.template());
    };

    return _Class;

  })(Backbone.View);

}).call(this);
