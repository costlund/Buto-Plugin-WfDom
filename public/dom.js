function plugin_wf_i18n(){
  this.data = [];
  this.translate = function(key){
    for(var i=0; i<PluginWfI18n.data.length; i++){
      if(PluginWfI18n.data[i].key==key){
        var value = PluginWfI18n.data[i].value;
        if(PluginWfI18n.data[i].replace){
          var replace = PluginWfI18n.data[i].replace;
          for(var j=0; j<replace.length; j++){
            value = value.replace(replace[j].set, replace[j].to);
          }
        }
        return value;
      }
    }
    return key;
  }
}
var PluginWfI18n = new plugin_wf_i18n();
//PluginWfI18n.data.push({key: 'Close', value: 'stäng', replace: [{set: 's', to: 'S'}]});
//PluginWfI18n.data.push({key: 'Create account', value: 'Skapa konto'});
//if(typeof(PluginWfI18n)==='object'){
//  console.log(PluginWfI18n.translate(('Close')));
//}
function plugin_wf_dom(){
  /**
   * Pas an object like [{type: 'div', innerHTML: 'Append div in body.'}] and optional parent to create elements. Nestle other objects in innerHTML to create multiple elements once.
   * @param {type} element
   * @param {type} parent Optional, default document.body
   * @returns {unresolved}
   */
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
          /**
           * Check if i18n is availible.
           */
          if(typeof(PluginWfI18n.data)==='object' && typeof(PluginWfI18n.translate)==='function'){
            /**
             * i18n is availible.
             */
            obj.innerHTML = PluginWfI18n.translate(element[i].innerHTML);
          }else{
            /**
             * i18n is NOT availible.
             */
            obj.innerHTML = element[i].innerHTML;
          }
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