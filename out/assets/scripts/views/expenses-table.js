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

    _Class.prototype.initialize = function() {
      this.setElement($('#bbv-expenses-table'));
      this.overrideBtn = new views['expenses-table-override']({
        el: this.$('#expenses-table-override'),
        parent: this
      });
      this.thead = new views['expenses-table-head']({
        el: this.$('#bbv-expenses-table-head')
      });
      return this.tbody = new views['expenses-table-body']({
        el: this.$('#bbv-expenses-table-body')
      });
    };

    return _Class;

  })(Backbone.View);

}).call(this);
