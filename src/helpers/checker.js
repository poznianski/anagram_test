const compare = (a, b) => {
    if (!(a && b)) {
        return false
    }

    const y = a.split('').sort().join('');
    const z = b.split('').sort().join('');

    return z === y;
}
export {compare};


