function plugin_wf_dom(){
  this.render = function (element, parent){
    if(!parent){
      parent = document.body;
    }
    if(typeof parent == 'string'){
      parent = document.getElementById(parent);
    }
    for(var i=0;i<element.length;i++){
      var obj = document.createElement(element[i].type);
      if(element[i].attribute){
        for (var key in element[i].attribute) {
          obj.setAttribute(key, element[i].attribute[key]);
        }    
      }
      parent.appendChild(obj);
      if(element[i].innerHTML){
        if((typeof element[i].innerHTML) === 'string'){
          obj.innerHTML = element[i].innerHTML;
        }else if((typeof element[i].innerHTML) === 'object') {
          this.render(element[i].innerHTML, obj);
        }
      }
    }
    return null;
  }
  this.remove = function (element){
    if(typeof element == 'string' && document.getElementById(element)){
      element = document.getElementById(element);
    }
    element.parentNode.removeChild(element);
  }
}
var PluginWfDom = new plugin_wf_dom()
