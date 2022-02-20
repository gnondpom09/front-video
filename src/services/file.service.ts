import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:3030/api';

/**
 * Upload file
 * @param filePath
 * @returns
 */
export const uploadFile = async (data: FormData): Promise<AxiosResponse<any>> => {
  try {
    const savedVideo: AxiosResponse<any> = await axios.post(`${baseUrl}/upload`, data);

    return savedVideo;
  } catch (error: any) {
    throw new Error(error);
  }
};

/**
 * Get all videos
 * @returns list of videos
 */
export const getAllFiles = async (): Promise<any[]> => {
  try {
    const files: any[] = await axios.get(`${baseUrl}/files`);
    return files;
  } catch (error: any) {
    throw new Error(error);
  }
};
