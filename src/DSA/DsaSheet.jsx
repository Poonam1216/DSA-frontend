import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Star, Search } from "lucide-react";

const topics = [
	{
		name: "Arrays & Hashing",
		problems: [
			{
				title: "Two Sum",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/two-sum/",
				youtube: "https://www.youtube.com/watch?v=KLlXCFG5TnA", // YouTube link
			},
			{
				title: "Median of Two Sorted Arrays",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/median-of-two-sorted-arrays/",
				youtube: "https://www.youtube.com/watch?v=q6IEA26hvXc", // YouTube link
			},
			{
				title: "Container With Most Water",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/container-with-most-water/",
				youtube: "https://www.youtube.com/watch?v=UuiTKBwPgAo", // YouTube link
			},
			{
				title: "3Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum/",
				youtube: "https://www.youtube.com/watch?v=jzZsG8n2R9A", // YouTube link
			},
			{
				title: "3Sum Closest",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum-closest/",
				youtube: "https://www.youtube.com/watch?v=BSLJMrX8lp8", // YouTube link
			},
			{
				title: "4Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/4sum/",
				youtube: "https://www.youtube.com/watch?v=eD95WRfh81c", // YouTube link
			},
			{
				title: "Remove Duplicates from Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=DEJAZBq0FDA", // YouTube link
			},
			{
				title: "Remove Element",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/remove-element/",
				youtube: "https://www.youtube.com/watch?v=Pcd1ii9P9ZI", // YouTube link
			},
			{
				title: "Next Permutation",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/next-permutation/",
				youtube: "https://www.youtube.com/watch?v=6qXO72FkqwM", // YouTube link
			},
			{
				title: "Search in Rotated Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=r3pMQ8-Ad5s", // YouTube link
			},
			{
				title: "Find First and Last Position of Element in Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=4sQL7R5ySUU", // YouTube link
			},
			{
				title: "Search Insert Position",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-insert-position/",
				youtube: "https://www.youtube.com/watch?v=K-RYzDZkzCI", // YouTube link
			},
			{
				title: "Valid Sudoku",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/valid-sudoku/",
				youtube: "https://www.youtube.com/watch?v=TjFXEUCMqI8", // YouTube link
			},
			{
				title: "Sudoku Solver",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sudoku-solver/",
				youtube: "https://www.youtube.com/watch?v=FWAIf_EVUKE", // YouTube link
			},
			{
				title: "Combination Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum/",
				youtube: "https://www.youtube.com/watch?v=GBKI9VSKdGg", // YouTube link
			},
			{
				title: "Combination Sum II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum-ii/",
				youtube: "https://www.youtube.com/watch?v=rSA3t6BDDwg", // YouTube link
			},
			{
				title: "First Missing Positive",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/first-missing-positive/",
				youtube: "https://www.youtube.com/watch?v=9QegIMsz8ow", // YouTube link
			},
			{
				title: "Trapping Rain Water",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/trapping-rain-water/",
				youtube: "https://www.youtube.com/watch?v=ZI2z5pq0TqA", // YouTube link
			},
			{
				title: "Jump Game II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/jump-game-ii/",
				youtube: "https://www.youtube.com/watch?v=dJ7sWiOoK7g", // YouTube link
			},
			{
				title: "Permutations",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/permutations/",
				youtube: "https://www.youtube.com/watch?v=KB9IcSCDQ9k", // YouTube link
			},
			{
				title: "Permutations II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/permutations-ii/",
				youtube: "https://www.youtube.com/watch?v=qhBVWf0YafA", // YouTube link
			},
			{
				title: "Rotate Image",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-image/",
				youtube: "https://www.youtube.com/watch?v=fMSJSS7eO1w", // YouTube link
			},
			{
				title: "Group Anagrams",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/group-anagrams/",
				youtube: "https://www.youtube.com/watch?v=vzdNOK2oB2E", // YouTube link
			},
			{
				title: "N-Queens",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/n-queens/",
				youtube: "https://www.youtube.com/watch?v=xouin83ebxE", // YouTube link
			},
			{
				title: "Maximum Subarray",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximum-subarray/",
				youtube: "https://www.youtube.com/watch?v=5WZl3MMT0Eg", // YouTube link
			},
			{
				title: "Spiral Matrix",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/spiral-matrix/",
				youtube: "https://www.youtube.com/watch?v=BJnMZNwUk1M", // YouTube link
			},
			{
				title: "Jump Game",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/jump-game/",
				youtube: "https://www.youtube.com/watch?v=Yan0cv2cLy8", // YouTube link
			},
			{
				title: "Merge Intervals",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-intervals/",
				youtube: "https://www.youtube.com/watch?v=44H3cEC2fFM", // YouTube link
			},
			{
				title: "Insert Interval",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/insert-interval/",
				youtube: "https://www.youtube.com/watch?v=A8NUOmlwOlM", // YouTube link
			},
			{
				title: "Spiral Matrix II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/spiral-matrix-ii/",
				youtube: "https://www.youtube.com/watch?v=GbV1xSrbXlE", // YouTube link
			},
			{
				title: "Unique Paths II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/unique-paths-ii/",
				youtube: "https://www.youtube.com/watch?v=ZcxPASUQ-Qc", // YouTube link
			},
			{
				title: "Minimum Path Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/minimum-path-sum/",
				youtube: "https://www.youtube.com/watch?v=_rgTlyky1uQ", // YouTube link
			},
			{
				title: "Plus One",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/plus-one/",
				youtube: "https://www.youtube.com/watch?v=bqN9yB0vF08", // YouTube link
			},
			{
				title: "Text Justification",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/text-justification/",
				youtube: "https://www.youtube.com/watch?v=RORuwHiblPc", // YouTube link
			},
			{
				title: "Set Matrix Zeroes",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/set-matrix-zeroes/",
				youtube: "https://www.youtube.com/watch?v=1ZyHnSJoWRc", // YouTube link
			},
			{
				title: "Search a 2D Matrix",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/search-a-2d-matrix/",
				youtube: "https://www.youtube.com/watch?v=Ber2pi2C0j0", // YouTube link
			},
			{
				title: "Sort Colors",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-colors/",
				youtube: "https://www.youtube.com/watch?v=4xbWSRZHqac", // YouTube link
			},
			{
				title: "Subsets",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets/",
				youtube: "https://www.youtube.com/watch?v=kYY9sr3XSx0", // YouTube link
			},
			{
				title: "Word Search",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/word-search/",
				youtube: "https://www.youtube.com/watch?v=pfiQ_PS1g8E", // YouTube link
			},
			{
				title: "Remove Duplicates from Sorted Array II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
				youtube: "https://www.youtube.com/watch?v=LlccvKQ-Tj4", // YouTube link
			},
			{
				title: "Search in Rotated Sorted Array II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
				youtube: "https://www.youtube.com/watch?v=La5s9j2iaJE", // YouTube link
			},
			{
				title: "Largest Rectangle in Histogram",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/largest-rectangle-in-histogram/",
				youtube: "https://www.youtube.com/watch?v=zx5Sw9130L0", // YouTube link
			},
			{
				title: "Maximal Rectangle",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximal-rectangle/",
				youtube: "https://www.youtube.com/watch?v=g8bSdXCG-lA", // YouTube link
			},
			{
				title: "Merge Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=P1Ic85RarKY", // YouTube link
			},
			{
				title: "Subsets II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets-ii/",
				youtube: "https://www.youtube.com/watch?v=R3Sm9V2OSCo", // YouTube link
			},
			{
				title: "Construct Binary Tree from Preorder and Inorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
				youtube: "https://www.youtube.com/watch?v=ihj4IQGZ2zc", // YouTube link
			},
			{
				title: "Construct Binary Tree from Inorder and Postorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
				youtube: "https://www.youtube.com/watch?v=BLs3Qk6WpD0", // YouTube link
			},
			{
				title: "Binary Tree Level Order Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-level-order-traversal/",
				youtube: "https://www.youtube.com/watch?v=6ZnyEApgFYg", // YouTube link
			},
			{
				title: "Populating Next Right Pointers in Each Node",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
				youtube: "https://www.youtube.com/watch?v=7zmgQSJghpo", // YouTube link
			},
			{
				title: "Binary Tree Right Side View",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-right-side-view/",
				youtube: "https://www.youtube.com/watch?v=KV4mRzTjlAk", // YouTube link
			},
			{
				title: "Binary Tree Maximum Path Sum",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-maximum-path-sum/",
				youtube: "https://www.youtube.com/watch?v=Hr5cWUld4vU", // YouTube link
			},
			{
				title: "Symmetric Tree",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/symmetric-tree/",
				youtube: "https://www.youtube.com/watch?v=nKggNAiEpBE", // YouTube link
			},
			{
				title: "Construct Binary Search Tree from Preorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
				youtube: "https://www.youtube.com/watch?v=UmJT3j26t1I", // YouTube link
			},
			{
				title: "Delete Node in a BST",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/delete-node-in-a-bst/",
				youtube: "https://www.youtube.com/watch?v=gcULXE7ViZw", // YouTube link
			},
			{
				title: "Lowest Common Ancestor of a Binary Tree",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
				youtube: "https://www.youtube.com/watch?v=py3R23aAPCA", // YouTube link
			},
			{
				title: "Closest Binary Search Tree Value",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/closest-binary-search-tree-value/",
				youtube: "https://www.youtube.com/watch?v=JgZGl_gGtmk", // YouTube link
			},
			{
				title: "Verify Preorder Serialization of a Binary Tree",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/",
				youtube: "https://www.youtube.com/watch?v=_mbnPPHJmTQ", // YouTube link
			},
			{
				title: "Find Pivot Index",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-pivot-index/description/",
				youtube: "https://www.youtube.com/watch?v=QIPQY6rLHE4", // YouTube link
			},
		],
	},
	{
		name: "Two Pointers",
		problems: [
			{
				title: "Longest Palindromic Substring",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-palindromic-substring/",
				youtube: "https://www.youtube.com/watch?v=IY7IKlQ2Xl4",
			},
			{
				title: "Container With Most Water",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/container-with-most-water/",
				youtube: "https://www.youtube.com/watch?v=2t0nJ8NWJ2Q",
			},
			{
				title: "3Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum/",
				youtube: "https://www.youtube.com/watch?v=0xSswA6XxQ",
			},
			{
				title: "3Sum Closest",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum-closest/",
				youtube: "https://www.youtube.com/watch?v=Kn4bfYJXNkE",
			},
			{
				title: "4Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/4sum/",
				youtube: "https://www.youtube.com/watch?v=sL7lbLm1xuI",
			},
			{
				title: "Remove Nth Node From End of List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
				youtube: "https://www.youtube.com/watch?v=QqP9E_6YqD4",
			},
			{
				title: "Remove Duplicates from Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=Z0-4mf_0qWE",
			},
			{
				title: "Remove Element",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/remove-element/",
				youtube: "https://www.youtube.com/watch?v=XLgXwCBjEY0",
			},
			{
				title: "Find the Index of the First Occurrence in a String",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
				youtube: "https://www.youtube.com/watch?v=2O4s8DTHqa0",
			},
			{
				title: "Next Permutation",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/next-permutation/",
				youtube: "https://www.youtube.com/watch?v=F5RrQYefGxM",
			},
			{
				title: "Trapping Rain Water",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/trapping-rain-water/",
				youtube: "https://www.youtube.com/watch?v=GM3r7Ed0YY4",
			},
			{
				title: "Rotate List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-list/",
				youtube: "https://www.youtube.com/watch?v=n9rSt2RJ6Fg",
			},
			{
				title: "Sort Colors",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-colors/",
				youtube: "https://www.youtube.com/watch?v=nYX9P4iX0zg",
			},
			{
				title: "Remove Duplicates from Sorted Array II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
				youtube: "https://www.youtube.com/watch?v=OEI0vN0AT7U",
			},
			{
				title: "Remove Duplicates from Sorted List II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
				youtube: "https://www.youtube.com/watch?v=7kKP45mKbgA",
			},
			{
				title: "Partition List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/partition-list/",
				youtube: "https://www.youtube.com/watch?v=JxN3J62Gtx0",
			},
			{
				title: "Merge Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=YY9xT02nLQ0",
			},
			{
				title: "Valid Palindrome",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/valid-palindrome/",
				youtube: "https://www.youtube.com/watch?v=d9PiLsOusKk",
			},
			{
				title: "Linked List Cycle",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/linked-list-cycle/",
				youtube: "https://www.youtube.com/watch?v=ZPpBBfG_Uq8",
			},
			{
				title: "Linked List Cycle II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/",
				youtube: "https://www.youtube.com/watch?v=v1Pm8Ch8b2s",
			},
			{
				title: "Reorder List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/reorder-list/",
				youtube: "https://www.youtube.com/watch?v=dxlJJGrcu6E",
			},
			{
				title: "Sort List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-list/",
				youtube: "https://www.youtube.com/watch?v=k8S0GxYJ2d8",
			},
			{
				title: "Reverse Words in a String",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/reverse-words-in-a-string/",
				youtube: "https://www.youtube.com/watch?v=fIQoklso9iU",
			},
			{
				title: "Intersection of Two Linked Lists",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/intersection-of-two-linked-lists/",
				youtube: "https://www.youtube.com/watch?v=Zm8H4v_6y2k",
			},
			{
				title: "One Edit Distance",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/one-edit-distance/",
				youtube: "https://www.youtube.com/watch?v=Z0K5fhRTsU0",
			},
			{
				title: "Compare Version Numbers",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/compare-version-numbers/",
				youtube: "https://www.youtube.com/watch?v=m0wEB8gD2NY",
			},
			{
				title: "Two Sum II - Input Array Is Sorted",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
				youtube: "https://www.youtube.com/watch?v=7ehWqQ9eI4U",
			},
			{
				title: "Two Sum III - Data structure design",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/two-sum-iii-data-structure-design/",
				youtube: "https://www.youtube.com/watch?v=2bS9TA6thH0",
			},
			{
				title: "Find the Duplicate Number",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-the-duplicate-number/",
				youtube: "https://www.youtube.com/watch?v=qehScm6no9g",
			},
		],
	},
	{
		name: "Sliding Window",
		problems: [
			{
				title: "Longest Substring Without Repeating Characters",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
				youtube: "https://www.youtube.com/watch?v=aaADxlLw1lE",
			},
			{
				title: "Minimum Window Substring",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/minimum-window-substring/",
				youtube: "https://www.youtube.com/watch?v=jURH7SO9b70",
			},
			{
				title: "Permutation in String",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/permutation-in-string/",
				youtube: "https://www.youtube.com/watch?v=hr4YTVakp-4",
			},
			{
				title: "Subarray Product Less Than K",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/subarray-product-less-than-k/",
				youtube: "https://www.youtube.com/watch?v=v6n5I3egM9M",
			},
			{
				title: "Longest Repeating Character Replacement",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-repeating-character-replacement/",
				youtube: "https://www.youtube.com/watch?v=ArI2BOMw7OU",
			},
			{
				title: "Longest Substring with At Most Two Distinct Characters",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
				youtube: "https://www.youtube.com/watch?v=nI1zrk5kXhw",
			},
			{
				title: "Sliding Window Maximum",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/sliding-window-maximum/",
				youtube: "https://www.youtube.com/watch?v=xkJ7v_S1NwU",
			},
			{
				title: "Longest Substring with At Most K Distinct Characters",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
				youtube: "https://www.youtube.com/watch?v=E8XN2m-D7Ag",
			},
			{
				title: "Minimum Size Subarray Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/minimum-size-subarray-sum/",
				youtube: "https://www.youtube.com/watch?v=q0xj3ZKsTL4",
			},
			{
				title: "Find All Anagrams in a String",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-all-anagrams-in-a-string/",
				youtube: "https://www.youtube.com/watch?v=quDGGYDJ2zI",
			},
		],
	},
	{
		name: "Arrays",
		problems: [
			{
				title: "Maximum Subarray",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximum-subarray/",
				youtube: "https://www.youtube.com/watch?v=s8LEA-aHqfM",
			},
			{
				title: "Best Time to Buy and Sell Stock",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
				youtube: "https://www.youtube.com/watch?v=H4t7zttO8tQ",
			},
			{
				title: "Product of Array Except Self",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/product-of-array-except-self/",
				youtube: "https://www.youtube.com/watch?v=90j3Hn7QZNU",
			},
			{
				title: "Maximum Product Subarray",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/maximum-product-subarray/",
				youtube: "https://www.youtube.com/watch?v=5rr8h3TPnFs",
			},
			{
				title: "Find Minimum in Rotated Sorted Array",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=Rmt4HmbdQIg",
			},
			{
				title: "Find Peak Element",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/find-peak-element/",
				youtube: "https://www.youtube.com/watch?v=WxG90DB4D74",
			},
			{
				title: "Search in Rotated Sorted Array",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array/",
				youtube: "https://www.youtube.com/watch?v=aK7G3XxPM4w",
			},
			{
				title: "Search in Rotated Sorted Array II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
				youtube: "https://www.youtube.com/watch?v=lsjxaP2DlJI",
			},
			{
				title: "Maximum Distance Between a Pair of Values",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/",
				youtube: "https://www.youtube.com/watch?v=J7nXTELcPZw",
			},
			{
				title: "Rotate Array",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-array/",
				youtube: "https://www.youtube.com/watch?v=4EG4S3nt6Zw",
			},
			{
				title: "Single Number",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/single-number/",
				youtube: "https://www.youtube.com/watch?v=_cGGXh3TbJo",
			},
			{
				title: "Missing Number",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/missing-number/",
				youtube: "https://www.youtube.com/watch?v=eG6K8zuZob4",
			},
			{
				title: "Majority Element",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/majority-element/",
				youtube: "https://www.youtube.com/watch?v=Z8c-xdt5uZk",
			},
			{
				title: "Find All Numbers Disappeared in an Array",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
				youtube: "https://www.youtube.com/watch?v=Kf_U-gI_cTs",
			},
			{
				title: "Swap Nodes in Pairs",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/swap-nodes-in-pairs/",
				youtube: "https://www.youtube.com/watch?v=s12tiN3UtIg",
			},
			{
				title: "Reverse Linked List",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/reverse-linked-list/",
				youtube: "https://www.youtube.com/watch?v=L_i5C9pOH4I",
			},
		],
	},
	{
		name: "Graph",
		problems: [
			{
				title: "Number of Islands",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/number-of-islands/",
				youtube: "https://www.youtube.com/watch?v=1w7j7a_c9iE",
			},
			{
				title: "Clone Graph",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/clone-graph/",
				youtube: "https://www.youtube.com/watch?v=4Pr2KChN9U0",
			},
			{
				title: "Course Schedule",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/course-schedule/",
				youtube: "https://www.youtube.com/watch?v=2Q5JX1V3J-A",
			},
			{
				title: "Word Ladder",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/word-ladder/",
				youtube: "https://www.youtube.com/watch?v=R3bWtpwFRa8",
			},
			{
				title: "Minimum Spanning Tree",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/minimum-spanning-tree/",
				youtube: "https://www.youtube.com/watch?v=tP0_DKcyhPY",
			},
		],
	},
	{
		name: "Tree",
		problems: [
			{
				title: "Binary Tree Inorder Traversal",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-inorder-traversal/",
				youtube: "https://www.youtube.com/watch?v=2v2j6n_sTk8",
			},
			{
				title: "Binary Tree Level Order Traversal",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-level-order-traversal/",
				youtube: "https://www.youtube.com/watch?v=3V7b0XUyR7k",
			},
			{
				title: "Validate Binary Search Tree",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/validate-binary-search-tree/",
				youtube: "https://www.youtube.com/watch?v=zq5r2QJ5X2M",
			},
			{
				title: "Construct Binary Tree from Preorder and Inorder Traversal",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
				youtube: "https://www.youtube.com/watch?v=tFJ0kC_p1Nw",
			},
			{
				title: "Lowest Common Ancestor of a Binary Tree",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
				youtube: "https://www.youtube.com/watch?v=MyjzN1t3-X8",
			},
		],
	},
	{
		name: "Dynamic Programming",
		problems: [
			{
				title: "Climbing Stairs",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/climbing-stairs/",
				youtube: "https://www.youtube.com/watch?v=1L9N8Wm-Kr4",
			},
			{
				title: "Longest Increasing Subsequence",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-increasing-subsequence/",
				youtube: "https://www.youtube.com/watch?v=4J6V4vYa8jo",
			},
			{
				title: "Coin Change",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/coin-change/",
				youtube: "https://www.youtube.com/watch?v=3bP5hVzxV0I",
			},
			{
				title: "Maximum Subarray",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximum-subarray/",
				youtube: "https://www.youtube.com/watch?v=3qJXgH9G_gk",
			},
			{
				title: "Edit Distance",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/edit-distance/",
				youtube: "https://www.youtube.com/watch?v=x0dRkrr0X5o",
			},
		],
	},
	{
		name: "Backtracking",
		problems: [
			{
				title: "Subsets",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets/",
				youtube: "https://www.youtube.com/watch?v=aTAiw5mCH1M",
			},
			{
				title: "Permutations",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/permutations/",
				youtube: "https://www.youtube.com/watch?v=KY_z2TUBzi0",
			},
			{
				title: "N-Queens",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/n-queens/",
				youtube: "https://www.youtube.com/watch?v=lbSykbDH9M4",
			},
			{
				title: "Combination Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum/",
				youtube: "https://www.youtube.com/watch?v=x2AQUbLV6Io",
			},
			{
				title: "Letter Combinations of a Phone Number",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
				youtube: "https://www.youtube.com/watch?v=jhSeVqJH8yQ",
			},
		],
	},
];

