import { NextResponse } from "next/server";
import {
  FEATURED_GOOGLE_REVIEWS,
  GOOGLE_MAPS_LISTING_URL,
  GOOGLE_PLACE_ID,
  type GoogleReview,
  type GoogleReviewResponse,
} from "@/lib/google-business";

export const dynamic = "force-dynamic";

const fallback: GoogleReviewResponse = {
  configured: false,
  googleMapsUri: GOOGLE_MAPS_LISTING_URL,
  name: "Tint It Pro",
  rating: 5,
  reviews: FEATURED_GOOGLE_REVIEWS,
  userRatingCount: 100,
};

type PlacesReview = {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  googleMapsUri?: string;
  originalText?: { text?: string };
  publishTime?: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
};

type PlacesResponse = {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  reviews?: PlacesReview[];
  userRatingCount?: number;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim() || GOOGLE_PLACE_ID;

  if (!apiKey) {
    return NextResponse.json(fallback, {
      headers: { "Cache-Control": "public, s-maxage=300" },
    });
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return NextResponse.json(fallback, {
        headers: { "Cache-Control": "public, s-maxage=300" },
      });
    }

    const place = (await response.json()) as PlacesResponse;
    const reviews: GoogleReview[] = (place.reviews ?? [])
      .map((review) => ({
        authorName: review.authorAttribution?.displayName || "Google reviewer",
        authorPhotoUri: review.authorAttribution?.photoUri,
        authorUri: review.authorAttribution?.uri,
        googleMapsUri: review.googleMapsUri,
        publishTime: review.publishTime,
        rating: review.rating ?? 5,
        relativePublishTimeDescription:
          review.relativePublishTimeDescription,
        text: review.originalText?.text || review.text?.text || "",
      }))
      .filter((review) => review.text.length > 0);

    return NextResponse.json(
      {
        configured: true,
        googleMapsUri: place.googleMapsUri || GOOGLE_MAPS_LISTING_URL,
        name: place.displayName?.text || "Tint It Pro",
        rating: place.rating ?? 5,
        reviews,
        userRatingCount: place.userRatingCount ?? 0,
      } satisfies GoogleReviewResponse,
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(fallback, {
      headers: { "Cache-Control": "public, s-maxage=300" },
    });
  }
}
