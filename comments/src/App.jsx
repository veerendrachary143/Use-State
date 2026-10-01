
import Comments from "./components/Comments";
import './App.css'
import {useState} from 'react'

const initialCommentsDetails =[
    {
      id:1,
      name:"rahul",
      comment:"this is my first comment",
    },
    {
      id:2,
      name:"chary",
      comment:"this is my second comment",
    },
    {
      id:3,
      name:"uday",
      comment:"this is my third comment",
    }
  ]


const App = () => {
  const[searchinput,setsearchinput] = useState("")
  const[commentsdetails,setcommentsdetails] = useState(initialCommentsDetails)
  
  const onChangesearchinput = (event) => {
    setsearchinput(event.target.value)
  }
  const filteredcomments = commentsdetails.filter((eachitem) =>
   eachitem.name.toLowerCase().includes(searchinput.toLowerCase())
     //eachitem.comment.includes(searchinput)
    
  );

  const onDeleteComment =(id) => {
    const filteredComments = commentsdetails.filter((item) => item.id !== id)
    
    setcommentsdetails(filteredComments)
  }

  return (
    <div>
      <h1>Comments</h1>
      <input 
        type="search" 
        onChange={onChangesearchinput}
        value={searchinput} 
        
      />
      {
        filteredcomments.map((eachitem) => (
          
          <Comments details={eachitem}
           key={eachitem.comment} 
           deleteComment={onDeleteComment}/>
          // <Comments details={eachitem} key={eachitem.comment} />
        
        ))
      }

    </div>
    
  )
}

export default App
