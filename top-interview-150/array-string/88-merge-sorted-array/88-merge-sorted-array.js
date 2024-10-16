/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

const merge = (nums1, m, nums2, n) => {
    let k = m + n - 1;
    m = m - 1;
    n = n - 1;

    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }
        k--;
    }

    if (n >= 0) {
        while (n >= 0) {
            nums1[k] = nums2[n];
            n--;
            k--;
        }
    }
    return nums1;

}

nums1 = [1, 2, 3];
nums2 = [3, 4, 5];
console.log('88 - Merge Sorted Array',merge(nums1, nums1.length, nums2, nums2.length));