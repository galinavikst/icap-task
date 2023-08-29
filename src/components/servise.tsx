import { apiKey } from "@/redux/features/apiSlice";
import { SerchCatResponse } from "@/redux/features/searchSlice";

export function getCurrentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return hours + ":" + minutes;
}

export async function getCatById(catId: string) {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${catId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function getArrayForGridPattern(catsArr: SerchCatResponse[]) {
  const resultArr: SerchCatResponse[][] = [[]];

  catsArr.map((cat: SerchCatResponse) => {
    const lastSet = resultArr[resultArr.length - 1];
    if (lastSet.length < 5) {
      lastSet.push(cat);
    } else {
      resultArr.push([cat]);
    }
  });

  return resultArr;
}
