import React from "react"
import PropTypes from 'prop-types';
import withStyles from 'react-jss'
import MasonryItem from "./MasonryItem";

const styles = {
    masonry: {
        columnCount: 4,
        columnGap: '0.5em',
        margin: '.5em 0',
        padding: 0,
        fontSize: '.85em'
    }
}

const Masonry = (props) => {
    const {items,imagekey, classes} = props;

    const itemsLength = Object.keys(items).length;

    return (
        <div className={classes.masonry}>
            {itemsLength > 0 && items.map((item, index) => (
                <MasonryItem
                    imagekey={imagekey}
                    item={item}
                    key={index}/>
            ))}
        </div>
    )
};

Masonry.propTypes = {
    items: PropTypes.array.isRequired,
    imagekey: PropTypes.string.isRequired,
};

Masonry.defaultProps = {
    onClick: () => {
        return true
    }
};

export default withStyles(styles)(Masonry)
