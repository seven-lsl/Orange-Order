
        ~
        function(a) {
            function c(b) {
                function c()

                {
                    return f(b),
                    !1
                }
                function h() {
                    return d(b),
                    !1
                }
                function k(a) {
                    g(a, b)
                }
                var m =

                {
                    url: "",
                    nameDist: {},
                    async: {},
                    errDetail: {},
                    dataSuccessCallback: function() {
                        return !

                        0
                    },
                    dataErrorCallback: function() {
                        return ! 0
                    }
                };
                b = a.extend(m, b),
                b.$form = a(this),
                l = 0,
                a

                ("input", this).on("focus", j),
                a("input.async", this).on("blur",
                function() {
                    var c = a

                    (this),
                    d = c.attr("name"),
                    f = c.val();
                    "" !== f && (l && l--, e(d, b.async[d], !0, b), l++)
                });
                var

                n = a.isEmptyObject(b.async) ? c: h;
                return a(this).validator({
                    method: !

                    1,
                    errorCallback: k,
                    after: n
                }),
                a(this).extend({
                    showErrTip: i
                })
            }
            function d(b) {
                return

                l = 0,
                a.each(b.async,
                function(a, c) {
                    l++,
                    e(a, c, !1, b)
                }),
                !1
            }
            function e(b, c, d, e) {
                var g = a

                ("input[name=" + b + "]", e.$form),
                i = {};
                i[b] = g.val(),
                a.get(c[0], i).success(function(a) {
                    if

                    ("error" === a.status) h.call({
                        error: "async",
                        $el: g,
                        data: a
                    },
                    0, e);
                    else {
                        if (!

                        a.data.success) return h.call({
                            error: "async",
                            $el: g
                        },
                        0, e);
                        l--,
                        0 !== l || d || f(e)
                    }
                })
            }

            function f(b) {
                return k(),
                a.post(b.url, b.$form.serialize()).success(function(a)

                {
                    "ok" === a.status ? b.dataSuccessCallback(a.data) : (k(), h.call

                    (0, a.error, b), b.dataErrorCallback(a.error))
                }).error(function() {
                    k(),
                    alert("网络有问

	题")
                }),
                !1
            }
            function g(b, c) {
                var d = !1;
                a.each(b,
                function(a, b) {
                    d || (d = h.call(b, 0, c))
                })
            }

            function h(b, c) {
                var d, e, f = a.extend({
                    username: "用户名",
                    email: "电子邮箱",
                    password: "密码

	",
                    repeat: "确认密码",
                    captcha: "验证码",
                    mobile: "手机号码",
                    code: "短信验证

	码"
                },
                c.nameDist);
                return b ? (d = c.errDetail[b.code], e = a("input[name=" + d + "]", c.

                $form), i.call(e, b.msg), !0) : (this.error && (d = this.$el.attr

                ("name")), "empty" === this.error ? (i.call(this.$el, "请填写" + f[d]), !

                0) : "unvalid" === this.error ? (c.errDetail[d] ? i.call(this.$el, c.errDetail[d]) : i.call

                (this.$el, "请正确填写" + f[d]), !0) : "async" === this.error ? this.data && this.data.error ?

                i.call(this.$el, this.data.error.msg) : i.call(this.$el, c.async[d][1]) : void 0)
            }
            function

            i(b) {
                var c = a(this).next(".g-error-tip");
                c.text(b).removeClass("hide")
            }
            function j()

            {
                var b = a(this).next(".g-error-tip");
                b.text("").addClass("hide")
            }
            function k() {
                a

                ("#loading_mask").toggleClass("hide")
            }
            var l = 0;
            b.eleValidate = c
        } (jQuery),
        ~
        function(a)

        {
            function c(b) {
                var c =

                {
                    contentClass: "",
                    tabClassActive: "",
                    contentClassActive: ""
                };
                b = a.extend

                (c, b),
                this.addClass(b.tabClassActive).siblings().removeClass(b.tabClassActive);
                var

                d = a(this).attr("href");
                a(d).addClass(b.contentClassActive).siblings

                ("." + b.contentClass).removeClass(b.contentClassActive)
            }
            b.tab = c
        }

        (jQuery),
        a.plugins = b,
        a
    } ()
} (),
function() {
    var a = function() {
        "use strict";
        var a = {},
        b =

        {};
        return~
        function(a) {
            function c() {
                var a = this;
                return a.on("click", d),
                this.extend

                ({
                    refresh: d
                })
            }
            function d(b) {
                b && b.preventDefault();
                var c = a(this),
                d = c.data

                ("action"),
                e = "//" + ELEME.mainHost + "/captcha?action=" + d + "&t=" + (new Date).getTime

                ();
                c.attr("src", e)
            }
            b.captcha = c
        } (jQuery),
        ~
        function(a) {
            function c(b) {
                function c()

                {
                    return f(b),
                    !1
                }
                function h() {
                    return d(b),
                    !1
                }
                function k(a) {
                    g(a, b)
                }
                var m =

                {
                    url: "",
                    nameDist: {},
                    async: {},
                    errDetail: {},
                    dataSuccessCallback: function() {
                        return !

                        0
                    },
                    dataErrorCallback: function() {
                        return ! 0
                    }
                };
                b = a.extend(m, b),
                b.$form = a(this),
                l = 0,
                a

                ("input", this).on("focus", j),
                a("input.async", this).on("blur",
                function() {
                    var c = a

                    (this),
                    d = c.attr("name"),
                    f = c.val();
                    "" !== f && (l && l--, e(d, b.async[d], !0, b), l++)
                });
                var

                n = a.isEmptyObject(b.async) ? c: h;
                return a(this).validator({
                    method: !

                    1,
                    errorCallback: k,
                    after: n
                }),
                a(this).extend({
                    showErrTip: i
                })
            }
            function d(b) {
                return

                l = 0,
                a.each(b.async,
                function(a, c) {
                    l++,
                    e(a, c, !1, b)
                }),
                !1
            }
            function e(b, c, d, e) {
                var g = a

                ("input[name=" + b + "]", e.$form),
                i = {};
                i[b] = g.val(),
                a.get(c[0], i).success(function(a) {
                    if

                    ("error" === a.status) h.call({
                        error: "async",
                        $el: g,
                        data: a
                    },
                    0, e);
                    else {
                        if (!

                        a.data.success) return h.call({
                            error: "async",
                            $el: g
                        },
                        0, e);
                        l--,
                        0 !== l || d || f(e)
                    }
                })
            }

            function f(b) {
                return k(),
                a.post(b.url, b.$form.serialize()).success(function(a)

                {
                    "ok" === a.status ? b.dataSuccessCallback(a.data) : (k(), h.call

                    (0, a.error, b), b.dataErrorCallback(a.error))
                }).error(function() {
                    k(),
                    alert("网络有问

	题")
                }),
                !1
            }
            function g(b, c) {
                var d = !1;
                a.each(b,
                function(a, b) {
                    d || (d = h.call(b, 0, c))
                })
            }

            function h(b, c) {
                var d, e, f = a.extend({
                    username: "用户名",
                    email: "电子邮箱",
                    password: "密码

	",
                    repeat: "确认密码",
                    captcha: "验证码",
                    mobile: "手机号码",
                    code: "短信验证

	码"
                },
                c.nameDist);
                return b ? (d = c.errDetail[b.code], e = a("input[name=" + d + "]", c.

                $form), i.call(e, b.msg), !0) : (this.error && (d = this.$el.attr

                ("name")), "empty" === this.error ? (i.call(this.$el, "请填写" + f[d]), !

                0) : "unvalid" === this.error ? (c.errDetail[d] ? i.call(this.$el, c.errDetail[d]) : i.call

                (this.$el, "请正确填写" + f[d]), !0) : "async" === this.error ? this.data && this.data.error ?

                i.call(this.$el, this.data.error.msg) : i.call(this.$el, c.async[d][1]) : void 0)
            }
            function

            i(b) {
                var c = a(this).next(".g-error-tip");
                c.text(b).removeClass("hide")
            }
            function j()

            {
                var b = a(this).next(".g-error-tip");
                b.text("").addClass("hide")
            }
            function k() {
                a

                ("#loading_mask").toggleClass("hide")
            }
            var l = 0;
            b.eleValidate = c
        } (jQuery),
        ~
        function(a)

        {
            function c(b) {
                var c =

                {
                    contentClass: "",
                    tabClassActive: "",
                    contentClassActive: ""
                };
                b = a.extend

                (c, b),
                this.addClass(b.tabClassActive).siblings().removeClass(b.tabClassActive);
                var

                d = a(this).attr("href");
                a(d).addClass(b.contentClassActive).siblings

                ("." + b.contentClass).removeClass(b.contentClassActive)
            }
            b.tab = c
        }

        (jQuery),
        a.plugins = b,
        a
    } (); !
    function(a) {
        "use strict";
        function b(a) {
            a.redirectURL &&

            (document.location.href = a.redirectURL)
        }
        function c() {
            m.refresh()
        }
        function d()

        {
            $(".panel").addClass("hide"),
            $("#hidetip").removeClass("hide")
        }
        function e(a, b, c, d)

        {
            function e(a) {
                return /^1[3-9]\d{9}$/.test(a)
            }
            return e(c) ? void $.post(a,

            {
                mobile: c,
                type: b
            }).success(function(a) {
                "ok" == a.status && a.data.success ? d(a) : "ok" !

                =a.status || a.data.success ? "error" === a.status && C.text(a.error.msg).removeClass

                ("hide") : C.text("手机号为空或未通过验证").removeClass("hide")
            }).error(function(a)

            {
                alert(a.error.msg)
            }) : void C.text("请正确填写手机号").removeClass("hide")
        }
        function f

        () {
            var a = 60;
            v.addClass("g-btn-disabled").html('已发送(<span class="sms-time">' + a

            + "</span>)");
            var b = v.find(".sms-time");
            A = h(a,
            function(a) {
                b.text(a)
            },
            function()

            {
                v.html("重新发送").removeClass("g-btn-disabled")
            })
        }
        function g() {
            var a = 60;
            w.addClass

            ("g-link-disabled"),
            x.removeClass("hide"),
            y.removeClass("hide"),
            B = h(a,
            function(a)

            {
                x.text(a + "秒")
            },
            function() {
                w.removeClass("g-link-disabled"),
                x.addClass

                ("hide"),
                y.addClass("hide")
            })
        }
        function h(a, b, c) {
            function d() {
                b(f),
                f > 0 ? f--:e()
            }

            function e() {
                clearInterval(g),
                c()
            }
            var f = a;
            if (!a) return void c();
            var g = setInterval

            (d, 1e3);
            return d(),
            {
                stop: e
            }
        }
        function i(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "login-form",
                tabClassActive: "hide",
                contentClassActive: "block"
            })
        }

        function j(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "form",
                tabClassActive: "active",
                contentClassActive: "block"
            })
        }
        function

        k(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "panel",
                tabClassActive: "",
                contentClassActive: "block"
            })
        }
        var

        l = a.plugins;
        $.fn.extend(l); {
            var m = $(".captcha-img").captcha(),
            n = $("#login_form"),
            o =

            $("#login_form_mobile");
            $(".account-checkmode")
        }
        n.eleValidate

        ({
            url: "/login",
            errDetail:

            {
                10 : "password",
                11 : "username",
                12 : "captcha",
                13 : "captcha"
            },
            dataErrorCallback: c,
            dataSucce

            ssCallback: b
        }),
        o.eleValidate({
            url: "/login/mobile",
            errDetail:

            {
                20 : "mobile",
                22 : "code"
            },
            dataSuccessCallback: b
        });
        var p =

        $("#tfauth_form");
        p.eleValidate({
            url: "/tfauth",
            errDetail:

            {
                20 : "mobile",
                22 : "code",
                23 : "code"
            }
        });
        var q = $("#register_form");
        q.eleValidate

        ({
            url: "/register",
            async: {
                username: ["/api/checkUsername", "用户名已被注册过"],
                email:

                ["/api/checkEmail", "邮箱已被注册过"]
            },
            nameDist: {
                repeat: "确认密码"
            },
            errDetail:

            {
                username: "用户名必须在5到16位之间",
                email: "请输入正确的邮箱地址",
                password: "密码长度必

	须在6到20位之间",
                repeat: "两次密码输入不一致",
                captcha: "请输入正确的验证

	码",
                13 : "captcha",
                22 : "repeat",
                23 : "email",
                24 : "username"
            },
            dataErrorCallback: c,
            dataSucces

            sCallback: b
        });
        var r = $("#forget_password_form"),
        s =

        $("#forget_password_mobile_form");
        r.eleValidate({
            url: "/sendEmail",
            errDetail:

            {
                13 : "captcha",
                42 : "email",
                43 : "email",
                44 : "email",
                45 : "email"
            },
            dataErrorCallback: c,
            dataSu

            ccessCallback: d
        }),
        s.eleValidate({
            url: "/resetPasswordByMobile",
            errDetail: {
                password: "密

	码长度必须在6到20位之间",
                repeat: "两次密码输入不一

	致",
                22 : "password",
                45 : "password"
            },
            dataSuccessCallback: b
        });
        var t =

        $("#reset_password_form"),
        u = window.location.pathname.replace

        ("/resetPassword/", "");
        u && $('input[name="token"]').val(u),
        t.eleValidate

        ({
            url: "/resetPassword",
            errDetail: {
                password: "密码长度必须在6到20位之间",
                repeat: "两次密

	码输入不一

	致",
                13 : "captcha",
                22 : "password",
                45 : "password"
            },
            dataErrorCallback: c,
            dataSuccessCallback

            : b
        }); {
            var v = $("#sms_btn"),
            w = $("#voice_btn"),
            x = w.find(".voice-time"),
            y =

            $("#voice_tip_first"),
            z = $("#mobile_input").placeholder();

            $("#verify_code_input").placeholder()
        }
        v.on("click",
        function() {
            if (v.hasClass("g-btn-

	disabled")) return ! 1;
            var a = z.val();
            e("/sendcode", "sms", a,
            function() {
                B && B.stop(),
                f

                ()
            })
        }),
        w.on("click",
        function() {
            if (w.hasClass("g-link-disabled")) return ! 1;
            var a =

            $.trim(z.val());
            e("/sendcode", "voice", a,
            function() {
                A && A.stop(),
                g()
            })
        });
        var A, B, C =

        $('input[name="mobile"]').next(),
        D = $("#login-panel-hd .g-link");
        D.on("click", i);
        var

        E = $(".tab-item");
        E.on("click", j);
        var F = $(".g-link-bind");
        F.on("click", k),

        $("[placeholder]").placeholder()
    } (a)
} (); (b) {
    var c = a.trim(this.$item.attr("min")),
    d = a.trim(this.$item.attr("max")),
    e = /^\-?(?:

[1-9]\d*|0)(?:[.]\d+)?$/.test(b),
    f = +b,
    g = a.trim(this.$item.attr("step"));
    return

    c = "" === c || isNaN(c) ? f - 1 : +c,
    d = "" === d || isNaN(d) ? f + 1 : +d,
    g = "" === g || isNaN(g) ? 0 : +g,
    e &&

    (0 >= g ? f >= c && d >= f: 0 === (f + c) % g && f >= c && d >= f)
},
range: function(a) {
    return this.number

    (a)
},
url: function() {
    var a = "((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\

\/)?",
    b = "([a-z0-9]\\w*(\\:[\\S]+)?\\@)?",
    c = "(?:localhost|(?:[a-z0-9]+(?:[-\\w]*[a-z0

