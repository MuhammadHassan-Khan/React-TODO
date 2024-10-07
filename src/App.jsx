import { useState } from "react";
// import button from "./component/btn/index.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


function App() {
  // const [name,setname] = useState("Hasssan");
  // const [count,setCount] = useState(0);
  // console.log(button);

  //   const [text,settext] = useState("");
  //   const [list,setlist] = useState([]);

  //   const addtodo = () =>{
  //     list.push(text);
  //     setlist([...list]);
  //    console.log(list);
  //   }

  //   return (
  //   <>
  //   <div style={{textAlign:"center"}} >

  //   <input onChange={(e)=> settext(e.target.value)} />


  //   <button onClick={addtodo}>ADD</button>
  // <ul>

  //  {list.map((v,i)=> {
  //     <div key={i}>
  //        <li>{v}</li>
  //     </div>
  // })}  
  // </ul>
  // </div>









  {/* <Card style={{ width: '18rem', margin:"10px",border:"solid " }}>
  <Card.Body>
  <Card.Title> <h1>Results {count}</h1></Card.Title>
  <Button style={{marginTop:"30px"}} variant="secondary" onClick={()=>setCount((count)=> count + 1   )}>Increment</Button>{' '}
  <Button style={{marginTop:"30px"}} variant="secondary" onClick={()=>setCount((count)=> count -1    )}>Decrement</Button>{' '}
  </Card.Body>
   </Card> */}


  {/* <p>hello {name}</p>
  <button onClick={()=>{
    setname("KHan")
    }}>change</button> */}

  // </>

  // )





  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const addTodo = () => {
    list.push(text);
    setList([...list]);
    console.log(list);
  };



  return (





    <div style={{position:"relative"}}>

      


        <Card style={{ width: '18rem',textAlign:"center" ,position:"absolute",left:"500px" }}>
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{text}</Card.Subtitle>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Task"
                aria-label="Task"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
              />
              <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
                Add
              </Button>
            </InputGroup>
            <ul>
              {list.map((x, i) => (
                <li key={i}>{x}
                  <button onClick={(i) => {
                    list.splice(i, 1)
                    setList([...list])
                  }} > Delete </button>

                  <button >Edit</button>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
     
    </div>
  );





}

export default App