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
      streetAddress: 'Strada Lenin 192/8',
      addressLocality: 'Comrat',
      addressRegion: 'Gagauzia',
      postalCode: 'MD-3800',
      addressCountry: 'MD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.3014,
      longitude: 28.6575,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      bestRating: '5',
      worstRating: '1',
    },
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
