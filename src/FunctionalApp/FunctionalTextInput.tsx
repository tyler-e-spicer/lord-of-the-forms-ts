import { ChangeEvent } from "react";
import { allCities } from "../utils/all-cities";

interface FunctionalTextInputProps {
  label: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const FunctionalTextInput = ({
  label,
  placeholder,
  handleChange,
  value,
}: FunctionalTextInputProps) => {
  const name = label.toLowerCase().replace(/[^a-z]/g, "");
  return (
    <div className="input-wrap">
      <label>{label}</label>
      {label === "City: " ? (
        <>
          <input
            list="cities"
            placeholder="Select a city"
            name="city"
            value={value}
            onChange={handleChange}
            onInput={handleChange}
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
};
