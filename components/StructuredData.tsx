import React from 'react'

const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GridsPro International - Dubai Marble Polishing",
    "alternateName": "Dubai Marble Polishing",
    "description": "Professional marble polishing, restoration, grinding, sealing & cleaning services in Dubai. 16+ years experience, 5-star hotel quality, free inspection.",
    "url": "https://dubaimarblepolishing.ae",
    "telephone": "+971522774953",
    "email": "info@dubaimarblepolishing.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Marina",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
      "postalCode": "00000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0762",
      "longitude": "55.1384"
    },
    "areaServed": [
      "Dubai Marina",
      "Downtown Dubai",
      "Palm Jumeirah",
      "Jumeirah",
      "Business Bay",
      "Dubai Hills",
      "Arabian Ranches",
      "The Greens",
      "JLT",
      "Dubai Internet City",
      "Dubai Media City",
      "Al Barsha",
      "Sheikh Zayed Road"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "serviceType": [
      "Marble Polishing",
      "Marble Restoration",
      "Marble Grinding",
      "Marble Sealing",
      "Stone Cleaning",
      "Crystallization",
      "Stain Removal",
      "Crack Repair",
      "Countertop Polishing",
      "Floor Restoration"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marble Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marble Floor Polishing",
            "description": "Professional marble floor polishing with Italian diamond technology"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Marble Restoration",
            "description": "Complete marble restoration services for dull and damaged surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Deep Cleaning",
            "description": "Deep cleaning and maintenance for marble and stone surfaces"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/dubaimarblepolishing",
      "https://www.instagram.com/dubaimarblepolishing",
      "https://www.linkedin.com/company/gridspro-international"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

export default StructuredData