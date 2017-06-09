
function recursiveReplace(node){

    if(node.nodeType === 3){ // text node
        node.nodeValue = transliter(node.nodeValue);
        return;
    }
    if(node.nodeType === 1){ // element node
        $(node).contents().each(function(){
            recursiveReplace(this);
        });
    }

}



















