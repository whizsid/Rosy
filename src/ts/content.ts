// import Rosy from "./rosy";

const hasChild = (element:Element):boolean=>{
	const hasChildElements:boolean = true;
	const child:Element|undefined;

	for (child = element.firstChild; child; child = child.nextSibling) {
		if (child.nodeType == 1) {
			hasChildElements = true;
			break;
		}
	}

	return hasChildElements;

}

interface FoundWord {
	word:string,
	start:number,
	rect:ClientRect | DOMRect
}

/**
*  Returning the word by x,y coordinates
* 
*  @link https://jsfiddle.net/abrady0/ggr5mu7o/
*/
const getWordByCoordinates= (parentElt:Element, x:number, y:number) :FoundWord | null {
	
    if (parentElt.nodeName !== '#text') {
        return null;
    }
    
    const range:Range = document.createRange();
    const words:string[] = parentElt.textContent.split(' ');
    const start:number = 0;
    const end:number = 0;
    
    for (const i:number = 0; i < words.length; i++) {
    	
        const word:string = words[i];
        
        end = start+word.length;
        
        range.setStart(parentElt, start);
        
        range.setEnd(parentElt, end);
        
        // not getBoundingClientRect as word could wrap
        const rects = range.getClientRects();
        
        const clickedRect = isInRect(rects);
        if (clickedRect) {
            return {
            	word,
            	start,
            	rect:clickedRect
            }
        }
        start = end + 1;
    }
    
    const isInRect = (rects:ClientRectList | DOMRectList) : ClientRect | DOMRect | boolean {
    	
        for (const i:number = 0; i < rects.length; ++i) {
        	
            const r: ClientRect | DOMRect= rects[i];
            
            if (r.left<x && r.right>x && r.top<y && r.bottom>y) {            
                return r;
            }
            
        }
        return false;
    }
    
    return null;
}

const tags: string[] = [
  "p",
  "a",
  "b",
  "i",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span"
];

const pattern = /(\d+)/g;

for (const tag of tags) {
  const elmnts = document.getElementsByTagName(tag);

  for (const elmnt of elmnts) {

	const text = elmnt.innerText;

	if(hasChild(elmnt)&&pattern.test(text)){
		elmnt.addEventListener("mouseover", function(this:Element) {
			const enabled = window.localStorage.getItem("rosy_enabled");

			// tslint:disable-next-line: radix
			if (parseInt(enabled)) {
				const  hoveredWord: FoundWord | null =  getWordByCoordinates(elmnt,e.clientX,e.clientY);
				
				console.log(hoveredWord)
			}
		});
	}
  }
}