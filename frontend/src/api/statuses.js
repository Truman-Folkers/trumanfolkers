// src/api/statuses.js
const VITE_API_URL = import.meta.env.VITE_API_URL;

const BASE_URL = "/api";

// Fetch all statuses (GET)
export async function fetchStatuses() {
  const response = await fetch(`${VITE_API_URL}${BASE_URL}/statuses`);
  if (!response.ok) throw new Error("Failed to fetch statuses");
  return response.json();
}

// Create a new status (POST)
export async function createStatus(status, name) {
  const response = await fetch(`${VITE_API_URL}${BASE_URL}/statuses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, status: status }),
  });
  if (!response.ok) throw new Error("Failed to create status");
  return response.json();
}

//put an existing status
export async function updateStatus(status, id) {
  const response = await fetch(`${VITE_API_URL}${BASE_URL}/statuses`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: id, status: status }),
  });
  if (!response.ok) throw new Error("Failed to update status");
  return response.json();
}
