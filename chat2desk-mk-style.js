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
      '}' +
      '.chat24-container .startBtn:not([data-mk-primary-startbtn="1"]){' +
      'display:none!important;' +
      'visibility:hidden!important;' +
      'pointer-events:none!important;' +
      'opacity:0!important;' +
      'position:absolute!important;' +
      'width:0!important;' +
      'height:0!important;' +
      'overflow:hidden!important;' +
      'clip:rect(0,0,0,0)!important;' +
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

  function dedupeStartBtnsInShadow(shadowRoot) {
    if (!shadowRoot || !shadowRoot.querySelectorAll) {
      return;
    }
    var containers = shadowRoot.querySelectorAll('.chat24-container');
    var ci;
    for (ci = 0; ci < containers.length; ci++) {
      var btns = containers[ci].querySelectorAll('.startBtn');
      if (btns.length === 0) {
        continue;
      }
      btns[0].setAttribute('data-mk-primary-startbtn', '1');
      if (btns.length <= 1) {
        continue;
      }
      var i;
      for (i = btns.length - 1; i >= 1; i--) {
        if (btns[i] && btns[i].parentNode) {
          btns[i].parentNode.removeChild(btns[i]);
        }
      }
    }
    var all = shadowRoot.querySelectorAll('*');
    var j;
    for (j = 0; j < all.length; j++) {
      if (all[j].shadowRoot) {
        dedupeStartBtnsInShadow(all[j].shadowRoot);
      }
    }
  }

  function dedupeStartBtnsFromRoot() {
    var root = document.getElementById('chat24-root');
    if (!root) {
      return;
    }
    function walk(node) {
      if (!node) {
        return;
      }
      if (node.shadowRoot) {
        dedupeStartBtnsInShadow(node.shadowRoot);
      }
      var c = node.firstElementChild;
      while (c) {
        walk(c);
        c = c.nextElementSibling;
      }
    }
    walk(root);
    var wr = document.getElementById('chat24-widget-root');
    if (wr) {
      walk(wr);
    }
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
    dedupeStartBtnsFromRoot();
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
        dedupeStartBtnsFromRoot();
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
          dedupeStartBtnsFromRoot();
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
