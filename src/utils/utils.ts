import { API_HOST } from '../config/config';
import { RequestOptions } from './types';

export const apiRequest = async (passedOptions: RequestOptions): Promise<void> => {
  const response = await fetch(`${API_HOST}${passedOptions.path}`, {
    method: passedOptions.method,
  });

  if (!response.ok) {
    throw Error('An error occurs during request');
  }

  return response.json();
};
