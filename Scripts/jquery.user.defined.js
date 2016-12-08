(function (global, factory, undefined) {
	'use strict';

	Object.defineProperties(EventTarget.prototype, {
		on: {
			value: function (events, handler, selector) {
				var eventList = events.split(/,\s*/);

				for (var eventName in eventList) {

					this.addEventListener(eventList[eventName],
						(selector ?
						(function (e) {
							if (e.target == this.find(selector)) {
								handler();
							}
						}) : handler),
						false);

					return this;
				}
			}
		},
		off: {
			value: function (events, handler) {
				var eventList = events.split(/,\s*/);

				for (var eventName in eventList) {
					this.removeEventListener(eventList[eventName], handler);
				}

				return this;
			}
		}
	});
	Object.defineProperties(Node.prototype, { //to have the same both for Document/document and HTMLElement. Document.prototype.k = 111; document.k; document.createElement('div').k;
		find: {
			value: function (selector) {

				var result = this.querySelectorAll(selector);

				switch (result.length) {
					case 0:
						return [];
					case 1:
						return result[0];
					default:
						return result;
				}
			}
		}
	});

	Object.defineProperties(Document.prototype, {
		ready: {
			value: function (delegate) {
				this.addEventListener('DOMContentLoaded', delegate);
			}
		}
	});

	Object.defineProperties(HTMLElement.prototype, {
		load: {
			value: function (handler) {
				//console.log(this.onload);
				this.onload = handler();

				return this;
			}
		},
		click: {
			value: function (handler) {
				return (this.on('click', handler), this);
			}
		},
		focus: {
			value: function (handler) {
				return (this.on('focus', handler), this);
			}
		},
		blur: {
			value: function (handler) {
				return (this.on('blur', handler), this);
			}
		},
		hover: {
			value: function (handler) {
				return (this.on('hover', handler), this);
			}
		},
		attr: {
			value: function (attrName, attrValue) {
				switch (arguments.length) {
					case 1:
						return this.getAttribute(attrName);
					case 2:
						return (this.setAttribute(attrName, attrValue), this);
				}
			}
		},
		prop: {
			value: function (propName, propValue) {
				switch (arguments.length) {
					case 1:
						return this[propName];
					case 2:
						return (this[propName] = propValue, this);
				}
			}
		},
		html: {
			value: function (value) {
				switch (arguments.length) {
					case 0:
						return this.innerHTML;
					case 1:
						return (this.innerHTML = value, this);
				}
			}
		},
		append: {
			value: function (target) {
				return (this.appendChild(target), this);
			}
		}
	});

	global.$ = global.jQuery = factory;

	Object.defineProperties(global.jQuery, { //this, jQuery, function
		isString: {
			value: function (obj) {
				return 'string' == typeof obj;
			}
		},
		isBoolean: {
			value: function (obj) {
				return 'boolean' == typeof obj;
			}
		},
		isNumeric: {
			value: function (obj) {
				return !Number.isNaN(obj);
			}
		},
		isFunction: {
			value: function (obj) {
				return 'function' == typeof obj;
			}
		},
		isArray: {
			value: function (obj) {
				return Array.isArray(obj);
			}
		},
		createTemplate: {
			value: function (fragment) {
				var template = document.createElement('template');
				template.html(fragment);

				return template.content;
			}
		}
	});

	//Document.prototype.ready = function (delegate) {
	//	this.addEventListener('DOMContentLoaded', delegate);
	//}

	//HTMLElement.prototype.load = function (handler) {
	//	console.log(this.onload);
	//	this.onload = handler();

	//	return this;
	//}

	//HTMLElement.prototype.click = function (handler) {
	//	return (this.on('click', handler), this);
	//}

	//HTMLElement.prototype.focus = function (handler) {
	//	return (this.on('focus', handler), this);
	//}

	//HTMLElement.prototype.blur = function (handler) {
	//	return (this.on('blur', handler), this);
	//}

	//HTMLElement.prototype.hover = function (handler) {
	//	return (this.on('hover', handler), this);
	//}

	//HTMLElement.prototype.find = function (selector) {

	//	var result = this.querySelectorAll(selector);

	//	switch (result.length) {
	//		case 0:
	//			return null;
	//		case 1:
	//			return result[0];
	//		default:
	//			return result;
	//	}
	//}

	//HTMLElement.prototype.attr = function (attrName, attrValue) {
	//	switch (arguments.length) {
	//		case 1:
	//			return this.getAttribute(attrName);
	//		case 2:
	//			return (this.setAttribute(attrName, attrValue), this);
	//	}
	//};

	//HTMLElement.prototype.prop = function (propName, propValue) {
	//	switch (arguments.length) {
	//		case 1:
	//			return this[propName];
	//		case 2:
	//			return (this[propName] = propValue, this);
	//	}
	//};

	//global.$ = global.jQuery = factory;

	//TYPE MEMBERS (STATICS)
	//global.jQuery.isString = function (obj) {
	//	return 'string' == typeof obj;
	//}

	//global.jQuery.isBoolean = function (obj) {
	//	return 'boolean' == typeof obj;
	//}

	//global.jQuery.isNumeric = function (obj) {
	//	return !Number.isNaN(obj);
	//}

	//global.jQuery.isFunction = function (obj) {
	//	return 'function' == typeof obj;
	//}

	//global.jQuery.isObject = function (obj) {
	//	return 'object' == typeof obj;
	//}

	//global.jQuery.isArray = function (obj) {
	//	return Array.isArray(obj);
	//}

})(window, function (selector, options) {

	if (/^<\w+>$/.test(selector)) {
		
		var result = document.createElement(/\w+/.exec(selector));

		if (options) {
			for (var key in options) {
				result.prop(key, options[key]);
			}
		}
		return result;

	} else if (jQuery.isFunction(selector)) {
		return document.ready(selector); /onload/
	} else {
		//return arguments.callee.find(selector);
		return document.find(selector);
	}
});