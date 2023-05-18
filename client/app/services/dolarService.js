const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchDolar() {
  try {
    const [blue, contadoliqui, dolarturista, dolaroficial] = await Promise.all([
      fetch(`${BASE_URL}/api/dolarblue`),
      fetch(`${BASE_URL}/api/contadoliqui`),
      fetch(`${BASE_URL}/api/dolarturista`),
      fetch(`${BASE_URL}/api/dolaroficial`),
    ]);
    const data = {
      blue: await blue.json(),
      contadoliqui: await contadoliqui.json(),
      dolarturista: await dolarturista.json(),
      dolaroficial: await dolaroficial.json(),
    };

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDolar;
