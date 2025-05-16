import React from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

function Head({ title,description }){
    return (
        <Helmet>
            <title> { title } </title>
            <meta name='description' description={description} />
        </Helmet>
    );
};

Head.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string
};

export default Head;