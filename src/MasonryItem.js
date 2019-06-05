import React from "react"
import withStyles from 'react-jss'
import PropTypes from "prop-types";

const styles={
    item: {
        backgroundColor: 'unset',
        display: 'inline-block',
        margin: '0 0 0.5em',
        width: '100%',
        background: '#fff',
        padding: '0em',
        '&::before': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            content: '""',
            zIndex: 0,
            transition: '0.3s',
        },
        '& > img': {
            maxWidth: '100%',
            transform: 'scale(1)',
            transition: '0.3s',
        },
    }
}

function MasonryItem(props){
    const {classes,imagekey,item}= props

    return(
        <div className={[classes.item].join(" ")}>
            <img src={item[imagekey]}/>
        </div>
    )
}


MasonryItem.propTypes = {
    item: PropTypes.object.isRequired,
    imagekey: PropTypes.string.isRequired,
};

export default withStyles(styles)(MasonryItem)

