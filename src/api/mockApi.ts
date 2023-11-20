// mockApi.ts
export interface UserRegistration {
  name: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  token: string;
  user: UserRegistration;
}

export const mockRegisterUser = async ({
  name,
  email,
  password,
}: UserRegistration): Promise<RegistrationResponse> => {
  // Simula una espera de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simula una respuesta del servidor con un token de "registro exitoso"
  return {
    token: 'mockToken123',
    user: { name, email, password },
  };
};

export const mockLoginUser = async ({
  email,
  password,
}: { email: string; password: string }): Promise<RegistrationResponse> => {
  // Simula una espera de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simula una respuesta del servidor con un token de "inicio de sesión exitoso"
  return {
    token: 'mockToken456', // Deberías generar un token único aquí si fuera real
    user: { name: 'Mock User', email, password },
  };
};