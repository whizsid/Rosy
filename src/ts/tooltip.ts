class Tooltip {

    protected htmlElement:HTMLElement;

    protected top:number;

    protected left:number;

    protected display:boolean;

    protected content:string;

    constructor(){
        const htmlElement = document.createElement('DIV');
        htmlElement.setAttribute('class','rosy-tooltip');

        this.htmlElement = htmlElement;
        this.top = 0;
        this.left = 0;
        this.display = false;
        this.content = "";

        document.body.appendChild(htmlElement);
    }

    public move(x:number,y:number):void{
        this.left = x;
        this.top = y;
    }

    public changeContent(content:string):void{
        this.content = content;
    }

    public show():void{
        this.display = true;
        this.render();
    }

    public hide():void{
        this.display = false;
        this.render();
    }

    protected render(){
        let style:string = "";

        if(this.display){
            style = "opacity:1;top:"+this.top+'px;left:'+this.left+'px';
        } else {
            style = 'opacity:0';
        }

        this.htmlElement.innerHTML = this.content;
        this.htmlElement.setAttribute('style',style);
    }
}

export default Tooltip;