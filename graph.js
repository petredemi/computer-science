class Graph{
    constructor (noVertices){
        this.noVertices = noVertices;
        this.AdiacentList = new Map();
    }
  addVertex(v){
      this.AdiacentList.set(v, []);
  }
  addEdge(v, w){
      this.AdiacentList.get(v).push(w);
  }
  printGraph(){
      let get_keys = this.AdiacentList.keys();
      for (let i of get_keys){
          let get_values  = this.AdiacentList.get(i);
          let conc = "";
          for (let j of get_values)
              conc += j + "  ";
              console.log(i + "  =>  " + conc);
      }
   }
    getNeighboors(node){
        return this.AdiacentList.get(node);
    }
    hasEdge(node1, node2){
        let edg = this.AdiacentList.get(node1).includes(node2);
        return edg;
    }
}
 let g = new Graph(64);
 let squares = []
function createBoard(){
    let x = 0;
    for( let i = 0; i < 8; i++){
        let y = [];
        for(let j = 0; j < 8; j++){
            y.push(x);
            x = x + 1;
        }
        squares.push(y);
    }
 }
createBoard();
let v = squares;
for ( let i = 0; i < v.length; i++){
    for( let j = 0; j < 8; j++){
        g.addVertex(v[i][j]);
    }
 }
function createEdge(){
    for( let i = 0; i < 8; i++){
           for(let j = 0; j < 8; j++){
                if( i > 0 && j > 1){g.addEdge(v[i][j], v[i - 1][j - 2])}
                if (i > 0 && j < 6){g.addEdge(v[i][j], v[i - 1][j + 2])}
                if (i < 7 && j > 1){g.addEdge(v[i][j], v[i + 1][j - 2])}
                if (i < 7 && j < 6){g.addEdge(v[i][j], v[i + 1][j + 2])}
                if (i < 6 && j > 0){g.addEdge(v[i][j], v[i + 2][j - 1])}
                if (i < 6 && j < 7){g.addEdge(v[i][j], v[i + 2][j + 1])}
                if (i > 1 && j < 7){ g.addEdge(v[i][j], v[i - 2][j + 1])}
                if (i > 1 && j > 0){ g.addEdge(v[i][j], v[i - 2][j - 1])}
           }
    }
}
createEdge();
//console.log(g)
//let moves = '';
let trail = []
function steps( b, c ){
    for( let i = 0; i < g.getNeighboors(b).length; i++){
        let x = g.getNeighboors(b)[i];
        if( g.hasEdge(x, c) == true){
            trail.push(x);
            trail.push(c);
            return;
        }
        for(let j = 0; j < g.getNeighboors(x).length; j++){
            let y = g.getNeighboors(x)[j];
            if(g.hasEdge(y, c) == true){
                trail.push(x);
                trail.push(y);
                trail.push(c);  
                return;
            }
            for(let jj = 0; jj < g.getNeighboors(y).length; jj++){
                    let z = g.getNeighboors(y)[jj];
                    if(g.hasEdge(z, c) == true){
                        trail.push(x);
                        trail.push(y);  
                        trail.push(z);
                        trail.push(c);
                        return;
                    }

                for(let jjj = 0; jjj < g.getNeighboors(z).length; jjj++){
                        let w = g.getNeighboors(z)[jjj];
                        if(g.hasEdge(w, c) == true){
                            trail.push(x);
                            trail.push(y);  
                            trail.push(z);
                            trail.push(w);
                            trail.push(c);
                            return;
                        }

                        for(let h = 0; h < g.getNeighboors(w).length; h++){
                            let v = g.getNeighboors(w)[h];
                            if(g.hasEdge(v, c) == true){
                                trail.push(x);
                                trail.push(y);  
                                trail.push(z);
                                trail.push(w);
                                trail.push(v);
                                trail.push(c);
                                return;
                            }
                    }         
                }         
            }         
        }
    }
}
let squeresTraveled = [];
function indexes(){
        for ( let j = 0; j < trail.length; j++){
            for( let i = 0; i < 8; i++){
                    let y = squares[i].indexOf(trail[j]);
                    if( y != -1){
                    squeresTraveled.push([i, y]);
                }
            }
        }
    }
function knightMove(a , b){
    let ini = v[a[0]][a[1]];
    let fin = v[b[0]][b[1]];
      trail.push(ini);
      if (g.hasEdge(ini, fin) == true){
     //       trail.push(ini)
            trail.push(fin);
//          return;
      }else if(g.hasEdge(ini, fin) == false){
      //  trail.push(ini);
        steps(ini, fin);
            }
        indexes();
        console.log('Knight Travel ==>', trail);
        console.log('Knight Travel ==>', squeresTraveled);


}
console.log(v[0][5])
console.log(v[2][1])
knightMove([7, 7], [0, 7]);
