import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/notifications")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}>
            <h3>{item.Type}</h3>
            <p>{item.Message}</p>
            <small>{item.Timestamp}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default App;