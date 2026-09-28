export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'A&V Poligraf SRL',
    image: 'https://avpoligraf.md/og-image.jpg',
    '@id': 'https://avpoligraf.md',
    url: 'https://avpoligraf.md',
    telephone: '+37379955020',
    email: 'avpoligraf@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Comrat',
      addressRegion: 'Gagauzia',
      addressCountry: 'MD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.2947,
      longitude: 28.6565,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    foundingDate: '2008',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
