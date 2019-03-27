Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp2,_jsxFileName="src/Image.js";var _lodash=require("lodash");var _=_interopRequireWildcard(_lodash);var _react=require("react");var React=_interopRequireWildcard(_react);var _reactNative=require("react-native");var _expo=require("expo");require("react-native/Libraries/StyleSheet/StyleSheetTypes");var _CacheManager=require("./CacheManager");var _CacheManager2=_interopRequireDefault(_CacheManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Image=(_temp2=_class=function(_React$Component){_inherits(Image,_React$Component);function Image(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Image);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Image.__proto__||Object.getPrototypeOf(Image)).call.apply(_ref,[this].concat(args))),_this),_this.mounted=true,_this.state={uri:undefined,intensity:new _reactNative.Animated.Value(100)},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Image,[{key:"load",value:function load(_ref2){var uri=_ref2.uri,_ref2$options=_ref2.options,options=_ref2$options===undefined?{}:_ref2$options;var path;return regeneratorRuntime.async(function load$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!uri){_context.next=5;break;}_context.next=3;return regeneratorRuntime.awrap(_CacheManager2.default.get(uri,options).getPath());case 3:path=_context.sent;if(this.mounted){this.setState({uri:path});}case 5:case"end":return _context.stop();}}},null,this);}},{key:"componentDidMount",value:function componentDidMount(){this.load(this.props);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var _props=this.props,preview=_props.preview,transitionDuration=_props.transitionDuration;var _state=this.state,uri=_state.uri,intensity=_state.intensity;if(this.props.uri!==prevProps.uri){this.load(this.props);}else if(uri&&preview&&prevState.uri===undefined){_reactNative.Animated.timing(intensity,{duration:transitionDuration,toValue:0,useNativeDriver:_reactNative.Platform.OS==="android"}).start();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.mounted=false;}},{key:"render",value:function render(){var _props2=this.props,preview=_props2.preview,style=_props2.style,defaultSource=_props2.defaultSource,tint=_props2.tint,otherProps=_objectWithoutProperties(_props2,["preview","style","defaultSource","tint"]);var _state2=this.state,uri=_state2.uri,intensity=_state2.intensity;var hasDefaultSource=!!defaultSource;var hasPreview=!!preview;var isImageReady=!!uri;var opacity=intensity.interpolate({inputRange:[0,100],outputRange:[0,0.5]});var computedStyle=[_reactNative.StyleSheet.absoluteFill,_.transform(_.pickBy(_reactNative.StyleSheet.flatten(style),function(value,key){return propsToCopy.indexOf(key)!==-1;}),function(result,value,key){return _extends(result,_defineProperty({},key,value-(style.borderWidth||0)));})];return React.createElement(_reactNative.View,_extends({style:style},{__source:{fileName:_jsxFileName,lineNumber:90}}),hasDefaultSource&&!hasPreview&&!isImageReady&&React.createElement(_reactNative.Image,_extends({source:defaultSource,style:computedStyle},otherProps,{__source:{fileName:_jsxFileName,lineNumber:93}})),hasPreview&&React.createElement(_reactNative.Image,{source:preview,resizeMode:"cover",style:computedStyle,blurRadius:_reactNative.Platform.OS==="android"?0.5:0,__source:{fileName:_jsxFileName,lineNumber:102}}),isImageReady&&React.createElement(_reactNative.Image,_extends({source:{uri:uri},style:computedStyle},otherProps,{__source:{fileName:_jsxFileName,lineNumber:112}})),hasPreview&&_reactNative.Platform.OS==="ios"&&React.createElement(AnimatedBlurView,_extends({style:computedStyle},{intensity:intensity,tint:tint},{__source:{fileName:_jsxFileName,lineNumber:121}})),hasPreview&&_reactNative.Platform.OS==="android"&&React.createElement(_reactNative.Animated.View,{style:[computedStyle,{backgroundColor:tint==="dark"?black:white,opacity:opacity}],__source:{fileName:_jsxFileName,lineNumber:126}}));}}]);return Image;}(React.Component),_class.defaultProps={transitionDuration:300,tint:"dark"},_temp2);exports.default=Image;var black="black";var white="white";var propsToCopy=["borderRadius","borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"];var AnimatedBlurView=_reactNative.Animated.createAnimatedComponent(_expo.BlurView);
//# sourceMappingURL=Image.js.map