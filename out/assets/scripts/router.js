(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  PLP.Router = (function(superClass) {
    extend(Router, superClass);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      expenses: 'expenses'
    };

    Router.prototype.expenses = function() {
      PLP.views['expenses-table'].singleton();
      PLP.views['analysis-title'].singleton();
      PLP.views['validation-switch'].singleton({
        $hook: $('#top-tabs')
      });
      PLP.views['expenses-deal-reports-btn'].singleton({
        $hook: $('#submenu')
      });
      return PLP.views['body'].singleton();
    };

    return Router;

  })(Backbone.Router);

}).call(this);
