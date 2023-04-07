
const render = function() {
    const content = document.querySelector('#content');
    
    //checks to make sure the content has more than one child, then removes the 2nd child (to avoid the header)
    while (content.children.length > 1) {
        content.children[1].remove();
    }

}

export default render;