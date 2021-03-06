import type {MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import React from 'react'
import styles from './styles/tailwindcss.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Backstage Talks',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <Document>
      <Layout />
      <Outlet />
    </Document>
  )
}

export function Document({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className=" overflow-y-hidden relative">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout() {
  return (
    <>
      <img
        src="https://backstagetalks.com/img/logo.png"
        className="w-64 absolute top-5 left-5"
        alt="Logo"
      />
      <div className="absolute max-w-xs bottom-4 left-5">
        <p className="text-lg font-semibold leading-6 mb-7">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk. <br />
          <span className="font-normal text-xs text-gray-600">
            © 2022{' '}
            <a href="/" className=" underline">
              Published by studio Milk
            </a>
          </span>
        </p>
        <a href="/" className="text-lg font-semibold underline">
          Privacy Policy
        </a>
      </div>
      <div className="absolute right-5 top-5 bottom-5 flex flex-col justify-between">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight hover:underline"
        >
          info@backstagetalks.com
        </a>
        <div className="flex justify-end">
          <ul className="w-fit flex flex-col">
            <NavLink
              to="#1"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #1
            </NavLink>
            <NavLink
              to="#2"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #2
            </NavLink>
            <NavLink
              to="#3"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #3
            </NavLink>
            <NavLink
              to="#4"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #4
            </NavLink>
            <NavLink
              to="#5"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #5
            </NavLink>
            <NavLink
              to="#6"
              className={({isActive}) =>
                isActive ? 'text-lg text-gray-800' : 'text-red-500'
              }
            >
              Issue #6
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}
