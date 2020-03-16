// key is the value which will be processed in the hash function
// we will use string as an example but could be something else
// size is the number of buckets in the hash table
// this hash function is just a very simplified example of a hash function

const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  // this returns the remainder, which is always a number between 0 and the number for which
  // we want to know the remainder, in this case "size", this random number obtained is
  // then used as an index in the array, whose length is = size
  return hashedKey % size;
};

class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = Array(this.size);
    // creating a Map object for each storage bucket
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = hash(key, this.size);

    //this means the bucket is empty
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      // there is already an entry, at least, in the bucket
      // go through all the elements that exist in the bucket. Each of this element is
      // as well an array --> storage[bucket(n) --> [[key1, value1], [key2,value2]]]
      // so it´s up to three nested arrays at the key, value in the bucket level
      for (let i = 0; i < this.storage[index].length; i++) {
        // [index] --> index within the bucket
        // [i] --> index of the element inside the bucket
        // [0] --> index 0 because it´s the first index, which is the key field
        if (this.storage[index][i][0] === key) {
          // [1] --> index 1 because it´s the second index, which is the value field
          this.storage[index][i][1] = value;
          // implies --> for this key, at this storage index, there is now a value inserted
          inserted = true;
        }

        // there is still not an entry inserted with that key
        if (inserted === false) {
          this.storage[index].push([key, value]);
        }
      }
    }
  }

  remove(key) {
    const index = hash(key, this.size);

    // === 1 means there is only one entry in the bucket
    // [0][0] because there is one entry only, so the first element of the array
    // and the key, which also has index 0
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      // delete operator because deleted item is not removed but becomes "undefined"
      // delete operator does not affect the length property
      delete this.storage[index];
    } else {
      // there is more than one entry in the bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          // if we do delete this.storage[index][i] it will keep an empty entry in the
          // bucket subarray, by using splice we delete the element and update length of the
          // bucket entry
          this.storage[index].splice(i, 1);
        }
      }
    }
  }

  search(key) {
    const index = hash(key, this.size);
    // the bucket entry is empty
    if (this.storage[index] === undefined) {
      console.log("No entries for this bucket index!");

      return undefined;
    } else {
      // there is one or more entries in the bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          // return the value for that bucket entry sub-element
          console.log(
            `Value for the key ${key} is:  `,
            this.storage[index][i][1]
          );

          return this.storage[index][i][1];
        } else {
          console.log("Value for this key not found!");
        }
      }
    }
  }
}

let ht = new HashTable(10);

// console.log(ht);

ht.add("ned", "flanders");
ht.add("homero", "simpson");
ht.add("monty", "burns");
ht.add("sigmour", "skinner");
ht.add("barney", "gomez");
ht.add("reverendo", "alegria");
// console.log(ht);
ht.add("barniy", "gomez");
ht.add("magda", "alegria");

// ht.print();

// ht.search("magda");

ht.remove("reverendo");

ht.search("reverendo");

// ht.print();
