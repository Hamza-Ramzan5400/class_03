import Head from "../../component/header";
import FOT from "../../foter/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head/>
        {children}
        <FOT/>
      </body>
    </html>
  );
}
