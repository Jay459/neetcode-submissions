class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 1) return false
        const numsLength = nums.length;
        const newArr = [...new Set(nums)];
        const newArrLength = newArr.length;
        if(newArrLength !== numsLength) return true;
        return false;
    }
}
