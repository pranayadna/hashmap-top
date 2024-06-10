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

    return {
        hash,
        set
    };
}

const hashMap = createHashMap();
hashMap.set('Bump', 'Car');
hashMap.set('Door', 'Room');
hashMap.set('Door', 'Room2');
hashMap.set('Carlos', 'Sainz');
hashMap.set('Bump', 'Car2');
hashMap.set('Oppenhaimer', 'Nuclear');
hashMap.set('Oppenhaimer', 'Atom reaction');

console.log(buckets);