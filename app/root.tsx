import type {MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
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
  title: 'New Remix App',
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
      <body className="h-screen relative">
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
          <ul className="w-fit">
            <li className="text-lg text-gray-800">Issue #1</li>
            <li className="text-lg text-gray-800">Issue #2</li>
            <li className="text-lg text-gray-800">Issue #3</li>
            <li className="text-lg text-gray-800">Issue #4</li>
            <li className="text-lg text-gray-800">Issue #5</li>
            <li className="text-lg text-gray-800">Issue #6</li>
          </ul>
        </div>
      </div>
    </>
  )
}
