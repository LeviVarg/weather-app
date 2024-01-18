import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { apiUrl, apiOptions } from "../../api";
const Search = ({ handleSearchOptions }) => {
  const [search, setSeatch] = useState(null);

  const handleSearchChange = (e) => {
    setSeatch(e);
    handleSearchOptions(e);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${apiUrl}?minPopulation=1000000&namePrefix=${inputValue}`,
        apiOptions
      );
      const result = await response.json();
      const options = {
        options: result.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };

      return options;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleSearchChange}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
};

export default Search;
