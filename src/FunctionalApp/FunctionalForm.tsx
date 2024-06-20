import {
  useState,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

import { FunctionalTextInput } from "./FunctionalTextInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { ErrorMessage } from "../ErrorMessage";

import {
  isEmailValid,
  isCityValid,
  isNameValid,
  isPhoneValid,
} from "../utils/validations";

import { UserInformation, PhoneArray } from "../types";
import { formErrors } from "../utils/error";

const { firstNameError, lastNameError, emailError, cityError, phoneError } =
  formErrors;

interface FunctionalFormProps {
  setUserInfo: Dispatch<SetStateAction<UserInformation | null>>;
}

const createInputHandler =
  (setter: Dispatch<SetStateAction<string>>) =>
  (e: ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value);

export const FunctionalForm = ({ setUserInfo }: FunctionalFormProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<PhoneArray>(["", "", "", ""]);

  const validator = {
    firstName: isNameValid(firstName),
    lastName: isNameValid(lastName),
    email: isEmailValid(email),
    city: isCityValid(city),
    phone: isPhoneValid(phone),
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setPhone(["", "", "", ""]);
    setFormSubmitted(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);

    const validated = Object.values(validator).every((valid) => valid);

    if (!validated) {
      alert("Bad Inputs");
    } else {
      setUserInfo({
        firstName,
        lastName,
        email,
        city,
        phone: phone,
      });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>
      <FunctionalTextInput
        label={"First Name: "}
        placeholder={"Bilbo"}
        value={firstName}
        handleChange={createInputHandler(setFirstName)}
      />
      <ErrorMessage
        message={firstNameError}
        show={formSubmitted && !validator.firstName}
      />
      <FunctionalTextInput
        label={"Last Name: "}
        placeholder={"Baggins"}
        handleChange={createInputHandler(setLastName)}
        value={lastName}
      />
      <ErrorMessage
        message={lastNameError}
        show={formSubmitted && !validator.lastName}
      />
      <FunctionalTextInput
        label={"Email: "}
        placeholder={"fourthBreakfast7@aol.com"}
        handleChange={createInputHandler(setEmail)}
        value={email}
      />
      <ErrorMessage
        message={emailError}
        show={formSubmitted && !validator.email}
      />
      <FunctionalTextInput
        label={"City: "}
        placeholder={"Select a city"}
        handleChange={createInputHandler(setCity)}
        value={city}
      />
      <ErrorMessage
        message={cityError}
        show={formSubmitted && !validator.city}
      />
      <FunctionalPhoneInput phone={phone} setPhone={setPhone} />
      <ErrorMessage
        message={phoneError}
        show={formSubmitted && !validator.phone}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
