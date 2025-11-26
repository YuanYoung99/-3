export enum ThemeColor {
  Classic = 'CLASSIC', // Red and Gold
  Frozen = 'FROZEN', // Blue and Silver
  Candy = 'CANDY', // Pink and Teal
}

export interface GreetingState {
  text: string;
  loading: boolean;
  error: string | null;
}
