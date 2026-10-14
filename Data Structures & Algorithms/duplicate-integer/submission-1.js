class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueArr = [...new Set(nums)];
        if(uniqueArr.length === nums.length) return false;
        return true;
    }
}
