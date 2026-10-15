class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const nMap = new Map();
        for(let num = 0; num < nums.length; num++){
            const diff = target - nums[num];
            if(nMap.has(diff)){
                return [nMap.get(diff), num]
            }
            nMap.set(nums[num], num);
        }
        return [];
    }
}
