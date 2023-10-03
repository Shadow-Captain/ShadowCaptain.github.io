/*! @license ScrollReveal v4.0.9
   Copyright 2021 Fisssion LLC.
   Licensed under the GNU General Public License 3.0 for
   compatible open source projects and non-commercial use.
   For commercial sites, themes, projects, and applications,
   keep your source code private/proprietary by purchasing
   a commercial license from https://scrollrevealjs.org/
*/

var ScrollReveal = function () {
    "use strict";
  
    var defaults = {
      delay: 0,
      distance: "0",
      duration: 600,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      interval: 0,
      opacity: 0,
      origin: "bottom",
      rotate: { x: 0, y: 0, z: 0 },
      scale: 1,
      cleanup: false,
      container: document.documentElement,
      desktop: true,
      mobile: true,
      reset: false,
      useDelay: "always",
      viewFactor: 0,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      afterReset: function () {},
      afterReveal: function () {},
      beforeReset: function () {},
      beforeReveal: function () {},
    };
  
    var support = {
      success: function () {
        document.documentElement.classList.add("sr");
        if (document.body) {
          document.body.style.height = "100%";
        } else {
          document.addEventListener("DOMContentLoaded", function () {
            document.body.style.height = "100%";
          });
        }
      },
      failure: function () {
        return document.documentElement.classList.remove("sr"), {
          clean: function () {},
          destroy: function () {},
          reveal: function () {},
          sync: function () {},
          get noop() {
            return true;
          },
        };
      },
    };
  
    function isNode(node) {
      return "object" == typeof window.Node
        ? node instanceof window.Node
        : null !== node &&
            "object" == typeof node &&
            "number" == typeof node.nodeType &&
            "string" == typeof node.nodeName;
    }
  
    function filterNodes(nodes) {
      if (nodes instanceof Array) return nodes.filter(isNode);
      if (isNode(nodes)) return [nodes];
  
      if (
        "object" == typeof window.NodeList &&
        nodes instanceof window.NodeList
      ) {
        return Array.prototype.slice.call(nodes);
      }
  
      var nodeType = Object.prototype.toString.call(nodes);
  
      if (
        "object" == typeof window.HTMLCollection &&
        (nodeType === "[object HTMLCollection]" ||
          nodeType === "[object NodeList]" ||
          nodeType === "[object Object]") &&
        (0 === nodes.length || isNode(nodes[0]))
      ) {
        return Array.prototype.slice.call(nodes);
      }
  
      if ("string" == typeof nodes)
        try {
          var nodeList = document.querySelectorAll(nodes);
          return Array.prototype.slice.call(nodeList);
        } catch (e) {
          return [];
        }
  
      return [];
    }
  
    function isObject(obj) {
      return (
        null !== obj &&
        obj instanceof Object &&
        (obj.constructor === Object ||
          "[object Object]" === Object.prototype.toString.call(obj))
      );
    }
  
    function forEach(obj, callback) {
      if (isObject(obj)) {
        Object.keys(obj).forEach(function (key) {
          return callback(obj[key], key, obj);
        });
      } else if (obj instanceof Array) {
        obj.forEach(function (item, index) {
          return callback(item, index, obj);
        });
      } else {
        throw new TypeError("Expected either an array or object literal.");
      }
    }
  
    function log(message) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }
  
      if (this.constructor.debug && console) {
        var formattedMessage = "%cScrollReveal: " + message;
        data.forEach(function (item) {
          return formattedMessage += "\n — " + item;
        });
        console.log(formattedMessage, "color: #ea654b;");
      }
    }
  
    function cleanUp() {
      var _this = this;
  
      var elementsToRemove = [];
      forEach(filterNodes("[data-sr-id]"), function (element) {
        var id = parseInt(element.getAttribute("data-sr-id"));
  
        if (id !== null) {
          var elementData = _this.store.elements[id];
  
          if (elementData.callbackTimer) {
            window.clearTimeout(elementData.callbackTimer.clock);
          }
  
          applyStyles(elementData.node, elementData.styles.inline.generated);
          element.removeAttribute("data-sr-id");
          delete _this.store.elements[id];
        }
      });
  
      try {
        t.call(this);
      } catch (e) {
        return log.call(this, "Clean failed.", e.message);
      }
    }
  
    if (this.pristine) {
      try {
        t.call(this);
      } catch (e) {
        return log.call(this, "Init failed.", e.message);
      }
  
      this.initTimeout = window.setTimeout(w.bind(this), 0);
    }
  };
  
  ScrollReveal.isSupported = function () {
    return (
      ("transform" in (t = document.documentElement.style) ||
        "WebkitTransform" in t) &&
      ("transition" in (e = document.documentElement.style) ||
        "WebkitTransition" in e)
    );
    var e, t;
  };
  
  Object.defineProperty(ScrollReveal, "debug", {
    get: function () {
      return W || false;
    },
    set: function (value) {
      return (W = typeof value === "boolean" ? value : W);
    },
  });
  
  ScrollReveal();
  
