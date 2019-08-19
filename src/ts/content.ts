import Rosy from "./rosy";
import Tooltip from "./tooltip";

interface IFoundWord {
  word: string;
  start: number;
  rect: ClientRect | DOMRect;
}

/**
 *  Returning the word by x,y coordinates
 *
 *  @link https://jsfiddle.net/abrady0/ggr5mu7o/
 */
const getWordByCoordinates = (
  parentElt: ChildNode,
  x: number,
  y: number
): IFoundWord | null => {
  if (parentElt.nodeName !== "#text") {
    return null;
  }

  const range: Range = document.createRange();
  const words: string[] = parentElt.textContent.split(" ");
  let start: number = 0;
  let end: number = 0;

  const isInRect = (
    rects: ClientRectList | DOMRectList
  ): ClientRect | DOMRect | null => {
    for (const r of rects) {
      if (r.left < x && r.right > x && r.top < y && r.bottom > y) {
        return r;
      }
    }
    return null;
  };

  for (const word of words) {
    end = start + word.length;

    range.setStart(parentElt, start);

    range.setEnd(parentElt, end);

    // not getBoundingClientRect as word could wrap
    const rects = range.getClientRects();

    const clickedRect = isInRect(rects);
    if (clickedRect) {
      return {
        rect: clickedRect,
        start,
        word
      };
    }
    start = end + 1;
  }

  return null;
};

// const pattern = /(\d+)/g;

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
  "span",
  "em",
  "div",
  "strong",
  "td",
  "th",
  "li",
  "code",
  "q",
  "s",
  "pre",
  "small",
  "textarea",
  "title"
];

const pattern = /([0-9\,\)\(\-]+)/g;

const tooltip = new Tooltip();

for (const tag of tags) {
  const elmnts = document.getElementsByTagName(tag) as HTMLCollectionOf<
    HTMLElement
  >;

  for (const elmnt of elmnts) {
    let child: ChildNode | undefined;

    const textNodes: ChildNode[] = [];

    for (child = elmnt.firstChild; child !== null; child = child.nextSibling) {
      if (child.nodeName === "#text") {
        textNodes.push(child);
      }
    }

    if (textNodes.length) {
      elmnt.addEventListener("mousemove", function(
        this: Element,
        e: MouseEvent
      ) {
        chrome.storage.sync.get(
          ["rosyEnabled"],
          ({ rosyEnabled }: { rosyEnabled?: string }) => {
            // tslint:disable-next-line: radix
            if (parseInt(rosyEnabled)) {
              let hoveredWord: IFoundWord | null = null;

              const x:number = e.pageX;
              const y:number = e.pageY;

              tooltip.move(x, y);


              for (const textNode of textNodes) {
                if (!hoveredWord) {
                  hoveredWord = getWordByCoordinates(
                    textNode,
                    e.clientX,
                    e.clientY
                  );
                }
              }

              if (hoveredWord) {
                if (pattern.test(hoveredWord.word)) {
                  // tslint:disable-next-line: radix
                  tooltip.changeContent(Rosy(parseInt(hoveredWord.word.replace(/([^0-9]+)/g,''))));
                  tooltip.show();
                }
              }
            }
          }
        );
      });

      elmnt.addEventListener('mouseleave',()=>{
        tooltip.hide();
      })
    }
  }
}
