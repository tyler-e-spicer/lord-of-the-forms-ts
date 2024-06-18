import { Component } from "react";
import { ChangeEvent } from "react";
import { allCities } from "../utils/all-cities";

interface ClassTextInputProps {
  label: string;
  placeholder: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface ClassTextInputState {
  name: string;
}

class ClassTextInput extends Component<
  ClassTextInputProps,
  ClassTextInputState
> {
  render() {
    const { label, placeholder, name, handleChange, value } = this.props;

    return (
      <div className="input-wrap">
        <label>{label}</label>
        {label === "City: " ? (
          <>
            <input
              list="cities"
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
            />
            <datalist id="cities">
              {allCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </datalist>
          </>
        ) : (
          <input
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
          />
        )}
      </div>
    );
  }
}

export default ClassTextInput;
