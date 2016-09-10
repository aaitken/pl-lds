(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['expenses-deal-reports-btn'] = (function(superClass) {
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

    _Class.prototype.className = 'plp-deal-reports-button plp-right slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open';

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['expenses-deal-reports-btn']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.append(this.el);
    };

    return _Class;

  })(Backbone.View);

}).call(this);
