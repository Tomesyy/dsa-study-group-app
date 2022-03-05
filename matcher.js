function getParings() {
    const candidates = ["BlackDev", "Yemi", "Sesan", "Dro", "Bosipo", "Yosi", "Ifihan", 
                    "Olamilekan", "Femi", "Kromate", "Ovbioba", "Biola", "Dotun", "Yin", "JudeX", "Nanya",
                    "Samuel", "Bosun", "Oluwatosin", "Favour", "Aphomer", "Chisombiri", "iMyke", "Shade", "Philip",
                    "Tony", "Sulyman", "Paul"];
    // wildcards can have more than 1 matching if the parings cannot be done evenly.
    const wildCards = ["BlackDev", "Sesan", "Yemi"];
    const parings = [];
    let matchedSet = new Set();

    while(matchedSet.size < candidates.length){
        let curr = ['-', '-'];
        let idx1 = Math.floor(Math.random() * candidates.length);

        while(matchedSet.has(idx1)){
            idx1 = Math.floor(Math.random() * candidates.length);
        }

        curr[0] = candidates[idx1];
        matchedSet.add(idx1);

        if(matchedSet.size < candidates.length){
            let idx2 = Math.floor(Math.random() * candidates.length);

            while(matchedSet.has(idx2)){
                idx2 = Math.floor(Math.random() * candidates.length);
            }

            curr[1] = candidates[idx2];
            matchedSet.add(idx2);

        } else {

            curr[1] = wildCards[Math.floor(Math.random() * wildCards.length)];
        }

        parings.push(curr);
    }
    return parings;
}

console.log(getParings());