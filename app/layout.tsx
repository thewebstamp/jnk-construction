import type { Metadata } from 'next';
import { Josefin_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

// Josefin Sans for body/paragraph text
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

// Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'JNK Construction Inc | General Contractor Since 2005 | Southbay, CA',
  description: 'Licensed general contractor since 2005 specializing in new construction, remodeling, additions, and ADUs for residential & commercial projects in Southbay, CA.',
  keywords: [
    'general contractor',
    'construction',
    'remodeling',
    'ADU',
    'home addition',
    'commercial construction',
    'Southbay',
    'California',
    'licensed contractor',
    'construction company'
  ].join(', '),
  authors: [{ name: 'JNK Construction Inc' }],
  creator: 'JNK Construction Inc',
  publisher: 'JNK Construction Inc',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jnkconstructioninc.vercel.app',
    title: 'JNK Construction Inc | General Contractor Since 2005',
    description: 'Licensed general contractor specializing in new construction, remodeling, additions, and ADUs.',
    siteName: 'JNK Construction Inc',
    images: [
      {
        url: '/images/holder.jpeg',
        width: 1200,
        height: 630,
        alt: 'JNK Construction Inc Professional Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JNK Construction Inc | General Contractor Since 2005',
    description: 'Licensed general contractor specializing in new construction, remodeling, additions, and ADUs.',
    images: ['/images/holder.jpeg'],
    creator: '@jnkconstructioninc',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add Google Search Console verification here when available
    // google: 'verification_token',
  },
  alternates: {
    canonical: 'https://jnkconstructioninc.vercel.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'JNK Construction Inc',
  image: 'https://jnkconstructioninc.com/images/JNK Logo.png',
  '@id': 'https://jnkconstructioninc.com',
  url: 'https://jnkconstructioninc.com',
  telephone: '+1-213-269-8224',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Southbay',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7922, // Approximate Southbay coordinates - update with exact
    longitude: -118.3319,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [
    'https://www.instagram.com/jnkconstructioninc/',
  ],
  knowsAbout: [
    'New Construction',
    'Remodeling',
    'Home Additions',
    'ADU Construction',
    'Commercial Construction',
    'General Contracting'
  ],
  foundingDate: '2005',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.7922,
      longitude: -118.3319,
    },
    geoRadius: '50000', // 50km radius
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}