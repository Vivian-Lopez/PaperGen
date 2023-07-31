import '@/styles/globals.css'
import Nav from '@/components/nav'

export const metadata = {
  title: 'PaperGen',
  description: 'Generate Your own GAN Wallpapers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-r from-sky-500 to-indigo-500">
        <Nav/>
        {children}
      </body>
    </html>
  )
}
