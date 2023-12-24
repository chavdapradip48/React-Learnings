import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { Provider } from 'react-redux'
import {store} from './redux/store'

export const TodoAppRedux = () => {
  return (
    <Provider store={store}>
      <div id="todos-section" className='w-3/4' style={{marginLeft:"10%"}}>
        <h1 className='text-center mt-12'>Learn about redux toolkit</h1>
        <AddTodo/>
        <Todos />
      </div>
    </Provider>
  )
}
