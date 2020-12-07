import  React from 'react';
import style from './SidebarList.module.scss'

 const SidebarList = ({list, handleChange, text, addNewList, deleteList,addNewListOnKey}) => {

    return (
        <div className={style.sidebar}>
            <div className={style.form} >
                <input value={text} onChange={handleChange} onKeyPress={ addNewListOnKey}  className={style.input} type="text" placeholder="Создать папку"/>
                    <span onClick={ addNewList}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="20px"
                             height="20px"><path d="M0 0h24v24H0z" fill="none"/>
                             <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/>
                        </svg>
                    </span>
            </div>
            <ul className={style.lists}     >
                { list.map((item, index) => <li key={index} className={`${item.isActive ? style.list_active : style.list}`}><span>{(item.name)}</span><button className={style.delete} onClick={() => deleteList(item)}>x</button></li> )}
            </ul>
        </div>
    );
};

 export default SidebarList;