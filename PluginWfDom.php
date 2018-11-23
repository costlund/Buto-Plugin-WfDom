<?php
/**
  <p>Javascript to add elements to dom.</p>
  #code-javascript#
  PluginWfDom.render([{type: 'div', innerHTML: 'Append div in an element.'}], document.getElementById('start_link_container'));
  PluginWfDom.render([{type: 'div', innerHTML: 'Append div in body.'}]);
  PluginWfDom.render([{type: 'div', innerHTML: [{type: 'div', innerHTML: 'Append object instead of string in innerHTML to nestle multiple elements.'}, {type: 'div', innerHTML: 'Append second div.'}], attribute: {id: 'test', style: 'border:solid 1px gray'}}]);
  #code#
 */
class PluginWfDom{
  /**
  <p>Including thjs in html/head section.</p>
  */
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/dom/dom.js'));
    wfDocument::renderElement(array($element));
  }
}