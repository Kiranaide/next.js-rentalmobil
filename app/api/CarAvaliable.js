export default async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/admin/listavailable");
    if (!response.ok) {
      throw new Error("Failed fetching the data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
