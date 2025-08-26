export type MovieGenreId =
  | 28     // Action
  | 12     // Adventure
  | 16     // Animation
  | 35     // Comedy
  | 80     // Crime
  | 99     // Documentary
  | 18     // Drama
  | 10751  // Family
  | 14     // Fantasy
  | 27     // Horror
  | 9648   // Mystery
  | 10749  // Romance
  | 878    // Science Fiction
  | 53     // Thriller

// ジャンルの型
export interface MovieGenre {
  id: MovieGenreId
  name_en: string
  name_ja: string
  icon: string
}