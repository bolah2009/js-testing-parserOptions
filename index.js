const fetchWeatherData = async (info = { location: {}, city: "Lagos,ng" }) => {
  const uri = `https://api.openweathermap.org/data/2.5/forecast?${info}`;
  const response = await fetch(uri);
  const data = await response.json();
  const { ok } = response;
  return { data, ok };
};

export default fetchWeatherData;
