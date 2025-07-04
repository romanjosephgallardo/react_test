import profilePic from './assets/pinkpantheress.jpg'

function Card(){

    return(
        <div className="card"> 
            <img
            src={profilePic}
            alt="profile picture"
            width="150"
            height="150"
            className="card-image"
            />
            <h2 className="card-title"> Jace </h2>
            <p className="card-text"> I study Web Development </p>
        </div>
    );
}

export default Card