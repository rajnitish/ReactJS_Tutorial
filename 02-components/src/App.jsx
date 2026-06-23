import "./App.css";
import CardA,{CardB,CardC} from "./components/Card.jsx";
import { Pie_value } from "./components/Constants.jsx";

const App = () => {

  const cardTitle = "Card Title from inside APP DIV";
  //cardTitle = "Card Title from inside APP DIV - updated";  error: Assignment to constant variable.
  return (
    <div>
      <CardA/>
      <CardC/>
      <CardB/>
      <p>Pie value from Constants.jsx: {Pie_value}</p>

      <div className="card">
        <h2>{cardTitle}</h2>
        <p>This is a card component.</p>
      </div>

    </div>
  )
}

export default App
