import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your backend URL
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers you need, such as authorization headers
    },
  });

interface response<T> {
    data: {
      item: T[];
      success: boolean;
    };
  }

export async function bookFreeHearingAidTrial(params: {}): Promise<response<void>> {
    const URL: Promise<response<void>> = apiClient.post('/hearing-aid-trial', params)
    const response = await URL;
  
    return response;
  }