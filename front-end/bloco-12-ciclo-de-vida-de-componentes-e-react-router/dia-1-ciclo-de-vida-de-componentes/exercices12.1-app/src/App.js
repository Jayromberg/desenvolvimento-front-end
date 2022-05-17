import React from "react";

class App extends React.Component {

  state = {
    message: '',
    status: undefined,
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

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((dados) => dados.json())
      .then((obj) => this.setState({
        message: obj.message,
        status: obj.status,
      }))
  }

  componentDidMount() {
    this.fetchDog();
  }



  render() {
    const { message, status } = this.state
    return (

      !status ? <p>Loading...</p> : <div> <img src={message} alt="Dog aleatório" />
        <button type="button" >Próximo cachorro</button> </div>
    )
  }
}

export default App; 
