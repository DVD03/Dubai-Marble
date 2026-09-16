const U = (id: string, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const imgs = {
  // Main Heroes
  heroBg:        U("1618221195710-dd6b41faaea6", 1920, 85), // luxury marble floor reflection
  aboutHero:     U("1600585154340-be6161a56a0c", 1600, 85), // luxury villa marble
  servicesHero:  U("1600565193348-f74bd3c7ccdf", 1600, 85), // elegant marble interior
  galleryHero:   U("1590381105924-c72589b9ef3f", 1600, 85), // luxury 5-star hotel lobby marble floor
  reviewsHero:   U("1582719478250-c89cae4dc85b", 1600, 85), // grand hall marble
  faqsHero:      U("1615529182904-14819c35db37", 1600, 85), // white marble texture
  blogHero:      U("1600585152220-90363fe7e115", 1600, 85), // luxury marble kitchen & floor
  bookingHero:   U("1600210492486-724fe5c67fb0", 1600, 85), // luxury marble living room
  contactHero:   U("1512917774080-9991f1c4c750", 1600, 85), // Dubai luxury villa

  // About Section Details
  aboutTeam:     U("1522202176988-66273c2fd55f", 900, 80),  // certified professional team
  aboutWork:     U("1558618666-fcd25c85cd64", 900, 80),     // diamond polishing machine
  aboutLobby:    U("1590381105924-c72589b9ef3f", 900, 80),  // 5-star hotel lobby

  // Services Specific Images
  svcFloor:      U("1618221195710-dd6b41faaea6", 800, 80),  // floor polishing
  svcCleaning:   U("1581578731548-c64695cc6952", 800, 80),  // deep cleaning
  svcGrinding:   U("1558618666-fcd25c85cd64", 800, 80),     // grinding & lippage
  svcCounter:    U("1556909114-f6e7ad7d3136", 800, 80),     // countertop polishing
  svcStain:      U("1615529182904-14819c35db37", 800, 80),  // stain removal
  svcCrack:      U("1600607687939-ce8a6c25118c", 800, 80),  // crack repair

  // Gallery Portfolio Items
  gal1:          U("1618221195710-dd6b41faaea6", 800, 80),  // Italian Carrara floor
  gal2:          U("1590381105924-c72589b9ef3f", 800, 80),  // Hotel lobby diamond finish
  gal3:          U("1556909114-f6e7ad7d3136", 800, 80),     // Kitchen island restoration
  gal4:          U("1600607687644-c7171b42498f", 800, 80),  // Dining marble crack repair
  gal5:          U("1584622650111-993a426fbf0a", 800, 80),  // Deep cleaning & grout
  gal6:          U("1600566753190-17f0baa2a6c3", 800, 80),  // Travertine restoration

  // Blog Thumbnails
  blog1:         U("1615529182904-14819c35db37", 800, 75),  // Desert dust & marble
  blog2:         U("1556911220-e15b29be8c8f", 800, 75),     // Cleaning products
  blog3:         U("1558618666-fcd25c85cd64", 800, 75),     // Grinding vs crystallization

  // Live Visual Proof Slider Images
  sliderBefore:  U("1615529182904-14819c35db37", 1400, 85), // dull scratched unpolished marble surface
  sliderAfter:   U("1618221195710-dd6b41faaea6", 1400, 85), // high-gloss 5-star mirror polished marble floor
};
