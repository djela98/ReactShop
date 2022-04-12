import NavMenu from "../components/NavMenu";
import { useState } from 'react'

function Convertor() {

    const [vrednosti, setVrednosti] = useState({
        iznos: '',
        izValute: '',
        uValutu: ''
    });


    const konvertuj = () => {

        if (vrednosti.iznos === '' || vrednosti.izValute === '' || vrednosti.uValutu === '') {
            alert('Potrebno je da popunite sva polja!');
            return;
        }

        fetch("https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=" + vrednosti.izValute + "&want=" + vrednosti.uValutu + "&amount=" + vrednosti.iznos, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43"
            }
        })
            .then(response => response.json())
            .then(response => {
                alert(response.old_amount + " " + response.old_currency + " = " + response.new_amount + " " + response.new_currency);
            })
            .catch(err => {
                alert(err);
            });
    }


    return (
        <div className="convertor-div">
            <NavMenu />
            <div className="konvertor">
                <div className="mb-2">
                    <label>Iznos: </label>
                    <input type="number" name="iznos" className="form-control  text-center" value={vrednosti.iznos} onChange={e => setVrednosti({ ...vrednosti, iznos: e.target.value })} />
                </div>
                <div className="mb-2">
                    <label>Iz valute: </label>
                    <input type="text" name="izValute" className="form-control  text-center" value={vrednosti.izValute} onChange={e => setVrednosti({ ...vrednosti, izValute: e.target.value })} />
                </div>
                <div className="mb-2">
                    <label>U valutu: </label>
                    <input type="text" name="uValutu" className="form-control  text-center" value={vrednosti.uValutu} onChange={e => setVrednosti({ ...vrednosti, uValutu: e.target.value })} />
                </div>
                <div className="mb-2">
                    <button type="button" id="konv-btn" className="btn btn-danger btn-lg" onClick={konvertuj}>Konverzija</button>
                </div>
            </div>
        </div>
    )
}

export default Convertor;