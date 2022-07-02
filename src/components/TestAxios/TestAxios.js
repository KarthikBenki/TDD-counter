import React from "react";
import axios from "axios";

// const TestAxios = ({url}) => {//destructuring
const TestAxios = (props) => {
  const [data, setData] = React.useState();

  const fetchData = async () => {
    const response = await axios.get(props.url);
    console.log(response); 
    setData(response.data.url);
  };

  return (
    <>
      <button onClick={fetchData} data-testId="fetch-data">
        Load Data
      </button>
      {data ? (
        <div data-testid="show-data">{data}</div>
      ) : (
        <h1 data-testid="loading">Loading...</h1>
      )}
    </>
  );
};

export default TestAxios;
