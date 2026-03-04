// lib/api.js or services/raceService.js

export async function getAllRaces() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/upcoming');
    if (!response.ok) {
      throw new Error('Failed to fetch races');
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading races:", error);
    return [];
  }
}