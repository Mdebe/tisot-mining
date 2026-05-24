import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'TISOT Mining',
  description: 'Mining & Civil Engineering Company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070707] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  ); 
}