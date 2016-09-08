(function() {
  var content, templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  content = PLP.namespace('content');

  views['expenses-table-body-row'] = (function(superClass) {
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
