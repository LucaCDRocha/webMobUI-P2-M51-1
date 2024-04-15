const round = (val, decimalPlace = 2) => {
    const pow = 10 ** decimalPlace;
    return Math.round(val * pow) / pow;
}

export { round };
