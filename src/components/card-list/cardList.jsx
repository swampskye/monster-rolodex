import './card-list.css'
import Card from "../card/card";



import React from 'react'

const CardList = (props) => {

    const { monsters } = props
    // const CardList = ({ monsters }) => {


    // console.log(monsters)
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return (
                    <Card key={monster.id} monster={monster} />
                )
            })}
        </div>
    )
}

export default CardList;

// class CardList extends Component {



//     render() {
//         console.log(this.props.monsters);
//         console.log('render CardList');
//         const { monsters } = this.props;

//         return (

//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return (
//                         <Card monster={monster} />
//                     )
//                 })}
//             </div>

//         )
//     }

// }

// export default CardList;