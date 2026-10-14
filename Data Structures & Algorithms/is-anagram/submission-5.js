class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const freqMapS = new Map();
        const freqMapT = new Map();

        for(const sItem of s){
            freqMapS.set(sItem, (freqMapS.get(sItem) || 0) + 1);
        }

        for(const tItem of t){
            freqMapT.set(tItem, (freqMapT.get(tItem) || 0) + 1);
        }

        for(const key of s){
            // console.log(freqMapS.get(key))
            // console.log(freqMapT.get(key))
            if(freqMapS.get(key) !== freqMapT.get(key)){
                return false;
            }
        }
        return true;
    }
}
