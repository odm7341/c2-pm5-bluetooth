// examples/app.js
import { connectAndReadPM5Data } from 'c2-pm5-bluetooth';

function App() {
    async function fetchData() {
      try {
        const data = await connectAndReadPM5Data();
        console.log('PM5 Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }


  return (
    <div>
      <h1>PM5 Data Retrieval</h1>
      <button onClick={fetchData}
      >RUN</button>
    </div>
  );
}

export default App;
