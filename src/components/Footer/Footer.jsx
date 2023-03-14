import { Box } from '@mui/material';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerContainer">
           <div className="innerContainer">
                <p> Quiz Created by Alexander Blanchard </p>
                <p><a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a></p>
                <p>Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=46134">Pixabay</a></p>
            </div>
        </div>
    )
}
export default Footer;