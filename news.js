exports.handler = async function(event) {
  const category = event.queryStringParameters?.category || "general";

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&topic=${category}&token=${process.env.GNEWS_API_KEY}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" })
    };
  }
};