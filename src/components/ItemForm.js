import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setCategoryType] = useState("Produce")
  
  function subm(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    });
  }

  function onName(event) {
    setItemName(event.target.value)
  }

  function onCat(event) {
    setCategoryType(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={subm}>
      <label>
        Name:
        <input type="text" name="name" onChange={onName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
