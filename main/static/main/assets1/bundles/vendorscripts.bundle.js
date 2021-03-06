!function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t)
    }) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, function (t) {
    !function (E) {
        "use strict";
        var a, t, l, e, i, h, n;
        String.prototype.includes || (a = {}.toString, t = function () {
            try {
                var t = {}, e = Object.defineProperty, i = e(t, t, t) && e
            } catch (t) {
            }
            return i
        }(), l = "".indexOf, e = function (t) {
            if (null == this) throw new TypeError;
            var e = String(this);
            if (t && "[object RegExp]" == a.call(t)) throw new TypeError;
            var i = e.length, n = String(t), s = n.length, o = 1 < arguments.length ? arguments[1] : void 0,
                r = o ? Number(o) : 0;
            return r != r && (r = 0), !(i < s + Math.min(Math.max(r, 0), i)) && -1 != l.call(e, n, r)
        }, t ? t(String.prototype, "includes", {
            value: e,
            configurable: !0,
            writable: !0
        }) : String.prototype.includes = e), String.prototype.startsWith || (i = function () {
            try {
                var t = {}, e = Object.defineProperty, i = e(t, t, t) && e
            } catch (t) {
            }
            return i
        }(), h = {}.toString, n = function (t) {
            if (null == this) throw new TypeError;
            var e = String(this);
            if (t && "[object RegExp]" == h.call(t)) throw new TypeError;
            var i = e.length, n = String(t), s = n.length, o = 1 < arguments.length ? arguments[1] : void 0,
                r = o ? Number(o) : 0;
            r != r && (r = 0);
            var a = Math.min(Math.max(r, 0), i);
            if (i < s + a) return !1;
            for (var l = -1; ++l < s;) if (e.charCodeAt(a + l) != n.charCodeAt(l)) return !1;
            return !0
        }, i ? i(String.prototype, "startsWith", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = n), Object.keys || (Object.keys = function (t, e, i) {
            for (e in i = [], t) i.hasOwnProperty.call(t, e) && i.push(e);
            return i
        });
        var s = {useDefault: !1, _set: E.valHooks.select.set};
        E.valHooks.select.set = function (t, e) {
            return e && !s.useDefault && E(t).data("selected", !0), s._set.apply(this, arguments)
        };
        var w = null, o = function () {
            try {
                return new Event("change"), !0
            } catch (t) {
                return !1
            }
        }();

        function r(t) {
            return E.each([{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {re: /[\xD1]/g, ch: "N"}, {
                re: /[\xF1]/g,
                ch: "n"
            }], function () {
                t = t ? t.replace(this.re, this.ch) : ""
            }), t
        }

        E.fn.triggerNative = function (t) {
            var e, i = this[0];
            i.dispatchEvent ? (o ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event")).initEvent(t, !0, !1), i.dispatchEvent(e)) : i.fireEvent ? ((e = document.createEventObject()).eventType = t, i.fireEvent("on" + t, e)) : this.trigger(t)
        }, E.expr.pseudos.icontains = function (t, e, i) {
            var n = E(t).find("a");
            return (n.data("tokens") || n.text()).toString().toUpperCase().includes(i[3].toUpperCase())
        }, E.expr.pseudos.ibegins = function (t, e, i) {
            var n = E(t).find("a");
            return (n.data("tokens") || n.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())
        }, E.expr.pseudos.aicontains = function (t, e, i) {
            var n = E(t).find("a");
            return (n.data("tokens") || n.data("normalizedText") || n.text()).toString().toUpperCase().includes(i[3].toUpperCase())
        }, E.expr.pseudos.aibegins = function (t, e, i) {
            var n = E(t).find("a");
            return (n.data("tokens") || n.data("normalizedText") || n.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())
        };
        var d = function (e) {
                var i = function (t) {
                    return e[t]
                }, t = "(?:" + Object.keys(e).join("|") + ")", n = RegExp(t), s = RegExp(t, "g");
                return function (t) {
                    return t = null == t ? "" : "" + t, n.test(t) ? t.replace(s, i) : t
                }
            }, R = d({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}),
            p = d({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#x60;": "`"}),
            c = function (t, e) {
                s.useDefault || (E.valHooks.select.set = s._set, s.useDefault = !0), this.$element = E(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = e, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var i = this.options.windowPadding;
                "number" == typeof i && (this.options.windowPadding = [i, i, i, i]), this.val = c.prototype.val, this.render = c.prototype.render, this.refresh = c.prototype.refresh, this.setStyle = c.prototype.setStyle, this.selectAll = c.prototype.selectAll, this.deselectAll = c.prototype.deselectAll, this.destroy = c.prototype.destroy, this.remove = c.prototype.remove, this.show = c.prototype.show, this.hide = c.prototype.hide, this.init()
            };

        function u(t) {
            var o, r = arguments, a = t;
            [].shift.apply(r);
            var e = this.each(function () {
                var t = E(this);
                if (t.is("select")) {
                    var e = t.data("selectpicker"), i = "object" == typeof a && a;
                    if (e) {
                        if (i) for (var n in i) i.hasOwnProperty(n) && (e.options[n] = i[n])
                    } else {
                        var s = E.extend({}, c.DEFAULTS, E.fn.selectpicker.defaults || {}, t.data(), i);
                        s.template = E.extend({}, c.DEFAULTS.template, E.fn.selectpicker.defaults ? E.fn.selectpicker.defaults.template : {}, t.data().template, i.template), t.data("selectpicker", e = new c(this, s))
                    }
                    "string" == typeof a && (o = e[a] instanceof Function ? e[a].apply(e, r) : e.options[a])
                }
            });
            return void 0 !== o ? o : e
        }

        c.VERSION = "1.12.4", c.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (t, e) {
                return 1 == t ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (t, e) {
                return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-round btn-simple",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {caret: '<span class="caret"></span>'},
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0
        }, c.prototype = {
            constructor: c, init: function () {
                var e = this, t = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== t && (this.$button.attr("data-id", t), E('label[for="' + t + '"]').click(function (t) {
                    t.preventDefault(), e.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (t) {
                        e.$menuInner.attr("aria-expanded", !1), e.$element.trigger("hide.bs.select", t)
                    }, "hidden.bs.dropdown": function (t) {
                        e.$element.trigger("hidden.bs.select", t)
                    }, "show.bs.dropdown": function (t) {
                        e.$menuInner.attr("aria-expanded", !0), e.$element.trigger("show.bs.select", t)
                    }, "shown.bs.dropdown": function (t) {
                        e.$element.trigger("shown.bs.select", t)
                    }
                }), e.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                    e.$button.addClass("bs-invalid"), e.$element.on({
                        "focus.bs.select": function () {
                            e.$button.focus(), e.$element.off("focus.bs.select")
                        }, "shown.bs.select": function () {
                            e.$element.val(e.$element.val()).off("shown.bs.select")
                        }, "rendered.bs.select": function () {
                            this.validity.valid && e.$button.removeClass("bs-invalid"), e.$element.off("rendered.bs.select")
                        }
                    }), e.$button.on("blur.bs.select", function () {
                        e.$element.focus().blur(), e.$button.off("blur.bs.select")
                    })
                }), setTimeout(function () {
                    e.$element.trigger("loaded.bs.select")
                })
            }, createDropdown: function () {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    e = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    i = this.autofocus ? " autofocus" : "",
                    n = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    s = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + R(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    o = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    r = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    a = '<div class="btn-group bootstrap-select' + t + e + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + i + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu" role="combobox">' + n + s + o + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + r + "</div></div>";
                return E(a)
            }, createView: function () {
                var t = this.createDropdown(), e = this.createLi();
                return t.find("ul")[0].innerHTML = e, t
            }, reloadLi: function () {
                var t = this.createLi();
                this.$menuInner[0].innerHTML = t
            }, createLi: function () {
                var x = this, y = [], w = 0, t = document.createElement("option"), C = -1, S = function (t, e, i, n) {
                    return "<li" + (void 0 !== i && "" !== i ? ' class="' + i + '"' : "") + (null != e ? ' data-original-index="' + e + '"' : "") + (null != n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
                }, $ = function (t, e, i, n) {
                    return '<a tabindex="0"' + (void 0 !== e ? ' class="' + e + '"' : "") + (i ? ' style="' + i + '"' : "") + (x.options.liveSearchNormalize ? ' data-normalized-text="' + r(R(E(t).html())) + '"' : "") + (void 0 !== n || null !== n ? ' data-tokens="' + n + '"' : "") + ' role="option">' + t + '<span class="' + x.options.iconBase + " " + x.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (C--, !this.$element.find(".bs-title-option").length)) {
                    var e = this.$element[0];
                    t.className = "bs-title-option", t.innerHTML = this.options.title, t.value = "", e.insertBefore(t, e.firstChild), void 0 === E(e.options[e.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected") && (t.selected = !0)
                }
                var k = this.$element.find("option");
                return k.each(function (t) {
                    var e = E(this);
                    if (C++, !e.hasClass("bs-title-option")) {
                        var i, n = this.className || "", s = R(this.style.cssText),
                            o = e.data("content") ? e.data("content") : e.html(),
                            r = e.data("tokens") ? e.data("tokens") : null,
                            a = void 0 !== e.data("subtext") ? '<small class="text-muted">' + e.data("subtext") + "</small>" : "",
                            l = void 0 !== e.data("icon") ? '<span class="' + x.options.iconBase + " " + e.data("icon") + '"></span> ' : "",
                            h = e.parent(), d = "OPTGROUP" === h[0].tagName, p = d && h[0].disabled,
                            c = this.disabled || p;
                        if ("" !== l && c && (l = "<span>" + l + "</span>"), x.options.hideDisabled && (c && !d || p)) return i = e.data("prevHiddenIndex"), e.next().data("prevHiddenIndex", void 0 !== i ? i : t), void C--;
                        if (e.data("content") || (o = l + '<span class="text">' + o + a + "</span>"), d && !0 !== e.data("divider")) {
                            if (x.options.hideDisabled && c) {
                                if (void 0 === h.data("allOptionsDisabled")) {
                                    var u = h.children();
                                    h.data("allOptionsDisabled", u.filter(":disabled").length === u.length)
                                }
                                if (h.data("allOptionsDisabled")) return void C--
                            }
                            var g = " " + h[0].className || "";
                            if (0 === e.index()) {
                                w += 1;
                                var f = h[0].label,
                                    m = void 0 !== h.data("subtext") ? '<small class="text-muted">' + h.data("subtext") + "</small>" : "";
                                f = (h.data("icon") ? '<span class="' + x.options.iconBase + " " + h.data("icon") + '"></span> ' : "") + '<span class="text">' + R(f) + m + "</span>", 0 !== t && 0 < y.length && (C++, y.push(S("", null, "divider", w + "div"))), C++, y.push(S(f, null, "dropdown-header" + g, w))
                            }
                            if (x.options.hideDisabled && c) return void C--;
                            y.push(S($(o, "opt " + n + g, s, r), t, "", w))
                        } else if (!0 === e.data("divider")) y.push(S("", t, "divider")); else if (!0 === e.data("hidden")) i = e.data("prevHiddenIndex"), e.next().data("prevHiddenIndex", void 0 !== i ? i : t), y.push(S($(o, n, s, r), t, "hidden is-hidden")); else {
                            var v = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!v && x.options.hideDisabled && void 0 !== (i = e.data("prevHiddenIndex"))) {
                                var b = k.eq(i)[0].previousElementSibling;
                                b && "OPTGROUP" === b.tagName && !b.disabled && (v = !0)
                            }
                            v && (C++, y.push(S("", null, "divider", w + "div"))), y.push(S($(o, n, s, r), t))
                        }
                        x.liObj[t] = C
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), y.join("")
            }, findLis: function () {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            }, render: function (t) {
                var e, n = this, i = this.$element.find("option");
                !1 !== t && i.each(function (t) {
                    var e = n.findLis().eq(n.liObj[t]);
                    n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), n.setSelected(t, this.selected, e)
                }), this.togglePlaceholder(), this.tabIndex();
                var s = i.map(function () {
                    if (this.selected) {
                        if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                        var t, e = E(this),
                            i = e.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + e.data("icon") + '"></i> ' : "";
                        return t = n.options.showSubtext && e.data("subtext") && !n.multiple ? ' <small class="text-muted">' + e.data("subtext") + "</small>" : "", void 0 !== e.attr("title") ? e.attr("title") : e.data("content") && n.options.showContent ? e.data("content").toString() : i + e.html() + t
                    }
                }).toArray(), o = this.multiple ? s.join(this.options.multipleSeparator) : s[0];
                if (this.multiple && -1 < this.options.selectedTextFormat.indexOf("count")) {
                    var r = this.options.selectedTextFormat.split(">");
                    if (1 < r.length && s.length > r[1] || 1 == r.length && 2 <= s.length) {
                        e = this.options.hideDisabled ? ", [disabled]" : "";
                        var a = i.not('[data-divider="true"], [data-hidden="true"]' + e).length;
                        o = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(s.length, a) : this.options.countSelectedText).replace("{0}", s.length.toString()).replace("{1}", a.toString())
                    }
                }
                null == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", p(E.trim(o.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(o), this.$element.trigger("rendered.bs.select")
            }, setStyle: function (t, e) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = t || this.options.style;
                "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            }, liHeight: function (t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    var e = document.createElement("div"), i = document.createElement("div"),
                        n = document.createElement("ul"), s = document.createElement("li"),
                        o = document.createElement("li"), r = document.createElement("a"),
                        a = document.createElement("span"),
                        l = this.options.header && 0 < this.$menu.find(".popover-title").length ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? document.createElement("div") : null,
                        d = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (a.className = "text", e.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu", n.className = "dropdown-menu inner", s.className = "divider", a.appendChild(document.createTextNode("Inner text")), r.appendChild(a), o.appendChild(r), n.appendChild(o), n.appendChild(s), l && i.appendChild(l), h) {
                        var c = document.createElement("input");
                        h.className = "bs-searchbox", c.className = "form-control", h.appendChild(c), i.appendChild(h)
                    }
                    d && i.appendChild(d), i.appendChild(n), p && i.appendChild(p), e.appendChild(i), document.body.appendChild(e);
                    var u = r.offsetHeight, g = l ? l.offsetHeight : 0, f = h ? h.offsetHeight : 0,
                        m = d ? d.offsetHeight : 0, v = p ? p.offsetHeight : 0, b = E(s).outerHeight(!0),
                        x = "function" == typeof getComputedStyle && getComputedStyle(i), y = x ? null : E(i), w = {
                            vert: parseInt(x ? x.paddingTop : y.css("paddingTop")) + parseInt(x ? x.paddingBottom : y.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : y.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : y.css("borderBottomWidth")),
                            horiz: parseInt(x ? x.paddingLeft : y.css("paddingLeft")) + parseInt(x ? x.paddingRight : y.css("paddingRight")) + parseInt(x ? x.borderLeftWidth : y.css("borderLeftWidth")) + parseInt(x ? x.borderRightWidth : y.css("borderRightWidth"))
                        }, C = {
                            vert: w.vert + parseInt(x ? x.marginTop : y.css("marginTop")) + parseInt(x ? x.marginBottom : y.css("marginBottom")) + 2,
                            horiz: w.horiz + parseInt(x ? x.marginLeft : y.css("marginLeft")) + parseInt(x ? x.marginRight : y.css("marginRight")) + 2
                        };
                    document.body.removeChild(e), this.sizeInfo = {
                        liHeight: u,
                        headerHeight: g,
                        searchHeight: f,
                        actionsHeight: m,
                        doneButtonHeight: v,
                        dividerHeight: b,
                        menuPadding: w,
                        menuExtras: C
                    }
                }
            }, setSize: function () {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var o, r, a, l, h, d, p, c, u = this, g = this.$menu, f = this.$menuInner, s = E(window),
                        m = this.$newElement[0].offsetHeight, v = this.$newElement[0].offsetWidth,
                        b = this.sizeInfo.liHeight, x = this.sizeInfo.headerHeight, y = this.sizeInfo.searchHeight,
                        w = this.sizeInfo.actionsHeight, C = this.sizeInfo.doneButtonHeight,
                        t = this.sizeInfo.dividerHeight, S = this.sizeInfo.menuPadding, $ = this.sizeInfo.menuExtras,
                        e = this.options.hideDisabled ? ".disabled" : "", k = function () {
                            var t, e = u.$newElement.offset(), i = E(u.options.container);
                            u.options.container && !i.is("body") ? ((t = i.offset()).top += parseInt(i.css("borderTopWidth")), t.left += parseInt(i.css("borderLeftWidth"))) : t = {
                                top: 0,
                                left: 0
                            };
                            var n = u.options.windowPadding;
                            h = e.top - t.top - s.scrollTop(), d = s.height() - h - m - t.top - n[2], p = e.left - t.left - s.scrollLeft(), c = s.width() - p - v - t.left - n[1], h -= n[0], p -= n[3]
                        };
                    if (k(), "auto" === this.options.size) {
                        var i = function () {
                            var t, e = function (e, i) {
                                    return function (t) {
                                        return i ? t.classList ? t.classList.contains(e) : E(t).hasClass(e) : !(t.classList ? t.classList.contains(e) : E(t).hasClass(e))
                                    }
                                }, i = u.$menuInner[0].getElementsByTagName("li"),
                                n = Array.prototype.filter ? Array.prototype.filter.call(i, e("hidden", !1)) : u.$lis.not(".hidden"),
                                s = Array.prototype.filter ? Array.prototype.filter.call(n, e("dropdown-header", !0)) : n.filter(".dropdown-header");
                            k(), o = d - $.vert, r = c - $.horiz, u.options.container ? (g.data("height") || g.data("height", g.height()), a = g.data("height"), g.data("width") || g.data("width", g.width()), l = g.data("width")) : (a = g.height(), l = g.width()), u.options.dropupAuto && u.$newElement.toggleClass("dropup", d < h && o - $.vert < a), u.$newElement.hasClass("dropup") && (o = h - $.vert), "auto" === u.options.dropdownAlignRight && g.toggleClass("dropdown-menu-right", c < p && r - $.horiz < l - v), t = 3 < n.length + s.length ? 3 * b + $.vert - 2 : 0, g.css({
                                "max-height": o + "px",
                                overflow: "hidden",
                                "min-height": t + x + y + w + C + "px"
                            }), f.css({
                                "max-height": o - x - y - w - C - S.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(t - S.vert, 0) + "px"
                            })
                        };
                        i(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", i), s.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", i)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(e).length > this.options.size) {
                        var n = this.$lis.not(".divider").not(e).children().slice(0, this.options.size).last().parent().index(),
                            R = this.$lis.slice(0, n + 1).filter(".divider").length;
                        o = b * this.options.size + R * t + S.vert, u.options.container ? (g.data("height") || g.data("height", g.height()), a = g.data("height")) : a = g.height(), u.options.dropupAuto && this.$newElement.toggleClass("dropup", d < h && o - $.vert < a), g.css({
                            "max-height": o + x + y + w + C + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), f.css({"max-height": o - S.vert + "px", "overflow-y": "auto", "min-height": ""})
                    }
                }
            }, setWidth: function () {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var t = this.$menu.parent().clone().appendTo("body"),
                        e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                        i = t.children(".dropdown-menu").outerWidth(),
                        n = e.css("width", "auto").children("button").outerWidth();
                    t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            }, selectPosition: function () {
                this.$bsContainer = E('<div class="bs-container" />');
                var e, i, n, s = this, o = E(this.options.container), r = function (t) {
                    s.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), o.is("body") ? i = {
                        top: 0,
                        left: 0
                    } : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, s.$bsContainer.css({
                        top: e.top - i.top + n,
                        left: e.left - i.left,
                        width: t[0].offsetWidth
                    })
                };
                this.$button.on("click", function () {
                    var t = E(this);
                    s.isDisabled() || (r(s.$newElement), s.$bsContainer.appendTo(s.options.container).toggleClass("open", !t.hasClass("open")).append(s.$menu))
                }), E(window).on("resize scroll", function () {
                    r(s.$newElement)
                }), this.$element.on("hide.bs.select", function () {
                    s.$menu.data("height", s.$menu.height()), s.$bsContainer.detach()
                })
            }, setSelected: function (t, e, i) {
                i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e).find("a").attr("aria-selected", e)
            }, setDisabled: function (t, e, i) {
                i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
            }, isDisabled: function () {
                return this.$element[0].disabled
            }, checkDisabled: function () {
                var t = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                    return !t.isDisabled()
                })
            }, togglePlaceholder: function () {
                var t = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === t || "" === t || t.constructor === Array && 0 === t.length)
            }, tabIndex: function () {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            }, clickListener: function () {
                var y = this, e = E(document);
                e.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
                    /(32)/.test(t.keyCode.toString(10)) && e.data("spaceSelect") && (t.preventDefault(), e.data("spaceSelect", !1))
                }), this.$button.on("click", function () {
                    y.setSize()
                }), this.$element.on("shown.bs.select", function () {
                    if (y.options.liveSearch || y.multiple) {
                        if (!y.multiple) {
                            var t = y.liObj[y.$element[0].selectedIndex];
                            if ("number" != typeof t || !1 === y.options.size) return;
                            var e = y.$lis.eq(t)[0].offsetTop - y.$menuInner[0].offsetTop;
                            e = e - y.$menuInner[0].offsetHeight / 2 + y.sizeInfo.liHeight / 2, y.$menuInner[0].scrollTop = e
                        }
                    } else y.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function (t) {
                    var e = E(this), i = e.parent().data("originalIndex"), n = y.$element.val(),
                        s = y.$element.prop("selectedIndex"), o = !0;
                    if (y.multiple && 1 !== y.options.maxOptions && t.stopPropagation(), t.preventDefault(), !y.isDisabled() && !e.parent().hasClass("disabled")) {
                        var r = y.$element.find("option"), a = r.eq(i), l = a.prop("selected"),
                            h = a.parent("optgroup"), d = y.options.maxOptions, p = h.data("maxOptions") || !1;
                        if (y.multiple) {
                            if (a.prop("selected", !l), y.setSelected(i, !l), e.blur(), !1 !== d || !1 !== p) {
                                var c = d < r.filter(":selected").length, u = p < h.find("option:selected").length;
                                if (d && c || p && u) if (d && 1 == d) r.prop("selected", !1), a.prop("selected", !0), y.$menuInner.find(".selected").removeClass("selected"), y.setSelected(i, !0); else if (p && 1 == p) {
                                    h.find("option:selected").prop("selected", !1), a.prop("selected", !0);
                                    var g = e.parent().data("optgroup");
                                    y.$menuInner.find('[data-optgroup="' + g + '"]').removeClass("selected"), y.setSelected(i, !0)
                                } else {
                                    var f = "string" == typeof y.options.maxOptionsText ? [y.options.maxOptionsText, y.options.maxOptionsText] : y.options.maxOptionsText,
                                        m = "function" == typeof f ? f(d, p) : f, v = m[0].replace("{n}", d),
                                        b = m[1].replace("{n}", p), x = E('<div class="notify"></div>');
                                    m[2] && (v = v.replace("{var}", m[2][1 < d ? 0 : 1]), b = b.replace("{var}", m[2][1 < p ? 0 : 1])), a.prop("selected", !1), y.$menu.append(x), d && c && (x.append(E("<div>" + v + "</div>")), o = !1, y.$element.trigger("maxReached.bs.select")), p && u && (x.append(E("<div>" + b + "</div>")), o = !1, y.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                        y.setSelected(i, !1)
                                    }, 10), x.delay(750).fadeOut(300, function () {
                                        E(this).remove()
                                    })
                                }
                            }
                        } else r.prop("selected", !1), a.prop("selected", !0), y.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), y.setSelected(i, !0);
                        !y.multiple || y.multiple && 1 === y.options.maxOptions ? y.$button.focus() : y.options.liveSearch && y.$searchbox.focus(), o && (n != y.$element.val() && y.multiple || s != y.$element.prop("selectedIndex") && !y.multiple) && (w = [i, a.prop("selected"), l], y.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (t) {
                    t.currentTarget == this && (t.preventDefault(), t.stopPropagation(), y.options.liveSearch && !E(t.target).hasClass("close") ? y.$searchbox.focus() : y.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
                    t.preventDefault(), t.stopPropagation(), y.options.liveSearch ? y.$searchbox.focus() : y.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function () {
                    y.$button.click()
                }), this.$searchbox.on("click", function (t) {
                    t.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (t) {
                    y.options.liveSearch ? y.$searchbox.focus() : y.$button.focus(), t.preventDefault(), t.stopPropagation(), E(this).hasClass("bs-select-all") ? y.selectAll() : y.deselectAll()
                }), this.$element.change(function () {
                    y.render(!1), y.$element.trigger("changed.bs.select", w), w = null
                })
            }, liveSearchListener: function () {
                var s = this, o = E('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api", function () {
                    s.$menuInner.find(".active").removeClass("active"), s.$searchbox.val() && (s.$searchbox.val(""), s.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), s.multiple || s.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                        s.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (t) {
                    t.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    if (s.$lis.not(".is-hidden").removeClass("hidden"), s.$lis.filter(".active").removeClass("active"), o.remove(), s.$searchbox.val()) {
                        var t, e = s.$lis.not(".is-hidden, .divider, .dropdown-header");
                        if ((t = s.options.liveSearchNormalize ? e.not(":a" + s._searchStyle() + '("' + r(s.$searchbox.val()) + '")') : e.not(":" + s._searchStyle() + '("' + s.$searchbox.val() + '")')).length === e.length) o.html(s.options.noneResultsText.replace("{0}", '"' + R(s.$searchbox.val()) + '"')), s.$menuInner.append(o), s.$lis.addClass("hidden"); else {
                            t.addClass("hidden");
                            var i, n = s.$lis.not(".hidden");
                            n.each(function (t) {
                                var e = E(this);
                                e.hasClass("divider") ? void 0 === i ? e.addClass("hidden") : (i && i.addClass("hidden"), i = e) : e.hasClass("dropdown-header") && n.eq(t + 1).data("optgroup") !== e.data("optgroup") ? e.addClass("hidden") : i = null
                            }), i && i.addClass("hidden"), e.not(".hidden").first().addClass("active"), s.$menuInner.scrollTop(0)
                        }
                    }
                })
            }, _searchStyle: function () {
                return {begins: "ibegins", startsWith: "ibegins"}[this.options.liveSearchStyle] || "icontains"
            }, val: function (t) {
                return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
            }, changeAll: function (t) {
                if (this.multiple) {
                    void 0 === t && (t = !0), this.findLis();
                    var e = this.$element.find("option"),
                        i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"), n = i.length, s = [];
                    if (t) {
                        if (i.filter(".selected").length === i.length) return
                    } else if (0 === i.filter(".selected").length) return;
                    i.toggleClass("selected", t);
                    for (var o = 0; o < n; o++) {
                        var r = i[o].getAttribute("data-original-index");
                        s[s.length] = e.eq(r)[0]
                    }
                    E(s).prop("selected", t), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
                }
            }, selectAll: function () {
                return this.changeAll(!0)
            }, deselectAll: function () {
                return this.changeAll(!1)
            }, toggle: function (t) {
                (t = t || window.event) && t.stopPropagation(), this.$button.trigger("click")
            }, keydown: function (e) {
                var t, i, n, s, o = E(this), r = (o.is("input") ? o.parent().parent() : o.parent()).data("this"),
                    a = ":not(.disabled, .hidden, .dropdown-header, .divider)", l = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (!(s = r.$newElement.hasClass("open")) && (48 <= e.keyCode && e.keyCode <= 57 || 96 <= e.keyCode && e.keyCode <= 105 || 65 <= e.keyCode && e.keyCode <= 90)) return r.options.container ? r.$button.trigger("click") : (r.setSize(), r.$menu.parent().addClass("open"), s = !0), void r.$searchbox.focus();
                if (r.options.liveSearch && /(^9$|27)/.test(e.keyCode.toString(10)) && s && (e.preventDefault(), e.stopPropagation(), r.$menuInner.click(), r.$button.focus()), /(38|40)/.test(e.keyCode.toString(10))) {
                    if (!(t = r.$lis.filter(a)).length) return;
                    i = r.options.liveSearch ? t.index(t.filter(".active")) : t.index(t.find("a").filter(":focus").parent()), n = r.$menuInner.data("prevIndex"), 38 == e.keyCode ? (!r.options.liveSearch && i != n || -1 == i || i--, i < 0 && (i += t.length)) : 40 == e.keyCode && ((r.options.liveSearch || i == n) && i++, i %= t.length), r.$menuInner.data("prevIndex", i), r.options.liveSearch ? (e.preventDefault(), o.hasClass("dropdown-toggle") || (t.removeClass("active").eq(i).addClass("active").children("a").focus(), o.focus())) : t.eq(i).children("a").focus()
                } else if (!o.is("input")) {
                    var h, d = [];
                    (t = r.$lis.filter(a)).each(function (t) {
                        E.trim(E(this).children("a").text().toLowerCase()).substring(0, 1) == l[e.keyCode] && d.push(t)
                    }), h = E(document).data("keycount"), h++, E(document).data("keycount", h), E.trim(E(":focus").text().toLowerCase()).substring(0, 1) != l[e.keyCode] ? (h = 1, E(document).data("keycount", h)) : h >= d.length && (E(document).data("keycount", 0), h > d.length && (h = 1)), t.eq(d[h - 1]).children("a").focus()
                }
                if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && r.options.selectOnTab) && s) {
                    if (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), r.options.liveSearch) /(32)/.test(e.keyCode.toString(10)) || (r.$menuInner.find(".active a").click(), o.focus()); else {
                        var p = E(":focus");
                        p.click(), p.focus(), e.preventDefault(), E(document).data("spaceSelect", !0)
                    }
                    E(document).data("keycount", 0)
                }
                (/(^9$|27)/.test(e.keyCode.toString(10)) && s && (r.multiple || r.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !s) && (r.$menu.parent().removeClass("open"), r.options.container && r.$newElement.removeClass("open"), r.$button.focus())
            }, mobile: function () {
                this.$element.addClass("mobile-device")
            }, refresh: function () {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            }, hide: function () {
                this.$newElement.hide()
            }, show: function () {
                this.$newElement.show()
            }, remove: function () {
                this.$newElement.remove(), this.$element.remove()
            }, destroy: function () {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var g = E.fn.selectpicker;
        E.fn.selectpicker = u, E.fn.selectpicker.Constructor = c, E.fn.selectpicker.noConflict = function () {
            return E.fn.selectpicker = g, this
        }, E(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', c.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (t) {
            t.stopPropagation()
        }), E(window).on("load.bs.select.data-api", function () {
            E(".selectpicker").each(function () {
                var t = E(this);
                u.call(t, t.data())
            })
        })
    }(t)
}), function (E) {
    E.fn.extend({
        slimScroll: function (k) {
            var R = E.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "0",
                railBorderRadius: "0"
            }, k);
            return this.each(function () {
                var n, e, s, i, o, r, a, l, h = "<div></div>", d = 30, p = !1, c = E(this);
                if (c.parent().hasClass(R.wrapperClass)) {
                    var u = c.scrollTop();
                    if (b = c.closest("." + R.barClass), v = c.closest("." + R.railClass), C(), E.isPlainObject(k)) {
                        if ("height" in k && "auto" == k.height) {
                            c.parent().css("height", "auto"), c.css("height", "auto");
                            var g = c.parent().parent().height();
                            c.parent().css("height", g), c.css("height", g)
                        }
                        if ("scrollTo" in k) u = parseInt(R.scrollTo); else if ("scrollBy" in k) u += parseInt(R.scrollBy); else if ("destroy" in k) return b.remove(), v.remove(), void c.unwrap();
                        w(u, !1, !0)
                    }
                } else if (!(E.isPlainObject(k) && "destroy" in k)) {
                    R.height = "auto" == R.height ? c.parent().height() : R.height;
                    var f = E(h).addClass(R.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: R.width,
                        height: R.height
                    });
                    c.css({overflow: "hidden", width: R.width, height: R.height});
                    var m, v = E(h).addClass(R.railClass).css({
                        width: R.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: R.alwaysVisible && R.railVisible ? "block" : "none",
                        "border-radius": R.railBorderRadius,
                        background: R.railColor,
                        opacity: R.railOpacity,
                        zIndex: 90
                    }), b = E(h).addClass(R.barClass).css({
                        background: R.color,
                        width: R.size,
                        position: "absolute",
                        top: 0,
                        opacity: R.opacity,
                        display: R.alwaysVisible ? "block" : "none",
                        "border-radius": R.borderRadius,
                        BorderRadius: R.borderRadius,
                        MozBorderRadius: R.borderRadius,
                        WebkitBorderRadius: R.borderRadius,
                        zIndex: 99
                    }), x = "right" == R.position ? {right: R.distance} : {left: R.distance};
                    v.css(x), b.css(x), c.wrap(f), c.parent().append(b), c.parent().append(v), R.railDraggable && b.bind("mousedown", function (e) {
                        var i = E(document);
                        return s = !0, t = parseFloat(b.css("top")), pageY = e.pageY, i.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, b.css("top", currTop), w(0, b.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function (t) {
                            s = !1, $(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }), v.hover(function () {
                        S()
                    }, function () {
                        $()
                    }), b.hover(function () {
                        e = !0
                    }, function () {
                        e = !1
                    }), c.hover(function () {
                        n = !0, S(), $()
                    }, function () {
                        n = !1, $()
                    }), c.bind("touchstart", function (t, e) {
                        t.originalEvent.touches.length && (o = t.originalEvent.touches[0].pageY)
                    }), c.bind("touchmove", function (t) {
                        (p || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (w((o - t.originalEvent.touches[0].pageY) / R.touchScrollStep, !0), o = t.originalEvent.touches[0].pageY)
                    }), C(), "bottom" === R.start ? (b.css({top: c.outerHeight() - b.outerHeight()}), w(0, !0)) : "top" !== R.start && (w(E(R.start).position().top, null, !0), R.alwaysVisible || b.hide()), m = this, window.addEventListener ? (m.addEventListener("DOMMouseScroll", y, !1), m.addEventListener("mousewheel", y, !1)) : document.attachEvent("onmousewheel", y)
                }

                function y(t) {
                    if (n) {
                        var e = 0;
                        (t = t || window.event).wheelDelta && (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
                        var i = t.target || t.srcTarget || t.srcElement;
                        E(i).closest("." + R.wrapperClass).is(c.parent()) && w(e, !0), t.preventDefault && !p && t.preventDefault(), p || (t.returnValue = !1)
                    }
                }

                function w(t, e, i) {
                    p = !1;
                    var n = t, s = c.outerHeight() - b.outerHeight();
                    if (e && (n = parseInt(b.css("top")) + t * parseInt(R.wheelStep) / 100 * b.outerHeight(), n = Math.min(Math.max(n, 0), s), n = 0 < t ? Math.ceil(n) : Math.floor(n), b.css({top: n + "px"})), n = (a = parseInt(b.css("top")) / (c.outerHeight() - b.outerHeight())) * (c[0].scrollHeight - c.outerHeight()), i) {
                        var o = (n = t) / c[0].scrollHeight * c.outerHeight();
                        o = Math.min(Math.max(o, 0), s), b.css({top: o + "px"})
                    }
                    c.scrollTop(n), c.trigger("slimscrolling", ~~n), S(), $()
                }

                function C() {
                    r = Math.max(c.outerHeight() / c[0].scrollHeight * c.outerHeight(), d), b.css({height: r + "px"});
                    var t = r == c.outerHeight() ? "none" : "block";
                    b.css({display: t})
                }

                function S() {
                    if (C(), clearTimeout(i), a == ~~a) {
                        if (p = R.allowPageScroll, l != a) {
                            var t = 0 == ~~a ? "top" : "bottom";
                            c.trigger("slimscroll", t)
                        }
                    } else p = !1;
                    l = a, r >= c.outerHeight() ? p = !0 : (b.stop(!0, !0).fadeIn("fast"), R.railVisible && v.stop(!0, !0).fadeIn("fast"))
                }

                function $() {
                    R.alwaysVisible || (i = setTimeout(function () {
                        R.disableFadeOut && n || e || s || (b.fadeOut("slow"), v.fadeOut("slow"))
                    }, 1e3))
                }
            }), this
        }
    }), E.fn.extend({slimscroll: E.fn.slimScroll})
}(jQuery), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return e.apply(t)
    }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
}("object" == typeof global ? global : this, function () {
    "use strict";
    var e = e || {}, n = document.querySelectorAll.bind(document), r = Object.prototype.toString,
        a = "ontouchstart" in window;

    function s(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }

    function d(t) {
        var e, i = r.call(t);
        return "[object String]" === i ? n(t) : s(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i) && t.hasOwnProperty("length") ? t : s(e = t) && 0 < e.nodeType ? [t] : []
    }

    function p(t) {
        var e, i, n, s, o = {top: 0, left: 0}, r = t && t.ownerDocument;
        return e = r.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), i = null !== (s = n = r) && s === s.window ? n : 9 === n.nodeType && n.defaultView, {
            top: o.top + i.pageYOffset - e.clientTop,
            left: o.left + i.pageXOffset - e.clientLeft
        }
    }

    function c(t) {
        var e = "";
        for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        return e
    }

    var u = {
        duration: 750, delay: 200, show: function (t, e, i) {
            if (2 === t.button) return !1;
            e = e || this;
            var n = document.createElement("div");
            n.className = "waves-ripple waves-rippling", e.appendChild(n);
            var s = p(e), o = 0, r = 0;
            "touches" in t && t.touches.length ? (o = t.touches[0].pageY - s.top, r = t.touches[0].pageX - s.left) : (o = t.pageY - s.top, r = t.pageX - s.left), r = 0 <= r ? r : 0, o = 0 <= o ? o : 0;
            var a = "scale(" + e.clientWidth / 100 * 3 + ")", l = "translate(0,0)";
            i && (l = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", r), n.setAttribute("data-y", o), n.setAttribute("data-scale", a), n.setAttribute("data-translate", l);
            var h = {top: o + "px", left: r + "px"};
            n.classList.add("waves-notransition"), n.setAttribute("style", c(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = a + " " + l, h["-moz-transform"] = a + " " + l, h["-ms-transform"] = a + " " + l, h["-o-transform"] = a + " " + l, h.transform = a + " " + l, h.opacity = "1";
            var d = "mousemove" === t.type ? 2500 : u.duration;
            h["-webkit-transition-duration"] = d + "ms", h["-moz-transition-duration"] = d + "ms", h["-o-transition-duration"] = d + "ms", h["transition-duration"] = d + "ms", n.setAttribute("style", c(h))
        }, hide: function (t, e) {
            for (var i = (e = e || this).getElementsByClassName("waves-rippling"), n = 0, s = i.length; n < s; n++) o(t, e, i[n])
        }
    }, l = {
        input: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var i = document.createElement("i");
                i.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(i, t), i.appendChild(t);
                var n = window.getComputedStyle(t, null), s = n.color, o = n.backgroundColor;
                i.setAttribute("style", "color:" + s + ";background:" + o), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        }, img: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var i = document.createElement("i");
                e.replaceChild(i, t), i.appendChild(t)
            }
        }
    };

    function o(t, e, i) {
        if (i) {
            i.classList.remove("waves-rippling");
            var n = i.getAttribute("data-x"), s = i.getAttribute("data-y"), o = i.getAttribute("data-scale"),
                r = i.getAttribute("data-translate"), a = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
            a < 0 && (a = 0), "mousemove" === t.type && (a = 150);
            var l = "mousemove" === t.type ? 2500 : u.duration;
            setTimeout(function () {
                var t = {
                    top: s + "px",
                    left: n + "px",
                    opacity: "0",
                    "-webkit-transition-duration": l + "ms",
                    "-moz-transition-duration": l + "ms",
                    "-o-transition-duration": l + "ms",
                    "transition-duration": l + "ms",
                    "-webkit-transform": o + " " + r,
                    "-moz-transform": o + " " + r,
                    "-ms-transform": o + " " + r,
                    "-o-transform": o + " " + r,
                    transform: o + " " + r
                };
                i.setAttribute("style", c(t)), setTimeout(function () {
                    try {
                        e.removeChild(i)
                    } catch (t) {
                        return !1
                    }
                }, l)
            }, a)
        }
    }

    var h = {
        touches: 0, allowEvent: function (t) {
            var e = !0;
            return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
        }, registerEvent: function (t) {
            var e = t.type;
            "touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
                h.touches && (h.touches -= 1)
            }, 500)
        }
    };

    function i(e) {
        var i = function (t) {
            if (!1 === h.allowEvent(t)) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                    e = i;
                    break
                }
                i = i.parentElement
            }
            return e
        }(e);
        if (null !== i) {
            if (i.disabled || i.getAttribute("disabled") || i.classList.contains("disabled")) return;
            if (h.registerEvent(e), "touchstart" === e.type && u.delay) {
                var n = !1, s = setTimeout(function () {
                    s = null, u.show(e, i)
                }, u.delay), o = function (t) {
                    s && (clearTimeout(s), s = null, u.show(e, i)), n || (n = !0, u.hide(t, i))
                };
                i.addEventListener("touchmove", function (t) {
                    s && (clearTimeout(s), s = null), o(t)
                }, !1), i.addEventListener("touchend", o, !1), i.addEventListener("touchcancel", o, !1)
            } else u.show(e, i), a && (i.addEventListener("touchend", u.hide, !1), i.addEventListener("touchcancel", u.hide, !1)), i.addEventListener("mouseup", u.hide, !1), i.addEventListener("mouseleave", u.hide, !1)
        }
    }

    return e.init = function (t) {
        var e = document.body;
        "duration" in (t = t || {}) && (u.duration = t.duration), "delay" in t && (u.delay = t.delay), a && (e.addEventListener("touchstart", i, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", i, !1)
    }, e.attach = function (t, e) {
        var i, n;
        t = d(t), "[object Array]" === r.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
        for (var s = 0, o = t.length; s < o; s++) n = (i = t[s]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(n) && (l[n](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + e)
    }, e.ripple = function (t, e) {
        var i = (t = d(t)).length;
        if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, i) for (var n, s, o, r = {}, a = 0, l = {
            type: "mousedown",
            button: 1
        }, h = function (t, e) {
            return function () {
                u.hide(t, e)
            }
        }; a < i; a++) if (n = t[a], s = e.position || {
            x: n.clientWidth / 2,
            y: n.clientHeight / 2
        }, o = p(n), r.x = o.left + s.x, r.y = o.top + s.y, l.pageX = r.x, l.pageY = r.y, u.show(l, n), 0 <= e.wait && null !== e.wait) {
            setTimeout(h({type: "mouseup", button: 1}, n), e.wait)
        }
    }, e.calm = function (t) {
        for (var e = {type: "mouseup", button: 1}, i = 0, n = (t = d(t)).length; i < n; i++) u.hide(e, t[i])
    }, e.displayEffect = function (t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
    }, e
}), function () {
    "use strict";
    var o = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        t = "undefined" != typeof module && module.exports,
        i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, n = function () {
            for (var t, e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = 0, n = e.length, s = {}; i < n; i++) if ((t = e[i]) && t[1] in o) {
                for (i = 0; i < t.length; i++) s[e[0][i]] = t[i];
                return s
            }
            return !1
        }(), s = {change: n.fullscreenchange, error: n.fullscreenerror}, e = {
            request: function (t) {
                var e = n.requestFullscreen;
                t = t || o.documentElement, /5\.1[.\d]* Safari/.test(navigator.userAgent) ? t[e]() : t[e](i && Element.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                o[n.exitFullscreen]()
            }, toggle: function (t) {
                this.isFullscreen ? this.exit() : this.request(t)
            }, onchange: function (t) {
                this.on("change", t)
            }, onerror: function (t) {
                this.on("error", t)
            }, on: function (t, e) {
                var i = s[t];
                i && o.addEventListener(i, e, !1)
            }, off: function (t, e) {
                var i = s[t];
                i && o.removeEventListener(i, e, !1)
            }, raw: n
        };
    n ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function () {
                return Boolean(o[n.fullscreenElement])
            }
        }, element: {
            enumerable: !0, get: function () {
                return o[n.fullscreenElement]
            }
        }, enabled: {
            enumerable: !0, get: function () {
                return Boolean(o[n.fullscreenEnabled])
            }
        }
    }), t ? module.exports = e : window.screenfull = e) : t ? module.exports = !1 : window.screenfull = !1
}(), function ($, D, N) {
    var t;
    t = function (_) {
        "use strict";
        var t, e, v, O, y, W, j, q, d, C, i, o, p, z, c, n, s, L, F, a, r, l, h, w, u, g, f, m, b, x = {}, S = 0;
        t = function () {
            return {
                common: {
                    type: "line",
                    lineColor: "#00f",
                    fillColor: "#cdf",
                    defaultPixelsPerValue: 3,
                    width: "auto",
                    height: "auto",
                    composite: !1,
                    tagValuesAttribute: "values",
                    tagOptionsPrefix: "spark",
                    enableTagOptions: !1,
                    enableHighlight: !0,
                    highlightLighten: 1.4,
                    tooltipSkipNull: !0,
                    tooltipPrefix: "",
                    tooltipSuffix: "",
                    disableHiddenCheck: !1,
                    numberFormatter: !1,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ",",
                    numberDecimalMark: ".",
                    disableTooltips: !1,
                    disableInteraction: !1
                },
                line: {
                    spotColor: "#f80",
                    highlightSpotColor: "#5f5",
                    highlightLineColor: "#f22",
                    spotRadius: 1.5,
                    minSpotColor: "#f80",
                    maxSpotColor: "#f80",
                    lineWidth: 1,
                    normalRangeMin: N,
                    normalRangeMax: N,
                    normalRangeColor: "#ccc",
                    drawNormalOnTop: !1,
                    chartRangeMin: N,
                    chartRangeMax: N,
                    chartRangeMinX: N,
                    chartRangeMaxX: N,
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                bar: {
                    barColor: "#3366cc",
                    negBarColor: "#f44",
                    stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    zeroColor: N,
                    nullColor: N,
                    zeroAxis: !0,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: N,
                    chartRangeMin: N,
                    chartRangeClip: !1,
                    colorMap: N,
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: "#6f6",
                    negBarColor: "#f44",
                    zeroBarColor: "#999",
                    colorMap: {},
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: {map: {"-1": "Loss", 0: "Draw", 1: "Win"}}
                },
                discrete: {
                    lineHeight: "auto",
                    thresholdColor: N,
                    thresholdValue: 0,
                    chartRangeMax: N,
                    chartRangeMin: N,
                    chartRangeClip: !1,
                    tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}")
                },
                bullet: {
                    targetColor: "#f33",
                    targetWidth: 3,
                    performanceColor: "#33f",
                    rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                    base: N,
                    tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"),
                    tooltipValueLookups: {fields: {r: "Range", p: "Performance", t: "Target"}}
                },
                pie: {
                    offset: 0,
                    sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    borderWidth: 0,
                    borderColor: "#000",
                    tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                box: {
                    raw: !1,
                    boxLineColor: "#000",
                    boxFillColor: "#cdf",
                    whiskerColor: "#000",
                    outlierLineColor: "#333",
                    outlierFillColor: "#fff",
                    medianColor: "#f00",
                    showOutliers: !0,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: N,
                    targetColor: "#4a2",
                    chartRangeMax: N,
                    chartRangeMin: N,
                    tooltipFormat: new v("{{field:fields}}: {{value}}"),
                    tooltipFormatFieldlistKey: "field",
                    tooltipValueLookups: {
                        fields: {
                            lq: "Lower Quartile",
                            med: "Median",
                            uq: "Upper Quartile",
                            lo: "Left Outlier",
                            ro: "Right Outlier",
                            lw: "Left Whisker",
                            rw: "Right Whisker"
                        }
                    }
                }
            }
        }, e = function () {
            var t, e;
            return t = function () {
                this.init.apply(this, arguments)
            }, 1 < arguments.length ? (arguments[0] ? (t.prototype = _.extend(new arguments[0], arguments[arguments.length - 1]), t._super = arguments[0].prototype) : t.prototype = arguments[arguments.length - 1], 2 < arguments.length && ((e = Array.prototype.slice.call(arguments, 1, -1)).unshift(t.prototype), _.extend.apply(_, e))) : t.prototype = arguments[0], t.prototype.cls = t
        }, _.SPFormatClass = v = e({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g, precre: /(\w+)\.(\d+)/, init: function (t, e) {
                this.format = t, this.fclass = e
            }, render: function (t, e, i) {
                var n, s, o, r, a, l = this, h = t;
                return this.format.replace(this.fre, function () {
                    return s = arguments[1], o = arguments[3], (n = l.precre.exec(s)) ? (a = n[2], s = n[1]) : a = !1, (r = h[s]) === N ? "" : o && e && e[o] ? e[o].get ? e[o].get(r) || r : e[o][r] || r : (d(r) && (r = i.get("numberFormatter") ? i.get("numberFormatter")(r) : p(r, a, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), r)
                })
            }
        }), _.spformat = function (t, e) {
            return new v(t, e)
        }, O = function (t, e, i) {
            return t < e ? e : i < t ? i : t
        }, y = function (t, e) {
            var i;
            return 2 === e ? (i = D.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4) % 1 ? (t[D.floor(i)] + t[D.floor(i) - 1]) / 2 : t[i - 1] : (i = (t.length * e + 2) / 4) % 1 ? (t[D.floor(i)] + t[D.floor(i) - 1]) / 2 : t[i - 1]
        }, W = function (t) {
            var e;
            switch (t) {
                case"undefined":
                    t = N;
                    break;
                case"null":
                    t = null;
                    break;
                case"true":
                    t = !0;
                    break;
                case"false":
                    t = !1;
                    break;
                default:
                    t == (e = parseFloat(t)) && (t = e)
            }
            return t
        }, j = function (t) {
            var e, i = [];
            for (e = t.length; e--;) i[e] = W(t[e]);
            return i
        }, q = function (t, e) {
            var i, n, s = [];
            for (i = 0, n = t.length; i < n; i++) t[i] !== e && s.push(t[i]);
            return s
        }, d = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, p = function (t, e, i, n, s) {
            var o, r;
            for (t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""), (o = (o = _.inArray(".", t)) < 0 ? t.length : o) < t.length && (t[o] = s), r = o - i; 0 < r; r -= i) t.splice(r, 0, n);
            return t.join("")
        }, C = function (t, e, i) {
            var n;
            for (n = e.length; n--;) if ((!i || null !== e[n]) && e[n] !== t) return !1;
            return !0
        }, o = function (t) {
            return _.isArray(t) ? t : [t]
        }, i = function (t) {
            var e, i;
            if ($.createStyleSheet) try {
                return void ($.createStyleSheet().cssText = t)
            } catch (t) {
                i = !0
            }
            (e = $.createElement("style")).type = "text/css", $.getElementsByTagName("head")[0].appendChild(e), i ? $.styleSheets[$.styleSheets.length - 1].cssText = t : e["string" == typeof $.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t
        }, _.fn.simpledraw = function (t, e, i, n) {
            var s, o;
            if (i && (s = this.data("_jqs_vcanvas"))) return s;
            if (!1 === _.fn.sparkline.canvas) return !1;
            if (_.fn.sparkline.canvas === N) {
                var r = $.createElement("canvas");
                if (r.getContext && r.getContext("2d")) _.fn.sparkline.canvas = function (t, e, i, n) {
                    return new f(t, e, i, n)
                }; else {
                    if (!$.namespaces || $.namespaces.v) return _.fn.sparkline.canvas = !1;
                    $.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), _.fn.sparkline.canvas = function (t, e, i, n) {
                        return new m(t, e, i)
                    }
                }
            }
            return t === N && (t = _(this).innerWidth()), e === N && (e = _(this).innerHeight()), s = _.fn.sparkline.canvas(t, e, this, n), (o = _(this).data("_jqs_mhandler")) && o.registerCanvas(s), s
        }, _.fn.cleardraw = function () {
            var t = this.data("_jqs_vcanvas");
            t && t.reset()
        }, _.RangeMapClass = z = e({
            init: function (t) {
                var e, i, n = [];
                for (e in t) t.hasOwnProperty(e) && "string" == typeof e && -1 < e.indexOf(":") && ((i = e.split(":"))[0] = 0 === i[0].length ? -1 / 0 : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], n.push(i));
                this.map = t, this.rangelist = n || !1
            }, get: function (t) {
                var e, i, n, s = this.rangelist;
                if ((n = this.map[t]) !== N) return n;
                if (s) for (e = s.length; e--;) if ((i = s[e])[0] <= t && i[1] >= t) return i[2];
                return N
            }
        }), _.range_map = function (t) {
            return new z(t)
        }, c = e({
            init: function (t, e) {
                var i = _(t);
                this.$el = i, this.options = e, this.currentPageX = 0, this.currentPageY = 0, this.el = t, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !e.get("disableTooltips"), this.highlightEnabled = !e.get("disableHighlight")
            }, registerSparkline: function (t) {
                this.splist.push(t), this.over && this.updateDisplay()
            }, registerCanvas: function (t) {
                var e = _(t.canvas);
                this.canvas = t, (this.$canvas = e).mouseenter(_.proxy(this.mouseenter, this)), e.mouseleave(_.proxy(this.mouseleave, this)), e.click(_.proxy(this.mouseclick, this))
            }, reset: function (t) {
                this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = N)
            }, mouseclick: function (t) {
                var e = _.Event("sparklineClick");
                e.originalEvent = t, e.sparklines = this.splist, this.$el.trigger(e)
            }, mouseenter: function (t) {
                _($.body).unbind("mousemove.jqs"), _($.body).bind("mousemove.jqs", _.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, !this.tooltip && this.displayTooltips && (this.tooltip = new n(this.options), this.tooltip.updatePosition(t.pageX, t.pageY)), this.updateDisplay()
            }, mouseleave: function () {
                _($.body).unbind("mousemove.jqs");
                var t, e = this.splist, i = e.length, n = !1;
                for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), t = 0; t < i; t++) e[t].clearRegionHighlight() && (n = !0);
                n && this.canvas.render()
            }, mousemove: function (t) {
                this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay()
            }, updateDisplay: function () {
                var t, e, i, n, s = this.splist, o = s.length, r = !1, a = this.$canvas.offset(),
                    l = this.currentPageX - a.left, h = this.currentPageY - a.top;
                if (this.over) {
                    for (e = 0; e < o; e++) (i = s[e].setRegionHighlight(this.currentEl, l, h)) && (r = !0);
                    if (r) {
                        if ((n = _.Event("sparklineRegionChange")).sparklines = this.splist, this.$el.trigger(n), this.tooltip) {
                            for (t = "", e = 0; e < o; e++) t += s[e].getCurrentRegionTooltip();
                            this.tooltip.setContent(t)
                        }
                        this.disableHighlight || this.canvas.render()
                    }
                    null === i && this.mouseleave()
                }
            }
        }), n = e({
            sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
            init: function (t) {
                var e, i = t.get("tooltipClassname", "jqstooltip"), n = this.sizeStyle;
                this.container = t.get("tooltipContainer") || $.body, this.tooltipOffsetX = t.get("tooltipOffsetX", 10), this.tooltipOffsetY = t.get("tooltipOffsetY", 12), _("#jqssizetip").remove(), _("#jqstooltip").remove(), this.sizetip = _("<div/>", {
                    id: "jqssizetip",
                    style: n,
                    class: i
                }), this.tooltip = _("<div/>", {
                    id: "jqstooltip",
                    class: i
                }).appendTo(this.container), e = this.tooltip.offset(), this.offsetLeft = e.left, this.offsetTop = e.top, this.hidden = !0, _(window).unbind("resize.jqs scroll.jqs"), _(window).bind("resize.jqs scroll.jqs", _.proxy(this.updateWindowDims, this)), this.updateWindowDims()
            },
            updateWindowDims: function () {
                this.scrollTop = _(window).scrollTop(), this.scrollLeft = _(window).scrollLeft(), this.scrollRight = this.scrollLeft + _(window).width(), this.updatePosition()
            },
            getSize: function (t) {
                this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
            },
            setContent: function (t) {
                if (!t) return this.tooltip.css("visibility", "hidden"), void (this.hidden = !0);
                this.getSize(t), this.tooltip.html(t).css({
                    width: this.width,
                    height: this.height,
                    visibility: "visible"
                }), this.hidden && (this.hidden = !1, this.updatePosition())
            },
            updatePosition: function (t, e) {
                if (t === N) {
                    if (this.mousex === N) return;
                    t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop
                } else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
                this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({
                    left: t,
                    top: e
                }))
            },
            remove: function () {
                this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = N, _(window).unbind("resize.jqs scroll.jqs")
            }
        }), _(function () {
            i('.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}')
        }), b = [], _.fn.sparkline = function (h, i) {
            return this.each(function () {
                var t, e, a = new _.fn.sparkline.options(this, i), l = _(this);
                if (t = function () {
                    var t, e, i, n, s, o, r;
                    "html" === h || h === N ? ((r = this.getAttribute(a.get("tagValuesAttribute"))) !== N && null !== r || (r = l.html()), t = r.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : t = h, e = "auto" === a.get("width") ? t.length * a.get("defaultPixelsPerValue") : a.get("width"), "auto" === a.get("height") ? a.get("composite") && _.data(this, "_jqs_vcanvas") || ((n = $.createElement("span")).innerHTML = "a", l.html(n), i = _(n).innerHeight() || _(n).height(), _(n).remove(), n = null) : i = a.get("height"), a.get("disableInteraction") ? s = !1 : (s = _.data(this, "_jqs_mhandler")) ? a.get("composite") || s.reset() : (s = new c(this, a), _.data(this, "_jqs_mhandler", s)), !a.get("composite") || _.data(this, "_jqs_vcanvas") ? ((o = new (_.fn.sparkline[a.get("type")])(this, t, a, e, i)).render(), s && s.registerSparkline(o)) : _.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), _.data(this, "_jqs_errnotify", !0))
                }, _(this).html() && !a.get("disableHiddenCheck") && _(this).is(":hidden") || !_(this).parents("body").length) {
                    if (!a.get("composite") && _.data(this, "_jqs_pending")) for (e = b.length; e; e--) b[e - 1][0] == this && b.splice(e - 1, 1);
                    b.push([this, t]), _.data(this, "_jqs_pending", !0)
                } else t.call(this)
            })
        }, _.fn.sparkline.defaults = t(), _.sparkline_display_visible = function () {
            var t, e, i, n = [];
            for (e = 0, i = b.length; e < i; e++) t = b[e][0], _(t).is(":visible") && !_(t).parents().is(":hidden") ? (b[e][1].call(t), _.data(b[e][0], "_jqs_pending", !1), n.push(e)) : _(t).closest("html").length || _.data(t, "_jqs_pending") || (_.data(b[e][0], "_jqs_pending", !1), n.push(e));
            for (e = n.length; e; e--) b.splice(n[e - 1], 1)
        }, _.fn.sparkline.options = e({
            init: function (t, e) {
                var i, n, s, o;
                this.userOptions = e = e || {}, this.tag = t, this.tagValCache = {}, s = (n = _.fn.sparkline.defaults).common, this.tagOptionsPrefix = e.enableTagOptions && (e.tagOptionsPrefix || s.tagOptionsPrefix), i = (o = this.getTagSetting("type")) === x ? n[e.type || s.type] : n[o], this.mergedOptions = _.extend({}, s, i, e)
            }, getTagSetting: function (t) {
                var e, i, n, s, o = this.tagOptionsPrefix;
                if (!1 === o || o === N) return x;
                if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key; else {
                    if ((e = this.tag.getAttribute(o + t)) === N || null === e) e = x; else if ("[" === e.substr(0, 1)) for (i = (e = e.substr(1, e.length - 2).split(",")).length; i--;) e[i] = W(e[i].replace(/(^\s*)|(\s*$)/g, "")); else if ("{" === e.substr(0, 1)) for (n = e.substr(1, e.length - 2).split(","), e = {}, i = n.length; i--;) e[(s = n[i].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] = W(s[1].replace(/(^\s*)|(\s*$)/g, "")); else e = W(e);
                    this.tagValCache.key = e
                }
                return e
            }, get: function (t, e) {
                var i, n = this.getTagSetting(t);
                return n !== x ? n : (i = this.mergedOptions[t]) === N ? e : i
            }
        }), _.fn.sparkline._base = e({
            disabled: !1, init: function (t, e, i, n, s) {
                this.el = t, this.$el = _(t), this.values = e, this.options = i, this.width = n, this.height = s, this.currentRegion = N
            }, initTarget: function () {
                var t = !this.options.get("disableInteraction");
                (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
            }, render: function () {
                return !this.disabled || (this.el.innerHTML = "", !1)
            }, getRegion: function (t, e) {
            }, setRegionHighlight: function (t, e, i) {
                var n, s = this.currentRegion, o = !this.options.get("disableHighlight");
                return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : s !== (n = this.getRegion(t, e, i)) && (s !== N && o && this.removeHighlight(), (this.currentRegion = n) !== N && o && this.renderHighlight(), !0)
            }, clearRegionHighlight: function () {
                return this.currentRegion !== N && (this.removeHighlight(), !(this.currentRegion = N))
            }, renderHighlight: function () {
                this.changeHighlight(!0)
            }, removeHighlight: function () {
                this.changeHighlight(!1)
            }, changeHighlight: function (t) {
            }, getCurrentRegionTooltip: function () {
                var t, e, i, n, s, o, r, a, l, h, d, p, c, u, g = this.options, f = "", m = [];
                if (this.currentRegion === N) return "";
                if (t = this.getCurrentRegionFields(), d = g.get("tooltipFormatter")) return d(this, g, t);
                if (g.get("tooltipChartTitle") && (f += '<div class="jqs jqstitle">' + g.get("tooltipChartTitle") + "</div>\n"), !(e = this.options.get("tooltipFormat"))) return "";
                if (_.isArray(e) || (e = [e]), _.isArray(t) || (t = [t]), r = this.options.get("tooltipFormatFieldlist"), a = this.options.get("tooltipFormatFieldlistKey"), r && a) {
                    for (l = [], o = t.length; o--;) h = t[o][a], -1 != (u = _.inArray(h, r)) && (l[u] = t[o]);
                    t = l
                }
                for (i = e.length, c = t.length, o = 0; o < i; o++) for ("string" == typeof (p = e[o]) && (p = new v(p)), n = p.fclass || "jqsfield", u = 0; u < c; u++) t[u].isNull && g.get("tooltipSkipNull") || (_.extend(t[u], {
                    prefix: g.get("tooltipPrefix"),
                    suffix: g.get("tooltipSuffix")
                }), s = p.render(t[u], g.get("tooltipValueLookups"), g), m.push('<div class="' + n + '">' + s + "</div>"));
                return m.length ? f + m.join("\n") : ""
            }, getCurrentRegionFields: function () {
            }, calcHighlightColor: function (t, e) {
                var i, n, s, o, r = e.get("highlightColor"), a = e.get("highlightLighten");
                if (r) return r;
                if (a && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) {
                    for (s = [], n = 4 === t.length ? 16 : 1, o = 0; o < 3; o++) s[o] = O(D.round(parseInt(i[o + 1], 16) * n * a), 0, 255);
                    return "rgb(" + s.join(",") + ")"
                }
                return t
            }
        }), s = {
            changeHighlight: function (t) {
                var e, i = this.currentRegion, n = this.target, s = this.regionShapes[i];
                s && (e = this.renderRegion(i, t), _.isArray(e) || _.isArray(s) ? (n.replaceWithShapes(s, e), this.regionShapes[i] = _.map(e, function (t) {
                    return t.id
                })) : (n.replaceWithShape(s, e), this.regionShapes[i] = e.id))
            }, render: function () {
                var t, e, i, n, s = this.values, o = this.target, r = this.regionShapes;
                if (this.cls._super.render.call(this)) {
                    for (i = s.length; i--;) if (t = this.renderRegion(i)) if (_.isArray(t)) {
                        for (e = [], n = t.length; n--;) t[n].append(), e.push(t[n].id);
                        r[i] = e
                    } else t.append(), r[i] = t.id; else r[i] = null;
                    o.render()
                }
            }
        }, _.fn.sparkline.line = L = e(_.fn.sparkline._base, {
            type: "line", init: function (t, e, i, n, s) {
                L._super.init.call(this, t, e, i, n, s), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
            }, getRegion: function (t, e, i) {
                var n, s = this.regionMap;
                for (n = s.length; n--;) if (null !== s[n] && e >= s[n][0] && e <= s[n][1]) return s[n][2];
                return N
            }, getCurrentRegionFields: function () {
                var t = this.currentRegion;
                return {
                    isNull: null === this.yvalues[t],
                    x: this.xvalues[t],
                    y: this.yvalues[t],
                    color: this.options.get("lineColor"),
                    fillColor: this.options.get("fillColor"),
                    offset: t
                }
            }, renderHighlight: function () {
                var t, e, i = this.currentRegion, n = this.target, s = this.vertices[i], o = this.options,
                    r = o.get("spotRadius"), a = o.get("highlightSpotColor"), l = o.get("highlightLineColor");
                s && (r && a && (t = n.drawCircle(s[0], s[1], r, N, a), this.highlightSpotId = t.id, n.insertAfterShape(this.lastShapeId, t)), l && (e = n.drawLine(s[0], this.canvasTop, s[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = e.id, n.insertAfterShape(this.lastShapeId, e)))
            }, removeHighlight: function () {
                var t = this.target;
                this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null)
            }, scanValues: function () {
                var t, e, i, n, s, o = this.values, r = o.length, a = this.xvalues, l = this.yvalues, h = this.yminmax;
                for (t = 0; t < r; t++) e = o[t], i = "string" == typeof o[t], n = "object" == typeof o[t] && o[t] instanceof Array, s = i && o[t].split(":"), i && 2 === s.length ? (a.push(Number(s[0])), l.push(Number(s[1])), h.push(Number(s[1]))) : n ? (a.push(e[0]), l.push(e[1]), h.push(e[1])) : (a.push(t), null === o[t] || "null" === o[t] ? l.push(null) : (l.push(Number(e)), h.push(Number(e))));
                this.options.get("xvalues") && (a = this.options.get("xvalues")), this.maxy = this.maxyorg = D.max.apply(D, h), this.miny = this.minyorg = D.min.apply(D, h), this.maxx = D.max.apply(D, a), this.minx = D.min.apply(D, a), this.xvalues = a, this.yvalues = l, this.yminmax = h
            }, processRangeOptions: function () {
                var t = this.options, e = t.get("normalRangeMin"), i = t.get("normalRangeMax");
                e !== N && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), t.get("chartRangeMin") !== N && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), t.get("chartRangeMax") !== N && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), t.get("chartRangeMinX") !== N && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), t.get("chartRangeMaxX") !== N && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX"))
            }, drawNormalRange: function (t, e, i, n, s) {
                var o = this.options.get("normalRangeMin"), r = this.options.get("normalRangeMax"),
                    a = e + D.round(i - i * ((r - this.miny) / s)), l = D.round(i * (r - o) / s);
                this.target.drawRect(t, a, n, l, N, this.options.get("normalRangeColor")).append()
            }, render: function () {
                var t, e, i, n, s, o, r, a, l, h, d, p, c, u, g, f, m, v, b, x, y, w, C, S, $ = this.options,
                    k = this.target, R = this.canvasWidth, E = this.canvasHeight, T = this.vertices,
                    I = $.get("spotRadius"), H = this.regionMap;
                if (L._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), w = this.xvalues, C = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                    for (n = s = 0, t = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, i = this.yvalues.length - 1, I && (R < 4 * I || E < 4 * I) && (I = 0), I && (((x = $.get("highlightSpotColor") && !$.get("disableInteraction")) || $.get("minSpotColor") || $.get("spotColor") && C[i] === this.miny) && (E -= D.ceil(I)), (x || $.get("maxSpotColor") || $.get("spotColor") && C[i] === this.maxy) && (E -= D.ceil(I), n += D.ceil(I)), (x || ($.get("minSpotColor") || $.get("maxSpotColor")) && (C[0] === this.miny || C[0] === this.maxy)) && (s += D.ceil(I), R -= D.ceil(I)), (x || $.get("spotColor") || $.get("minSpotColor") || $.get("maxSpotColor") && (C[i] === this.miny || C[i] === this.maxy)) && (R -= D.ceil(I))), E--, $.get("normalRangeMin") === N || $.get("drawNormalOnTop") || this.drawNormalRange(s, n, E, R, e), a = [r = []], c = u = null, g = C.length, S = 0; S < g; S++) l = w[S], d = w[S + 1], h = C[S], u = (p = s + D.round((l - this.minx) * (R / t))) + ((S < g - 1 ? s + D.round((d - this.minx) * (R / t)) : R) - p) / 2, H[S] = [c || 0, u, S], c = u, null === h ? S && (null !== C[S - 1] && (r = [], a.push(r)), T.push(null)) : (h < this.miny && (h = this.miny), h > this.maxy && (h = this.maxy), r.length || r.push([p, n + E]), o = [p, n + D.round(E - E * ((h - this.miny) / e))], r.push(o), T.push(o));
                    for (f = [], m = [], v = a.length, S = 0; S < v; S++) (r = a[S]).length && ($.get("fillColor") && (r.push([r[r.length - 1][0], n + E]), m.push(r.slice(0)), r.pop()), 2 < r.length && (r[0] = [r[0][0], r[1][1]]), f.push(r));
                    for (v = m.length, S = 0; S < v; S++) k.drawShape(m[S], $.get("fillColor"), $.get("fillColor")).append();
                    for ($.get("normalRangeMin") !== N && $.get("drawNormalOnTop") && this.drawNormalRange(s, n, E, R, e), v = f.length, S = 0; S < v; S++) k.drawShape(f[S], $.get("lineColor"), N, $.get("lineWidth")).append();
                    if (I && $.get("valueSpots")) for ((b = $.get("valueSpots")).get === N && (b = new z(b)), S = 0; S < g; S++) (y = b.get(C[S])) && k.drawCircle(s + D.round((w[S] - this.minx) * (R / t)), n + D.round(E - E * ((C[S] - this.miny) / e)), I, N, y).append();
                    I && $.get("spotColor") && null !== C[i] && k.drawCircle(s + D.round((w[w.length - 1] - this.minx) * (R / t)), n + D.round(E - E * ((C[i] - this.miny) / e)), I, N, $.get("spotColor")).append(), this.maxy !== this.minyorg && (I && $.get("minSpotColor") && (l = w[_.inArray(this.minyorg, C)], k.drawCircle(s + D.round((l - this.minx) * (R / t)), n + D.round(E - E * ((this.minyorg - this.miny) / e)), I, N, $.get("minSpotColor")).append()), I && $.get("maxSpotColor") && (l = w[_.inArray(this.maxyorg, C)], k.drawCircle(s + D.round((l - this.minx) * (R / t)), n + D.round(E - E * ((this.maxyorg - this.miny) / e)), I, N, $.get("maxSpotColor")).append())), this.lastShapeId = k.getLastShapeId(), this.canvasTop = n, k.render()
                }
            }
        }), _.fn.sparkline.bar = F = e(_.fn.sparkline._base, s, {
            type: "bar", init: function (t, e, i, n, s) {
                var o, r, a, l, h, d, p, c, u, g, f, m, v, b, x, y, w, C, S, $, k, R = parseInt(i.get("barWidth"), 10),
                    E = parseInt(i.get("barSpacing"), 10), T = i.get("chartRangeMin"), I = i.get("chartRangeMax"),
                    H = i.get("chartRangeClip"), L = 1 / 0, M = -1 / 0;
                for (F._super.init.call(this, t, e, i, n, s), d = 0, p = e.length; d < p; d++) ((o = "string" == typeof ($ = e[d]) && -1 < $.indexOf(":")) || _.isArray($)) && (x = !0, o && ($ = e[d] = j($.split(":"))), $ = q($, null), (r = D.min.apply(D, $)) < L && (L = r), M < (a = D.max.apply(D, $)) && (M = a));
                this.stacked = x, this.regionShapes = {}, this.barWidth = R, this.barSpacing = E, this.totalBarWidth = R + E, this.width = n = e.length * R + (e.length - 1) * E, this.initTarget(), H && (v = T === N ? -1 / 0 : T, b = I === N ? 1 / 0 : I), h = [], l = x ? [] : h;
                var A = [], P = [];
                for (d = 0, p = e.length; d < p; d++) if (x) for (y = e[d], e[d] = S = [], A[d] = 0, l[d] = P[d] = 0, w = 0, C = y.length; w < C; w++) null !== ($ = S[w] = H ? O(y[w], v, b) : y[w]) && (0 < $ && (A[d] += $), L < 0 && 0 < M ? $ < 0 ? P[d] += D.abs($) : l[d] += $ : l[d] += D.abs($ - ($ < 0 ? M : L)), h.push($)); else $ = H ? O(e[d], v, b) : e[d], null !== ($ = e[d] = W($)) && h.push($);
                this.max = m = D.max.apply(D, h), this.min = f = D.min.apply(D, h), this.stackMax = M = x ? D.max.apply(D, A) : m, this.stackMin = L = x ? D.min.apply(D, h) : f, i.get("chartRangeMin") !== N && (i.get("chartRangeClip") || i.get("chartRangeMin") < f) && (f = i.get("chartRangeMin")), i.get("chartRangeMax") !== N && (i.get("chartRangeClip") || i.get("chartRangeMax") > m) && (m = i.get("chartRangeMax")), this.zeroAxis = u = i.get("zeroAxis", !0), g = f <= 0 && 0 <= m && u ? 0 : 0 == u ? f : 0 < f ? f : m, this.xaxisOffset = g, c = x ? D.max.apply(D, l) + D.max.apply(D, P) : m - f, this.canvasHeightEf = u && f < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, f < g ? (k = ((x && 0 <= m ? M : m) - g) / c * this.canvasHeight) !== D.ceil(k) && (this.canvasHeightEf -= 2, k = D.ceil(k)) : k = this.canvasHeight, this.yoffset = k, _.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === N && (this.colorMapByValue = new z(this.colorMapByValue))), this.range = c
            }, getRegion: function (t, e, i) {
                var n = D.floor(e / this.totalBarWidth);
                return n < 0 || n >= this.values.length ? N : n
            }, getCurrentRegionFields: function () {
                var t, e, i = this.currentRegion, n = o(this.values[i]), s = [];
                for (e = n.length; e--;) t = n[e], s.push({
                    isNull: null === t,
                    value: t,
                    color: this.calcColor(e, t, i),
                    offset: i
                });
                return s
            }, calcColor: function (t, e, i) {
                var n, s, o = this.colorMapByIndex, r = this.colorMapByValue, a = this.options;
                return n = this.stacked ? a.get("stackedBarColor") : e < 0 ? a.get("negBarColor") : a.get("barColor"), 0 === e && a.get("zeroColor") !== N && (n = a.get("zeroColor")), r && (s = r.get(e)) ? n = s : o && o.length > i && (n = o[i]), _.isArray(n) ? n[t % n.length] : n
            }, renderRegion: function (t, e) {
                var i, n, s, o, r, a, l, h, d, p, c = this.values[t], u = this.options, g = this.xaxisOffset, f = [],
                    m = this.range, v = this.stacked, b = this.target, x = t * this.totalBarWidth,
                    y = this.canvasHeightEf, w = this.yoffset;
                if (l = (c = _.isArray(c) ? c : [c]).length, h = c[0], o = C(null, c), p = C(g, c, !0), o) return u.get("nullColor") ? (s = e ? u.get("nullColor") : this.calcHighlightColor(u.get("nullColor"), u), i = 0 < w ? w - 1 : w, b.drawRect(x, i, this.barWidth - 1, 0, s, s)) : N;
                for (r = w, a = 0; a < l; a++) {
                    if (h = c[a], v && h === g) {
                        if (!p || d) continue;
                        d = !0
                    }
                    n = 0 < m ? D.floor(y * (D.abs(h - g) / m)) + 1 : 1, h < g || h === g && 0 === w ? (i = r, r += n) : (i = w - n, w -= n), s = this.calcColor(a, h, t), e && (s = this.calcHighlightColor(s, u)), f.push(b.drawRect(x, i, this.barWidth - 1, n - 1, s, s))
                }
                return 1 === f.length ? f[0] : f
            }
        }), _.fn.sparkline.tristate = a = e(_.fn.sparkline._base, s, {
            type: "tristate", init: function (t, e, i, n, s) {
                var o = parseInt(i.get("barWidth"), 10), r = parseInt(i.get("barSpacing"), 10);
                a._super.init.call(this, t, e, i, n, s), this.regionShapes = {}, this.barWidth = o, this.barSpacing = r, this.totalBarWidth = o + r, this.values = _.map(e, Number), this.width = n = e.length * o + (e.length - 1) * r, _.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === N && (this.colorMapByValue = new z(this.colorMapByValue))), this.initTarget()
            }, getRegion: function (t, e, i) {
                return D.floor(e / this.totalBarWidth)
            }, getCurrentRegionFields: function () {
                var t = this.currentRegion;
                return {
                    isNull: this.values[t] === N,
                    value: this.values[t],
                    color: this.calcColor(this.values[t], t),
                    offset: t
                }
            }, calcColor: function (t, e) {
                var i, n = this.values, s = this.options, o = this.colorMapByIndex, r = this.colorMapByValue;
                return r && (i = r.get(t)) ? i : o && o.length > e ? o[e] : n[e] < 0 ? s.get("negBarColor") : 0 < n[e] ? s.get("posBarColor") : s.get("zeroBarColor")
            }, renderRegion: function (t, e) {
                var i, n, s, o, r, a, l = this.values, h = this.options, d = this.target;
                if (i = d.pixelHeight, s = D.round(i / 2), o = t * this.totalBarWidth, l[t] < 0 ? n = (r = s) - 1 : 0 < l[t] ? (r = 0, n = s - 1) : (r = s - 1, n = 2), null !== (a = this.calcColor(l[t], t))) return e && (a = this.calcHighlightColor(a, h)), d.drawRect(o, r, this.barWidth - 1, n - 1, a, a)
            }
        }), _.fn.sparkline.discrete = r = e(_.fn.sparkline._base, s, {
            type: "discrete", init: function (t, e, i, n, s) {
                r._super.init.call(this, t, e, i, n, s), this.regionShapes = {}, this.values = e = _.map(e, Number), this.min = D.min.apply(D, e), this.max = D.max.apply(D, e), this.range = this.max - this.min, this.width = n = "auto" === i.get("width") ? 2 * e.length : this.width, this.interval = D.floor(n / e.length), this.itemWidth = n / e.length, i.get("chartRangeMin") !== N && (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) && (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== N && (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) && (this.max = i.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === i.get("lineHeight") ? D.round(.3 * this.canvasHeight) : i.get("lineHeight"))
            }, getRegion: function (t, e, i) {
                return D.floor(e / this.itemWidth)
            }, getCurrentRegionFields: function () {
                var t = this.currentRegion;
                return {isNull: this.values[t] === N, value: this.values[t], offset: t}
            }, renderRegion: function (t, e) {
                var i, n, s, o, r = this.values, a = this.options, l = this.min, h = this.max, d = this.range,
                    p = this.interval, c = this.target, u = this.canvasHeight, g = this.lineHeight, f = u - g;
                return n = O(r[t], l, h), o = t * p, i = D.round(f - f * ((n - l) / d)), s = a.get("thresholdColor") && n < a.get("thresholdValue") ? a.get("thresholdColor") : a.get("lineColor"), e && (s = this.calcHighlightColor(s, a)), c.drawLine(o, i, o, i + g, s)
            }
        }), _.fn.sparkline.bullet = l = e(_.fn.sparkline._base, {
            type: "bullet", init: function (t, e, i, n, s) {
                var o, r, a;
                l._super.init.call(this, t, e, i, n, s), this.values = e = j(e), (a = e.slice())[0] = null === a[0] ? a[2] : a[0], a[1] = null === e[1] ? a[2] : a[1], o = D.min.apply(D, e), r = D.max.apply(D, e), o = i.get("base") === N ? o < 0 ? o : 0 : i.get("base"), this.min = o, this.max = r, this.range = r - o, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = n = "auto" === i.get("width") ? "4.0em" : n, this.target = this.$el.simpledraw(n, s, i.get("composite")), e.length || (this.disabled = !0), this.initTarget()
            }, getRegion: function (t, e, i) {
                var n = this.target.getShapeAt(t, e, i);
                return n !== N && this.shapes[n] !== N ? this.shapes[n] : N
            }, getCurrentRegionFields: function () {
                var t = this.currentRegion;
                return {fieldkey: t.substr(0, 1), value: this.values[t.substr(1)], region: t}
            }, changeHighlight: function (t) {
                var e, i = this.currentRegion, n = this.valueShapes[i];
                switch (delete this.shapes[n], i.substr(0, 1)) {
                    case"r":
                        e = this.renderRange(i.substr(1), t);
                        break;
                    case"p":
                        e = this.renderPerformance(t);
                        break;
                    case"t":
                        e = this.renderTarget(t)
                }
                this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(n, e)
            }, renderRange: function (t, e) {
                var i = this.values[t], n = D.round(this.canvasWidth * ((i - this.min) / this.range)),
                    s = this.options.get("rangeColors")[t - 2];
                return e && (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(0, 0, n - 1, this.canvasHeight - 1, s, s)
            }, renderPerformance: function (t) {
                var e = this.values[1], i = D.round(this.canvasWidth * ((e - this.min) / this.range)),
                    n = this.options.get("performanceColor");
                return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(0, D.round(.3 * this.canvasHeight), i - 1, D.round(.4 * this.canvasHeight) - 1, n, n)
            }, renderTarget: function (t) {
                var e = this.values[0],
                    i = D.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
                    n = D.round(.1 * this.canvasHeight), s = this.canvasHeight - 2 * n,
                    o = this.options.get("targetColor");
                return t && (o = this.calcHighlightColor(o, this.options)), this.target.drawRect(i, n, this.options.get("targetWidth") - 1, s - 1, o, o)
            }, render: function () {
                var t, e, i = this.values.length, n = this.target;
                if (l._super.render.call(this)) {
                    for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
                    null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), n.render()
                }
            }
        }), _.fn.sparkline.pie = h = e(_.fn.sparkline._base, {
            type: "pie", init: function (t, e, i, n, s) {
                var o, r = 0;
                if (h._super.init.call(this, t, e, i, n, s), this.shapes = {}, this.valueShapes = {}, this.values = e = _.map(e, Number), "auto" === i.get("width") && (this.width = this.height), 0 < e.length) for (o = e.length; o--;) r += e[o];
                this.total = r, this.initTarget(), this.radius = D.floor(D.min(this.canvasWidth, this.canvasHeight) / 2)
            }, getRegion: function (t, e, i) {
                var n = this.target.getShapeAt(t, e, i);
                return n !== N && this.shapes[n] !== N ? this.shapes[n] : N
            }, getCurrentRegionFields: function () {
                var t = this.currentRegion;
                return {
                    isNull: this.values[t] === N,
                    value: this.values[t],
                    percent: this.values[t] / this.total * 100,
                    color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length],
                    offset: t
                }
            }, changeHighlight: function (t) {
                var e = this.currentRegion, i = this.renderSlice(e, t), n = this.valueShapes[e];
                delete this.shapes[n], this.target.replaceWithShape(n, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e
            }, renderSlice: function (t, e) {
                var i, n, s, o, r, a = this.target, l = this.options, h = this.radius, d = l.get("borderWidth"),
                    p = l.get("offset"), c = 2 * D.PI, u = this.values, g = this.total,
                    f = p ? 2 * D.PI * (p / 360) : 0;
                for (o = u.length, s = 0; s < o; s++) {
                    if (n = i = f, 0 < g && (n = f + c * (u[s] / g)), t === s) return r = l.get("sliceColors")[s % l.get("sliceColors").length], e && (r = this.calcHighlightColor(r, l)), a.drawPieSlice(h, h, h - d, i, n, N, r);
                    f = n
                }
            }, render: function () {
                var t, e, i = this.target, n = this.values, s = this.options, o = this.radius, r = s.get("borderWidth");
                if (h._super.render.call(this)) {
                    for (r && i.drawCircle(o, o, D.floor(o - r / 2), s.get("borderColor"), N, r).append(), e = n.length; e--;) n[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
                    i.render()
                }
            }
        }), _.fn.sparkline.box = w = e(_.fn.sparkline._base, {
            type: "box", init: function (t, e, i, n, s) {
                w._super.init.call(this, t, e, i, n, s), this.values = _.map(e, Number), this.width = "auto" === i.get("width") ? "4.0em" : n, this.initTarget(), this.values.length || (this.disabled = 1)
            }, getRegion: function () {
                return 1
            }, getCurrentRegionFields: function () {
                var t = [{field: "lq", value: this.quartiles[0]}, {
                    field: "med",
                    value: this.quartiles[1]
                }, {field: "uq", value: this.quartiles[2]}];
                return this.loutlier !== N && t.push({
                    field: "lo",
                    value: this.loutlier
                }), this.routlier !== N && t.push({
                    field: "ro",
                    value: this.routlier
                }), this.lwhisker !== N && t.push({
                    field: "lw",
                    value: this.lwhisker
                }), this.rwhisker !== N && t.push({field: "rw", value: this.rwhisker}), t
            }, render: function () {
                var t, e, i, n, s, o, r, a, l, h, d, p = this.target, c = this.values, u = c.length, g = this.options,
                    f = this.canvasWidth, m = this.canvasHeight,
                    v = g.get("chartRangeMin") === N ? D.min.apply(D, c) : g.get("chartRangeMin"),
                    b = g.get("chartRangeMax") === N ? D.max.apply(D, c) : g.get("chartRangeMax"), x = 0;
                if (w._super.render.call(this)) {
                    if (g.get("raw")) g.get("showOutliers") && 5 < c.length ? (e = c[0], t = c[1], n = c[2], s = c[3], o = c[4], r = c[5], a = c[6]) : (t = c[0], n = c[1], s = c[2], o = c[3], r = c[4]); else if (c.sort(function (t, e) {
                        return t - e
                    }), n = y(c, 1), s = y(c, 2), i = (o = y(c, 3)) - n, g.get("showOutliers")) {
                        for (t = r = N, l = 0; l < u; l++) t === N && c[l] > n - i * g.get("outlierIQR") && (t = c[l]), c[l] < o + i * g.get("outlierIQR") && (r = c[l]);
                        e = c[0], a = c[u - 1]
                    } else t = c[0], r = c[u - 1];
                    this.quartiles = [n, s, o], this.lwhisker = t, this.rwhisker = r, this.loutlier = e, this.routlier = a, d = f / (b - v + 1), g.get("showOutliers") && (x = D.ceil(g.get("spotRadius")), d = (f -= 2 * D.ceil(g.get("spotRadius"))) / (b - v + 1), e < t && p.drawCircle((e - v) * d + x, m / 2, g.get("spotRadius"), g.get("outlierLineColor"), g.get("outlierFillColor")).append(), r < a && p.drawCircle((a - v) * d + x, m / 2, g.get("spotRadius"), g.get("outlierLineColor"), g.get("outlierFillColor")).append()), p.drawRect(D.round((n - v) * d + x), D.round(.1 * m), D.round((o - n) * d), D.round(.8 * m), g.get("boxLineColor"), g.get("boxFillColor")).append(), p.drawLine(D.round((t - v) * d + x), D.round(m / 2), D.round((n - v) * d + x), D.round(m / 2), g.get("lineColor")).append(), p.drawLine(D.round((t - v) * d + x), D.round(m / 4), D.round((t - v) * d + x), D.round(m - m / 4), g.get("whiskerColor")).append(), p.drawLine(D.round((r - v) * d + x), D.round(m / 2), D.round((o - v) * d + x), D.round(m / 2), g.get("lineColor")).append(), p.drawLine(D.round((r - v) * d + x), D.round(m / 4), D.round((r - v) * d + x), D.round(m - m / 4), g.get("whiskerColor")).append(), p.drawLine(D.round((s - v) * d + x), D.round(.1 * m), D.round((s - v) * d + x), D.round(.9 * m), g.get("medianColor")).append(), g.get("target") && (h = D.ceil(g.get("spotRadius")), p.drawLine(D.round((g.get("target") - v) * d + x), D.round(m / 2 - h), D.round((g.get("target") - v) * d + x), D.round(m / 2 + h), g.get("targetColor")).append(), p.drawLine(D.round((g.get("target") - v) * d + x - h), D.round(m / 2), D.round((g.get("target") - v) * d + x + h), D.round(m / 2), g.get("targetColor")).append()), p.render()
                }
            }
        }), u = e({
            init: function (t, e, i, n) {
                this.target = t, this.id = e, this.type = i, this.args = n
            }, append: function () {
                return this.target.appendShape(this), this
            }
        }), g = e({
            _pxregex: /(\d+)(px)?\s*$/i, init: function (t, e, i) {
                t && (this.width = t, this.height = e, this.target = i, this.lastShapeId = null, i[0] && (i = i[0]), _.data(i, "_jqs_vcanvas", this))
            }, drawLine: function (t, e, i, n, s, o) {
                return this.drawShape([[t, e], [i, n]], s, o)
            }, drawShape: function (t, e, i, n) {
                return this._genShape("Shape", [t, e, i, n])
            }, drawCircle: function (t, e, i, n, s, o) {
                return this._genShape("Circle", [t, e, i, n, s, o])
            }, drawPieSlice: function (t, e, i, n, s, o, r) {
                return this._genShape("PieSlice", [t, e, i, n, s, o, r])
            }, drawRect: function (t, e, i, n, s, o) {
                return this._genShape("Rect", [t, e, i, n, s, o])
            }, getElement: function () {
                return this.canvas
            }, getLastShapeId: function () {
                return this.lastShapeId
            }, reset: function () {
                alert("reset not implemented")
            }, _insert: function (t, e) {
                _(e).html(t)
            }, _calculatePixelDims: function (t, e, i) {
                var n;
                n = this._pxregex.exec(e), this.pixelHeight = n ? n[1] : _(i).height(), n = this._pxregex.exec(t), this.pixelWidth = n ? n[1] : _(i).width()
            }, _genShape: function (t, e) {
                var i = S++;
                return e.unshift(i), new u(this, i, t, e)
            }, appendShape: function (t) {
                alert("appendShape not implemented")
            }, replaceWithShape: function (t, e) {
                alert("replaceWithShape not implemented")
            }, insertAfterShape: function (t, e) {
                alert("insertAfterShape not implemented")
            }, removeShapeId: function (t) {
                alert("removeShapeId not implemented")
            }, getShapeAt: function (t, e, i) {
                alert("getShapeAt not implemented")
            }, render: function () {
                alert("render not implemented")
            }
        }), f = e(g, {
            init: function (t, e, i, n) {
                f._super.init.call(this, t, e, i), this.canvas = $.createElement("canvas"), i[0] && (i = i[0]), _.data(i, "_jqs_vcanvas", this), _(this.canvas).css({
                    display: "inline-block",
                    width: t,
                    height: e,
                    verticalAlign: "top"
                }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = n, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = N, _(this.canvas).css({
                    width: this.pixelWidth,
                    height: this.pixelHeight
                })
            }, _getContext: function (t, e, i) {
                var n = this.canvas.getContext("2d");
                return t !== N && (n.strokeStyle = t), n.lineWidth = i === N ? 1 : i, e !== N && (n.fillStyle = e), n
            }, reset: function () {
                this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = N
            }, _drawShape: function (t, e, i, n, s) {
                var o, r, a = this._getContext(i, n, s);
                for (a.beginPath(), a.moveTo(e[0][0] + .5, e[0][1] + .5), o = 1, r = e.length; o < r; o++) a.lineTo(e[o][0] + .5, e[o][1] + .5);
                i !== N && a.stroke(), n !== N && a.fill(), this.targetX !== N && this.targetY !== N && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
            }, _drawCircle: function (t, e, i, n, s, o, r) {
                var a = this._getContext(s, o, r);
                a.beginPath(), a.arc(e, i, n, 0, 2 * D.PI, !1), this.targetX !== N && this.targetY !== N && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), s !== N && a.stroke(), o !== N && a.fill()
            }, _drawPieSlice: function (t, e, i, n, s, o, r, a) {
                var l = this._getContext(r, a);
                l.beginPath(), l.moveTo(e, i), l.arc(e, i, n, s, o, !1), l.lineTo(e, i), l.closePath(), r !== N && l.stroke(), a && l.fill(), this.targetX !== N && this.targetY !== N && l.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
            }, _drawRect: function (t, e, i, n, s, o, r) {
                return this._drawShape(t, [[e, i], [e + n, i], [e + n, i + s], [e, i + s], [e, i]], o, r)
            }, appendShape: function (t) {
                return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id
            }, replaceWithShape: function (t, e) {
                var i, n = this.shapeseq;
                for (this.shapes[e.id] = e, i = n.length; i--;) n[i] == t && (n[i] = e.id);
                delete this.shapes[t]
            }, replaceWithShapes: function (t, e) {
                var i, n, s, o = this.shapeseq, r = {};
                for (n = t.length; n--;) r[t[n]] = !0;
                for (n = o.length; n--;) r[i = o[n]] && (o.splice(n, 1), delete this.shapes[i], s = n);
                for (n = e.length; n--;) o.splice(s, 0, e[n].id), this.shapes[e[n].id] = e[n]
            }, insertAfterShape: function (t, e) {
                var i, n = this.shapeseq;
                for (i = n.length; i--;) if (n[i] === t) return n.splice(i + 1, 0, e.id), void (this.shapes[e.id] = e)
            }, removeShapeId: function (t) {
                var e, i = this.shapeseq;
                for (e = i.length; e--;) if (i[e] === t) {
                    i.splice(e, 1);
                    break
                }
                delete this.shapes[t]
            }, getShapeAt: function (t, e, i) {
                return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId
            }, render: function () {
                var t, e, i = this.shapeseq, n = this.shapes, s = i.length;
                for (this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), e = 0; e < s; e++) this["_draw" + (t = n[i[e]]).type].apply(this, t.args);
                this.interact || (this.shapes = {}, this.shapeseq = [])
            }
        }), m = e(g, {
            init: function (t, e, i) {
                var n;
                m._super.init.call(this, t, e, i), i[0] && (i = i[0]), _.data(i, "_jqs_vcanvas", this), this.canvas = $.createElement("span"), _(this.canvas).css({
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                    width: t,
                    height: e,
                    margin: "0px",
                    padding: "0px",
                    verticalAlign: "top"
                }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, n = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", n), this.group = _(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
            }, _drawShape: function (t, e, i, n, s) {
                var o, r, a, l, h, d, p = [];
                for (d = 0, h = e.length; d < h; d++) p[d] = e[d][0] + "," + e[d][1];
                return o = p.splice(0, 1), s = s === N ? 1 : s, r = i === N ? ' stroked="false" ' : ' strokeWeight="' + s + 'px" strokeColor="' + i + '" ', a = n === N ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ', l = p[0] === p[p.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + r + a + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + o + " l " + p.join(", ") + " " + l + 'e"> </v:shape>'
            }, _drawCircle: function (t, e, i, n, s, o, r) {
                return '<v:oval  id="jqsshape' + t + '" ' + (s === N ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + s + '" ') + (o === N ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ') + ' style="position:absolute;top:' + (i -= n) + "px; left:" + (e -= n) + "px; width:" + 2 * n + "px; height:" + 2 * n + 'px"></v:oval>'
            }, _drawPieSlice: function (t, e, i, n, s, o, r, a) {
                var l, h, d, p, c, u, g;
                if (s === o) return "";
                if (o - s == 2 * D.PI && (s = 0, o = 2 * D.PI), h = e + D.round(D.cos(s) * n), d = i + D.round(D.sin(s) * n), p = e + D.round(D.cos(o) * n), c = i + D.round(D.sin(o) * n), h === p && d === c) {
                    if (o - s < D.PI) return "";
                    h = p = e + n, d = c = i
                }
                return h === p && d === c && o - s < D.PI ? "" : (l = [e - n, i - n, e + n, i + n, h, d, p, c], u = r === N ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + r + '" ', g = a === N ? ' filled="false"' : ' fillColor="' + a + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + u + g + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + l.join(", ") + ' x e"> </v:shape>')
            }, _drawRect: function (t, e, i, n, s, o, r) {
                return this._drawShape(t, [[e, i], [e, i + s], [e + n, i + s], [e + n, i], [e, i]], o, r)
            }, reset: function () {
                this.group.innerHTML = ""
            }, appendShape: function (t) {
                var e = this["_draw" + t.type].apply(this, t.args);
                return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id
            }, replaceWithShape: function (t, e) {
                var i = _("#jqsshape" + t), n = this["_draw" + e.type].apply(this, e.args);
                i[0].outerHTML = n
            }, replaceWithShapes: function (t, e) {
                var i, n = _("#jqsshape" + t[0]), s = "", o = e.length;
                for (i = 0; i < o; i++) s += this["_draw" + e[i].type].apply(this, e[i].args);
                for (n[0].outerHTML = s, i = 1; i < t.length; i++) _("#jqsshape" + t[i]).remove()
            }, insertAfterShape: function (t, e) {
                var i = _("#jqsshape" + t), n = this["_draw" + e.type].apply(this, e.args);
                i[0].insertAdjacentHTML("afterEnd", n)
            }, removeShapeId: function (t) {
                var e = _("#jqsshape" + t);
                this.group.removeChild(e[0])
            }, getShapeAt: function (t, e, i) {
                return t.id.substr(8)
            }, render: function () {
                this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
            }
        })
    }, "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.sparkline && t(jQuery)
}(document, Math), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (o) {
    var r = function (t, e) {
        this.$element = o(t), this.options = o.extend({}, r.DEFAULTS, this.dataOptions(), e), this.init()
    };
    r.DEFAULTS = {
        from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: function (t, e) {
            return t.toFixed(e.decimals)
        }, onUpdate: null, onComplete: null
    }, r.prototype.init = function () {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, r.prototype.dataOptions = function () {
        var t = {
            from: this.$element.data("from"),
            to: this.$element.data("to"),
            speed: this.$element.data("speed"),
            refreshInterval: this.$element.data("refresh-interval"),
            decimals: this.$element.data("decimals")
        }, e = Object.keys(t);
        for (var i in e) {
            var n = e[i];
            void 0 === t[n] && delete t[n]
        }
        return t
    }, r.prototype.update = function () {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, r.prototype.render = function () {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, r.prototype.restart = function () {
        this.stop(), this.init(), this.start()
    }, r.prototype.start = function () {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, r.prototype.stop = function () {
        this.interval && clearInterval(this.interval)
    }, r.prototype.toggle = function () {
        this.interval ? this.stop() : this.start()
    }, o.fn.countTo = function (s) {
        return this.each(function () {
            var t = o(this), e = t.data("countTo"), i = "object" == typeof s ? s : {},
                n = "string" == typeof s ? s : "start";
            (!e || "object" == typeof s) && (e && e.stop(), t.data("countTo", e = new r(this, i))), e[n].call(e)
        })
    }
});