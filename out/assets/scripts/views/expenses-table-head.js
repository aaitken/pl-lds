(function() {
  var content, templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  content = PLP.namespace('content');

  views['expenses-table-head'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.iconTemplate = _.template(templates['info-icon']);
      this.content = content['expenses-table'].help;
      return this.render();
    };

    _Class.prototype.render = function() {
      return _.each(this.content, (function(_this) {
        return function(item, i) {
          return _this.$("th:eq(" + (parseInt(i + 1)) + ")").find('span').after(_this.iconTemplate);
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);
