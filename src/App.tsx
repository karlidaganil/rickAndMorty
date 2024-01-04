import MultiSelect from "./components/MultiSelect";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "600px",
        }}
      >
        <MultiSelect />
      </div>
    </div>
  );
}

export default App;
