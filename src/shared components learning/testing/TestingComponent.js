import { useEffect, useState } from "react";

const TestingComponent = () => {
  const [list, setList] = useState([]);

  const data = [
    {
      id: 1,
      name: "soap 1",
    },
    {
      id: 2,
      name: "soap 2",
    },
    {
      id: 3,
      name: "soap 3",
    },
    {
      id: 4,
      name: "soap 4",
    },
    {
      id: 5,
      name: "soap 5",
    },
  ];

  useEffect(() => {}, [list]);

  const addItem = (item) => {
    console.log(item);
    setList((prev) => [...prev, item]);
  };

  console.log(list);

  return (
    <>
      <div style={{ display: "flex", gap: "5rem" }}>
        <div>
          {data.map((item) => (
            <div>
              <h2 onClick={() => addItem(item)}>{item.name}</h2>
              <br></br>
            </div>
          ))}
        </div>

        <div>
          <h1>this is the list</h1>
          {list.map((listItem) => (
            <h4>{listItem.name}</h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestingComponent;
