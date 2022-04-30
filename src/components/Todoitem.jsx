
import "./todo.css"
export const Todoitem =({todo,togglecheck})=>{
    return (
        <div className="todoitems">
            
            {todo.id}---{todo.title}---{todo.status ? "Done":null}
            
           
            <input type="checkbox"  onClick={()=>{togglecheck(todo.id,todo.status)}} />
            

        </div>
        
    )
}