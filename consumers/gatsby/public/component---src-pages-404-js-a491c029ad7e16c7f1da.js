;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    190: function(e, t, a) {
      "use strict"
      a.r(t)
      var n = a(0),
        r = a.n(n),
        l = a(195)
      t.default = function() {
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement("h1", null, "NOT FOUND"),
          r.a.createElement(
            "p",
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
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
        l = a(96)
      t.default = function(e) {
        var t = e.location,
          a = e.pageResources
        return a
          ? r.a.createElement(
              l.a,
              Object.assign({ location: t, pageResources: a }, a.json)
            )
          : null
      }
    },
    195: function(e, t, a) {
      "use strict"
      var n = a(193),
        r = a(0),
        l = a.n(r),
        i = a(66),
        s = a.n(i)
      a(192), a(9).default.enqueue, l.a.createContext({})
      var o = function(e) {
        var t = e.siteTitle
        return l.a.createElement(
          "header",
          { style: { background: "rebeccapurple", marginBottom: "1.45rem" } },
          l.a.createElement(
            "div",
            {
              style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem",
              },
            },
            l.a.createElement(
              "h1",
              { style: { margin: 0 } },
              l.a.createElement(
                s.a,
                { to: "/", style: { color: "white", textDecoration: "none" } },
                t
              )
            )
          )
        )
      }
      o.defaultProps = { siteTitle: "" }
      var u = o
      a(196),
        (t.a = function(e) {
          var t = e.children,
            a = n.data
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(u, { siteTitle: a.site.siteMetadata.title }),
            l.a.createElement(
              "div",
              {
                style: {
                  margin: "0 auto",
                  maxWidth: 960,
                  padding: "0px 1.0875rem 1.45rem",
                  paddingTop: 0,
                },
              },
              l.a.createElement("main", null, t),
              l.a.createElement(
                "footer",
                null,
                "© ",
                new Date().getFullYear(),
                ", Built with",
                " ",
                l.a.createElement(
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
//# sourceMappingURL=component---src-pages-404-js-a491c029ad7e16c7f1da.js.map
