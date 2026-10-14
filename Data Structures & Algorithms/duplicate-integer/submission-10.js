class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length <= 1) return false;
        const uniqueNums = [...new Set(nums)];
        if(uniqueNums.length === nums.length) return false;
        return true
    }
}
