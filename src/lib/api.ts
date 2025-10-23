const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new APIError(
      response.status,
      `API Error: ${response.statusText}`
    );
  }

  return response.json();
}

// Collaboration form submission
export async function submitCollaborationRequest(data: {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  message: string;
  collaborationType: string[];
}) {
  return fetchAPI('/collaboration', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Fetch publications
export async function getPublications(filters?: {
  type?: string;
  category?: string;
}) {
  const params = new URLSearchParams(filters as any);
  return fetchAPI(`/publications?${params}`);
}

// Add more API endpoints as needed
