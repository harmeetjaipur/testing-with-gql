import { http, HttpResponse, } from 'msw';

interface LoginRequestBody {
  username: string;
  password: string;
}

export const handlers = [
  http.post('/login', async ({ request }: any) => {

    // Parse the request body
    const { username, password }: LoginRequestBody = await request.json();

    // Mock authentication logic
    if (username === 'root' && password === 'password') {
      // store the mock token here as sw dont have access to process env
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdVRVNUX2M4eWN1ZDBjQ1V3eVRkUyIsIm5ldHdvcmtJZCI6InlGTWhHaDZYcnMiLCJuZXR3b3JrRG9tYWluIjoicG9kZGVycy1vbGQuYmV0dGVybW9kZS5pbyIsInRva2VuVHlwZSI6IkdVRVNUIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzE2NDE1NTcwLCJleHAiOjE3MTkwMDc1NzB9.CmO7oF8iTGIePj2KGqEGFZBl8NzQ6RAAFkExAuBYVEk'
      return HttpResponse.json({ token })
    } else {
      return HttpResponse.error()
    }

  }),
];
