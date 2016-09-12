(function() {
  var views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  views['body'] = (function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    _Class.prototype.initialize = function() {
      return this.setElement('body');
    };

    _Class.prototype.events = {
      click: 'closeAll',
      touch: 'closeAll'
    };

    _Class.prototype.closeAll = function() {
      return $('*').removeClass('slds-is-open');
    };

    return _Class;

  })(Backbone.View);

}).call(this);
