import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategories } from '../../utils/store/Categories/filtersActions';
import { RootStore } from '../../utils/store/store';
import { Multiselect } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css'
import './styles.scss'
import React from 'react';
import RangeSlider from '../PriceRange/RangeSlider';

const FilterComponent = () => {
    const dispatch = useDispatch();
    const options: string[] = [];
    const items: any = useSelector((state: RootStore) => state.itemReducer.item);
    if (items !== undefined) {
        items.map((value: any) => {
            if (!options.includes(value.category)) {
                options.push(value.category);
            }
        })
    }
    return (
        <div className="side-nav">
            <label className="categories-label">FILTERS</label>
            <Multiselect
                containerClassName="side-nav-categories"
                data={options}
                // defaultValue={[options[0]]}
                placeholder="Select Category"
                onChange={value => dispatch(updateCategories(value))}
            />
            <div className="range-slider">
                <RangeSlider />
            </div>
        </div>
    );
};

export default FilterComponent;