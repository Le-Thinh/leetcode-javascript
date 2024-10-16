/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that 
each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result 
be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory
*/

let removeDuplicatesII = (nums) => {

    let current = nums[0];
    let countElement = 0;

    for (let i = 0; i < nums.length; i++) {

        if (current === nums[i]) {
            countElement++;
        }

        if (current !== nums[i]) {
            current = nums[i];
            countElement = 1;
        }

        if (countElement > 2) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

let nums1 = [1, 1, 1, 2, 2, 3, 3, 3];
console.log('80 - Remove Duplicates II', removeDuplicatesII(nums1));
