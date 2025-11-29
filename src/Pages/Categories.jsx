
import {  useEffect,useState } from "react";
import{Link} from "react-router-dom";

const s ={
  grid: { display : "flex",flexWrap:"wrap",gap:16},
  card:{width:250, padding:10, border:"1px solid",borderRadius:8,textDecoration:"none",color:"inherit"},
  img:{width:"100%",borderRadius:6,marginBottom:8}

};

export default function Categories(){
  const[items,setItems]=useState([]);

  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(r => r.json())
    .then(j => setItems(j.categories ?? []))
    .catch(e=>{})
  }, []);

  let cats=[];
 for(let i =0; i < items.length; i++){
  const c = items[i];
  cats.push(
    <Link key ={c.idCategory} to= {`/categories/${encodeURIComponent(c.strCategory)}`} style ={s.card}>
      <img src={c.strCategoryThumb} alt ={c.strCategory} style={s.img}/>
      <strong> {c.strCategory}</strong>
      <p style={{fontSize:19,color:"black"}} >{c.strCategoryDescription.substring(0,100)}</p>
    </Link>
  );
 }

  return (
    <div style={{padding:20}}>
      <h2> Categories</h2>
      {items.length > 0 && <div style={s.grid}> {cats}</div>}
    </div>
  );

}

