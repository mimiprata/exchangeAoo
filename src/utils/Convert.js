
export let convertRate =(rateFrom, multiplierFrom, rateTo, multiplierTo, sum)=> {
    let m, n;

    (multiplierFrom) ? m = multiplierFrom : m = 1;
    (multiplierTo) ? n = multiplierTo : n = 1;
    (multiplierTo) ? n = multiplierTo : n = 1;

    return ((rateFrom * m * sum) / (rateTo * n)).toFixed(2);
};