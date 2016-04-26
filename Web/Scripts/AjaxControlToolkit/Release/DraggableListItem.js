﻿Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.DraggableListItem=function(n){Sys.Extended.UI.DraggableListItem.initializeBase(this,[n]);this._data=null;this._handle=null;this._dragVisualTemplate=null;this._dragVisualTemplateInstance=null;this._mouseDownHandler=null};Sys.Extended.UI.DraggableListItem.prototype={dispose:function(){var n=this.get_element();this.set_handle(null);Sys.Extended.UI.DraggableListItem.callBaseMethod(this,"dispose")},get_data:function(){if(this._data==null){var n=this._findDragSource();if(n!=null&&Sys.Extended.UI.DragDropList.IsValidDataType(n.get_dragDataType()))return this.get_element()}return this._data},set_data:function(n){this._data!=n&&(this._data=n,this.raisePropertyChanged("data"))},get_handle:function(){return this._handle},set_handle:function(n){this._handle!=null&&($removeHandler(this._handle,"mousedown",this.get_mouseDownHandler()),this._handle.__draggableBehavior=null);n?(n.element&&(n=n.element),this._handle=n,this.raisePropertyChanged("handle"),this._handle.__draggableBehavior=this,$addHandler(this._handle,"mousedown",this.get_mouseDownHandler()),this._handle.__draggableBehavior=this):this._handle=null},get_mouseDownHandler:function(){return this._mouseDownHandler==null&&(this._mouseDownHandler=Function.createDelegate(this,this._onMouseDown)),this._mouseDownHandler},get_dragVisualTemplate:function(){return this._dragVisualTemplate},set_dragVisualTemplate:function(n){this._dragVisualTemplate!=n&&(this._dragVisualTemplate=n,this.raisePropertyChanged("dragVisualTemplate"))},_onMouseDown:function(n){window._event=n.rawEvent;this._handle.__draggableBehavior._mouseDownHandlerInternal(n)},_mouseDownHandlerInternal:function(n){var n=window.testEvent?window.testEvent:n,t,i;n.button<=1&&(t=this._findDragSource(),t!=null&&(i=this._createDragVisual(),t.startDragDrop(this.get_element(),this.get_data(),i),n.returnValue=!1))},_createDragVisual:function(){var t=window.testEvent?window.testEvent:window.event,n;return this._dragVisualTemplate!=null&&(this._dragVisualTemplateInstance==null?this._dragVisualTemplateInstance=this._dragVisualTemplate.cloneElement():Sys.UI.DragDropManager._getInstance().hasParent(this._dragVisualTemplateInstance)||this.get_element().appendChild(this._dragVisualTemplateInstance),n={x:t.clientX,y:t.clientY},n=Sys.UI.DragDropManager._getInstance().addPoints(n,Sys.UI.DragDropManager._getInstance().getScrollOffset(document.body,!0)),$common.setLocation(this._dragVisualTemplateInstance,n)),this._dragVisualTemplateInstance},_findDragSource:function(){for(var n=this.get_element();n!=null;){if(n.__dragDropList!=null)return n.__dragDropList;n=n.parentNode}return null}};Sys.Extended.UI.DraggableListItem.registerClass("Sys.Extended.UI.DraggableListItem",Sys.Extended.UI.BehaviorBase);