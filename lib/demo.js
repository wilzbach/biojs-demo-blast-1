var blast = require("biojs-io-blast");

var vis;
module.exports = vis = function(opts){
  this.el = opts.el;

  if(opts.url !== undefined ){
    // load blast
    blast.read(opts.url, function(data){
      this.data = data;
      console.log(this);
      this.render();
    }.bind(this));
  }
};

vis.prototype.render = function(){
  this.data.iterations[0].hits.forEach(function(el){

    var bar = document.createElement('div');
    bar.textContent = el.accession ;
    bar.appendChild(document.createElement('br'));

    // visualize hsps
    el.hsps.forEach(function(hsp){
      var hspEl = document.createElement('span');
      hspEl.textContent += ".";
      bar.appendChild(hspEl);
    });

    this.el.appendChild(bar);
  }.bind(this));
}
