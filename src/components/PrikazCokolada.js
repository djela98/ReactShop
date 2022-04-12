import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PrikazCokolada() {

    const [cokolade, setCokolade] = useState([]);

    useEffect(() => {
        axios.get(`api/prikazi-cokolade`).then(res => {
            if (res.data.status === 200) {
                setCokolade(res.data.cokolade);
            }
        });
    }, []);


    var body = '';
    var body =
        cokolade.map((cokolada) => {
            return (
                <tr key={cokolada.id}>
                    <td>{cokolada.id}</td>
                    <td>{cokolada.naziv}</td>
                    <td>{cokolada.opis}</td>
                    <td><img src={`http://localhost:8000/${cokolada.slika}`} width="100px" /></td>
                    <td>{cokolada.cena}</td>
                    <td>
                        <Link to="izmena-cokolade" className="btn btn-info">Izmeni</Link>
                        <button className="btn btn-danger">Obriši</button>
                    </td>
                </tr>
            )
        })




    return (
        <div className="prikazcokolada-div">
            <div className="tabela-dash">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naziv</th>
                            <th>Opis</th>
                            <th>Slika</th>
                            <th>Cena - RSD</th>
                            <th>Izmeni/Obriši</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PrikazCokolada;