// src/api/statuses.js
const BASE_URL = "/api";

// Fetch all statuses (GET)
export async function fetchStatuses() {
  const response = await fetch(`${BASE_URL}/statuses`);
  if (!response.ok) throw new Error("Failed to fetch statuses");
  return response.json();
}

// Create a new status (POST)
export async function createStatus(status) {
  const response = await fetch(`${BASE_URL}/statuses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: status }),
  });
  if (!response.ok) throw new Error("Failed to create status");
  return response.json();
}

//put an existing status
export async function updateStatus(status) {
  const response = await fetch(`${BASE_URL}/statuses`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ status: status }),
  });
  if (!response.ok) throw new Error("Failed to update status");
  return response.json;
}
