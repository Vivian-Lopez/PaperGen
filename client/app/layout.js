import '@/styles/globals.css'
import Nav from '@/components/nav'

export const metadata = {
  title: 'PaperGen',
  description: 'Generate Your own GAN Wallpapers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className="bg-gray-800">
        <Nav/>
        {children}
      </body>
    </html>
  )
}
