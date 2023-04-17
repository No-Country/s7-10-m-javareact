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