const DSASheet = () => {
	const [completed, setCompleted] = useState({});
	const [expandedTopic, setExpandedTopic] = useState("Arrays & Hashing");
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const savedProgress =
			JSON.parse(localStorage.getItem("completed")) || {};
		setCompleted(savedProgress);
	}, []);

	const handleCheckbox = useCallback((topic, problem) => {
		setCompleted((prevCompleted) => {
			const updatedCompleted = {
				...prevCompleted,
				[topic]: {
					...prevCompleted[topic],
					[problem]: !prevCompleted[topic]?.[problem],
				},
			};
			localStorage.setItem("completed", JSON.stringify(updatedCompleted));
			return updatedCompleted;
		});
	}, []);

	const searchResults = useMemo(() => {
		if (searchTerm) {
			return topics.flatMap((topic) =>
				topic.problems
					.filter((problem) =>
						problem.title
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					)
					.map((problem) => ({ ...problem, topicName: topic.name }))
			);
		}
		return [];
	}, [searchTerm]);

	const getCompletedCount = useCallback(
		(topicName) => {
			return completed[topicName]
				? Object.values(completed[topicName]).filter(Boolean).length
				: 0;
		},
		[completed]
	);

	const TopicTable = ({ topic }) => (
		<div key={topic.name} className="mb-4">
			<button
				className="w-full text-left p-4 bg-gray-800 rounded flex justify-between items-center"
				onClick={() =>
					setExpandedTopic((prev) =>
						prev === topic.name ? null : topic.name
					)
				}
			>
				<span>{topic.name}</span>
				<span>
					({getCompletedCount(topic.name)} / {topic.problems.length})
				</span>
			</button>
			{expandedTopic === topic.name && (
				<div className="mt-2">
					<table className="w-full">
						<thead>
							<tr className="text-left">
								<th className="py-2">Status</th>
								<th>Star</th>
								<th>Problem</th>
								<th>Difficulty</th>
								<th>Video Solution</th>
								<th>Code</th>
							</tr>
						</thead>
						<tbody>
							{topic.problems.map((problem) => (
								<tr
									key={problem.title}
									className="border-t border-gray-700"
								>
									<td className="py-2">
										<input
											type="checkbox"
											checked={
												completed[topic.name]?.[
													problem.title
												] || false
											}
											onChange={() =>
												handleCheckbox(
													topic.name,
													problem.title
												)
											}
											className="ml-2 cursor-pointer"
										/>
									</td>
									<td>
										<Star
											className="text-yellow-400"
											size={16}
										/>
									</td>
									<td className="cursor-pointer">
										{problem.title}
									</td>
									<td
										className={`${
											problem.difficulty === "Easy"
												? "text-green-500"
												: problem.difficulty ===
												  "Medium"
												? "text-yellow-500"
												: "text-red-500"
										}`}
									>
										{problem.difficulty}
									</td>
									<td className="ml-4 cursor-pointer">
										{problem.hasSolution && (
											<a
												href={problem.youtube}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-500"
											>
												▶️
											</a>
										)}
									</td>
									<td>
										<a
											href={problem.leetcode}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500"
										>
											View Code
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);

	return (
		<div className="w-full min-h-screen mx-auto p-6 bg-gray-900 text-white">
			<div className="mb-6">
				<div className="relative">
					<input
						type="text"
						placeholder="Search problems..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full p-2 pl-10 rounded bg-gray-800 text-white"
					/>
					<Search
						className="absolute left-3 top-2.5 text-gray-400"
						size={20}
					/>
				</div>
			</div>

			{searchResults.length > 0 ? (
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-4">Search Results</h2>
					<table className="w-full">
						<thead>
							<tr className="text-left">
								<th className="py-2">Status</th>
								<th>Star</th>
								<th>Problem</th>
								<th>Topic</th>
								<th>Difficulty</th>
								<th>Video Solution</th>
								<th>Code</th>
							</tr>
						</thead>
						<tbody>
							{searchResults.map((problem) => (
								<tr
									key={`${problem.topicName}-${problem.title}`}
									className="border-t border-gray-700"
								>
									<td className="py-2">
										<input
											type="checkbox"
											checked={
												completed[problem.topicName]?.[
													problem.title
												] || false
											}
											onChange={() =>
												handleCheckbox(
													problem.topicName,
													problem.title
												)
											}
											className="ml-4 cursor-pointer"
										/>
									</td>
									<td>
										<Star
											className="text-yellow-400"
											size={16}
										/>
									</td>
									<td className="cursor-pointer">
										{problem.title}
									</td>
									<td>{problem.topicName}</td>
									<td
										className={`${
											problem.difficulty === "Easy"
												? "text-green-500"
												: problem.difficulty ===
												  "Medium"
												? "text-yellow-500"
												: "text-red-500"
										}`}
									>
										{problem.difficulty}
									</td>
									<td className="cursor-pointer">
										{problem.hasSolution && (
											<a
												href={problem.youtube}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-500"
											>
												▶️
											</a>
										)}
									</td>
									<td>
										<a
											href={problem.leetcode}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500"
										>
											View Code
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				topics.map((topic) => (
					<TopicTable topic={topic} key={topic.name} />
				))
			)}
		</div>
	);
};

export default DSASheet;
