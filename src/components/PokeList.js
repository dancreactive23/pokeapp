import React from "react";
import Poke from './Poke';

const PokeList = ({pokesArray,clickOnPoke}) =>{
    return(
    <div className="container text-center my-5">
        <div className="row row-cols-auto g-3 justify-content-center">
            {
                pokesArray.map((poke,index)=>{
                    return(
                        <Poke name={poke.name} key={index} clickOnPoke={clickOnPoke} url={poke.url}/>
                    );
                })
            }
        </div>
    </div>

    );
   

}

export default PokeList;