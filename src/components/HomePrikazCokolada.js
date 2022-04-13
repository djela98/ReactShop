import { useEffect, useState } from 'react';
import axios from 'axios'


function HomePrikazCokolada() {

    const [cokolade, setCokolade] = useState([]);
    const [pretraga, setPretraga] = useState();
    const [kriterijum, setKriterijum] = useState();
    const [poredak, setPoredak] = useState();

    useEffect(() => {
        axios.get(`api/prikazi-cokolade`).then(res => {
            if (res.data.status === 200) {
                setCokolade(res.data.cokolade);
            }
        });
    }, []);


    var prikaz = '';
    var prikaz =
        cokolade.map((cokolada) => {
            return (
                <div className="cokolada-home-div" key={cokolada.id}>
                    <h3 id="cokolada-naziv">{cokolada.naziv}</h3>
                    <img src={`http://localhost:8000/${cokolada.slika}`} width="150px" height="150px" />
                    <h4 id="cena">{cokolada.cena}.00 RSD</h4>
                    <button type="button" id='btn-korpa' className="btn btn-danger">Dodaj u korpu</button>
                </div >
            )
        })


    function search() {

        if (pretraga == undefined) {
            alert('Unesite naziv čokolade')
            return
        }

        const data = {
            kriterijum: pretraga
        }


        axios.post(`api/pretraga`, data).then(res => {
            if (res.data.status === 200) {
                setCokolade(res.data.cokolade);
            }
            else {
                alert('Nema čokolada sa traženim nazivom')
            }
        })


    }


    function handleKriterijum(e) {
        setKriterijum(e.target.value);
    }

    function handlePoredak(e) {
        setPoredak(e.target.value);
    }

    function sort() {

        const data = {
            kriterijum: kriterijum,
            poredak: poredak
        }

        axios.post(`api/sort`, data).then(res => {
            if (res.data.status === 200) {
                setCokolade(res.data.cokolade);
            }
        })

    }


    return (
        <div className="homeprikazcokolada-div">
            <div className="pretragaisortiranje-div">
                <div className="pretraga-div">
                    <input type="text" id='pretraga-input' className="form-control" value={pretraga} onChange={e => setPretraga(e.target.value)} placeholder='Unesite naziv čokolade' />
                    <button type="button" id='btn-pretraga' onClick={search} className="btn btn-primary">Pretraga</button>
                </div>
                <div className="sort-div">
                    <label id='lbl-krit'>Kriterijum: </label>
                    <select id='slct-krit' className="form-select" onChange={handleKriterijum}>
                        <option>Izaberi</option>
                        <option value={'naziv'}>Naziv</option>
                        <option value={'cena'}>Cena</option>
                    </select>
                    <label id='lbl-pored'>Poredak: </label>
                    <select id='slct-pored' className="form-select" onChange={handlePoredak}>
                        <option>Izaberi</option>
                        <option value={'asc'}>Rastući</option>
                        <option value={'desc'}>Opadajući</option>
                    </select>
                    <button type="button" id='btn-sort' onClick={sort} className="btn btn-primary">Sort</button>
                </div>
            </div>
            <div className='cokolade-flex'>
                {prikaz}
            </div>
        </div>
    )
}

export default HomePrikazCokolada;