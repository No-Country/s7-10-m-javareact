export interface ProviderRes {
  categories: {
    // assuming categories is an array of objects with id and name properties
    id: number;
    name: string;
  }[];
  country: string;
  email: string;
  experienceYears: string;
  fullName: string;
  idUser: number;
  profileDescription: string;
  profilePhoto: string | null;
  score: number | null;
}
export interface Provider {
  idUser: number;
  email: string;
  fullName: string;
  country: string;
  experienceYears: string;
  kmAround: string;
  profileDescription: string;
  score: number;
  categories: {
    id: number;
    name: string;
  }[];
  profilePhoto: string | null;
  galleryPhotos: string[];
  reviews: {
    comment: string;
    rating: number;
    nameClient: string;
    creationDate: string;
  }[];
}
