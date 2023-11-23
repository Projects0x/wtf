import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'WTF',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-[#D9D9D9] flex flex-col items-center">
        <div className='max-w-[1250px] mx-3 flex flex-col pb-5'>
          <Navbar />
        {children}
        </div>
        
        </body>
    </html>
  )
}