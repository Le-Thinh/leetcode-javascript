/*
You are given an integer array nums. You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/
var canJump = (nums) => {
  const memo = new Array(nums.length).fill(0);
  memo[memo.length - 1] = 1;

  return canJumpFromIndex(nums, memo);
};

const canJumpFromIndex = (nums, memo, index = 0) => {
  if (memo[index] !== 0) return memo[index] === 1;

  const furthestJump = Math.min(index + nums[index], nums.length - 1);
  for (let nextIndex = index + 1; nextIndex <= furthestJump; nextIndex++) {
    if (!canJumpFromIndex(nums, memo, nextIndex)) continue;

    memo[index] = 1;
    return true;
  }

  memo[index] = -1;
  return false;
};

const nums5 = [3, 2, 1, 0, 4];

console.log("55 - Can Jump", canJump(nums5));
