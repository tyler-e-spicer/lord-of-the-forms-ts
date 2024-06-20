export type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: PhoneArray;
};

export type PhoneArray = [string, string, string, string];
