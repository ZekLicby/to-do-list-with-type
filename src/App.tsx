import React, {useState} from 'react'
import * as C from './App.styles'
import {Item} from './types/item'
import {ListItem} from './components/ListItem'

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Finalizar esse projeto aqui", done: false},
    { id: 2, name: "ablublebe", done: false},
  ])

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        {/* Área de adição de tarefas */}

        <ul>
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>

      </C.Area>
    </C.Container>
  )
}

export default App;