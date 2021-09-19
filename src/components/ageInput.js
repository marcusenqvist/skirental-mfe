import { ageTypes } from "../data/types"
import texts from '../data/texts.json';

export const AgeInput = ({onChange}) => {
    return(
        <div className="row">
            <div className="col-md-3 align-self-center">
                <h6>{texts.ageInput}</h6>
            </div>
            <div className="col-md-4">
                <select onChange={e => onChange(e.target.value)} defaultValue='' className="field select form-control">
                    <option value='' disabled>Välj</option>
                    <option value={ageTypes.TODDLER}>0-4 år</option>
                    <option value={ageTypes.CHILD}>5-8 år</option>
                    <option value={ageTypes.ADULT}>Över 8 år</option>
                </select>
            </div>
        </div>
    )
}