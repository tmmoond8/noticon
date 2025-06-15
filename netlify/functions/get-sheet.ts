import axios from 'axios';

export const handler = async (event, context) => {
  try {
    const response = await axios.get(
      `${process.env.GOOGLE_SHEET_URL}?sheetName=${process.env.SHEET_NAME}`,
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to fetch data from Google Sheets',
      }),
    };
  }
};
