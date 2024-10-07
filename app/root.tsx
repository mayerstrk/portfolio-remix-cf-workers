import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import Logo from "./components/logo";
import ThreeJSComponentWrapper from "./components/dimensional-bjorn.jsx";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang='en' data-theme='dark'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='cool-background realtive flex h-full min-h-screen min-w-[320px] flex-col bg-bkg text-content'>
        <div className='flex flex-grow flex-col md:flex-row'>
          <aside className='flex h-full w-full items-center justify-center md:h-auto md:w-[35%] md:min-w-[250px]'>
            <div className='flex w-full flex-col p-3'>
              <Logo />
              <ThreeJSComponentWrapper />
            </div>
          </aside>
          <main className='flex-grow'>
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
