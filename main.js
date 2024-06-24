const buckets = new Array(16);

function createHashMap() {
    const hash = (key) => {
        let hashCode = 0;

        // const primeNumber = 31;
        const primeNumber = 17; // Testing only for checking collisions 
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 16;
        }

        return hashCode;
    }

    const set = (key, value) => {
        const hashCode = hash(key);

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
                    // Update key value inside linked list
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
                const keyCheckBucket = Object.keys(buckets[i]);
                const keyBucket = keyCheckBucket[0];

                // console.log(keyBucket);
                // console.log(buckets[i].hasOwnProperty(key));
                //     if (key === keyBucket) {

                //     }
                if (buckets[i].hasOwnProperty(key)) {
                    return true;
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
                            return true;
                        }

                        tmp = tmp.next;
                    }
                }
            }
            // else 

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

    return {
        hash,
        set,
        get,
        has,
        remove
    };
}

const hashMap = createHashMap();
hashMap.set('Bump', 'Car');
hashMap.set('Door', 'Room');
hashMap.set('Carlos', 'Sainz');
hashMap.set('Oppenheimer', 'Atom reaction');

console.log(buckets);

console.log(hashMap.remove('Door'));
console.log(hashMap.get('rafa'));
console.log(hashMap.has('Carlos'));
console.log(buckets);