-9])?(?:\\.[a-z0-9][-\\w]*[a-z0-9])*)*\\.[a-z]{2,})",
    d = "(:\\d{1,5})?",
    e = "\\d{1,3}\\.

\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}",
    f = "(\\/\\S*)?",
    g = [a, b, c, d, f],
    h = [a, b, e, d, f],
    i = new

    RegExp("^" + g.join("") + "$", "i"),
    j = new RegExp("^" + h.join("") + "$", "i");
    return function

    (a) {
        return i.test(a) || j.test(a)
    }
} (),
password: function(a) {
    return this.text

    (a)
},
checkbox: function() {
    return b._checker("checkbox")
},
radio: function() {
    return

    b._checker("radio")
},
_checker: function(b) {
    var c = this.$item.parents("form").eq

    (0),
    d = "input[type=" + b + '][name="' + this.$item.attr("name") + '"]',
    e = !1,
    f = a(d, c);
    return

    f.each(function(a, b) {
        return b.checked && !e ? e = !0 : void 0
    }),
    e
},
text: function(b) {
    if

    ((b = a.trim(b)).length) {
        var c, d = parseInt(this.$item.attr("maxlength"), 10),
        e = parseInt

        (this.$item.attr("minlength"), 10);
        return (c = function() {
            var a = !0,
            c = b.length;
            return e &&

            (a = c >= e),
            d && (a = a && d >= c),
            a
        })()
    }
}
},
l = function(b, c, d) {
    var e = b.data

    (),
    f = e.url,
    g = e.method || "get",
    h = e.key || "key",
    i = m(b),
    j = {};
    j[h] = i,
    a[g](f, j).success

    (function(a) {
        var e = a ? "IM VALIDED": "unvalid";
        return o.call(this, b, c, d, e)
    }).error

    (function() {})
},
n = function(b, c, d) {
    var e = "a" === b.data("aorb") ? "b": "a",
    g = a("[data-

aorb=" + e + "]", b.parents("form").eq(0)),
    h = [b, c, d],
    i = [g, c, d],
    j = 0;
    return j += o.apply

    (this, h) ? 0 : 1,
    j += o.apply(this, i) ? 0 : 1,
    j = j > 0 ? (f.apply(this, h), f.apply(this, i), !

    1) : o.apply(this, h.concat("unvalid"))
},
o = function(c, d, g, h) {
    if (!c) return "DONT VALIDATE 

UNEXIST ELEMENT";
    var i, j, k, l, n;
    return i = c.attr("pattern"),
    i && i.replace("\\", "\\\

\"),j=c.attr("type ")||"text ",j=b[j]?j:"text ",k=a.trim(m(c)),n=c.data("event "),h=h?

h:i?new RegExp(i).test(k)||"unvalid ":b[j](k)||"unvalid ","unvalid "===h&&f(c,d,g),/^

(?:unvalid|empty)$/.test(h)?(l={$el:e.call(this,c,d,g,h),type:j,error:h},c.trigger

("after: "+n,c),l):(f.call(this,c,d,g),c.trigger("after: "+n,c),!1)},c=function(b,c)

{return a(b,c)},m=function(a){return a.val()||(a.is(" [contenteditable]")?a.text

():"")},i=function(a,c,d){var e,f,g,h,i,j;return b.$item=a,g=a.attr("type "),h=m

(a),e=a.data("url "),f=a.data("aorb "),j=a.data("event "),i=[a,c,d],j&&a.trigger

("before: "+j,a),/^(?:radio|checkbox)$/.test(g)||f||b.text(h)?f?n.apply(this,i):e?

l.apply(this,i):o.call(this,a,c,d):o.call

(this,a,c,d,h.length?"unvalid ":"empty ")},j=function(b,c,d,e){var f,g=/^radio|

checkbox/;a.each(b,function(b,h){a(h).on(g.test(h.type)||"SELECT "===h.tagName?"change

    blur ":c,function(){var b=a(this);g.test(this.type)&&(b=a("input[type = "+this.type+"]

    [name = "+this.name+"]",b.closest("form "))),b.each(function(){(f=i.call(this,a

(this),d,e))&&p.push(f)})})})},h=function(b,c,d,e){return c&&!j.length?!0:(p=a.map

(b,function(b){var c=i.call(null,a(b),d,e);return c?c:void 0}),j.length?p:!

1)},k=function(b){var c,d;return(c=a.grep(p,function(a){return a.$el=b})[0])?

(d=a.inArray(c,p),p.splice(d,1),p):void 0},d=function(a,b){return a.data("parent ")?

a.closest(a.data("parent ")):b?a.parent():a},e=function(a,b,c,e){return d

(a,c).addClass(b+""+e)},f=function(a,b,c){return k.call(this,a),d(a,c).removeClass

(b+"empty unvalid ")},g=function(a){return a.attr("novalidate ")||a.attr

("novalidate ","true ")},a.fn.validator=function(b){var d=this,e=b||

{},i=e.identifie||" [required]",k=e.error||"error ",l=e.isErrorOnParent||!

1,m=e.method||"blur ",n=e.before||function(){return!0},o=e.after||function(){return!

0},q=e.errorCallback||function(){},r=c(i,d);g(d),m&&j.call(this,r,m,k,l),d.on

("focusin ",i,function(){f.call(this,a(this),"error unvalid empty ",l)}),d.on

("submit ",function(a){return n.call(this,r),h.call(this,r,m,k,l),p.length?

(a.preventDefault(),q.call(this,p)):o.call(this,a,r)})}}(window.jQuery||

window.Zepto),function(a){"
    function "==typeof define&&define.amd?define

(["jquery "],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return 

a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]

=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder ")

&&f.hasClass("placeholder "))if(f.data("placeholder - password ")){if(f=f.hide().nextAll

('input[type="password "]:first').show().attr("id ",f.removeAttr("id ").data

("placeholder - id ")),b===!0)return f[0].value=c;f.focus()}else 

