// Generated by CoffeeScript 1.10.0
(function() {
  var BaseChild, Metafields, OrderRisk,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseChild = require('./base_child');

  Metafields = require('./metafield');

  OrderRisk = (function(superClass) {
    extend(OrderRisk, superClass);

    OrderRisk.prototype.parent = "/orders";

    OrderRisk.prototype.slug = "risk";

    OrderRisk.prototype.child = "/risks";

    function OrderRisk(site) {
      OrderRisk.__super__.constructor.call(this, site);
    }

    return OrderRisk;

  })(BaseChild);

  module.exports = OrderRisk;

}).call(this);