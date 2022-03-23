import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {Item} from './types/Item';
import List_item from './components/List_item'
import Add_area from './components/Add_area';

const Container_1a = styled.div`
background-color: #17181F;
color: #797A81;
min-height: 100vh;`

const Container_2a = styled.div`
margin: auto;
max-width: 980px;
padding: 10px;`

const Title_1a = styled.h1`
margin: 0;
padding: 0;
color: #ffffff;
text-align: center;border-bottom: 1px solid #444;
padding-bottom: 20px;
`

export default () => {
  const [list, setList] = useState<Item[]>([{id: 1, name: 'Comparar pão', done: false},
  {id: 2, name: 'Lavar louça ', done: true}]);

  return (
    <Container_1a>
      <Container_2a>
        <Title_1a>
          Lista de Tarefas
        </Title_1a>
        <Add_area/>
        {list.map((item, index)=>(
          <List_item key={index} item={item}/>
        ))}
      </Container_2a>
    </Container_1a>
  )
}