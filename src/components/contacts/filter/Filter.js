import style from './Filter.module.css'

const Filter = ({doFilter, changeFilterValue, filterValue}) => {

    return (
        <div className={style.filter}>
            <input type="text" value={filterValue} className={style.input} placeholder={'You can filter contacts'} onChange={(e) =>
                {
                     changeFilterValue(e.target.value);
                     doFilter(e.target.value);
                }
            }/>
        </div>
    )
}

export default Filter;
