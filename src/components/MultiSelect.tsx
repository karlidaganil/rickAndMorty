import { useState } from "react";
import "./style.scss";

const options = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Anıl Karlıdağ",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 4,
    name: "Şebnem Karlıdağ",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
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
            <span
              className="delete-icon"
              onClick={() => {
                setSelectedItems((prev) => prev.filter((i) => i !== item));
              }}
            >
              x
            </span>
          </button>
        ))}
        <input type="text" placeholder="Please Select Character" />
      </div>
      <div className={`options-container ${showOptions}`}>
        {options.map((item) => (
          <div className="option-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.name)}
              //   value={item.name}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedItems((prev) => [...prev, item.name]);
                } else {
                  setSelectedItems((prev) =>
                    prev.filter((i) => i !== item.name)
                  );
                }
              }}
            />
            <img src={item.image} alt={item.name} />
            <div className="info">
              <span className="name">{item.name}</span>
              <span className="episodes">{item.episode.length} Episodes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
