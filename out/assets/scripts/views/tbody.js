(function() {
  var templates, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  templates = PLP.namespace('templates');

  views.Tbody = (function(superClass) {
    extend(Tbody, superClass);

    function Tbody() {
      return Tbody.__super__.constructor.apply(this, arguments);
    }

    Tbody.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this.template = _.template(templates['text-field']);
      this.values = [];
      this.parent = options.parent;
      return this.opexCells = this.$('td:nth-child(2)').slice(0, -1);
    };

    Tbody.prototype.makeOpexEditable = function() {
      this.rememberValues();
      return _.each(this.opexCells, (function(_this) {
        return function(cell, i) {
          return $(cell).html(_this.template({
            val: _this.values[i]
          }));
        };
      })(this));
    };

    Tbody.prototype.makeOpexRO = function() {
      return _.each(this.opexCells, (function(_this) {
        return function(cell, i) {
          return $(cell).text(_this.values[i]);
        };
      })(this));
    };

    Tbody.prototype.rememberValues = function() {
      return _.each(this.opexCells, (function(_this) {
        return function(cell) {
          return _this.values.push($(cell).text().trim());
        };
      })(this));
    };

    return Tbody;

  })(Backbone.View);

}).call(this);
