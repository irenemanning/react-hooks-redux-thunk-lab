// write your CatList component here
import React from "react";

function CatList({catPics}) {
    console.log(catPics)
    return (
        <div>
            {catPics.map(pic => (
                <li key={pic.id}>
                    <img src={pic.url} alt="cat"/>
                </li>
            ))}
        </div>
    )
}

export default CatList