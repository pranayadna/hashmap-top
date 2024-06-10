/** 
 * 
 * let output = [
 *  0:  { 
 *            key: "value",
 *            next: {
 *                 key2: "value2"
 *          }
 *      },
 *  1: "someValue1",
 *  2: "someValue2",
 *  3: "someValue3"
 * ];
 * 
 * Let’s say we wanted to store a person’s full name as a key “Fred” with a value of “Smith”:
 * 1. Pass “Fred” into the hash function to get the hash code which is 385.
 * 2. Find the bucket at index 385.
 * 3. Store the key value pair in that bucket. In this case, the key would be “Fred” and the value would be “Smith”.
 * 
 */ 

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

const set = (key, value) => {
    // If key already exist, replace with new value
    // for (let i = 0; i < buckets.length; i++) {
        
    // }

    const hashCode = hash(key);
    
    const pair = {
        [key]: value,
        next: null
    };

    // buckets.splice(hashCode, 1, pair); 

    // If there's a collision
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] !== undefined) {
            // if (typeof buckets[i] === 'object') {
                
            // }

            // Hash key from bucket array
            const keyCheckBucket = Object.keys(buckets[i]);
            const keyBucket = keyCheckBucket[0];
            const hashKeyBucket = hash(keyBucket);

            if (key in buckets[i]) {
                buckets[i][key] = value;
            } else
            if (hashKeyBucket === hashCode) {
                
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
                    
                    // tmp = tmp.next;                    
                
                    // head.next = null;

                    if (tmp.next === null) {       
                        tmp.next = pair;
                        break;
                    }

                    tmp = tmp.next;
            // }
                }
                // else {

                    // console.log('Key is same');
                    // return;
    


                
            }

        } else if (hashCode === i) {
            buckets[i] = pair;
        }  
    }
    // for (const key of buckets) {
    //     if (hash(key) === hashCode) {
    //         console.log("There's same hash code.");
    //         return;
    //     }
        
    // }

   

    

    
}

set('Bump', 'Car');
set('Door', 'Room');
set('Door', 'Room2');
set('Carlos', 'Sainz');
set('Bump', 'Car2');
set('Oppenhaimer', 'Nuclear');
set('Oppenhaimer', 'Atom reaction');
// set('Bump', 'Car');

// console.log(hash('carlos'));
// console.log(hash('carla'));
// console.log(hash('Bump'));
// console.log(hash('Door'));

// const bucketKey = 'Carlos';
// console.log(buckets.length);

// const key1 = 'Bump';
// const value1 = 'Smith';

// const key2 = 'Door';
// const value2 = 'James';

// if (hash(key1) === hash(key2)) {
//     console.log(hash(key1), hash(key2), "its same");
// }

// console.log(hash('sBin'));

console.log(buckets);
// set(key1, value1);
// console.log(buckets);
// set(key2, value2);
// console.log(buckets);
// set('sBin', 'Sainz');
// console.log(buckets);

// // console.log(buckets[11].Fred = 'New value');
// set(key, 'New value');
// console.log(buckets);


  
