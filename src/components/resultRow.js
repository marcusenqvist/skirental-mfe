import texts from '../data/texts.json';

export const ResultRow = ({data}) => {

    const showSpan = data.minLength !== data.maxLength;

    return (
        <div>
            {showSpan &&
                <div className="resultrow-span">
                    <p>{texts.resultParagraph_span}</p>
                    <div className="row justify-content-center">
                        <div className="col-auto result-value">
                            <h3 className="resultrow-text">{data.minLength}</h3>
                        </div>
                        <div className="col-auto">
                            <h3 className="resultrow-text">och</h3>
                        </div>
                        <div className="col-auto result-value">
                            <h3 className="resultrow-text">{data.maxLength}</h3>
                        </div>
                        <div className="col-auto">
                            <h3 className="resultrow-text">cm</h3>
                        </div>
                    </div>
                </div>
            }
            {!showSpan &&
                <div className="resultrow">
                    <p>{texts.resultParagraph}</p>
                    <div className="row justify-content-center">
                        <div className="col-auto result-value">
                            <h3 className="resultrow-text">{data.minLength}</h3>
                        </div>
                        <div className="col-auto">
                            <h3 className="resultrow-text">cm</h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}