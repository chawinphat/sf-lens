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
      "https://images.unsplash.com/photo-1586796140676-ae3945168a97",
      "https://images.unsplash.com/photo-1540492102407-ef9c87892184",
    ],
    images_portrait:
      "https://preview.redd.it/the-absolutely-stunning-16th-avenue-tiled-steps-project-in-v0-fadignenbtia1.jpg?width=1080&crop=smart&auto=webp&s=c6672abca8e6c43bc7f94b5d3248e08e364326cc",
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
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    ],
    images_portrait:
      "https://images.squarespace-cdn.com/content/v1/51588d93e4b052be7735c596/1424638898477-DG4VTU0318V7KEKJ6JKG/SF-302_s.jpg?format=1000w",
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
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
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
      "https://images.unsplash.com/photo-1563132331-fc49e0ac8ef2",
    ],
    images_portrait:
      "https://d1hhug17qm51in.cloudfront.net/www-media/2018/08/03011519/SFMOMA-expansion_02-w-logo_Feb-22.jpg",
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
      "https://images.unsplash.com/photo-1529270291183-9e490482c864",
    ],
    images_portrait:
      "https://www.famsf.org/storage/images/e10fb0ce-92b8-48d0-8160-6c0779a4920a/legion-courtyard-2024-hkam.jpg?crop=1502,2000,x474,y0&format=jpg&quality=80&width=1000",
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
      "https://images.unsplash.com/photo-1583119912199-6a4f8a51228e",
    ],
    images_portrait: "",
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
      "https://images.unsplash.com/photo-1562771244-640aa9e4a489",
    ],
    images_portrait: "",
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
      "https://images.unsplash.com/photo-1606769342106-9bdd92a1e75c",
    ],
    images_portrait: "",
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
];
