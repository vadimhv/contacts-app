const Validation = (e, errorFunction, changeFunction) => {
    if (!Number.isNaN(+e.target.value) || e.target.value === '+') {
        changeFunction(e.target.value.slice(0, 13));
        errorFunction(false);
        return true;
    } else {
        return false;
    }
}

export default Validation;
