import Head from 'next/head';
import { Formation } from '../lib/config/types';

interface FormationPageMetadataProps {
  formation: Formation;
}

export default function FormationPageMetadata({ formation }: FormationPageMetadataProps) {
  return (
    <Head>
      <title>{formation.title} | Seriosa 2.0</title>
      <meta name="description" content={formation.fullDescription} />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${formation.title} | Seriosa 2.0`} />
      <meta property="og:description" content={formation.fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={formation.image} />
      <meta property="og:site_name" content="Seriosa 2.0" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${formation.title} | Seriosa 2.0`} />
      <meta name="twitter:description" content={formation.fullDescription} />
      <meta name="twitter:image" content={formation.image} />
    </Head>
  );
}
