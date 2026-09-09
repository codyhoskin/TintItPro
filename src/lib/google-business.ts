export const GOOGLE_PLACE_ID = "ChIJSeCMo-sKnS4RXSZsamLAv1o";

export const GOOGLE_MAPS_LISTING_URL =
  `https://www.google.com/maps/search/?api=1&query=Tint%20It%20Pro&query_place_id=${GOOGLE_PLACE_ID}`;

export type GoogleReview = {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  googleMapsUri?: string;
  publishTime?: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text: string;
};

export type GoogleReviewResponse = {
  configured: boolean;
  googleMapsUri: string;
  name: string;
  rating: number;
  reviews: GoogleReview[];
  userRatingCount: number;
};

// Keep a small, attributed set visible when the live Places request is unavailable
// (for example during local development). The live API response replaces these.
export const FEATURED_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    authorName: "Jacob Wallinder",
    authorPhotoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJ2qKicoyE4PEkEhGK4eqDbAOPqgJxexaStD0FYH5ub09qIGQ=w72-h72-p-rp-mo-br100",
    googleMapsUri: GOOGLE_MAPS_LISTING_URL,
    rating: 5,
    relativePublishTimeDescription: "Featured Google review",
    text: "Very professional and knowledgeable about window film.",
  },
  {
    authorName: "Breanne Busch",
    authorPhotoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocKA_PqVpmOJ6PAKTQCqldafyE0dXlpOGZpRQheR0myu2owLuQ=w72-h72-p-rp-mo-ba12-br100",
    googleMapsUri: GOOGLE_MAPS_LISTING_URL,
    rating: 5,
    relativePublishTimeDescription: "Featured Google review",
    text: "The film looks great on all 4 windows here!",
  },
  {
    authorName: "Mohidin Shaikh",
    authorPhotoUri:
      "https://lh3.googleusercontent.com/a/ACg8ocJezyA6JxjgIE2SAj1inzzPA-M94WDG0b4rkc2nJDdSU_SsOzY=w72-h72-p-rp-mo-br100",
    googleMapsUri: GOOGLE_MAPS_LISTING_URL,
    rating: 5,
    relativePublishTimeDescription: "Featured Google review",
    text: "The heat and glare are significantly reduced.",
  },
];
