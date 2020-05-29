import Head from "next/head";

const CustomHead = () => (
  <Head>
    <title>Tecknchips</title>
    {/* Meta Tags */}
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="icon/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Soy Frontend Developer hace +3 años y vivo en Buenos Aires-Argentina. 
        Actualmente me encuentro estudiando Análisis en Sistemas en el Instituto Beltran."
    />
    <meta name="author" content="Brian Durand" />
    {/* Social Media */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@tecknchips" />
    <meta property="og:title" content="Brian Durand Frontend Dev" />
    <meta
      property="og:description"
      content="Soy Frontend Developer hace +3 años y vivo en Buenos Aires-Argentina. 
        Actualmente me encuentro estudiando Análisis en Sistemas en el Instituto Beltran."
    />
    <meta
      property="og:image"
      content="https://tecknchips.now.sh/images/test.png"
    />
  </Head>
);

export default CustomHead;
