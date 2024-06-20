// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const PAequorFactory = (num, arr) =>{

  return {
    _specimenNum: num,
    _dna: arr,
    get dna (){
      return this._dna
    },
    mutate(){
      let temp = returnRandBase()
      baseNum = Math.floor(Math.random()*15)
      if (temp != this._dna[baseNum]){
        this._dna[baseNum] = temp
      }else{
        this.mutate()
      }
    },
    compareDNA(arr1){
      let temp = 0

      for (let i = 0; i<15; i++){
        if (this._dna[i]==arr1[i]){
          temp = temp + 1
        }
      }
      temp = temp/15
      console.log(`specimen #1 and specimen #2 have ${temp.toFixed(2)*100}% DNA in common`)
    },
    willLikelySurvive(){
      let c = 0
      for (let i=0; i<15; i++){
        if (this._dna[i]=='C' || this._dna[i]=='G'){
          c = c + 1
        }
      }
      c = c/15
      if (c>=0.6) {
        return true
      }else{
        return false
      }
    }
  }
}

let m = PAequorFactory(5, mockUpStrand())
console.log(m.dna)
m.mutate()
m.compareDNA(mockUpStrand())
console.log(m.willLikelySurvive())

let arr = []
let index = 1
while (arr.length<30){
  temp = PAequorFactory(index, mockUpStrand())
  if (temp.willLikelySurvive()){
    arr.push(temp)
  }else{
    continue
  }
  index++
}

console.log(arr.every(x => x.willLikelySurvive() >= 0.6))

