import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategories } from '../../utils/store/Categories/categoriesActions';
import { RootStore } from '../../utils/store/store';
import './styles.scss'

const FilterComponent = () => {
    const dispatch = useDispatch();
    const filterChange = (event: any) => {
        dispatch(updateCategories(event.value.trim()));
    };
    const options = ['categories'];
    const defaultOption = options[0];
    const items: any = useSelector((state: RootStore) => state.itemReducer.item);
    if (items !== undefined) {
        items.map((value: any) => {
            if (!options.includes(value.category)) {
                options.push(value.category);
            }
        })
    }
    return (
        <Dropdown className="dropdown" options={options} onChange={filterChange} value={defaultOption} placeholder="Select an option" />
    );
};

export default FilterComponent;