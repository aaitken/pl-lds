(function() {
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
