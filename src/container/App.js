import React from "react";
import { Component } from "react";
import PokeList from '../components/PokeList';
import ModalPoke from '../components/ModalPoke';
import SearchPoke from "../components/SearchPoke";
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import pokebola from '../pokebola.svg'

class App extends Component{

    constructor(){
        super();
        this.state ={
            pokes:[],
            pokeModalDetails:{},
            showModal:false,
            searchField:'',
        }
    }

    
    componentDidMount(){
      const fetchPoke = async() =>{
        const pokeFetch= await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const dataPokes = await pokeFetch.json();
        this.setState({pokes:dataPokes.results});
      }      
      fetchPoke();
    }


    handleModalClose = () =>{
        this.setState({showModal:false});
    }

    
    clickOnPoke = (event) =>{
        const URI = event.target.attributes.url.value;
        const getPokeDetails = async () =>{
            const fetchURI = await fetch(URI);
            const pokeDetails = await fetchURI.json();
            this.setState({pokeModalDetails:pokeDetails});
        } 
        getPokeDetails();
        this.setState({showModal:true});
    }

    onSearchPoke = (event) =>{
        this.setState({searchField:event.target.value})
    }


    
    render(){
        const {pokes,searchField} = this.state

        const modalLenght = Object.keys(this.state.pokeModalDetails).length;

        const filteredPokeArray = pokes.filter((poke) =>{
            return(
                poke.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            );
        })


        if(modalLenght && this.state.showModal){
            return(
                <>
                <div className='d-flex sticky-top justify-content-between poke-bg  align-items-center px-5'>
                <img src={pokebola} alt="pokebola"/>
                <div className="fs-1 poke-font text-center">Poke App</div>
                <SearchPoke onSearchPoke={this.onSearchPoke}/>
                </div>
                <ErrorBoundary>
                    <ModalPoke modalDetails={this.state.pokeModalDetails} show={this.state.showModal} handleClose={this.handleModalClose}/>
                </ErrorBoundary>
                
                </>
                
            );
        }else{
            return(
                !pokes.length ? <h1>Loading Pokes...</h1> :
                <>
                    <div className='d-flex sticky-top justify-content-between poke-bg  align-items-center px-5'>
                        <img src={pokebola} alt="pokebola"/>
                        <div className="fs-1 poke-font text-center">Poke App</div>
                        <SearchPoke onSearchPoke={this.onSearchPoke}/>
                    </div>
                    <ErrorBoundary>
                        <PokeList pokesArray={filteredPokeArray} clickOnPoke={this.clickOnPoke} />
                    </ErrorBoundary>
                </>
            );
        }
    }
};

export default App;