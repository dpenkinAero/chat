(function () {
  function ensureMaryKayThemeStyle() {
    var styleId = 'chat2desk-marykay-theme';
    var style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      style.type = 'text/css';
      document.head.appendChild(style);
    }
    style.textContent = "  /* Mary Kay \u2014 \u0442\u0451\u043c\u043d\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a, \u0431\u0435\u043b\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0438 \u0438\u043a\u043e\u043d\u043a\u0438, \u0431\u0435\u043b\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0447\u0430\u0442\u0430 */\n  #chat24-widget-root [class*=\"header\"],\n  #chat24-widget-root [class*=\"Header\"] {\n    background-color: #D32F7F !important;\n    color: #fff !important;\n  }\n  #chat24-widget-root [class*=\"header\"] *,\n  #chat24-widget-root [class*=\"Header\"] * {\n    color: #fff !important;\n    fill: #fff !important;\n    stroke: #fff !important;\n  }\n  #chat24-widget-root [class*=\"header\"] button,\n  #chat24-widget-root [class*=\"Header\"] button {\n    color: #fff !important;\n    background: transparent !important;\n  }\n  #chat24-widget-root [class*=\"header\"] svg,\n  #chat24-widget-root [class*=\"Header\"] svg {\n    fill: #fff !important;\n  }\n  /* \u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0447\u0430\u0442\u0430 \u0438 \u0432\u0432\u043e\u0434\u0430 \u2014 \u0431\u0435\u043b\u044b\u0439 \u0444\u043e\u043d */\n  #chat24-widget-root [class*=\"message\"],\n  #chat24-widget-root [class*=\"input\"],\n  #chat24-widget-root [class*=\"chat\"] {\n    background-color: #fff !important;\n  }\n  /* \u0410\u043a\u0446\u0435\u043d\u0442\u043d\u044b\u0435 \u0438\u043a\u043e\u043d\u043a\u0438 (\u0441\u043a\u0440\u0435\u043f\u043a\u0430, \u0441\u043c\u0430\u0439\u043b, \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c) \u2014 \u0442\u0451\u043c\u043d\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439 */\n  #chat24-widget-root [class*=\"input\"] svg,\n  #chat24-widget-root [class*=\"Input\"] svg,\n  #chat24-widget-root [class*=\"send\"],\n  #chat24-widget-root [class*=\"attach\"] {\n    fill: #D32F7F !important;\n    color: #D32F7F !important;\n  }\n  #chat24-widget-root [class*=\"send\"] button,\n  #chat24-widget-root [class*=\"Send\"] button {\n    background-color: #D32F7F !important;\n    color: #fff !important;\n  }\n  /* \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440 \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430 */\n  #chat24-widget-root input::placeholder,\n  #chat24-widget-root textarea::placeholder {\n    color: #9e9e9e !important;\n  }\n  /* \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u2014 \u0441\u043a\u0440\u0443\u0433\u043b\u0451\u043d\u043d\u044b\u0435 \u0443\u0433\u043b\u044b */\n  #chat24-widget-root > div {\n    border-radius: 12px !important;\n    overflow: hidden;\n    box-shadow: 0 4px 20px rgba(0,0,0,0.12);\n  }\n  /* \u0423\u0431\u0440\u0430\u0442\u044c \u0442\u0435\u043d\u044c \u0443 \u043a\u043d\u043e\u043f\u043a\u0438 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 */\n  #chat24-root,\n  #chat24-root > * {\n    box-shadow: none !important;\n  }";
  }

  ensureMaryKayThemeStyle();
})();

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
    function initChat24Skip() {
      var root = document.getElementById("chat24-root");
      if (!root) return;
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
      var runAfterDomChange = debounce(function (forceStrip) {
        stripStartBtnListenersFromRoot(root, !!forceStrip);
        applyRightAlignFromRoot(root);
        attachShadowObserversUnder(root, function () {
          runAfterDomChange(false);
        });
      }, 40);
      var runAfterResize = debounce(function () {
        stripStartBtnListenersFromRoot(root, true);
        applyRightAlignFromRoot(root);
        attachShadowObserversUnder(root, function () {
          runAfterDomChange(false);
        });
      }, 120);
      applyRightAlignFromRoot(root);
      stripStartBtnListenersFromRoot(root, true);
      attachShadowObserversUnder(root, function () {
        runAfterDomChange(false);
      });
      if (typeof MutationObserver !== "undefined") {
        var alignObserver = new MutationObserver(function () {
          runAfterDomChange(false);
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

(function () {
  if (window.__chat2deskMkStyleModuleLoaded) {
    if (typeof window.chat2deskMkApply === 'function') {
      window.chat2deskMkApply();
    }
    return;
  }

  var STYLE_ID = 'mk-chat24-container-overrides';

  var MK_MOBILE_HEADER_SEL = '.HeaderTopMobileDefault_mobileHeader__mW4xh';
  var MK_MOBILE_BOTTOM_SEL = '.HeaderMobileBottom_mobileBottom__O41tF';
  var MK_MOBILE_BOTTOM_ICONS_SEL = '.HeaderMobileBottom_mobileIcons__G58g1';
  var MK_MOBILE_CHAT_GAP = 8;

  var MK_ICON_BUTTON_SVG =
    '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<mask id="path-1-inside-1_mk" fill="white">' +
    '<path d="M0 0H44V44H0V0Z"/>' +
    '</mask>' +
    '<path d="M0 0H44V44H0V0Z" fill="#FCE5EF"/>' +
    '<path d="M0 0V-1.61364H-1.61364V0H0ZM0 44H-1.61364V45.6136H0V44ZM0 0V1.61364H44V0V-1.61364H0V0ZM44 44V42.3864H0V44V45.6136H44V44ZM0 44H1.61364V0H0H-1.61364V44H0Z" fill="#F6A2B4" mask="url(#path-1-inside-1_mk)"/>' +
    '<path d="M30 16.25C30.4832 16.25 30.8902 16.4195 31.2354 16.7646C31.5805 17.1098 31.75 17.5168 31.75 18V29.5752C31.75 29.8131 31.6736 29.9916 31.5273 30.1318C31.3719 30.2808 31.1995 30.3496 31 30.3496C30.8988 30.3496 30.8076 30.3309 30.7236 30.2949C30.6394 30.2588 30.5566 30.2031 30.4766 30.123L28.1035 27.75H18C17.5168 27.75 17.1098 27.5805 16.7646 27.2354C16.4195 26.8902 16.25 26.4832 16.25 26V25.25H27C27.6168 25.25 28.1507 25.027 28.5889 24.5889C29.027 24.1507 29.25 23.6168 29.25 23V16.25H30Z" fill="#B9275B"/>' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.25C25.4832 12.25 25.8902 12.4195 26.2354 12.7646C26.5805 13.1098 26.75 13.5168 26.75 14V21C26.75 21.4832 26.5805 21.8902 26.2354 22.2354C25.8902 22.5805 25.4832 22.75 25 22.75H15.8965L13.5234 25.123C13.4434 25.2031 13.3606 25.2588 13.2764 25.2949C13.1924 25.3309 13.1012 25.3496 13 25.3496C12.8005 25.3496 12.6281 25.2808 12.4727 25.1318C12.3264 24.9916 12.25 24.8131 12.25 24.5752V14C12.25 13.5168 12.4195 13.1098 12.7646 12.7646C13.1098 12.4195 13.5168 12.25 14 12.25H25ZM13.75 13.75V22.7783L15.2783 21.25H25.25V13.75H13.75Z" fill="#B9275B"/>' +
    '</svg>';
  var MK_START_BTN_ICON_URL =
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MK_ICON_BUTTON_SVG);

  function mkMobileWidgetSelectorChain() {
    var bases = [
      '.chat24-container .widget.widget--vertical.widget--right',
      '.chat24-container .widget.widget--horizontal.widget--right',
      '.chat24-container .widget.widget--vertical.widget--left',
      '.chat24-container .widget.widget--horizontal.widget--left'
    ];
    var suffixes = [
      '',
      '.widget--bottom',
      '.widget--center',
      '.widget--collapsed',
      '.widget--open'
    ];
    var out = [];
    var bi;
    var si;
    for (bi = 0; bi < bases.length; bi++) {
      for (si = 0; si < suffixes.length; si++) {
        if (suffixes[si] === '') {
          out.push(bases[bi]);
        } else {
          out.push(bases[bi] + suffixes[si]);
        }
      }
    }
    return out.join(',');
  }

  function buildContainerOverridesCss() {
    var mobW = mkMobileWidgetSelectorChain();
    var deskChatInset = '40px';
    return (
      '.chat24-container{' +
      'position:fixed!important;' +
      'right:0!important;' +
      'bottom:0!important;' +
      'top:auto!important;' +
      'left:auto!important;' +
      'transform:none!important;' +
      '-webkit-transform:none!important;' +
      'width:auto!important;' +
      'max-width:none!important;' +
      'z-index:9999!important;' +
      '}' +
      '.chat24-container .viber__wrapper{' +
      'box-shadow:none!important;' +
      'border-radius:0!important;' +
      '}' +
      '.chat24-container .widget{' +
      'position:fixed!important;' +
      'right:0!important;' +
      'left:auto!important;' +
      'top:50%!important;' +
      'bottom:auto!important;' +
      'transform:translateY(-50%)!important;' +
      '-webkit-transform:translateY(-50%)!important;' +
      'box-shadow:none!important;' +
      'border-radius:0!important;' +
      'width:44px!important;' +
      'height:44px!important;' +
      'min-width:44px!important;' +
      'min-height:44px!important;' +
      'max-width:44px!important;' +
      'max-height:44px!important;' +
      'padding:0!important;' +
      'margin:0!important;' +
      'background:transparent!important;' +
      'z-index:2147483000!important;' +
      '}' +
      '.chat24-container .widget.widget--collapsed{' +
      'width:44px!important;' +
      'height:44px!important;' +
      'border-radius:0!important;' +
      '}' +
      '.chat24-container .widget.widget--collapsed .messengers,' +
      '.chat24-container .widget.widget--collapsed .messenger,' +
      '.chat24-container .widget.widget--collapsed .messengers--vertical,' +
      '.chat24-container .widget.widget--collapsed .messengers--horizontal{' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'height:0!important;' +
      'width:0!important;' +
      'overflow:hidden!important;' +
      'opacity:0!important;' +
      'pointer-events:none!important;' +
      '}' +
      '.chat24-container .widget .startBtn,' +
      '.chat24-container .startBtn{' +
      'position:relative!important;' +
      'display:flex!important;' +
      'align-items:center!important;' +
      'justify-content:center!important;' +
      'width:44px!important;' +
      'height:44px!important;' +
      'min-width:44px!important;' +
      'min-height:44px!important;' +
      'max-width:44px!important;' +
      'max-height:44px!important;' +
      'margin:0!important;' +
      'padding:0!important;' +
      'border:none!important;' +
      'border-radius:0!important;' +
      'box-shadow:none!important;' +
      'background-color:transparent!important;' +
      'background-image:url("' +
      MK_START_BTN_ICON_URL +
      '")!important;' +
      'background-repeat:no-repeat!important;' +
      'background-position:center!important;' +
      'background-size:44px 44px!important;' +
      'top:auto!important;' +
      'right:auto!important;' +
      'bottom:auto!important;' +
      'left:auto!important;' +
      'transform:none!important;' +
      '-webkit-transform:none!important;' +
      '}' +
      '.chat24-container .widget .startBtn__button,' +
      '.chat24-container .widget .startBtn>button,' +
      '.chat24-container .startBtn .startBtn__button,' +
      '.chat24-container .startBtn>button{' +
      'position:absolute!important;' +
      'inset:0!important;' +
      'width:100%!important;' +
      'height:100%!important;' +
      'margin:0!important;' +
      'padding:0!important;' +
      'opacity:0!important;' +
      'cursor:pointer!important;' +
      'border:none!important;' +
      'border-radius:0!important;' +
      'box-shadow:none!important;' +
      'background:transparent!important;' +
      'outline:none!important;' +
      '}' +
      '.chat24-container .widget .startBtn__imgWrapper,' +
      '.chat24-container .widget .startBtn__img,' +
      '.chat24-container .widget .startBtn svg,' +
      '.chat24-container .startBtn .startBtn__imgWrapper,' +
      '.chat24-container .startBtn .startBtn__img,' +
      '.chat24-container .startBtn svg{' +
      'display:none!important;' +
      '}' +
      '.chat24-container .startBtn.startBtn--outside,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--right,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--bottom,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--collapsed,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--light,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--open,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--open.startBtn--bottom,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--open.startBtn--right{' +
      'position:fixed!important;' +
      'right:0!important;' +
      'left:auto!important;' +
      'top:50%!important;' +
      'bottom:auto!important;' +
      'transform:translateY(-50%)!important;' +
      '-webkit-transform:translateY(-50%)!important;' +
      'z-index:2147483001!important;' +
      '}' +
      '@media(max-width:1023px){' +
      '.chat24-container .startBtn.startBtn--outside,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--right.startBtn--bottom,' +
      '.chat24-container .startBtn.startBtn--outside.startBtn--collapsed{' +
      'position:fixed!important;' +
      'right:0!important;' +
      'left:auto!important;' +
      'top:50%!important;' +
      'bottom:auto!important;' +
      'transform:translateY(-50%)!important;' +
      '-webkit-transform:translateY(-50%)!important;' +
      '}' +
      '.chat24-container .widget.widget--collapsed{' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'pointer-events:none!important;' +
      '}' +
      mobW +
      '{' +
      'position:fixed!important;' +
      'right:0!important;' +
      'left:auto!important;' +
      'top:50%!important;' +
      'bottom:auto!important;' +
      'transform:translateY(-50%)!important;' +
      '-webkit-transform:translateY(-50%)!important;' +
      'width:44px!important;' +
      'height:44px!important;' +
      'min-width:44px!important;' +
      'min-height:44px!important;' +
      'max-width:44px!important;' +
      'max-height:44px!important;' +
      'padding:0!important;' +
      'margin:0!important;' +
      'box-shadow:none!important;' +
      'border-radius:0!important;' +
      'z-index:2147483000!important;' +
      '}' +
      '.chat24-container .widget.widget--collapsed .messengers,' +
      '.chat24-container .widget.widget--collapsed .messenger,' +
      '.chat24-container .widget.widget--collapsed .messengers--vertical,' +
      '.chat24-container .widget.widget--collapsed .messengers--horizontal{' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'height:0!important;width:0!important;overflow:hidden!important;' +
      'opacity:0!important;pointer-events:none!important;' +
      '}' +
      '.chat24-container .widget .startBtn.startBtn--inside .startBtn__button,' +
      '.chat24-container .widget .startBtn.startBtn--inside.startBtn--collapsed .startBtn__button,' +
      '.chat24-container .widget .startBtn.startBtn--outside .startBtn__button,' +
      '.chat24-container .widget .startBtn.startBtn--light .startBtn__button{' +
      'width:44px!important;height:44px!important;' +
      'min-width:44px!important;min-height:44px!important;' +
      'max-width:44px!important;max-height:44px!important;' +
      'border-radius:0!important;box-shadow:none!important;margin:0!important;' +
      '}' +
      '.chat24-container .online-chat:not(.online-chat--collapsed){' +
      'position:fixed!important;' +
      'top:var(--mk-chat24-win-top,calc(env(safe-area-inset-top,0px) + 76px))!important;' +
      'left:var(--mk-chat24-win-left,0px)!important;' +
      'right:auto!important;' +
      'bottom:auto!important;' +
      'width:var(--mk-chat24-win-width,100vw)!important;' +
      'max-width:none!important;' +
      'height:var(--mk-chat24-win-height,calc(100dvh - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px) - 200px))!important;' +
      'max-height:none!important;' +
      'min-height:120px!important;' +
      'transform:none!important;' +
      '-webkit-transform:none!important;' +
      'border-radius:0!important;' +
      'overflow:hidden!important;' +
      'box-shadow:0 6px 28px rgba(0,0,0,0.16)!important;' +
      'border:none!important;' +
      'border-top:0px solid rgba(0,0,0,0.08)!important;' +
      'border-bottom:0px solid rgba(0,0,0,0.08)!important;' +
      'box-sizing:border-box!important;' +
      '}' +
      '}' +
      '@media(min-width:1024px){' +
      '.chat24-container .widget .startBtn.startBtn--inside,' +
      '.chat24-container .widget .startBtn.startBtn--inside.startBtn--collapsed{' +
      'position:relative!important;' +
      '}' +
      '.chat24-container .widget .startBtn__button,' +
      '.chat24-container .widget .startBtn.startBtn--inside.startBtn--collapsed .startBtn__button{' +
      'border-radius:0!important;' +
      'box-shadow:none!important;' +
      '}' +
      '.chat24-container .online-chat.online-chat--vertical.online-chat--right.online-chat--bottom{' +
      'right:' +
      deskChatInset +
      '!important;' +
      'bottom:' +
      deskChatInset +
      '!important;' +
      'left:auto!important;' +
      'top:auto!important;' +
      '}' +
      '.chat24-container .online-chat.online-chat--vertical.online-chat--left.online-chat--bottom{' +
      'left:' +
      deskChatInset +
      '!important;' +
      'bottom:' +
      deskChatInset +
      '!important;' +
      'right:auto!important;' +
      'top:auto!important;' +
      '}' +
      '.chat24-container .online-chat.online-chat--vertical.online-chat--right.online-chat--center{' +
      'right:' +
      deskChatInset +
      '!important;' +
      'top:' +
      deskChatInset +
      '!important;' +
      'left:auto!important;' +
      'bottom:auto!important;' +
      '}' +
      '.chat24-container .online-chat.online-chat--vertical.online-chat--left.online-chat--center{' +
      'left:' +
      deskChatInset +
      '!important;' +
      'top:' +
      deskChatInset +
      '!important;' +
      'right:auto!important;' +
      'bottom:auto!important;' +
      '}' +
      '.chat24-container .online-chat{' +
      'border-radius:0!important;' +
      'border:0px solid rgba(0,0,0,0.12)!important;' +
      'box-shadow:none!important;' +
      '}' +
      '}' +
      '.chat24-container .online-chat:not(.online-chat--collapsed){' +
      'z-index:2147483646!important;' +
      '}' +
      '.chat24-container .online-chat:not(.online-chat--collapsed)~div .startBtn,' +
      '.chat24-container .online-chat:not(.online-chat--collapsed)~.startBtn{' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'pointer-events:none!important;' +
      '}' +
      '.chat24-container .online-chat:not(.online-chat--collapsed)~.widget{' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'pointer-events:none!important;' +
      '}'
    );
  }

  function collectChat24Containers(shadowRoot, out) {
    if (!shadowRoot || !shadowRoot.querySelectorAll) {
      return;
    }
    var found = shadowRoot.querySelectorAll('.chat24-container');
    var i;
    for (i = 0; i < found.length; i++) {
      out.push(found[i]);
    }
    var all = shadowRoot.querySelectorAll('*');
    var j;
    var el;
    for (j = 0; j < all.length; j++) {
      el = all[j];
      if (el.shadowRoot) {
        collectChat24Containers(el.shadowRoot, out);
      }
    }
  }

  function findAllContainers() {
    var out = [];
    var root = document.getElementById('chat24-root');
    if (root) {
      var rFound = root.querySelectorAll('.chat24-container');
      var a;
      for (a = 0; a < rFound.length; a++) {
        out.push(rFound[a]);
      }
      var w = root.querySelectorAll('*');
      var b;
      for (b = 0; b < w.length; b++) {
        if (w[b].shadowRoot) {
          collectChat24Containers(w[b].shadowRoot, out);
        }
      }
    }
    var wr = document.getElementById('chat24-widget-root');
    if (wr) {
      var w2 = wr.querySelectorAll('.chat24-container');
      var c;
      for (c = 0; c < w2.length; c++) {
        out.push(w2[c]);
      }
    }
    return out;
  }

  function applyInlineToStartBtn(el) {
    if (!el || !el.style || !el.style.setProperty) {
      return;
    }
    try {
      el.style.setProperty('width', '44px', 'important');
      el.style.setProperty('height', '44px', 'important');
      el.style.setProperty('min-width', '44px', 'important');
      el.style.setProperty('min-height', '44px', 'important');
      el.style.setProperty('max-width', '44px', 'important');
      el.style.setProperty('max-height', '44px', 'important');
      el.style.setProperty('border-radius', '0', 'important');
      el.style.setProperty('box-shadow', 'none', 'important');
      el.style.setProperty('background-color', 'transparent', 'important');
      el.style.setProperty(
        'background-image',
        'url("' + MK_START_BTN_ICON_URL + '")',
        'important'
      );
      el.style.setProperty('background-size', '44px 44px', 'important');
      el.style.setProperty('background-repeat', 'no-repeat', 'important');
      el.style.setProperty('background-position', 'center', 'important');
      var btn = el.querySelector('.startBtn__button') || el.querySelector('button');
      if (btn && btn.style && btn.style.setProperty) {
        btn.style.setProperty('border-radius', '0', 'important');
        btn.style.setProperty('box-shadow', 'none', 'important');
        btn.style.setProperty('opacity', '0', 'important');
        btn.style.setProperty('background', 'transparent', 'important');
      }
      var isOutside = el.classList && el.classList.contains('startBtn--outside');
      var narrow =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(max-width:1023px)').matches;
      if (isOutside && narrow) {
        el.style.setProperty('position', 'fixed', 'important');
        el.style.setProperty('right', '0', 'important');
        el.style.setProperty('left', 'auto', 'important');
        el.style.setProperty('top', '50%', 'important');
        el.style.setProperty('bottom', 'auto', 'important');
        el.style.setProperty('transform', 'translateY(-50%)', 'important');
        el.style.setProperty('-webkit-transform', 'translateY(-50%)', 'important');
        el.style.setProperty('z-index', '2147483001', 'important');
      } else if (isOutside && el.style && el.style.removeProperty) {
        el.style.removeProperty('position');
        el.style.removeProperty('right');
        el.style.removeProperty('left');
        el.style.removeProperty('top');
        el.style.removeProperty('bottom');
        el.style.removeProperty('transform');
        el.style.removeProperty('-webkit-transform');
        el.style.removeProperty('z-index');
      }
    } catch (e) {}
  }

  function walkShadowApplyInline(shadowRoot) {
    if (!shadowRoot || !shadowRoot.querySelectorAll) {
      return;
    }
    var nodes = shadowRoot.querySelectorAll('.chat24-container .startBtn');
    var arr = Array.prototype.slice.call(nodes);
    var i;
    for (i = 0; i < arr.length; i++) {
      applyInlineToStartBtn(arr[i]);
    }
    var all = shadowRoot.querySelectorAll('*');
    var j;
    var el;
    for (j = 0; j < all.length; j++) {
      el = all[j];
      if (el.shadowRoot) {
        walkShadowApplyInline(el.shadowRoot);
      }
    }
  }

  function walkLightEnterShadows(node) {
    if (!node || node.nodeType !== 1) {
      return;
    }
    if (node.shadowRoot) {
      walkShadowApplyInline(node.shadowRoot);
    }
    var c = node.firstElementChild;
    while (c) {
      walkLightEnterShadows(c);
      c = c.nextElementSibling;
    }
  }

  function syncStartBtnsFromRoot() {
    var root = document.getElementById('chat24-root');
    if (!root) {
      return;
    }
    walkLightEnterShadows(root);
  }

  function mkHorizontalFromMobileIconsRow(iconsEl) {
    if (!iconsEl || !iconsEl.getBoundingClientRect) {
      return null;
    }
    var r = iconsEl.getBoundingClientRect();
    var cs = window.getComputedStyle(iconsEl);
    var pl = parseFloat(cs.paddingLeft) || 0;
    var pr = parseFloat(cs.paddingRight) || 0;
    var bl = parseFloat(cs.borderLeftWidth) || 0;
    var brw = parseFloat(cs.borderRightWidth) || 0;
    var padLeft = r.left + pl + bl;
    var padW = r.width - pl - pr - bl - brw;
    if (padW > 48 && padW < r.width - 0.5) {
      return { left: padLeft, width: padW };
    }
    var minL = Infinity;
    var maxR = -Infinity;
    var child = iconsEl.firstElementChild;
    while (child) {
      var cr = child.getBoundingClientRect();
      if (cr.width > 1 && cr.height > 1) {
        minL = Math.min(minL, cr.left);
        maxR = Math.max(maxR, cr.right);
      }
      child = child.nextElementSibling;
    }
    var uw = maxR - minL;
    if (isFinite(minL) && isFinite(maxR) && uw > 48 && uw < r.width - 0.5) {
      return { left: minL, width: uw };
    }
    if (padW > 48) {
      return { left: padLeft, width: padW };
    }
    return { left: r.left, width: r.width };
  }

  function syncMkMobileOnlineChatInlineLayout(metrics, clearAll) {
    function visitShadow(shadowRoot) {
      if (!shadowRoot || !shadowRoot.querySelectorAll) {
        return;
      }
      var chats = shadowRoot.querySelectorAll(
        '.chat24-container .online-chat:not(.online-chat--collapsed)'
      );
      var i;
      var el;
      for (i = 0; i < chats.length; i++) {
        el = chats[i];
        if (clearAll || !metrics) {
          el.style.removeProperty('top');
          el.style.removeProperty('height');
          el.style.removeProperty('left');
          el.style.removeProperty('width');
          el.style.removeProperty('right');
          el.style.removeProperty('max-width');
        } else {
          el.style.setProperty('top', metrics.top + 'px', 'important');
          el.style.setProperty('height', metrics.height + 'px', 'important');
          el.style.setProperty('left', metrics.left + 'px', 'important');
          el.style.setProperty('width', metrics.width + 'px', 'important');
          el.style.setProperty('right', 'auto', 'important');
          el.style.setProperty('max-width', 'none', 'important');
          try {
            void el.offsetHeight;
          } catch (e3) {}
        }
      }
      var all = shadowRoot.querySelectorAll('*');
      for (i = 0; i < all.length; i++) {
        if (all[i].shadowRoot) {
          visitShadow(all[i].shadowRoot);
        }
      }
    }
    function walkLight(n) {
      if (!n || n.nodeType !== 1) {
        return;
      }
      if (n.shadowRoot) {
        visitShadow(n.shadowRoot);
      }
      var c = n.firstElementChild;
      while (c) {
        walkLight(c);
        c = c.nextElementSibling;
      }
    }
    var r1 = document.getElementById('chat24-root');
    var r2 = document.getElementById('chat24-widget-root');
    if (r1) {
      walkLight(r1);
    }
    if (r2) {
      walkLight(r2);
    }
  }

  function flushMkMobileChatLayout() {
    updateMkMobileChatViewportVars();
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(function () {
        updateMkMobileChatViewportVars();
        window.requestAnimationFrame(function () {
          updateMkMobileChatViewportVars();
        });
      });
    }
    setTimeout(updateMkMobileChatViewportVars, 0);
    setTimeout(updateMkMobileChatViewportVars, 48);
    setTimeout(updateMkMobileChatViewportVars, 160);
  }

  function updateMkMobileChatViewportVars() {
    var de = document.documentElement;
    if (!de || !de.style || !de.style.setProperty) {
      return;
    }
    var narrow =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(max-width:1023px)').matches;
    if (!narrow) {
      de.style.removeProperty('--mk-chat24-win-top');
      de.style.removeProperty('--mk-chat24-win-height');
      de.style.removeProperty('--mk-chat24-win-left');
      de.style.removeProperty('--mk-chat24-win-width');
      syncMkMobileOnlineChatInlineLayout(null, true);
      return;
    }
    var topEl = document.querySelector(MK_MOBILE_HEADER_SEL);
    var botEl = document.querySelector(MK_MOBILE_BOTTOM_SEL);
    if (!topEl || !botEl) {
      de.style.removeProperty('--mk-chat24-win-top');
      de.style.removeProperty('--mk-chat24-win-height');
      de.style.removeProperty('--mk-chat24-win-left');
      de.style.removeProperty('--mk-chat24-win-width');
      syncMkMobileOnlineChatInlineLayout(null, true);
      return;
    }
    var gap = MK_MOBILE_CHAT_GAP;
    var hr = topEl.getBoundingClientRect();
    var br = botEl.getBoundingClientRect();
    var topPx = hr.bottom + gap;
    var heightPx = br.top - hr.bottom - 2 * gap;
    if (!isFinite(topPx) || !isFinite(heightPx)) {
      de.style.removeProperty('--mk-chat24-win-top');
      de.style.removeProperty('--mk-chat24-win-height');
      de.style.removeProperty('--mk-chat24-win-left');
      de.style.removeProperty('--mk-chat24-win-width');
      syncMkMobileOnlineChatInlineLayout(null, true);
      return;
    }
    if (heightPx < 80) {
      de.style.removeProperty('--mk-chat24-win-top');
      de.style.removeProperty('--mk-chat24-win-height');
      de.style.removeProperty('--mk-chat24-win-left');
      de.style.removeProperty('--mk-chat24-win-width');
      syncMkMobileOnlineChatInlineLayout(null, true);
      return;
    }
    topPx = Math.max(0, topPx);
    heightPx = Math.max(120, heightPx);
    de.style.setProperty('--mk-chat24-win-top', topPx + 'px');
    de.style.setProperty('--mk-chat24-win-height', heightPx + 'px');
    var iconsEl =
      (botEl.querySelector && botEl.querySelector(MK_MOBILE_BOTTOM_ICONS_SEL)) ||
      (botEl.querySelector && botEl.querySelector('[class*="HeaderMobileBottom_mobileIcons"]')) ||
      document.querySelector(MK_MOBILE_BOTTOM_ICONS_SEL) ||
      document.querySelector('[class*="HeaderMobileBottom_mobileIcons"]') ||
      botEl;
    var hbox = mkHorizontalFromMobileIconsRow(iconsEl);
    var leftPx = hbox ? hbox.left : 0;
    var widthPx = hbox ? hbox.width : 0;
    var vw = window.innerWidth || document.documentElement.clientWidth || 0;
    if (!hbox || !isFinite(widthPx) || widthPx < 48) {
      leftPx = 0;
      widthPx = vw > 0 ? vw : 320;
      de.style.removeProperty('--mk-chat24-win-left');
      de.style.removeProperty('--mk-chat24-win-width');
    } else {
      leftPx = Math.max(0, leftPx);
      de.style.setProperty('--mk-chat24-win-left', leftPx + 'px');
      de.style.setProperty('--mk-chat24-win-width', widthPx + 'px');
    }
    syncMkMobileOnlineChatInlineLayout(
      { top: topPx, height: heightPx, left: leftPx, width: widthPx },
      false
    );
  }

  function ensureOverrideStyleInContainer(container) {
    if (!container || !container.appendChild) {
      return;
    }
    var st = container.querySelector('#' + STYLE_ID);
    if (!st) {
      st = document.createElement('style');
      st.id = STYLE_ID;
      st.type = 'text/css';
      container.appendChild(st);
    }
    st.textContent = buildContainerOverridesCss();
    container.appendChild(st);
    try {
      void container.offsetHeight;
      if (st.sheet) {
        try {
          void st.sheet.cssRules.length;
        } catch (e0) {}
      }
      var oc = container.querySelectorAll('.online-chat');
      var ri;
      for (ri = 0; ri < oc.length; ri++) {
        void oc[ri].offsetHeight;
      }
    } catch (e1) {}
  }

  function applyAll() {
    var list = findAllContainers();
    var i;
    for (i = 0; i < list.length; i++) {
      ensureOverrideStyleInContainer(list[i]);
    }
    syncStartBtnsFromRoot();
    flushMkMobileChatLayout();
    var lr = document.getElementById('chat24-root');
    if (lr) {
      bindChat24ShadowMutationObservers(lr);
    }
    var wr0 = document.getElementById('chat24-widget-root');
    if (wr0) {
      bindChat24ShadowMutationObservers(wr0);
    }
    if (
      list.length > 0 &&
      typeof window.requestAnimationFrame === 'function'
    ) {
      window.requestAnimationFrame(function () {
        try {
          window.dispatchEvent(new Event('resize'));
        } catch (e2) {}
      });
    }
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

  function ensureMkMobileLayoutListenersOnce() {
    if (window.__chat2deskMkLayoutListen) {
      return;
    }
    window.__chat2deskMkLayoutListen = true;
    var runDeb = debounce(updateMkMobileChatViewportVars, 40);
    function runResize() {
      flushMkMobileChatLayout();
    }
    window.addEventListener('resize', runResize, false);
    window.addEventListener('orientationchange', runResize, false);
    window.addEventListener('scroll', runDeb, true);
    if (window.visualViewport && window.visualViewport.addEventListener) {
      window.visualViewport.addEventListener('resize', runResize, false);
    }
    document.addEventListener('visibilitychange', runResize, false);
    if (typeof MutationObserver !== 'undefined' && document.body) {
      var mo = new MutationObserver(runDeb);
      mo.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }
  }

  var schedule = debounce(applyAll, 60);

  function bindChat24ShadowMutationObservers(lightRoot) {
    if (!lightRoot || typeof MutationObserver === 'undefined') {
      return;
    }
    if (!window.__chat2deskShadowRootsObserved) {
      window.__chat2deskShadowRootsObserved = new WeakSet();
    }
    var attached = window.__chat2deskShadowRootsObserved;
    function attachToShadow(shadowRoot) {
      if (!shadowRoot || attached.has(shadowRoot)) {
        return;
      }
      attached.add(shadowRoot);
      var mo = new MutationObserver(function () {
        flushMkMobileChatLayout();
        schedule();
      });
      mo.observe(shadowRoot, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      var all = shadowRoot.querySelectorAll('*');
      var idx;
      for (idx = 0; idx < all.length; idx++) {
        if (all[idx].shadowRoot) {
          attachToShadow(all[idx].shadowRoot);
        }
      }
    }
    var els = lightRoot.querySelectorAll('*');
    var j;
    for (j = 0; j < els.length; j++) {
      if (els[j].shadowRoot) {
        attachToShadow(els[j].shadowRoot);
      }
    }
  }

  function init() {
    var root = document.getElementById('chat24-root');
    if (!root) {
      return false;
    }
    if (!window.__chat2deskChat24ListenersReady) {
      window.__chat2deskChat24ListenersReady = true;
      ensureMkMobileLayoutListenersOnce();
      setTimeout(function () {
        bindChat24ShadowMutationObservers(document.getElementById('chat24-root'));
        bindChat24ShadowMutationObservers(document.getElementById('chat24-widget-root'));
        flushMkMobileChatLayout();
      }, 0);
      setTimeout(function () {
        bindChat24ShadowMutationObservers(document.getElementById('chat24-root'));
        flushMkMobileChatLayout();
      }, 400);
      if (!window.__chat2deskChat24ContainerMo && typeof MutationObserver !== 'undefined') {
        window.__chat2deskChat24ContainerMo = true;
        var mo = new MutationObserver(function () {
          flushMkMobileChatLayout();
          schedule();
        });
        mo.observe(root, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class']
        });
      }
      if (!window.__chat2deskChat24ContainerResize && typeof window.addEventListener === 'function') {
        window.__chat2deskChat24ContainerResize = true;
        window.addEventListener('resize', schedule, false);
      }
    }
    applyAll();
    return findAllContainers().length > 0;
  }

  if (!init()) {
    var iv = setInterval(function () {
      if (init()) {
        clearInterval(iv);
      }
    }, 200);
    setTimeout(function () {
      clearInterval(iv);
    }, 120000);
  }
  if (typeof document.addEventListener === 'function') {
    document.addEventListener(
      'readystatechange',
      function mkChat24Rs() {
        if (document.readyState !== 'loading') {
          document.removeEventListener('readystatechange', mkChat24Rs);
          init();
        }
      }
    );
  }
  window.chat2deskMkApply = function () {
    init();
    flushMkMobileChatLayout();
  };
  window.__chat2deskMkStyleModuleLoaded = true;
})();
