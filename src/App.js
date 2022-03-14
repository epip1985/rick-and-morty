import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import logo from './logo.gif';
import './App.css';

//components
import Search from "./components/Search";
import ResidentInfo from "./components/ResidentInfo";
import Location from "./components/Location";

function App() {

//ResidentInfo

let [fetchedData, updateFetchedData] = useState([]);
let {  results } = fetchedData;

//searchbox
let [pageNumber, updatePageNumber] = useState(1);
let [search, setSearch] = useState("");

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;



console.log(results)

useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);
  })();
}, [api]);



  return (

    

    <div className="App">

      <img src={logo}  className="imgLogo" alt="loading..." />
      <h1 className="text-center mb-3">Rick And Morty Wiki</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
      
      <div className="col-lg-8 col-12">
        <div className="row">
        <Location results={results} />
        <ResidentInfo results={results} />

        </div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default App;
