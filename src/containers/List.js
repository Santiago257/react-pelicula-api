//Lista de peliculas
import React, {Fragment} from "react"
import Card from "../components/Card/Card"

//Aqui colocaremos la direccion de nuestra API en una constante

//Aqui ocuparemos la API segun una variable de entorno
const API = process.env.API;

class List extends React.Component {

    constructor( ){
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: '',
            loading: true
        }
    }

    //Aqui obtenemos los datos de la pelicula almacenados en la API
    async componentDidMount () {
        //Esto era para el ejemplo de los datos obtenidos por el data.json
        //const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json ()
        console.log(resJSON)
        this.setState({data: resJSON.Search, loading:false})
    }
    //Comprobacion de escribir un texto valido en el input
    async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm) {
            return this.setState({error: 'Por favor escribe un texto valido'})
        }

        const res = await fetch (`${API}&s=${this.state.searchTerm}`)
        const data = await res.json();

        //Comprobacion de error si no hay resultados
        if(!data.Search){
            return this.setState({error: "No hay resultados"});
        }

        //Limpiamos el mensaje de error y del texto valido
        this.setState({data: data.Search, error: '', searchTerm: ''})
    }

    render (){

        const { data, loading } = this.state;
        if(loading){
            return <h3 className="text-ligth">Cargando...</h3>
        }


        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4" >
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                                type="text" 
                                className= "form-control" 
                                placeholder= "Buscar..."
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                value= {this.state.searchTerm}
                                autoFocus
                                />
                        </form>
                        <p className="text-white">{this.state.error ? this.state.error : ''}</p>
                    </div>
                </div>
                <div className="row">
                {
                    data.map((movie, i) => {
                    return <Card movie={movie} key={i} />
                    })
                }
            </div>
            </Fragment>
        )
    }
}

export default List