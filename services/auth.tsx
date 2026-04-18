const BASE_URL = "http://192.168.1.41:3000/api/auth";

// 🧠 kiểu dữ liệu trả về
type AuthResponse = {
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  message?: string;
};

// ✅ REGISTER
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return { message: "Network error" };
  }
};

// ✅ LOGIN
export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return await res.json();
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return { message: "Network error" };
  }
};