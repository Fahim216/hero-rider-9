import React, { useState } from 'react';

const Destination = () => {
const[details,setDetails]=useState(false);
const [search,setSearch]=useState([{
    Location1:'',
    Location2:''
}]);
const handleChange=(e)=>{
    if(e.target.name==='from'){
        const location1=e.target.value;
        const newSearch={...search,location1}
        setSearch(newSearch)
    }
    if(e.target.name==='To'){
        const location2=e.target.value;
        const newSearch={...search,location2}
        setSearch(newSearch);

    }

}
const handleSubmit=(e)=>{
    e.preventDefault();

}


    return (
        <div>
            <div  style={{ marginLeft:"100px"}}>
        <form action="">
            <h5>From</h5>
            <br />
            <input type="text" name="from" id="" placeholder="from" onBlur={handleChange} />
            <br />
            <h5>To</h5>
            <input type="text" name="To" id="" placeholder="to"onBlur={handleChange} />
            <br />
            <br />
        </form>
        <button onClick={handleSubmit}>Search</button>
        </div>
        <div style={{padding:'20px',marginLeft:'100px',border:'1px solid purple',marginTop:'30px',width:'500px'}}>
            <h1>From:{search.location1}</h1>
            <h1>To:{search.location2}</h1>
        </div>
        </div>
    );
};

export default Destination;