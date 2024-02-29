import { Component } from "react";


function Pokemon ({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export class AjaxApis extends Component{
    state = {
        pokemons: []
    };
   
    async componentDidMount(): Promise<void> {
        let url= "https://pokeapi.co/api/v2/pokemon/"

        const res = await fetch(url);
        const data = await res.json();
        
        const pokemons = [];
        for (const el of data.results) {
          const res = await fetch(el.url);
          const dataImg = await res.json();
    
          pokemons.push({
            id: dataImg.id,
            name: dataImg.name,
            img: dataImg.sprites.front_default,
          });
          
        }
    
        this.setState({pokemons})        
    }

    render(){
        return (
            <>
                <h3>Pokemons</h3>
                {this.state.pokemons.map(({ name, img, id}) => 
                    <Pokemon key={id} name={name} avatar={img} />
                )}
                
            </>
        )
    }
}