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
