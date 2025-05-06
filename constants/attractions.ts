import { Attraction } from "@/common/types";

const gp = (lat: number, lng: number) => ({
  latitude: lat,
  longitude: lng,
});

// TODO: add more attractions
// TODO: expand the overview to include more details
// TODO: check geolocation
// TODO: add more images
export const attractions: Attraction[] = [
  {
    id: "golden-gate-bridge",
    name: "Golden Gate Bridge",
    overview: `The Golden Gate Bridge is more than a marvel of engineering—it's a symbol of San Francisco and a must-visit destination for travelers from around the world. Completed in 1937, this iconic suspension bridge stretches over the Golden Gate Strait, connecting San Francisco to Marin County with its striking Art Deco design and International Orange hue.

Visitors can walk or bike along dedicated pathways, offering breathtaking views of the city skyline, Alcatraz Island, and the vast Pacific Ocean. Early mornings and evenings provide dramatic backdrops with fog rolling in or golden sunsets painting the sky. Interpretive signage explains the history and construction of the bridge, adding educational value to the visit.

Nearby, you'll find scenic overlooks, including Battery Spencer and Vista Point, perfect for photographs. The bridge’s pedestrian paths are open daily, and guided tours are available for those interested in deeper historical context. Whether you're an architecture enthusiast, nature lover, or history buff, the Golden Gate Bridge offers a rich blend of beauty, culture, and engineering wonder.

It's not just a way to cross the bay—it’s an unforgettable journey into the heart of San Francisco’s spirit
    `.trim(),
    location: gp(37.8199, -122.4783),
    images_landscape: [
      "https://images.unsplash.com/photo-1719858403364-83f7442a197e",
      "https://images.unsplash.com/photo-1675186253735-c1240f66dbc8",
    ],
    images_portrait:
      "https://images.unsplash.com/photo-1719858403455-9a2582eca805?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special:
      "Pedestrian walkways open daily from 5 AM to 6 PM. Don't miss the sunset!",
    tags: ["Building", "Views"],
  },
  {
    id: "transamerica-pyramid",
    name: "Transamerica Pyramid",
    overview: `
      The Transamerica Pyramid is one of San Francisco’s most recognizable architectural landmarks, towering over the Financial District with its distinctive tapered shape. Completed in 1972 and designed by architect William Pereira, the building stands at 853 feet tall, making it the second-tallest structure in the city.

While the building is primarily a commercial office space, its unique silhouette has become a defining part of the San Francisco skyline, often featured in films and postcards. The design maximizes natural light at street level and was initially controversial, later becoming a beloved icon of the city’s forward-thinking ethos.

Although visitors cannot access the top floors, the base of the building houses Redwood Park—a tranquil public space with mature redwood trees, a reflecting pool, and sculptures that provide a peaceful escape from the urban hustle.

For those interested in architecture and urban history, the Transamerica Pyramid offers a glimpse into the city’s mid-20th century growth and identity. It's not just a building—it's a symbol of San Francisco’s ambition and resilience, rising proudly in the city’s vibrant core.

    `.trim(),
    location: gp(37.7952, -122.4028),
    images_landscape: [
      "https://images.unsplash.com/photo-1487186431619-869dc62557b6",
      "https://images.unsplash.com/photo-1730993688407-38b8663208b7",
    ],
    images_portrait:
      "https://images.unsplash.com/photo-1519627745017-8f1c7ec8d37d?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Observation deck closed on Mondays. Check opening hours online.",
    tags: ["Building"],
  },
  {
    id: "grandview-park",
    name: "Grandview Park",
    overview:
      "Grandview Park, often referred to as Turtle Hill by locals, is a serene hilltop gem tucked away in San Francisco’s Sunset District. Despite its modest size, it offers some of the most breathtaking 360-degree views of the city—spanning from downtown San Francisco to Ocean Beach, the Marin Headlands, and even Mount Tamalpais on clear days. Reaching the summit requires a short but steep climb via the famous Moraga Steps, a vibrant mosaic-tiled staircase that adds artistic charm to the journey. Once at the top, visitors are rewarded with peaceful solitude and panoramic sights that make it a favorite spot for photographers and nature lovers alike. The park’s elevation and coastal exposure also make it an excellent vantage point for watching fog roll over the city. With native plants, sandy trails, and limited crowds, Grandview Park is the perfect place to pause, reflect, and appreciate San Francisco from above.", // :contentReference[oaicite:0]{index=0}
    location: gp(37.7564, -122.473),
    images_landscape: [
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Grandview_Park_from_UCSF_Parnassus%2C_March_2019.JPG",
    ],
    images_portrait:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Grandview_Park_from_UCSF_Parnassus%2C_March_2019.JPG",
    special: "Tiny summit reached via the Moraga mosaic steps.",
    tags: ["Views", "Parks"],
  },
  {
    id: "golden-gate-park",
    name: "Golden Gate Park",
    overview:
      "Spanning over 1,000 acres, Golden Gate Park is San Francisco’s expansive urban oasis—larger than New York’s Central Park—and home to a stunning mix of nature, culture, and recreation. Designed in the 1870s to transform sandy dunes into verdant parkland, the park now boasts gardens, lakes, museums, trails, and hidden gems around every corner. Iconic sites include the Conservatory of Flowers, the Japanese Tea Garden, Stow Lake, and the Bison Paddock. The park is also home to two world-class museums: the de Young Museum and the California Academy of Sciences. Whether you're looking to jog under towering eucalyptus trees, paddleboat in a lake, attend an outdoor concert, or simply relax on a sunny meadow, Golden Gate Park has something for everyone. With seasonal flower blooms, weekend food trucks, and cultural festivals, it serves as a living, breathing heart of the city—a gathering place for both locals and visitors year-round.",
       // :contentReference[oaicite:1]{index=1}
    location: gp(37.7694, -122.4862),
    images_landscape: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    ],
    images_portrait:
      "https://apassionandapassport.com/wp-content/uploads/2021/03/Golden-Gate-Park-Conservatory-of-Flowers-San-Francisco-scaled.jpg",
    special: "Iconic spots include the Conservatory of Flowers and Stow Lake.",
    tags: ["Views", "Parks"],
  },
  {
    id: "de-young-museum",
    name: "de Young Museum",
    overview:
      "The de Young Museum, located in the heart of Golden Gate Park, is one of San Francisco’s premier destinations for fine arts and culture. Its striking copper-clad architecture blends contemporary design with natural surroundings, while its collections span centuries and continents. Inside, you'll find American art from the 17th through 21st centuries, textiles from around the globe, and rotating exhibitions that showcase both traditional and modern forms. The museum is known not just for its art, but also for its immersive layout and the Hamon Observation Tower, which offers sweeping 360-degree views of the park and the city skyline. Whether you’re admiring a Georgia O’Keeffe painting, exploring African sculptures, or enjoying an art-themed family day, the de Young invites you to engage deeply with visual culture. With accessible galleries, lush outdoor sculpture gardens, and a lively café, the museum offers an enriching experience for casual visitors and art lovers alike.", // :contentReference[oaicite:2]{index=2}
    location: gp(37.7715, -122.4687),
    images_landscape: [
      "https://images.unsplash.com/photo-1516975557698-71ba6bdc4407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1659831649351-d8047305b1e9?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait:
      "https://images.unsplash.com/photo-1516975557698-71ba6bdc4407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Hamón Observation Tower offers a free 360° view.",
    tags: ["Museums"],
  },
  {
    id: "saint-josephs-arts-society",
    name: "Saint Joseph’s Arts Society",
    overview:
      "Housed in a restored 1913 Romanesque church, Saint Joseph’s Arts Society is a visionary blend of sacred architecture and avant-garde creativity. Once a place of worship, the church has been reimagined by designer Ken Fulk into a members-only cultural salon and exhibition space. The soaring ceilings, ornate stained glass, and original columns provide a stunning backdrop for rotating displays of contemporary art, design, and fashion. It's not just a gallery—it's a curated experience where art and architecture converse. The venue hosts exclusive events, including gallery openings, pop-up shops, and interdisciplinary performances that draw San Francisco’s creative elite. Visitors often describe it as a place that blurs the line between museum and installation, offering both inspiration and intimacy. By preserving the grandeur of its ecclesiastical roots while nurturing modern artistic expression, Saint Joseph’s stands as a beacon of cultural renewal and one of the city’s most unique artistic spaces..", // :contentReference[oaicite:3]{index=3}
    location: gp(37.7703, -122.41),
    images_landscape: [
      "https://www.habituallychic.luxury/wp-content/uploads/2018/11/ken-fulk-saint-josephs-arts-society-san-francisco-habituallychic-000-1024x822.jpg",
    ],
    images_portrait:
      "https://www.habituallychic.luxury/wp-content/uploads/2018/11/ken-fulk-saint-josephs-arts-society-san-francisco-habituallychic-001-768x1024.jpg",
    special: "Hosts pop-up exhibitions and fashion events.",
    tags: ["Culture"],
  },
  {
    id: "sfmoma",
    name: "SFMOMA",
    overview:
      "The San Francisco Museum of Modern Art (SFMOMA) is one of the largest and most influential modern and contemporary art museums in the United States. Spread across seven floors, the museum houses a diverse collection of over 33,000 artworks, including painting, sculpture, photography, architecture, design, and media arts. It features iconic works by artists like Frida Kahlo, Andy Warhol, Jackson Pollock, and Louise Bourgeois. The museum’s 2016 expansion introduced soaring galleries, tranquil sculpture terraces, and interactive exhibits. Visitors are invited to wander through both permanent collections and ever-changing temporary exhibitions that challenge and inspire. Beyond the art, the building itself—designed by Snøhetta and Mario Botta—is an architectural landmark with sweeping staircases and a living wall of native plants. Located in the heart of downtown SF, SFMOMA also includes a café and museum store, making it a cultural cornerstone for locals and tourists seeking creativity and reflection in the city.", // :contentReference[oaicite:4]{index=4}
    location: gp(37.7857, -122.4011),
    images_landscape: [
      "https://images.unsplash.com/photo-1690781721286-634f6eaffca7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1686612939338-1e825b993509?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait:
      "https://images.unsplash.com/photo-1687832785926-676bbc956f76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Public staircase atrium is free to enter.",
    tags: ["Museums"],
  },
  {
    id: "legion-of-honor",
    name: "Legion of Honor",
    overview:
      "Perched on a bluff in Lincoln Park, the Legion of Honor is a Beaux-Arts-style museum offering sweeping views of the Pacific Ocean and Golden Gate Bridge. Modeled after the Palais de la Légion d’Honneur in Paris, the museum houses an impressive collection of European paintings, decorative arts, ancient artifacts, and one of the best collections of Rodin sculptures in the U.S., including The Thinker at the museum’s entrance. Inside, visitors can explore galleries filled with works by Rembrandt, Monet, and El Greco, as well as rotating special exhibitions. The neoclassical architecture and serene setting make it a peaceful retreat for art lovers and history enthusiasts alike. Its cliffside location also connects to nearby walking trails, including Lands End. Whether visiting for the art or the dramatic coastal vistas, the Legion of Honor offers a uniquely elegant and enriching cultural experience in San Francisco.", // :contentReference[oaicite:5]{index=5}
    location: gp(37.784, -122.5008),
    images_landscape: [
      "https://images.unsplash.com/photo-1600856506316-db98a9808c8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait:
      "https://images.unsplash.com/photo-1600856506316-db98a9808c8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Rodin’s *Thinker* greets visitors in the courtyard.",
    tags: ["Museums"],
  },
  {
    id: "haight-street",
    name: "Haight Street",
    overview:
      "Haight Street, and the surrounding Haight-Ashbury neighborhood, is the historic heart of San Francisco’s countercultural revolution. In the 1960s, it became world-famous as the epicenter of the “Summer of Love,” drawing musicians, artists, and free spirits from around the globe. Today, Haight Street retains that eclectic spirit with a vibrant mix of vintage shops, psychedelic murals, smoke shops, record stores, and funky cafés. Landmarks like the Red Victorian and Amoeba Music keep the neighborhood’s bohemian energy alive. Victorian houses painted in vibrant colors line the street, many still adorned with peace signs and tributes to icons like Janis Joplin and Jimi Hendrix. While the area has evolved, it remains a must-visit destination for those seeking a blend of local culture, music history, and alternative fashion. Whether you’re thrifting, photographing street art, or simply people-watching, Haight Street is a living tribute to San Francisco’s rebellious soul.", // :contentReference[oaicite:6]{index=6}
    location: gp(37.7691, -122.4481),
    images_landscape: [
      "https://images.unsplash.com/photo-1625779609820-e97ce648da5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait: "https://images.unsplash.com/photo-1625779609820-e97ce648da5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special:
      "Look for psychedelic Victorian façades near Haight-Ashbury corner.",
    tags: ["Culture"],
  },
  {
    id: "alta-plaza-park",
    name: "Alta Plaza Park",
    overview:
      "Alta Plaza Park is a peaceful, elegant park perched in San Francisco’s Pacific Heights neighborhood, offering panoramic views of the city, bay, and surrounding hills. Divided into tiered levels, the park features wide open lawns, shaded benches, tennis courts, a children’s playground, and a grand staircase that cascades down its southern slope. Its elevated position makes it an ideal place to watch the sunrise, enjoy a sunset picnic, or simply take in the architectural beauty of nearby mansions and historic homes. The atmosphere is calm and refined—frequented by dog walkers, families, and local residents who enjoy its spacious layout and quiet charm. On clear days, the park offers views all the way to the Marin Headlands and Golden Gate Bridge. Whether you’re exercising, relaxing, or admiring cityscapes, Alta Plaza Park provides a refreshing escape within one of San Francisco’s most prestigious neighborhoods.", // :contentReference[oaicite:7]{index=7}
    location: gp(37.7914, -122.4351),
    images_landscape: [
      "https://images.unsplash.com/photo-1594710271661-7c75567e7e05?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait: "https://images.unsplash.com/photo-1594710271661-7c75567e7e05?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Popular sunset picnic spot for Pacific Heights locals.",
    tags: ["Parks", "Views"],
  },
  {
    id: "cathedral-of-saint-mary",
    name: "Cathedral of St. Mary of the Assumption",
    overview:
      "The Cathedral of St. Mary of the Assumption stands as a striking example of modernist architecture and spiritual innovation. Completed in 1971, its iconic saddle-shaped roof and white concrete exterior make it a unique landmark on the San Francisco skyline. Designed by a team including renowned architect Pier Luigi Nervi, the cathedral departs from traditional forms, embracing geometric minimalism that reflects both grandeur and serenity. Inside, sunlight filters through stained glass to illuminate a vast, soaring interior that draws the eye upward—enhancing the feeling of transcendence. The cathedral serves as the principal church of the Archdiocese of San Francisco and regularly hosts liturgical celebrations, concerts, and public events. With its emphasis on modern design, acoustics, and space, it appeals to both worshippers and architecture enthusiasts. The Cathedral of St. Mary is not only a place of worship, but also a meditative, artistic, and cultural experience within the city.", // :contentReference[oaicite:8]{index=8}
    location: gp(37.792, -122.4269),
    images_landscape: [
      "https://images.unsplash.com/photo-1698284283813-06c9a1d1f904?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610880006969-bf397569df14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait: "https://images.unsplash.com/photo-1664762637832-57fc697d3fea?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "Hosts choral concerts and an expansive event hall.",
    tags: ["Building", "Culture"],
  },
  {
    id: "sutro-heights",
    name: "Sutro Heights Park",
    overview:
      "Sutro Heights Park offers a quiet, scenic escape perched above Ocean Beach and the Cliff House. Once the estate of Adolph Sutro—former San Francisco mayor and visionary engineer—the park was once home to elaborate gardens, a glass conservatory, and marble statuary. Though many original structures are gone, remnants like the stone lion gateposts and decorative urns still whisper the grandeur of its past. Today, visitors can wander shaded paths, enjoy ocean breezes, and take in sweeping views of the Pacific and Seal Rocks. It’s a favorite spot for quiet walks, photography, and peaceful reflection away from busier tourist areas. The park connects with the larger Lands End trail system, making it a great starting point for a coastal hike. With its blend of history, natural beauty, and ocean views, Sutro Heights remains one of San Francisco’s hidden gems—ideal for those seeking tranquility and a glimpse into the city’s Victorian-era opulence.", // :contentReference[oaicite:9]{index=9}
    location: gp(37.7781, -122.5131),
    images_landscape: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
    images_portrait: "",
    special: "Statue garden remnants and views down Ocean Beach.",
    tags: ["Views", "Parks"],
  },
  {
    id: "painted-ladies",
    name: "Painted Ladies",
    overview:
      "The Painted Ladies are a postcard-perfect row of colorful Victorian and Edwardian homes along Alamo Square, instantly recognizable from films, TV shows, and travel brochures. These homes earned their name because of the multicolored palettes used to accentuate their intricate architectural details—gingerbread trim, bay windows, and steep gables. Built between the late 1800s and early 1900s, they’ve become symbols of San Francisco’s historical charm and resilience, having survived major earthquakes and decades of urban change. The view from Alamo Square Park, with the Painted Ladies in the foreground and downtown’s skyscrapers behind, captures the city’s blend of past and present in a single frame. Visitors often come to picnic, relax, or take photos of this quintessential SF scene. Some tours even offer interior visits to homes like the Blue Painted Lady. These houses are more than beautiful façades—they’re enduring icons of San Francisco’s architectural heritage..",
    location: gp(37.7761, -122.4327),
    images_landscape: [
      "https://images.unsplash.com/photo-1667242436629-012eb64dddce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1644469231350-15045c4677bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait: "https://images.unsplash.com/photo-1646957452956-405937c0f441?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "The Painted Ladies in San Francisco offer various tour options, including guided walking tours, bus tours, and even GoCar tours. Some tours focus on the exterior architecture, while others offer interior house tours of specific homes, like the Blue Painted Lady.",
    tags: ["Building", "Views"],
  },
  {
    id: "lands-end",
    name: "Lands End",
    overview:
      "Lands End is one of San Francisco’s most breathtaking natural areas, offering rugged coastal cliffs, dramatic ocean vistas, and a trail system that weaves through cypress groves and historic landmarks. Situated within the Golden Gate National Recreation Area, this park offers a welcome escape from the city, with winding trails that lead to scenic viewpoints, hidden beaches, and the ruins of Sutro Baths. The Lands End Lookout visitor center provides context about the area’s ecology and history, including shipwrecks just offshore. Along the main trail, hikers are rewarded with sweeping views of the Golden Gate Bridge and Marin Headlands. Benches and overlooks dot the path, encouraging moments of pause and reflection. Wildlife sightings—like hawks, pelicans, or even whales during migration—add to the magic. Whether you’re looking for a casual walk or a more immersive nature experience, Lands End delivers a uniquely wild and peaceful side of San Francisco.",
    location: gp(37.7802, -122.5131),
    images_landscape: [
      "https://images.unsplash.com/photo-1728404294639-3f8e8e7d4019?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1573752356735-1d0f0e62d4cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    images_portrait: "https://images.unsplash.com/photo-1724856699044-d64f4e654982?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    special: "The Lands End Lookout, which opened on April 28, 2012, is a major milestone achievement in the revitalization of Lands End, catalyzed by the generosity of the Richard and Rhoda Goldman Fund. Inspired by the spectacular Pacific coastline, this 4,150-square-foot visitor center draws from the natural landscape and cultural history of this remarkable site, utilizing a blend of modern and naturally-sustainable materials.",
    tags: ["Views", "Parks"],
  },
  {
    id: "coit-tower",
    name: "Coit Tower",
    overview:
      "Coit Tower rises above Telegraph Hill like a sentinel of the city, offering 360-degree views of San Francisco and the bay from its observation deck. Built in 1933 with funds from Lillie Hitchcock Coit, a wealthy eccentric and patron of the city’s firefighters, the tower is an enduring symbol of civic pride and quirky local history. The Art Deco exterior conceals an interior adorned with Depression-era frescoes—murals painted by local artists as part of the New Deal Public Works of Art Project. These murals depict life in 1930s California, filled with social commentary, vibrant color, and extraordinary detail. A short elevator ride takes visitors to the top, where sweeping views include landmarks like Alcatraz, the Golden Gate Bridge, and the Transamerica Pyramid. Surrounded by gardens and flocks of wild parrots, Coit Tower is not only a visual landmark, but also a cultural and historical touchstone for the city.",
    location: gp(37.8024, -122.4058),
    images_landscape: [
      "https://images.unsplash.com/photo-1631040933970-91618e01db47",
      "https://images.unsplash.com/photo-1631343202734-f11d71bea870",
    ],
    images_portrait: "https://images.unsplash.com/photo-1487186431619-869dc62557b6",
    special: "Coit Tower in San Francisco offers guided tours that can be purchased on-site, costing $10 per person for a full tour of the murals, or $5 for a tour of the second floor only.",
    tags: ["Building", "Views", "Culture"],
  },

  
  {
  id: "twin-peaks",
  name: "Twin Peaks",
  overview: `Twin Peaks stands at the geographic center of San Francisco, offering one of the most stunning panoramic views of the city. This pair of 922-foot-high hills provides an almost 360-degree vantage point, where on clear days, you can see downtown San Francisco, the Bay Bridge, Alcatraz, Sutro Tower, and even Mount Diablo in the distance. Accessible by car or via hiking trails, Twin Peaks is popular with both tourists and locals, especially around sunrise or sunset when the sky transforms over the city skyline. The area retains a rugged natural landscape, home to native grasses, butterflies, and wildflowers, and the cool, often fog-swept air adds a mystical quality. At night, city lights shimmer below in every direction. Though it's just a short drive from bustling neighborhoods, Twin Peaks feels worlds away—providing perspective not only of the city layout, but of its natural beauty and dramatic topography.
  `.trim(),
  location: gp(37.7544, -122.4477),
  images_landscape: [
    "https://images.unsplash.com/photo-1590760161855-117791fe9b76?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565723259601-b8d3b9ec4697?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1590760161855-117791fe9b76?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "Twin Peaks in San Francisco offers various ways to experience it, including guided tours and a unique 'Skip the Bus' option. Tripadvisor lists several tours, like the San Francisco Grand City Tour and a private tour in a Mini Cooper.",
  tags: ["Views", "Parks"],
},
{
  id: "ferry-building",
  name: "Ferry Building Marketplace",
  overview: `
The Ferry Building Marketplace is a vibrant hub of local culture, food, and commerce situated along the Embarcadero. Originally completed in 1898 as a transportation terminal, the building’s Beaux-Arts façade and iconic clock tower now house one of San Francisco’s most beloved culinary destinations. Inside, the vaulted Nave hosts an array of artisanal vendors offering everything from farm-fresh produce and gourmet cheese to freshly baked bread, craft coffee, and small-batch chocolate. Outside, the Ferry Plaza Farmers Market draws thousands weekly with its selection of Northern California’s best produce and street food. Whether you’re grabbing a casual bite, shopping for unique gifts, or taking in views of the Bay Bridge and ferries gliding by, the Ferry Building combines San Francisco’s historic charm with its food-obsessed spirit. It’s more than just a marketplace—it’s a community gathering point that celebrates the region’s agricultural roots and modern culinary innovation.
  `.trim(),
  location: gp(37.7955, -122.3937),
  images_landscape: [
    "https://images.unsplash.com/photo-1664058134993-bdabe0a5534d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1656717215850-08e53a4a62b7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1718552266845-9a0736e17c00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "The Ferry Plaza Farmers Market is adjacent to the Ferry Building on Tuesdays and Thursdays from 10 a.m. to 2 p.m. and Saturdays from 8 a.m. to 2 p.m. The market attracts around 40,000 shoppers every week. The crowds come for fresh, local produce and artisan offerings including breads and cheeses. The Thursday market offers street food, and on Saturdays, a number of local restaurants come out to showcase items from their menus.",
  tags: ["Culture", "Building"],
},
{
  id: "alcatraz-island",
  name: "Alcatraz Island",
  overview: `
Alcatraz Island, often referred to simply as “The Rock,” lies just over a mile offshore from San Francisco and is steeped in history, mystery, and dramatic transformation. Once a fortress, then a military prison, and later a maximum-security federal penitentiary, Alcatraz housed infamous criminals like Al Capone and "Machine Gun" Kelly. Though its prison closed in 1963, the island has since become a powerful symbol of resilience and change. Today, it is managed by the National Park Service and welcomes visitors to explore its hauntingly preserved cell blocks, gardens, and lighthouse. Audio tours narrated by former inmates and guards bring its layered past to life. The night tours are especially atmospheric, offering eerie views of the city skyline and Golden Gate Bridge under moonlight. Alcatraz also played a role in Native American civil rights activism, adding cultural depth to its legacy. It's both a historical landmark and a must-visit experience.
  `.trim(),
  location: gp(37.8267, -122.4230),
  images_landscape: [
    "https://images.unsplash.com/photo-1515022817163-08c759ea4512?q=80&w=1811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501596224950-a41402fbc362?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1501596224950-a41402fbc362?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "Advance reservations Alcatraz Island offers various special tours and events. The Alcatraz Night Tour provides an unique evening experience with special programs, tours, and activities not offered during the day, including a sunset view of the Golden Gate Bridge and evening talks by historians.; includes ferry ride and audio tour.",
  tags: ["Views"],
},
{
  id: "chinatown",
  name: "Chinatown",
  overview: `
San Francisco’s Chinatown is the oldest and one of the most vibrant Chinese communities in North America, brimming with rich culture, history, and culinary delights. Enter through the ornate Dragon Gate at Grant Avenue and Bush Street and find yourself in a world of bustling markets, herbal medicine shops, ornate temples, and dim sum eateries. The streets are adorned with red lanterns and murals that tell stories of immigration, resilience, and identity. Founded in the 1850s, this neighborhood has weathered everything from exclusion laws to earthquakes, preserving its traditions while also evolving with the times. Popular stops include the Golden Gate Fortune Cookie Factory, Tin How Temple, and the bustling Stockton Street markets. Whether you're sampling pork buns, browsing jade jewelry, or simply walking the atmospheric alleys, Chinatown offers a unique and authentic slice of San Francisco. It’s not just a neighborhood—it’s a living, breathing cultural landmark.
  `.trim(),
  location: gp(37.7941, -122.4078),
  images_landscape: [
    "https://images.unsplash.com/photo-1593022910074-3db767d47f80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672636007096-f183b129b3c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1700591958050-bb6d9d372aaa?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "Don't miss the Dragon Gate at Grant Avenue and Bush Street.",
  tags: ["Culture", "Neighborhoods", "Food"],
},
{
  id: "exploratorium",
  name: "Exploratorium",
  overview: `
The Exploratorium is more than a museum—it’s an immersive, hands-on learning playground where science, art, and curiosity collide. Located along San Francisco’s waterfront at Pier 15, this unique institution invites guests of all ages to explore over 600 interactive exhibits covering topics like physics, biology, perception, and human behavior. Whether you're freezing your shadow, watching fog swirl in a wind tunnel, or playing with light and sound, every exhibit is designed to engage the senses and spark wonder. Founded in 1969 by physicist Frank Oppenheimer, the Exploratorium redefined how museums interact with the public by focusing on discovery through experimentation. It also offers outdoor exhibits with views of the Bay Bridge and a glass-walled café. The After Dark program offers adults-only evenings with drinks and DJs. The Exploratorium isn’t just about answers—it’s about asking the right questions and rediscovering the joy of learning.
  `.trim(),
  location: gp(37.8008, -122.3985),
  images_landscape: [
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npd48pNH6Xf_Fnwjtp9Ohgj8op2QiECb5WCILq1NwoAtbO2pTnzc5gjctmVupe0DqkYsnC5_Q1M8rCZoeFbliUkED_s0e7NnOB5DKmCsaAE5OwOYjAmkz1HKfgyrmxlO_MPNLUd8g=s1360-w1360-h1020-rw",
    "https://www.aga-ca.com/wp-content/uploads/2021/04/exploratorium-01-glazing.jpg",
  ],
  images_portrait: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npd48pNH6Xf_Fnwjtp9Ohgj8op2QiECb5WCILq1NwoAtbO2pTnzc5gjctmVupe0DqkYsnC5_Q1M8rCZoeFbliUkED_s0e7NnOB5DKmCsaAE5OwOYjAmkz1HKfgyrmxlO_MPNLUd8g=s1360-w1360-h1020-rw",
  special: "Present your card and matching ID at the Ticketing Desk to purchase four Daytime or After Dark (ages 18+) tickets for $3 each, a Daytime Family Explorers membership for $35, or a Dual After Dark membership (ages 18+) for $19.",
  tags: ["Museums", "Science", "Family"],
},
{
  id: "mission-dolores-park",
  name: "Mission Dolores Park",
  overview: `
Mission Dolores Park is a beloved green oasis nestled in the heart of San Francisco’s Mission District, offering breathtaking views of the city skyline and a vibrant, inclusive community vibe. Spanning nearly 16 acres, the park is a favorite for sunbathers, picnickers, dog walkers, and musicians. On any given day, especially sunny weekends, you’ll find locals and visitors alike sprawled out on its grassy slopes, tossing frisbees, enjoying impromptu dance circles, or sipping cold drinks while people-watching. The park features palm-lined paths, tennis courts, a soccer field, a playground, and the iconic Hunky Jesus contest held during Easter. It’s also home to Mission High School and just a stone’s throw from Mission Dolores, the oldest surviving structure in San Francisco. With its unique blend of recreation, culture, and open-air community gathering, Dolores Park perfectly captures the laid-back, expressive spirit of the city it serves.
  `.trim(),
  location: gp(37.7596, -122.4269),
  images_landscape: [
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoqE4nwt6784iqP3JG54JOti5hpvRL2632a9IAMiuF5s7SxThhT86Tx5Ivg4rcdzTfclFKAf8CNZyCYpGw6W6HHLVJLV6g5MW5wW_cbX3aU-0LtBGf7N5mYiCEHm0gnGTj-ZgM=w270-h312-n-k-no",
  ],
  images_portrait: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoqE4nwt6784iqP3JG54JOti5hpvRL2632a9IAMiuF5s7SxThhT86Tx5Ivg4rcdzTfclFKAf8CNZyCYpGw6W6HHLVJLV6g5MW5wW_cbX3aU-0LtBGf7N5mYiCEHm0gnGTj-ZgM=w270-h312-n-k-no",
  special: "Mission Dolores Park in San Francisco is known for its large, open green spaces, vibrant atmosphere, and stunning city views. It's a popular spot for picnicking, relaxing, and people-watching, especially on weekends.",
  tags: ["Parks", "Views", "Recreation"],
},
{
  id: "cable-car-museum",
  name: "Cable Car Museum",
  overview: `
The Cable Car Museum offers a rare, behind-the-scenes glimpse into one of San Francisco’s most iconic modes of transportation. Housed in the historic Washington-Mason powerhouse and carbarn, the museum is more than a collection of artifacts—it’s an active hub where the city’s working cable car system is powered and maintained. Visitors can watch the massive winding wheels in action, pulling cables beneath the city’s steep streets. Exhibits showcase antique cable cars, historic photographs, and mechanical components that reveal the evolution of this unique transit technology. Opened in 1974 and operated by the nonprofit Market Street Railway, the museum also honors the inventors and workers who built and preserved this beloved tradition. Admission is free, making it a popular stop for tourists and locals alike. A visit here connects the past and present of San Francisco’s enduring charm and offers a mechanical marvel at the heart of the city's character.
  `.trim(),
  location: gp(37.7946, -122.4118),
  images_landscape: [
    "https://bartable.bart.gov/sites/default/files/styles/body_width_/public/images/discoveries/Sutter_Street_Trailer_No._54_-_San_Francisco_Cable_Car_Museum_-_San_Francisco%2C_CA_-_DSC04018.jpg?itok=ZxwNDjB0",
  ],
  images_portrait: "https://bartable.bart.gov/sites/default/files/styles/body_width_/public/images/discoveries/Sutter_Street_Trailer_No._54_-_San_Francisco_Cable_Car_Museum_-_San_Francisco%2C_CA_-_DSC04018.jpg?itok=ZxwNDjB0",
  special: "The Cable Car Museum in San Francisco offers special events throughout the year, including a unique opportunity to ride a restored cable car on Saturdays through October. These events showcase the history and mechanics of San Francisco's cable car system and allow visitors to experience a ride on a historic car.",
  tags: ["Museums", "History", "Transportation"],
},
{
  id: "the-presidio",
  name: "The Presidio",
  overview: `
Once a military post and now a national park, the Presidio is a 1,500-acre green sanctuary at the northern tip of San Francisco, rich in history and brimming with scenic beauty. Originally a Spanish fort established in 1776, it later became a U.S. Army base before transitioning into a part of the Golden Gate National Recreation Area. Today, it’s home to hiking trails, beaches, scenic overlooks, art installations, museums, and even housing and businesses. Landmarks like Crissy Field, the Walt Disney Family Museum, and the newly developed Tunnel Tops make it an ideal blend of urban park and cultural center. Wildlife sightings, picnics with Golden Gate views, and forest walks under eucalyptus groves are just a few of its everyday delights. Whether you're jogging past historic barracks, enjoying food trucks, or watching kids run through nature play areas, the Presidio offers an ever-changing but deeply rooted San Francisco experience.
  `.trim(),
  location: gp(37.7989, -122.4662),
  images_landscape: [
    "https://www.parksconservancy.org/sites/default/files/styles/hero_desktop/public/hero/PRSF_180404_ATB_172_Hero.jpg?itok=3yB5fISV&timestamp=1541438945",
    "https://www.ytravelblog.com/wp-content/uploads/2019/06/the-presidio-san-francisco-1-1.jpg",
  ],
  images_portrait: "https://www.parksconservancy.org/sites/default/files/styles/hero_desktop/public/hero/PRSF_180404_ATB_172_Hero.jpg?itok=3yB5fISV&timestamp=1541438945",
  special: "The Inn at the Presidio in San Francisco offers a special rate for National Trust for Historic Preservation members, potentially saving up to 30%.",
  tags: ["Parks", "History", "Views"],
},
{
  id: "ghirardelli-square",
  name: "Ghirardelli Square",
  overview: `
Ghirardelli Square is a historic waterfront complex that merges old-world charm with modern-day indulgence. Once the site of the original Ghirardelli Chocolate Factory, the square has been thoughtfully transformed into a lively shopping and dining destination without losing its heritage. Its red-brick buildings and cobbled walkways are now home to boutique shops, artisanal eateries, wine bars, and of course, the famous Ghirardelli Ice Cream and Chocolate Shop—where sundaes are legendary. Listed on the National Register of Historic Places, the square offers views of the bay and nearby Aquatic Park, making it a relaxing stop near Fisherman’s Wharf. From families seeking a treat to couples enjoying sunset views with a glass of wine, Ghirardelli Square serves a wide range of visitors. Seasonal events, live music, and the sweet scent of chocolate in the air complete the experience. It’s a delicious slice of San Francisco history with something for everyone.
  `.trim(),
  location: gp(37.8058, -122.4228),
  images_landscape: [
    "https://www.ghirardelli.com/media/wysiwyg/gcc_gcm_angle.jpg",
  ],
  images_portrait: "https://www.ghirardelli.com/media/wysiwyg/gcc_gcm_angle.jpg",
  special: "Ghirardelli Square offers various deals, including discounts on food, drinks, and merchandise, as well as parking discounts. Specifically, they offer 10% off your check, $1 off standard 16oz pints of beer on Thursdays, 20% off Wine Club flights, and 15% off in-store purchases.",
  tags: ["Shopping", "Food", "History"],
},
{
  id: "lombard-street",
  name: "Lombard Street",
  overview: `
Lombard Street is one of San Francisco’s most iconic and photographed landmarks, known for its eight dramatic switchbacks that twist down a steep Russian Hill slope. Nicknamed the “crookedest street in the world,” this short block between Hyde and Leavenworth Streets is beautifully landscaped with colorful flowers and framed by charming homes. The serpentine design was introduced in 1922 to reduce the street’s natural 27% grade, making it safer for vehicles—though today it’s more a tourist draw than a practical commute. Visitors flock to walk or drive down the winding stretch, pausing for photos and admiring the manicured gardens. It’s best experienced on foot, either from the top or bottom, to take in the city and bay views. While often busy, especially in peak season, Lombard Street remains a beloved example of San Francisco’s unique blend of engineering creativity, natural topography, and storybook aesthetics.
  `.trim(),
  location: gp(37.8021, -122.4187),
  images_landscape: [
    "https://plus.unsplash.com/premium_photo-1673483585905-439b19e0d30a?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604950426196-10eb825f55d3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://plus.unsplash.com/premium_photo-1673483585905-439b19e0d30a?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "Best viewed by walking down from the top; limited parking available.",
  tags: ["Views"],
},
{
  id: "oracle-park",
  name: "Oracle Park",
  overview: `
Oracle Park is not just a baseball stadium—it’s one of the most picturesque sports venues in the world. Home to the San Francisco Giants, the park sits right on the edge of the San Francisco Bay, offering stunning views of the water, Bay Bridge, and city skyline. Opened in 2000, Oracle Park blends classic ballpark charm with modern amenities. It features a towering Coca-Cola slide, a giant baseball glove sculpture, and the fan-favorite garlic fries. The stadium is designed with fans in mind, offering exceptional sightlines from every seat and a welcoming, family-friendly atmosphere. Even non-sports fans enjoy visiting for its behind-the-scenes tours, food offerings, and the chance to catch a home run ball in McCovey Cove by kayak. Whether you're watching a game or simply soaking in the views from the promenade, Oracle Park captures the spirit of San Francisco through community, tradition, and waterfront beauty.
  `.trim(),
  location: gp(37.7786, -122.3893),
  images_landscape: [
    "https://populous.com/uploads/2018/01/GettyImages-1387843786-Do-not-use-after-31MAR2025.jpg",
   
  ],
  images_portrait: "https://populous.com/uploads/2018/01/GettyImages-1387843786-Do-not-use-after-31MAR2025.jpg",
  special: "Offers behind-the-scenes tours and a giant Coca-Cola slide.",
  tags: ["Views", "Recreation"],
},
{
  id: "japanese-tea-garden",
  name: "Japanese Tea Garden",
  overview: `
  Tucked within Golden Gate Park, the Japanese Tea Garden is the oldest public Japanese garden in the United States, first established in 1894 for the California Midwinter International Exposition. It offers a peaceful, immersive landscape of pagodas, koi ponds, arched bridges, bonsai trees, and gravel paths designed with traditional Zen aesthetics. Visitors can explore winding trails that lead to hidden corners, offering a quiet retreat from the city's bustle. Seasonal highlights include blooming cherry blossoms in spring and fiery maple leaves in autumn. At its heart lies a historic teahouse, where guests can sip green tea and sample Japanese treats while overlooking tranquil water features. The garden is not just a visual delight—it’s a cultural experience that invites reflection and appreciation of nature’s harmony. Whether you're a photographer, nature lover, or simply in need of a quiet escape, the Japanese Tea Garden delivers beauty and serenity in every season.
  `.trim(),
  location: gp(37.7700, -122.4707),
  images_landscape: [
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Japanese_tea_garden_Golden_Gate_Park.JPG",
  ],
  images_portrait: "https://upload.wikimedia.org/wikipedia/commons/8/81/Japanese_tea_garden_Golden_Gate_Park.JPG",
  special: "Best visited during cherry blossom season in spring.",
  tags: ["Food", "Culture", "Views"],
},

{
  id: "sfo-airport",
  name: "San Francisco International Airport (SFO)",
  overview: `
SFO is one of the busiest airports on the West Coast, serving as a major international gateway and a hub for innovation in air travel. Beyond its flights, SFO features rotating art exhibits, a dedicated aviation museum, yoga rooms, and sustainable architecture that reflects the Bay Area's forward-thinking spirit.
  `.trim(),
  location: gp(37.6213, -122.3790),
  images_landscape: [
    "https://images.unsplash.com/photo-1522013962329-c23b5a678d18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744606569611-ed3ccd438d60?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1744606569611-ed3ccd438d60?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "BART connects SFO directly to downtown SF. Don’t miss the SkyTerrace outdoor observation deck in Terminal 2.",
  tags: ["Transportation"],
},
{
  id: "union-square",
  name: "Union Square",
  overview: `
Union Square is the  commercial and cultural heart of San Francisco, surrounded by upscale shops, historic hotels, art galleries, and theaters. Originally established as a rallying point during the Civil War, the square now serves as a bustling public plaza that hosts seasonal events, ice skating in winter, and live performances.
  `.trim(),
  location: gp(37.7879, -122.4074),
  images_landscape: [
    "https://images.unsplash.com/photo-1543495843-31be63139c87?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1576764894677-aac83a1d285e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  images_portrait: "https://images.unsplash.com/photo-1576764894677-aac83a1d285e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  special: "Visit during the holidays for giant Christmas trees and open-air skating. Powell Street cable car turnaround is nearby.",
  tags: ["Shopping", "Culture", "Parks"],
},

];
