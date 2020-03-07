export default class Cell{
    //if a cell is a mine, then its value will be 1, -1, or possibly in the range [-1,1]
    //if a cell is not a mine, then its value will be based off the local/surounding mine values
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.isMine = false;
        this.revealed = false; 
        this.value = 0;
        this.checked = false;
        
        /*
        * Flag States:
        * 0: none
        * 1: flag
        * 2: anti-flag
        */
        this.flagState = 0; 
    }
    get id(){
        return `cell-${this.x}-${this.y}`;
    }
}