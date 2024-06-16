// src/types/index.ts
export interface Keyword {
    id: string;
    name: string;
    searchVolume: number;
    ranking: number;
    ctr: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface KeywordData extends Keyword {
    date: string;
  }
  