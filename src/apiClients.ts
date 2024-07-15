import axios from 'axios';

const BITRIX24_API_URL = 'https://your-domain.bitrix24.com/rest';
const BITRIX24_API_KEY = 'your-bitrix24-api-key';

export const getBitrix24Data = async (endpoint: string, params: any = {}) => {
  const response = await axios.get(`${BITRIX24_API_URL}/${endpoint}`, {
    params: { ...params, auth: BITRIX24_API_KEY }
  });
  return response.data;
};
