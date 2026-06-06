


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
