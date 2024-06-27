let buckets = new Array(16);

function HashMap() {
    let capacity = buckets.length;

    const bucketThreshold = () => {
        const loadFactor = 0.75;
        const threshold = Math.ceil(capacity * loadFactor);

        return threshold;
    }

    const growBucket = () => {
        const newBucket = new Array(capacity * 2);

        return newBucket;
    }

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }

        return hashCode;
    }

    const set = (key, value) => {
        const hashCode = hash(key);
        const entriesLength = length() + 1;
        const threshold = bucketThreshold();

        if (entriesLength > threshold) {
            const oldBucketKeys = keys();
            const oldBucketValues = values();

            buckets = growBucket();
            capacity = buckets.length;

            for (let i = 0; i < oldBucketKeys.length; i++) {
                set(oldBucketKeys[i], oldBucketValues[i])
            }
        }
        
        const pair = {
            [key]: value,
            next: null
        };

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                const keyCheckBucket = Object.keys(buckets[i]);
                const keyBucket = keyCheckBucket[0];
                const hashKeyBucket = hash(keyBucket);

                if (key in buckets[i]) {
                    buckets[i][key] = value;
                } else if (hashKeyBucket === hashCode) {
                    const head = buckets[i];
                    let tmp = head;

                    while (tmp !== null) {
                        const keyCheckTmp = Object.keys(tmp);
                        const keyTmp = keyCheckTmp[0];

                        if (keyTmp === key) {
                            tmp[key] = value;
                            break;
                        }

                        if (tmp.next === null) {
                            tmp.next = pair;
                            break;
                        }

                        tmp = tmp.next;
                    }
                }
            } else if (hashCode === i) {
                buckets[i] = pair;
            }
        }
    }

    const get = (key) => {
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                const keyCheckBucket = Object.keys(buckets[i]);
                const keyBucket = keyCheckBucket[0];

                // console.log(keyBucket);
                // console.log(buckets[i].hasOwnProperty(key));
                //     if (key === keyBucket) {

                //     }
                if (buckets[i].hasOwnProperty(key)) {
                    return buckets[i][key];
                }
                else {
                    const head = buckets[i];
                    let tmp = head;

                    while (tmp !== null) {
                        const keyCheckTmp = Object.keys(tmp);
                        const keyTmp = keyCheckTmp[0];

                        // console.log(tmp);
                        // console.log(tmp.hasOwnProperty(key));

                        // if (keyTmp === key) {
                        //     tmp[key] = value;
                        //     break;
                        // } 

                        if (tmp.hasOwnProperty(key)) {
                            return tmp;
                        }

                        tmp = tmp.next;
                    }
                }
            }
            // else 

        }

        return null;
    }

    const has = (key) => {
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                if (buckets[i].hasOwnProperty(key)) {
                    return true;
                } else {
                    const head = buckets[i];
                    let tmp = head;

                    while (tmp !== null) {
                        if (tmp.hasOwnProperty(key)) {
                            return true;
                        }

                        tmp = tmp.next;
                    }
                }
            }
        }

        return false;
    }

    const remove = (key) => {
        const hashCode = hash(key);

        if (buckets[hashCode] !== undefined) {
            const head = buckets[hashCode];
            let tmp = head;
            let prev = null;
            
            while (tmp !== null) {
                if (key in tmp) {
                    if (prev === null) {
                        buckets[hashCode] = tmp.next;
                    } else {
                        prev.next = tmp.next;
                    }

                    return;
                }
                
                prev = tmp;
                tmp = tmp.next;
            }
        }
    }

    const length = () => {
        let total = 0;

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {

                let tmp = buckets[i];
                let count = 0;

                while (tmp !== null) {
                    count++;
                    tmp = tmp.next;
                }
                
                total += count;
            }
            
        }

        return total;
    }

    const clear = () => {
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {         
                buckets[i] = null;
            }
            
        }
    }

    const keys = () => {
        const arrKeys = [];
        
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                let tmp = buckets[i];

                while (tmp !== null) {
                    const objKeyArr = Object.keys(tmp);
                    arrKeys.push(objKeyArr[0]);

                    tmp = tmp.next;
                }
            }
            
        }

        return arrKeys;
    }

    const values = () => {
        const arrValues = [];
        
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                let tmp = buckets[i];

                while (tmp !== null) {
                    const objValuesArr = Object.values(tmp);
                    arrValues.push(objValuesArr[0]);

                    tmp = tmp.next;
                }
            }
            
        }

        return arrValues;
    }

    const entries = () => {
        const arrEntries = [];
        
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                let tmp = buckets[i];
                
                while (tmp !== null) {
                    const objEntriesArr = Object.entries(tmp);
                    arrEntries.push(objEntriesArr[0]);

                    tmp = tmp.next;
                }
            }
            
        }

        return arrEntries;
    }

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
        bucketThreshold
    };
}

const test = HashMap() // or HashMap() if using a factory

test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('Carlos', 'Sainz');
test.set('Oppenheimer', 'Atom reaction');
test.set('FORMULA1', 'SPEEEEEEED!');
test.set('TopGear', 'HAMMOOOOOOOOND!!!!!!');

console.log('Before: ', buckets);
console.log(test.bucketThreshold());

test.set('Max', 'DU DU DU DUUUU');

console.log('After: ', buckets);
console.log(test.bucketThreshold());

console.log('get: ', test.get('FORMULA1'));
console.log('has: ', test.has('FORMULA1'));
console.log('keys: ', test.keys());

// console.log(test.has('Max'));

// test.set('moon', 'silver')
// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// hashMap.set('Bump1', 'Car');
// hashMap.set('Door', 'Room');
// hashMap.set('Tree', 'Forest');
// hashMap.set('River', 'Water');
// hashMap.set('Lion', 'Safari');
// hashMap.set('Pizza', 'Cheese');
// hashMap.set('Book', 'Library');
// hashMap.set('Computer', 'Technology');
// hashMap.set('Sun', 'Sky');

// console.log(hashMap.length());
// console.log(buckets.length);


// console.log(hashMap.length());
// console.log(buckets.length);