function TodoItems (props) {

  function handleRemove(e) {
    props.removeItem(e.target.id)
  }

  function handleEdit (e){
    props.editItems(e.target.id, e.target.value)
  }

  return props.tasks.map(item => {
    return (
      <li style={{listStyleType:'none'}} key={item.id} >
        <input style={{color: 'blue'}} id={item.id} defaultValue={item.title} onBlur={handleEdit}/>  &nbsp;
        <span id={item.id} className="remove-item" onClick={handleRemove}>(Remove)</span>
      </li>
    )
  });
}

export default TodoItems;
