$(function() {
  var mouseFollower = $('<div>',{class:'dot blue'});
  mouseFollower.css({position:'absolute'});
  mouseFollower.appendTo($('body'));
  var lx = 0, ly=0;
  $(window).mousemove(function(e) {
    mouseFollower.css({
      left:e.pageX+'px',
      top: e.pageY+'px'
    });
    lx = e.pageX;
    ly = e.pageY;
  });

  var dot = $('<div>',{class:'dot'});
  var pageboard = new Pin('.page');
  pageboard.pin(dot,"1");
});