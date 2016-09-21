(function() {
  var snippets, views,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  views = PLP.namespace('views');

  snippets = PLP.namespace('snippets');

  views['options-add-option-btn'] = (function(superClass) {
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

    _Class.prototype.attributes = {
      "class": 'slds-dropdown-trigger slds-dropdown-trigger--click slds-m-bottom--x-large',
      'data-view': 'options-add-option-btn'
    };

    _Class.prototype.events = {
      click: function() {
        this.bodyView.closeAll();
        this.toggleMenu(event);
        return this.handle();
      }
    };

    _Class.prototype.initialize = function(options) {
      this.$hook = options.$hook;
      this.snippet = _.template(snippets['options-add-option-btn']);
      this.bodyView = views['body'].singleton();
      this.terminationView = views['options-termination'];
      return this.render();
    };

    _Class.prototype.render = function() {
      this.$el.html(this.snippet);
      return this.$hook.find('h1:eq(0)').after(this.el);
    };

    _Class.prototype.toggleMenu = function(event) {
      event.stopPropagation();
      return this.$el.toggleClass('slds-is-open');
    };

    _Class.prototype.handle = function() {
      var val;
      val = $(event.target).attr('data-value') || $(event.target).find('span').attr('data-value');
      if (val) {
        this.$el.removeClass('slds-is-open slds-m-bottom--x-large').addClass('slds-m-bottom--medium');
        switch (val) {
          case 'termination':
            return this.terminationView.singleton({
              $hook: this.$el
            }).writeTable().writeRow();
          case 'contraction':
            return console.log('2');
          case 'cancellation':
            return console.log('3');
          case 'right to notice':
            return console.log('4');
          case 'right to parking':
            return console.log('5');
          case 'relocation':
            return console.log('6');
          case 'right to remeasure':
            return console.log('7');
          case 'right to purchase':
            return console.log('8');
          case 'purchase':
            return console.log('9');
          case 'expansion':
            return console.log('10');
          case 'renewal':
            return console.log('11');
          case 'rofo':
            return console.log('12');
          case 'rofr':
            return console.log('13');
          default:
            return null;
        }
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);
