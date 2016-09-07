(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = window.PLP.views;

  views.Table = (function(superClass) {
    extend(Table, superClass);

    function Table() {
      return Table.__super__.constructor.apply(this, arguments);
    }

    Table.prototype.initialize = function() {
      this.setElement($('#expenses-table'));
      this.overrideBtn = new views.Override({
        el: this.$('#expenses-table-override'),
        parent: this
      });
      return this.tbody = new views.Tbody({
        el: this.$('#expenses-table-body'),
        parent: this
      });
    };

    return Table;

  })(Backbone.View);

}).call(this);
