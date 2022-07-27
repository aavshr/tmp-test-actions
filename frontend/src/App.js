import { useEffect, useState } from 'react';

async function testBackend() {
  const url = `https://api_${window.location.hostname}/api`
  const resp = await fetch(
    url, 
    {
      credentials: 'include',
    }
  );
  return resp.text();
}

function App() {
  const [message, setMessage] = useState("")

  const disMsg = async() => {
    setMessage(await testBackend())
  };

  useEffect(() => {
    if (!message){
      disMsg();
    }
  })

  return (
    <div className="App">
      <p>
      From backend: {message}
      </p>
    </div>
  );
}

export default App;
