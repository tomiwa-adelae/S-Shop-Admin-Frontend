import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
         />
         <meta name="keywords" content={keywords} />
         <meta name="description" content={description} />
         <meta charSet="utf-8" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
};

Meta.defaultProps = {
   title: 'S-Shop | Buying and selling made easy',
   keywords: '',
   description: '',
};

export default Meta;
