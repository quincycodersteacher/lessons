const delay = ms => new Promise(res => setTimeout(res, ms));

const testTime  = async () => {
    let time1 = new Date();
    console.log(time1);
    console.log(time1.getTime());

    await delay(5000);

    let time2 = new Date();
    console.log(time2 - time1);
}

testTime();