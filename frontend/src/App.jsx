// import { useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";
import InputFeild from "./Components/InputFeild";
// import axios from 'axios'

function App() {
  // useEffect(() => {
  //    // Make a GET request to the backend API using Axios
  //    axios.get('http://localhost:3000/api/currencies') // Update the URL if your backend uses a different port
  //      .then((response) => {
  //        console.log('Currency Data:', response.data); // Log the data to the console
  //      })
  //      .catch((error) => {
  //        console.error('Error fetching data:', error); // Handle errors
  //      });
  //  }, []);

  return (
    <>
      <InputFeild/>
      <Button/>
      
    </>
  );
}

export default App;
