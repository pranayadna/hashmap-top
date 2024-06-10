const buckets = new Array(16);

const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 17; // Testing only for checking collisions 
    // const primeNumber = 31; // The optimal one
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % 16;
    }

    return hashCode;
}

const key1 = 'Bump';
const value1 = 'Smith';

const key2 = 'Door';
const value2 = 'James';

buckets[10] = {
    [key1]: value1
}

// console.log(buckets);

function checkHashCode(keyArr) {
    
    // console.log(key);
    
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] !== undefined) {
            const keyCheckBucket = Object.keys(buckets[i]);
            const keyBucket = keyCheckBucket[0];
            
            const keyCheckObj = Object.keys(keyArr)
            const keyObj = keyCheckObj[0];

            if (keyBucket === keyObj) {
                console.log('Key is same');
                buckets.push(keyArr);
                return;
            }
        }   
    }
}

// console.log(buckets);

buckets[10] = {
    [key2]: value2
}

const pair = {
    [key1]: value1
};

buckets[10].next = null;
console.log(buckets);
buckets[10].next = pair;
console.log(buckets);

// console.log(checkHashCode(buckets[10]));

