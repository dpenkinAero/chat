(function () {
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
      if (!existing) {
        var chat24 = document.createElement("script");
        chat24.type = "text/javascript";
        chat24.async = true;
        chat24.src = src;
        chat24.setAttribute("data-chat24-application", "true");
        document.body.appendChild(chat24);
      }
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
})();
