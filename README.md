
<div align="center">

# LeetCode Solutions

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=FFA116&center=true&vCenter=true&width=650&lines=Data+Structures+%26+Algorithms;JavaScript+%7C+TypeScript+%7C+Rust;Think.+Code.+Optimize.+Repeat." alt="Typing Animation" />

<br />

<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" width="100" alt="LeetCode Logo" />

<br /><br />

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)

[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/siliconvalleyman/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/siliconvalleyman)

[![Stars](https://img.shields.io/github/stars/siliconvalleyman/leetcode?style=flat-square)](https://github.com/siliconvalleyman/leetcode/stargazers)
[![Forks](https://img.shields.io/github/forks/siliconvalleyman/leetcode?style=flat-square)](https://github.com/siliconvalleyman/leetcode/network/members)
![Last Commit](https://img.shields.io/github/last-commit/siliconvalleyman/leetcode?style=flat-square)
![Repository Size](https://img.shields.io/github/repo-size/siliconvalleyman/leetcode?style=flat-square)

**A continuous journey through algorithms, data structures, and computational thinking.**

</div>

---

## Overview

This repository contains my personal collection of solutions to LeetCode problems implemented in **JavaScript, TypeScript, and Rust**.

It serves as a continuously evolving knowledge base dedicated to algorithmic problem solving, computer science fundamentals, performance optimization, and technical interview preparation.

Rather than simply solving problems, I focus on understanding the underlying principles, exploring alternative approaches, and developing efficient, reliable, and maintainable implementations.

## Table of Contents

- [Programming Languages](#programming-languages)
- [LeetCode Statistics](#leetcode-statistics)
- [Problem Difficulty](#problem-difficulty)
- [Topics Covered](#topics-covered)
- [Repository Structure](#repository-structure)
- [Problem-Solving Methodology](#problem-solving-methodology)
- [Complexity Analysis](#complexity-analysis)
- [Coding Standards](#coding-standards)
- [Learning Roadmap](#learning-roadmap)
- [Resources](#resources)
- [Author](#author)

## Programming Languages

<div align="center">

<table>
<tr>
<td align="center" width="33%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="70" alt="JavaScript" />
<br /><br />
<strong>JavaScript</strong>
<br /><br />
Flexible and expressive solutions using modern ECMAScript features.
</td>
<td align="center" width="33%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="70" alt="TypeScript" />
<br /><br />
<strong>TypeScript</strong>
<br /><br />
Type-safe, structured, and maintainable algorithm implementations.
</td>
<td align="center" width="33%">
<img src="https://cdn.simpleicons.org/rust/CE422B" width="70" alt="Rust" />
<br /><br />
<strong>Rust</strong>
<br /><br />
Memory-safe, high-performance solutions with zero-cost abstractions.
</td>
</tr>
</table>

</div>

## LeetCode Statistics

<div align="center">

<a href="https://leetcode.com/u/siliconvalleyman/">
<img src="https://leetcard.jacoblin.cool/siliconvalleyman?theme=dark&font=Fira%20Code&ext=heatmap" alt="LeetCode Statistics" />
</a>

<br /><br />

[![View Profile](https://img.shields.io/badge/View_LeetCode_Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/siliconvalleyman/)

</div>

## Problem Difficulty

| Difficulty | Description | Directory |
| :--- | :--- | :--- |
| ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | Fundamental concepts and essential techniques | [Browse](./easy/) |
| ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | Intermediate algorithms and problem-solving patterns | [Browse](./medium/) |
| ![Hard](https://img.shields.io/badge/Hard-FF375F?style=flat-square) | Advanced algorithms and complex optimization | [Browse](./hard/) |

## Topics Covered

| Category | Concepts and Techniques |
| :--- | :--- |
| Arrays & Strings | Traversal, Two Pointers, Sliding Window, Prefix Sum |
| Hash Tables | HashMap, HashSet, Frequency Counting |
| Linked Lists | Reversal, Fast and Slow Pointers, Cycle Detection |
| Stacks & Queues | Monotonic Stack, Deque, Priority Queue |
| Sorting | Merge Sort, Quick Sort, Counting Sort |
| Searching | Binary Search, Binary Search on Answer |
| Trees | Binary Trees, BST, DFS, BFS, Trie |
| Graphs | Traversal, Shortest Paths, Topological Sort |
| Dynamic Programming | Memoization, Tabulation, State Optimization |
| Greedy Algorithms | Local Optimization, Interval Scheduling |
| Backtracking | Recursion, Permutations, Combinations |
| Heap | Min Heap, Max Heap, Top-K Problems |
| Bit Manipulation | Bitwise Operations, Bitmasking |
| Mathematics | Number Theory, Modular Arithmetic |
| Union Find | Disjoint Set Union, Path Compression |
| Advanced Structures | Segment Tree, Fenwick Tree |

## Repository Structure

Solutions are organized by problem difficulty and implemented in one or more supported programming languages.

```text
leetcode/
│
├── easy/
│   ├── ...
│   └── ...
│
├── medium/
│   ├── ...
│   └── ...
│
├── hard/
│   ├── ...
│   └── ...
│
└── README.md
```

### Supported File Extensions

| Extension | Language |
| :--- | :--- |
| `.js` | JavaScript |
| `.ts` | TypeScript |
| `.rs` | Rust |

## Problem-Solving Methodology

Every problem is approached systematically:

```mermaid
flowchart TD
    A[Understand the Problem] --> B[Analyze Constraints]
    B --> C[Identify Algorithmic Patterns]
    C --> D[Design a Solution]
    D --> E[Implement the Algorithm]
    E --> F[Test Edge Cases]
    F --> G{Correct and Efficient?}
    G -->|No| D
    G -->|Yes| H[Analyze Complexity]
    H --> I[Document the Solution]
```

The objective is not only to find a working solution, but also to understand why it works and how it can be improved.

## Complexity Analysis

Each solution aims to balance execution efficiency, memory consumption, and code readability.

| Complexity | Classification | Typical Example |
| :--- | :--- | :--- |
| `O(1)` | Constant | Hash table lookup, average case |
| `O(log n)` | Logarithmic | Binary search |
| `O(n)` | Linear | Array traversal |
| `O(n log n)` | Linearithmic | Merge sort |
| `O(n²)` | Quadratic | Nested iterations |
| `O(n³)` | Cubic | Triple nested iterations |
| `O(2ⁿ)` | Exponential | Subset enumeration |
| `O(n!)` | Factorial | Permutation generation |

### Performance Principles

- Minimize unnecessary computations.
- Select appropriate data structures.
- Avoid redundant memory allocations.
- Optimize time and space complexity.
- Handle boundary conditions and edge cases.
- Prioritize correctness before optimization.

## Coding Standards

All implementations aim to follow professional software engineering practices.

### JavaScript

- Modern ECMAScript syntax.
- Descriptive variable and function names.
- Minimal dependencies.
- Clean and idiomatic implementations.

### TypeScript

- Explicit and meaningful types.
- Type-safe function signatures.
- Strict type checking.
- Predictable and maintainable code.

### Rust

- Ownership and borrowing principles.
- Memory safety without garbage collection.
- Idiomatic Rust implementations.
- Efficient use of iterators and collections.
- Minimal unnecessary cloning and allocations.
- Safe Rust whenever possible.

## Learning Roadmap

- [ ] Master arrays and strings.
- [ ] Master hashing and frequency counting.
- [ ] Master two pointers and sliding window.
- [ ] Master linked lists, stacks, and queues.
- [ ] Master binary search and sorting.
- [ ] Master trees and graph algorithms.
- [ ] Master recursion and backtracking.
- [ ] Master dynamic programming.
- [ ] Master greedy algorithms.
- [ ] Master advanced data structures.
- [ ] Develop advanced Rust programming skills.
- [ ] Solve 100 LeetCode problems.
- [ ] Solve 250 LeetCode problems.
- [ ] Solve 500 LeetCode problems.
- [ ] Solve 1,000 LeetCode problems.

## Development Tools

<div align="center">

<img src="https://skillicons.dev/icons?i=js,ts,rust,nodejs,git,github,vscode,linux&theme=dark" alt="Development Tools" />

</div>

## Resources

| Resource | Description |
| :--- | :--- |
| [LeetCode](https://leetcode.com/) | Algorithmic challenges and interview preparation |
| [MDN Web Docs](https://developer.mozilla.org/) | JavaScript documentation |
| [TypeScript Handbook](https://www.typescriptlang.org/docs/) | Official TypeScript documentation |
| [The Rust Programming Language](https://doc.rust-lang.org/book/) | Official Rust programming book |
| [Rust by Example](https://doc.rust-lang.org/rust-by-example/) | Practical Rust programming examples |
| [VisuAlgo](https://visualgo.net/) | Interactive algorithm visualizations |
| [CP-Algorithms](https://cp-algorithms.com/) | Algorithms and competitive programming |

## Author

<div align="center">

<a href="https://github.com/siliconvalleyman">
<img src="https://github.com/siliconvalleyman.png" width="110" alt="Author Avatar" />
</a>

### Zavqiddin Hasanov

**Software Engineer | Full Stack Developer**

Passionate about software architecture, algorithms, systems programming, and continuous learning.

[![GitHub](https://img.shields.io/badge/GitHub-siliconvalleyman-181717?style=for-the-badge&logo=github)](https://github.com/siliconvalleyman)

[![LeetCode](https://img.shields.io/badge/LeetCode-siliconvalleyman-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/siliconvalleyman/)

![Profile Views](https://komarev.com/ghpvc/?username=siliconvalleyman&style=flat-square&color=orange)

</div>

---

<div align="center">

**Think clearly. Code efficiently. Improve continuously.**

If you find this repository useful, consider giving it a star.

<img src="https://capsule-render.vercel.app/api?type=waving&color=FFA116&height=100&section=footer" width="100%" alt="Footer" />

</div>
