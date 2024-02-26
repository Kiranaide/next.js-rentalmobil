export default async function fetchUser() {
  try {
    const response = await fetch("http://localhost:8080/users");
    if (!response.ok) {
      throw new Error("Failed fetching the data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
