
// meta data - pass meta data on page for example we are passing html title  of the page
import type {Metadata} from 'next';

export const metadata : Metadata={
  title : "Technical Agency"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     
    >
      <body className="min-h-full flex flex-col">
         <header className="" style={{background:'teal'}}>Header</header>
          {children}
          <footer style={{background:'brown'}}>footer</footer>

      </body>
    </html>
  );
}
