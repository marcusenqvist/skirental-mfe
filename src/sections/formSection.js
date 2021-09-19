import { AgeInput } from "../components/ageInput";
import { HeightInput } from "../components/heightInput";
import { SkiTypeInput } from "../components/skiTypeInput";
import texts from '../data/texts.json';

export const FormSection = ({setHeight, setAge, setSkiType, canSend, onClickSend}) => {
    
    return (
        <div>
            <p>{texts.formParagraph}</p>
            <form className="skirental-requestform">
                <div className="form-row">
                    <HeightInput onChange={(x) => setHeight(x)}/>
                </div>
                <div className="form-row">
                    <AgeInput onChange={(x) => setAge(x)}/>
                </div>
                <div className="form-row">
                    <SkiTypeInput onChange={(x) => setSkiType(x)}/>
                </div>
            </form>
                <div className="footer right">
                    <button disabled={!canSend} onClick={onClickSend} className="btn btn-primary send-request-btn">{texts.btn_getSkis}</button>
                </div>
        </div>
    )
}