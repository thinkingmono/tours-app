import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const toursList = await response.json();
      // console.log(toursList);
      setTours(toursList);
    } catch (error) {
      setIsError(true);
      console.log('Error: ' + error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (isLoading) {
    return (
      <>
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Loading />
        </div>
      </>
    )
  }

  if (isError) {
    return <h3>There was an error</h3>
  }

  return (
    <>
      <Tours tourList={tours} setTours={setTours}/>
      <button type="button" className="btn" onClick={fetchTours}>Re-fetch</button>
    </>
  );
};
export default App;
