import { apiKey } from "@/redux/features/apiSlice";

export function getCurrentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return hours + ":" + minutes;
}

export async function getCatsUrl(catId: string) {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${catId}`
      // `https://api.thecatapi.com/v1/images/search?${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    return data.url;
  } catch (error) {
    console.log(error);
  }
}
