import { Component } from "react";

import './card-list.styles.css'

class CardList extends Component {
    render () {
        //*console.log(this.props.monsters);
        //*console.log('render');
        //* components re-render when props change
        const { monsters } = this.props;  //? destructure bc if you need to use this in more places than 1 its easier

        return <div className='card-list'> { monsters.map ((monster) => {
            const { name, email, id } = monster;
            return (
            <div className = 'card-container' key={id}>
                <img alt = {`monster ${name}`} src ={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    )})}
        </div>;
    }
}



export default CardList;