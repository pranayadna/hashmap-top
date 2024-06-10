const buckets = new Array(16);

function checkKey(key) {
    for (let i = 0; i < buckets.length; i++) {
        if (typeof buckets[i] === 'object') {
            if (key in buckets[i]) {
                // console.log(`${key} is already exist`);
                console.log(buckets[i][key]);
            } 
        }
    }

    // for (const bucket of buckets) {
    //     if (bucket.hasOwnProperty(key)) {
    //         console.log(`${key} is already exist`);
    //     }
    // }
}

const key = 'Fred';
const value = 'Smith';

const pair = {
    [key]: value
};

console.log(buckets.splice(11, 1, pair));
// console.log(buckets);
// console.log(checkKey(key));