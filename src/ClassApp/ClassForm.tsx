import { FormEvent, ChangeEvent, Component } from "react";

import ClassTextInput from "./ClassTextInput";
import ClassPhoneInput from "./ClassPhoneInput";
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

interface ClassFormProps {
  appStateHandler: (newState: UserInformation) => void;
}

interface ClassFormState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: PhoneArray;
  formSubmitted: boolean;
}

export class ClassForm extends Component<ClassFormProps, ClassFormState> {
  constructor(props: ClassFormProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: ["", "", "", ""],
      formSubmitted: false,
    };
  }

  reset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: ["", "", "", ""],
      formSubmitted: false,
    });
  };

  validator = () => {
    const { firstName, lastName, email, city, phone } = this.state;
    return {
      firstName: isNameValid(firstName),
      lastName: isNameValid(lastName),
      email: isEmailValid(email),
      city: isCityValid(city),
      phone: isPhoneValid(phone),
    };
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ ...this.state, formSubmitted: true });

    const { firstName, lastName, email, city, phone } = this.state;

    const validator = this.validator();

    const validated = Object.values(validator).every((valid) => valid);

    if (validated) {
      console.log(validated);
      this.props.appStateHandler({
        firstName,
        lastName,
        email,
        city,
        phone: phone,
      });
      this.reset();
    } else {
      alert("Bad Inputs");
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (Object.keys(this.state).includes(name)) {
      this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  setPhone = (phone: PhoneArray) => {
    this.setState({
      phone: phone,
    });
  };

  render() {
    const { firstName, lastName, email, city, phone, formSubmitted } =
      this.state;

    const validator = this.validator();

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>
        <ClassTextInput
          label={"First Name: "}
          placeholder={"Bilbo"}
          value={firstName}
          name={"firstName"}
          handleChange={this.handleChange}
        />
        <ErrorMessage
          message={firstNameError}
          show={formSubmitted && !validator.firstName}
        />
        <ClassTextInput
          label={"Last Name: "}
          placeholder={"Baggins"}
          name={"lastName"}
          handleChange={this.handleChange}
          value={lastName}
        />
        <ErrorMessage
          message={lastNameError}
          show={formSubmitted && !validator.lastName}
        />
        <ClassTextInput
          label={"Email: "}
          placeholder={"fourthBreakfast7@aol.com"}
          name={"email"}
          handleChange={this.handleChange}
          value={email}
        />
        <ErrorMessage
          message={emailError}
          show={formSubmitted && !validator.email}
        />
        <ClassTextInput
          label={"City: "}
          placeholder={"Select a city"}
          name={"city"}
          handleChange={this.handleChange}
          value={city}
        />
        <ErrorMessage
          message={cityError}
          show={formSubmitted && !validator.city}
        />
        <ClassPhoneInput phone={phone} setPhone={this.setPhone} />
        <ErrorMessage
          message={phoneError}
          show={formSubmitted && !validator.phone}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
