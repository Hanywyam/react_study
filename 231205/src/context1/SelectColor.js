import { ColorConsumer } from "./state/Color";
const colors = [
  "orange",
  "salmon",
  "teal",
  "tomato",
  "purple",
  "maroon",
  "lightblue",
  "indigo",
  "pink",
];
const SelectColor = () => {
  return (
    <div>
      <h2>색상선택</h2>
      {/* 
      방법 1) 각 li마다 스타일값을 다르게 줘야함. -> 번거롭고 코드가 길어짐.
      <li
          style={{
            backgroundColor: "red",
            width: 50,
            height: 50,
            cursor: "pointer",
          }}>
          red
        </li>
        <li>orange</li>
        <li>lightblue</li> */}

      <ColorConsumer>
        {({ actions }) => (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
            }}>
            {colors.map((color) => (
              <li
                key={color}
                style={{
                  backgroundColor: color,
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}></li>
            ))}
          </ul>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColor;
