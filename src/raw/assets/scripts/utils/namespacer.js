//Global namespace - no clobbering
var PLP=PLP||{};

PLP.namespace=function(name){
    var parts=name.split('.'),
        parent=PLP,
        i;
    
    //strip redundant leading global
    if(parts[0]==='PLP'){
        parts=parts.slice(1);   
    }

    for(i=0;i<parts.length;i++){
        //create property if it doesn't exist
        if(typeof parent[parts[i]]==='undefined'){
            parent[parts[i]]={};   
        }
        parent=parent[parts[i]];
    }
    return parent;
};
