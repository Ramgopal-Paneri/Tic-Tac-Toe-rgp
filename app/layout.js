import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TIC-TAC-TOE</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
