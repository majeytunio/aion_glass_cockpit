// app/lib/api.ts
// const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://3.25.213.38:8000';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export interface Race {
  trackCode: string;
  raceNo: number;
  ttm: string;
  countryCode: string;
  racingCode: string;
  date: string;
  raceId?: string;
  meetingId?: string;
  raceName?: string;
  status?: string;
}

export const api = {
  getUpcomingRaces: async (): Promise<Race[]> => {
    try {
      const response = await fetch(`${API_BASE}/api/upcoming/`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Failed to fetch races:', error);
      return [];
    }
  }
};