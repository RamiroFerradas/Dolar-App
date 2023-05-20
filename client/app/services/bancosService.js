const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchInfoBancos = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/api/bancos/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos del banco", error);
    throw error;
  }
};
