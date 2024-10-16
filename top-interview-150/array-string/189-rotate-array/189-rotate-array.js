// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

const rotate = (nums, k) => {
    k = k % nums.length;
  
    nums.reverse();
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, nums.length - 1);
    return nums;
}

let reverseArray = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--
    }
}

const nums3 = [1, 2, 3, 4, 5, 6, 7];
console.log('189 - Rotate Array',rotate(nums3, 3));