import Title from "./components/Title";
import React, {useState} from "react";

function App() {

  const [name, setName] = useState("Name");
  const [date, setDate] = useState("Date");
  return (
    <div className="App">
      <h1 className="text-center display-3">Signature app</h1>
      <Title text={date} />
      <Title text={name} />
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        repellendus impedit illum temporibus, ipsum molestiae illo ab cum optio,
        nostrum eligendi delectus incidunt. Cumque neque aperiam minus iste
        asperiores at dolor architecto ratione, voluptatum iusto voluptatem,
        nihil enim fugiat, repudiandae ad magni similique voluptate velit
        tenetur atque quas voluptates expedita consequuntur cum. Recusandae
        temporibus cum, quisquam cumque accusantium incidunt doloribus numquam
        dignissimos provident, harum eaque eos iste quo vitae ipsam dolorum
        nulla blanditiis voluptatum impedit quae molestias commodi error
        doloremque laboriosam? Libero ducimus voluptatum alias nesciunt ex
        reprehenderit quis atque molestiae quae, maxime, architecto odio
        obcaecati modi enim eos veniam.
      </p>
      <div className="d-flex input-boxes">
        <input type="date" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
