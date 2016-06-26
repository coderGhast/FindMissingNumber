function find_number_loop(a){
    if(a === undefined || a === null){
        return 0;
    } else {
        var found_number = true;
        var missing_number = 1;
        while(found_number){
            found_number = false;
            for(var i=0; i < a.length; i++){
                if(a[i] === missing_number){
                    found_number = true;
                }
            }
            if(found_number === true){
                missing_number++;
            }
            
        }
        return missing_number;
    }
}

function find_number_sum(a){
    if(a === undefined || a === null){
        return 0;
    } else {
        var total = 0;
        for(var i=0; i < a.length; i++){
            total += a[i];
        }

        var missing_number = ((a.length +1) * (a.length + 2)/ 2) -  total;
        return missing_number;
    }
}

function find_number_sorted(a){
    if(a === undefined || a === null){
        return 0;
    } else {
        insertion_sort(a);
        for(var i=0; i<a.length; i++){
            if(a[i] !== i + 1){
                return i + 1;
            }
        }
    }
}

// Just keep it simple with Insertion sort. Not the best or most efficient but there we go.
// http://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript/ for insertion sort
function insertion_sort(unsorted_list) {  
  for(var i = 0; i < unsorted_list.length; i++) {
    var temp = unsorted_list[i];
    for(var j = i - 1; j >= 0 && unsorted_list[j] > temp; j--) {
      unsorted_list[j +1 ] = unsorted_list[j];
    }
    unsorted_list[j+1] = temp;
  }
  return unsorted_list;
}
