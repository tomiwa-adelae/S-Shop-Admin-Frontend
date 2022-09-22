import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="true"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
               rel="stylesheet"
            />

            <link
               rel="stylesheet"
               href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
               integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
               crossOrigin="anonymous"
            />
         </Head>

         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
