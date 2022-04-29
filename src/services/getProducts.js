export default async function getProduct (query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const json = await response.json();
  return json.results;
}
