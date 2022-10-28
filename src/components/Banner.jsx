import App from "../App";

const Banner = ({props}) => {
    console.log('banner component!');
    
    return(
        <div>
        {props.title}
        </div>
    );
    

}

export default Banner;