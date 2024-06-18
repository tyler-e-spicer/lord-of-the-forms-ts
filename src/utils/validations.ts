import { allCities } from "./all-cities";
import { capitalize } from "./transformations";

export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isCityValid(city: string): boolean {
  if (city.length === 0) return false;
  const cityToSearch = capitalize(city.trim().toLowerCase());
  return allCities.includes(cityToSearch);
}

export function isNameValid(name: string): boolean {
  return name.length > 2 && !/\d/.test(name);
}

export function isPhoneValid(phone: string[]): boolean {
  const stringPhone = phone.join("");
  return stringPhone.length === 7 && /^\d+$/.test(stringPhone);
}
