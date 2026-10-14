class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueSet = [...new Set(nums)];
        if(uniqueSet.length < nums.length){
            return true;
        }
        return false;
    }
}
