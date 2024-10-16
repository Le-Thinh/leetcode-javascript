/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

const majorityElement = (nums) => {
    let res = nums[0];
	let count = 1;

	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i] === res) count++;
		else if (!--count) {
			res = nums[i + 1];
			count = 0;
		}
	}

	return res;
}

let nums2 = [3, 2, 3, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

console.log('169 Majority Element', majorityElement(nums2));

// Use Hash map
const majorityElement2 = (nums) => {
    let occuranceOfElement = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (occuranceOfElement.has(nums[i])) {
            let occurance = occuranceOfElement.get(nums[i]);
            occuranceOfElement.set(nums[i], occurance + 1);
        } else {
            occuranceOfElement.set(nums[i], 1);
        }
    }
    for (let [key, value] of occuranceOfElement) {
        if (value > nums.length / 2) return key;
    }
}

console.log('169 - Majority Element version 2', majorityElement2(nums2));
