/*
You are given a 0-indexed array of integers nums of length n. 
You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a 
forward jump from index i. In other words, if you are at nums[i], 
you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. 
The test cases are generated such that you can reach nums[n - 1].
*/

// const jump = (nums) => {
//     let [jumps, currentJumpEnd, farthest] = [0, 0, 0];
    
//     for (let i = 0; nums.length - 1; i++) {
//         farthest = Math.max(farthest, (i + nums[i]));

//         const canJump = i === currentJumpEnd;
//         if (canJump) {
//             jumps++;
//             currentJumpEnd = farthest;
//         }
//     }
//     return jumps;
// }

const jumpII = (nums) => {
    let [left, right, jumps] = [0, 0, 0];
    while (right < nums.length - 1) {
        const maxReach = getMaxReach(nums, left, right);
        left = right + 1;
        right = maxReach;
        jumps += 1;
    }
    return jumps;
}

const getMaxReach = (nums, left, right, maxReach = 0) => {
    for (let i = left; i < right + 1; i++) {
        const reach = nums[i] + i;
        maxReach = Math.max(maxReach, reach);
    }
    return maxReach;
}

const nums6 = [2, 3, 1, 1, 4];
console.log('Can Jump II',jumpII(nums6));