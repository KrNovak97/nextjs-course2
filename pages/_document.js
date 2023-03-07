import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en>" className='dark'>
      <Head />
      <body class="dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
