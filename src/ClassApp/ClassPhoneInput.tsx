import { Component, ChangeEvent, RefObject, createRef } from "react";
import { PhoneArray } from "../types";

interface ClassPhoneInputProps {
  phone: PhoneArray;
  setPhone: (phone: PhoneArray) => void;
}

class ClassPhoneInput extends Component<ClassPhoneInputProps> {
  private phoneInputRefs: RefObject<HTMLInputElement>[] = [
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ];

  private maxLengths = [2, 2, 2, 1];

  handleNumberChange =
    (i: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (/^\d*$/.test(value)) {
        const { phone } = this.props;
        const newPhoneArr: PhoneArray = [...phone];
        newPhoneArr[i] = value;

        if (value.length === this.maxLengths[i] && i < 3) {
          this.phoneInputRefs[i + 1]?.current?.focus();
        }

        if (value.length === 0 && i > 0) {
          this.phoneInputRefs[i - 1]?.current?.focus();
        }

        this.props.setPhone(newPhoneArr);
      }
    };

  render() {
    const { phone } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input
            ref={this.phoneInputRefs[0]}
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={phone[0]}
            onChange={this.handleNumberChange(0)}
            maxLength={this.maxLengths[0]}
          />
          -
          <input
            ref={this.phoneInputRefs[1]}
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phone[1]}
            onChange={this.handleNumberChange(1)}
            maxLength={this.maxLengths[1]}
          />
          -
          <input
            ref={this.phoneInputRefs[2]}
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phone[2]}
            onChange={this.handleNumberChange(2)}
            maxLength={this.maxLengths[2]}
          />
          -
          <input
            ref={this.phoneInputRefs[3]}
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phone[3]}
            onChange={this.handleNumberChange(3)}
            maxLength={this.maxLengths[3]}
          />
        </div>
      </div>
    );
  }
}

export default ClassPhoneInput;
