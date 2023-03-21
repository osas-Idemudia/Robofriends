import React from "react";
import Card from './Card';

 const CardList = ({robots}) => {

    //mapping through the CardList
    const cardsArray = robots.map( (user, i) => {
        return  <Card key = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })

   return (
        <div>
            {cardsArray}
        </div>
    )
   }

//note that returing on a single line value dosn't need a bracket()
// ie returning  {cardsArray}     //will work also

// since we are working on javascript we can cut the may func and place it directly to the return.
//note also to remove the const variable. still work the same as above.

// return (
//      robots.map( (user, i) => {
//         return  <Card key = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//         })
// )

// //this below code will outpt only the hardcoded values 
// const CardList = ({ robots}) => {
//     return (
//         <div>
//             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//             <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//             <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//         </div>
//     );
// }

export default CardList;