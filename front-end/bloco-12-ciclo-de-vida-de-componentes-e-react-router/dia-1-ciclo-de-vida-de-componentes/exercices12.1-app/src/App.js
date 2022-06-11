import React from 'react';

class App extends React.Component {

  state = {
    message: '',
    nome: '',
    // array: [],
  }

  // fetchDog = async () => {
  // const dadosRecebidos = await fetch('https://dog.ceo/api/breeds/image/random');
  // const objetoRecebido = await dadosRecebidos.json();
  // this.setState(
  // {
  // message: objetoRecebido.message,
  // status: objetoRecebido.status,
  // }
  // )
  // }

  componentDidMount() {
    if (localStorage.obj) {
      const cachorroResgatado = JSON.parse(localStorage.obj);
      console.log(cachorroResgatado.message);
      this.setState({ message: cachorroResgatado.message });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(_a, b) {
    if (b.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { message } = this.state;
    if (prevState.message !== message) {
      localStorage.setItem('urlDog', message);
      alert(message.split('/')[4]);
    }
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((dados) => dados.json())
      .then((obj) => this.setState({
        message: obj.message,
        status: obj.status,
      }));
  }

  nomearDog = (event) => {
    const { target } = event;
    this.setState({ nome: target.value });
  }

  setName = () => {
    const { nome, message } = this.state;
    const arrayDados = ({ message: message, nome: nome });
    localStorage.clear();
    localStorage.setItem('obj', JSON.stringify(arrayDados));
  }
  
  render() {
    const { message } = this.state;
    return (
      <>
        {message === ''
          ? <p>Loading...</p>
          : <div>
            <img src={ message } alt="Dog aleatório" width="300px" />
            <button type="button" onClick={ this.fetchDog }>Próximo cachorro</button>
          </div>}
        <button type="submit" onClick={ this.setName }> Salvar </button>
        <input type="text" onChange={ this.nomearDog } placeholder="Nomear cachorro" />
      </>
    );
  }
}

export default App;
