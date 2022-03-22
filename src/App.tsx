import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: #17181F;
color: #797A81;
min-height: 100vh;
div {
  margin: auto;
  max-width: 980px;
  padding: 10px;
  h1 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-align: center;border-bottom: 1px solid #444;
    padding-bottom: 20px;

  }
}
`

export default () => {

  return (
    <>
      <Container>
        <div>
          <h1>
            Lista de Tarefas
          </h1>
        </div>
      </Container>
    </>
  )
}