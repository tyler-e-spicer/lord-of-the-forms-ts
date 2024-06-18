export type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: PhoneArray;
  formSubmitted: boolean;
};

export type PhoneArray = [string, string, string, string];
