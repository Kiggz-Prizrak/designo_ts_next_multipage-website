import '../stylesheets/main.scss'
import { Inter } from "next/font/google";
import Head from "next/head";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Designo",
  description: "a next/typescript multipage website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <body className={inter.className}> */}
      <body>
        <div className='main_container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
