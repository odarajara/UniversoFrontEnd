import  { useState } from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";

function Contato() {
  const [contatos, setContatos] = useState([]);
  const [contato, setContato] = useState({ nome: '', email: '', comentario: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContato({ ...contato, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/contatos', contato);
      setContatos([...contatos, response.data]);  // Supondo que a API retorne o contato adicionado
      setContato({ nome: '', email: '', comentario: '' }); // Limpar o formulário
      alert('Comentário adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
      alert('Erro ao adicionar comentário!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contatos/${id}`);
      setContatos(contatos.filter(c => c.id !== id)); // Atualizar o estado local
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
    }
  };

  const membros = [
    {
      name: "Gabriel Römer",
      img: "/img/eu.png",
      links: {
        facebook: "https://www.facebook.com/debendersky",
        instagram: "https://www.instagram.com/benderskygabriel/",
        github: "https://github.com/GabrielRomer",
        linkedin: "https://www.linkedin.com/in/gabriel-r%C3%B6mer-4b374922b/"
      }
    },
    {
      name: "Odara Jara",
      img: "/img/Odara.png",
      links: {
        facebook: "https://www.facebook.com/odara.oliveira.71",
        instagram: "https://www.instagram.com/odarajara/",
        github: "https://github.com/odarajara",
        linkedin: "https://www.linkedin.com/in/odara-oliveira-55a7962b5/"
      }
    },
    {
      name: "Luana Marques",
      img: "/img/Luana.jpg",
      links: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        github: "https://github.com/LuanaMarquesDigital",
        linkedin: "www.linkedin.com/in/luana-marques-5895ab276"
      }
    },
    {
      name: "Leonardo Freire",
      img: "/img/Leo.jpg",
      links: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    }
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" className="form-control" value={contato.nome} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" value={contato.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Comentário:</label>
          <textarea name="comentario" className="form-control" value={contato.comentario} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-danger">Adicionar</button>
      </form>

      <div>
        {contatos.map(c => (
          <div key={c.id} className="alert alert-secondary">
            <p>{c.nome} - {c.email} - {c.comentario}</p>
            <button onClick={() => handleDelete(c.id)} className="btn btn-danger">Excluir</button>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        {membros.map(member => (
          <div className="col-md-3" key={member.name}>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={member.img} alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">Desenvolvedor front-end</p>
                <div>
                  <a href={member.links.facebook}><img src="./img/iconsFb.gif" alt="Facebook" /></a>
                  <a href={member.links.instagram}><img src="./img/iconsinstagram.gif" alt="Instagram" /></a>
                  <a href={member.links.github}><img src="./img/iconsgithub.gif" alt="GitHub" /></a>
                  <a href={member.links.linkedin}><img src="./img/iconslinkedin.gif" alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>
              <img src="./img/icons8-crown-48.png" />
              Professor Nivaldo
            </th>
          </tr>
        </thead>
      </Table>
      </div>
    </>
  );
}

export default Contato;
