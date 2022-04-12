import NavMenu from './../components/NavMenu';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IzmenaCokolade(props) {

    const [vrednosti, setVrednosti] = useState({
        naziv: '',
        opis: '',
        cena: '',
    });

    const [cokolade, setCokolade] = useState([]);

    var param = useParams();

    useEffect(() => {

        axios.get(`api/izmena-cokolade/${param.id}`).then(res => {
            if (res.data.status === 200) {

                setVrednosti({
                    ...vrednosti,
                    naziv: res.data.cokolada.naziv,
                    opis: res.data.cokolada.opis,
                    cena: res.data.cokolada.cena
                });

            }
            else {
                alert('Greska');
            }
        });



    }, []);



    const [slika, setSlika] = useState([]);

    const handleSlika = (e) => {
        setSlika({ slika: e.target.files[0] });
    }

    const sacuvajIzmene = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('slika', slika.slika);
        formData.append('naziv', vrednosti.naziv);
        formData.append('opis', vrednosti.opis);
        formData.append('cena', vrednosti.cena);


        axios.post(`api/sacuvaj-izmene/${param.id}`, formData).then(res => {
            if (res.data.status === 200) {
                alert('Cokolada uspešno izmenjena')
            } else {
                alert('Greska')
            }
        });


    }

    return (
        <div className="novacokolada-div">
            <NavMenu />


            <div className="novacokolada-form">
                <form onSubmit={sacuvajIzmene} encType="multipart/form-data">
                    <div className="mb-3 mt-3">
                        <label>Naziv: </label>
                        <input type="text" className="form-control" value={vrednosti.naziv} onChange={e => setVrednosti({ ...vrednosti, naziv: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Opis: </label>
                        <input type="text" className="form-control" value={vrednosti.opis} onChange={e => setVrednosti({ ...vrednosti, opis: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Slika: </label>
                        <input type="file" name="slika" className="form-control" onChange={handleSlika} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-label">Cena: </label>
                        <input type="number" className="form-control" value={vrednosti.cena} onChange={e => setVrednosti({ ...vrednosti, cena: e.target.value })} />
                    </div>

                    <button type="submit" id="btn" className="btn btn-primary mt-3">Sačuvaj izmene</button>
                </form>
            </div>



        </div>
    );
}

export default IzmenaCokolade;