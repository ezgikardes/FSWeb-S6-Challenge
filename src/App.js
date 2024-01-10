import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Karakter from './components/Karakter';
import styled from 'styled-components';


//App'i wrap'lemek için PageContainer isimli bir styled div yaratalım, return'de hepsini kapsayan tag bu olacak. 
const PageContainer = styled.div `
  width: 600px;
  margin: auto;
  margin-top: 3rem;
  background: rgba(245, 245, 245, 0.40);
  padding: 2rem;
`

const App = () => {

  const [characterData, setCharacterData] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(response => setCharacterData(response.data))

  }, [])



  return (
    <PageContainer>
      <h1 className="Header">Karakterler</h1>
      {characterData.map((characterData) => <Karakter characterData={characterData}/>)}
      {/* characterData dizisindeki her bir elemanı (her bir karakterin bilgilerini) Karakter componentine gönderiyorum.*/}
    </PageContainer>
  );
}

export default App;
