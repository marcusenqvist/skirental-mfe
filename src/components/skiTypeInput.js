import { skiTypes } from "../data/types"
import texts from '../data/texts.json';

export const SkiTypeInput = ({onChange}) => {
    return(
        <div className="row">
            <div className="col-md-3 align-self-center">
                <h6>{texts.skiTypeInput}</h6>
            </div>
            <div className="col-md-4">
            <select onChange={e => onChange(e.target.value)} defaultValue='' className="field select form-control">
                    <option value='' disabled>Välj</option>
                    <option value={skiTypes.CLASSIC}>Klassisk</option>
                    <option value={skiTypes.FREESTYLE}>Fristil</option>
                </select>
            </div>
        </div>
    )
}