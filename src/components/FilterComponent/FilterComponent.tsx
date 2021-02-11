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
        <div className="filter-container">
            <h2 className="my-4">FILTERS</h2>
            <div className="line"></div>
            <div className="price-title">
                <h3>Price Range</h3>
            </div>
            <div className="range-slider">
                <RangeSlider />
            </div>
            <div className="categories-title">
                <h3>Categories</h3>
            </div>
            <div>
                <Multiselect
                    data={options}
                    placeholder="Select Category"
                    onChange={value => dispatch(updateCategories(value))}
                />
            </div>

        </div>
    );
};

export default FilterComponent;