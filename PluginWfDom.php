<?php
class PluginWfDom{
  public static function widget_include(){
    wfPlugin::enable('include/js');
    $element = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wf/dom/dom.js'));    
    wfDocument::renderElement(array($element));
  }
}
