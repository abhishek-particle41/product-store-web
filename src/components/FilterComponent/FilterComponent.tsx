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
        <div className="card">
            <div className="card-header-price">
                <h3>Price Range</h3>
            </div>
            <div>
                <RangeSlider />
            </div>
            <div className="card-header">
                <h3>Categories</h3>
            </div>
            <div>
                <Multiselect
                    // containerClassName="side-nav-categories"
                    data={options}
                    placeholder="Select Category"
                    onChange={value => dispatch(updateCategories(value))}
                />
            </div>
        </div>
    );
};

export default FilterComponent;