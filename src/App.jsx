import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const toursList = await response.json();
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
        <main>
          <Loading />
        </main>
      </>
    )
  }

  if (isError) {
    return <h3>There was an error</h3>
  }

  return (
    <>
      <main>
        {tours.length > 0 ? <Tours tourList={tours} setTours={setTours} /> :
          <div className="title">
            <h2>No tours left</h2>
            <div className="title-underline"></div>
            <button type="button" className="btn" onClick={fetchTours} style={{marginTop: '30px'}}>Refresh</button>
          </div>}
      </main>
    </>
  );
};
export default App;
