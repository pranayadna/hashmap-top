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
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] !== undefined) {
                const nextCheckBucket = Object.values(buckets[i]);
                const nextBucket = nextCheckBucket[1];
                const keyCheckBucket = Object.keys(buckets[i]);
                const keyBucket = keyCheckBucket[0];
                const entriesCheckBucket = Object.entries(buckets[i]);
                // console.log(buckets[i]);
                // console.log(nextCheckBucket);
                // console.log(keyBucket);
                // console.log(entriesCheckBucket);
                
                // buckets[i].hasOwnProperty(key) && 
                if (nextBucket !== null) {
                    // const keyCheckBucket = Object.keys(buckets[i].next);
                    // const keyBucket = keyCheckBucket[0];
                    // console.log(keyCheckBucket);

                    if (key in buckets[i]) {
                        
                    }
                    // console.log(buckets[i]);
                    // buckets.splice(i, 1);
                    // return true;
                    // console.log(current.next);
                    // && current.hasOwnProperty(key)
                    const head = buckets[i];
                    // const head = buckets[i];
                    let current = head;
                    let prev = null;

                    // console.log(head);
                    while (current !== null ) {
                        const keyCheckCurrent = Object.keys(current);
                        const keyCurrent = keyCheckCurrent[0];
    
                        // console.log(current.next);
                        // console.log(current);
                        // console.log(current.hasOwnProperty(key));
    
                        if (keyCurrent === key) {
                            // current[key] = value;
                            prev = current;   
                            prev.next = current.next;
                            // console.log(prev);
                            // break;
                        } 
    
                        // if (current.hasOwnProperty(key)) {    
                        // }
                            
                        current = current.next;
                    }

                        // console.log(prev.next);
                    // console.log(prev.next);
                    // return true;
                } 
                // else {
                    
                    
    
                    
                // }
                

            // //     const keyCheckBucket = Object.keys(buckets[i]);
            // //     const keyBucket = keyCheckBucket[0];
                
            // //     // console.log(keyBucket);
            // //     // console.log(buckets[i].hasOwnProperty(key));
            // // //     if (key === keyBucket) {
                    
            // // //     }
            // //     else {

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
// hashMap.set('Door', 'Room2');
// hashMap.set('Bump', 'Car2');
// hashMap.set('Oppenheimer', 'Nuclear');

// console.log('Bump', hashMap.hash('Bump'));
// console.log('Door', hashMap.hash('Door'));
// console.log('Carlos', hashMap.hash('Carlos'));
// console.log('Oppenheimer', hashMap.hash('Oppenheimer'));

console.log(buckets);

// console.log(hashMap.remove('Bump'));
console.log(hashMap.remove('Bump'));
// console.log(hashMap.remove('Carlos'));
// console.log(hashMap.get('rafa'));
// console.log(hashMap.has('Carlos'));
console.log(buckets);