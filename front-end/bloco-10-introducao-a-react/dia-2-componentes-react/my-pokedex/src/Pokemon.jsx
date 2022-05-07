import React from 'react'
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
    render() {
        const { name, type, image, averageWeight: { value, measurementUnit} } = this.props.user;
        return (
            <section className="pokemon">
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{`Average weight ${value} ${measurementUnit}`}</p>
                </div>
                <img src={image} alt={`Imagem do Pokemon chamado ${name}`} />
            </section>
        )
    };
}

Pokemon.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };