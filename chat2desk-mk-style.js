window.chat24_token = "e60db27908b5744a25a1e706acb9daff";
window.chat24_url = "https://livechatv2.chat2desk.com";
window.chat24_socket_url = "wss://livechatv2.chat2desk.com/widget_ws_new";
window.chat24_static_files_domain = "https://storage.chat2desk.com/";
window.lang = "ru";
function ensureChat24Application() {
  if (window.__chat2deskChat24ApplicationLoading) {
    return;
  }
  window.__chat2deskChat24ApplicationLoading = true;
  window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
    return res.json();
  }).then(function (data) {
    var src = "".concat(window.chat24_url).concat(data["application.js"]);
    var existing = document.querySelector('script[data-chat24-application="true"]');
    if (existing) {
      return;
    }
    var chat24 = document.createElement("script");
    chat24.type = "text/javascript";
    chat24.async = true;
    chat24.src = src;
    chat24.setAttribute("data-chat24-application", "true");
    document.body.appendChild(chat24);
  }).catch(function () {
    window.__chat2deskChat24ApplicationLoading = false;
  });
}
function ensureChat24SupportThenApplication() {
  var supportSrc = "https://livechatv2.chat2desk.com/packs/ie-11-support.js";
  var existing = document.querySelector('script[data-chat24-ie-support="true"]');
  if (existing) {
    ensureChat24Application();
    return;
  }
  var support = document.createElement("script");
  support.type = "text/javascript";
  support.async = true;
  support.src = supportSrc;
  support.setAttribute("data-chat24-ie-support", "true");
  support.onload = ensureChat24Application;
  support.onerror = ensureChat24Application;
  document.head.appendChild(support);
}
ensureChat24SupportThenApplication();
(function () {
  /* Иконка с кнопки: Icon button.svg → data-url для фона startBtn внутри Shadow DOM */
  var MK_START_BTN_SVG =
    '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<mask id="path-1-inside-1_mk" fill="white">' +
    '<path d="M0 0H44V44H0V0Z"/>' +
    "</mask>" +
    '<path d="M0 0H44V44H0V0Z" fill="#FCE5EF"/>' +
    '<path d="M0 0V-1.61364H-1.61364V0H0ZM0 44H-1.61364V45.6136H0V44ZM0 0V1.61364H44V0V-1.61364H0V0ZM44 44V42.3864H0V44V45.6136H44V44ZM0 44H1.61364V0H0H-1.61364V44H0Z" fill="#F6A2B4" mask="url(#path-1-inside-1_mk)"/>' +
    '<path d="M30 16.25C30.4832 16.25 30.8902 16.4195 31.2354 16.7646C31.5805 17.1098 31.75 17.5168 31.75 18V29.5752C31.75 29.8131 31.6736 29.9916 31.5273 30.1318C31.3719 30.2808 31.1995 30.3496 31 30.3496C30.8988 30.3496 30.8076 30.3309 30.7236 30.2949C30.6394 30.2588 30.5566 30.2031 30.4766 30.123L28.1035 27.75H18C17.5168 27.75 17.1098 27.5805 16.7646 27.2354C16.4195 26.8902 16.25 26.4832 16.25 26V25.25H27C27.6168 25.25 28.1507 25.027 28.5889 24.5889C29.027 24.1507 29.25 23.6168 29.25 23V16.25H30Z" fill="#B9275B"/>' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.25C25.4832 12.25 25.8902 12.4195 26.2354 12.7646C26.5805 13.1098 26.75 13.5168 26.75 14V21C26.75 21.4832 26.5805 21.8902 26.2354 22.2354C25.8902 22.5805 25.4832 22.75 25 22.75H15.8965L13.5234 25.123C13.4434 25.2031 13.3606 25.2588 13.2764 25.2949C13.1924 25.3309 13.1012 25.3496 13 25.3496C12.8005 25.3496 12.6281 25.2808 12.4727 25.1318C12.3264 24.9916 12.25 24.8131 12.25 24.5752V14C12.25 13.5168 12.4195 13.1098 12.7646 12.7646C13.1098 12.4195 13.5168 12.25 14 12.25H25ZM13.75 13.75V22.7783L15.2783 21.25H25.25V13.75H13.75Z" fill="#B9275B"/>' +
    "</svg>";
  var MK_START_BTN_ICON_URL = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(MK_START_BTN_SVG);
  function buildStartBtnThemeCss(lightDomScope) {
    var s = lightDomScope ? "#chat24-root .startBtn, #chat24-widget-root .startBtn" : ".startBtn";
    return (
      s +
      " {" +
      "position: fixed !important;" +
      "right: 12px !important;" +
      "top: 50% !important;" +
      "bottom: auto !important;" +
      "left: auto !important;" +
      "transform: translateY(-50%) !important;" +
      "-webkit-transform: translateY(-50%) !important;" +
      "z-index: 2147483646 !important;" +
      "box-sizing: border-box !important;" +
      "width: 48px !important;" +
      "min-width: 48px !important;" +
      "height: 48px !important;" +
      "min-height: 48px !important;" +
      "padding: 0 !important;" +
      "margin: 0 !important;" +
      "border: none !important;" +
      "border-radius: 8px !important;" +
      "background-color: transparent !important;" +
      "background-image: url(\"" +
      MK_START_BTN_ICON_URL +
      "\") !important;" +
      "background-repeat: no-repeat !important;" +
      "background-position: center !important;" +
      "background-size: 48px 48px !important;" +
      "box-shadow: 0 4px 16px rgba(0,0,0,0.14) !important;" +
      "overflow: visible !important;" +
      "display: flex !important;" +
      "align-items: center !important;" +
      "justify-content: center !important;" +
      "}" +
      s +
      " svg { display: none !important; }" +
      s +
      " .startBtn__button, " +
      s +
      " button {" +
      "position: absolute !important;" +
      "top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important;" +
      "width: 100% !important; height: 100% !important;" +
      "margin: 0 !important; padding: 0 !important;" +
      "opacity: 0 !important;" +
      "cursor: pointer !important;" +
      "border: none !important; background: transparent !important;" +
      "}"
    );
  }
  function injectOnlineChatThemeIntoShadow(shadowRoot) {
    if (!shadowRoot) return;
    var css =
      ".online-chat{border-radius:0!important;border:1px solid rgba(0,0,0,0.12)!important;box-shadow:none!important;}" +
      ".chat24-container .online-chat:not(.online-chat--collapsed)~div .startBtn," +
      ".chat24-container .online-chat:not(.online-chat--collapsed)~.startBtn{" +
      "display:none!important;visibility:hidden!important;pointer-events:none!important;}";
    var st = shadowRoot.querySelector("#mk-chat24-online-chat-theme");
    if (!st) {
      st = document.createElement("style");
      st.id = "mk-chat24-online-chat-theme";
      st.type = "text/css";
      shadowRoot.appendChild(st);
    }
    if (st.firstChild) {
      st.replaceChild(document.createTextNode(css), st.firstChild);
    } else {
      st.appendChild(document.createTextNode(css));
    }
  }
  function injectStartBtnThemeIntoShadow(shadowRoot) {
    if (!shadowRoot) return;
    if (shadowRoot.querySelector && shadowRoot.querySelector("#mk-chat24-startbtn-theme")) return;
    var st = document.createElement("style");
    st.id = "mk-chat24-startbtn-theme";
    st.type = "text/css";
    st.appendChild(document.createTextNode(buildStartBtnThemeCss(false)));
    shadowRoot.appendChild(st);
  }
  function applyStartBtnThemeFromRoot(origin) {
    function descendShadow(shadowRoot) {
      if (!shadowRoot) return;
      injectOnlineChatThemeIntoShadow(shadowRoot);
      injectStartBtnThemeIntoShadow(shadowRoot);
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) descendShadow(el.shadowRoot);
        var c = el.firstElementChild;
        while (c) {
          if (c.shadowRoot) descendShadow(c.shadowRoot);
          c = c.nextElementSibling;
        }
        el = el.nextElementSibling;
      }
    }
    function descendIntoLight(node) {
      if (!node) return;
      if (node.shadowRoot) descendShadow(node.shadowRoot);
      var ch = node.firstElementChild;
      while (ch) {
        descendIntoLight(ch);
        ch = ch.nextElementSibling;
      }
    }
    descendIntoLight(origin);
  }
  function ensureDocStartBtnFallbackStyle() {
    if (document.getElementById("mk-chat24-startbtn-global")) return;
    var st = document.createElement("style");
    st.id = "mk-chat24-startbtn-global";
    st.type = "text/css";
    st.appendChild(document.createTextNode(buildStartBtnThemeCss(true)));
    (document.head || document.documentElement).appendChild(st);
  }
  function initChat24Skip() {
    var root = document.getElementById("chat24-root");
    if (!root) return;
    ensureDocStartBtnFallbackStyle();
    function isStartBtnClick(evt) {
      var path = typeof evt.composedPath === "function" ? evt.composedPath() : [evt.target];
      var i;
      for (i = 0; i < path.length; i++) {
        var n = path[i];
        if (n && n.nodeType === 1 && n.closest) {
          try {
            if (n.closest(".startBtn")) return true;
          } catch (err) {}
        }
      }
      return false;
    }
    function isCloseBtnClick(evt) {
      var path = typeof evt.composedPath === "function" ? evt.composedPath() : [evt.target];
      var i;
      for (i = 0; i < path.length; i++) {
        var n = path[i];
        if (n && n.nodeType === 1 && n.closest) {
          try {
            if (n.closest(".close-btn")) return true;
          } catch (err2) {}
        }
      }
      return false;
    }
    function alignOnlineChat(node) {
      if (!node) return;
      node.style.right = "0px";
      node.style.left = "auto";
    }
    function alignOnlineChatsInShadow(shadowRoot) {
      if (!shadowRoot) return;
      var list = shadowRoot.querySelectorAll(".online-chat");
      var arr = Array.prototype.slice.call(list);
      var i;
      for (i = 0; i < arr.length; i++) alignOnlineChat(arr[i]);
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) alignOnlineChatsInShadow(el.shadowRoot);
        el = el.nextElementSibling;
      }
    }
    function applyRightAlignFromRoot(origin) {
      var inLight = document.querySelectorAll("#chat24-root .online-chat, #chat24-widget-root .online-chat");
      var light = Array.prototype.slice.call(inLight);
      var j;
      for (j = 0; j < light.length; j++) alignOnlineChat(light[j]);
      function walkAlign(node) {
        if (!node) return;
        if (node.shadowRoot) alignOnlineChatsInShadow(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          walkAlign(c);
          c = c.nextElementSibling;
        }
      }
      walkAlign(origin);
    }
    function replaceNodeToClearListeners(domNode, force) {
      var parent = domNode.parentNode;
      if (!parent) return;
      if (force && domNode.removeAttribute) domNode.removeAttribute("data-chat24-unhooked");
      if (!force && domNode.getAttribute && domNode.getAttribute("data-chat24-unhooked") === "1") return;
      var clone = domNode.cloneNode(true);
      clone.setAttribute("data-chat24-unhooked", "1");
      parent.replaceChild(clone, domNode);
    }
    function stripListenersOnStartBtnsInShadow(shadowRoot, force) {
      if (!shadowRoot) return;
      var blocks = shadowRoot.querySelectorAll(".startBtn");
      var arr = Array.prototype.slice.call(blocks);
      var i;
      for (i = 0; i < arr.length; i++) {
        replaceNodeToClearListeners(arr[i], !!force);
      }
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) stripListenersOnStartBtnsInShadow(el.shadowRoot, force);
        el = el.nextElementSibling;
      }
    }
    function stripStartBtnListenersFromRoot(origin, force) {
      var lightBtn = document.querySelectorAll("#chat24-root .startBtn, #chat24-widget-root .startBtn");
      var lb = Array.prototype.slice.call(lightBtn);
      var k;
      for (k = 0; k < lb.length; k++) replaceNodeToClearListeners(lb[k], !!force);
      function walkStrip(node) {
        if (!node) return;
        if (node.shadowRoot) stripListenersOnStartBtnsInShadow(node.shadowRoot, force);
        var c = node.firstElementChild;
        while (c) {
          walkStrip(c);
          c = c.nextElementSibling;
        }
      }
      walkStrip(origin);
    }
    function dedupeStartBtnsInShadow(shadowRoot) {
      if (!shadowRoot) return;
      var containers = shadowRoot.querySelectorAll(".chat24-container");
      var ci;
      for (ci = 0; ci < containers.length; ci++) {
        var btns = containers[ci].querySelectorAll(".startBtn");
        if (btns.length <= 1) continue;
        var i;
        for (i = 0; i < btns.length - 1; i++) {
          var extra = btns[i];
          if (extra && extra.parentNode) extra.parentNode.removeChild(extra);
        }
      }
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) dedupeStartBtnsInShadow(el.shadowRoot);
        el = el.nextElementSibling;
      }
    }
    function dedupeStartBtnsFromRoot(origin) {
      function walk(node) {
        if (!node) return;
        if (node.shadowRoot) dedupeStartBtnsInShadow(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          walk(c);
          c = c.nextElementSibling;
        }
      }
      walk(origin);
    }
    function unhookNewStartBtnsInShadow(shadowRoot) {
      if (!shadowRoot) return;
      var blocks = shadowRoot.querySelectorAll(".startBtn");
      var arr = Array.prototype.slice.call(blocks);
      var i;
      for (i = 0; i < arr.length; i++) {
        if (!arr[i].getAttribute || arr[i].getAttribute("data-chat24-unhooked") !== "1") {
          replaceNodeToClearListeners(arr[i], false);
        }
      }
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) unhookNewStartBtnsInShadow(el.shadowRoot);
        el = el.nextElementSibling;
      }
    }
    function unhookNewStartBtnsFromRoot(origin) {
      function walk(node) {
        if (!node) return;
        if (node.shadowRoot) unhookNewStartBtnsInShadow(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          walk(c);
          c = c.nextElementSibling;
        }
      }
      walk(origin);
    }
    var watchedShadowRoots = typeof WeakSet !== "undefined" ? new WeakSet() : null;
    var watchedShadowList = watchedShadowRoots ? null : [];
    function registerShadowObserverOnce(shadowRoot, onMutation) {
      if (!shadowRoot || typeof MutationObserver === "undefined") return false;
      if (watchedShadowRoots) {
        if (watchedShadowRoots.has(shadowRoot)) return false;
        watchedShadowRoots.add(shadowRoot);
      } else {
        var w;
        for (w = 0; w < watchedShadowList.length; w++) {
          if (watchedShadowList[w] === shadowRoot) return false;
        }
        watchedShadowList.push(shadowRoot);
      }
      var moSr = new MutationObserver(function () {
        onMutation();
      });
      moSr.observe(shadowRoot, { childList: true, subtree: true });
      return true;
    }
    function attachShadowObserversUnder(origin, onMutation) {
      function descendShadow(shadowRoot) {
        if (!shadowRoot) return;
        registerShadowObserverOnce(shadowRoot, onMutation);
        var el = shadowRoot.firstElementChild;
        while (el) {
          if (el.shadowRoot) descendShadow(el.shadowRoot);
          descendIntoLight(el);
          el = el.nextElementSibling;
        }
      }
      function descendIntoLight(node) {
        if (!node) return;
        if (node.shadowRoot) descendShadow(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          descendIntoLight(c);
          c = c.nextElementSibling;
        }
      }
      descendIntoLight(origin);
    }
    function debounce(fn, ms) {
      var t;
      return function () {
        clearTimeout(t);
        var args = arguments;
        t = setTimeout(function () {
          fn.apply(null, args);
        }, ms);
      };
    }
    function processShadowForStartOpen(shadowRoot) {
      if (!shadowRoot) return;
      var onlineChat = shadowRoot.querySelector(".online-chat");
      if (onlineChat) {
        onlineChat.classList.remove("online-chat--collapsed");
        alignOnlineChat(onlineChat);
      }
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) processShadowForStartOpen(el.shadowRoot);
        el = el.nextElementSibling;
      }
    }
    function applyStartOpenFromRoot(origin) {
      function walk(node) {
        if (!node) return;
        if (node.shadowRoot) processShadowForStartOpen(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          walk(c);
          c = c.nextElementSibling;
        }
      }
      walk(origin);
    }
    function processShadowCollapseChat(shadowRoot) {
      if (!shadowRoot) return;
      var onlineChat = shadowRoot.querySelector(".online-chat");
      if (onlineChat) {
        onlineChat.classList.add("online-chat--collapsed");
        alignOnlineChat(onlineChat);
      }
      var el = shadowRoot.firstElementChild;
      while (el) {
        if (el.shadowRoot) processShadowCollapseChat(el.shadowRoot);
        el = el.nextElementSibling;
      }
    }
    function applyCloseCollapseFromRoot(origin) {
      function walk(node) {
        if (!node) return;
        if (node.shadowRoot) processShadowCollapseChat(node.shadowRoot);
        var c = node.firstElementChild;
        while (c) {
          walk(c);
          c = c.nextElementSibling;
        }
      }
      walk(origin);
    }
    root.addEventListener("click", function (evt) {
      if (evt && evt.isTrusted === false) return;
      if (isCloseBtnClick(evt)) {
        setTimeout(function () {
          applyCloseCollapseFromRoot(root);
        }, 0);
        return;
      }
      if (!isStartBtnClick(evt)) return;
      setTimeout(function () {
        applyStartOpenFromRoot(root);
        applyRightAlignFromRoot(root);
        if (typeof window.requestAnimationFrame === "function") {
          window.requestAnimationFrame(function () {
            applyRightAlignFromRoot(root);
          });
        }
      }, 0);
    }, true);
    var runAfterDomChange = debounce(function () {
      dedupeStartBtnsFromRoot(root);
      unhookNewStartBtnsFromRoot(root);
      applyRightAlignFromRoot(root);
      applyStartBtnThemeFromRoot(root);
      attachShadowObserversUnder(root, function () {
        runAfterDomChange();
      });
    }, 40);
    var runAfterResize = debounce(function () {
      dedupeStartBtnsFromRoot(root);
      stripStartBtnListenersFromRoot(root, true);
      applyRightAlignFromRoot(root);
      applyStartBtnThemeFromRoot(root);
      attachShadowObserversUnder(root, function () {
        runAfterDomChange();
      });
    }, 120);
    applyRightAlignFromRoot(root);
    stripStartBtnListenersFromRoot(root, true);
    applyStartBtnThemeFromRoot(root);
    attachShadowObserversUnder(root, function () {
      runAfterDomChange();
    });
    if (typeof MutationObserver !== "undefined") {
      var alignObserver = new MutationObserver(function () {
        runAfterDomChange();
      });
      alignObserver.observe(root, { childList: true, subtree: true });
    }
    if (typeof window.ResizeObserver !== "undefined") {
      var ro = new ResizeObserver(function () {
        runAfterResize();
      });
      ro.observe(root);
    }
    window.addEventListener("resize", runAfterResize);
  }
  if (document.getElementById("chat24-root")) {
    initChat24Skip();
  } else {
    var check = setInterval(function () {
      if (document.getElementById("chat24-root")) {
        clearInterval(check);
        initChat24Skip();
      }
    }, 200);
  }
})();
