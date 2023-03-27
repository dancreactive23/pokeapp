import React from "react";

const Poke = ({name,clickOnPoke,url}) =>{

    const id = url.match(/\/(\d+)\//)[1];

    return(
        <div className="col">
            <div className="card rounded-5 p-3 bg-dark bg-gradient border-light" data-bs-toogle='modal' data-bs-target={id} style={{width:'20rem'}} onClick={clickOnPoke} id={name} >
                <a className="text-decoration-none link-light stretched-link" href={`#${name}`} url={url}>
                    <h2 className="card-tittle text-light" >{name}</h2>
                </a>
                <img className="card-img mx-auto d-block" url={url} style={{width:'120px',height:'120px',border:'none'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} alt='...'></img>
            </div>
        </div>
    );
};

export default Poke;