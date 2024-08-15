const API_URL = "http://localhost:3001/api/hello";

export async function fetchHelloWorld() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Fetch error:", error);
    return "An error occurred";
  }
}
