import WelcomButton from "../../components/buttons/WelcomeButton/WelcomeButton";
import Face from "../../components/social-midias/Face";
import Insta from "../../components/social-midias/Insta";
import Twitter from "../../components/social-midias/Twitter";
import style from "./style.module.css";

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className={style.welcome}>
      <h1>Bem-vindo ao Raquete Perfeita!</h1>
      <h2>
        Descubra qual é a melhor raquete para você após algumas perguntas...
      </h2>
      <WelcomButton child="Play!" className={style.btn} onClick={onStart} />
      <div className={style.socialMedias}>
        <a href="#" target="_blank">
          <i>
            <Insta />
          </i>
        </a>
        <a href="#" target="_blank">
          <i>
            <Twitter />
          </i>
        </a>
        <a href="#" target="_blank">
          <i>
            <Face />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
