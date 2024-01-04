import { useState } from "react";
import "./style.scss";

const options = [
  {
    text: "Rick Sanches",
  },
  {
    text: "Morty Smith",
  },
  {
    text: "Summer Smith",
  },
  {
    text: "Beth Smith",
  },
  {
    text: "Jerry Smith",
  },
];

const MultiSelect = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
  return (
    <div className="multi-select-container">
      <div onClick={() => setShowOptions(true)} className="inputs-container">
        {selectedItems.map((item) => (
          <button>
            <span>{item}</span>
            <span className="delete-icon">x</span>
          </button>
        ))}
        <input type="text" placeholder="Please Select Character" />
      </div>
      <div className={`options-container ${showOptions}`}>
        {options.map((item) => (
          <div>
            <input
              type="checkbox"
              value={item.text}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedItems((prev) => [...prev, item.text]);
                } else {
                  setSelectedItems((prev) =>
                    prev.filter((i) => i !== item.text)
                  );
                }
              }}
            />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
