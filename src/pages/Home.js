import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>May the source be with you</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis mi,
        efficitur ultrices venenatis vel, accumsan a libero. Suspendisse
        potenti. Aliquam vulputate hendrerit nisi in aliquet. Maecenas semper
        risus quis tellus vulputate tempor. Vestibulum in semper orci. Aenean
        tempus ornare ipsum sit amet viverra. In fringilla lectus rhoncus,
        pellentesque mi a, lacinia turpis.
      </p>
      <Link to="/starships">
      <button>START</button>
      </Link>
    </>
  );
}

export default App;
