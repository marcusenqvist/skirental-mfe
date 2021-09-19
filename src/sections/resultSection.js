import { ResultRow } from '../components/resultRow';
import { ageTypes, skiTypes } from '../data/types';
import texts from '../data/texts.json'

export const ResultSection = ({data, age, skiType, onClickBack}) => {

    const showFreestyleInfo = age === ageTypes.ADULT && skiType === skiTypes.FREESTYLE;

    return (
        <div>
            <div className="skirental-result">
                {showFreestyleInfo && 
                <div className="alert alert-info freestyle-alert">
                    <p>{texts.freestyleWarning}</p>
                </div>
                }
                <h3>{texts.resultHeader}</h3>
                <div className="result-body">
                    <ResultRow data={data}/>
                </div>
            </div>
            <div className="footer">
                <button onClick={onClickBack} className="btn btn-primary">{texts.btn_back}</button>
            </div>
        </div>
    )
}