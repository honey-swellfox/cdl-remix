var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-T2VEIZV3.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-67GN7DZV.css";

// app/components/Footer.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV2("footer", { className: "bg-codgray flex items-center h-[125px]", children: /* @__PURE__ */ jsxDEV2("div", { className: "container mx-auto px-[15px] md:px-0 grid grid-cols-1 lg:grid-cols-2 justify-between", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "lg:col-start-2 lg:col-span-1 lg:row-span-2 mb-[20px] lg:mb-0", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex lg:justify-end h-full", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex justify-between items-center w-[185px] mx-auto lg:mx-0", children: [
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          to: "/courses",
          className: "text-white text-[14px] hover:underline font-light",
          children: "Browse Courses"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 10,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        Link,
        {
          to: "/contact-us",
          className: "text-white text-[14px] hover:underline font-light",
          children: "Contact Us"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 mx-auto lg:mx-0 mb-[25px] lg:mb-0", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: [
      /* @__PURE__ */ jsxDEV2("span", { className: "text-[31px] font-semibold text-white", children: "CDL" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV2("span", { className: "text-[31px] uppercase font-light text-white opacity-70", children: "Online" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { className: "text-[12px] text-white opacity-70 lg:mt-[10px] text-center lg:text-left", children: "Copyright \xA9 2023, CDL Online. All rights reserved." }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/Navbar.tsx
import { Link as Link2, NavLink } from "@remix-run/react";

// app/utils/helpers.tsx
var cssActiveNavLink = (active) => `h-full flex items-center text-black mb-[-2px] ${active ? "opacity-100 border-b-2 border-black" : "opacity-60"}`;

// app/components/Navbar.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Navbar() {
  return /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3("nav", { className: "flex h-[60px] border-b border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV3("div", { className: "container container mx-auto px-15 md:px-0 flex items-center justify-between h-full", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-center items-center h-full", children: [
    /* @__PURE__ */ jsxDEV3(Link2, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV3(
      "img",
      {
        className: "ml-20 lg:ml-0 lg:mr-52 w-[140px] lg:w-auto",
        src: "/img/logo/cdl-logo.svg",
        alt: "CDLOnline logo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "hidden lg:grid grid-flow-col justify-end gap-24 xl:gap-32 h-full items-center", children: [
      /* @__PURE__ */ jsxDEV3(
        NavLink,
        {
          to: "/courses",
          className: ({ isActive }) => cssActiveNavLink(isActive),
          children: "Browse Courses"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 18,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        NavLink,
        {
          to: "contact-us",
          className: ({ isActive }) => cssActiveNavLink(isActive),
          children: "Contact Us"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 25,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        NavLink,
        {
          to: "faq",
          className: ({ isActive }) => cssActiveNavLink(isActive),
          children: "FAQ"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 32,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: fonts_default },
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUs,
  meta: () => meta
});

// app/components/Layout.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV5("main", { className: "main py-[50px] md:pt-[70px] bg-porcelain px-[15px] md:px-0", children }, void 0, !1, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// app/routes/contact-us.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "CDL Online | Contact Us" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function ContactUs() {
  return /* @__PURE__ */ jsxDEV6(Layout, { children: /* @__PURE__ */ jsxDEV6("div", { className: "h-[185px]", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV6("h1", { children: "Contact Us" }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 16,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 14,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

// app/routes/my-courses.tsx
var my_courses_exports = {};
__export(my_courses_exports, {
  default: () => MyCourses
});
function MyCourses() {
  return "This is the student's My Courses page";
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "CDL Online | Homepage" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV7(Layout, { children: /* @__PURE__ */ jsxDEV7("div", { className: "h-[185px]", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV7("h1", { children: "Homepage" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

// app/routes/faq.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => FAQ,
  meta: () => meta3
});
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "CDL Online | FAQ" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function FAQ() {
  return /* @__PURE__ */ jsxDEV8(Layout, { children: /* @__PURE__ */ jsxDEV8("div", { className: "h-[185px]", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV8("h1", { children: "Frequently Asked Questions" }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 16,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 14,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course.tsx
var course_exports = {};
__export(course_exports, {
  default: () => CourseEntry
});
import { Link as Link3, useParams } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function CourseEntry() {
  let params = useParams();
  return /* @__PURE__ */ jsxDEV9(Layout, { children: /* @__PURE__ */ jsxDEV9("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV9(
      Link3,
      {
        className: "text-nevada text-[14px] flex items-center mb-[20px] hover:underline w-120 opacity-60",
        to: "/courses",
        children: [
          /* @__PURE__ */ jsxDEV9(
            "svg",
            {
              width: "8",
              height: "14",
              viewBox: "0 0 8 14",
              className: "fill-current mr-[8px]",
              children: /* @__PURE__ */ jsxDEV9(
                "path",
                {
                  fill: "none",
                  "fill-rule": "evenodd",
                  stroke: "#697077",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.2",
                  d: "M0 0L6 6 12 0",
                  transform: "rotate(90 3 4)"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/courses+/$course.tsx",
                  lineNumber: 27,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/courses+/$course.tsx",
              lineNumber: 22,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9("span", { children: "Browse Courses" }, void 0, !1, {
            fileName: "app/routes/courses+/$course.tsx",
            lineNumber: 37,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/courses+/$course.tsx",
        lineNumber: 19,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9("div", { className: "bg-white p-[50px]", children: /* @__PURE__ */ jsxDEV9("h1", { className: "text-[28px] sm:text-[32px] mb-[25px] text-mineshaft leading-snug", children: params.course }, void 0, !1, {
      fileName: "app/routes/courses+/$course.tsx",
      lineNumber: 40,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/$course.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 18,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course_+/$lesson+/$segment+/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => Segment
});
function Segment() {
  return "This is a SEGMENT entry";
}

// app/routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz.tsx
var quiz_exports = {};
__export(quiz_exports, {
  default: () => Quiz
});
function Quiz() {
  return "This is a QUIZ entry";
}

// app/routes/courses+/$course_+/$lesson+/_index.tsx
var index_exports3 = {};
__export(index_exports3, {
  default: () => Lesson
});
function Lesson() {
  return "This is a LESSON entry";
}

// app/routes/courses+/_index.tsx
var index_exports4 = {};
__export(index_exports4, {
  default: () => CoursesIndex,
  meta: () => meta4
});
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "CDL Online | Courses" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function CoursesIndex() {
  return /* @__PURE__ */ jsxDEV10(Layout, { children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "h-[185px] border-b border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV10("h1", { children: "Image banner" }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 18,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30 py-[50px]", children: /* @__PURE__ */ jsxDEV10("div", { className: "h-[325px] bg-white border border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV10("div", { className: "p-[30px]", children: /* @__PURE__ */ jsxDEV10(Link4, { to: "test-course", className: "hover:underline", children: "Test Course" }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 23,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 21,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/_index.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/overview.$course.tsx
var overview_course_exports = {};
__export(overview_course_exports, {
  default: () => CourseOverview
});
function CourseOverview() {
  return "This is the student's Course Overview page";
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-Z7QHBWQF.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-3GQDUIZH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-TIITO2TX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HX67BD43.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WXPGG5LL.js", imports: ["/build/_shared/chunk-CHUREKDS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-CWHKXEFA.js", imports: ["/build/_shared/chunk-CHUREKDS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course": { id: "routes/courses+/$course", parentId: "root", path: "courses/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course-L7FBOJC4.js", imports: ["/build/_shared/chunk-CHUREKDS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/$segment+/_index": { id: "routes/courses+/$course_+/$lesson+/$segment+/_index", parentId: "root", path: "courses/:course/:lesson/:segment/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/$segment+/_index-4ROOCWRT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz": { id: "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz", parentId: "root", path: "courses/:course/:lesson/:segment/quiz/:quiz", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz-FWINRHR7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/_index": { id: "routes/courses+/$course_+/$lesson+/_index", parentId: "root", path: "courses/:course/:lesson/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/_index-SZYAAUXC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/_index": { id: "routes/courses+/_index", parentId: "root", path: "courses/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/_index-MIXWLMDZ.js", imports: ["/build/_shared/chunk-CHUREKDS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/overview.$course": { id: "routes/courses+/overview.$course", parentId: "root", path: "courses/overview/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/overview.$course-KDVVARUC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/faq": { id: "routes/faq", parentId: "root", path: "faq", index: void 0, caseSensitive: void 0, module: "/build/routes/faq-CAKZ3BAJ.js", imports: ["/build/_shared/chunk-CHUREKDS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-courses": { id: "routes/my-courses", parentId: "root", path: "my-courses", index: void 0, caseSensitive: void 0, module: "/build/routes/my-courses-M5RAMVLF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4e17b6c3", hmr: { runtime: "/build/_shared/chunk-TIITO2TX.js", timestamp: 1700099075608 }, url: "/build/manifest-4E17B6C3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/my-courses": {
    id: "routes/my-courses",
    parentId: "root",
    path: "my-courses",
    index: void 0,
    caseSensitive: void 0,
    module: my_courses_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/courses+/$course": {
    id: "routes/courses+/$course",
    parentId: "root",
    path: "courses/:course",
    index: void 0,
    caseSensitive: void 0,
    module: course_exports
  },
  "routes/courses+/$course_+/$lesson+/$segment+/_index": {
    id: "routes/courses+/$course_+/$lesson+/$segment+/_index",
    parentId: "root",
    path: "courses/:course/:lesson/:segment/",
    index: !0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz": {
    id: "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz",
    parentId: "root",
    path: "courses/:course/:lesson/:segment/quiz/:quiz",
    index: void 0,
    caseSensitive: void 0,
    module: quiz_exports
  },
  "routes/courses+/$course_+/$lesson+/_index": {
    id: "routes/courses+/$course_+/$lesson+/_index",
    parentId: "root",
    path: "courses/:course/:lesson/",
    index: !0,
    caseSensitive: void 0,
    module: index_exports3
  },
  "routes/courses+/_index": {
    id: "routes/courses+/_index",
    parentId: "root",
    path: "courses/",
    index: !0,
    caseSensitive: void 0,
    module: index_exports4
  },
  "routes/courses+/overview.$course": {
    id: "routes/courses+/overview.$course",
    parentId: "root",
    path: "courses/overview/:course",
    index: void 0,
    caseSensitive: void 0,
    module: overview_course_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
