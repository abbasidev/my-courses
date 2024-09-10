import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target);
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
      {/* <button onSubmit={handleSubmit}>Add</button> */}
      {/* //// اگه اینجا فانکشن رو بزاریم فقط با کلیک روی باتن فانکشن عمل میکنه در صورتی که ما میخوایم وقتی داخل اینپوت اینتر رو هم زدیم فانکشن عمل کنه بخاطر همین فانکشن رو داخل فرم قرار دادیم*/}
    </form>
  );
}
