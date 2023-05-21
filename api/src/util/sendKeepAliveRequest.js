const sendKeepAliveRequest = (url) => {
  setInterval(async () => {
    try {
      await fetch(`${url}/api/keep-alive`);
      console.log("Solicitud de mantenimiento enviada");
    } catch (error) {
      console.log(
        "Error al enviar la solicitud de mantenimiento",
        error.message
      );
      throw new Error("Error al enviar la solicitud de mantenimiento");
    }
  }, 14 * 60 * 1000);
};

module.exports = { sendKeepAliveRequest };
