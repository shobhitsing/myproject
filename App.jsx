import React ,{useEffect,useState}from 'react';
import './index.css';
import Card from './Cards';
 import axios from "axios";
 const App = () => {
const [data,setdata]=useState([])

   useEffect(()=>{
     const fetchData = async () => {
      fetch("https://api.github.com/users").then((result)=>{
      result.json().then((resp)=>{
        setdata(resp)
      })   
     }) 
     }  
     fetchData()
   },[])

  // useEffect(()=>{

  //   const api = async () => {
  //     const resp = await axios.get("https://api.github.com/users");
  //     setdata(resp)
  //   }
  //   api();
  // },[]);
  // console.log(data);
    



  //  const [user, setUsers] = useState([]);
  //  useEffect(() => {
  //          const getUsers = async () => {
  //          const response = await fetch('https://api.github.com/users');
  //          setdata(await response.json());
       
  //  }

  
  //      getUsers();
  //  }, []);


    return (
        <>
        <div>
            <h1 className="heading_style">Top 20 GitLab in 2021</h1>
             {
              data.map(item => {
                 return (
                   <Card api={item} />
                 )
               })
             }
        </div>,
        </>
    )
}
export default App;