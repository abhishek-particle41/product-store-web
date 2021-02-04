import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { updatePriceRange } from '../../utils/store/Categories/filtersActions';
import { RootStore } from '../../utils/store/store';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: any) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const priceRange: any = useSelector((state: RootStore) => state.priceReducer);
    const [value, setValue] = React.useState(priceRange);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        dispatch(updatePriceRange(value))
    };

    return (
        <div className={classes.root}>
            <Slider
                className="range-slider"
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                max={1000}
                getAriaValueText={valuetext}
            />
        </div>
    );
}
