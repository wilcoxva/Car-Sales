import React from 'react';
import { connect } from 'react-redux';
import { additionalFeature } from '../actions/Actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.additionalFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
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

export default connect(mapStateToProps, {additionalFeature})(AdditionalFeature);
