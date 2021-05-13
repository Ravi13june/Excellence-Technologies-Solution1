// Note: Given link is not opening properly
// For fetching data from a webapi we use http promises
// I am using axios react dependency for http get request
// npx create-react-app fetchdatafromwebapi
// after creating project we install dependencies
// axios for making http request
// reactstrap and bootstrap for styling.

//App.js
Import React,{useState,useEffect} from “react”;
const App = () =>{
const [details, setDetails] = useState([]);
//state can be initialize with string array object number depends upon requirement
const fetchData = async () =>{
const {data} = await Axios.get(`http://www.example.com/api/get/1`);
const details = data;
setDetails(details);
};
useEffect(()=>{ //useEffect tells to browser that you have to render something before page load
fetchData();
},[]);
return(
<div>
{
details.map(detail,index)=>{
<li key={index}>
{details.name}
//can be anything I am not aware of api data format
</li>
}
}
</div>
)
}
export default App;