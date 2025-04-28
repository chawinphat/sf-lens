export interface User {
  uid: string; // Firestore UID
  username: string;
  avatarUrl?: string;
  //   searchHistory: string[]; // can keep locally?
  savedAttractionIds: string[];
  //   viewedAttractionIds: string[]; // can keep locally?
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Review {
  id: string;
  userId: string;
  attractionId: string;
  content: string;
  createdAt: Date;
}

export type Category =
  | "Culture"
  | "History"
  | "Building"
  | "Museums"
  | "Neighborhoods"
  | "Views"
  | "Parks"; // can be extended

export interface Attraction {
  id: string;
  name: string;
  overview: string;
  location: LatLng;
  images_landscape: string[];
  images_portrait: string;
  special?: string;
  tags: Category[];
}
