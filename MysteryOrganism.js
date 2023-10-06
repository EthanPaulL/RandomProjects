// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 random bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


/* ----------   BENCHMARK   ----------
uncomment below to test mockUpStrand func */
// console.log(mockUpStrand());


const pAequorFactory = (num, strandArr) => {
  return {
    specimenNum: num,
    dna: strandArr,
    
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherOrg) {
      let differences = 0;
      for (let i=0; i<this.dna.length; i++){
        if (this.dna[i]==otherOrg.dna[i]) {
          differences++;
        }
      }
      differences = (differences/this.dna.length * 100)/toFixed(2);
      if (differences >= 1) {
        console.log(`Specimen #${this.specimenNum} and Specimen #${otherOrg.specimenNum} have ${differences} DNA in common.`);
      } else if (differences <= 0) {
        console.log(`Specimen #${this.specimenNum} and Specimen #${otherOrg.specimenNum} have no similarities.`);
      }
    },
    
    willLikelySurvive() {
      let survivingChance = 0;
      for (let i=0;i<this.dna.length;i++){
        if (this.dna[i] == 'C' || this.dna[i] == 'G') {
          survivingChance++;
        }
      }
      survivingChance = (survivingChance/this.dna.length * 100).toFixed(2);
      if (survivingChance >= 60) {return true}
      else {return false;}
    }
  }
};

const create30samples = () => {
  let sampleList =[];
  for (let i=0;i<30;i++){
    let sample = pAequorFactory(i, mockUpStrand());
    sampleList.push(sample);
    let surviving = sample.willLikelySurvive();
    while (!surviving){
      sample.dna = mockUpStrand;
      surviving = sample.willLikelySurvive();
    }
    console.log(`Sample ${sample.specimenNum}: ${sample.dna.join(',')} ${surviving}`);
  }
}

console.log(create30samples());