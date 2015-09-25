$(function() {
  Pin = function(board) {
    this.board = jQuery(board);
    this.constraints = {};
    // {
    //   pinQuery_0: [obj_0,obj_1,...,obj_n],
    //   pinQuery_1: ...,
    //   ...
    //   pinQuery_n:
    // }
    this.attrs = {
      pinName:'_pin-pin',
      objId:'_pin-target'
    };
  };

  // Each pin() call will result in one object
  Pin.prototype.pin = function(obj,pin) {
    var p = $(pin);
  };

  window.Pin = Pin;
});