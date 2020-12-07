import React, {useState, useEffect} from 'react';
import './_normalize.scss'
import './App.scss';
import SidebarList from "./component/sidebar/SidebarList";
import List from "./component/todo-list/List";
import axios from 'axios'

function App() {
    const [text, setText] = useState('');
    const [list, setList] = useState([])
    const handleChange= (e) => {
        const newText = e.target.value
        setText(newText)
    }
    const postNewList = () => {
        axios.post(`http://localhost:3001/lists`, {
            name: text,
            colorId: 5,
            isActive: false
        }).then(({data}) => {
            setList([...list, data],
                setText('')
            )
        })
    }
    const  addNewList = () => {
        if (text){
            postNewList()
        }
    }
    const  addNewListOnKey = (e) => {
        if (text && e.key === "Enter"){
            postNewList()
        }
    }
    const onRemove = (id) => {
        const newList = list.filter( item => item.id !==id )
        console.log(newList)
        setList(newList)
    }
    const deleteList = (item) => {
         axios.delete(`http://localhost:3001/lists/` + item.id).then(() => {onRemove(item.id)})
    }
    useEffect(() => {
        axios.get(`http://localhost:3001/lists`).then(({data}) => setList(data))
    }, [])

    return (
    <div className="App">
        <div className="wrapper">
            <SidebarList
                text={text}
                handleChange={handleChange}
                list={list}
                addNewList={addNewList}
                deleteList={deleteList}
                addNewListOnKey={addNewListOnKey}
            />
            <List/>
        </div>
    </div>
  );
}
export default App;
