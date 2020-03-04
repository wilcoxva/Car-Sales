import React from 'react';
import { connect } from 'react-redux';
import { addedFeature } from '../actions/Actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
};

export default connect(mapStateToProps, { addedFeature })(AddedFeature);