import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";
import { UserInformation } from "../types";

export class ClassApp extends Component<
  Record<string, never>,
  UserInformation
> {
  state: UserInformation = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: ["", "", "", ""],
    formSubmitted: false
  };

  appStateHandler = (newState: UserInformation) => {
    this.setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userInfo={this.state} />
        <ClassForm appStateHandler={this.appStateHandler} />
      </>
    );
  }
}
