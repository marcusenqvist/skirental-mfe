import { useState } from 'react';
import { sendGetSkis } from './api/skiRentalApi';
import { sections } from './data/types';
import { FormSection } from './sections/formSection';
import { ResultSection } from './sections/resultSection';
import texts from './data/texts.json'

function App() {
    
    const [section, setSection] = useState(sections.FORM);
    const [height, setHeight] = useState(); 
    const [age, setAge] = useState();
    const [skiType, setSkiType] = useState();
    const [data, setData] = useState({});
    
    const canSend = height && age && skiType;

    function sendRequest () {
        var promise = sendGetSkis(height, age, skiType);

        promise
        .then(result => {
            setData(result);
            setSection(sections.RESULT)
        })
    }

    function resetForm () {
        setHeight();
        setAge();
        setSkiType();
        setData();
        setSection(sections.FORM);
    }

    return (
        <div className="skirental-root">
            <div className="container pt-5">
                <div className="card p-3 w-75">
                    <h1 className="header-title">{texts.title}</h1>
                    {section === sections.FORM &&
                        <FormSection
                        setHeight={setHeight}
                        setAge={setAge}
                        setSkiType={setSkiType}
                        canSend={canSend}
                        onClickSend={() => sendRequest()}
                        />
                    }
                    {section === sections.RESULT &&
                        <ResultSection
                        data={data}
                        age={age}
                        skiType={skiType} 
                        onClickBack={() => resetForm()}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
