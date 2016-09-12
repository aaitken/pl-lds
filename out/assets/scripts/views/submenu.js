(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['submenu'] = (function(superClass) {
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

    _Class.prototype.events = {
      click: function(event) {
        if (event.target.nodeName.toLowerCase() === 'a') {
          return this.handleSelection(event.target);
        }
      }
    };

    _Class.prototype.tagName = 'div';

    _Class.prototype.attributes = {
      id: 'submenu',
      "class": 'plp-submenu slds-m-bottom--x-large slds-text-title',
      'data-view': 'submenu'
    };

    _Class.prototype.handleSelection = function(target) {
      return PLP.router.navigate(target.id, {
        trigger: true
      });
    };

    _Class.prototype.highlight = function() {
      this.$el.find('a').removeClass('plp-is-active');
      return this.$el.find("#" + (document.location.hash.substr(1))).addClass('plp-is-active');
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['submenu']);
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet());
      return this.$hook.after(this.el);
    };

    _Class.prototype.size = function() {
      return _.each(this.$el.find('a'), (function(_this) {
        return function(item) {
          $(item).css({
            width: ($(item).width()) + "px"
          });
          return $(item).removeClass('plp-bold-for-sizing');
        };
      })(this));
    };

    return _Class;

  })(Backbone.View);

}).call(this);
