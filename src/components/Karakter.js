import styled from "styled-components";
import { useState } from "react";

export default function Karakter({ characterData }) {
  //karakterlerin açılıp kapanıp gizlenmesi için bir state oluşturalım:
  const [show, setShow] = useState(false);

  const CharacterHeader = styled.h2`
    padding: 0.5rem;
    background: #dddddd;
    color: #222222;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #cccccc;
    }
  `;

  //açılmadan görünmeyen, ekrandan taşanların gizlendiği (overflow.hidden) akordeon özelliği için bir styled div oluşturalım:
  const AccordionBody = styled.div`
    background: #cccccc;
    color: #222222;
    overflow: hidden;
  `;
  //akordeon açıldıktan sonra gelecek datada key-value pair'leri olduğu için hem key hem value için styled component yazacağız:

  const DatasLine = styled.div`
    padding: 1rem;
    display: flex;
    border-bottom: 1px solid #dddddd;
    &: hover {
        background: #dddddd;
    }
  `

  const Key = styled.span`
    width: 20%;
    font-weight: bold;
  `;
  const Value = styled.span`
    width: 80%;
    font-weight: normal;
  `;

  return (
    <div>
      <CharacterHeader onClick={(e) => setShow(!show)}>
        {characterData.name}
        <i class={"fa-solid fa-angle-" + (show ? "up" : "down")}></i>
        {/* ilk hali  <i class="fa-solid fa-angledown")}></i> idi. biz bunu dinamik hale getirdik. +'dan öncesi statik, class'ı show ise ok yukarı baksın dedik. */}
      </CharacterHeader>
      {/* Bir bastığımda show state'ini true yaparak açılır. Açılmışsa false yaparak kapanır.  */}
      <AccordionBody className={show ? "show" : "hide"}>
          <DatasLine>
            <Key>Height: </Key>
            <Value>{characterData.height}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Mass: </Key>
            <Value>{characterData.mass}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Hair Color: </Key>
            <Value>{characterData.hair_color}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Skin Color: </Key>
            <Value>{characterData.skin_color}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Eye Color: </Key>
            <Value>{characterData.eye_color}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Birth Year: </Key>
            <Value>{characterData.birth_year}</Value>
          </DatasLine>
          <DatasLine>
            <Key>Gender: </Key>
            <Value>{characterData.gender}</Value>
          </DatasLine>
          <DatasLine>
            <h4>
            Appears in {characterData.films.length} films
            </h4>
          </DatasLine>
      </AccordionBody>
    </div>
  );
}
