import texts from '../data/texts.json';

export const HeightInput = ({onChange}) => {

    function numberOnly() {
        var element = document.getElementById("heightInput");
        element.value = element.value.replace(/[^0-9]/gi, "");
    }

    return(
        <div className="row">
            <div className="col-md-3 align-self-center">
                <h6>{texts.heightInput}</h6>
            </div>
            <div className="col-md-4">
                <div className="input-group">
                    <input id="heightInput" onInput={() => numberOnly()} className="field form-control" type='tel' maxLength={3} onChange={e => onChange(e.target.value)} placeholder={texts.heightInput_placeholder}>
                    </input>
                    <div className="input-group-append">
                        <span className="input-group-text">cm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}