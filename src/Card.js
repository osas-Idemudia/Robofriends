import React from "react";

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?100x100`} alt="robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

//using destructuring on props
// const Card = (props) => {
//     const { name, email, id} = props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src={`https://robohash.org/${id}?100x100`} alt="robots" />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }


//received and destructure props within the function parameter  === the best way
// const Card = ({ name, email, id}) => {
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src={`https://robohash.org/${id}?100x100`} alt="robots" />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );


// }
export default Card;