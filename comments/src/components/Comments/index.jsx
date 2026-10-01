import './index.css'
const Comments =(props)=>{
    const{details,deleteComment}=props;
    const{name,comment,id} = details;
    const onDelete = () => {
        deleteComment(id)
    }
    return(
        <li>
    
            <h2>{name}</h2>
            <p>{comment}</p>
            
              <button type="submit"  className="delete-button" onClick={onDelete}> 
              <img
                 src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
                 alt="cross"className="delete-img"
          />
        </button> 
        <hr/>
        
        </li>
    )
}
export default Comments