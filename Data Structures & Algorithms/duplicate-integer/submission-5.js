class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = [...new Set(nums)];
        if(nums.length === 1) return false;
        if(nums.length === uniqueNums.length){
            return false;
        }
        return true;
    }
}
