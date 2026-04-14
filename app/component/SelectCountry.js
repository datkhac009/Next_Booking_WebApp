"use client";

import { useEffect, useState } from "react";

function SelectCountry({ defaultCountry, name, id, className }) {
  const [countries, setCountries] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadCountries() {
      const res = await fetch("https://restcountries.com/v2/all?fields=name,flag");
      const data = await res.json();

      if (ignore) return;

      setCountries(data);

      const flag =
        data.find((country) => country.name === defaultCountry)?.flag ?? "";

      setSelectedFlag(flag);
      setSelectedValue(defaultCountry ? `${defaultCountry}%${flag}` : "");
    }

    loadCountries();

    return () => {
      ignore = true;
    };
  }, [defaultCountry]);

  function handleChange(e) {
    const value = e.target.value;
    setSelectedValue(value);
    setSelectedFlag(value.split("%")[1] ?? "");
  }

  return (
    <>
      <div className="mb-2 flex justify-end">
        {selectedFlag ? (
          <img src={selectedFlag} alt="Country flag" className="h-5 w-auto rounded-sm" />
        ) : null}
      </div>

      <select
        name={name}
        id={id}
        value={selectedValue}
        onChange={handleChange}
        className={className}
      >
        <option value="">Select country...</option>
        {countries.map((c) => (
          <option key={c.name} value={`${c.name}%${c.flag}`}>
            {c.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCountry;
