import "./App.css";
import FilmInfo from "./components/filmInfo";

function App() {
  return (
    <div className="App">
      <FilmInfo
        filmName="The Lord of the Rings"
        author="Directed by Peter Jackson"
        year="2001 year"
        image=" https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
      />
    </div>
  );
}

export default App;
