export default async function customFetching(data, query = {}, body = {}) {
  const fetchData = {
    method: data.method,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fa",
    },
    credentials: "include",
  };

  if (data.method == "POST") {
    fetchData.body = JSON.stringify(body);
  }

  let url = process.env.NEXT_PUBLIC_BASE_URL + data.url + "?";
  for (const property in query) {
    url += `${property}=${query[property]}`;
  }
  let res = await fetch(url, fetchData);
  return res;
}
