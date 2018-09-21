const mergeJSON = function(obj1, obj2){
    for (const key in obj1) {

        if (typeof obj1[key] === 'string' || typeof obj1[key] === 'boolean' || typeof obj1[key] === 'number') {
            if (obj2.hasOwnProperty(key)) {
                if (obj1[key] === obj2[key]) {
                    //do nothing here
                } else {
                    //special case, Ask Prakash! What if type changes with same name. Alert conflict or ignore the mapping.
                    //Need to inform the user!
                }
            } else {
                obj2[key] = obj1[key];
            }
        } else if (typeof obj1[key] === 'array'){
            // never going to happen
        } else if (typeof obj1[key] === 'object'){
            if (obj2.hasOwnProperty(key)) {
                if (typeof obj2[key] === 'object') {
                    obj2[key] = mergeJSON(obj1[key], obj2[key]);

                } else {
                    //same as about
                }

            } else {
                obj2[key] = obj1[key];
            }
        }
    }
    return obj2;
};