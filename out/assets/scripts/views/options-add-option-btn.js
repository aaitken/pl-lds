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
        switch (val) {
          case 'termination':
            console.log('1');
            break;
          case 'contraction':
            console.log('2');
            break;
          case 'cancellation':
            console.log('3');
            break;
          case 'right to notice':
            console.log('4');
            break;
          case 'right to parking':
            console.log('5');
            break;
          case 'relocation':
            console.log('6');
            break;
          case 'right to remeasure':
            console.log('7');
            break;
          case 'right to purchase':
            console.log('8');
            break;
          case 'purchase':
            console.log('9');
            break;
          case 'expansion':
            console.log('10');
            break;
          case 'renewal':
            console.log('11');
            break;
          case 'rofo':
            console.log('12');
            break;
          case 'rofr':
            console.log('13');
            break;
          default:
            null;
        }
        return this.$el.removeClass('slds-is-open');
      }
    };

    return _Class;

  })(Backbone.View);

}).call(this);
