import {
  useRef,
  RefObject,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { PhoneArray } from "../types";

interface FunctionalPhoneInputProps {
  setPhone: Dispatch<SetStateAction<PhoneArray>>;
  // setPhone: (phone: PhoneArray) => void;
  phone: PhoneArray;
}

export const FunctionalPhoneInput = ({
  setPhone,
  phone,
}: FunctionalPhoneInputProps) => {
  const phoneInputRefs: RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const maxLengths = [2, 2, 2, 1];

  const handleNumberChange =
    (i: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (/^\d*$/.test(value)) {
        const newPhoneArr: PhoneArray = [...phone];
        newPhoneArr[i] = value;

        if (value.length === maxLengths[i] && i < 3) {
          phoneInputRefs[i + 1]?.current?.focus();
        }

        if (value.length === 0 && i > 0) {
          phoneInputRefs[i - 1]?.current?.focus();
        }
        setPhone(newPhoneArr);
      }
    };

  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <input
          ref={phoneInputRefs[0]}
          type="text"
          id="phone-input-1"
          placeholder="55"
          value={phone[0]}
          onChange={handleNumberChange(0)}
          maxLength={maxLengths[0]}
        />
        -
        <input
          ref={phoneInputRefs[1]}
          type="text"
          id="phone-input-2"
          placeholder="55"
          value={phone[1]}
          onChange={handleNumberChange(1)}
          maxLength={maxLengths[1]}
        />
        -
        <input
          ref={phoneInputRefs[2]}
          type="text"
          id="phone-input-3"
          placeholder="55"
          value={phone[2]}
          onChange={handleNumberChange(2)}
          maxLength={maxLengths[2]}
        />
        -
        <input
          ref={phoneInputRefs[3]}
          type="text"
          id="phone-input-4"
          placeholder="5"
          value={phone[3]}
          onChange={handleNumberChange(3)}
          maxLength={maxLengths[3]}
        />
      </div>
    </div>
  );
};
