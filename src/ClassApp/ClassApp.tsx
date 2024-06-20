import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";
import { UserInformation } from "../types";
export type ClassAppState = { userInfo: UserInformation | null };

export class ClassApp extends Component<Record<string, never>, ClassAppState> {
  state: ClassAppState = {
    userInfo: null,
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
        <ProfileInformation userInfo={this.state.userInfo} />
        <ClassForm appStateHandler={this.appStateHandler} />
      </>
    );
  }
}
