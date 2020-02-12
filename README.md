# Buto-Plugin-WfDom


## Widget
Include in head section.
```
type: widget
data:
  plugin: wf/dom
  method: include
```


## Javascript
Javascript to add elements to dom.
```
PluginWfDom.render([{type: 'div', innerHTML: 'Append div in an element.'}], document.getElementById('start_link_container'));
```
```
PluginWfDom.render([{type: 'div', innerHTML: 'Append div in an element.'}], 'start_link_container');
```
```
PluginWfDom.render([{type: 'div', innerHTML: 'Append div in body.'}]);
```
```
PluginWfDom.render([{type: 'div', innerHTML: [{type: 'div', innerHTML: 'Append object instead of string in innerHTML to nestle multiple elements.'}, {type: 'div', innerHTML: 'Append second div.'}], attribute: {id: 'test', style: 'border:solid 1px gray'}}]);
```
