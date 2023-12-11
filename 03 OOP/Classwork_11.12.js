class CssClass {
    constructor(name, styles){
        this.name = name;
        this.styles = [];
        // for (let i in styles) {
        //       this.styles[i] = styles[i];
        //     }
    }
    addStyle (style=[])
    {
        this.styles.push(style);
    };
    getStyle (index)
    {
        return this.styles[index];
    };
    deleteStyle(index)
    {
        delete this.styles[index];
    };
     
    getCSS(){
        console.log(`${this.name}`);
    }

}

let test = new CssClass(".first", []);
// test.addStyle("Background", "White");

