export interface Hotel {
    id: string;
    name: string;
    imageUrl: string;
    location: string;
    price: number;
    description: string;
    luxuryTag: boolean;
    vipTag: boolean;
    starRating: number;
    reviewCount: number;
    averageRating: number;
}

export interface HotelSections  {
    country: string;
    dates: string;
    hotels: Hotel[];
}
