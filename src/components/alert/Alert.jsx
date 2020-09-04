import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

const Alert= ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key = {alert.id} className = {`bg-${alert.alertType}-400 text-red-900 text-center p-3 text-m rounded-md`}>
        <p className = "text-white">{alert.message}</p>
    </div>
));

Alert.propTypes = 
{
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => 
({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);