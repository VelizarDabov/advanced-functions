function areaVol(areaFunc, volFunc, s1){
    const arr = JSON.parse(s1);
   const result = [];

   for (const line of arr) {
   const area = areaFunc.call(line);
   const volume = volFunc.call(line);


    let obj = {
        area,
        volume,
    }
    result.push(obj)
   }
   console.table(result);
}

function areaFunc() {

    return Math.abs(this.x * this.y);
    
    };
    function volFunc() {

        return Math.abs(this.x * this.y * this.z);
        
    }   
    
   const s1 = `[

        {"x":"1","y":"2","z":"10"},
        
        {"x":"7","y":"7","z":"10"},
        
        {"x":"5","y":"2","z":"10"}
        
        ]`;
        areaVol(areaFunc, volFunc, s1)
    