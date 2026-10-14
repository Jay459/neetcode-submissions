class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = {};

        for(let s of strs){
            const key = s.split('').sort().join('');
            if(!ans[key]){
                ans[key] = [];
            }
            ans[key].push(s);
        }

        return Object.values(ans);
    }
}
