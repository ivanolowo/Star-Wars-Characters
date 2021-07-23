import React from 'react';

const Collapsed = ({ children, handleOpen, id }) => (
    <div style={styles} onClick={handleOpen} data-id={id}>
        {children}
    </div>
)

const styles = {
    color: '#007bff', //blue
    background: 'rgba(0, 0, 0, 0.075)',//gray
    padding: '15px 15px'
}

export default Collapsed;