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
          columnNumber: 4
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
          columnNumber: 4
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
var tailwind_default = "/build/_assets/tailwind-PHWWWRWC.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-67GN7DZV.css";

// app/components/footer.tsx
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
          fileName: "app/components/footer.tsx",
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
          fileName: "app/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 8,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { className: "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 mx-auto lg:mx-0 mb-[25px] lg:mb-0", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: [
      /* @__PURE__ */ jsxDEV2("span", { className: "text-[31px] font-semibold text-white", children: "CDL" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV2("span", { className: "text-[31px] uppercase font-light text-white opacity-70", children: "Online" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 24,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { className: "text-[12px] text-white opacity-70 lg:mt-[10px] text-center lg:text-left", children: "Copyright \xA9 2023, CDL Online. All rights reserved." }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/navbar.tsx
import { Link as Link2, NavLink } from "@remix-run/react";

// app/utils/helpers.tsx
var cssActiveNavLink = (active) => `h-full flex items-center text-black mb-[-2px] ${active ? "opacity-100 border-b-2 border-black" : "opacity-60"}`;

// app/components/navbar.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Navbar() {
  return /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3("nav", { className: "flex h-[60px] border-b border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV3("div", { className: "container container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-center items-center h-full", children: [
    /* @__PURE__ */ jsxDEV3(Link2, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV3(
      "img",
      {
        className: "ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto",
        src: "/img/logo/cdl-logo.svg",
        alt: "CDLOnline logo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navbar.tsx",
        lineNumber: 11,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center", children: [
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
          fileName: "app/components/navbar.tsx",
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
          fileName: "app/components/navbar.tsx",
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
          fileName: "app/components/navbar.tsx",
          lineNumber: 32,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        NavLink,
        {
          to: "my-account",
          className: ({ isActive }) => cssActiveNavLink(isActive),
          children: "My Account"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 39,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 9,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 7,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/components/progress-bar.tsx
import { useNavigation as useNavigation2 } from "@remix-run/react";
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { useSpinDelay as useSpinDelay2 } from "spin-delay";

// app/utils/misc.tsx
import { useFormAction, useNavigation } from "@remix-run/react";
import { clsx } from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpinDelay } from "spin-delay";
import { extendTailwindMerge } from "tailwind-merge";

// app/utils/extended-theme.ts
var extendedTheme = {
  colors: {
    porcelain: {
      DEFAULT: "#f4f4f4"
    },
    mineshaft: {
      DEFAULT: "#393939"
    },
    codgray: {
      DEFAULT: "#161616"
    }
  },
  boxShadow: {
    "2xl": "0 0 50px 0 rgba(0, 0, 0, 0.1)"
  },
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" }
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out"
  }
};

// app/utils/misc.tsx
function formatColors() {
  let colors = [];
  for (let [key, color] of Object.entries(extendedTheme.colors))
    if (typeof color == "string")
      colors.push(key);
    else {
      let colorGroup = Object.keys(color).map(
        (subKey) => subKey === "DEFAULT" ? "" : subKey
      );
      colors.push({ [key]: colorGroup });
    }
  return colors;
}
var customTwMerge = extendTailwindMerge({
  theme: {
    colors: formatColors()
  },
  classGroups: {
    animate: [
      {
        animate: Object.keys(extendedTheme.animation)
      }
    ]
  }
});
function cn(...inputs) {
  return customTwMerge(clsx(inputs));
}

// app/components/ui/icons/sprite.svg
var sprite_default = "/build/_assets/sprite-SZTQFBWO.svg";

// app/components/ui/icon.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var sizeClassName = {
  font: "w-[1em] h-[1em]",
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7"
}, childrenSizeClassName = {
  font: "gap-1.5",
  xs: "gap-1.5",
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2",
  xl: "gap-3"
};
function Icon({
  name,
  size = "font",
  className,
  children,
  ...props
}) {
  return children ? /* @__PURE__ */ jsxDEV4(
    "span",
    {
      className: `inline-flex items-center ${childrenSizeClassName[size]}`,
      children: [
        /* @__PURE__ */ jsxDEV4(
          Icon,
          {
            name,
            size,
            className,
            ...props
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/icon.tsx",
            lineNumber: 51,
            columnNumber: 5
          },
          this
        ),
        children
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/icon.tsx",
      lineNumber: 49,
      columnNumber: 4
    },
    this
  ) : /* @__PURE__ */ jsxDEV4(
    "svg",
    {
      ...props,
      className: cn(
        sizeClassName[size],
        "inline self-center",
        className
      ),
      children: /* @__PURE__ */ jsxDEV4("use", { href: `${sprite_default}#${name}` }, void 0, !1, {
        fileName: "app/components/ui/icon.tsx",
        lineNumber: 69,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icon.tsx",
      lineNumber: 62,
      columnNumber: 3
    },
    this
  );
}

// app/components/progress-bar.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function EpicProgress() {
  let transition = useNavigation2(), busy = transition.state !== "idle", delayedPending = useSpinDelay2(busy, {
    delay: 600,
    minDuration: 400
  }), ref = useRef2(null), [animationComplete, setAnimationComplete] = useState2(!0);
  return useEffect2(() => {
    if (!ref.current)
      return;
    delayedPending && setAnimationComplete(!1);
    let animationPromises = ref.current.getAnimations().map(({ finished }) => finished);
    Promise.allSettled(animationPromises).then(() => {
      delayedPending || setAnimationComplete(!0);
    });
  }, [delayedPending]), /* @__PURE__ */ jsxDEV5(
    "div",
    {
      role: "progressbar",
      "aria-hidden": delayedPending ? void 0 : !0,
      "aria-valuetext": delayedPending ? "Loading" : void 0,
      className: "fixed inset-x-0 left-0 top-0 z-50 h-[0.20rem] animate-pulse",
      children: [
        /* @__PURE__ */ jsxDEV5(
          "div",
          {
            ref,
            className: cn(
              "h-full w-0 bg-foreground duration-500 ease-in-out",
              transition.state === "idle" && (animationComplete ? "transition-none" : "w-full opacity-0 transition-all"),
              delayedPending && transition.state === "submitting" && "w-5/12",
              delayedPending && transition.state === "loading" && "w-8/12"
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/progress-bar.tsx",
            lineNumber: 36,
            columnNumber: 4
          },
          this
        ),
        delayedPending && /* @__PURE__ */ jsxDEV5("div", { className: "absolute flex items-center justify-center", children: /* @__PURE__ */ jsxDEV5(
          Icon,
          {
            name: "update",
            size: "md",
            className: "m-1 animate-spin text-foreground",
            "aria-hidden": !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/progress-bar.tsx",
            lineNumber: 52,
            columnNumber: 6
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/progress-bar.tsx",
          lineNumber: 51,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/progress-bar.tsx",
      lineNumber: 31,
      columnNumber: 3
    },
    this
  );
}

// app/root.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: fonts_default },
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV6("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV6("head", { children: [
      /* @__PURE__ */ jsxDEV6("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 29,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV6("body", { children: [
      /* @__PURE__ */ jsxDEV6(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(EpicProgress, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV6(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/container.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Container({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxDEV7("div", { className: `container mx-auto px-15 md:px-0 ${className}`, children }, void 0, !1, {
    fileName: "app/components/container.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/components/layout.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV8("main", { className: "main py-[50px] md:pt-[70px] bg-porcelain px-[15px] md:px-0", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "CDL Online | Homepage" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV9(Layout, { children: /* @__PURE__ */ jsxDEV9(Container, { children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV9("h1", { children: "Homepage" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUs,
  meta: () => meta2
});
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "CDL Online | Contact Us" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function ContactUs() {
  return /* @__PURE__ */ jsxDEV10(Layout, { children: /* @__PURE__ */ jsxDEV10(Container, { children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV10("h1", { children: "Contact Us" }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course.tsx
var course_exports = {};
__export(course_exports, {
  default: () => CourseEntry,
  loader: () => loader,
  meta: () => meta3
});
import { Link as Link3, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// app/utils/graphql.server.ts
var fetchFromGraphQL = async (query, variables) => {
  if (!process.env.GRAPHQL_API_URL)
    throw new Error("GRAPHQL_API_URL is required");
  let body = { query };
  return variables && (body.variables = variables), fetch(process.env.GRAPHQL_API_URL, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
    },
    method: "POST"
  });
}, gql = String.raw;

// app/utils/graphql.queries.ts
var COURSE_BY_SLUG_QUERY = gql`
	query CourseBySlug($slug: [String]) {
		entry(slug: $slug, section: "courses") {
			id
			slug
			title
			... on courses_course_Entry {
				price
				description
				accessDays
				url
				courseThumbnail {
					id
					url
					... on courses_Asset {
						altText
					}
				}
			}
		}
	}
`, ALL_COURSES_QUERY = gql`
	query AllCourses {
		entries(section: "courses") {
			id
			slug
			title
			... on courses_course_Entry {
				price
				description
				accessDays
				url
				courseThumbnail {
					id
					url
					... on courses_Asset {
						altText
					}
				}
			}
		}
	}
`;

// app/components/course-card-details.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function CourseCardDetails({
  title,
  description,
  courseThumbnail,
  accessDays
}) {
  let thumbnail = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.url : "/img/road.jpg", thumbnailAltText = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.altText : title;
  return /* @__PURE__ */ jsxDEV11("div", { className: "card details shadow-2xl grid mb-[25px] min-h-[445px]", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[512px]", children: /* @__PURE__ */ jsxDEV11(
      "img",
      {
        src: thumbnail,
        alt: thumbnailAltText,
        className: "object-center absolute top-0 left-0 w-full h-full object-cover z-0"
      },
      void 0,
      !1,
      {
        fileName: "app/components/course-card-details.tsx",
        lineNumber: 27,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/course-card-details.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "px-[15px] sm:px-[30px] lg:px-[50px] py-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV11("h1", { className: "text-[28px] sm:text-[32px] mb-[25px] text-mineshaft leading-snug", children: title }, void 0, !1, {
        fileName: "app/components/course-card-details.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-col justify-between min-h-[128px]", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center mb-[14px]", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "text-[#0f62fe] font-semibold text-[16px]", children: "$150" }, void 0, !1, {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]", children: accessDays ? accessDays + "-day access" : "Unlimited access" }, void 0, !1, {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 38,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "mb-[25px]", children: /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV11("div", { className: "text-[#697077] text-[11px] xs:text-[12px] flex items-center mr-[13px]", children: [
          /* @__PURE__ */ jsxDEV11(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "10",
              height: "12",
              viewBox: "0 0 10 12",
              className: "fill-current",
              children: /* @__PURE__ */ jsxDEV11(
                "g",
                {
                  fillRule: "evenodd",
                  transform: "translate(0 -2)",
                  children: /* @__PURE__ */ jsxDEV11(
                    "path",
                    {
                      fillRule: "nonzero",
                      d: "M1.5 2C.678 2 0 2.678 0 3.5v9c0 .822.678 1.5 1.5 1.5H10V2H1.5zm0 1H9v8H1.5c-.176 0-.342.037-.5.094V3.5c0-.283.217-.5.5-.5zm1 1.5v1H8v-1H2.5zm-1 7.5H9v1H1.5c-.283 0-.5-.217-.5-.5 0-.283.217-.5.5-.5z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/course-card-details.tsx",
                      lineNumber: 60,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/course-card-details.tsx",
                  lineNumber: 57,
                  columnNumber: 10
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/course-card-details.tsx",
              lineNumber: 51,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV11("span", { className: "ml-[7px]", children: "13 lessons (9hrs)" }, void 0, !1, {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 50,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 48,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV11(
          "div",
          {
            className: "text-[14px] text-mineshaft mb-[30px]",
            dangerouslySetInnerHTML: {
              __html: description
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 71,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV11("button", { className: "bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300", children: "Purchase Course" }, void 0, !1, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 77,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/course-card-details.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/course-card-details.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/course-card-details.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta3 = ({ data }) => [
  { title: `CDL Online | ${data && data.data.entry ? data.data.entry.title : "Browse Course"}` },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader = async ({ params }) => {
  let res = await fetchFromGraphQL(COURSE_BY_SLUG_QUERY, {
    slug: params.course
  });
  return json(await res.json());
};
function CourseEntry() {
  let { data } = useLoaderData();
  return /* @__PURE__ */ jsxDEV12(Layout, { children: /* @__PURE__ */ jsxDEV12(Container, { children: [
    /* @__PURE__ */ jsxDEV12(
      Link3,
      {
        className: "text-nevada text-[14px] flex items-center mb-[20px] hover:underline w-120 opacity-60",
        to: "/courses",
        children: [
          /* @__PURE__ */ jsxDEV12(
            "svg",
            {
              width: "8",
              height: "14",
              viewBox: "0 0 8 14",
              className: "fill-current mr-[8px]",
              children: /* @__PURE__ */ jsxDEV12(
                "path",
                {
                  fill: "none",
                  fillRule: "evenodd",
                  stroke: "#697077",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.2",
                  d: "M0 0L6 6 12 0",
                  transform: "rotate(90 3 4)"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/courses+/$course.tsx",
                  lineNumber: 42,
                  columnNumber: 7
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/courses+/$course.tsx",
              lineNumber: 37,
              columnNumber: 6
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("span", { children: "Browse Courses" }, void 0, !1, {
            fileName: "app/routes/courses+/$course.tsx",
            lineNumber: 52,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/courses+/$course.tsx",
        lineNumber: 34,
        columnNumber: 5
      },
      this
    ),
    data && data.entry ? /* @__PURE__ */ jsxDEV12(CourseCardDetails, { ...data.entry }, void 0, !1, {
      fileName: "app/routes/courses+/$course.tsx",
      lineNumber: 56,
      columnNumber: 6
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 33,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 32,
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
  loader: () => loader2,
  meta: () => meta4
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/course-card.tsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function CourseCard({
  slug,
  title,
  description,
  courseThumbnail,
  accessDays
}) {
  let thumbnail = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.url : "/img/road.jpg", thumbnailAltText = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.altText : title;
  return /* @__PURE__ */ jsxDEV13("div", { className: "h-[325px] bg-white mb-[30px] shadow-2xl grid", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px]", children: /* @__PURE__ */ jsxDEV13(
      "img",
      {
        src: thumbnail,
        alt: thumbnailAltText,
        className: "object-center absolute top-0 left-0 w-full h-full object-cover z-0"
      },
      void 0,
      !1,
      {
        fileName: "app/components/course-card.tsx",
        lineNumber: 30,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/course-card.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV13(
        Link4,
        {
          className: "text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]",
          to: slug || "",
          children: title
        },
        void 0,
        !1,
        {
          fileName: "app/components/course-card.tsx",
          lineNumber: 37,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col justify-between min-h-[128px]", children: [
        /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center mb-[13px]", children: [
          /* @__PURE__ */ jsxDEV13("p", { className: "text-[#0f62fe] font-semibold text-[16px]", children: "$65" }, void 0, !1, {
            fileName: "app/components/course-card.tsx",
            lineNumber: 44,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { className: "text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]", children: accessDays ? accessDays + "-day access" : "Unlimited access" }, void 0, !1, {
            fileName: "app/components/course-card.tsx",
            lineNumber: 47,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/course-card.tsx",
          lineNumber: 43,
          columnNumber: 6
        }, this),
        description ? /* @__PURE__ */ jsxDEV13(
          "div",
          {
            className: "text-[14px] text-mineshaft mb-[30px]",
            dangerouslySetInnerHTML: {
              __html: description
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/course-card.tsx",
            lineNumber: 56,
            columnNumber: 7
          },
          this
        ) : "",
        /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV13("button", { className: "bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300", children: "Purchase Course" }, void 0, !1, {
            fileName: "app/components/course-card.tsx",
            lineNumber: 64,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV13(
            Link4,
            {
              className: "text-[#0f62fe] inline-block text-[14px] hover:underline",
              to: slug || "",
              children: "Course Details"
            },
            void 0,
            !1,
            {
              fileName: "app/components/course-card.tsx",
              lineNumber: 67,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/course-card.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/course-card.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/course-card.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/course-card.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/_index.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "CDL Online | Courses" },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader2 = async () => {
  let res = await fetchFromGraphQL(ALL_COURSES_QUERY);
  return json2(await res.json());
};
function CoursesIndex() {
  let { data } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV14(Layout, { children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "h-[185px] border-b border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV14("h1", { children: "Image banner" }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 32,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30 py-[50px]", children: data && data.entries ? data.entries.map(
      (entry2) => /* @__PURE__ */ jsxDEV14(
        CourseCard,
        {
          ...entry2
        },
        `course-${entry2.id}`,
        !1,
        {
          fileName: "app/routes/courses+/_index.tsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      )
    ) : "" }, void 0, !1, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/_index.tsx",
    lineNumber: 29,
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

// app/routes/faq.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => FAQ,
  meta: () => meta5
});
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "CDL Online | FAQ" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function FAQ() {
  return /* @__PURE__ */ jsxDEV15(Layout, { children: /* @__PURE__ */ jsxDEV15(Container, { children: /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV15("h1", { children: "Frequently Asked Questions" }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/my-account.tsx
var my_account_exports = {};
__export(my_account_exports, {
  default: () => MyAccount
});
import { NavLink as NavLink2, Outlet as Outlet2, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var cssActiveLink = (active) => `text-[16px] text-[#161616] text-left py-[18px] relative flex items-center ${active ? "border-b-2 border-[#0F62FE] mb-[-2px] font-medium" : ""}`;
function MyAccount() {
  let { pathname } = useLocation();
  return /* @__PURE__ */ jsxDEV16(Layout, { children: /* @__PURE__ */ jsxDEV16(Container, { children: [
    /* @__PURE__ */ jsxDEV16("h1", { className: "text-[32px] text-mineshaft text-left font-medium mb-[15px]", children: "My Account" }, void 0, !1, {
      fileName: "app/routes/my-account.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex gap-[10px] md:gap-[40px] border-b-2 border-alto", children: [
      /* @__PURE__ */ jsxDEV16(
        NavLink2,
        {
          to: "edit",
          className: ({ isActive }) => cssActiveLink(isActive || pathname == "/my-account"),
          children: "Edit Account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/my-account.tsx",
          lineNumber: 25,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        NavLink2,
        {
          to: "password",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/my-account.tsx",
          lineNumber: 32,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        NavLink2,
        {
          to: "certifications",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Certifications"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/my-account.tsx",
          lineNumber: 37,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        NavLink2,
        {
          to: "invoices",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Invoices"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/my-account.tsx",
          lineNumber: 42,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/my-account.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "py-[50px]", children: /* @__PURE__ */ jsxDEV16(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/my-account.tsx",
      lineNumber: 49,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/my-account.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/my-account.tsx",
    lineNumber: 20,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/my-account.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/routes/my-account+/_index.tsx
var index_exports5 = {};
__export(index_exports5, {
  default: () => EditProfileRoute
});
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function EditProfileRoute() {
  return /* @__PURE__ */ jsxDEV17("h2", { className: "text-[24px]", children: "Edit Account" }, void 0, !1, {
    fileName: "app/routes/my-account+/_index.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/my-account+/certifications.tsx
var certifications_exports = {};
__export(certifications_exports, {
  default: () => CertificationsRoute
});
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function CertificationsRoute() {
  return /* @__PURE__ */ jsxDEV18("h2", { className: "text-[24px]", children: "Certifications" }, void 0, !1, {
    fileName: "app/routes/my-account+/certifications.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/my-account+/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  default: () => EditProfileRoute2
});
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function EditProfileRoute2() {
  return /* @__PURE__ */ jsxDEV19("h2", { className: "text-[24px]", children: "Edit Account" }, void 0, !1, {
    fileName: "app/routes/my-account+/edit.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/my-account+/invoices.tsx
var invoices_exports = {};
__export(invoices_exports, {
  default: () => InvoicesRoute
});
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function InvoicesRoute() {
  return /* @__PURE__ */ jsxDEV20("h2", { className: "text-[24px]", children: "Invoices" }, void 0, !1, {
    fileName: "app/routes/my-account+/invoices.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/my-account+/password.tsx
var password_exports = {};
__export(password_exports, {
  default: () => EditPasswordRoute
});
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function EditPasswordRoute() {
  return /* @__PURE__ */ jsxDEV21("h2", { className: "text-[24px]", children: "Password" }, void 0, !1, {
    fileName: "app/routes/my-account+/password.tsx",
    lineNumber: 2,
    columnNumber: 9
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

// app/routes/resources+/certificate.tsx
var certificate_exports = {};
__export(certificate_exports, {
  loader: () => loader3
});
async function loader3() {
  return new Response(
    "Resource routes are for actions you made with the server (ex. downloading user certificates.)"
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-W2N5SVSQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-3GQDUIZH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-TIITO2TX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BVXACMWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6GAOHSOZ.js", imports: ["/build/_shared/chunk-GNZTPR4O.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-MMJ4NMD5.js", imports: ["/build/_shared/chunk-GNZTPR4O.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course": { id: "routes/courses+/$course", parentId: "root", path: "courses/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course-XCGDYPYW.js", imports: ["/build/_shared/chunk-STRMHCW7.js", "/build/_shared/chunk-GNZTPR4O.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/$segment+/_index": { id: "routes/courses+/$course_+/$lesson+/$segment+/_index", parentId: "root", path: "courses/:course/:lesson/:segment/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/$segment+/_index-4ROOCWRT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz": { id: "routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz", parentId: "root", path: "courses/:course/:lesson/:segment/quiz/:quiz", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/$segment+/quiz+/$quiz-FWINRHR7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson+/_index": { id: "routes/courses+/$course_+/$lesson+/_index", parentId: "root", path: "courses/:course/:lesson/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson+/_index-SZYAAUXC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/_index": { id: "routes/courses+/_index", parentId: "root", path: "courses/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/_index-2GN337NA.js", imports: ["/build/_shared/chunk-STRMHCW7.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/overview.$course": { id: "routes/courses+/overview.$course", parentId: "root", path: "courses/overview/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/overview.$course-KDVVARUC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/faq": { id: "routes/faq", parentId: "root", path: "faq", index: void 0, caseSensitive: void 0, module: "/build/routes/faq-2KY3RWIY.js", imports: ["/build/_shared/chunk-GNZTPR4O.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account+/_index": { id: "routes/my-account+/_index", parentId: "routes/my-account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/my-account+/_index-L4I7K3AW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account+/certifications": { id: "routes/my-account+/certifications", parentId: "routes/my-account", path: "certifications", index: void 0, caseSensitive: void 0, module: "/build/routes/my-account+/certifications-PDQ64P44.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account+/edit": { id: "routes/my-account+/edit", parentId: "routes/my-account", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/my-account+/edit-JU5UMU7R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account+/invoices": { id: "routes/my-account+/invoices", parentId: "routes/my-account", path: "invoices", index: void 0, caseSensitive: void 0, module: "/build/routes/my-account+/invoices-FWHNA4EV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account+/password": { id: "routes/my-account+/password", parentId: "routes/my-account", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/my-account+/password-S4DSW6E4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-account": { id: "routes/my-account", parentId: "root", path: "my-account", index: void 0, caseSensitive: void 0, module: "/build/routes/my-account-X5A2HQJ6.js", imports: ["/build/_shared/chunk-GNZTPR4O.js", "/build/_shared/chunk-ACXDEAB2.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/my-courses": { id: "routes/my-courses", parentId: "root", path: "my-courses", index: void 0, caseSensitive: void 0, module: "/build/routes/my-courses-M5RAMVLF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/resources+/certificate": { id: "routes/resources+/certificate", parentId: "root", path: "resources/certificate", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/certificate-WNPKOTGO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "f6df4ec0", hmr: { runtime: "/build/_shared/chunk-TIITO2TX.js", timestamp: 1700215381825 }, url: "/build/manifest-F6DF4EC0.js" };

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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
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
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/my-account": {
    id: "routes/my-account",
    parentId: "root",
    path: "my-account",
    index: void 0,
    caseSensitive: void 0,
    module: my_account_exports
  },
  "routes/my-account+/_index": {
    id: "routes/my-account+/_index",
    parentId: "routes/my-account",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports5
  },
  "routes/my-account+/certifications": {
    id: "routes/my-account+/certifications",
    parentId: "routes/my-account",
    path: "certifications",
    index: void 0,
    caseSensitive: void 0,
    module: certifications_exports
  },
  "routes/my-account+/edit": {
    id: "routes/my-account+/edit",
    parentId: "routes/my-account",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/my-account+/invoices": {
    id: "routes/my-account+/invoices",
    parentId: "routes/my-account",
    path: "invoices",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_exports
  },
  "routes/my-account+/password": {
    id: "routes/my-account+/password",
    parentId: "routes/my-account",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: password_exports
  },
  "routes/my-courses": {
    id: "routes/my-courses",
    parentId: "root",
    path: "my-courses",
    index: void 0,
    caseSensitive: void 0,
    module: my_courses_exports
  },
  "routes/resources+/certificate": {
    id: "routes/resources+/certificate",
    parentId: "root",
    path: "resources/certificate",
    index: void 0,
    caseSensitive: void 0,
    module: certificate_exports
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
