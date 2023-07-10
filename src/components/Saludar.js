import React from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

const Saludar = (props) => {
  const {firstname, lastname} = props;
  return (
    <Text>Hola {firstname} {lastname}</Text>
  );
}

Saludar.defaultProps = {
  firstname: "Usuario",
  lastname: "Invitado"
}

Saludar.propTypes = {
  firstname: propTypes.string.isRequired,
  lastname: propTypes.string
}

export default Saludar;