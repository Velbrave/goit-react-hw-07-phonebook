import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../Redux/filterSlice';
import { getFilter } from 'Redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };

  return (
    <label className={css.label} htmlFor="">
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;

Filter.protoTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
