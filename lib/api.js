const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://3.25.213.38:8000';

export const api = {
  // Get upcoming races
  getUpcomingRaces: async () => {
    const res = await fetch(`${API_BASE}/api/upcoming/`);
    return res.json();
  },
  
  // Get complete runner data with all buttons
  getRunnerData: async (raceId, runnerNumber) => {
    const res = await fetch(`${API_BASE}/api/button/complete/${raceId}/${runnerNumber}`);
    return res.json();
  },
  
  // Get specific button data
  getButton1: async (raceId, runnerNumber) => {
    const res = await fetch(`${API_BASE}/api/button1/${raceId}/${runnerNumber}`);
    return res.json();
  },
  
  // ... similarly for other buttons
};