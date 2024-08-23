const createApiKey = require('../services/apikeyservice');

// const createApiKeyHandler = async (req, res) => {
//   try {
//     const apiKey = await createApiKey();
//     res.status(201).json(apiKey);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createApiKey: createApiKeyHandler
// };

const createApiKey = async () => {
    const secretKey = generateApiKey();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 1);
  
    try {
      console.log('Generando clave API:', secretKey);
      await pool.query(
        'INSERT INTO api_keys (secret_key, expires_at) VALUES (?, ?)',
        [secretKey, expiresAt]
      );
      console.log('Clave API guardada correctamente:', secretKey);
      return { secretKey, expiresAt };
    } catch (error) {
      console.error('Error al crear la clave API:', error);
      throw new Error('Error al crear la clave API: ' + error.message);
    }
  };
  