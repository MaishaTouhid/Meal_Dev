import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const s = {
    grid: { display: "flex",flexWrap:"wrap", gap: 16 },
    card: { width: 180, padding: 10, border: "1px solid", borderRadius: 8, textDecoration: "none", color: "inherit" },
    img: { width: "100%", borderRadius: 6, marginBottom: 8 }

};



export default function Meals() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(name)}`)
        
            .then(r => r.json())
            .then(j => setMeals(j.meals ?? []))
            .catch(e => { })
    }, [name]);

    let food = [];
    for (let i = 0; i < meals.length; i++) {
        const m = meals[i];
        food.push(
            <Link key={m.idMeal} to={`/meal/${m.idMeal}`} style={s.card}>
                <img src={m.strMealThumb} alt={m.strMeal} style={s.img} />
                <div>{m.strMeal}</div>
            </Link>
        );
    }

    return (
        <div style={{ padding: 20 }}>
            <p><Link to="/categories">Back to categories</Link></p>
            <h2>Meals in {name}</h2>
            {meals.length > 0 && <div style={s.grid}> {food}</div>}
        </div>
    );
}










