Copy = function(obj) {
  this.product = obj;
};

ob = $('<div>',{class:'dot blue'});
a = [];
for (var i=0;i<25;i++) {
  a.push(new Copy(ob));
}