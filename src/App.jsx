// Challenge:-
// The parameters for the brand filter, i.e, brand names should appear when you search for the brand name in an input box

import { useState } from "react";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TodoReducer } from "./todoReducer";
function App() {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" },
  ];
  const [filteredBrands, setFilteredBrands] = useState([]);
  const handleSearchBrand = (e) => {
    setFilteredBrands(
      brands1.filter((brand) => brand.brandName.includes(e.target.value))
    );
  };
  return (
    <div className="App">
      <h4>BRAND</h4>
      <div className="brand-input">
        <AiOutlineSearch />
        <input type="text" onChange={handleSearchBrand} />
      </div>
      {filteredBrands.length > 0 &&
        filteredBrands.map((brand) => <p key={brand.id}>{brand.brandName}</p>)}
    </div>
  );
}

export default App;