d.value="",f.removeClass("placeholder "),d==e()&&d.select()}function d(){var 

d,e=this,f=a(e),g=this.id;if(""===e.value){if("password "===e.type){if(!f.data

("placeholder - textinput ")){try{d=f.clone().attr({type:"text "})}catch(h){d=a

(" < input > ").attr(a.extend(b(this),{type:"text "}))}d.removeAttr("name ").data

({"placeholder - password ":f,"placeholder - id ":g}).bind("focus.placeholder ",c),f.data

({"placeholder - textinput ":d,"placeholder - id ":g}).before(d)}f=f.removeAttr("id ").hide

().prevAll('input[type="text "]:first').attr("id ",g).show()}f.addClass

("placeholder "),f[0].value=f.attr("placeholder ")}else f.removeClass("placeholder ")}

function e(){try{return document.activeElement}catch(a){}}var f,g,h=" [object

    OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder "in 

document.createElement("input ")&&!h,j="placeholder "in document.createElement

("textarea ")&&!h,k=a.valHooks,l=a.propHooks;i&&j?(g=a.fn.placeholder=function()

{return this},g.input=g.textarea=!0):(g=a.fn.placeholder=function(){var a=this;return 

a.filter((i?"textarea ":": input ")+" [placeholder]").not(".placeholder ").bind

({"focus.placeholder ":c,"blur.placeholder ":d}).data("placeholder - enabled ",!

0).trigger("blur.placeholder "),a},g.input=i,g.textarea=j,f={get:function(b){var c=a

(b),d=c.data("placeholder - password ");return d?d[0].value:c.data("placeholder -

    enabled ")&&c.hasClass("placeholder ")?"":b.value},set:function(b,f){var g=a

(b),h=g.data("placeholder - password ");return h?h[0].value=f:g.data("placeholder -

    enabled ")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass("placeholder ")?c.call(b,!

0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||

(k.textarea=f,l.value=f),a(function(){a(document).delegate

("form ","submit.placeholder ",function(){var b=a(".placeholder ",this).each

(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind

("beforeunload.placeholder ",function(){a(".placeholder ").each(function()

{this.value=""})}))}),function(){!function(){"use strict ";var a={},b=

{};return~function(a){function c(){var a=this;return a.on("click ",d),this.extend

({refresh:d})}function d(b){b&&b.preventDefault();var c=a(this),d=c.data

("action "),e=" //"+ELEME.mainHost+"/captcha?action="+d+"&t="+(new Date).getTime
    (); c.attr("src", e)
}
b.captcha = c
} (jQuery),
~
function(a) {
    function c(b) {
        function c()

        {
            return f(b),
            !1
        }
        function h() {
            return d(b),
            !1
        }
        function k(a) {
            g(a, b)
        }
        var m =

        {
            url: "",
            nameDist: {},
            async: {},
            errDetail: {},
            dataSuccessCallback: function() {
                return !

                0
            },
            dataErrorCallback: function() {
                return ! 0
            }
        };
        b = a.extend(m, b),
        b.$form = a(this),
        l = 0,
        a

        ("input", this).on("focus", j),
        a("input.async", this).on("blur",
        function() {
            var c = a

            (this),
            d = c.attr("name"),
            f = c.val();
            "" !== f && (l && l--, e(d, b.async[d], !0, b), l++)
        });
        var

        n = a.isEmptyObject(b.async) ? c: h;
        return a(this).validator({
            method: !

            1,
            errorCallback: k,
            after: n
        }),
        a(this).extend({
            showErrTip: i
        })
    }
    function d(b) {
        return

        l = 0,
        a.each(b.async,
        function(a, c) {
            l++,
            e(a, c, !1, b)
        }),
        !1
    }
    function e(b, c, d, e) {
        var g = a

        ("input[name=" + b + "]", e.$form),
        i = {};
        i[b] = g.val(),
        a.get(c[0], i).success(function(a) {
            if

            ("error" === a.status) h.call({
                error: "async",
                $el: g,
                data: a
            },
            0, e);
            else {
                if (!

                a.data.success) return h.call({
                    error: "async",
                    $el: g
                },
                0, e);
                l--,
                0 !== l || d || f(e)
            }
        })
    }

    function f(b) {
        return k(),
        a.post(b.url, b.$form.serialize()).success(function(a)

        {
            "ok" === a.status ? b.dataSuccessCallback(a.data) : (k(), h.call

            (0, a.error, b), b.dataErrorCallback(a.error))
        }).error(function() {
            k(),
            alert("网络有问

题")
        }),
        !1
    }
    function g(b, c) {
        var d = !1;
        a.each(b,
        function(a, b) {
            d || (d = h.call(b, 0, c))
        })
    }

    function h(b, c) {
        var d, e, f = a.extend({
            username: "用户名",
            email: "电子邮箱",
            password: "密码

",
            repeat: "确认密码",
            captcha: "验证码",
            mobile: "手机号码",
            code: "短信验证

码"
        },
        c.nameDist);
        return b ? (d = c.errDetail[b.code], e = a("input[name=" + d + "]", c.

        $form), i.call(e, b.msg), !0) : (this.error && (d = this.$el.attr

        ("name")), "empty" === this.error ? (i.call(this.$el, "请填写" + f[d]), !

        0) : "unvalid" === this.error ? (c.errDetail[d] ? i.call(this.$el, c.errDetail[d]) : i.call

        (this.$el, "请正确填写" + f[d]), !0) : "async" === this.error ? this.data && this.data.error ?

        i.call(this.$el, this.data.error.msg) : i.call(this.$el, c.async[d][1]) : void 0)
    }
    function

    i(b) {
        var c = a(this).next(".g-error-tip");
        c.text(b).removeClass("hide")
    }
    function j()

    {
        var b = a(this).next(".g-error-tip");
        b.text("").addClass("hide")
    }
    function k() {
        a

        ("#loading_mask").toggleClass("hide")
    }
    var l = 0;
    b.eleValidate = c
} (jQuery),
~
function(a)

{
    function c(b) {
        var c =

        {
            contentClass: "",
            tabClassActive: "",
            contentClassActive: ""
        };
        b = a.extend

        (c, b),
        this.addClass(b.tabClassActive).siblings().removeClass(b.tabClassActive);
        var

        d = a(this).attr("href");
        a(d).addClass(b.contentClassActive).siblings

        ("." + b.contentClass).removeClass(b.contentClassActive)
    }
    b.tab = c
}

(jQuery),
a.plugins = b,
a
} ()
} (),
function() {
    var a = function() {
        "use strict";
        var a = {},
        b =

        {};
        return~
        function(a) {
            function c() {
                var a = this;
                return a.on("click", d),
                this.extend

                ({
                    refresh: d
                })
            }
            function d(b) {
                b && b.preventDefault();
                var c = a(this),
                d = c.data

                ("action"),
                e = "//" + ELEME.mainHost + "/captcha?action=" + d + "&t=" + (new Date).getTime

                ();
                c.attr("src", e)
            }
            b.captcha = c
        } (jQuery),
        ~
        function(a) {
            function c(b) {
                function c()

                {
                    return f(b),
                    !1
                }
                function h() {
                    return d(b),
                    !1
                }
                function k(a) {
                    g(a, b)
                }
                var m =

                {
                    url: "",
                    nameDist: {},
                    async: {},
                    errDetail: {},
                    dataSuccessCallback: function() {
                        return !

                        0
                    },
                    dataErrorCallback: function() {
                        return ! 0
                    }
                };
                b = a.extend(m, b),
                b.$form = a(this),
                l = 0,
                a

                ("input", this).on("focus", j),
                a("input.async", this).on("blur",
                function() {
                    var c = a

                    (this),
                    d = c.attr("name"),
                    f = c.val();
                    "" !== f && (l && l--, e(d, b.async[d], !0, b), l++)
                });
                var

                n = a.isEmptyObject(b.async) ? c: h;
                return a(this).validator({
                    method: !

                    1,
                    errorCallback: k,
                    after: n
                }),
                a(this).extend({
                    showErrTip: i
                })
            }
            function d(b) {
                return

                l = 0,
                a.each(b.async,
                function(a, c) {
                    l++,
                    e(a, c, !1, b)
                }),
                !1
            }
            function e(b, c, d, e) {
                var g = a

                ("input[name=" + b + "]", e.$form),
                i = {};
                i[b] = g.val(),
                a.get(c[0], i).success(function(a) {
                    if

                    ("error" === a.status) h.call({
                        error: "async",
                        $el: g,
                        data: a
                    },
                    0, e);
                    else {
                        if (!

                        a.data.success) return h.call({
                            error: "async",
                            $el: g
                        },
                        0, e);
                        l--,
                        0 !== l || d || f(e)
                    }
                })
            }

            function f(b) {
                return k(),
                a.post(b.url, b.$form.serialize()).success(function(a)

                {
                    "ok" === a.status ? b.dataSuccessCallback(a.data) : (k(), h.call

                    (0, a.error, b), b.dataErrorCallback(a.error))
                }).error(function() {
                    k(),
                    alert("网络有问

题")
                }),
                !1
            }
            function g(b, c) {
                var d = !1;
                a.each(b,
                function(a, b) {
                    d || (d = h.call(b, 0, c))
                })
            }

            function h(b, c) {
                var d, e, f = a.extend({
                    username: "用户名",
                    email: "电子邮箱",
                    password: "密码

",
                    repeat: "确认密码",
                    captcha: "验证码",
                    mobile: "手机号码",
                    code: "短信验证

码"
                },
                c.nameDist);
                return b ? (d = c.errDetail[b.code], e = a("input[name=" + d + "]", c.

                $form), i.call(e, b.msg), !0) : (this.error && (d = this.$el.attr

                ("name")), "empty" === this.error ? (i.call(this.$el, "请填写" + f[d]), !

                0) : "unvalid" === this.error ? (c.errDetail[d] ? i.call(this.$el, c.errDetail[d]) : i.call

                (this.$el, "请正确填写" + f[d]), !0) : "async" === this.error ? this.data && this.data.error ?

                i.call(this.$el, this.data.error.msg) : i.call(this.$el, c.async[d][1]) : void 0)
            }
            function

            i(b) {
                var c = a(this).next(".g-error-tip");
                c.text(b).removeClass("hide")
            }
            function j()

            {
                var b = a(this).next(".g-error-tip");
                b.text("").addClass("hide")
            }
            function k() {
                a

                ("#loading_mask").toggleClass("hide")
            }
            var l = 0;
            b.eleValidate = c
        } (jQuery),
        ~
        function(a)

        {
            function c(b) {
                var c =

                {
                    contentClass: "",
                    tabClassActive: "",
                    contentClassActive: ""
                };
                b = a.extend

                (c, b),
                this.addClass(b.tabClassActive).siblings().removeClass(b.tabClassActive);
                var

                d = a(this).attr("href");
                a(d).addClass(b.contentClassActive).siblings

                ("." + b.contentClass).removeClass(b.contentClassActive)
            }
            b.tab = c
        }

        (jQuery),
        a.plugins = b,
        a
    } (); !
    function(a) {
        "use strict";
        function b(a) {
            a.redirectURL &&

            (document.location.href = a.redirectURL)
        }
        function c() {
            m.refresh()
        }
        function d()

        {
            $(".panel").addClass("hide"),
            $("#hidetip").removeClass("hide")
        }
        function e(a, b, c, d)

        {
            function e(a) {
                return /^1[3-9]\d{9}$/.test(a)
            }
            return e(c) ? void $.post(a,

            {
                mobile: c,
                type: b
            }).success(function(a) {
                "ok" == a.status && a.data.success ? d(a) : "ok" !

                =a.status || a.data.success ? "error" === a.status && C.text(a.error.msg).removeClass

                ("hide") : C.text("手机号为空或未通过验证").removeClass("hide")
            }).error(function(a)

            {
                alert(a.error.msg)
            }) : void C.text("请正确填写手机号").removeClass("hide")
        }
        function f

        () {
            var a = 60;
            v.addClass("g-btn-disabled").html('已发送(<span class="sms-time">' + a

            + "</span>)");
            var b = v.find(".sms-time");
            A = h(a,
            function(a) {
                b.text(a)
            },
            function()

            {
                v.html("重新发送").removeClass("g-btn-disabled")
            })
        }
        function g() {
            var a = 60;
            w.addClass

            ("g-link-disabled"),
            x.removeClass("hide"),
            y.removeClass("hide"),
            B = h(a,
            function(a)

            {
                x.text(a + "秒")
            },
            function() {
                w.removeClass("g-link-disabled"),
                x.addClass

                ("hide"),
                y.addClass("hide")
            })
        }
        function h(a, b, c) {
            function d() {
                b(f),
                f > 0 ? f--:e()
            }

            function e() {
                clearInterval(g),
                c()
            }
            var f = a;
            if (!a) return void c();
            var g = setInterval

            (d, 1e3);
            return d(),
            {
                stop: e
            }
        }
        function i(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "login-form",
                tabClassActive: "hide",
                contentClassActive: "block"
            })
        }

        function j(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "form",
                tabClassActive: "active",
                contentClassActive: "block"
            })
        }
        function

        k(a) {
            a.preventDefault(),
            $(this).tab

            ({
                contentClass: "panel",
                tabClassActive: "",
                contentClassActive: "block"
            })
        }
        var

        l = a.plugins;
        $.fn.extend(l); {
            var m = $(".captcha-img").captcha(),
            n = $("#login_form"),
            o =

            $("#login_form_mobile");
            $(".account-checkmode")
        }
        n.eleValidate

        ({
            url: "/login",
            errDetail:

            {
                10 : "password",
                11 : "username",
                12 : "captcha",
                13 : "captcha"
            },
            dataErrorCallback: c,
            dataSucce

            ssCallback: b
        }),
        o.eleValidate({
            url: "/login/mobile",
            errDetail:

            {
                20 : "mobile",
                22 : "code"
            },
            dataSuccessCallback: b
        });
        var p =

        $("#tfauth_form");
        p.eleValidate({
            url: "/tfauth",
            errDetail:

            {
                20 : "mobile",
                22 : "code",
                23 : "code"
            }
        });
        var q = $("#register_form");
        q.eleValidate

        ({
            url: "/register",
            async: {
                username: ["/api/checkUsername", "用户名已被注册过"],
                email:

                ["/api/checkEmail", "邮箱已被注册过"]
            },
            nameDist: {
                repeat: "确认密码"
            },
            errDetail:

            {
                username: "用户名必须在5到16位之间",
                email: "请输入正确的邮箱地址",
                password: "密码长度必

须在6到20位之间",
                repeat: "两次密码输入不一致",
                captcha: "请输入正确的验证

码",
                13 : "captcha",
                22 : "repeat",
                23 : "email",
                24 : "username"
            },
            dataErrorCallback: c,
            dataSucces

            sCallback: b
        });
        var r = $("#forget_password_form"),
        s =

        $("#forget_password_mobile_form");
        r.eleValidate({
            url: "/sendEmail",
            errDetail:

            {
                13 : "captcha",
                42 : "email",
                43 : "email",
                44 : "email",
                45 : "email"
            },
            dataErrorCallback: c,
            dataSu

            ccessCallback: d
        }),
        s.eleValidate({
            url: "/resetPasswordByMobile",
            errDetail: {
                password: "密

码长度必须在6到20位之间",
                repeat: "两次密码输入不一

致",
                22 : "password",
                45 : "password"
            },
            dataSuccessCallback: b
        });
        var t =

        $("#reset_password_form"),
        u = window.location.pathname.replace

        ("/resetPassword/", "");
        u && $('input[name="token"]').val(u),
        t.eleValidate

        ({
            url: "/resetPassword",
            errDetail: {
                password: "密码长度必须在6到20位之间",
                repeat: "两次密码输入不一致",
                13 : "captcha",
                22 : "password",
                45 : "password"
            },
            dataErrorCallback: c,
            dataSuccessCallback

            : b
        }); {
            var v = $("#sms_btn"),
            w = $("#voice_btn"),
            x = w.find(".voice-time"),
            y =

            $("#voice_tip_first"),
            z = $("#mobile_input").placeholder();

            $("#verify_code_input").placeholder()
        }
        v.on("click",
        function() {
            if (v.hasClass("g-btn-

disabled")) return ! 1;
            var a = z.val();
            e("/sendcode", "sms", a,
            function() {
                B && B.stop(),
                f

                ()
            })
        }),
        w.on("click",
        function() {
            if (w.hasClass("g-link-disabled")) return ! 1;
            var a =

            $.trim(z.val());
            e("/sendcode", "voice", a,
            function() {
                A && A.stop(),
                g()
            })
        });
        var A, B, C =

        $('input[name="mobile"]').next(),
        D = $("#login-panel-hd .g-link");
        D.on("click", i);
        var

        E = $(".tab-item");
        E.on("click", j);
        var F = $(".g-link-bind");
        F.on("click", k),

        $("[placeholder]").placeholder()
    } (a)
} ();