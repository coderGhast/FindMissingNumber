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
