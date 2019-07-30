;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    191: function(e, t, a) {
      "use strict"
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i =
          (a(23),
          a(198),
          function(e) {
            return Object(n.createElement)(
              "button",
              Object.assign({ type: "button" }, e)
            )
          }),
        l = a(195)
      t.default = function() {
        return r.a.createElement(
          l.a,
          null,
          "Here is Thing1: ",
          r.a.createElement(i, null, "I am unstyled.")
        )
      }
    },
    192: function(e, t, a) {
      var n
      e.exports = ((n = a(194)) && n.default) || n
    },
    193: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "tsdx-treeshaking-test" } } },
      }
    },
    194: function(e, t, a) {
      "use strict"
      a.r(t)
      a(23)
      var n = a(0),
        r = a.n(n),
        i = a(96)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? r.a.createElement(
              i.a,
              Object.assign({ location: t, pageResources: a }, a.json)
            )
          : null
      }
    },
    195: function(e, t, a) {
      "use strict"
      var n = a(193),
        r = a(0),
        i = a.n(r),
        l = a(66),
        c = a.n(l)
      a(192), a(9).default.enqueue, i.a.createContext({})
      var u = function(e) {
        var t = e.siteTitle
        return i.a.createElement(
          "header",
          { style: { background: "rebeccapurple", marginBottom: "1.45rem" } },
          i.a.createElement(
            "div",
            {
              style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem",
              },
            },
            i.a.createElement(
              "h1",
              { style: { margin: 0 } },
              i.a.createElement(
                c.a,
                { to: "/", style: { color: "white", textDecoration: "none" } },
                t
              )
            )
          )
        )
      }
      u.defaultProps = { siteTitle: "" }
      var o = u
      a(196),
        (t.a = function(e) {
          var t = e.children,
            a = n.data
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(o, { siteTitle: a.site.siteMetadata.title }),
            i.a.createElement(
              "div",
              {
                style: {
                  margin: "0 auto",
                  maxWidth: 960,
                  padding: "0px 1.0875rem 1.45rem",
                  paddingTop: 0,
                },
              },
              i.a.createElement("main", null, t),
              i.a.createElement(
                "footer",
                null,
                "© ",
                new Date().getFullYear(),
                ", Built with",
                " ",
                i.a.createElement(
                  "a",
                  { href: "https://www.gatsbyjs.org" },
                  "Gatsby"
                )
              )
            )
          )
        })
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-ce72db88e41a54622e2d.js.map
