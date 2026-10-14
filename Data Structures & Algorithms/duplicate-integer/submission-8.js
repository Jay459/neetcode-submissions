class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 1) return false;
        const unique_nums = [...new Set(nums)];
        if(nums.length !== unique_nums.length) return true;
        return false; 
    }
}
