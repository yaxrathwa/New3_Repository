// src/mocks/handlers.js
import { http } from 'msw';

export const handlers = [
  http.post('/api/submit-story', ({ request }) => {
    return Response.json({ success: true });
  }),
];

