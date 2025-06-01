export interface Doctor {
  id: number;
  name: string;
  imageUrl: string;
  crm: string;
  bio: string;
  specialties: string[];
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
}