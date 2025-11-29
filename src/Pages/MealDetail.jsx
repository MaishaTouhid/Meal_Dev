import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const s = {
    box: { display: "flex", padding: 16, maxwidth: 2000, gap: 16 },
    img: { width: "100%", borderRadius: 6, marginBottom: 8 }

};


export default function MealDetail() {

    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(r => r.json())
            .then(j => setMeal(j.meals?.[0] ?? null))
            .catch(e => { })
    }, [id]);

    return (
        <div style={{ padding: 20 }}>
            <p><Link to="/categories">Back to categoris</Link></p>
            {meal && (
                <div style={s.box}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={s.img} />
                    <div>
                        <h2>{meal.strMeal}</h2>
                        <div style={{ marginBottom: 8 }}>
                            <strong>Category:</strong>{meal.strCategory} | <strong>Area:</strong>{meal.strArea}
                        </div>
                        <p style={{ lineHeight: 1.5 }}>{meal.strInstructions}</p>
                        {meal.strYoutube && <p><a href={meal.strYoutube}> Watch on youtube</a></p>}
                    </div>

                </div>

            )}

        </div>
    );
}
