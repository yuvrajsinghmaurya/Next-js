import "./globals.css";
import Header from './component/Header';
import Footer from './component/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    
    >
      <body >
        <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
