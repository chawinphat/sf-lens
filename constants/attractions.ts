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
    overview: `
    Tucked away from the bustling main streets, this hidden gem remains one of the city's best-kept secrets, waiting patiently for curious explorers to uncover its charm. Stepping into this landmark feels like crossing a threshold into another time, where stories from generations past linger gracefully within its carefully preserved walls.

Visitors who discover this enchanting place are immediately captivated by its intricate architecture, blending ornate details with quiet elegance, whispering tales of the visionary artists and craftsmen who shaped its design. Each archway, carved facade, and stained-glass window is thoughtfully positioned, inviting your eyes to wander and your imagination to roam freely.

Beyond its physical beauty, the landmark carries a fascinating story. Originally built by a visionary architect who dreamed of creating an oasis of culture and beauty, it once served as a gathering place for artists, thinkers, and dreamers who shaped the city's creative heritage. Today, while maintaining its historical authenticity, the space continues to inspire visitors—inviting them to pause, reflect, and appreciate moments of serene beauty amidst urban life.

Come explore this quiet sanctuary where history, beauty, and imagination merge into an unforgettable experience. Here, you won't find large crowds or hurried tourists—only the timeless charm and captivating stories of a hidden treasure that's waiting patiently for you to discover it.
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
      A soaring icon of the SF skyline...
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
      "Hill-top open-space famous for its 360° vistas of downtown, Ocean Beach and the Marin headlands.", // :contentReference[oaicite:0]{index=0}
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
      "1,000-acre urban park laid out in 1870, now home to gardens, museums and endless trails.", // :contentReference[oaicite:1]{index=1}
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
      "Fine-arts museum in Golden Gate Park with American art, textiles and rotating contemporary shows.", // :contentReference[oaicite:2]{index=2}
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
      "A deconsecrated 1913 church reborn as a members-only art and design salon.", // :contentReference[oaicite:3]{index=3}
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
      "One of the largest modern-art museums in the U.S., spanning seven gallery floors downtown.", // :contentReference[oaicite:4]{index=4}
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
      "Beaux-Arts museum overlooking the Pacific, housing European paintings and ancient art.", // :contentReference[oaicite:5]{index=5}
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
      "Birthplace of 1960s counter-culture, still lined with vintage shops, murals and music venues.", // :contentReference[oaicite:6]{index=6}
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
      "Elegant hill-top green with sweeping bay views and a grand south-facing staircase.", // :contentReference[oaicite:7]{index=7}
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
      "Modernist 1971 cathedral famed for its saddle-roof silhouette and soaring interior vault.", // :contentReference[oaicite:8]{index=8}
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
      "Clifftop ruins of Adolph Sutro’s 19th-century estate, now offering quiet ocean vistas.", // :contentReference[oaicite:9]{index=9}
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
      "In American architecture, painted ladies are Victorian and Edwardian houses and buildings repainted, starting in the 1960s, in three or more colors that embellish or enhance their architectural details.",
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
      "Lands End is a park located on the West Side of San Francisco within the larger Golden Gate National Recreation Area. It is also the geographic name of a specific promontory next to the Pacific Ocean on the northwest side of the park.",
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
      "Coit Tower, a slender white concrete column rising from the top of Telegraph Hill, has been an emblem of San Francisco’s skyline since its completion in 1933, a welcoming beacon to visitors and residents alike.",
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
  overview: `
Twin Peaks is a famous landmark in San Francisco, a pair of hills offering panoramic views of the city and bay. Located in the middle of the city, the peaks are a popular spot for tourists and locals alike, accessible by car or by foot.
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
The Ferry Building Marketplace and its adjacent farmers market serve in an equally outstanding capacity as places to eat and immerse yourself in the local community. Spend some time browsing the vendors lining the Nave, the market's central indoor thoroughfare, and you'll experience one of San Francisco's most vibrant gathering places, while discovering the bounty of Northern California's artisan food and wine producers.
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
Alcatraz Island is a small island 1.25 miles (2.01 km) offshore from San Francisco, California, United States.[1] The island was developed in the mid-19th century with facilities for a lighthouse, a military fortification, and a military prison.
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
San Francisco's Chinatown is the oldest in North America and offers a vibrant mix of culture, cuisine, and history. Wander through bustling streets adorned with lanterns, visit herbal shops, and enjoy authentic dim sum.
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
The Exploratorium is a museum of science, technology, and arts in San Francisco, California. Founded by physicist and educator Frank Oppenheimer in 1969, the museum was originally located in the Palace of Fine Arts and was relocated in 2013 to Piers 15 and 17 on San Francisco's waterfront.
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
Dolores Park is bounded by 18th Street on the north, 20th Street on the south, Dolores Street on the east and Church Street on the west. The northern end of Dolores Park is located directly across the street from Mission High School.
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
Located in the Washington-Mason powerhouse and carbarn, the Cable Car Museum offers a glimpse into the history of San Francisco's iconic cable cars. Visitors can see the massive engines and winding wheels that pull the cables.
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
The Presidio of San Francisco (originally, El Presidio Real de San Francisco or The Royal Fortress of Saint Francis) is a park and former U.S. Army post on the northern tip of the San Francisco Peninsula in San Francisco, California, and is part of the Golden Gate National Recreation Area.
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
Ghirardelli Square is a landmark public square at the foot of Russian Hill and adjacent to the Aquatic Park Historic District in San Francisco. It is often considered to be part of the tourist attractions at nearby Fisherman's Wharf. A portion of the area was listed on the National Register of Historic Places in 1982 as Pioneer Woolen Mills and D. Ghirardelli Company.
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
Known as the "crookedest street in the world," Lombard Street features eight sharp turns on a steep hill, beautifully landscaped with flowers. It's a must-see for visitors seeking a unique photo opportunity.
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
Home to the San Francisco Giants, Oracle Park offers stunning views of the bay and a classic ballpark experience. Even non-baseball fans can enjoy the atmosphere and waterfront location.
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
Located within Golden Gate Park, the Japanese Tea Garden is the oldest public Japanese garden in the United States. Enjoy serene landscapes, koi ponds, and traditional architecture.
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
Union Square is the vibrant commercial and cultural heart of San Francisco, surrounded by upscale shops, historic hotels, art galleries, and theaters. Originally established as a rallying point during the Civil War, the square now serves as a bustling public plaza that hosts seasonal events, ice skating in winter, and live performances.
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
