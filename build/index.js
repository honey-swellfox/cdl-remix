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

// app/utils/env.server.ts
import { z } from "zod";
var schema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  SECURITY_KEY: z.string()
});
function init() {
  let parsed = schema.safeParse(process.env);
  if (parsed.success === !1)
    throw console.error(
      "\u274C Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    ), new Error("Invalid environment variables");
}
function getEnv() {
  return {
    MODE: "development",
    SENTRY_DSN: process.env.SENTRY_DSN
  };
}

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
init();
global.ENV = getEnv();
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
          lineNumber: 52,
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
          lineNumber: 102,
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
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { withSentry } from "@sentry/remix";
import { AuthenticityTokenProvider } from "remix-utils/csrf/react";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XJMUPOS4.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-77CZF34M.css";

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

// app/components/progress-bar.tsx
import { useNavigation as useNavigation2 } from "@remix-run/react";
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { useSpinDelay as useSpinDelay2 } from "spin-delay";

// app/utils/misc.ts
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

// app/utils/misc.ts
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
function invariantResponse(condition, message, responseInit) {
  if (!condition)
    throw new Response(
      typeof message == "function" ? message() : message,
      {
        status: 400,
        ...responseInit
      }
    );
}

// app/components/progress-bar.tsx
import LoadingBar from "react-top-loading-bar";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function EpicProgress() {
  let transition = useNavigation2(), busy = transition.state !== "idle", delayedPending = useSpinDelay2(busy, {
    delay: 0,
    minDuration: 400
  }), ref = useRef2(null), [animationComplete, setAnimationComplete] = useState2(!0), [progress, setProgress] = useState2(0);
  return useEffect2(() => {
    if (!ref.current)
      return;
    setProgress(progress + 20), delayedPending && setAnimationComplete(!1);
    let animationPromises = ref.current.getAnimations().map(({ finished }) => finished);
    Promise.allSettled(animationPromises).then(() => {
      delayedPending || (setAnimationComplete(!0), setProgress(100));
    });
  }, [delayedPending]), /* @__PURE__ */ jsxDEV3(
    "div",
    {
      role: "progressbar",
      "aria-hidden": delayedPending ? void 0 : !0,
      "aria-valuetext": delayedPending ? "Loading" : void 0,
      className: "fixed inset-x-0 left-0 top-0 z-50 h-[0.20rem] animate-pulse",
      children: [
        /* @__PURE__ */ jsxDEV3(
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
            lineNumber: 44,
            columnNumber: 4
          },
          this
        ),
        delayedPending && /* @__PURE__ */ jsxDEV3("div", { className: "absolute flex items-center justify-center", children: /* @__PURE__ */ jsxDEV3(LoadingBar, { color: "#0f62fe", progress }, void 0, !1, {
          fileName: "app/components/progress-bar.tsx",
          lineNumber: 60,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/components/progress-bar.tsx",
          lineNumber: 59,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/progress-bar.tsx",
      lineNumber: 39,
      columnNumber: 3
    },
    this
  );
}

// app/utils/auth.server.ts
import { redirect } from "@remix-run/node";

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var sessionKey = "userId", sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "cdlremix_session",
    // domain: 'http://cdl-training.cs/',
    sameSite: "none",
    path: "/",
    httpOnly: !0,
    maxAge: 60 * 60,
    // 60 minutes (1 hour)
    secrets: process.env.SECURITY_KEY.split(","),
    secure: !0
  }
}), originalCommitSession = sessionStorage.commitSession;
Object.defineProperty(sessionStorage, "commitSession", {
  value: async function(...args) {
    let [session, options] = args;
    options?.expires && session.set("expires", options.expires), options?.maxAge && session.set(
      "expires",
      new Date(Date.now() + options.maxAge * 1e3)
    );
    let expires = session.has("expires") ? new Date(session.get("expires")) : void 0;
    return await originalCommitSession(session, {
      ...options,
      expires
    });
  }
});

// app/utils/auth.server.ts
var actionUrl = process.env.CRAFT_ACTION_URL;
async function requireAnonymous(request) {
  if (await getUserId(request))
    throw redirect("/my-courses");
}
async function requireLogin(request) {
  let userId = await getUserId(request);
  if (!userId)
    throw redirect("/login");
  return userId;
}
async function getUserId(request) {
  return (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get(sessionKey);
}
async function getCurrentUser({
  username,
  pw
}) {
  return await (await fetch(`${actionUrl}/users/session-info`, {
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${btoa(`${username}:${pw}`)}`,
      "Content-Type": "application/json"
    },
    credentials: "include"
  })).json();
}
async function getCraftCsrfToken() {
  return await (await fetch(
    "http://cdl-training.cs/actions/cdl/users/get-session",
    {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }
  )).json();
}
async function logout({ request }) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: fonts_default },
  { rel: "stylesheet", href: tailwind_default }
];
async function loader({ request }) {
  let csrf = await getCraftCsrfToken(), userId = await getUserId(request);
  return json({ csrf, userId });
}
function App({ userId }) {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
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
          lineNumber: 40,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(EpicProgress, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Outlet, { context: { userId } }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV4(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function AppWithProviders() {
  let { csrf, userId } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(AuthenticityTokenProvider, { token: csrf.csrfTokenValue, children: /* @__PURE__ */ jsxDEV4(App, { userId }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 66,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
var root_default = withSentry(AppWithProviders);

// app/routes/_auth+/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login,
  loader: () => loader2,
  meta: () => meta
});
import {
  json as json2,
  redirect as redirect2
} from "@remix-run/node";
import { Form as Form3, useActionData } from "@remix-run/react";
import { AuthenticityTokenInput } from "remix-utils/csrf/react";

// app/components/container.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Container({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: `container mx-auto px-15 md:px-0 pt-[60px] ${className}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/container.tsx",
      lineNumber: 9,
      columnNumber: 3
    },
    this
  );
}

// app/components/navbar.tsx
import { useOutletContext as useOutletContext3 } from "@remix-run/react";

// app/components/navbar-public.tsx
import { Link as Link3, NavLink, useOutletContext } from "@remix-run/react";

// app/utils/helpers.tsx
var cssActiveNavLink = (active, isPublic = !0) => `h-full flex items-center ${isPublic ? "text-[#000000b3] text-[16px]" : active ? "text-[#f4f4f4] text-[14px]" : "text-[#ffffffcc] text-[14px]"} mb-[-3px] ${active ? "border-b-[3px] border-[#408bfc]" : ""}`, getCourseInfoFromUrl = (url) => {
  let id = url?.split("-")[0], slug = url?.replace(`${id}-`, "");
  return { id, slug };
};

// app/components/button-logout.tsx
import { Form } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function ButtonLogout() {
  return /* @__PURE__ */ jsxDEV6(Form, { action: "/logout", method: "POST", children: /* @__PURE__ */ jsxDEV6(
    "button",
    {
      type: "submit",
      className: "h-full flex items-center text-[#ffffffcc] text-[14px] mb-[-3px] ",
      children: "Logout"
    },
    void 0,
    !1,
    {
      fileName: "app/components/button-logout.tsx",
      lineNumber: 6,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/button-logout.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/button-login.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ButtonLogin() {
  return console.log("ButtonLogin"), /* @__PURE__ */ jsxDEV7(
    Link2,
    {
      to: "/login",
      className: "h-full flex items-center text-[#000000b3] text-[16px] mb-[-3px] ",
      children: "Login"
    },
    void 0,
    !1,
    {
      fileName: "app/components/button-login.tsx",
      lineNumber: 6,
      columnNumber: 3
    },
    this
  );
}

// app/components/navbar-public.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function NavbarPublic() {
  let { userId } = useOutletContext();
  return /* @__PURE__ */ jsxDEV8("header", { children: /* @__PURE__ */ jsxDEV8("nav", { className: "flex h-[60px] border-b border-opacity-30 border-black fixed top-0 w-full z-30 bg-white", children: /* @__PURE__ */ jsxDEV8("div", { className: "container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center items-center h-full", children: [
      /* @__PURE__ */ jsxDEV8(Link3, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV8(
        "img",
        {
          className: "ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto",
          src: "/img/logo/cdl-logo.svg",
          alt: "CDLOnline logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar-public.tsx",
          lineNumber: 15,
          columnNumber: 8
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar-public.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center", children: [
        userId ? /* @__PURE__ */ jsxDEV8(
          NavLink,
          {
            to: "/my-courses",
            className: ({ isActive }) => cssActiveNavLink(isActive),
            children: "My Courses"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-public.tsx",
            lineNumber: 23,
            columnNumber: 9
          },
          this
        ) : "",
        /* @__PURE__ */ jsxDEV8(
          NavLink,
          {
            to: "/courses",
            className: ({ isActive }) => cssActiveNavLink(isActive),
            children: "Browse Courses"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-public.tsx",
            lineNumber: 33,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          NavLink,
          {
            to: "/faq",
            className: ({ isActive }) => cssActiveNavLink(isActive),
            children: "FAQ"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-public.tsx",
            lineNumber: 40,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          NavLink,
          {
            to: "/contact-us",
            className: ({ isActive }) => cssActiveNavLink(isActive),
            children: "Contact Us"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-public.tsx",
            lineNumber: 47,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          NavLink,
          {
            to: "/business",
            className: ({ isActive }) => cssActiveNavLink(isActive),
            children: "For Business"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-public.tsx",
            lineNumber: 54,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar-public.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar-public.tsx",
      lineNumber: 13,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { children: userId ? /* @__PURE__ */ jsxDEV8(ButtonLogout, {}, void 0, !1, {
      fileName: "app/components/navbar-public.tsx",
      lineNumber: 63,
      columnNumber: 40
    }, this) : /* @__PURE__ */ jsxDEV8(ButtonLogin, {}, void 0, !1, {
      fileName: "app/components/navbar-public.tsx",
      lineNumber: 63,
      columnNumber: 22
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar-public.tsx",
      lineNumber: 63,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar-public.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar-public.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar-public.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/components/navbar-user.tsx
import { Link as Link4, NavLink as NavLink2, useOutletContext as useOutletContext2 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function NavbarUser() {
  let { userId } = useOutletContext2();
  return /* @__PURE__ */ jsxDEV9("header", { children: /* @__PURE__ */ jsxDEV9("nav", { className: "flex h-[48px] border-b border-opacity-30 border-black fixed top-0 w-full z-30 bg-[#161616]", children: /* @__PURE__ */ jsxDEV9("div", { className: "container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-center items-center h-full", children: [
      userId ? /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center mr-[52px]", children: [
        /* @__PURE__ */ jsxDEV9("button", { className: "flex items-center focus:outline-none text-white lg:hidden", children: /* @__PURE__ */ jsxDEV9(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 16",
            className: "fill-current w-[25px] h-[16px]",
            children: /* @__PURE__ */ jsxDEV9("path", { d: "M0 0v1h25V0H0zm0 7.5v1h25v-1H0zM0 15v1h25v-1H0z" }, void 0, !1, {
              fileName: "app/components/navbar-user.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 16,
            columnNumber: 10
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/navbar-user.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV9("a", { href: "/", children: [
          /* @__PURE__ */ jsxDEV9("span", { className: "text-[18px] font-semibold text-white ml-[20px] lg:ml-0", children: "CDL" }, void 0, !1, {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 24,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV9("span", { className: "text-[18px] uppercase font-light text-[#ffffffb3]", children: "Online" }, void 0, !1, {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 27,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/navbar-user.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar-user.tsx",
        lineNumber: 14,
        columnNumber: 8
      }, this) : /* @__PURE__ */ jsxDEV9(Link4, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV9(
        "img",
        {
          className: "ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto",
          src: "/img/logo/cdl-logo.svg",
          alt: "CDLOnline logo"
        },
        void 0,
        !1,
        {
          fileName: "app/components/navbar-user.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/navbar-user.tsx",
        lineNumber: 33,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center", children: [
        userId ? /* @__PURE__ */ jsxDEV9(
          NavLink2,
          {
            to: "/my-courses",
            className: ({ isActive }) => cssActiveNavLink(isActive, !1),
            children: "My Courses"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 43,
            columnNumber: 9
          },
          this
        ) : "",
        /* @__PURE__ */ jsxDEV9(
          NavLink2,
          {
            to: "/courses",
            className: ({ isActive }) => cssActiveNavLink(isActive, !1),
            children: "Browse Courses"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 53,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9(
          NavLink2,
          {
            to: "/business-portal",
            className: ({ isActive }) => cssActiveNavLink(isActive, !1),
            children: "Business Portal"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 60,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9(
          NavLink2,
          {
            to: "/my-account",
            className: ({ isActive }) => cssActiveNavLink(isActive, !1),
            children: "My Account"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar-user.tsx",
            lineNumber: 67,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar-user.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar-user.tsx",
      lineNumber: 12,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV9(ButtonLogout, {}, void 0, !1, {
      fileName: "app/components/navbar-user.tsx",
      lineNumber: 76,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar-user.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar-user.tsx",
    lineNumber: 10,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar-user.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/components/navbar.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Navbar() {
  let { userId } = useOutletContext3();
  return userId ? /* @__PURE__ */ jsxDEV10(NavbarUser, {}, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV10(NavbarPublic, {}, void 0, !1, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 8,
    columnNumber: 22
  }, this);
}

// app/components/layout.tsx
import { Fragment, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV11(Fragment, { children: [
    /* @__PURE__ */ jsxDEV11(Navbar, {}, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 6,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV11("main", { className: "main py-[50px] md:pt-[48px] bg-porcelain px-[15px] md:px-0", children }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 7,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/components/ui/icons/icon-arrow-right.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function IconArrowRight() {
  return /* @__PURE__ */ jsxDEV12(
    "svg",
    {
      width: "14",
      height: "10",
      viewBox: "0 0 14 10",
      version: "1.1",
      className: "fill-current",
      children: /* @__PURE__ */ jsxDEV12("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ jsxDEV12("g", { transform: "translate(-240.000000, -11.000000)", children: /* @__PURE__ */ jsxDEV12("g", { transform: "translate(239.000000, 8.000000)", children: /* @__PURE__ */ jsxDEV12(
        "polygon",
        {
          id: "Fill",
          points: "9.3 3.7 13.1 7.5 1 7.5 1 8.5 13.1 8.5 9.3 12.3 10 13 15 8 10 3"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-arrow-right.tsx",
          lineNumber: 12,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-arrow-right.tsx",
        lineNumber: 11,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-arrow-right.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-arrow-right.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-arrow-right.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/routes/_auth+/login.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "CDL Online | Login" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
async function loader2({ request }) {
  return await requireAnonymous(request), json2({});
}
async function action({ request }) {
  let formData = await request.formData(), url = `${process.env.CRAFT_ACTION_URL}/cdl/frontend/get-login-user-group`, data = await (await fetch(url, {
    headers: {
      Accept: "application/json"
    },
    method: "POST",
    body: formData
  })).json();
  if (data.success) {
    let username = formData.get("loginName"), pw = formData.get("password"), { id } = await getCurrentUser({ username, pw }), session = await sessionStorage.getSession(
      request.headers.get("cookie")
    );
    return session.set("userId", id), redirect2("/my-courses", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session)
      }
    });
  }
  return json2(data);
}
function Login() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxDEV13(Layout, { children: /* @__PURE__ */ jsxDEV13(Container, { children: /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV13("div", { className: "relative mx-auto sm:w-[500px] md:w-full md:grid justify-center", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "w-full lg:w-[380px] bg-porcelain md:col-start-[2px] md:col-end-3 md:row-start-1 md:row-end-1", children: /* @__PURE__ */ jsxDEV13(
      "img",
      {
        src: "/img/backgrounds/vehicle-red.png",
        className: "object-cover w-full h-[220px] md:h-full"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 74,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "bg-white w-full md:w-[480px] p-[30px] shadow-2xl md:col-start-1 md:col-end-[2px] md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV13("h1", { className: "text-[32px] text-codgray font-normal mb-[10px]", children: "Student Sign In" }, void 0, !1, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 80,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { className: "text-[16px] text-[#333333b3] font-normal mb-[30px]", children: "Login below to access your purchased courses." }, void 0, !1, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 83,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV13(Form3, { className: "bg-white w-full", method: "POST", children: [
        /* @__PURE__ */ jsxDEV13(AuthenticityTokenInput, { name: "CRAFT_CSRF_TOKEN" }, void 0, !1, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV13(
          "input",
          {
            type: "hidden",
            name: "loginType",
            value: "student"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 88,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          "input",
          {
            type: "hidden",
            name: "action",
            value: "users/login"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 93,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          "label",
          {
            className: "cdlform-label block text-[12px] text-codgray font-normal mb-[32px]",
            htmlFor: "title",
            children: [
              "Username or Email",
              /* @__PURE__ */ jsxDEV13(
                "input",
                {
                  className: "bg-[#00000008]  w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-codgray font-normal mt-[10px]",
                  type: "text",
                  name: "loginName",
                  placeholder: "Enter your username or email",
                  autoFocus: !0,
                  required: !0,
                  autoComplete: "username"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth+/login.tsx",
                  lineNumber: 102,
                  columnNumber: 10
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 98,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          "label",
          {
            className: "cdlform-label block text-[12px] text-codgray font-normal mb-[32px]",
            htmlFor: "title",
            children: [
              "Password",
              /* @__PURE__ */ jsxDEV13(
                "input",
                {
                  className: "bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-codgray font-normal mt-[10px]",
                  type: "password",
                  name: "password",
                  placeholder: "Enter your password",
                  required: !0,
                  autoComplete: "current-password"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth+/login.tsx",
                  lineNumber: 117,
                  columnNumber: 10
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 113,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13("div", { className: "flex justify-start mb-[25px]", children: /* @__PURE__ */ jsxDEV13(
          "button",
          {
            className: "login-button px-[22px] py-[10px] flex items-center justify-between focus:outline-none focus:shadow-none bg-[#0f62fe] text-white",
            type: "submit",
            children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "text-[14px] pr-[60px]", children: "Sign In" }, void 0, !1, {
                fileName: "app/routes/_auth+/login.tsx",
                lineNumber: 131,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV13(IconArrowRight, {}, void 0, !1, {
                fileName: "app/routes/_auth+/login.tsx",
                lineNumber: 134,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 128,
            columnNumber: 10
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-wrap mb-[20px]", children: [
          /* @__PURE__ */ jsxDEV13("label", { className: "flex align-items-start items-center", children: [
            /* @__PURE__ */ jsxDEV13(
              "input",
              {
                name: "rememberMe",
                type: "checkbox",
                value: "1"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth+/login.tsx",
                lineNumber: 140,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13("i", {}, void 0, !1, {
              fileName: "app/routes/_auth+/login.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13("span", { className: "px-[10px] mr-[10px] text-[14px]", children: "Remember Me" }, void 0, !1, {
              fileName: "app/routes/_auth+/login.tsx",
              lineNumber: 146,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 139,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV13(
            "a",
            {
              href: "/forgot-password",
              className: "text-[#0f62fe] text-[14px] hover:underline",
              children: "Forgot Password?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth+/login.tsx",
              lineNumber: 150,
              columnNumber: 10
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 138,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 86,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-wrap mb-[20px] text-[15px]", children: [
        /* @__PURE__ */ jsxDEV13("p", { className: "mr-[10px]", children: "Business Account?" }, void 0, !1, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV13(
          "a",
          {
            href: "/login/business",
            className: "text-[#0f62fe] hover:underline",
            children: "Login here."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 160,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 158,
        columnNumber: 8
      }, this),
      actionData?.error ? /* @__PURE__ */ jsxDEV13("div", { className: "bg-[#f4f4f4] text-[14px] text-[#e20e00] p-[10px]", children: [
        /* @__PURE__ */ jsxDEV13("div", { className: "inline-block", children: /* @__PURE__ */ jsxDEV13("p", { children: "Invalid username or password." }, void 0, !1, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 169,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ jsxDEV13("span", { className: "login-link hidden", children: [
          "Try signing in as a",
          /* @__PURE__ */ jsxDEV13(
            "a",
            {
              href: "/login/business",
              className: "underline px-[2px]",
              children: "Business Partner"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth+/login.tsx",
              lineNumber: 174,
              columnNumber: 11
            },
            this
          ),
          " ",
          "instead."
        ] }, void 0, !0, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 172,
          columnNumber: 10
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this) : ""
    ] }, void 0, !0, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 72,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 70,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 69,
    columnNumber: 3
  }, this);
}

// app/routes/_auth+/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader3
});
import { redirect as redirect3 } from "@remix-run/node";
async function loader3() {
  return redirect3("/");
}
async function action2({ request }) {
  return logout({ request });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Homepage,
  meta: () => meta2
});
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "CDL Online | Homepage" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function Homepage() {
  return /* @__PURE__ */ jsxDEV14(Layout, { children: /* @__PURE__ */ jsxDEV14(Container, { children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV14("h1", { children: "Homepage" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV14(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

// app/routes/_single+/business.tsx
var business_exports = {};
__export(business_exports, {
  default: () => FAQ,
  meta: () => meta3
});
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Business | CDL Online" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function FAQ() {
  return /* @__PURE__ */ jsxDEV15(Layout, { children: /* @__PURE__ */ jsxDEV15(Container, { children: /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV15("h1", { children: "For Business" }, void 0, !1, {
    fileName: "app/routes/_single+/business.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/business.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/business.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/business.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/_single+/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  actionx: () => actionx,
  default: () => ContactUs,
  meta: () => meta4
});
import { Form as Form4 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "CDL Online | Contact Us" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
async function actionx({ request }) {
  let formData = await request.formData(), resData = await (await fetch("http://cdl-training.cs/guest-entries/save", {
    method: "POST",
    body: formData
  })).json();
}
function ContactUs() {
  return /* @__PURE__ */ jsxDEV16(Layout, { children: /* @__PURE__ */ jsxDEV16("div", { className: "bg-[url('/img/backgrounds/contact.jpg')] bg-cover w-full h-full bg-no-repeat px-[15px] md:px-0 py-[20px] sm:py-[90px]", children: /* @__PURE__ */ jsxDEV16("div", { className: "container mx-auto  flex justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV16("div", { className: "w-full md:w-[480px] bg-white py-[30px] z-[10] px-[30px]", children: [
    /* @__PURE__ */ jsxDEV16("h1", { className: "text-[32px] text-[#161616] font-normal mb-[10px]", children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/_single+/contact-us.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { className: "mb-[20px]", children: [
      "Did you check out our",
      /* @__PURE__ */ jsxDEV16(
        "a",
        {
          href: "/faq",
          className: "text-mineshaft text-[14px] underline font-semibold hover:no-underline mx-[3px]",
          children: "FAQ"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 46,
          columnNumber: 8
        },
        this
      ),
      "page? Most questions can be answered there."
    ] }, void 0, !0, {
      fileName: "app/routes/_single+/contact-us.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Form4, { method: "POST", children: [
      /* @__PURE__ */ jsxDEV16(
        "input",
        {
          type: "hidden",
          name: "action",
          value: "guest-entries/save"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 54,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "sectionId", value: "1" }, void 0, !1, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 59,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "enabled", value: "1" }, void 0, !1, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 60,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV16(
        "input",
        {
          type: "text",
          name: "cdl",
          className: "hidden",
          id: "cdl"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 61,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]",
          htmlFor: "title",
          children: [
            "Your Name",
            /* @__PURE__ */ jsxDEV16(
              "input",
              {
                className: "bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal mt-[10px]",
                type: "text",
                name: "fields[fullName]",
                placeholder: "Enter your name",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_single+/contact-us.tsx",
                lineNumber: 72,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 68,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] mb-[25px]",
          htmlFor: "email",
          children: [
            "Your Email",
            /* @__PURE__ */ jsxDEV16(
              "input",
              {
                className: "bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] mt-[10px]",
                type: "email",
                name: "fields[emailAddress]",
                id: "email",
                placeholder: "Enter your email",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_single+/contact-us.tsx",
                lineNumber: 85,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 81,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] mb-[25px]",
          htmlFor: "state",
          children: [
            "Your State",
            /* @__PURE__ */ jsxDEV16(
              "select",
              {
                required: !0,
                name: "fields[state]",
                id: "state",
                className: "bg-[#00000008] w-full h-[40px] px-[12px] py-[9px] text-[16px] appearance-none focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal snipcart-form__select custom-select border-none mt-[10px]",
                children: [
                  /* @__PURE__ */ jsxDEV16("option", { disabled: !0, selected: !0, children: "Select a state" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 104,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "AL", children: "Alabama" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 108,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "AK", children: "Alaska" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 110,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "AZ", children: "Arizona" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 112,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "AR", children: "Arkansas" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 114,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "CA", children: "California" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 116,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "CO", children: "Colorado" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 118,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "CT", children: "Connecticut" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 120,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "DE", children: "Delaware" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 122,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "DC", children: "District of Columbia" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 124,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "FL", children: "Florida" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 128,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "GA", children: "Georgia" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 130,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "Hi", children: "Hawaii" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 132,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "ID", children: "Idaho" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 134,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "IL", children: "Illinois" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 136,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "IN", children: "Indiana" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 138,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "IA", children: "Iowa" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 140,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "KS", children: "Kansas" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 142,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "KY", children: "Kentucky" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 144,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "LA", children: "Louisiana" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 146,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "ME", children: "Maine" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 148,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MD", children: "Maryland" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 150,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MA", children: "Massachusetts" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 152,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MI", children: "Michigan" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 154,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MN", children: "Minnesota" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 156,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MS", children: "Mississippi" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 158,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MO", children: "Missouri" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 160,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "MT", children: "Montana" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 162,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NE", children: "Nebraska" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 164,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NV", children: "Nevada" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 166,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NH", children: "New Hampshire" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 168,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NJ", children: "New Jersey" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 170,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NM", children: "New Mexico" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 172,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NY", children: "New York" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 174,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "NC", children: "North Carolina" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 176,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "ND", children: "North Dakota" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 178,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "OH", children: "Ohio" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 180,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "OK", children: "Oklahoma" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 182,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "OR", children: "Oregon" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 184,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "PA", children: "Pennsylvania" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 186,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "RI", children: "Rhode Island" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 188,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "SC", children: "South Carolina" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 190,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "SD", children: "South Dakota" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 192,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "TN", children: "Tennessee" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 194,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "TX", children: "Texas" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 196,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "UT", children: "Utah" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 198,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "VT", children: "Vermont" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 200,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "VA", children: "Virginia" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 202,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "WA", children: "Washington" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 204,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "WV", children: "West Virginia" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 206,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "WI", children: "Wisconsin" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 208,
                    columnNumber: 10
                  }, this),
                  /* @__PURE__ */ jsxDEV16("option", { value: "WY", children: "Wyoming" }, void 0, !1, {
                    fileName: "app/routes/_single+/contact-us.tsx",
                    lineNumber: 210,
                    columnNumber: 10
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/_single+/contact-us.tsx",
                lineNumber: 99,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 95,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]",
          htmlFor: "inquiryType",
          children: "Inquiry Type"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 214,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex gap-24 mb-[25px]", children: [
        /* @__PURE__ */ jsxDEV16(
          "label",
          {
            className: "flex items-center",
            htmlFor: "inquiry_business",
            children: [
              /* @__PURE__ */ jsxDEV16(
                "input",
                {
                  className: "bg-[#00000008] h-[16px] w-[16px] mr-[8px]",
                  type: "radio",
                  name: "fields[inquiryType]",
                  id: "inquiry_business",
                  value: "business",
                  checked: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_single+/contact-us.tsx",
                  lineNumber: 224,
                  columnNumber: 10
                },
                this
              ),
              "Business"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_single+/contact-us.tsx",
            lineNumber: 221,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(
          "label",
          {
            className: "flex items-center",
            htmlFor: "inquiry_personal",
            children: [
              /* @__PURE__ */ jsxDEV16(
                "input",
                {
                  className: "bg-[#00000008] h-[16px] w-[16px] mr-[8px]",
                  type: "radio",
                  name: "fields[inquiryType]",
                  id: "inquiry_personal",
                  value: "personal"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_single+/contact-us.tsx",
                  lineNumber: 237,
                  columnNumber: 10
                },
                this
              ),
              "Personal"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_single+/contact-us.tsx",
            lineNumber: 234,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 220,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] font-normal mb-[25px]",
          htmlFor: "subject",
          children: [
            "Subject",
            /* @__PURE__ */ jsxDEV16(
              "input",
              {
                className: "bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-[#161616] font-normal mt-[10px]",
                type: "text",
                name: "fields[subject]",
                id: "subject",
                placeholder: "Enter subject",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_single+/contact-us.tsx",
                lineNumber: 252,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 248,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        "label",
        {
          className: "cdlform-label block text-[12px] text-[#161616] mb-[25px]",
          htmlFor: "message",
          children: [
            "Message",
            /* @__PURE__ */ jsxDEV16(
              "textarea",
              {
                className: "bg-[#00000008] w-full h-[150px] p-[15px] focus:outline-none focus:shadow-none mt-[10px]",
                name: "fields[message]",
                id: "message-text",
                placeholder: "Type your message",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_single+/contact-us.tsx",
                lineNumber: 266,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 262,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxDEV16(
        "button",
        {
          className: "px-[20px] py-[10px] flex items-center justify-between focus:outline-none focus:shadow-none bg-[#0f62fe] text-white",
          type: "submit",
          children: [
            /* @__PURE__ */ jsxDEV16("span", { className: "text-[14px] pr-[35px]", children: "Send Message" }, void 0, !1, {
              fileName: "app/routes/_single+/contact-us.tsx",
              lineNumber: 279,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV16("img", { src: "/img/icons/icon-send.svg" }, void 0, !1, {
              fileName: "app/routes/_single+/contact-us.tsx",
              lineNumber: 282,
              columnNumber: 10
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 276,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 275,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_single+/contact-us.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "message-sent-wrap hidden", children: /* @__PURE__ */ jsxDEV16("div", { className: "message-sent flex-col justify-center items-center flex h-[500px] bg-white px-[20px]", children: [
      /* @__PURE__ */ jsxDEV16("h2", { className: "text-[32px] text-center text-[#161616] font-normal mb-[20px]", children: "Message Sent!" }, void 0, !1, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "mb-90 text-center", children: "Thanks htmlFor the message, our team will review it shortly." }, void 0, !1, {
        fileName: "app/routes/_single+/contact-us.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16(
        "button",
        {
          type: "button",
          id: "btn-contact-close",
          className: "btn-contact-close bg-[#0f62fe] text-white px-[50px] py-[10px] uppercase",
          "aria-label": "Close",
          children: "Close"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_single+/contact-us.tsx",
          lineNumber: 296,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_single+/contact-us.tsx",
      lineNumber: 288,
      columnNumber: 8
    }, this) }, void 0, !1, {
      fileName: "app/routes/_single+/contact-us.tsx",
      lineNumber: 287,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_single+/contact-us.tsx",
    lineNumber: 40,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/contact-us.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/contact-us.tsx",
    lineNumber: 38,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/contact-us.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

// app/routes/_single+/faq.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => FAQ2,
  meta: () => meta5
});
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "CDL Online | FAQ" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function FAQ2() {
  return /* @__PURE__ */ jsxDEV17(Layout, { children: /* @__PURE__ */ jsxDEV17(Container, { children: /* @__PURE__ */ jsxDEV17("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV17("h1", { children: "Frequently Asked Questions" }, void 0, !1, {
    fileName: "app/routes/_single+/faq.tsx",
    lineNumber: 17,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/faq.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/faq.tsx",
    lineNumber: 15,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_single+/faq.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/_users+/my-account.tsx
var my_account_exports = {};
__export(my_account_exports, {
  default: () => MyAccount,
  loader: () => loader4
});
import { json as json3 } from "@remix-run/node";
import { NavLink as NavLink3, Outlet as Outlet3, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var cssActiveLink = (active) => `text-[16px] text-[#161616] text-left py-[18px] relative flex items-center ${active ? "border-b-2 border-[#0F62FE] mb-[-2px] font-medium" : ""}`, loader4 = async ({ request }) => (await requireLogin(request), json3({}));
function MyAccount() {
  let { pathname } = useLocation();
  return /* @__PURE__ */ jsxDEV18(Layout, { children: /* @__PURE__ */ jsxDEV18(Container, { children: [
    /* @__PURE__ */ jsxDEV18("h1", { className: "text-[32px] text-mineshaft text-left font-medium mb-[15px]", children: "My Account" }, void 0, !1, {
      fileName: "app/routes/_users+/my-account.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex gap-[10px] md:gap-[40px] border-b-2 border-alto", children: [
      /* @__PURE__ */ jsxDEV18(
        NavLink3,
        {
          to: "edit",
          className: ({ isActive }) => cssActiveLink(isActive || pathname == "/my-account"),
          children: "Edit Account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_users+/my-account.tsx",
          lineNumber: 34,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV18(
        NavLink3,
        {
          to: "password",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_users+/my-account.tsx",
          lineNumber: 41,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV18(
        NavLink3,
        {
          to: "certifications",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Certifications"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_users+/my-account.tsx",
          lineNumber: 46,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV18(
        NavLink3,
        {
          to: "invoices",
          className: ({ isActive }) => cssActiveLink(isActive),
          children: "Invoices"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_users+/my-account.tsx",
          lineNumber: 51,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_users+/my-account.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "py-[50px]", children: /* @__PURE__ */ jsxDEV18(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/_users+/my-account.tsx",
      lineNumber: 58,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/_users+/my-account.tsx",
      lineNumber: 57,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_users+/my-account.tsx",
    lineNumber: 29,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_users+/my-account.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

// app/routes/_users+/my-account+/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => EditProfileRoute
});
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function EditProfileRoute() {
  return /* @__PURE__ */ jsxDEV19("h2", { className: "text-[24px]", children: "Edit Account" }, void 0, !1, {
    fileName: "app/routes/_users+/my-account+/_index.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/_users+/my-account+/certifications.tsx
var certifications_exports = {};
__export(certifications_exports, {
  default: () => CertificationsRoute
});
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function CertificationsRoute() {
  return /* @__PURE__ */ jsxDEV20("h2", { className: "text-[24px]", children: "Certifications" }, void 0, !1, {
    fileName: "app/routes/_users+/my-account+/certifications.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/_users+/my-account+/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  default: () => EditProfileRoute2
});
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function EditProfileRoute2() {
  return /* @__PURE__ */ jsxDEV21("h2", { className: "text-[24px]", children: "Edit Account" }, void 0, !1, {
    fileName: "app/routes/_users+/my-account+/edit.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/_users+/my-account+/invoices.tsx
var invoices_exports = {};
__export(invoices_exports, {
  default: () => InvoicesRoute
});
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function InvoicesRoute() {
  return /* @__PURE__ */ jsxDEV22("h2", { className: "text-[24px]", children: "Invoices" }, void 0, !1, {
    fileName: "app/routes/_users+/my-account+/invoices.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/_users+/my-account+/password.tsx
var password_exports = {};
__export(password_exports, {
  default: () => EditPasswordRoute
});
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function EditPasswordRoute() {
  return /* @__PURE__ */ jsxDEV23("h2", { className: "text-[24px]", children: "Password" }, void 0, !1, {
    fileName: "app/routes/_users+/my-account+/password.tsx",
    lineNumber: 2,
    columnNumber: 9
  }, this);
}

// app/routes/_users+/my-courses.tsx
var my_courses_exports = {};
__export(my_courses_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => MyCourses,
  loader: () => loader5,
  meta: () => meta6
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, useRouteError } from "@remix-run/react";
import { isRouteErrorResponse } from "react-router-dom";

// app/components/hero.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function Hero({
  title,
  imgUrl,
  desc
}) {
  return /* @__PURE__ */ jsxDEV24("section", { className: "bg-blacksqueeze relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV24(
      "img",
      {
        src: imgUrl,
        className: "absolute top-0 left-0 w-full h-full object-cover z-10"
      },
      void 0,
      !1,
      {
        fileName: "app/components/hero.tsx",
        lineNumber: 12,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24("div", { className: "h-full w-full flex items-center relative z-20 min-h-[185px]", children: /* @__PURE__ */ jsxDEV24("div", { className: "container mx-auto text-center lg:text-left max-w-[1000px]", children: [
      /* @__PURE__ */ jsxDEV24("h1", { className: "text-[32px] text-[#ffffff]", children: title }, void 0, !1, {
        fileName: "app/components/hero.tsx",
        lineNumber: 18,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "text-[16px] text-[#ffffffb3] pt-[5px]", children: desc }, void 0, !1, {
        fileName: "app/components/hero.tsx",
        lineNumber: 19,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/hero.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hero.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/components/users/user-course.tsx
import { Link as Link5 } from "@remix-run/react";

// app/components/course-description.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function CourseDescription({
  description
}) {
  return description ? /* @__PURE__ */ jsxDEV25(
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
      fileName: "app/components/course-description.tsx",
      lineNumber: 11,
      columnNumber: 3
    },
    this
  ) : "";
}

// app/components/course-thumbnail.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function CourseThumbnail({
  courseThumbnail,
  title
}) {
  let thumbnail = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.url : "/img/road.jpg", altText = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.altText : title;
  return /* @__PURE__ */ jsxDEV26("div", { className: "relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px] md:ml-auto", children: /* @__PURE__ */ jsxDEV26(
    "img",
    {
      src: thumbnail,
      alt: altText,
      className: "object-center absolute top-0 left-0 w-full h-full object-cover z-0"
    },
    void 0,
    !1,
    {
      fileName: "app/components/course-thumbnail.tsx",
      lineNumber: 22,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/course-thumbnail.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}

// app/components/ui/icons/icon-check-outline.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function IconCheckOutline({
  className
}) {
  return /* @__PURE__ */ jsxDEV27(
    "svg",
    {
      className: `fill-current ${className}`,
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxDEV27(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM5.85714 10L3 7.16981L3.91429 6.26415L5.85714 8.18868L10.0857 4L11 4.90566L5.85714 10ZM1 7C1 10.3 3.7 13 7 13C10.3 13 13 10.3 13 7C13 3.7 10.3 1 7 1C3.7 1 1 3.7 1 7Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-check-outline.tsx",
          lineNumber: 14,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-check-outline.tsx",
      lineNumber: 7,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/icons/icon-download.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function IconDownload() {
  return /* @__PURE__ */ jsxDEV28(
    "svg",
    {
      className: "fill-current",
      width: "12px",
      height: "15px",
      viewBox: "0 0 12 15",
      version: "1.1",
      children: /* @__PURE__ */ jsxDEV28("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd", children: /* @__PURE__ */ jsxDEV28("g", { transform: "translate(-2.000000, -0.500000)", children: /* @__PURE__ */ jsxDEV28(
        "path",
        {
          d: "M13,7 L12.3,6.3 L8.5,10.1 L8.5,1 L7.5,1 L7.5,10.1 L3.7,6.3 L3,7 L8,12 L13,7 Z M13,12 L13,14 L3,14 L3,12 L2,12 L2,14 C2,14.6 2.4,15 3,15 L13,15 C13.6,15 14,14.6 14,14 L14,12 L13,12 Z",
          id: "Fill"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-download.tsx",
          lineNumber: 11,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-download.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-download.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-download.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/download-certificate.tsx
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function DownloadCertificate() {
  return /* @__PURE__ */ jsxDEV29("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV29("div", { className: "flex items-center mt-[15px] mb-[5px] sm:mb-0", children: [
    /* @__PURE__ */ jsxDEV29("button", { className: "bg-[#76c720] text-[13px] md:text-[14px] text-white py-[10px] px-[10px] lg:px-[18px] flex items-center relative mr-[14px]", children: [
      /* @__PURE__ */ jsxDEV29("span", { className: "mr-[25px]", children: "Download Certificate" }, void 0, !1, {
        fileName: "app/components/download-certificate.tsx",
        lineNumber: 9,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV29("span", { className: "w-[30px] absolute right-0 mr-[6px] flex justify-center pr-[4px]", children: /* @__PURE__ */ jsxDEV29(IconDownload, {}, void 0, !1, {
        fileName: "app/components/download-certificate.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/download-certificate.tsx",
        lineNumber: 10,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/download-certificate.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV29("p", { className: "text-[#76c720] text-[13px] md:text-[14px] flex items-center font-semibold ", children: [
      /* @__PURE__ */ jsxDEV29(IconCheckOutline, { className: "mr-5" }, void 0, !1, {
        fileName: "app/components/download-certificate.tsx",
        lineNumber: 15,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV29("span", { children: "Course Complete" }, void 0, !1, {
        fileName: "app/components/download-certificate.tsx",
        lineNumber: 16,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/download-certificate.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/download-certificate.tsx",
    lineNumber: 7,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/components/download-certificate.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/components/users/user-course.tsx
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function UserCourse({
  id,
  course,
  completed
}) {
  let userCourse = course[0], { title, description, courseThumbnail, slug } = userCourse, link = `/courses/overview/${id}-${slug}`;
  return /* @__PURE__ */ jsxDEV30("div", { className: "h-[325px] bg-white mb-[30px] shadow-2xl grid", children: [
    /* @__PURE__ */ jsxDEV30(CourseThumbnail, { courseThumbnail, title }, void 0, !1, {
      fileName: "app/components/users/user-course.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV30(
        Link5,
        {
          className: "text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]",
          to: link,
          children: title
        },
        void 0,
        !1,
        {
          fileName: "app/components/users/user-course.tsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col justify-between min-h-[128px]", children: [
        completed ? "" : /* @__PURE__ */ jsxDEV30(CourseDescription, { description }, void 0, !1, {
          fileName: "app/components/users/user-course.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex items-center", children: completed ? /* @__PURE__ */ jsxDEV30(DownloadCertificate, {}, void 0, !1, {
          fileName: "app/components/users/user-course.tsx",
          lineNumber: 49,
          columnNumber: 8
        }, this) : /* @__PURE__ */ jsxDEV30(
          Link5,
          {
            className: "flex items-center justify-between bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300",
            to: link,
            children: [
              /* @__PURE__ */ jsxDEV30("span", { className: "mr-[35px]", children: "Open Course" }, void 0, !1, {
                fileName: "app/components/users/user-course.tsx",
                lineNumber: 45,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV30(IconArrowRight, {}, void 0, !1, {
                fileName: "app/components/users/user-course.tsx",
                lineNumber: 46,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/users/user-course.tsx",
            lineNumber: 42,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/users/user-course.tsx",
          lineNumber: 40,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/users/user-course.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/users/user-course.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/users/user-course.tsx",
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

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
				includedLessons {
					id
					title
					slug
					segments: children(orderBy: "lft asc") {
						... on lessons_segment_Entry {
							id
							typeHandle
							title
							uri
							slug
							state
						}
						... on lessons_quiz_Entry {
							id
							typeHandle
							title
							uri
							slug
							state
						}
					}
				}
			}
		}
	}
`, LESSON_BY_SLUG_QUERY = gql`
	query Lesson($slug: [String]) {
		entry(slug: $slug, section: "lessons", type: "lesson") {
			id
			title
			slug
			uri
			url
			typeHandle
			... on lessons_lesson_Entry {
				id
				description
				price
				locked
				readingTime
				segments: children(orderBy: "lft asc") {
					... on lessons_segment_Entry {
						id
						typeHandle
						title
						uri
						slug
						state
					}
					... on lessons_quiz_Entry {
						id
						typeHandle
						title
						uri
						slug
					}
				}

				lessonImage {
					id
					url
				}
				embeddedYoutube {
					... on embeddedYoutube_BlockType {
						id
						contentUrl
						embedUrl
						timestamps {
							time
							description
						}
					}
				}

				audio {
					id
					title
					url
				}
			}
		}
	}
`, SEGMENT_BY_SLUG_QUERY = gql`
	query Lesson($slug: [String]) {
		entry(slug: $slug, section: "lessons", type: "segment") {
			id
			... on lessons_segment_Entry {
				id
				typeHandle
				title
				uri
				slug
				state
				description
				readingTime
				state
				lesson: parent {
					id
					title
					slug
				}
				audio {
					id
					title
					url
				}
				embeddedYoutube {
					... on embeddedYoutube_BlockType {
						id
						contentUrl
						embedUrl
						timestamps {
							col1
							time
							col2
							description
						}
					}
				}

				lessonBuilder {
					... on MatrixBlockInterface {
						id
						typeHandle
						... on lessonBuilder_text_BlockType {
							textType
							header
							body
						}
						... on lessonBuilder_file_BlockType {
							fileType
							file {
								id
								url
								... on lessons_Asset {
									altText
								}
							}
							imageTransform
							caption
							overflowedWidth
							imageClass
							imagePosition
						}

						... on lessonBuilder_embed_BlockType {
							header
							instructions
							embed
							caption
							overflowedWidth
						}

						... on lessonBuilder_accordion_BlockType {
							header
							instructions
							termsAndDefinitions {
								... on termsAndDefinitions_BlockType {
									id
									term
									definition
								}
							}
						}
						... on lessonBuilder_dialogCards_BlockType {
							header
							subHeader
							instructions
							description
							dialogCards {
								... on dialogCards_BlockType {
									id
									text
									answer
								}
							}
							flashCards {
								... on flashCards_BlockType {
									id
									front {
										... on front_text_BlockType {
											text
										}

										... on front_image_BlockType {
											image {
												... on lessons_Asset {
													id
													url
													altText
												}
											}
											isFullSize
											caption
										}
									}
									back {
										... on back_text_BlockType {
											text
										}

										... on back_image_BlockType {
											image {
												... on lessons_Asset {
													id
													url
													altText
												}
											}
											isFullSize
											caption
										}
									}
								}
							}
						}
						... on lessonBuilder_imageHotspots_BlockType {
							header
							instructions
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							imageMap
							spots {
								... on spots_BlockType {
									id
									areaName
									coords
									spotContent
								}
							}
						}
						... on lessonBuilder_keyCards_BlockType {
							header
							overflowedWidth
							keyCards {
								... on keyCards_BlockType {
									id
									cardName
									description
								}
							}
						}
						... on lessonBuilder_imageScenes_BlockType {
							header
							instructions
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							scenes {
								... on scenes_BlockType {
									id
									sceneTitle
									sceneHandle
									sceneImage {
										... on lessons_Asset {
											id
											url
											altText
										}
									}
									coords
									parentHandle
									sceneLevel
								}
							}
						}
						... on lessonBuilder_slides_BlockType {
							header
							lessonSlides {
								... on lessonSlides_BlockType {
									id
									slideType
									text
									slideImage {
										... on lessons_Asset {
											id
											url
											altText
										}
									}
								}
							}
						}
						... on lessonBuilder_video_BlockType {
							header
							videoUrl
							completedAtDuration
							showVideoControls
						}
						... on lessonBuilder_hotspotQuiz_BlockType {
							header
							duration
							backgroundImage {
								... on lessons_Asset {
									id
									url
									altText
								}
							}
							questions {
								... on questions_BlockType {
									id
									keyword
									hotspotTitle
									description
									question
									elements
								}
							}
						}
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
`, STUDENT_COURSES = gql`
	query StudentData($id: [QueryArgument]) {
		user(id: $id) {
			... on User {
				userCourses {
					... on MatrixBlockInterface {
						id
						... on userCourses_course_BlockType {
							id
							completed
							course {
								id
								title
								slug
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
					}
				}
			}
		}
	}
`;

// app/routes/_users+/my-courses.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "My Courses | CDL Online" },
  { name: "description", content: "Build CDL Online with Remix!" }
];
async function loader5({ request }) {
  let userId = await requireLogin(request), res = await fetchFromGraphQL(STUDENT_COURSES, {
    id: userId
  }), { errors, data } = await res.json();
  errors && invariantResponse(errors, errors[0].message, {
    status: 404
  });
  let userCourses = data.user ? data.user.userCourses : null;
  return json4({ userCourses });
}
function MyCourses() {
  let { userCourses } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV31(Layout, { children: [
    /* @__PURE__ */ jsxDEV31(Hero, { title: "My Courses", imgUrl: "/img/hero-course-library.jpg" }, void 0, !1, {
      fileName: "app/routes/_users+/my-courses.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV31(Container, { className: "card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30", children: userCourses ? userCourses.map((userCourse) => /* @__PURE__ */ jsxDEV31(
      UserCourse,
      {
        ...userCourse
      },
      `course-${userCourse.id}`,
      !1,
      {
        fileName: "app/routes/_users+/my-courses.tsx",
        lineNumber: 50,
        columnNumber: 8
      },
      this
    )) : "" }, void 0, !1, {
      fileName: "app/routes/_users+/my-courses.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_users+/my-courses.tsx",
    lineNumber: 45,
    columnNumber: 3
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError();
  isRouteErrorResponse(error) && (error.statusText = "Oh no! Something went wrong!");
}

// app/routes/business-portal+/$course.tsx
var course_exports = {};
__export(course_exports, {
  default: () => ManageCourseRoute,
  loader: () => loader6
});
import { json as json5 } from "@remix-run/node";
import { Outlet as Outlet4 } from "@remix-run/react";

// app/components/button-previous-page.tsx
import { Link as Link6 } from "@remix-run/react";

// app/components/ui/icons/icon-arrow-left.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
function IconArrowLeft() {
  return /* @__PURE__ */ jsxDEV32(
    "svg",
    {
      width: "8",
      height: "14",
      viewBox: "0 0 8 14",
      className: "fill-current mr-[8px]",
      children: /* @__PURE__ */ jsxDEV32(
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
          fileName: "app/components/ui/icons/icon-arrow-left.tsx",
          lineNumber: 8,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-arrow-left.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/button-previous-page.tsx
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function ButtonPreviousPage({
  title,
  url = "/my-courses"
}) {
  return /* @__PURE__ */ jsxDEV33(
    Link6,
    {
      className: "text-[#697077] text-[14px] flex items-center mb-[20px] hover:underline w-120 opacity-60",
      to: url,
      children: [
        /* @__PURE__ */ jsxDEV33(IconArrowLeft, {}, void 0, !1, {
          fileName: "app/components/button-previous-page.tsx",
          lineNumber: 15,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV33("span", { children: title }, void 0, !1, {
          fileName: "app/components/button-previous-page.tsx",
          lineNumber: 16,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/button-previous-page.tsx",
      lineNumber: 12,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/icons/icon-seat.tsx
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
function IconSeat() {
  return /* @__PURE__ */ jsxDEV34(
    "svg",
    {
      className: "fill-current",
      width: "16",
      height: "14",
      viewBox: "0 0 15 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxDEV34("path", { d: "M3.22915 0C2.28942 0 1.51487 0.774554 1.51487 1.71429V3.53571C0.854152 3.77455 0.372009 4.40402 0.372009 5.14286V12H1.51487V10.8571H12.9434V12H14.0863V5.14286C14.0863 4.40402 13.6042 3.77455 12.9434 3.53571V1.71429C12.9434 0.774554 12.1689 0 11.2292 0H3.22915ZM3.22915 1.14286H11.2292C11.5461 1.14286 11.8006 1.39732 11.8006 1.71429V3.53571C11.1399 3.77455 10.6577 4.40402 10.6577 5.14286V6.28571H3.80058V5.14286C3.80058 4.40402 3.31844 3.77455 2.65772 3.53571V1.71429C2.65772 1.39732 2.91219 1.14286 3.22915 1.14286ZM2.0863 4.57143C2.40326 4.57143 2.65772 4.82589 2.65772 5.14286V7.42857H11.8006V5.14286C11.8006 4.82589 12.055 4.57143 12.372 4.57143C12.689 4.57143 12.9434 4.82589 12.9434 5.14286V9.71429H1.51487V5.14286C1.51487 4.82589 1.76933 4.57143 2.0863 4.57143Z" }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-seat.tsx",
        lineNumber: 10,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-seat.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/icons/icon-user-outline.tsx
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function IconUserOutline() {
  return /* @__PURE__ */ jsxDEV35(
    "svg",
    {
      className: "fill-current",
      width: "18",
      height: "18",
      viewBox: "0 0 13 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxDEV35("path", { d: "M6.686 0.686035C3.20458 0.686035 0.372009 3.51861 0.372009 7.00003C0.372009 10.4815 3.20458 13.314 6.686 13.314C10.1674 13.314 13 10.4815 13 7.00003C13 3.51861 10.1674 0.686035 6.686 0.686035ZM6.686 1.65742C9.6419 1.65742 12.0286 4.04414 12.0286 7.00003C12.0286 9.95592 9.6419 12.3426 6.686 12.3426C3.73011 12.3426 1.34339 9.95592 1.34339 7.00003C1.34339 4.04414 3.73011 1.65742 6.686 1.65742ZM6.686 3.1145C5.35035 3.1145 4.25754 4.2073 4.25754 5.54295C4.25754 6.27908 4.60094 6.93363 5.12268 7.37948C4.02988 7.94675 3.28616 9.08889 3.28616 10.3999H4.25754C4.25754 9.05284 5.33897 7.97141 6.686 7.97141C8.03304 7.97141 9.11446 9.05284 9.11446 10.3999H10.0858C10.0858 9.08889 9.34213 7.94675 8.24933 7.37948C8.77107 6.93363 9.11446 6.27908 9.11446 5.54295C9.11446 4.2073 8.02166 3.1145 6.686 3.1145ZM6.686 4.08588C7.49612 4.08588 8.14308 4.73284 8.14308 5.54295C8.14308 6.35307 7.49612 7.00003 6.686 7.00003C5.87589 7.00003 5.22893 6.35307 5.22893 5.54295C5.22893 4.73284 5.87589 4.08588 6.686 4.08588Z" }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-user-outline.tsx",
        lineNumber: 10,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-user-outline.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/icons/icon-users.tsx
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function IconUsers() {
  return /* @__PURE__ */ jsxDEV36(
    "svg",
    {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14",
      xmlns: "http://www.w3.org/2000/svg",
      className: "inline mr-5",
      children: /* @__PURE__ */ jsxDEV36("g", { fill: "#0F62FE", fillRule: "nonzero", children: [
        /* @__PURE__ */ jsxDEV36("path", { d: "M12.172 14H.435a.446.446 0 0 1-.316-.129.4.4 0 0 1-.118-.306c.119-1.949 1.655-2.587 2.777-3.052.66-.274 1.234-.512 1.417-.908a9.2 9.2 0 0 0 .024-.923v-.11c-.305-.316-.578-.907-.69-1.408-.246-.139-.514-.449-.598-1.132-.04-.328.045-.591.174-.78-.376-1.01-.264-2.084.314-2.919C4.094 1.36 5.298.823 6.81.823c.166 0 .318.09.391.232l.207.402c.742.08 1.338.49 1.696 1.173.448.854.448 1.968.17 2.634.125.2.18.471.145.768-.084.683-.352.993-.598 1.132-.11.5-.376 1.09-.673 1.406v.11c-.003.31-.005.581.023.925.186.392.797.631 1.501.907 1.254.49 2.815 1.101 2.934 3.053a.398.398 0 0 1-.117.306.448.448 0 0 1-.317.129z" }, void 0, !1, {
          fileName: "app/components/ui/icons/icon-users.tsx",
          lineNumber: 10,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV36("path", { d: "M14.214 9.133c-.614-.234-1.196-.455-1.366-.79a7.919 7.919 0 0 1-.022-.816v-.082c.276-.29.517-.808.62-1.26.227-.135.48-.422.557-1.039a1.098 1.098 0 0 0-.127-.704c.243-.603.245-1.585-.148-2.345-.333-.646-.895-1.034-1.6-1.114L11.945.64a.436.436 0 0 0-.389-.227c-1.046 0-1.943.28-2.589.783.372.27.684.628.915 1.068.459.874.575 2.042.317 2.964.091.277.12.585.082.9-.093.762-.385 1.225-.689 1.505-.117.386-.31.843-.578 1.217 0 .158 0 .304.008.459.193.135.658.316.98.443 1.089.425 2.633 1.033 3.23 2.61l3.289-.008c.12 0 .234-.047.316-.13a.4.4 0 0 0 .118-.306c-.112-1.785-1.632-2.363-2.742-2.784z" }, void 0, !1, {
          fileName: "app/components/ui/icons/icon-users.tsx",
          lineNumber: 11,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV36("path", { d: "M17.555 7.756c-.526-.203-1.025-.394-1.171-.672-.022-.264-.02-.475-.018-.717v-.055c.24-.264.447-.712.54-1.108.206-.13.427-.396.495-.944a1.033 1.033 0 0 0-.108-.635c.212-.553.208-1.433-.145-2.113-.297-.573-.793-.921-1.414-1l-.148-.283a.438.438 0 0 0-.39-.229c-.76 0-1.418.164-1.948.464.534.27.968.702 1.262 1.272.464.9.483 1.927.287 2.67.082.26.106.547.07.838-.088.701-.363 1.137-.65 1.406a3.92 3.92 0 0 1-.522 1.076c0 .096 0 .189.004.283.195.114.587.263.84.359.95.361 2.415.92 3.018 2.337h2.008c.12 0 .234-.046.316-.129A.4.4 0 0 0 20 10.27c-.1-1.614-1.455-2.135-2.444-2.514z" }, void 0, !1, {
          fileName: "app/components/ui/icons/icon-users.tsx",
          lineNumber: 12,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/icons/icon-users.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-users.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/routes/business-portal+/$course.tsx
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  return await requireLogin(request), json5({});
}
function ManageCourseRoute() {
  return /* @__PURE__ */ jsxDEV37(Layout, { children: /* @__PURE__ */ jsxDEV37(Container, { children: [
    /* @__PURE__ */ jsxDEV37(
      ButtonPreviousPage,
      {
        title: "Manage Courses",
        url: "/business-portal"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 21,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ jsxDEV37("h1", { className: "text-[28px] md:text-[32px]", children: "Hazmat Driver Training - ELDT Approved Theory - Hazmat Course" }, void 0, !1, {
      fileName: "app/routes/business-portal+/$course.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV37("div", { className: "flex justify-between flex-wrap", children: /* @__PURE__ */ jsxDEV37("div", { className: "flex justify-start items-center flex-wrap", children: [
      /* @__PURE__ */ jsxDEV37("div", { className: "text-[#697077] text-[14px] flex items-center mr-[10px] border-rx my-[10px]", children: [
        /* @__PURE__ */ jsxDEV37(IconUserOutline, {}, void 0, !1, {
          fileName: "app/routes/business-portal+/$course.tsx",
          lineNumber: 34,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV37("span", { className: "ml-[7px]", children: "8 Registered Students" }, void 0, !1, {
          fileName: "app/routes/business-portal+/$course.tsx",
          lineNumber: 35,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV37("span", { className: "mr-[10px] border-r border-[#dfe3e6] h-[22px]" }, void 0, !1, {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV37("div", { className: "text-[14px] flex items-center mr-[10px] border-rx my-[10px] text-[#697077]", children: [
        /* @__PURE__ */ jsxDEV37(IconSeat, {}, void 0, !1, {
          fileName: "app/routes/business-portal+/$course.tsx",
          lineNumber: 41,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV37("span", { className: "ml-[7px]", children: "6 Unused Seats (1 Pending Invite)" }, void 0, !1, {
          fileName: "app/routes/business-portal+/$course.tsx",
          lineNumber: 42,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV37("span", { className: "mr-[10px] border-r border-[#dfe3e6] h-[22px]" }, void 0, !1, {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV37("button", { className: "text-[#0f62fe] text-[14px] my-[10px] pr-[10px] mr-[10px] border-rx hover:underline", children: [
        /* @__PURE__ */ jsxDEV37(IconUsers, {}, void 0, !1, {
          fileName: "app/routes/business-portal+/$course.tsx",
          lineNumber: 48,
          columnNumber: 8
        }, this),
        "Bulk Purchase Seats"
      ] }, void 0, !0, {
        fileName: "app/routes/business-portal+/$course.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/business-portal+/$course.tsx",
      lineNumber: 32,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/business-portal+/$course.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV37(Outlet4, {}, void 0, !1, {
      fileName: "app/routes/business-portal+/$course.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/business-portal+/$course.tsx",
    lineNumber: 20,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/business-portal+/$course.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/routes/business-portal+/_index.tsx
var index_exports3 = {};
__export(index_exports3, {
  default: () => BusinessPortalRoute,
  loader: () => loader7
});
import { json as json6 } from "@remix-run/node";
import { Link as Link7 } from "@remix-run/react";
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
async function loader7({ request }) {
  return await requireLogin(request), json6({});
}
function BusinessPortalRoute() {
  return /* @__PURE__ */ jsxDEV38(Layout, { children: [
    /* @__PURE__ */ jsxDEV38("div", { className: "h-[185px] border-b border-opacity-30 border-black", children: /* @__PURE__ */ jsxDEV38("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxDEV38("h1", { children: "Manage Courses" }, void 0, !1, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 21,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 19,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV38(Container, { children: /* @__PURE__ */ jsxDEV38("div", { className: "py-[50px]", children: /* @__PURE__ */ jsxDEV38("div", { className: "shadow-2xl grid", children: [
      /* @__PURE__ */ jsxDEV38("div", { className: "relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px]", children: /* @__PURE__ */ jsxDEV38(
        "img",
        {
          src: "https://d1q7zo9dguawuf.cloudfront.net/courses/thumbnails/hazmat-endorsement.jpg",
          alt: "Hazmat endorsement course",
          className: "object-center absolute top-0 left-0 w-full h-full object-cover z-0"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/business-portal+/_index.tsx",
          lineNumber: 28,
          columnNumber: 8
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/business-portal+/_index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV38("div", { className: "bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 grid mine-content grid-col-1", children: [
        /* @__PURE__ */ jsxDEV38("div", { className: "p-[15px] sm:p-[30px]", children: [
          /* @__PURE__ */ jsxDEV38(
            Link7,
            {
              to: "hazmat-endorsement",
              className: "text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[10px]",
              children: "Hazmat Driver Training - ELDT Approved Theory - Hazmat Course"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV38("div", { className: "flex items-center pt-[50px]", children: [
            /* @__PURE__ */ jsxDEV38(
              Link7,
              {
                to: "hazmat-endorsement",
                className: "bg-[#0f62fe] hover:bg-[#0353E9] text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300 flex items-center",
                children: [
                  /* @__PURE__ */ jsxDEV38("span", { className: "mr-[35px]", children: "Manage Students" }, void 0, !1, {
                    fileName: "app/routes/business-portal+/_index.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ jsxDEV38(IconArrowRight, {}, void 0, !1, {
                    fileName: "app/routes/business-portal+/_index.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/business-portal+/_index.tsx",
                lineNumber: 43,
                columnNumber: 10
              },
              this
            ),
            /* @__PURE__ */ jsxDEV38(
              "a",
              {
                className: "text-[#0f62fe] inline-block text-[14px] hover:underline",
                href: "/courses/overview/hazmat-endorsement",
                children: /* @__PURE__ */ jsxDEV38("span", { className: "flex-shrink-0", children: "Preview Course" }, void 0, !1, {
                  fileName: "app/routes/business-portal+/_index.tsx",
                  lineNumber: 54,
                  columnNumber: 11
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/business-portal+/_index.tsx",
                lineNumber: 51,
                columnNumber: 10
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/business-portal+/_index.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/business-portal+/_index.tsx",
          lineNumber: 35,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV38("div", { className: "flex justify-start items-center px-[15px] sm:px-[30px] border-t border-[#dfe3e6] flex-wrap py-[10px]", children: [
          /* @__PURE__ */ jsxDEV38("div", { className: "text-[#697077] text-[12px] flex items-center mr-[24px]", children: [
            /* @__PURE__ */ jsxDEV38(IconUserOutline, {}, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 62,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV38("span", { className: "ml-[5px] font-medium", children: "8" }, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 63,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV38("span", { className: "ml-[3px]", children: "Registered" }, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 66,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/business-portal+/_index.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV38("div", { className: "text-[12px] flex items-center mr-[24px] text-[#697077]", children: [
            /* @__PURE__ */ jsxDEV38(IconSeat, {}, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 69,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV38("span", { className: "ml-[5px] font-medium", children: "6" }, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 70,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV38("span", { className: "ml-[3px]", children: "Unused Seats (1 Pending Invite)" }, void 0, !1, {
              fileName: "app/routes/business-portal+/_index.tsx",
              lineNumber: 73,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/business-portal+/_index.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/business-portal+/_index.tsx",
          lineNumber: 60,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/business-portal+/_index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 26,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/business-portal+/_index.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/business-portal+/_index.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course.tsx
var course_exports2 = {};
__export(course_exports2, {
  default: () => CourseEntry,
  loader: () => loader8,
  meta: () => meta7
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { json as json7 } from "@remix-run/node";

// app/components/course-card-details.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function CourseCardDetails({
  title,
  description,
  courseThumbnail,
  accessDays
}) {
  let thumbnail = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.url : "/img/road.jpg", thumbnailAltText = courseThumbnail && courseThumbnail.length ? courseThumbnail[0]?.altText : title;
  return /* @__PURE__ */ jsxDEV39("div", { className: "card details shadow-2xl grid mb-[25px] min-h-[445px]", children: [
    /* @__PURE__ */ jsxDEV39("div", { className: "relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[512px]", children: /* @__PURE__ */ jsxDEV39(
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
    /* @__PURE__ */ jsxDEV39("div", { className: "px-[15px] sm:px-[30px] lg:px-[50px] py-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV39("h1", { className: "text-[28px] sm:text-[32px] mb-[25px] text-mineshaft leading-snug", children: title }, void 0, !1, {
        fileName: "app/components/course-card-details.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV39("div", { className: "flex flex-col justify-between min-h-[128px]", children: [
        /* @__PURE__ */ jsxDEV39("div", { className: "flex items-center mb-[14px]", children: [
          /* @__PURE__ */ jsxDEV39("p", { className: "text-[#0f62fe] font-semibold text-[16px]", children: "$150" }, void 0, !1, {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV39("p", { className: "text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]", children: accessDays ? accessDays + "-day access" : "Unlimited access" }, void 0, !1, {
            fileName: "app/components/course-card-details.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/course-card-details.tsx",
          lineNumber: 38,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV39("div", { className: "mb-[25px]", children: /* @__PURE__ */ jsxDEV39("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV39("div", { className: "text-[#697077] text-[11px] xs:text-[12px] flex items-center mr-[13px]", children: [
          /* @__PURE__ */ jsxDEV39(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "10",
              height: "12",
              viewBox: "0 0 10 12",
              className: "fill-current",
              children: /* @__PURE__ */ jsxDEV39(
                "g",
                {
                  fillRule: "evenodd",
                  transform: "translate(0 -2)",
                  children: /* @__PURE__ */ jsxDEV39(
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
          /* @__PURE__ */ jsxDEV39("span", { className: "ml-[7px]", children: "13 lessons (9hrs)" }, void 0, !1, {
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
        /* @__PURE__ */ jsxDEV39(
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
        /* @__PURE__ */ jsxDEV39("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV39("button", { className: "bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300", children: "Purchase Course" }, void 0, !1, {
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
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
var meta7 = ({ data }) => [
  { title: `CDL Online | ${data && data.data.entry ? data.data.entry.title : "Browse Course"}` },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader8 = async ({ params }) => {
  let res = await fetchFromGraphQL(COURSE_BY_SLUG_QUERY, {
    slug: params.course
  });
  return json7(await res.json());
};
function CourseEntry() {
  let { data } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV40(Layout, { children: /* @__PURE__ */ jsxDEV40(Container, { children: [
    /* @__PURE__ */ jsxDEV40(ButtonPreviousPage, { title: "Browse Courses" }, void 0, !1, {
      fileName: "app/routes/courses+/$course.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this),
    data && data.entry ? /* @__PURE__ */ jsxDEV40(CourseCardDetails, { ...data.entry }, void 0, !1, {
      fileName: "app/routes/courses+/$course.tsx",
      lineNumber: 38,
      columnNumber: 6
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 34,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course.tsx",
    lineNumber: 33,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course_+/$lesson.tsx
var lesson_exports = {};
__export(lesson_exports, {
  default: () => LessonEntry,
  loader: () => loader9
});
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { json as json8 } from "@remix-run/node";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
async function loader9({ request, params }) {
  await requireLogin(request);
  let response = await fetchFromGraphQL(LESSON_BY_SLUG_QUERY, {
    slug: params.lesson
  });
  return json8(await response.json());
}
function LessonEntry() {
  let { data } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV41(Layout, { children: /* @__PURE__ */ jsxDEV41(Container, { children: data.entry ? /* @__PURE__ */ jsxDEV41("h1", { className: "text-[28px]", children: [
    "Lesson: ",
    data.entry.title
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/$course_+/$lesson.tsx",
    lineNumber: 27,
    columnNumber: 6
  }, this) : "" }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson.tsx",
    lineNumber: 25,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson.tsx",
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course_+/$lesson_.$segment.tsx
var lesson_segment_exports = {};
__export(lesson_segment_exports, {
  default: () => SegmentEntry,
  loader: () => loader10,
  meta: () => meta8
});
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { json as json9 } from "@remix-run/node";

// app/components/segments/blocks/Text.tsx
import { memo } from "react";
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
var Text = memo(({ content }) => {
  let { textType, header, body } = content, textDisplay;
  switch (textType) {
    case "important":
      textDisplay = /* @__PURE__ */ jsxDEV42("div", { className: "block-text important", children: [
        /* @__PURE__ */ jsxDEV42("div", { className: "table bg-porcelain", children: /* @__PURE__ */ jsxDEV42("h2", { className: "header uppercase text-mineshaft px-20 flex items-center pt-9 pb-8", children: [
          /* @__PURE__ */ jsxDEV42(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "18",
              viewBox: "0 0 20 18",
              className: "mr-10",
              children: /* @__PURE__ */ jsxDEV42("g", { fill: "none", children: [
                /* @__PURE__ */ jsxDEV42(
                  "path",
                  {
                    fill: "#FFC107",
                    d: "M18.85 17.74H1.109c-.398 0-.764-.212-.962-.556-.197-.344-.196-.768.004-1.11L9.021.55c.2-.34.564-.55.958-.55s.76.21.958.55l8.87 15.523c.2.343.202.767.004 1.111-.197.344-.564.557-.961.557z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/segments/blocks/Text.tsx",
                    lineNumber: 21,
                    columnNumber: 10
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV42(
                  "path",
                  {
                    fill: "#5D4037",
                    d: "M8.87 14.493c0-.149.026-.285.08-.413.052-.127.127-.237.223-.329.095-.093.212-.165.346-.218.135-.05.287-.078.457-.078.17 0 .323.027.459.078.139.053.255.125.35.218.097.092.172.202.224.329.053.128.079.264.079.413 0 .15-.026.286-.08.41-.051.125-.126.233-.223.326-.095.092-.211.164-.35.218-.136.05-.29.076-.46.076-.17 0-.32-.025-.456-.077-.134-.053-.251-.125-.346-.217-.097-.094-.172-.201-.223-.326-.054-.124-.08-.26-.08-.41m1.93-2.296H9.15l-.233-6.653h2.115l-.233 6.653z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/segments/blocks/Text.tsx",
                    lineNumber: 25,
                    columnNumber: 10
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/segments/blocks/Text.tsx",
                lineNumber: 20,
                columnNumber: 9
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/segments/blocks/Text.tsx",
              lineNumber: 14,
              columnNumber: 8
            },
            this
          ),
          header || "Note"
        ] }, void 0, !0, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 12,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV42("div", { className: "overflowed-w border border-athensgray p-20 bg-zircon font-sans mb-40", children: /* @__PURE__ */ jsxDEV42("div", { dangerouslySetInnerHTML: { __html: body } }, void 0, !1, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 34,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/segments/blocks/Text.tsx",
        lineNumber: 11,
        columnNumber: 5
      }, this);
      break;
    case "blockQuote":
      textDisplay = /* @__PURE__ */ jsxDEV42("div", { className: "block-text block-quote", children: [
        header ? /* @__PURE__ */ jsxDEV42("h2", { className: "header mb-20", children: header }, void 0, !1, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 44,
          columnNumber: 16
        }, this) : "",
        /* @__PURE__ */ jsxDEV42(
          "div",
          {
            dangerouslySetInnerHTML: { __html: body },
            className: "mb-40"
          },
          void 0,
          !1,
          {
            fileName: "app/components/segments/blocks/Text.tsx",
            lineNumber: 45,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/segments/blocks/Text.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this);
      break;
    default:
    case "text":
      textDisplay = /* @__PURE__ */ jsxDEV42("div", { className: "block-text", children: [
        header ? /* @__PURE__ */ jsxDEV42("h2", { className: "header mb-20", children: header }, void 0, !1, {
          fileName: "app/components/segments/blocks/Text.tsx",
          lineNumber: 57,
          columnNumber: 16
        }, this) : "",
        body ? /* @__PURE__ */ jsxDEV42(
          "div",
          {
            dangerouslySetInnerHTML: { __html: body },
            className: "mb-40"
          },
          void 0,
          !1,
          {
            fileName: "app/components/segments/blocks/Text.tsx",
            lineNumber: 59,
            columnNumber: 7
          },
          this
        ) : ""
      ] }, void 0, !0, {
        fileName: "app/components/segments/blocks/Text.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this);
      break;
  }
  return textDisplay;
}), Text_default = Text;

// app/components/segments/Segment.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
function Segment({ entry: entry2 }) {
  console.log({ entry: entry2 });
  let html, contents = entry2.lessonBuilder.map(
    (content) => {
      switch (content.typeHandle) {
        case "text":
          html = /* @__PURE__ */ jsxDEV43(Text_default, { content }, content.id, !1, {
            fileName: "app/components/segments/Segment.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this);
          break;
        default:
          html = "";
          break;
      }
      return html;
    }
  );
  return console.log({ contents }), /* @__PURE__ */ jsxDEV43(Fragment2, { children: [
    " ",
    contents.length > 1 ? contents : /* @__PURE__ */ jsxDEV43(Fragment2, { children: contents }, void 0, !1, {
      fileName: "app/components/segments/Segment.tsx",
      lineNumber: 83,
      columnNumber: 46
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/segments/Segment.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

// app/routes/courses+/$course_+/$lesson_.$segment.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
var meta8 = ({ data }) => [
  { title: `${data && data.data.entry ? data.data.entry.title : "Browse Course"} | CDL Online` },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader10 = async ({ request, params }) => {
  await requireLogin(request);
  let res = await fetchFromGraphQL(SEGMENT_BY_SLUG_QUERY, {
    slug: params.segment
  });
  return json9(await res.json());
};
function SegmentEntry() {
  let { data } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV44(Layout, { children: /* @__PURE__ */ jsxDEV44(Container, { children: data.entry ? /* @__PURE__ */ jsxDEV44(Segment, { entry: data.entry }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson_.$segment.tsx",
    lineNumber: 37,
    columnNumber: 19
  }, this) : "" }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson_.$segment.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson_.$segment.tsx",
    lineNumber: 35,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz.tsx
var lesson_segment_quiz_quiz_exports = {};
__export(lesson_segment_quiz_quiz_exports, {
  default: () => CourseEntry2,
  meta: () => meta9
});
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
var meta9 = ({ data }) => [
  { title: `CDL Online | ${data && data.data.entry ? data.data.entry.title : "Browse Course"}` },
  { name: "description", content: "Build CDL Online with Remix!" }
];
function CourseEntry2() {
  return /* @__PURE__ */ jsxDEV45(Layout, { children: /* @__PURE__ */ jsxDEV45(Container, { children: [
    /* @__PURE__ */ jsxDEV45(ButtonPreviousPage, { title: "Browse Courses" }, void 0, !1, {
      fileName: "app/routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    "QUIZ"
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz.tsx",
    lineNumber: 24,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/_index.tsx
var index_exports4 = {};
__export(index_exports4, {
  default: () => CoursesIndex,
  loader: () => loader11,
  meta: () => meta10
});
import { json as json10 } from "@remix-run/node";
import { Outlet as Outlet5, useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/course-card.tsx
import { Link as Link8 } from "@remix-run/react";

// app/components/course-price.tsx
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function CoursePrice({
  accessDays,
  price
}) {
  return /* @__PURE__ */ jsxDEV46("div", { className: "flex items-center mb-[13px]", children: [
    price ? /* @__PURE__ */ jsxDEV46("p", { className: "text-[#0f62fe] font-semibold text-16", children: "$" + price }, void 0, !1, {
      fileName: "app/components/course-price.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this) : /* @__PURE__ */ jsxDEV46("p", { className: "text-[#76c720] font-semibold text-16", children: "Free Course" }, void 0, !1, {
      fileName: "app/components/course-price.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV46("p", { className: "text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]", children: accessDays ? accessDays + "-day access" : "Unlimited access" }, void 0, !1, {
      fileName: "app/components/course-price.tsx",
      lineNumber: 21,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/course-price.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/components/course-card.tsx
import { jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
function CourseCard({ entry: entry2 }) {
  let { title, description, courseThumbnail, accessDays, price } = entry2, slug = entry2.slug;
  return /* @__PURE__ */ jsxDEV47("div", { className: "h-[325px] bg-white mb-[30px] shadow-2xl grid", children: [
    /* @__PURE__ */ jsxDEV47(CourseThumbnail, { courseThumbnail, title }, void 0, !1, {
      fileName: "app/components/course-card.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV47("div", { className: "p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1", children: [
      /* @__PURE__ */ jsxDEV47(
        Link8,
        {
          className: "text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]",
          to: slug || "",
          children: title
        },
        void 0,
        !1,
        {
          fileName: "app/components/course-card.tsx",
          lineNumber: 18,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV47("div", { className: "flex flex-col justify-between min-h-[128px]", children: [
        /* @__PURE__ */ jsxDEV47(CoursePrice, { accessDays, price }, void 0, !1, {
          fileName: "app/components/course-card.tsx",
          lineNumber: 24,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV47(CourseDescription, { description }, void 0, !1, {
          fileName: "app/components/course-card.tsx",
          lineNumber: 25,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV47("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV47("button", { className: "bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300", children: "Purchase Course" }, void 0, !1, {
            fileName: "app/components/course-card.tsx",
            lineNumber: 28,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV47(
            Link8,
            {
              className: "text-[#0f62fe] inline-block text-[14px] hover:underline",
              to: slug || "",
              children: "Course Details"
            },
            void 0,
            !1,
            {
              fileName: "app/components/course-card.tsx",
              lineNumber: 31,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/course-card.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/course-card.tsx",
        lineNumber: 23,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/course-card.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/course-card.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/_index.tsx
import { jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
var meta10 = () => [
  { title: "Courses | CDL Online" },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader11 = async () => {
  let res = await fetchFromGraphQL(ALL_COURSES_QUERY);
  return json10(await res.json());
};
function CoursesIndex() {
  let { data } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV48(Layout, { children: [
    /* @__PURE__ */ jsxDEV48(
      Hero,
      {
        title: "Browse Courses",
        imgUrl: "/img/hero-course-library.jpg"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/courses+/_index.tsx",
        lineNumber: 31,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV48(Container, { className: "container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30", children: [
      data && data.entries ? data.entries.map((entry2) => /* @__PURE__ */ jsxDEV48(
        CourseCard,
        {
          entry: entry2
        },
        `course-${entry2.id}`,
        !1,
        {
          fileName: "app/routes/courses+/_index.tsx",
          lineNumber: 38,
          columnNumber: 8
        },
        this
      )) : "",
      /* @__PURE__ */ jsxDEV48(Outlet5, {}, void 0, !1, {
        fileName: "app/routes/courses+/_index.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/courses+/_index.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/_index.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/overview.$course.tsx
var overview_course_exports = {};
__export(overview_course_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => CourseOverview,
  loader: () => loader12,
  meta: () => meta11
});
import { json as json11 } from "@remix-run/node";
import {
  isRouteErrorResponse as isRouteErrorResponse2,
  useLoaderData as useLoaderData7,
  useRouteError as useRouteError2
} from "@remix-run/react";

// app/components/users/overview-lesson.tsx
import { Link as Link10 } from "@remix-run/react";
import { useState as useState3 } from "react";

// app/components/ui/icons/icon-book.tsx
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function IconBooked() {
  return /* @__PURE__ */ jsxDEV49(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "12",
      viewBox: "0 0 10 12",
      className: "fill-current",
      children: /* @__PURE__ */ jsxDEV49("g", { fillRule: "evenodd", transform: "translate(0 -2)", children: /* @__PURE__ */ jsxDEV49(
        "path",
        {
          fillRule: "nonzero",
          d: "M1.5 2C.678 2 0 2.678 0 3.5v9c0 .822.678 1.5 1.5 1.5H10V2H1.5zm0 1H9v8H1.5c-.176 0-.342.037-.5.094V3.5c0-.283.217-.5.5-.5zm1 1.5v1H8v-1H2.5zm-1 7.5H9v1H1.5c-.283 0-.5-.217-.5-.5 0-.283.217-.5.5-.5z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-book.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ui/icons/icon-book.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-book.tsx",
      lineNumber: 3,
      columnNumber: 3
    },
    this
  );
}

// app/components/ui/icons/icon-caret-down.tsx
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
function IconCaretDown() {
  return /* @__PURE__ */ jsxDEV50("svg", { width: "10", height: "6", viewBox: "0 0 10 6", className: "btn-down", children: /* @__PURE__ */ jsxDEV50(
    "path",
    {
      fill: "none",
      fillRule: "evenodd",
      stroke: "#161616",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.2",
      d: "M0 0L4 4 0 8",
      transform: "rotate(90 4 5)"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-caret-down.tsx",
      lineNumber: 4,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/icon-caret-down.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// app/components/ui/icons/icon-caret-up.tsx
import { jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
function IconCaretUp() {
  return /* @__PURE__ */ jsxDEV51("svg", { width: "12", height: "8", viewBox: "0 0 12 8", children: /* @__PURE__ */ jsxDEV51(
    "path",
    {
      fill: "none",
      fillRule: "evenodd",
      stroke: "#161616",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.2",
      d: "M0 0L4 4 0 8",
      transform: "rotate(270 5 2)"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-caret-up.tsx",
      lineNumber: 4,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/icon-caret-up.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// app/components/users/overview-segment.tsx
import { Link as Link9, useFetcher, useParams } from "@remix-run/react";
import { useEffect as useEffect3 } from "react";

// app/components/ui/icons/icon-checked.tsx
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
function IconChecked({
  isDone,
  isNext
}) {
  return /* @__PURE__ */ jsxDEV52("div", { className: "rounded-full flex items-center justify-center bg-[#f4f4f4] h-[27px] w-[27px]", children: isDone ? /* @__PURE__ */ jsxDEV52(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ jsxDEV52(
        "path",
        {
          fillRule: "evenodd",
          d: "M6 10.6L2.5 7.1 1.8 7.8 5.3 11.3 6 12 13.1 4.9 12.4 4.2z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-checked.tsx",
          lineNumber: 16,
          columnNumber: 6
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-checked.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  ) : isNext ? "" : /* @__PURE__ */ jsxDEV52(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "17",
      viewBox: "0 0 16 17",
      children: /* @__PURE__ */ jsxDEV52(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 8h-1V5c0-1.7-1.3-3-3-3S5 3.3 5 5v3H4c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM6 5c0-1.1.9-2 2-2s2 .9 2 2v3H6V5zm6 10H4V9h8v6z",
          opacity: ".5"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/icons/icon-checked.tsx",
          lineNumber: 26,
          columnNumber: 6
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons/icon-checked.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/icons/icon-checked.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/components/users/overview-segment.tsx
import { jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
function OverviewSegment({
  link,
  segment
}) {
  let params = useParams(), { id } = getCourseInfoFromUrl(params.course), fetcher = useFetcher({
    key: `segment-status-${segment.id}`
  });
  useEffect3(() => {
    !fetcher.data && fetcher.state == "idle" && fetcher.load(`/resources/segment-status/${id}/${segment.id}}`);
  }, [segment.id]);
  let data = fetcher.data ? fetcher.data : void 0, completed = data !== void 0 ? data.completed : !1;
  return /* @__PURE__ */ jsxDEV53("div", { className: "flex items-center mb-[10px] last:mb-0", children: [
    /* @__PURE__ */ jsxDEV53(IconChecked, { isDone: completed, isNext: !completed }, void 0, !1, {
      fileName: "app/components/users/overview-segment.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV53("div", { className: "text-[14px] ml-[20px]", children: /* @__PURE__ */ jsxDEV53(
      Link9,
      {
        className: `hover:underline ${completed ? "line-through text-[#697077]" : "text-[#161616]"}`,
        to: `${link}/${segment.slug}`,
        children: segment.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/users/overview-segment.tsx",
        lineNumber: 33,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/users/overview-segment.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/users/overview-segment.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

// app/components/users/overview-lesson.tsx
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
function OverviewLesson({
  lesson,
  course
}) {
  let [showSegments, setShowSegments] = useState3(!1), link = `/courses/${course.slug}/${lesson.slug}`;
  return /* @__PURE__ */ jsxDEV54("div", { className: "mb-2", children: showSegments ? /* @__PURE__ */ jsxDEV54(
    "div",
    {
      className: `bg-white shadow-2xl opacity-1 h-auto px-[15px] md:px-[30px] xlg:p-[10px] flex flex-col lg:flex-row relative ${showSegments ? "opacity-1" : "hidden opacity-0"}`,
      children: [
        /* @__PURE__ */ jsxDEV54(
          "button",
          {
            className: "absolute top-[10px] -right-[5px] md:right-[10px] p-[20px]",
            onClick: () => setShowSegments(!showSegments),
            children: /* @__PURE__ */ jsxDEV54(IconCaretUp, {}, void 0, !1, {
              fileName: "app/components/users/overview-lesson.tsx",
              lineNumber: 40,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 37,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV54("div", { className: "w-full lg:w-2/6 xlg:px-[20px] pb-[30px] pt-[20px] lg:pb-[20px] border-b lg:my-[10px] lg:border-b-0 lg:border-r border-alto", children: [
          /* @__PURE__ */ jsxDEV54("div", { className: "flex items-center mb-[18px]", children: /* @__PURE__ */ jsxDEV54(
            Link10,
            {
              className: "text-[16px] font-semibold inline-block hover:underline mr-[7px]",
              to: link,
              children: lesson.title
            },
            void 0,
            !1,
            {
              fileName: "app/components/users/overview-lesson.tsx",
              lineNumber: 44,
              columnNumber: 8
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 43,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV54("div", { className: "mb-[20px]", children: /* @__PURE__ */ jsxDEV54("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV54("div", { className: "text-[#697077] text-[11px] xs:text-[12px] flex items-center mr-[13px]", children: [
            /* @__PURE__ */ jsxDEV54(IconBooked, {}, void 0, !1, {
              fileName: "app/components/users/overview-lesson.tsx",
              lineNumber: 53,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV54("span", { className: "ml-[7px]", children: "9 modules (1hr)" }, void 0, !1, {
              fileName: "app/components/users/overview-lesson.tsx",
              lineNumber: 54,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 51,
            columnNumber: 8
          }, this) }, void 0, !1, {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 50,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV54(
            Link10,
            {
              className: "bg-[#0f62fe] hover:bg-[#0f62fe]-dark w-[165px] text-[14px] text-white font-light py-[10px] px-[23px] mr-[20px] flex items-center justify-between transition-colors duration-300",
              to: link,
              children: [
                /* @__PURE__ */ jsxDEV54("span", { children: "Continue" }, void 0, !1, {
                  fileName: "app/components/users/overview-lesson.tsx",
                  lineNumber: 63,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ jsxDEV54(IconArrowRight, {}, void 0, !1, {
                  fileName: "app/components/users/overview-lesson.tsx",
                  lineNumber: 64,
                  columnNumber: 8
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/users/overview-lesson.tsx",
              lineNumber: 60,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/users/overview-lesson.tsx",
          lineNumber: 42,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV54("div", { className: "w-full lg:w-4/6 py-[30px] lg:py-[20px] px-0 lg:pl-[40px]", children: lesson.segments.map((segment) => /* @__PURE__ */ jsxDEV54(
          OverviewSegment,
          {
            segment,
            link
          },
          segment.id,
          !1,
          {
            fileName: "app/components/users/overview-lesson.tsx",
            lineNumber: 69,
            columnNumber: 8
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/users/overview-lesson.tsx",
          lineNumber: 67,
          columnNumber: 6
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/users/overview-lesson.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ jsxDEV54(
    "button",
    {
      className: "bg-[#ffffffcc] w-full text-[16px] text-left text-[#16161680] hover:text-[#161616] px-[15px] md:px-[30px] h-[75px] font-semibold flex justify-between items-center opacity-1",
      onClick: () => setShowSegments(!showSegments),
      children: [
        /* @__PURE__ */ jsxDEV54("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV54("span", { className: "mr-7", children: lesson.title }, void 0, !1, {
          fileName: "app/components/users/overview-lesson.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/users/overview-lesson.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV54(IconCaretDown, {}, void 0, !1, {
          fileName: "app/components/users/overview-lesson.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/users/overview-lesson.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/users/overview-lesson.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

// app/routes/courses+/overview.$course.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
var meta11 = ({ data }) => [
  { title: `${data && data.course ? data.course.title : "Browse Course"} | CDL Online` },
  { name: "description", content: "Build CDL Online with Remix!" }
], loader12 = async ({ request, params }) => {
  await requireLogin(request);
  let { slug } = getCourseInfoFromUrl(params.course), course = await (await fetchFromGraphQL(COURSE_BY_SLUG_QUERY, {
    slug
  })).json();
  return json11({ course: course.data.entry });
};
function CourseOverview() {
  let { course } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV55(Layout, { children: /* @__PURE__ */ jsxDEV55(Container, { children: [
    /* @__PURE__ */ jsxDEV55(ButtonPreviousPage, { title: "My Courses" }, void 0, !1, {
      fileName: "app/routes/courses+/overview.$course.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    course ? /* @__PURE__ */ jsxDEV55(Fragment3, { children: [
      /* @__PURE__ */ jsxDEV55("h1", { className: "text-[20px] sm:text-[28px] lg:text-[32px] lg:max-w-[600px] mb-[16px] text-left", children: course.title }, void 0, !1, {
        fileName: "app/routes/courses+/overview.$course.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      course.includedLessons.map((lesson) => /* @__PURE__ */ jsxDEV55(
        OverviewLesson,
        {
          lesson,
          course
        },
        lesson.id,
        !1,
        {
          fileName: "app/routes/courses+/overview.$course.tsx",
          lineNumber: 54,
          columnNumber: 8
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/courses+/overview.$course.tsx",
      lineNumber: 49,
      columnNumber: 6
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/courses+/overview.$course.tsx",
    lineNumber: 46,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/overview.$course.tsx",
    lineNumber: 45,
    columnNumber: 3
  }, this);
}
function ErrorBoundary2() {
  let error = useRouteError2();
  return isRouteErrorResponse2(error) && (error.statusText = "Oh no! Something went wrong!"), /* @__PURE__ */ jsxDEV55(Container, { children: /* @__PURE__ */ jsxDEV55("h1", { className: "text-[32px] min-h-screen", children: "404 Page Not Found" }, void 0, !1, {
    fileName: "app/routes/courses+/overview.$course.tsx",
    lineNumber: 78,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/courses+/overview.$course.tsx",
    lineNumber: 77,
    columnNumber: 3
  }, this);
}

// app/routes/resources+/certificate.tsx
var certificate_exports = {};
__export(certificate_exports, {
  loader: () => loader13
});
async function loader13() {
  return new Response(
    "Resource routes are for actions you made with the server (ex. downloading user certificates.)"
  );
}

// app/routes/resources+/segment-status.$userCourse.$segment.tsx
var segment_status_userCourse_segment_exports = {};
__export(segment_status_userCourse_segment_exports, {
  loader: () => loader14
});
import { json as json12 } from "@remix-run/node";
async function loader14({ params }) {
  let csrf = await getCraftCsrfToken(), formData = new FormData();
  formData.append("userCourseId", params.userCourse), formData.append("segmentId", params.segment), formData.append("CRAFT_CSRF_TOKEN", csrf.csrfTokenValue);
  let response = await fetch(
    "http://cdl-training.cs/actions/cdl/users/check-segment-status",
    {
      headers: {
        Accept: "application/json"
      },
      method: "POST",
      body: formData
    }
  );
  return json12(await response.json());
}

// app/routes/resources+/user-session.tsx
var user_session_exports = {};
__export(user_session_exports, {
  loader: () => loader15
});
import { json as json13 } from "@remix-run/node";
async function loader15({ request }) {
  let data = await (await fetch(
    "http://cdl-training.cs/actions/cdl/users/get-session",
    {
      method: "GET",
      headers: {
        Accept: "application/json"
        // 'Content-Type': 'application/json',
        // 'X-Requested-With': 'XMLHttpRequest',
      }
      // method: 'POST',
      // body: formData,
      // body: JSON.stringify(params),
    }
  )).json();
  return json13(data);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MQ7UHQ6C.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-K7KOCSKT.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-TIITO2TX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4ISHCHTB.js", imports: ["/build/_shared/chunk-RPF4ZUUK.js", "/build/_shared/chunk-6LMWWETO.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth+/login": { id: "routes/_auth+/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth+/login-M35G47PJ.js", imports: ["/build/_shared/chunk-D5L4Z6EH.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth+/logout": { id: "routes/_auth+/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth+/logout-M5ZJ3ZMG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5BEEHEDJ.js", imports: ["/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_single+/business": { id: "routes/_single+/business", parentId: "root", path: "business", index: void 0, caseSensitive: void 0, module: "/build/routes/_single+/business-ENWQOG6R.js", imports: ["/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_single+/contact-us": { id: "routes/_single+/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/_single+/contact-us-5A7EGXE6.js", imports: ["/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_single+/faq": { id: "routes/_single+/faq", parentId: "root", path: "faq", index: void 0, caseSensitive: void 0, module: "/build/routes/_single+/faq-3UGEG2VR.js", imports: ["/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account+/_index": { id: "routes/_users+/my-account+/_index", parentId: "routes/_users+/my-account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_users+/my-account+/_index-SBH6HMKB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account+/certifications": { id: "routes/_users+/my-account+/certifications", parentId: "routes/_users+/my-account", path: "certifications", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-account+/certifications-GAQ4F3BN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account+/edit": { id: "routes/_users+/my-account+/edit", parentId: "routes/_users+/my-account", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-account+/edit-KYVI5OB6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account+/invoices": { id: "routes/_users+/my-account+/invoices", parentId: "routes/_users+/my-account", path: "invoices", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-account+/invoices-4SWXXQXI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account+/password": { id: "routes/_users+/my-account+/password", parentId: "routes/_users+/my-account", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-account+/password-ADDBZQE3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_users+/my-account": { id: "routes/_users+/my-account", parentId: "root", path: "my-account", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-account-7TYBHUOM.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_users+/my-courses": { id: "routes/_users+/my-courses", parentId: "root", path: "my-courses", index: void 0, caseSensitive: void 0, module: "/build/routes/_users+/my-courses-COM2L3VL.js", imports: ["/build/_shared/chunk-3LIT6UNG.js", "/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-D5L4Z6EH.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/business-portal+/$course": { id: "routes/business-portal+/$course", parentId: "root", path: "business-portal/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/business-portal+/$course-URRYMAHR.js", imports: ["/build/_shared/chunk-DMNBMK5S.js", "/build/_shared/chunk-H2J5FYUN.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/business-portal+/_index": { id: "routes/business-portal+/_index", parentId: "root", path: "business-portal/", index: !0, caseSensitive: void 0, module: "/build/routes/business-portal+/_index-V7XW5RIX.js", imports: ["/build/_shared/chunk-DMNBMK5S.js", "/build/_shared/chunk-D5L4Z6EH.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/$course": { id: "routes/courses+/$course", parentId: "root", path: "courses/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course-X73TZ3SZ.js", imports: ["/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-H2J5FYUN.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson": { id: "routes/courses+/$course_+/$lesson", parentId: "root", path: "courses/:course/:lesson", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson-WEWWWNS4.js", imports: ["/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson_.$segment": { id: "routes/courses+/$course_+/$lesson_.$segment", parentId: "root", path: "courses/:course/:lesson/:segment", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson_.$segment-JPOAFOY3.js", imports: ["/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz": { id: "routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz", parentId: "root", path: "courses/:course/:lesson/:segment/quiz/:quiz", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz-UQWXJQA2.js", imports: ["/build/_shared/chunk-H2J5FYUN.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/courses+/_index": { id: "routes/courses+/_index", parentId: "root", path: "courses/", index: !0, caseSensitive: void 0, module: "/build/routes/courses+/_index-ZCRU4J2P.js", imports: ["/build/_shared/chunk-3LIT6UNG.js", "/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/courses+/overview.$course": { id: "routes/courses+/overview.$course", parentId: "root", path: "courses/overview/:course", index: void 0, caseSensitive: void 0, module: "/build/routes/courses+/overview.$course-4UKJMQRO.js", imports: ["/build/_shared/chunk-3GFW7QQ7.js", "/build/_shared/chunk-H2J5FYUN.js", "/build/_shared/chunk-D5L4Z6EH.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-B3C6UAE7.js", "/build/_shared/chunk-DYCDPCPE.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/resources+/certificate": { id: "routes/resources+/certificate", parentId: "root", path: "resources/certificate", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/certificate-WNPKOTGO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/resources+/segment-status.$userCourse.$segment": { id: "routes/resources+/segment-status.$userCourse.$segment", parentId: "root", path: "resources/segment-status/:userCourse/:segment", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/segment-status.$userCourse.$segment-EAM6C2HA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/resources+/user-session": { id: "routes/resources+/user-session", parentId: "root", path: "resources/user-session", index: void 0, caseSensitive: void 0, module: "/build/routes/resources+/user-session-67N3T7PQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "80e2e042", hmr: { runtime: "/build/_shared/chunk-TIITO2TX.js", timestamp: 1702632650450 }, url: "/build/manifest-80E2E042.js" };

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
  "routes/_auth+/login": {
    id: "routes/_auth+/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/_auth+/logout": {
    id: "routes/_auth+/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_single+/business": {
    id: "routes/_single+/business",
    parentId: "root",
    path: "business",
    index: void 0,
    caseSensitive: void 0,
    module: business_exports
  },
  "routes/_single+/contact-us": {
    id: "routes/_single+/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/_single+/faq": {
    id: "routes/_single+/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/_users+/my-account": {
    id: "routes/_users+/my-account",
    parentId: "root",
    path: "my-account",
    index: void 0,
    caseSensitive: void 0,
    module: my_account_exports
  },
  "routes/_users+/my-account+/_index": {
    id: "routes/_users+/my-account+/_index",
    parentId: "routes/_users+/my-account",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/_users+/my-account+/certifications": {
    id: "routes/_users+/my-account+/certifications",
    parentId: "routes/_users+/my-account",
    path: "certifications",
    index: void 0,
    caseSensitive: void 0,
    module: certifications_exports
  },
  "routes/_users+/my-account+/edit": {
    id: "routes/_users+/my-account+/edit",
    parentId: "routes/_users+/my-account",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/_users+/my-account+/invoices": {
    id: "routes/_users+/my-account+/invoices",
    parentId: "routes/_users+/my-account",
    path: "invoices",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_exports
  },
  "routes/_users+/my-account+/password": {
    id: "routes/_users+/my-account+/password",
    parentId: "routes/_users+/my-account",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: password_exports
  },
  "routes/_users+/my-courses": {
    id: "routes/_users+/my-courses",
    parentId: "root",
    path: "my-courses",
    index: void 0,
    caseSensitive: void 0,
    module: my_courses_exports
  },
  "routes/business-portal+/$course": {
    id: "routes/business-portal+/$course",
    parentId: "root",
    path: "business-portal/:course",
    index: void 0,
    caseSensitive: void 0,
    module: course_exports
  },
  "routes/business-portal+/_index": {
    id: "routes/business-portal+/_index",
    parentId: "root",
    path: "business-portal/",
    index: !0,
    caseSensitive: void 0,
    module: index_exports3
  },
  "routes/courses+/$course": {
    id: "routes/courses+/$course",
    parentId: "root",
    path: "courses/:course",
    index: void 0,
    caseSensitive: void 0,
    module: course_exports2
  },
  "routes/courses+/$course_+/$lesson": {
    id: "routes/courses+/$course_+/$lesson",
    parentId: "root",
    path: "courses/:course/:lesson",
    index: void 0,
    caseSensitive: void 0,
    module: lesson_exports
  },
  "routes/courses+/$course_+/$lesson_.$segment": {
    id: "routes/courses+/$course_+/$lesson_.$segment",
    parentId: "root",
    path: "courses/:course/:lesson/:segment",
    index: void 0,
    caseSensitive: void 0,
    module: lesson_segment_exports
  },
  "routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz": {
    id: "routes/courses+/$course_+/$lesson_.$segment_.quiz_.$quiz",
    parentId: "root",
    path: "courses/:course/:lesson/:segment/quiz/:quiz",
    index: void 0,
    caseSensitive: void 0,
    module: lesson_segment_quiz_quiz_exports
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
  "routes/resources+/certificate": {
    id: "routes/resources+/certificate",
    parentId: "root",
    path: "resources/certificate",
    index: void 0,
    caseSensitive: void 0,
    module: certificate_exports
  },
  "routes/resources+/segment-status.$userCourse.$segment": {
    id: "routes/resources+/segment-status.$userCourse.$segment",
    parentId: "root",
    path: "resources/segment-status/:userCourse/:segment",
    index: void 0,
    caseSensitive: void 0,
    module: segment_status_userCourse_segment_exports
  },
  "routes/resources+/user-session": {
    id: "routes/resources+/user-session",
    parentId: "root",
    path: "resources/user-session",
    index: void 0,
    caseSensitive: void 0,
    module: user_session_exports
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
