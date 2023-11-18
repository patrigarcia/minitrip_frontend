import apiClient from './apiClient';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
    email: string;
    password: string;
  }

export const registerUser = async (userData: RegisterData) => {
  const response = await apiClient.post('users', userData);
  return response.data;
};

export const loginUser = async (loginData: LoginData) => {
    const response = await apiClient.post('users/login', loginData);
    return response.data;
  };
