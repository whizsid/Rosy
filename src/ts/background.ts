document.onload = ()=>{
    const tags:string[] = ['span','a','b','i','p','h1','h2','h3','h4','h5','h6'];

    let elements:Element[] = [];

    for(const tag of tags){
        elements = [...elements,...document.getElementsByTagName(tag)];
    }

    for(const element of elements){
        element.addEventListener('mouseover',(e)=>{
            console.log(e)
        });
    }

}