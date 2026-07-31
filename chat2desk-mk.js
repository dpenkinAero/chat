(function () {
  window.chat24_token = "e60db27908b5744a25a1e706acb9daff";
  window.chat24_url = "https://livechatv2.chat2desk.com";
  window.chat24_socket_url = "wss://livechatv2.chat2desk.com/widget_ws_new";
  window.chat24_static_files_domain = "https://storage.chat2desk.com/";
  window.lang = "ru";
  function loadMkStyleScript() {
    if (document.querySelector('script[data-chat2desk-mk-style="true"]')) return;
    var current = document.currentScript;
    var src = current && current.src
      ? new URL("chat2desk-mk-style.js", current.src).href
      : "https://dpenkinaero.github.io/chat/chat2desk-mk-style.js";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src + (src.indexOf("?") === -1 ? "?v=" : "&v=") + new Date().getTime();
    script.setAttribute("data-chat2desk-mk-style", "true");
    document.body.appendChild(script);
  }
  function ensureChat24Application() {
    if (window.__chat2deskChat24ApplicationLoading) {
      loadMkStyleScript();
      return;
    }
    window.__chat2deskChat24ApplicationLoading = true;
    window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
      return res.json();
    }).then(function (data) {
      var src = "".concat(window.chat24_url).concat(data["application.js"]);
      var existing = document.querySelector('script[data-chat24-application="true"]');
      if (!existing) {
        var chat24 = document.createElement("script");
        chat24.type = "text/javascript";
        chat24.async = true;
        chat24.src = src;
        chat24.setAttribute("data-chat24-application", "true");
        document.body.appendChild(chat24);
      }
      loadMkStyleScript();
    }).catch(function () {
      window.__chat2deskChat24ApplicationLoading = false;
      loadMkStyleScript();
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
})();
(function () {
    /* Иконка с кнопки: Icon button.svg → data-url для фона startBtn внутри Shadow DOM */
    /* Synced from scripts/github-config.json by Ship-GitHubChanges.ps1 */
    var MK_WIDGET_VERSION = "1.0.2"; // mk-widget-version
    var MK_SHOW_WIDGET_VERSION = true; // mk-show-widget-version
    if (typeof window.mkChat24WidgetVersion === "string" && window.mkChat24WidgetVersion) {
      MK_WIDGET_VERSION = window.mkChat24WidgetVersion;
    }
    if (typeof window.mkChat24ShowWidgetVersion === "boolean") {
      MK_SHOW_WIDGET_VERSION = window.mkChat24ShowWidgetVersion;
    }
    try {
      console.log(
        "[chat2desk-mk] widget version:",
        MK_WIDGET_VERSION,
        "| showBadge:",
        MK_SHOW_WIDGET_VERSION
      );
    } catch (eLog) {}
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
    function buildStartBtnDedupeCss(lightDomScope) {
      var s = lightDomScope
        ? "#chat24-root .chat24-container .startBtn[data-mk-duplicate-startbtn='1'], #chat24-widget-root .chat24-container .startBtn[data-mk-duplicate-startbtn='1']"
        : ".chat24-container .startBtn[data-mk-duplicate-startbtn='1']";
      return (
        s +
        "{" +
        "display:none!important;" +
        "visibility:hidden!important;" +
        "pointer-events:none!important;" +
        "opacity:0!important;" +
        "position:absolute!important;" +
        "width:0!important;" +
        "height:0!important;" +
        "overflow:hidden!important;" +
        "clip:rect(0,0,0,0)!important;" +
        "}"
      );
    }
    function injectOnlineChatThemeIntoShadow(shadowRoot) {
      if (!shadowRoot) return;
      var css =
        ".online-chat{border-radius:0!important;border:1px solid rgba(0,0,0,0.12)!important;box-shadow:none!important;}" +
        ".chat24-container .online-chat.online-chat--collapsed{" +
        "display:none!important;visibility:hidden!important;pointer-events:none!important;" +
        "width:0!important;height:0!important;overflow:hidden!important;opacity:0!important;}" +
        ".chat24-container .online-chat:not(.online-chat--collapsed)~div .startBtn," +
        ".chat24-container .online-chat:not(.online-chat--collapsed)~.startBtn{" +
        "display:none!important;visibility:hidden!important;pointer-events:none!important;}" +
        buildStartBtnDedupeCss(false);
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
      st.appendChild(
        document.createTextNode(buildStartBtnThemeCss(true) + buildStartBtnDedupeCss(true))
      );
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
          if (btns.length === 0) continue;
          btns[0].setAttribute("data-mk-primary-startbtn", "1");
          btns[0].removeAttribute("data-mk-duplicate-startbtn");
          if (btns.length <= 1) continue;
          var i;
          for (i = 1; i < btns.length; i++) {
            btns[i].setAttribute("data-mk-duplicate-startbtn", "1");
            btns[i].removeAttribute("data-mk-primary-startbtn");
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
          suppressDuplicateStartBtns();
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
          try {
            onlineChat.style.removeProperty("display");
            onlineChat.style.removeProperty("pointer-events");
            onlineChat.style.removeProperty("visibility");
            onlineChat.style.removeProperty("opacity");
            onlineChat.style.removeProperty("width");
            onlineChat.style.removeProperty("height");
          } catch (eOpen) {}
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
      function blurActiveInsideChat(origin) {
        try {
          var active = document.activeElement;
          if (active && active !== document.body && typeof active.blur === "function") {
            var tag = (active.tagName || "").toLowerCase();
            if (tag === "input" || tag === "textarea" || active.isContentEditable) {
              active.blur();
            }
          }
        } catch (eBlur1) {}
        function blurInShadow(shadowRoot) {
          if (!shadowRoot) return;
          try {
            var focused = shadowRoot.activeElement;
            if (focused && typeof focused.blur === "function") focused.blur();
          } catch (eBlur2) {}
          var inputs = shadowRoot.querySelectorAll("input, textarea, [contenteditable='true']");
          var i;
          for (i = 0; i < inputs.length; i++) {
            try {
              if (typeof inputs[i].blur === "function") inputs[i].blur();
            } catch (eBlur3) {}
          }
          var el = shadowRoot.firstElementChild;
          while (el) {
            if (el.shadowRoot) blurInShadow(el.shadowRoot);
            el = el.nextElementSibling;
          }
        }
        function walk(node) {
          if (!node) return;
          if (node.shadowRoot) blurInShadow(node.shadowRoot);
          var c = node.firstElementChild;
          while (c) {
            walk(c);
            c = c.nextElementSibling;
          }
        }
        walk(origin);
        try {
          if (document.activeElement && typeof document.activeElement.blur === "function") {
            document.activeElement.blur();
          }
        } catch (eBlur4) {}
      }
      function refreshMobileChatLayout() {
        if (typeof window.chat2deskMkApply === "function") {
          try {
            window.chat2deskMkApply();
          } catch (eApply) {}
        }
        try {
          window.dispatchEvent(new Event("resize"));
        } catch (eResize) {}
        if (typeof window.requestAnimationFrame === "function") {
          window.requestAnimationFrame(function () {
            if (typeof window.chat2deskMkApply === "function") {
              try {
                window.chat2deskMkApply();
              } catch (eApply2) {}
            }
          });
        }
        setTimeout(function () {
          if (typeof window.chat2deskMkApply === "function") {
            try {
              window.chat2deskMkApply();
            } catch (eApply3) {}
          }
          try {
            window.dispatchEvent(new Event("resize"));
          } catch (eResize2) {}
        }, 50);
        setTimeout(function () {
          if (typeof window.chat2deskMkApply === "function") {
            try {
              window.chat2deskMkApply();
            } catch (eApply4) {}
          }
        }, 200);
      }
      function ensureVersionBadgeOnChat(onlineChat) {
        if (!onlineChat || !MK_SHOW_WIDGET_VERSION) return;
        if (onlineChat.classList && onlineChat.classList.contains("online-chat--collapsed")) {
          var old = onlineChat.querySelector("#mk-widget-version-badge");
          if (old && old.parentNode) old.parentNode.removeChild(old);
          return;
        }
        var badge = onlineChat.querySelector("#mk-widget-version-badge");
        if (!badge) {
          badge = document.createElement("div");
          badge.id = "mk-widget-version-badge";
          badge.setAttribute("data-mk-widget-version", "1");
          badge.style.cssText =
            "position:absolute!important;top:6px!important;left:8px!important;z-index:2147483647!important;" +
            "font:600 10px/1.2 system-ui,sans-serif!important;color:rgba(0,0,0,0.55)!important;" +
            "background:rgba(255,255,255,0.92)!important;border:1px solid rgba(0,0,0,0.08)!important;" +
            "border-radius:4px!important;padding:3px 6px!important;pointer-events:none!important;" +
            "box-shadow:0 1px 4px rgba(0,0,0,0.08)!important;";
          var header =
            onlineChat.querySelector('[class*="header"]') ||
            onlineChat.querySelector('[class*="Header"]') ||
            onlineChat.firstElementChild;
          if (header && header.appendChild && header !== onlineChat) {
            try {
              if (window.getComputedStyle(header).position === "static") {
                header.style.position = "relative";
              }
            } catch (ePos) {}
            header.appendChild(badge);
          } else {
            try {
              if (window.getComputedStyle(onlineChat).position === "static") {
                onlineChat.style.position = "relative";
              }
            } catch (ePos2) {}
            onlineChat.appendChild(badge);
          }
        }
        badge.textContent = "v" + MK_WIDGET_VERSION;
      }
      function ensureVersionBadgesInShadow(shadowRoot) {
        if (!shadowRoot) return;
        var chats = shadowRoot.querySelectorAll(".online-chat");
        var i;
        for (i = 0; i < chats.length; i++) ensureVersionBadgeOnChat(chats[i]);
        var el = shadowRoot.firstElementChild;
        while (el) {
          if (el.shadowRoot) ensureVersionBadgesInShadow(el.shadowRoot);
          el = el.nextElementSibling;
        }
      }
      function ensureVersionBadgesFromRoot(origin) {
        function walk(node) {
          if (!node) return;
          if (node.shadowRoot) ensureVersionBadgesInShadow(node.shadowRoot);
          var c = node.firstElementChild;
          while (c) {
            walk(c);
            c = c.nextElementSibling;
          }
        }
        walk(origin);
      }
      function forceChatContentPaint(onlineChat) {
        if (!onlineChat) return;
        try {
          onlineChat.style.setProperty("visibility", "visible", "important");
          onlineChat.style.setProperty("opacity", "1", "important");
          void onlineChat.offsetHeight;
          var nodes = onlineChat.querySelectorAll(
            '[class*="message"],[class*="Message"],[class*="scroll"],[class*="Scroll"],[class*="content"],[class*="Content"],ul,ol'
          );
          var i;
          for (i = 0; i < nodes.length; i++) {
            try {
              void nodes[i].offsetHeight;
              if (typeof nodes[i].scrollTop === "number") {
                var prev = nodes[i].scrollTop;
                nodes[i].scrollTop = prev + 1;
                nodes[i].scrollTop = prev;
              }
            } catch (ePaint) {}
          }
        } catch (ePaint2) {}
      }
      function forceOpenChatsPaintInShadow(shadowRoot) {
        if (!shadowRoot) return;
        var chats = shadowRoot.querySelectorAll(".online-chat:not(.online-chat--collapsed)");
        var i;
        for (i = 0; i < chats.length; i++) forceChatContentPaint(chats[i]);
        var el = shadowRoot.firstElementChild;
        while (el) {
          if (el.shadowRoot) forceOpenChatsPaintInShadow(el.shadowRoot);
          el = el.nextElementSibling;
        }
      }
      function forceOpenChatsPaintFromRoot(origin) {
        function walk(node) {
          if (!node) return;
          if (node.shadowRoot) forceOpenChatsPaintInShadow(node.shadowRoot);
          var c = node.firstElementChild;
          while (c) {
            walk(c);
            c = c.nextElementSibling;
          }
        }
        walk(origin);
      }
      function hideStockChromeInShadow(shadowRoot) {
        if (!shadowRoot) return;
        var nodes = shadowRoot.querySelectorAll(
          ".messengers, .messenger, .messengers--vertical, .messengers--horizontal"
        );
        var i;
        for (i = 0; i < nodes.length; i++) {
          try {
            nodes[i].style.setProperty("display", "none", "important");
            nodes[i].style.setProperty("visibility", "hidden", "important");
            nodes[i].style.setProperty("pointer-events", "none", "important");
          } catch (eH) {}
        }
        var closes = shadowRoot.querySelectorAll(".close-btn");
        for (i = 0; i < closes.length; i++) {
          try {
            if (closes[i].closest && closes[i].closest(".online-chat")) continue;
            closes[i].style.setProperty("display", "none", "important");
            closes[i].style.setProperty("visibility", "hidden", "important");
            closes[i].style.setProperty("pointer-events", "none", "important");
          } catch (eC) {}
        }
        var el = shadowRoot.firstElementChild;
        while (el) {
          if (el.shadowRoot) hideStockChromeInShadow(el.shadowRoot);
          el = el.nextElementSibling;
        }
      }
      function hideStockChromeFromRoot(origin) {
        function walk(node) {
          if (!node) return;
          if (node.shadowRoot) hideStockChromeInShadow(node.shadowRoot);
          var c = node.firstElementChild;
          while (c) {
            walk(c);
            c = c.nextElementSibling;
          }
        }
        walk(origin);
      }
      function afterChatOpened(origin) {
        applyStartOpenFromRoot(origin);
        hideStockChromeFromRoot(origin);
        applyRightAlignFromRoot(origin);
        ensureVersionBadgesFromRoot(origin);
        refreshMobileChatLayout();
        forceOpenChatsPaintFromRoot(origin);
        if (typeof window.requestAnimationFrame === "function") {
          window.requestAnimationFrame(function () {
            applyStartOpenFromRoot(origin);
            hideStockChromeFromRoot(origin);
            applyRightAlignFromRoot(origin);
            ensureVersionBadgesFromRoot(origin);
            refreshMobileChatLayout();
            forceOpenChatsPaintFromRoot(origin);
          });
        }
        setTimeout(function () {
          applyStartOpenFromRoot(origin);
          hideStockChromeFromRoot(origin);
          ensureVersionBadgesFromRoot(origin);
          refreshMobileChatLayout();
          forceOpenChatsPaintFromRoot(origin);
        }, 120);
        setTimeout(function () {
          applyStartOpenFromRoot(origin);
          hideStockChromeFromRoot(origin);
          refreshMobileChatLayout();
          forceOpenChatsPaintFromRoot(origin);
          try {
            window.dispatchEvent(new Event("resize"));
          } catch (eR) {}
        }, 350);
      }
      function clearOnlineChatInlineLayout(node) {
        if (!node || !node.style || !node.style.removeProperty) return;
        try {
          node.style.removeProperty("top");
          node.style.removeProperty("height");
          node.style.removeProperty("left");
          node.style.removeProperty("width");
          node.style.removeProperty("right");
          node.style.removeProperty("max-width");
          node.style.removeProperty("visibility");
          node.style.removeProperty("opacity");
          node.style.setProperty("pointer-events", "none", "important");
          node.style.setProperty("display", "none", "important");
        } catch (eClr) {}
      }
      function processShadowCollapseChat(shadowRoot) {
        if (!shadowRoot) return;
        var onlineChat = shadowRoot.querySelector(".online-chat");
        if (onlineChat) {
          onlineChat.classList.add("online-chat--collapsed");
          clearOnlineChatInlineLayout(onlineChat);
          alignOnlineChat(onlineChat);
          ensureVersionBadgeOnChat(onlineChat);
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
        blurActiveInsideChat(origin);
      }
      root.addEventListener("click", function (evt) {
        if (evt && evt.isTrusted === false) return;
        if (isCloseBtnClick(evt)) {
          // Only handle close inside online-chat (MK header close)
          var path = typeof evt.composedPath === "function" ? evt.composedPath() : [evt.target];
          var inOnlineChat = false;
          var pi;
          for (pi = 0; pi < path.length; pi++) {
            var pn = path[pi];
            if (pn && pn.classList && pn.classList.contains("online-chat")) {
              inOnlineChat = true;
              break;
            }
          }
          if (!inOnlineChat) return;
          blurActiveInsideChat(root);
          setTimeout(function () {
            applyCloseCollapseFromRoot(root);
            blurActiveInsideChat(root);
          }, 0);
          setTimeout(function () {
            blurActiveInsideChat(root);
          }, 80);
          return;
        }
        if (!isStartBtnClick(evt)) return;
        // Let Chat2Desk open natively (needed for messages), then polish MK UI
        setTimeout(function () {
          afterChatOpened(root);
        }, 0);
        setTimeout(function () {
          afterChatOpened(root);
        }, 80);
        setTimeout(function () {
          afterChatOpened(root);
        }, 200);
      }, true);
      function suppressDuplicateStartBtns() {
        dedupeStartBtnsFromRoot(root);
        hideStockChromeFromRoot(root);
        ensureVersionBadgesFromRoot(root);
      }
      var runAfterDomChange = debounce(function () {
        // Do not clone/strip startBtn — that breaks open + message load
        applyRightAlignFromRoot(root);
        applyStartBtnThemeFromRoot(root);
        hideStockChromeFromRoot(root);
        ensureVersionBadgesFromRoot(root);
        attachShadowObserversUnder(root, function () {
          suppressDuplicateStartBtns();
          runAfterDomChange();
        });
      }, 40);
      var runAfterResize = debounce(function () {
        suppressDuplicateStartBtns();
        applyRightAlignFromRoot(root);
        applyStartBtnThemeFromRoot(root);
        hideStockChromeFromRoot(root);
        ensureVersionBadgesFromRoot(root);
        attachShadowObserversUnder(root, function () {
          suppressDuplicateStartBtns();
          runAfterDomChange();
        });
      }, 120);
      applyRightAlignFromRoot(root);
      suppressDuplicateStartBtns();
      applyStartBtnThemeFromRoot(root);
      hideStockChromeFromRoot(root);
      ensureVersionBadgesFromRoot(root);
      // Safety: collapsed chat must never steal page clicks
      applyCloseCollapseFromRoot(root);
      attachShadowObserversUnder(root, function () {
        suppressDuplicateStartBtns();
        runAfterDomChange();
      });
      var afterOpenTimer = null;
      function scheduleAfterChatOpened() {
        clearTimeout(afterOpenTimer);
        afterOpenTimer = setTimeout(function () {
          afterChatOpened(root);
        }, 40);
      }
      if (typeof MutationObserver !== "undefined") {
        var alignObserver = new MutationObserver(function (mutations) {
          var needOpenFix = false;
          var mi;
          for (mi = 0; mi < mutations.length; mi++) {
            var m = mutations[mi];
            if (m.type === "attributes" && m.attributeName === "class" && m.target && m.target.classList) {
              if (
                m.target.classList.contains("online-chat") &&
                !m.target.classList.contains("online-chat--collapsed")
              ) {
                var prev = m.oldValue || "";
                if (prev.indexOf("online-chat--collapsed") !== -1) {
                  needOpenFix = true;
                }
              }
            }
          }
          suppressDuplicateStartBtns();
          runAfterDomChange();
          if (needOpenFix) scheduleAfterChatOpened();
        });
        alignObserver.observe(root, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ["class"],
          attributeOldValue: true
        });
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
