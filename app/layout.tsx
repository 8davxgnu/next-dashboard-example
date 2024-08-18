import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      {/* backtick : string literal */}
      <body className= {`${inter.className} antialiased`}>
        <div>{children}</div>
      </body> 
    </html>
  );
}
