// ─── DATA ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'java-prep-tracker-v2';
const PLAN_START = '2026-08-24';
const PLAN_END   = '2027-03-05';

// Signed-in Firebase user, if any. Declared here (not down in the Firebase
// section) so it's already initialized by the time the first loadState()
// call below runs — each account gets its own local cache key, so signing
// into a different Google account on the same device can't bleed the
// previous account's cached progress into the new one before Firestore
// has a chance to load the real per-user document.
let CURRENT_USER = null;
function activeStorageKey() {
  return CURRENT_USER ? STORAGE_KEY + ':' + CURRENT_USER.uid : STORAGE_KEY;
}

const GFG_MODULES = [
  { id:'basics', name:'DSA Basics', color:'#457b9d', topics:[
    {id:'basics-dsa-intro', name:'DSA — What, Why and How?', v:[{n:'Why is DSA Important ??',s:391},{n:'Roadmap to learn DSA',s:883}]},
    {id:'basics-analysis', name:'Analysis of Algorithms', v:[{n:'Analysis of Algorithms(Background)',s:380},{n:'Asymptotic Analysis',s:790},{n:'Best, Average and Worst cases',s:414},{n:'Order of Growth',s:581},{n:'Asymptotic Notation',s:425},{n:'Big O Notation',s:790},{n:'Omega Notation',s:536},{n:'Theta Notation',s:513},{n:'Analysis of Common loops',s:556},{n:'Analysis of multiple loops',s:303},{n:'Analysis of Recursion (Introduction)',s:246},{n:'Recursion Tree Method for Solving Recurrences',s:394},{n:'More Example Recurrences',s:323},{n:'Upper Bounds Using Recursion Tree Method',s:426},{n:'Space Complexity',s:1357}]},
    {id:'basics-arrays', name:'Arrays', v:[{n:'Introduction to Arrays',s:363},{n:'Array Types',s:370},{n:'Operations on Arrays (Part 1)',s:681},{n:'Operations on Arrays (Part 2)',s:351},{n:'Largest Element in an Array',s:584},{n:'Check if an Array is Sorted',s:450},{n:'Second Largest Element in Array',s:762},{n:'Reverse an Array',s:314},{n:'Remove duplicates from a sorted array',s:537},{n:'Left Rotate an Array by One',s:170},{n:'Left Rotate an Array by D places',s:589},{n:'Move Zeros to End',s:476}]},
    {id:'basics-recursion', name:'Recursion', v:[{n:'Recursion Introduction',s:709},{n:'Applications of Recursion',s:324},{n:'Recursion Output Practice - Part 1',s:385},{n:'Recursion Output Practice - Part 2',s:652},{n:'Print N to 1 Using Recursion',s:247},{n:'Print 1 to N Using Recursion',s:293},{n:'Tail Recursion',s:622},{n:'Writing Base Cases in Recursion',s:448},{n:'Natural Number Sum using Recursion',s:348},{n:'Palindrome Check using Recursion',s:519},{n:'Sum of Digits Using Recursion',s:318},{n:'Rope Cutting Problem',s:618},{n:'Generate Subsets',s:501},{n:'Tower of Hanoi',s:1160}]},
    {id:'basics-hashing', name:'Hashing', v:[{n:'Introduction to Hashing',s:407},{n:'Hashing Application',s:313},{n:'Direct Address Table',s:457},{n:'Hashing Functions',s:936},{n:'Collision Handling',s:255},{n:'Chaining',s:750},{n:'Implementation of Chaining',s:438},{n:'Open Addressing',s:1343},{n:'Double Hashing',s:1038},{n:'Implementation of Open Addressing',s:988},{n:'Chaining vs Open Addressing',s:369},{n:'Subarray with zero sum',s:552},{n:'Subarray with given Sum',s:566},{n:'Longest subarray with given sum',s:1002},{n:'Longest subarray with equal number of 0\'s and 1\'s',s:411},{n:'Count Distinct Elements',s:433},{n:'Frequencies of array elements',s:678}]},
    {id:'basics-searching', name:'Searching', v:[{n:'Binary Search (Iterative)',s:672},{n:'Binary Search (Recursive)',s:557},{n:'Analysis of Binary Search',s:558}]},
    {id:'basics-sorting', name:'Sorting', v:[{n:'Stability in Sorting Algorithm',s:508},{n:'Bubble Sort',s:733},{n:'Selection Sort',s:614},{n:'Insertion Sort',s:755},{n:'Merge sort introduction',s:145},{n:'Merge two sorted arrays',s:685},{n:'Merge function of Merge sort',s:387},{n:'Merge Sorting Algorithm',s:901},{n:'Merge Sort Analysis',s:459},{n:'Naive partition',s:325},{n:'Lomuto Partition',s:1065},{n:'Hoare partition',s:999},{n:'Quick Sort Introduction',s:372},{n:'QuickSort using Lomuto Partition',s:811},{n:'QuickSort using Hoare Partition',s:649},{n:'QuickSort analysis',s:1068},{n:'Space Analysis of QuickSort',s:491},{n:'Choice of pivot and worst case of quick sort',s:327},{n:'Heap Sort',s:773},{n:'Counting Sort',s:1171},{n:'Radix Sort',s:925},{n:'Bucket Sort',s:1032},{n:'Minimum Difference in an Array',s:401},{n:'Intersection of two sorted arrays',s:507},{n:'Union of two sorted arrays',s:641},{n:'Count inversions in Array',s:896},{n:'Tail call elimination in QuickSort',s:167},{n:'Kth smallest element',s:782},{n:'Sort an Array with two types of elements',s:534},{n:'Sort an array with three types of elements',s:695},{n:'Merge overlapping intervals',s:1516},{n:'Meeting the maximum guests',s:640},{n:'Overview of sorting algorithm',s:918}]},
    {id:'basics-ll', name:'Linked List', v:[{n:'Problems with Array Data Structure',s:835},{n:'Introduction to Linked List',s:203},{n:'Simple Linked List Implementation in C++',s:523},{n:'Simple Linked List Implementation in Java',s:371},{n:'Traversing a Linked List in C++',s:409},{n:'Traversing a Linked List in Java',s:308},{n:'Recursive Traversal of Singly Linked List',s:259},{n:'Search in a Linked List (Iterative and Recursive)',s:669},{n:'Insert at Begin of Singly Linked List',s:362},{n:'Insert at the end of Singly Linked List',s:314},{n:'Delete First Node of Singly Linked List',s:202},{n:'Delete Last Node of Singly Linked List',s:352},{n:'Insert at given position in Singly Linked List',s:456},{n:'Sorted Insert in a Singly Linked List',s:635},{n:'Middle of linked list',s:415},{n:'Nth Node from end of linked list',s:541},{n:'Reverse a linked list iterative',s:602},{n:'Recursive reverse a linked list (Part 1)',s:429},{n:'Recursive reverse a linked list (Part 2)',s:422},{n:'Remove duplicates from a sorted Singly Linked List',s:600}]},
    {id:'basics-circular-ll', name:'Circular Linked List', v:[{n:'Circular Linked List in C++',s:164},{n:'Circular Linked List in Java',s:163},{n:'Circular Linked List (Advantages & Disadvantages)',s:265},{n:'Circular Linked List Traversal in C++',s:359},{n:'Circular Linked List Traversal in Java',s:465},{n:'Insert at Begin of Circular Linked List',s:617},{n:'Insert at the end of Circular Linked List',s:512},{n:'Delete Head of Circular Linked List',s:342},{n:'Delete Kth of a Circular Linked List',s:434}]},
    {id:'basics-doubly-ll', name:'Doubly Linked List', v:[{n:'Doubly Linked List in C++',s:169},{n:'Doubly Linked List in Java',s:177},{n:'Singly Vs Doubly Linked List (Advantages & Disadvantages)',s:361},{n:'Insert at Begin of Doubly Linked List',s:240},{n:'Insert at End Doubly Linked List',s:354},{n:'Reverse a Doubly Linked List',s:480},{n:'Delete Head of a Doubly Linked List',s:231},{n:'Delete Last of a Doubly Linked List',s:373},{n:'Circular Doubly Linked List',s:448}]},
    {id:'basics-stack', name:'Stack', v:[{n:'Stack Data Structure',s:410},{n:'Array Implementation of Stack in C++',s:768},{n:'Array Implementation of Stack in Java',s:772},{n:'Linked List Implementation of Stack in C++',s:518},{n:'Linked List Implementation of Stack in Java',s:468},{n:'Applications of Stack',s:540}]},
    {id:'basics-queue', name:'Queue', v:[{n:'Queue Data Structure',s:239},{n:'Application of Queue',s:403},{n:'Implementation of Queue using Array',s:931},{n:'Implementation of Queue using Linked List',s:700}]},
    {id:'basics-dequeue', name:'Dequeue', v:[{n:'Deque Data Structure',s:546},{n:'Array Implementation of Deque',s:1039}]},
    {id:'basics-tree', name:'Tree', v:[{n:'Tree Data Structure',s:266},{n:'Application of Tree',s:284},{n:'Binary Tree',s:389},{n:'Tree Traversal',s:545},{n:'Implementation of Inorder Traversal',s:504},{n:'Implementation of Preorder Traversal',s:326},{n:'Implementation of Postorder Traversal',s:265},{n:'Height of Binary Tree',s:460},{n:'Print Nodes at K distance',s:382},{n:'Level Order Traversal',s:627},{n:'Size of Binary Tree',s:737},{n:'Maximum in Binary Tree',s:537},{n:'Iterative Inorder Traversal',s:615},{n:'Iterative Preorder Traversal (Simple)',s:412},{n:'Iterative Preorder Traversal (Space Optimized)',s:593}]},
    {id:'basics-bst', name:'Binary Search Tree', v:[{n:'Binary Search Tree(Background)',s:400},{n:'Binary Search Tree(Introduction)',s:500},{n:'Search in BST (Introduction)',s:229},{n:'Search in BST C++',s:457},{n:'Search in BST Java',s:427},{n:'Insert in BST',s:211},{n:'Insert in BST C++',s:439},{n:'Insert in BST Java',s:448},{n:'Deletion in BST',s:302},{n:'BST deletion in C++',s:499},{n:'BST Deletion in Java',s:481},{n:'Floor in BST',s:456},{n:'Floor in BST in CPP',s:248},{n:'Floor in BST Java',s:211},{n:'Ceil in BST',s:462},{n:'Self Balancing BST',s:595},{n:'AVL Tree',s:789},{n:'Red Black Tree',s:444},{n:'Applications of BST',s:343}]},
    {id:'basics-heap', name:'Heap', v:[{n:'Binary Heap Introduction',s:552},{n:'Binary Heap Implementation',s:99},{n:'Binary Heap Insert',s:398},{n:'Binary Heap (Heapify and Extract)',s:1103},{n:'Binary Heap (Decrease Key, Delete and Build Heap)',s:922}]},
  ]},
  { id:'libraries', name:'Libraries (Java)', color:'#6a994e', topics:[
    {id:'libs-collection-overview', name:'Collection Overview', v:[{n:'Java Collections Framework',s:519},{n:'Collection Hierarchy',s:1038},{n:'Generics in Java',s:711},{n:'Wildcard in Generics',s:795},{n:'Collection Interface',s:446},{n:'Iterator in Java',s:547},{n:'toArray() Methods',s:726},{n:'Collection Bulk Operations',s:884},{n:'Iterating Through Collections',s:825}]},
    {id:'libs-lambda', name:'Java Lambda Expressions', v:[{n:'Lambda Expressions',s:658},{n:'Method References in Java',s:444},{n:'Lambda Expressions Syntax',s:909}]},
    {id:'libs-streams', name:'Java Streams', v:[{n:'Stream in Java',s:476},{n:'Stream Applications',s:225},{n:'Stream Hierarchy and Methods',s:354},{n:'Java Stream Examples',s:663}]},
    {id:'libs-arraylist', name:'ArrayList', v:[{n:'List Interface in Java',s:490},{n:'ListIterator in Java',s:599},{n:'ArrayList in Java',s:299},{n:'ArrayList Working',s:943},{n:'Java ArrayList Methods',s:858},{n:'Java ArrayList Traversal',s:620},{n:'Sample Problems - List of smaller elements in Java',s:241}]},
    {id:'libs-linkedlist', name:'LinkedList (Java)', v:[{n:'LinkedList in Java',s:1347},{n:'Josephus Problem using LinkedList in Java',s:587},{n:'Design A DS for Remove and Print',s:387}]},
    {id:'libs-stack', name:'Stack (Java)', v:[{n:'Stack in Java Collections',s:316},{n:'Sample Problem - Reverse order of items in Java',s:442},{n:'Sample Problem - Check for balanced parenthesis in Java',s:691},{n:'Sample Problem - Stock span problem in Java',s:1677},{n:'Sample Problem - Previous greater element in Java',s:660},{n:'Sample Problem - Next greater element in Java',s:752}]},
    {id:'libs-queue', name:'Queue (Java)', v:[{n:'Queue in Java',s:729},{n:'Sample Problem - Reverse first K items of a queue in Java',s:397}]},
    {id:'libs-deque', name:'Deque (Java)', v:[{n:'Deque in Java',s:484},{n:'ArrayDeque in Java',s:1245}]},
    {id:'libs-priority-queue', name:'PriorityQueue', v:[{n:'PriorityQueue in Java',s:149},{n:'Sample Problem - Purchasing maximum items in Java',s:304},{n:'Sample Problem - K Largest Elements in Java',s:741},{n:'Sample Problem - Find K most frequent elements',s:626},{n:'Sample Problem - Find K most frequent in linear time in Java',s:914}]},
    {id:'libs-hashset', name:'HashSet and LinkedHashSet', v:[{n:'Set Interface In Java',s:712},{n:'HashSet in Java',s:435},{n:'LinkedHashSet',s:391},{n:'Sample Problem - Print Distinct Elements in Java',s:414},{n:'Sample Problem - Print Repeating elements in Java',s:365}]},
    {id:'libs-treeset', name:'TreeSet', v:[{n:'TreeSet In java',s:356},{n:'Sample Problem - Ceiling on right in Java',s:678}]},
    {id:'libs-hashmap', name:'HashMap and LinkedHashMap', v:[{n:'Map interface in Java',s:579},{n:'Map Interface Methods In Java',s:617},{n:'HashMap in Java',s:439},{n:'LinkedHashMap',s:760},{n:'Sample Problem - DS for Balance in Java',s:492},{n:'Sample Problem - Print Frequencies in an Order',s:542}]},
    {id:'libs-treemap', name:'TreeMap', v:[{n:'TreeMap in Java',s:382},{n:'Design A DS For item prices',s:650},{n:'Design A DS for prices Duplicates Allowed',s:917},{n:'Sample Problem - Count Greater Elements in Java',s:650}]},
    {id:'libs-string', name:'String (Java)', v:[{n:'String in Java',s:916},{n:'StringBuilder and StringBuffer',s:243},{n:'StringBuilder and StringBuffer Methods',s:528},{n:'Sample Problem - Pangram Checking in Java',s:337},{n:'Java Sample Problem - Pattern Searching',s:488},{n:'Sample Problem - Find one extra character in Java',s:746}]},
    {id:'libs-comparator', name:'Comparator & Comparable', v:[{n:'Comparable interface',s:390},{n:'Comparator Interface',s:417},{n:'Comparator Methods and Examples',s:331}]},
    {id:'libs-arrays-class', name:'Arrays Class', v:[{n:'Arrays Class in Java',s:519},{n:'fill() in Java',s:349},{n:'Binary search in Java',s:753},{n:'Arrays.equals()',s:393},{n:'Arrays.mismatch()',s:399},{n:'Arrays.compare()',s:355},{n:'Arrays.aslist() in Java',s:366},{n:'Arrays.toString() in Java',s:253},{n:'Median of a Row Wise Sorted Matrix Java',s:802}]},
    {id:'libs-collections-class', name:'Collections class', v:[{n:'Collections Class in Java',s:699},{n:'Collections.fill() in Java',s:158},{n:'Collections.reverse() in Java',s:136},{n:'Collections.binarySearch in Java',s:495},{n:'Collections max and min In Java',s:444},{n:'Collections.frequency() in Java',s:497}]},
    {id:'libs-sorting', name:'Sorting (Java)', v:[{n:'Sorting in Java',s:309},{n:'Arrays.sort in Java',s:598},{n:'Collections.Sort in Java',s:386},{n:'Sample Problem - The Thief Problem in Java',s:272},{n:'Sample Problem - Chocolate distribution problem in Java',s:659},{n:'Sample Problem - Keeping indexes after sorting in Java',s:338},{n:'Sample Problem - Sort an array according to other in Java',s:413},{n:'Sample Problem - Sort students by marks in Java',s:308},{n:'Sample Problem - Sort elements by frequency in Java',s:496},{n:'Sort Elements by Frequency in Linear time',s:798}]},
  ]},
  { id:'advanced', name:'DSA Advanced', color:'#d4a373', topics:[
    {id:'adv-mathematics', name:'Mathematics', v:[{n:'Count Digits',s:180},{n:'Palindrome Numbers',s:445},{n:'Factorial of a Number',s:330},{n:'Trailing Zeros in Factorial',s:537},{n:'GCD or HCF of two Numbers',s:622},{n:'LCM of Two Numbers',s:236},{n:'Check for Prime',s:856},{n:'Prime Factors',s:1051},{n:'All Divisors of a Number',s:574},{n:'Sieve of Eratosthenes',s:831},{n:'Computing Power',s:368},{n:'Iterative Power',s:565}]},
    {id:'adv-bit-magic', name:'Bit Magic', v:[{n:'Binary Representation of Negative Numbers',s:621},{n:'Bitwise Operators in CPP (Part 1)',s:299},{n:'Bitwise Operators in CPP (Part 2)',s:669},{n:'Bitwise Operator in Java (Part 1)',s:194},{n:'Bitwise Operators in Java (Part 2)',s:463},{n:'Bitwise Operators in Java (Part 3)',s:335},{n:'Check if Kth bit is set or not',s:468},{n:'Count Set Bits',s:1032},{n:'Power of Two',s:390},{n:'One Odd Occurring',s:455},{n:'Two Odd Occurring',s:675},{n:'Power Set using Bitwise',s:394}]},
    {id:'adv-recursion', name:'Recursion (Adv)', v:[{n:'Josephus Problem',s:1356},{n:'Subset Sum Problem (Recursive Solution) (Medium)',s:653},{n:'Printing all Permutations',s:670}]},
    {id:'adv-arrays', name:'Arrays (Adv)', v:[{n:'Left Rotate an Array by D places',s:589},{n:'Move Zeros to End',s:476},{n:'Leaders in an Array problem',s:592},{n:'Frequencies in a Sorted Array',s:419},{n:'Maximum Difference Problem with Order',s:484},{n:'Stock Buy and Sell Problem (Part 1)',s:417},{n:'Stock Buy and Sell problem (Part 2)',s:283},{n:'Trapping Rain Water',s:830},{n:'Maximum consecutive 1s',s:303},{n:'Maximum subarray sum',s:678},{n:'Longest Even Odd Subarray',s:508},{n:'Maximum Circular Sum Subarray',s:1111},{n:'Majority Element',s:823},{n:'Minimum Consecutive Flips',s:882},{n:'Sliding Window Technique',s:500},{n:'Subarray with Given Sum',s:540},{n:'Prefix Sum',s:575},{n:'Equilibrium Point',s:500},{n:'Maximum Appearing Element',s:609}]},
    {id:'adv-searching', name:'Searching (Adv)', v:[{n:'Index of first Occurrence in Sorted',s:538},{n:'Index of last Occurrence in Sorted',s:528},{n:'Count Occurrences in Sorted',s:314},{n:'Count 1s in a Sorted Binary Array',s:369},{n:'Square root',s:509},{n:'Search in Infinite Sized Array',s:619},{n:'Search in Sorted Rotated Array',s:944},{n:'Find a Peak Element',s:659},{n:'Two Pointers Approach',s:666},{n:'Triplet in a Sorted Array',s:506},{n:'Median of Two Sorted Arrays',s:1114},{n:'Majority Element',s:823},{n:'Repeating Elements Part (1)',s:379},{n:'Repeating Elements Part (2)',s:827},{n:'Allocate Minimum Pages (Naive Method)',s:534},{n:'Allocate Minimum Pages (Binary Search)',s:690}]},
    {id:'adv-sorting', name:'Sorting (Adv)', v:[{n:'Minimum Difference in an Array',s:401},{n:'Intersection of two sorted arrays',s:507},{n:'Union of two sorted arrays',s:641},{n:'Count inversions in Array',s:896},{n:'Tail call elimination in QuickSort',s:167},{n:'Cycle Sort',s:1085},{n:'Kth smallest element',s:782},{n:'Sort an Array with two types of elements',s:534},{n:'Sort an array with three types of elements',s:695},{n:'Merge overlapping intervals',s:1516},{n:'Meeting the maximum guests',s:640},{n:'Overview of sorting algorithm',s:918}]},
    {id:'adv-matrix', name:'Matrix', v:[{n:'Multidimensional array in CPP',s:847},{n:'Passing 2D arrays as arguments in CPP',s:669},{n:'Multidimensional array in Java',s:461},{n:'Passing 2D arrays as arguments in Java',s:158},{n:'Matrix in Snake Pattern',s:209},{n:'Matrix Boundary Traversal',s:324},{n:'Transpose of a Matrix',s:373},{n:'Rotate Matrix Anti-clockwise by 90',s:483},{n:'Spiral Traversal of Matrix',s:608},{n:'Search in Row-wise and Column-wise sorted matrix',s:713},{n:'Median of a Row Wise Sorted Matrix C++',s:807},{n:'Median of a Row Wise Sorted Matrix Java',s:802}]},
    {id:'adv-hashing', name:'Hashing (Adv)', v:[{n:'Intersection of two arrays',s:487},{n:'Union of two unsorted arrays',s:503},{n:'Pair with given sum in unsorted array',s:472},{n:'Subarray with zero sum',s:552},{n:'Subarray with given sum',s:566},{n:'Longest subarray with given sum',s:1002},{n:'Longest subarray with equal number of 0\'s and 1\'s',s:411},{n:'Longest common span with same sum in binary arrays',s:476},{n:'Longest Consecutive Subsequence',s:960},{n:'Count Distinct Elements In Every Window',s:657},{n:'More than n/k Occurences',s:523},{n:'More than n/k Occurences (O(nk) solution)',s:659}]},
    {id:'adv-strings', name:'Strings (Adv)', v:[{n:'Introduction to String',s:858},{n:'Strings in C++',s:1088},{n:'String in Java',s:916},{n:'Palindrome Check',s:557},{n:'Check if a String is Subsequence of Other',s:805},{n:'Check for Anagram',s:445},{n:'Leftmost Repeating Character',s:766},{n:'Leftmost Non-repeating Element',s:596},{n:'Reverse words in a string',s:885},{n:'Overview of Pattern Searching',s:433},{n:'Naive Pattern Searching',s:476},{n:'Improved Naive Pattern Searching for Distinct',s:700},{n:'Rabin Karp Algorithm',s:1348},{n:'KMP Algorithm (Part 1 : Constructing LPS Array)',s:1500},{n:'KMP Algorithm (Part 2 : Complete Algorithm)',s:1290},{n:'Check if Strings are Rotations',s:437},{n:'Anagram Search',s:677},{n:'Lexicographic Rank of a String',s:1150},{n:'Longest Substring with Distinct Characters',s:1078}]},
    {id:'adv-ll', name:'Linked List (Adv)', v:[{n:'Reverse a linked list in groups of size k',s:783},{n:'Detect loop',s:848},{n:'Detect loop using floyd cycle detection',s:817},{n:'Detect and remove loop in linked list',s:1093},{n:'Delete node with only pointer given to it',s:274},{n:'Segregate even odd nodes of linked list',s:404},{n:'Intersection Point of two linked list',s:482},{n:'Pairwise swap nodes of linked list',s:577},{n:'Clone a linked list using a random pointer',s:763},{n:'LRU Cache Design',s:804},{n:'Merge two sorted linked lists',s:903},{n:'Palindrome Linked List',s:618}]},
    {id:'adv-stack', name:'Stack (Adv)', v:[{n:'Implement two Stacks in an Array',s:752},{n:'K Stacks in an array',s:986},{n:'Stock span problem',s:1601},{n:'Previous Greater Element',s:482},{n:'Next Greater Element',s:889},{n:'Largest Rectangular Area in a Histogram (Part 1)',s:759},{n:'Largest Rectangular Area in a Histogram (Part 2)',s:701},{n:'Largest Rectangle with all 1\'s',s:857},{n:'Stack with getMin() in O(1)',s:545},{n:'Design a Stack with getMin() in O(1) Space',s:985},{n:'Infix, Prefix and Postfix Introduction',s:594},{n:'Infix to Postfix (Simple Solution)',s:575},{n:'Infix to Postfix (Efficient Solution)',s:752},{n:'Evaluation of Postfix',s:624},{n:'Infix to Prefix (Simple Solution)',s:540},{n:'Infix to Prefix (Efficient Solution)',s:947},{n:'Evaluation of Prefix',s:411}]},
    {id:'adv-queue-deque', name:'Queue and Deque (Adv)', v:[{n:'Implementing stack using queue',s:407},{n:'Reversing a Queue',s:422},{n:'Generate numbers with given digits',s:390},{n:'Maximums of all subarrays of size k',s:1226},{n:'First Circular Tour',s:1672},{n:'Design a Data Structure with Min and Max operations',s:312}]},
    {id:'adv-tree', name:'Tree (Adv)', v:[{n:'Level Order Traversal Line by Line (Part 1)',s:369},{n:'Level Order Traversal Line by Line (Part 2)',s:225},{n:'Print Left View of Binary Tree',s:574},{n:'Children Sum Property',s:387},{n:'Check for Balanced Binary Tree',s:699},{n:'Maximum Width of Binary Tree',s:299},{n:'Convert Binary Tree to Doubly Linked List',s:923},{n:'Construct Binary Tree from Inorder and Preorder',s:1210},{n:'Tree Traversal in Spiral Form',s:1301},{n:'Diameter of a Binary Tree',s:926},{n:'LCA of Binary Tree (Part 1)',s:777},{n:'LCA of Binary Tree (Part 2)',s:652},{n:'Burn a Binary Tree from a Leaf',s:1004},{n:'Count nodes in a Complete Binary Tree',s:1108},{n:'Serialize and Deserialize a Binary Tree',s:1156}]},
    {id:'adv-bst', name:'Binary Search Tree (Adv)', v:[{n:'Self Balancing BST',s:595},{n:'AVL Tree',s:789},{n:'Red Black Tree',s:444},{n:'Applications of BST',s:343},{n:'Ceiling on left side in an array',s:429},{n:'Find Kth Smallest in BST',s:752},{n:'Check for BST',s:892},{n:'Fix BST with Two Nodes Swapped',s:699},{n:'Pair Sum with given BST',s:601},{n:'Vertical Sum in a Binary Tree',s:842},{n:'Vertical Traversal of Binary Tree',s:969},{n:'Top View of Binary Tree',s:808},{n:'Bottom View of Binary Tree',s:828}]},
    {id:'adv-heap', name:'Heap (Adv)', v:[{n:'Heap Sort',s:773},{n:'K Closest Elements',s:737},{n:'Sort K-Sorted Array',s:455},{n:'Merge K Sorted Arrays',s:1236},{n:'Median of a Stream',s:1236}]},
    {id:'adv-graph', name:'Graph', v:[{n:'Introduction to Graph',s:533},{n:'Graph Representation (Adjacency Matrix)',s:437},{n:'Graph Representation (Adjacency List)',s:426},{n:'Adjacency List implementation in CPP',s:275},{n:'Adjacency List implementation in Java',s:344},{n:'Adjacency Matrix and List Comparison',s:375},{n:'Breadth First Search',s:1216},{n:'Applications of BFS',s:210},{n:'Depth First Search',s:1207},{n:'Applications of DFS',s:325},{n:'Detect Cycle in Undirected Graph',s:434},{n:'Detect Cycle in a Directed Graph (Part 1)',s:614},{n:'Topological Sorting (Kahn\'s BFS Based Algortihm)',s:752},{n:'Detect Cycle in a Directed Graph (Part 2)',s:276},{n:'Topological Sorting (DFS Based Algorithm)',s:546},{n:'Shortest Path in DAG',s:582},{n:'Prim\'s Algorithm/Minimum Spanning Tree',s:566},{n:'Implementation of Prim\'s Algorithm C++',s:1012},{n:'Implementation of Prim\'s Algorithm Java',s:1031},{n:'Dijkstra\'s Shortest Path Algorithm',s:1142},{n:'Implementation of Dijkstra\'s Algorithm C++',s:663},{n:'Implementation of Dijkstra\'s Algorithm Java',s:606},{n:'Kosaraju\'s Algorithm Part 1',s:823},{n:'Kosaraju\'s Algorithm Part 2',s:662},{n:'Kruskal\'s Algorithm',s:1444},{n:'Bellman Ford Shortest Path Algorithm',s:771},{n:'Articulation Point',s:1353},{n:'Bridges in Graph',s:634},{n:'Tarjans Algorithm',s:864}]},
    {id:'adv-greedy', name:'Greedy', v:[{n:'Introduction to Greedy Algorithms',s:727},{n:'Activity Selection Problem',s:505},{n:'Activity Selection Solution in C++',s:238},{n:'Activity Selection Solution in Java',s:320},{n:'Fractional Knapsack Problem',s:468},{n:'Fractional Knapsack in C++',s:342},{n:'Fractional Knapsack in Java',s:588},{n:'Job Sequencing Problem',s:743},{n:'Huffman Coding (introduction)',s:536},{n:'Huffman Algorithms',s:865},{n:'CPP Implementation of Huffman coding',s:541},{n:'Java Implementation of Huffman coding',s:640}]},
    {id:'adv-backtracking', name:'Backtracking', v:[{n:'Concepts of Backtracking',s:644},{n:'Rat In a Maze',s:627},{n:'N Queen Problem',s:1206},{n:'Sudoku Problem',s:846}]},
    {id:'adv-dp', name:'Dynamic Programming', v:[{n:'Introduction to DP',s:286},{n:'Dynamic Programming Memoization',s:930},{n:'Dynamic Programming Tabulation',s:489},{n:'Longest Common Subsequence (Part 1)',s:1464},{n:'Longest Common Subsequence (Part 2)',s:547},{n:'Coin Change Count Combinations',s:828},{n:'Edit Distance Problem',s:899},{n:'Edit Distance Problem DP solution',s:675},{n:'Longest Increasing Subsequence Problem',s:1336},{n:'Longest Increasing Subsequence O(nlogn)',s:934},{n:'Maximum Cuts',s:622},{n:'Minimum coins to make a value',s:1310},{n:'Minimum Jumps to reach at end',s:1032},{n:'0-1 knapsack problem',s:872},{n:'0-1 knapsack problem DP Solution',s:823},{n:'Optimal Strategy for a Game',s:1629},{n:'Variation of LCS',s:825},{n:'Variation of LIS (Part 1)',s:796},{n:'Variations of LIS (Part 2)',s:710},{n:'Egg Dropping Puzzle - Part 1',s:789},{n:'Egg Dropping Puzzle - Part 2',s:580},{n:'Count BSTs with n keys',s:820},{n:'Maximum sum with no two consecutive',s:816},{n:'Subset Sum Problem (Recursive Solution) (Medium)',s:653},{n:'Subset Sum Problem (DP Solution) (Medium)',s:655},{n:'Matrix Chain Multiplication',s:966},{n:'Matrix Chain Multiplication (DP Solution) (Hard)',s:642},{n:'Palindrome Partitioning',s:952},{n:'Allocate Minimum Pages (Naive Method)',s:534},{n:'Allocate Minimum Pages (DP Solution) (Hard)',s:618}]},
    {id:'adv-trie', name:'Trie', v:[{n:'Trie Data Structure (Introduction)',s:270},{n:'Trie (Representation, Search and Insert)',s:1308},{n:'Trie Delete',s:671},{n:'Count Distinct Rows in a Binary Matrix',s:457}]},
    {id:'adv-segment-bit', name:'Segment and Binary Indexed Trees', v:[{n:'Segment Tree (Introduction)',s:1327},{n:'Constructing Segment Tree',s:611},{n:'Range Query on Segment Tree',s:828},{n:'Update Query on Segment Tree',s:603},{n:'Binary Indexed Tree (Intoduction)',s:370},{n:'Binary Indexed Tree (An Example Problem)',s:360},{n:'Binary Indexed Tree (Prefix Sum)',s:919},{n:'Binary Indexed Tree (Prefix Sum Implemention)',s:694},{n:'Binary Indexed Tree (Update Operation)',s:641}]},
    {id:'adv-disjoint-set', name:'Disjoint Set', v:[{n:'Disjoint Set Introduction',s:617},{n:'Find and Union Operations on Disjoint Sets',s:491},{n:'Union by Rank',s:460},{n:'Path Compression',s:309},{n:'Kruskal\'s Algorithm',s:1444}]},
  ]},
];

const WEEKS = [
  {wn:1,phase:'Phase 1: Foundation',title:'Spring L1-9 revision + DSA Big-O + Core Java OOP',days:[
    {d:'2026-08-24',aws:'☁️ SAA Intro — Introduction (4m) · AWS Exams (18m) · Scenario - Animals4life (13m) · Connect with other students and your instructor (3m)',awsRef:['aws-intro-01','aws-intro-02','aws-intro-03','aws-intro-04'],dsa:'GFG DSA intro + Analysis of Algorithms videos 1-6',main:'Java Fundamentals: types, primitives, JVM/JRE/JDK, classpath',mt:'java',rot:'Setup: GitHub repo, IntelliJ, Spring Boot starter project',rt:'hands-on'},
    {d:'2026-08-25',dsa:'GFG: Big-O videos 7-12 + 5 complexity practice + Arrays intro',main:'📺 L1-3 (rev) · Enterprise Architecture, 1/2/3-Tier',mt:'spring',rot:'📺 SQL Bootcamp S1 Basics (18min) + S2: SELECT, DISTINCT, COUNT · 10 practice Q',rt:'sql',cRef:'sql-bc-s1'},
    {d:'2026-08-26',aws:'☁️ Accounts & IAM — AWS Accounts - The basics (12m) · Creating an AWS Account (5m) · Multi-factor Authentication (MFA) (8m) · Adding MFA - General Account Root User (5m) · Identity and Access Management (IAM) Basics (13m)',awsRef:['aws-acct-01','aws-acct-02','aws-acct-03','aws-acct-04','aws-acct-05'],dsa:'GFG: Arrays intro + Largest + 2nd Largest + Reverse Array',main:'Java OOP fundamentals: inheritance, polymorphism deep, super/this',mt:'java',rot:'Hands-on: Refactor Spring Boot starter with 2 beans constructor injection',rt:'hands-on'},
    {d:'2026-08-27',dsa:'GFG: Arrays — Left/Right Rotation by K',main:'📺 L4-6 (rev) · Model 1 vs Model 2, MVC Architecture, Framework comparison',mt:'spring',rot:'Full Week-so-far revision + self-quiz (10 Q)',rt:'revision'},
    {d:'2026-08-28',aws:'☁️ Accounts & IAM + AWS Fundamentals — Creating IAMADMIN user & adding MFA (8m) · IAM Access Keys (7m) · Creating Access keys and setting up AWS CLI v2 tools (18m) · AWS Public vs Private Services (7m)',awsRef:['aws-acct-06','aws-acct-07','aws-acct-08','aws-fund-01'],dsa:'GFG: Arrays — Kadane\'s Algorithm + variants',main:'Java OOP: Abstraction, Encapsulation, IS-A vs HAS-A',mt:'java',rot:'📺 SQL Bootcamp S2: WHERE 1&2, ORDER BY, LIMIT, BETWEEN, IN, LIKE/ILIKE + exercises',rt:'sql',cRef:'sql-bc-s2'},
    {d:'2026-08-29',dsa:'GFG: Arrays — Stock Buy/Sell + Move Zeroes',main:'📺 L7-9 (rev) · Spring history + modules + App Development-1',mt:'spring',rot:'Hands-on: Trace bean creation in Spring Boot app, log lifecycle',rt:'hands-on'},
    {d:'2026-08-30',aws:'☁️ AWS Fundamentals — AWS Global Infrastructure (15m) · AWS Default Virtual Private Cloud (VPC) (15m) · Elastic Compute Cloud (EC2) Basics (15m)',awsRef:['aws-fund-02','aws-fund-03','aws-fund-04'],dsa:'GFG: Arrays — Set Matrix Zeros + Pascal\'s Triangle',main:'Java Method overloading vs overriding, dynamic dispatch',mt:'java',rot:'📺 SQL Bootcamp S3: Aggregation Functions, GROUP BY 1&2, HAVING (33min) + practice',rt:'sql',cRef:'sql-bc-s3'},
  ]},
  {wn:2,phase:'Phase 1: Foundation',title:'Spring L10-21 revision + Exception Handling + Annotations',days:[
    {d:'2026-08-31',dsa:'GFG: Arrays — Next Permutation + Sort 0/1/2',main:'📺 L10-12 (rev) · App Dev-2,3 + BeanFactory Resources',mt:'spring',rot:'Hands-on: BeanFactory experiment — load from XML vs Java config',rt:'hands-on'},
    {d:'2026-09-01',aws:'☁️ AWS Fundamentals — My First EC2 Instance - PART1 (10m) · My First EC2 Instance - PART2 (4m) · Simple Storage Service (S3) Basics (16m)',awsRef:['aws-fund-05','aws-fund-06','aws-fund-07'],dsa:'GFG: Arrays final — Merge Intervals + Find Duplicate',main:'Java Abstract class vs Interface, Java 8 defaults, diamond problem',mt:'java',rot:'📺 LLD S1 · Game Engine — OOP design thinking (45min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s1'},
    {d:'2026-09-02',dsa:'GFG: Recursion intro + factorial, sum-N, power',main:'📺 L13-15 (rev) · ApplicationContext, BeanFactory vs ApplicationContext',mt:'spring',rot:'Hands-on: Inspect ApplicationContext, list all beans programmatically',rt:'hands-on'},
    {d:'2026-09-03',aws:'☁️ AWS Fundamentals — My First S3 Bucket (19m) · CloudFormation (CFN) Basics (12m)',awsRef:['aws-fund-08','aws-fund-09'],dsa:'GFG: Recursion — Fibonacci + palindrome check',main:'Java Static keyword deep + Final keyword deep',mt:'java',rot:'Full week revision + self-quiz (15 Q)',rt:'revision'},
    {d:'2026-09-04',dsa:'GFG: Recursion — generate subsets (backtracking intro)',main:'📺 L16-18 (rev) · Beans + Scopes (singleton/prototype/request/session)',mt:'spring',rot:'📺 SQL Bootcamp S4: JOINs intro, AS statement, INNER JOIN, FULL OUTER JOIN (37min) + 10Q',rt:'sql'},
    {d:'2026-09-05',aws:'☁️ AWS Fundamentals — Simple Automation With CloudFormation (CFN) (16m) · CloudWatch (CW) Basics (14m) · Simple Monitoring with Cloudwatch (16m)',awsRef:['aws-fund-10','aws-fund-11','aws-fund-12'],dsa:'GFG: Recursion — print all permutations',main:'Java String pool, immutability, intern(), == vs equals',mt:'java',rot:'Hands-on: Test bean scopes — singleton vs prototype counter',rt:'hands-on'},
    {d:'2026-09-06',dsa:'GFG: Recursion — N-Queens intro, subset sum',main:'📺 L19-21 (rev) · Java Configurations + Bean Lifecycle (init, destroy)',mt:'spring',rot:'📺 SQL Bootcamp S4: LEFT/RIGHT JOIN, UNION, JOIN challenge tasks (31min) + practice',rt:'sql',cRef:'sql-bc-s4'},
  ]},
  {wn:3,phase:'Phase 1: Foundation',title:'Spring L22-35 revision finish + L35 NEW + Hashing + Searching',days:[
    {d:'2026-09-07',aws:'☁️ AWS Fundamentals — Shared Responsibility Model (6m) · High-Availability vs Fault-Tolerance vs Disaster Recovery (17m) · Route53 (R53) Fundamentals (6m) · Registering a Domain with route53 (10m)',awsRef:['aws-fund-13','aws-fund-14','aws-fund-15','aws-fund-16'],dsa:'GFG: Hashing intro + frequency counter',main:'📺 L22-24 (rev) · Bean Lifecycle deep + Inheritance + BeanPostProcessor',mt:'spring',rot:'Hands-on: Custom BeanPostProcessor for logging',rt:'hands-on'},
    {d:'2026-09-08',dsa:'GFG: Hashing — 2 Sum, anagram check',main:'Java StringBuilder vs StringBuffer, perf benchmark',mt:'java',rot:'📺 LLD S2 · SRP (45min) + S3 · Prototype Pattern (35min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s2','sd-lld-s3']},
    {d:'2026-09-09',aws:'☁️ AWS Fundamentals + IAM & Orgs — DNS Record Types (13m) · IAM Identity Policies (16m) · IAM Users and ARNs (14m)',awsRef:['aws-fund-17','aws-iam-01','aws-iam-02'],dsa:'GFG: Hashing — first unique char, longest subarray sum K',main:'📺 L25-27 (rev) · IoC + Constructor DI + Setter DI + List/Set/Map',mt:'spring',rot:'Hands-on: Implement equals/hashCode, test in HashSet/HashMap',rt:'hands-on'},
    {d:'2026-09-10',dsa:'GFG: Hashing — group anagrams, subarray with XOR',main:'📺 L28-30 (rev) · Circular DI + Constructor vs Setter + Namespaces',mt:'spring',rot:'Full week revision + self-quiz',rt:'revision'},
    {d:'2026-09-11',aws:'☁️ IAM & Orgs — Simple Identity Permissions in AWS (16m) · IAM Groups (8m) · Permissions control using IAM Groups (9m) · IAM Roles - The Tech (8m)',awsRef:['aws-iam-03','aws-iam-04','aws-iam-05','aws-iam-06'],dsa:'GFG: Searching — Binary Search variants (first/last occurrence)',main:'Java Exception handling: hierarchy, checked vs unchecked, try-with-resources',mt:'java',rot:'📺 SQL Bootcamp S5: Timestamps, Math functions, String functions, SubQuery (47min) + exercises',rt:'sql',cRef:'sql-bc-s5'},
    {d:'2026-09-12',dsa:'GFG: Searching — Binary Search on Answer (sqrt, peak)',main:'📺 L31-33 (rev) · C-Namespace + Autowiring + Bean Collaboration + XML autowiring',mt:'spring',rot:'Hands-on: Refactor project to use @Autowired with @Qualifier + @Primary',rt:'hands-on'},
    {d:'2026-09-13',aws:'☁️ IAM & Orgs — When to use IAM Roles (15m) · Service-linked Roles & PassRole (5m) · AWS Organizations (13m)',awsRef:['aws-iam-07','aws-iam-08','aws-iam-09'],dsa:'GFG: Searching final — Search in rotated sorted array',main:'📺 L34 (rev) + 📺 L35 (new) · Annotation-Based Autowiring + Autodiscovery-1 (@Component)',mt:'spring',rot:'📺 SQL Bootcamp S5: Self-Join + S6: Keys/Constraints + S7: CASE, COALESCE, CAST (53min)',rt:'sql',cRef:'sql-bc-s6'},
  ]},
  {wn:4,phase:'Phase 1: Foundation',title:'Spring NEW content begins · Autodiscovery + Linked List',days:[
    {d:'2026-09-14',dsa:'GFG: Sorting — Merge Sort (recursion tree + O(n log n))',main:'📺 L36-37 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations)',mt:'spring',rot:'Hands-on: Refactor project — clean @Service/@Repository separation',rt:'hands-on'},
    {d:'2026-09-15',aws:'☁️ IAM & Orgs — AWS Organizations demo (20m) · Service Control Policies (SCPs) (13m)',awsRef:['aws-iam-10','aws-iam-11'],dsa:'GFG: Sorting — Quick Sort (partition logic)',main:'Java Object class methods, Wrapper classes, autoboxing',mt:'java',rot:'📺 LLD S4 · DRY + Iterator (30min) + S5 · OCP + Builder (40min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s4','sd-lld-s5']},
    {d:'2026-09-16',dsa:'GFG: Sorting + Linked List intro',main:'📺 L38-39 · Autodiscovery-4 + Java-Based Autowiring (@Configuration deep)',mt:'spring',rot:'Hands-on: Pure Java config (no XML) for 3 beans',rt:'hands-on'},
    {d:'2026-09-17',aws:'☁️ IAM & Orgs — Using Service Control Policies (17m) · CloudWatch Logs (7m) · CloudTrail (12m)',awsRef:['aws-iam-12','aws-iam-13','aws-iam-14'],dsa:'GFG: Linked List — Reverse (iterative + recursive)',main:'Java Generics basics: type params, wildcards, PECS',mt:'java',rot:'Full week revision + self-quiz + plan Week 5',rt:'revision'},
    {d:'2026-09-18',dsa:'GFG: Linked List — Detect Cycle (Floyd\'s), find cycle start',main:'📺 L40 · Explicit Wiring vs Autowiring drawbacks · 🆕 Bean Validation API supplement (Baeldung)',mt:'spring',rot:'📺 SQL Bootcamp S7: NULLIF, Views (25min) + Phase 1 SQL done — full review + exercises',rt:'sql',cRef:'sql-bc-s7'},
    {d:'2026-09-19',aws:'☁️ IAM & Orgs — Implementing an Organizational Trail (18m) · AWS Control Tower 101 (16m)',awsRef:['aws-iam-15','aws-iam-16'],dsa:'GFG: Linked List — Merge two sorted, find middle',main:'Java I/O & NIO basics, Files/Path, BufferedReader/Writer',mt:'java',rot:'Hands-on: refactor project to DTO + MapStruct (🆕 supplement Amigoscode)',rt:'hands-on'},
    {d:'2026-09-20',dsa:'GFG: Linked List — Palindrome, Remove Nth from end',main:'📺 L41-42 · Method Injection + Method Replacement',mt:'spring',rot:'PHASE 1 RETRO + plan Phase 2',rt:'revision'},
  ]},
  {wn:5,phase:'Phase 2: Core Backend',title:'Spring L43-48 Validations + Events + LL deep + Threading',days:[
    {d:'2026-09-21',aws:'☁️ S3 — S3 Security (Resource Policies & ACLs) (18m) · S3 Static Hosting (11m)',awsRef:['aws-s3-01','aws-s3-02'],dsa:'GFG: LL — Merge K sorted (intro to heap)',main:'Java Part B start: Thread vs Runnable, lifecycle, daemon threads',mt:'java',rot:'Hands-on: Multi-threaded counter demo, race condition reproduction',rt:'hands-on'},
    {d:'2026-09-22',dsa:'GFG: LL — Add two numbers as LL',main:'📺 L43-44 · Bean Validations-1,2',mt:'spring',rot:'📺 Adv SQL S2: Subqueries overview, FROM subqueries, CTEs, Comparison subqueries',rt:'sql'},
    {d:'2026-09-23',aws:'☁️ S3 — Creating a static website with S3 (18m) · Object Versioning & MFA Delete (8m) · S3 Versioning (16m)',awsRef:['aws-s3-03','aws-s3-04','aws-s3-05'],dsa:'GFG: LL — Intersection of 2 LL, sort LL',main:'Java start()/run(), join, sleep, yield, interrupt',mt:'java',rot:'Hands-on: Custom @Constraint with Bean Validation API',rt:'hands-on'},
    {d:'2026-09-24',dsa:'GFG: LL Circular + Doubly intro',main:'📺 L45-46 · Bean Validations-3 + Event Handling',mt:'spring',rot:'📺 LLD S6 · LSP — Liskov Substitution Principle (31min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s6'},
    {d:'2026-09-25',aws:'☁️ S3 — S3 Performance Optimization (12m) · S3 Performance (5m) · Key Management Service (KMS) (19m)',awsRef:['aws-s3-06','aws-s3-07','aws-s3-08'],dsa:'GFG: Stack intro + Valid Parentheses + Reverse Stack',main:'Java synchronized: method/block/static, intrinsic lock',mt:'java',rot:'📺 Adv SQL S2: IN/NOT IN, ANY/ALL, EXISTS, Recursive CTEs + exercises',rt:'sql',cRef:'sql-adv-s2'},
    {d:'2026-09-26',dsa:'GFG: Stack — Next Greater Element (monotonic stack)',main:'📺 L47-48 · Custom Event Handling + Internationalization-1',mt:'spring',rot:'Hands-on: Publish + listen to custom events in app',rt:'hands-on'},
    {d:'2026-09-27',aws:'☁️ S3 — KMS - Encrypting the battleplans with KMS (13m) · S3 Object Encryption CSE/SSE (24m)',awsRef:['aws-s3-09','aws-s3-10'],dsa:'GFG: Stack — Stock Span, Largest Rectangle in Histogram',main:'Java volatile, visibility vs atomicity, happens-before',mt:'java',rot:'📺 Adv SQL S3: Window Functions — OVER, PARTITION BY, ordering, frames (41min) + practice',rt:'sql',cRef:'sql-adv-s3'},
  ]},
  {wn:6,phase:'Phase 2: Core Backend',title:'Spring L49-57 SpEL + Bean Wrappers + Profiling + DAO intro',days:[
    {d:'2026-09-28',dsa:'GFG: Stack — getMin O(1), 2 stacks problem',main:'📺 L49-50 · Internationalization-2 + Bean Manipulations & Wrappers-1',mt:'spring',rot:'Hands-on: i18n message bundles for app',rt:'hands-on'},
    {d:'2026-09-29',aws:'☁️ S3 — Object Encryption and Role Separation (15m) · S3 Bucket Keys (6m) · S3 Object Storage Classes - PART1 (9m) · S3 Object Storage Classes - PART2 (12m)',awsRef:['aws-s3-11','aws-s3-12','aws-s3-13','aws-s3-14'],dsa:'GFG: Queue intro + implementations (array/LL)',main:'Java wait/notify/notifyAll, monitor, spurious wakeups',mt:'java',rot:'📺 LLD S7 · ISP + DIP + Singleton + Chain of Responsibility (39min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s7'},
    {d:'2026-09-30',dsa:'GFG: Queue using stacks + Sliding Window Max (Deque)',main:'📺 L51-52 · Bean Wrappers-2 + Property Editors',mt:'spring',rot:'Hands-on: Custom PropertyEditor for date formatting',rt:'hands-on'},
    {d:'2026-10-01',aws:'☁️ S3 — S3 Lifecycle Configuration (8m) · S3 Replication (14m) · Cross-Region Replication of an S3 Static Website (20m)',awsRef:['aws-s3-15','aws-s3-16','aws-s3-17'],dsa:'GFG: Deque + LRU Cache (HashMap + DLL)',main:'📺 L53-54 · Profiling + SpEL-1',mt:'spring',rot:'Full week rev + self-mock 30min Q&A + plan',rt:'revision'},
    {d:'2026-10-02',dsa:'GFG: Tree intro + traversals (preorder/inorder/postorder)',main:'📺 L55-56 · SpEL-2,3',mt:'spring',rot:'📺 Adv SQL S4: Self/Cross/Full/USING/Natural joins (35min) + S5: UNION, INTERSECT, EXCEPT (20min)',rt:'sql',cRef:['sql-adv-s4','sql-adv-s5']},
    {d:'2026-10-03',aws:'☁️ S3 — S3 PreSigned URLs (11m) · Creating and using PresignedURLs (18m) · S3 Select and Glacier Select (6m) · S3 Events (5m) · S3 Access Logs (3m)',awsRef:['aws-s3-18','aws-s3-19','aws-s3-20','aws-s3-21','aws-s3-22'],dsa:'GFG: Tree — Level order (BFS), zigzag',main:'Java ExecutorService, Executors factory (fixed/cached/single/scheduled)',mt:'java',rot:'Hands-on: Submit 10 tasks to fixed pool of 3, observe queueing',rt:'hands-on'},
    {d:'2026-10-04',dsa:'GFG: Tree — Height, Diameter, recursion pattern',main:'📺 L57 · DAO Introduction',mt:'spring',rot:'📺 Adv SQL S6: Grouping Sets, CUBE, ROLLUP, multi-dimensional aggregations (33min) + exercises',rt:'sql',cRef:'sql-adv-s6'},
  ]},
  {wn:7,phase:'Phase 2: Core Backend',title:'Spring L60-67 DAO + JdbcTemplate + Tree + CompletableFuture',days:[
    {d:'2026-10-05',aws:'☁️ S3 — S3 Object Lock (10m) · S3 Access Points (6m) · Multi-Region Access Points (MRAP) (20m)',awsRef:['aws-s3-23','aws-s3-24','aws-s3-25'],dsa:'GFG: Tree — LCA (classic recursion)',main:'📺 L60 · Spring DAO Exceptions + Spring JDBC Intro',mt:'spring',rot:'📺 Adv SQL S7: Info schema, Comments, Constraints, Foreign keys (53min) + exercises',rt:'sql',cRef:'sql-adv-s7'},
    {d:'2026-10-06',dsa:'GFG: Tree — Boundary, Top/Bottom/Left/Right view',main:'Java Callable vs Runnable, Future, get() blocks',mt:'java',rot:'Hands-on: Trace JDBC driver loading, connection setup',rt:'hands-on'},
    {d:'2026-10-07',aws:'☁️ VPC Basics — VPC Sizing and Structure - PART1 (12m) · VPC Sizing and Structure - PART2 (11m) · Custom VPCs - PART1 - THEORY (10m) · Custom VPCs - PART2 - DEMO (6m)',awsRef:['aws-vpc-01','aws-vpc-02','aws-vpc-03','aws-vpc-04'],dsa:'GFG: Tree — Path Sum problems, max path sum',main:'📺 L61-62 · JdbcTemplate-1,2 (basic queries)',mt:'spring',rot:'📺 LLD S8 · Memento + Proxy + Flyweight (25min) + S9 · TDD + State + Strategy + Factory (28min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s8','sd-lld-s9']},
    {d:'2026-10-08',dsa:'GFG: Tree — Symmetric, Same, Invert',main:'📺 L63-64 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper)',mt:'spring',rot:'Full week rev + self-mock 45min + plan',rt:'revision'},
    {d:'2026-10-09',aws:'☁️ VPC Basics — VPC Subnets (11m) · Implement multi-tier VPC subnets (15m) · VPC Routing, Internet Gateway & Bastion Hosts (18m)',awsRef:['aws-vpc-05','aws-vpc-06','aws-vpc-07'],dsa:'GFG: BST — Insert, Search, Delete',main:'📺 L65 · Positional + Named Parameters',mt:'spring',rot:'📺 Adv SQL S8: Transactions — BEGIN/COMMIT/ROLLBACK, SAVEPOINT, DB locks (47min) + practice',rt:'sql',cRef:'sql-adv-s8'},
    {d:'2026-10-10',dsa:'GFG: BST — Validate BST (inorder + range)',main:'📺 L66-67 · NamedParameterJdbcTemplate-1,2',mt:'spring',rot:'Hands-on: Convert SQL repository to NamedParameterJdbcTemplate',rt:'hands-on'},
    {d:'2026-10-11',aws:'☁️ VPC Basics — Configuring A4L public subnets and Jumpbox - PART1 (14m) · Configuring A4L public subnets and Jumpbox - PART2 (12m) · Stateful vs Stateless Firewalls (14m)',awsRef:['aws-vpc-08','aws-vpc-09','aws-vpc-10'],dsa:'GFG: BST — Kth smallest, LCA in BST',main:'Java CompletableFuture deep: thenApply, thenCompose, thenCombine',mt:'java',rot:'📺 Adv SQL S9: Range + List partitioning + Table inheritance (start, ~45min)',rt:'sql'},
  ]},
  {wn:8,phase:'Phase 2: Core Backend',title:'Spring L73-81 Batch + StoredProc + BLOB + Heap',days:[
    {d:'2026-10-12',dsa:'GFG: Heap intro + PriorityQueue API + Build heap O(n)',main:'📺 L73-74 · Batch Updates-1,2',mt:'spring',rot:'📺 LLD S10 · Strategy Pattern — deep dive (42min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s10'},
    {d:'2026-10-13',aws:'☁️ VPC Basics — Network Access Control Lists (NACLs) (13m) · Security Groups (SG) (12m)',awsRef:['aws-vpc-11','aws-vpc-12'],dsa:'GFG: Heap — Kth Largest, Top K Frequent',main:'📺 L75-76 · Stored Procedures and Functions-1,2',mt:'spring',rot:'Hands-on: Batch insert 10k rows with batchUpdate',rt:'hands-on'},
    {d:'2026-10-14',dsa:'GFG: Heap — Median Data Stream (two heaps), Merge K sorted lists',main:'📺 L77-78 · Stored Procedures and Functions-3,4',mt:'spring',rot:'📺 LLD S11 · Command Pattern + PubSub (34min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s11'},
    {d:'2026-10-15',aws:'☁️ VPC Basics — NAT & NAT Gateway - PART1 (14m) · NAT & NAT Gateway - PART2 (11m) · Implementing private internet access using NAT Gateways (19m)',awsRef:['aws-vpc-13','aws-vpc-14','aws-vpc-15'],dsa:'GFG: Heap — Task Scheduler, Sliding Window Median',main:'📺 L79 · BLOB and CLOB-1',mt:'spring',rot:'Full week rev + self-mock (URL Shortener whiteboard)',rt:'revision'},
    {d:'2026-10-16',dsa:'GFG: DSA Basics DONE! Start Libraries — Collection Overview',main:'📺 L80-81 · BLOB and CLOB-2,3',mt:'spring',rot:'📺 Adv SQL S9: Hash partitioning + partitioning exercises (finish S9)',rt:'sql',cRef:'sql-adv-s9'},
    {d:'2026-10-17',aws:'☁️ EC2 Basics — Virtualization 101 (12m) · EC2 Architecture and Resilience (13m) · EC2 Instance Types - PART1 (12m) · EC2 Instance Types - PART2 (8m)',awsRef:['aws-ec2-01','aws-ec2-02','aws-ec2-03','aws-ec2-04'],dsa:'GFG Libraries — Lambda Expressions deep',main:'Java Atomic classes (AtomicInteger, AtomicLong), CAS basics',mt:'java',rot:'Hands-on: Upload/download PDFs with BLOB',rt:'hands-on'},
    {d:'2026-10-18',dsa:'GFG Libraries — Streams intro (map, filter, forEach, reduce)',main:'Java BlockingQueue (ArrayBlocking, LinkedBlocking, etc.)',mt:'java',rot:'Hands-on: Producer-Consumer with BlockingQueue properly',rt:'hands-on'},
  ]},
  {wn:9,phase:'Phase 2: Core Backend',title:'Spring L82-85 Connection Pooling + JPA start + First apply!',days:[
    {d:'2026-10-19',aws:'☁️ EC2 Basics — EC2 SSH vs EC2 Instance Connect (17m) · Storage Refresher (14m) · Elastic Block Store (EBS) Service Architecture (9m)',awsRef:['aws-ec2-05','aws-ec2-06','aws-ec2-07'],dsa:'GFG Libraries — Streams Collectors deep (groupingBy, partitioningBy)',main:'📺 L82-83 · Connection Pooling-1,2 + 🆕 HikariCP modern config (Daily Code Buffer)',mt:'spring',rot:'⌨️ MC-S1 · Splitwise — machine coding walkthrough (53min) [InterviewReady]',rt:'sd',cRef:'sd-mc-s1'},
    {d:'2026-10-20',dsa:'GFG Libraries — ArrayList + LinkedList',main:'📺 L84-85 · Connection Pooling-3,4',mt:'spring',rot:'Hands-on: HikariCP tuning for Spring Boot app',rt:'hands-on'},
    {d:'2026-10-21',aws:'☁️ EC2 Basics — EBS Volume Types - General Purpose (9m) · EBS Volume Types - Provisioned IOPS (6m) · EBS Volume Types - HDD-Based (5m) · Instance Store Volumes - Architecture (9m) · Choosing between the EC2 Instance Store and EBS (9m)',awsRef:['aws-ec2-08','aws-ec2-09','aws-ec2-10','aws-ec2-11','aws-ec2-12'],dsa:'GFG Libraries — Stack + Queue (Java specific)',main:'🆕 Spring Data JPA intro (Telusko) — CrudRepository, JpaRepository',mt:'spring',rot:'📺 Adv SQL S10: Views — Creating, Updating, Materialized, Recursive views (1h 10min)',rt:'sql',cRef:'sql-adv-s10'},
    {d:'2026-10-22',dsa:'GFG Libraries — Deque + PriorityQueue deep',main:'🆕 Spring Data JPA: derived queries, @Query custom',mt:'spring',rot:'Full week rev + self-mock + APPLY TO FIRST 3 EASY COMPANIES',rt:'revision'},
    {d:'2026-10-23',aws:'☁️ EC2 Basics — Snapshots, Restore & Fast Snapshot Restore (FSR) (11m)',awsRef:['aws-ec2-13'],dsa:'GFG Libraries — HashSet + LinkedHashSet',main:'🆕 Spring Data JPA: Projections + Specifications',mt:'spring',rot:'📺 Adv SQL S11: PL/pgSQL functions (36min) + S12: Stored Procedures (31min)',rt:'sql',cRef:['sql-adv-s11','sql-adv-s12']},
    {d:'2026-10-24',dsa:'GFG Libraries — TreeSet, NavigableSet methods',main:'🆕 N+1 problem deep (Vlad Mihalcea) + JOIN FETCH',mt:'spring',rot:'Hands-on: Reproduce N+1, fix with JOIN FETCH, verify SQL count',rt:'hands-on'},
    {d:'2026-10-25',aws:'☁️ EC2 Basics — EBS Volumes - PART1 (15m) · EBS Volumes - PART2 (14m) · EBS Volumes - PART3 (14m)',awsRef:['aws-ec2-14','aws-ec2-15','aws-ec2-16'],dsa:'GFG Libraries — HashMap + LinkedHashMap deep',main:'🆕 @EntityGraph + Fetch types (LAZY/EAGER) deep',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt1 — LRU design + start [InterviewReady]',rt:'sd'},
  ]},
  {wn:10,phase:'Phase 2: Core Backend',title:'Spring L91-99 AOP + JPA Cascading + Microservices intro',days:[
    {d:'2026-10-26',dsa:'GFG Libraries — TreeMap, NavigableMap',main:'📺 L91-92 · AOP Introduction + Terminology',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s2'},
    {d:'2026-10-27',aws:'☁️ EC2 Basics — EBS Encryption (8m) · Network Interfaces, Instance IPs and DNS (16m)',awsRef:['aws-ec2-17','aws-ec2-18'],dsa:'GFG Libraries — String class (Java methods deep)',main:'📺 L93 · Advices + 🆕 Cascading + dirty checking (Thorben Janssen)',mt:'spring',rot:'Hands-on: Cascading test — orphan removal scenarios',rt:'hands-on'},
    {d:'2026-10-28',dsa:'GFG Libraries — Comparator & Comparable',main:'📺 L94-95 · Pointcuts + MethodBeforeAdvice-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt1 — design + start [InterviewReady]',rt:'sd'},
    {d:'2026-10-29',aws:'☁️ EC2 Basics — Manual Install of Wordpress on EC2 - PART1 (12m) · Manual Install of Wordpress on EC2 - PART2 (13m) · Amazon Machine Images (AMI) (14m)',awsRef:['aws-ec2-19','aws-ec2-20','aws-ec2-21'],dsa:'GFG Libraries — Arrays Class + Collections class',main:'📺 L96-97 · MethodBeforeAdvice-2 + AfterAdvice',mt:'spring',rot:'Full week rev + self-mock (E-commerce design) + @Aspect logging interceptor',rt:'revision'},
    {d:'2026-10-30',dsa:'GFG Libraries — Sorting (Java, custom comparators)',main:'📺 L98-99 · ThrowsAdvice + AroundAdvice',mt:'spring',rot:'📺 Adv SQL S13: Triggers — create, trigger functions, before/after, enable/disable (39min)',rt:'sql',cRef:'sql-adv-s13'},
    {d:'2026-10-31',aws:'☁️ EC2 Basics — Creating an Animals4life AMI - PART1 (10m) · Creating an Animals4life AMI - PART2 (11m) · Copying & Sharing an AMI (9m)',awsRef:['aws-ec2-22','aws-ec2-23','aws-ec2-24'],dsa:'GFG: Libraries DONE! Start DSA Advanced — Mathematics intro',main:'Java Generics deep: type erasure, why new T[] fails, PECS examples',mt:'java',rot:'Hands-on: Build @Around aspect for method timing',rt:'hands-on'},
    {d:'2026-11-01',dsa:'GFG Advanced — Bit Magic essentials (XOR tricks, single number)',main:'🆕 Optimistic vs Pessimistic locking (@Version, @Lock)',mt:'spring',rot:'📺 Adv SQL S14: EXPLAIN, EXPLAIN ANALYZE, TRUNCATE, COPY (start, ~40min)',rt:'sql'},
  ]},
  {wn:11,phase:'Phase 2: Core Backend',title:'Spring L100-107 AspectJ + Transactions + Microservices basics',days:[
    {d:'2026-11-02',aws:'☁️ EC2 Basics — EC2 Purchase Options - PART1 (9m) · EC2 Purchase Options - PART2 (12m) · Reserved Instances - the rest (12m) · Instance Status Checks & Auto Recovery (8m) · Shutdown, Terminate & Termination Protection (6m)',awsRef:['aws-ec2-25','aws-ec2-26','aws-ec2-27','aws-ec2-28','aws-ec2-29'],dsa:'GFG Adv: Arrays — sliding window patterns',main:'📺 L100-101 · AspectJ Style AOP + Declarative-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s3'},
    {d:'2026-11-03',dsa:'GFG Adv: Arrays — prefix sum advanced + difference arrays',main:'📺 L102-103 · Declarative-2 + AspectJ Annotation Style-1',mt:'spring',rot:'Hands-on: @Aspect + @Pointcut expressions practice',rt:'hands-on'},
    {d:'2026-11-04',aws:'☁️ EC2 Basics + Containers & ECS — Horizontal & Vertical Scaling (11m) · Instance Metadata (16m) · Introduction to Containers (17m)',awsRef:['aws-ec2-30','aws-ec2-31','aws-ecs-01'],dsa:'GFG Adv: Searching — binary search on answer (deep)',main:'📺 L104-105 · AspectJ Annotation-2 + Transactions Intro',mt:'spring',rot:'Hands-on: @Transactional on service layer, observe rollback',rt:'hands-on'},
    {d:'2026-11-05',dsa:'GFG Adv: Sorting — count inversions, merge sort variations',main:'📺 L106-107 · ACID + Isolation + Transaction Support in Spring',mt:'spring',rot:'Full week rev + self-mock (Payment Service design)',rt:'revision'},
    {d:'2026-11-06',aws:'☁️ Containers & ECS — Creating container of cats Docker Image (18m) · ECS - Concepts (10m) · ECS - Cluster Mode (13m)',awsRef:['aws-ecs-02','aws-ecs-03','aws-ecs-04'],dsa:'GFG Adv: Strings — KMP intro, pattern matching',main:'🆕 Microservices vs Monolith intro (in28minutes)',mt:'spring',rot:'📺 Adv SQL S14: Arrays, JSON/JSONB, Extensions + exercises (finish S14)',rt:'sql',cRef:'sql-adv-s14'},
    {d:'2026-11-07',dsa:'GFG Adv: Strings — anagram patterns, palindromes',main:'Java Part C start: JVM architecture: classloaders, runtime data areas',mt:'java',rot:'Hands-on: Split monolith into User + Order Service',rt:'hands-on'},
    {d:'2026-11-08',aws:'☁️ Containers & ECS + Advanced EC2 — Deploying container of cats using Fargate (13m) · Elastic Container Registry (ECR) (4m) · Kubernetes 101 (11m) · Elastic Kubernetes Service (EKS) 101 (6m) · Bootstrapping EC2 using User Data (10m)',awsRef:['aws-ecs-05','aws-ecs-06','aws-ecs-07','aws-ecs-08','aws-ec2adv-01'],dsa:'GFG Adv: Strings — Longest Palindromic Substring',main:'🆕 Service Discovery (Eureka concept)',mt:'spring',rot:'SQL interview prep: CTEs + Window Functions mock questions (practice-only)',rt:'sql',cRef:'sql-prep-1'},
  ]},
  {wn:12,phase:'Phase 2: Core Backend',title:'Spring L108-119 Tx mgmt + Hibernate/JPA + Phase 2 wrap',days:[
    {d:'2026-11-09',dsa:'GFG Adv: LL — Reverse in K groups, flatten LL',main:'📺 L108-109 · Programmatic Transaction Management-1,2',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt1 — token bucket + sliding window design [InterviewReady]',rt:'sd'},
    {d:'2026-11-10',aws:'☁️ Advanced EC2 — Bootstrapping Wordpress Installation - PART1 (15m) · Bootstrapping Wordpress Installation - PART2 (7m) · Enhanced Bootstrapping with CFN-INIT (12m) · CFN-INIT and CFN Creation Policies (12m)',awsRef:['aws-ec2adv-02','aws-ec2adv-03','aws-ec2adv-04','aws-ec2adv-05'],dsa:'GFG Adv: LL — clone with random pointer, LRU deep',main:'📺 L110-111 · Declarative Tx with XML + Annotations',mt:'spring',rot:'Hands-on: @Transactional on multiple service methods',rt:'hands-on'},
    {d:'2026-11-11',dsa:'GFG Adv: Stack — monotonic stack patterns deep',main:'🆕 @Transactional propagation deep (REQUIRES_NEW, NESTED, MANDATORY)',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s4'},
    {d:'2026-11-12',aws:'☁️ Advanced EC2 — EC2 Instance Roles & Profile (4m) · Using EC2 Instance Roles (14m) · SSM Parameter Store (6m) · Parameter Store (16m) · System and Application Logging on EC2 (6m)',awsRef:['aws-ec2adv-06','aws-ec2adv-07','aws-ec2adv-08','aws-ec2adv-09','aws-ec2adv-10'],dsa:'GFG Adv: Stack — expression evaluation, infix-postfix',main:'📺 L112-113 · Hibernate Intro + Application',mt:'spring',rot:'Full week rev + self-mock (Food Delivery design)',rt:'revision'},
    {d:'2026-11-13',dsa:'GFG Adv: Queue & Deque — sliding window deep',main:'📺 L114-115 · Spring-Hibernate Integration-1,2',mt:'spring',rot:'SQL interview prep: EXPLAIN ANALYZE + query optimization + index problems',rt:'sql',cRef:'sql-prep-2'},
    {d:'2026-11-14',aws:'☁️ Advanced EC2 — Logging and Metrics with CloudWatch Agent-PART1 (12m) · Logging and Metrics with CloudWatch Agent-PART2 (8m) · EC2 Placement Groups (14m) · Dedicated Hosts (9m)',awsRef:['aws-ec2adv-11','aws-ec2adv-12','aws-ec2adv-13','aws-ec2adv-14'],dsa:'GFG Adv: Queue — implement using arrays, design problems',main:'📺 L116-117 · Spring-Hibernate Integration-3 + JPA Intro',mt:'spring',rot:'Hands-on: Migrate Hibernate config to Spring Data JPA',rt:'hands-on'},
    {d:'2026-11-15',dsa:'GFG Adv: Tree advanced — Construct from preorder/inorder',main:'📺 L118-119 · JPA Application + Spring-JPA Integration',mt:'spring',rot:'SQL interview prep: Transactions + ACID isolation levels + partitioning problems',rt:'sql',cRef:'sql-prep-3'},
  ]},
  {wn:13,phase:'Phase 3: Distributed',title:'Spring L120-130 MVC + Docker + JVM Diagnostics',days:[
    {d:'2026-11-16',aws:'☁️ Advanced EC2 + Route 53 — Enhanced Networking & EBS Optimized (7m) · R53 Public Hosted Zones (6m) · R53 Private Hosted Zones (5m) · CNAME vs R53 Alias (5m) · Simple Routing (2m) · R53 Health Checks (13m) · Failover Routing (2m)',awsRef:['aws-ec2adv-15','aws-r53-01','aws-r53-02','aws-r53-03','aws-r53-04','aws-r53-05','aws-r53-06'],dsa:'GFG Adv: Tree — Construct from inorder+postorder, serialize/deserialize',main:'📺 L120-121 · Spring Web MVC Introduction-1,2',mt:'spring',rot:'Cloud start: Docker basics: container vs VM, Dockerfile',rt:'cloud'},
    {d:'2026-11-17',dsa:'GFG Adv: Tree — Vertical order, all paths',main:'📺 L122-123 · MVC Elements + Flow + DispatcherServlet',mt:'spring',rot:'Hands-on: Dockerfile for Spring Boot, multi-stage build',rt:'hands-on'},
    {d:'2026-11-18',aws:'☁️ Route 53 — Using R53 and Failover Routing-PART1 (17m) · Using R53 and Failover Routing-PART2 (6m) · Multi Value Routing (3m) · Weighted Routing (3m) · Latency Routing (3m) · Geolocation Routing (5m) · Geoproximity (5m)',awsRef:['aws-r53-07','aws-r53-08','aws-r53-09','aws-r53-10','aws-r53-11','aws-r53-12','aws-r53-13'],dsa:'GFG Adv: Tree — Burning tree, time to burn from target',main:'📺 L124-125 · HandlerMapping + Controller + ViewResolver basics',mt:'spring',rot:'Cloud Docker Compose: services, volumes, networks',rt:'cloud'},
    {d:'2026-11-19',dsa:'GFG Adv: BST — Inorder successor/predecessor, fix swapped',main:'📺 L126-127 · Spring MVC Application + Internal Flow-1',mt:'spring',rot:'Full week rev + self-mock + JVM diagnostics: thread dump (jstack)',rt:'revision'},
    {d:'2026-11-20',aws:'☁️ Route 53 — R53 Interoperability (12m) · Implementing DNSSEC using Route53 (18m)',awsRef:['aws-r53-14','aws-r53-15'],dsa:'GFG Adv: BST — Convert sorted array to BST, merge 2 BSTs',main:'Java Heap dump analysis (jmap, MAT), memory leaks',mt:'java',rot:'Hands-on: Compose for app + Postgres + Redis + Kafka',rt:'hands-on'},
    {d:'2026-11-21',dsa:'GFG Adv: Heap advanced — design problems with heap',main:'📺 L128-129 · MVC Application-2,3 + Login Application (annotations focus)',mt:'spring',rot:'Cloud K8s intro: Pods, ReplicaSets, Deployments, Services',rt:'cloud'},
    {d:'2026-11-22',aws:'☁️ RDS & Aurora — Database Refresher & MODELS - PART1 (9m) · Database Refresher & MODELS - PART2 (15m) · ACID vs BASE (11m)',awsRef:['aws-rds-01','aws-rds-02','aws-rds-03'],dsa:'GFG Adv: Heap — Sliding window median (deep), median stream',main:'📺 L130 · @SessionAttribute + @RequestParam + 🆕 REST intro (Daily Code Buffer)',mt:'spring',rot:'SQL final mock: end-to-end challenge (JOIN + CTE + Window Function + EXPLAIN)',rt:'sql',cRef:'sql-prep-4'},
  ]},
  {wn:14,phase:'Phase 3: Distributed',title:'Spring L147-155 Handler Mapping + ViewResolver + LLD + Modern Java',days:[
    {d:'2026-11-23',dsa:'GFG Adv: Graph intro + representations + BFS',main:'📺 L147-148 · BeanNameUrlHandlerMapping + SimpleUrlHandlerMapping',mt:'spring',rot:'⌨️ InterviewReady LLD Test + Full Review Session',rt:'sd',cRef:'sd-mc-test'},
    {d:'2026-11-24',aws:'☁️ RDS & Aurora — Databases on EC2 (13m) · Splitting Wordpress Monolith => APP & DB (18m) · Relational Database Service (RDS) Architecture (12m)',awsRef:['aws-rds-04','aws-rds-05','aws-rds-06'],dsa:'GFG Adv: Graph — DFS (recursive + iterative)',main:'📺 L149-150 · DefaultAnnotationHandlerMapping + HandlerInterceptor-1',mt:'spring',rot:'Cloud K8s: ConfigMaps, Secrets, namespaces, RBAC',rt:'cloud'},
    {d:'2026-11-25',dsa:'GFG Adv: Graph — Connected components (islands variants)',main:'📺 L151-152 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource)',mt:'spring',rot:'Hands-on: Deploy Spring Boot to Minikube/Kind, kubectl basics',rt:'hands-on'},
    {d:'2026-11-26',aws:'☁️ RDS & Aurora — Migrating EC2 DB into RDS - PART1 (18m) · Migrating EC2 DB into RDS - PART2 (13m) · RDS MultiAZ - Instance and Cluster (12m)',awsRef:['aws-rds-07','aws-rds-08','aws-rds-09'],dsa:'GFG Adv: Graph — Cycle detection',main:'📺 L153-154 · XMLViewResolver + Exception Handling (@ControllerAdvice)',mt:'spring',rot:'Full week rev + first external mock (Pramp/friend, 1hr Java)',rt:'mock'},
    {d:'2026-11-27',dsa:'GFG Adv: Graph — Bipartite check',main:'📺 L155 + 🆕 RFC 7807 + Global error handling supplement',mt:'spring',rot:'SD: News Feed / Timeline — fanout strategies',rt:'sd',cRef:'sd-hld-news-feed'},
    {d:'2026-11-28',aws:'☁️ RDS & Aurora — RDS Automatic Backup, RDS Snapshots and Restore (9m) · RDS Read-Replicas (7m) · MultiAZ & Snapshot Restore with RDS - PART1 (14m) · MultiAZ & Snapshot Restore with RDS - PART2 (12m)',awsRef:['aws-rds-10','aws-rds-11','aws-rds-12','aws-rds-13'],dsa:'GFG Adv: Graph — Topological Sort (Kahn\'s + DFS)',main:'Java Java 14-17: switch expressions, text blocks, records',mt:'java',rot:'Hands-on: Liveness/Readiness probes in K8s deployment',rt:'hands-on'},
    {d:'2026-11-29',dsa:'GFG Adv: Graph — Course Schedule (topo sort applied)',main:'🆕 DTOs vs Entities + MapStruct (Amigoscode)',mt:'spring',rot:'Cloud K8s: Service types + HPA',rt:'cloud'},
  ]},
  {wn:15,phase:'Phase 3: Distributed',title:'Spring L156-175 File handling + Security + Virtual Threads ⭐',days:[
    {d:'2026-11-30',aws:'☁️ RDS & Aurora — RDS Data Security (7m) · RDS Custom (5m) · Aurora Architecture (14m) · Aurora Serverless (10m) · Aurora Global Database (5m)',awsRef:['aws-rds-14','aws-rds-15','aws-rds-16','aws-rds-17','aws-rds-18'],dsa:'GFG Adv: Graph — Dijkstra (PQ-based shortest path)',main:'📺 L156-157 · File Uploading + File Downloading',mt:'spring',rot:'SD: Distributed Cache / Key-Value Store — consistent hashing',rt:'sd'},
    {d:'2026-12-01',dsa:'GFG Adv: Graph — Bellman-Ford',main:'📺 L158 · Internationalization-1 + 🆕 CORS configuration',mt:'spring',rot:'Cloud AWS: EC2, S3, RDS, ELB, CloudWatch, IAM',rt:'cloud'},
    {d:'2026-12-02',aws:'☁️ RDS & Aurora + EFS & Backup — Multi-master writes (8m) · RDS Proxy (10m) · Database Migration Service (DMS) (11m) · EFS Architecture (9m)',awsRef:['aws-rds-19','aws-rds-20','aws-rds-21','aws-efs-01'],dsa:'GFG Adv: Graph — Floyd-Warshall (all-pairs)',main:'📺 L171-172 · Web Security Introduction + Authentication Mechanisms-1',mt:'spring',rot:'Hands-on: Enable virtual threads (🌟 supplement Dan Vega), benchmark',rt:'hands-on'},
    {d:'2026-12-03',dsa:'GFG Adv: Graph — Word Ladder, Islands variations',main:'📺 L173-174 · Authentication Mechanisms-2,3',mt:'spring',rot:'Full week rev + 2nd external mock (Spring focus, 1hr)',rt:'mock'},
    {d:'2026-12-05',dsa:'GFG Adv: Graph — Course Schedule II, Alien Dictionary',main:'📺 L175 · Spring Security Models + 🆕 Spring Security 6 architecture (Daily Code Buffer)',mt:'spring',rot:'SD HLD: URL Shortener full walkthrough — hashing, DB, cache, scale',rt:'sd',cRef:'sd-hld-url-shortener'},
    {d:'2026-12-06',aws:'☁️ EFS & Backup — Implementing EFS - PART1 (9m) · Implementing EFS - PART2 (12m) · Using EFS with Wordpress (16m) · AWS Backup (7m)',awsRef:['aws-efs-02','aws-efs-03','aws-efs-04','aws-efs-05'],dsa:'GFG Adv: Graph — Clone Graph (DFS/BFS with HashMap)',main:'🆕 JWT auth filter implementation (Bouali Ali)',mt:'spring',rot:'Cloud AWS: SQS, ECS, EKS, Fargate, ECR + CI/CD',rt:'cloud'},
    {d:'2026-12-07',dsa:'GFG Adv: Graph — Network Delay Time, Min cost path',main:'🆕 JWT continued — OncePerRequestFilter, token extraction',mt:'spring',rot:'SD HLD: Rate Limiter full walkthrough — token bucket, sliding window',rt:'sd',cRef:'sd-hld-rate-limiter'},
  ]},
  {wn:16,phase:'Phase 3: Distributed',title:'Spring L176-180 Maven + Security finish + DP + Virtual Threads',days:[
    {d:'2026-12-08',aws:'☁️ HA & Scaling — Regional and Global AWS Architecture (11m) · Evolution of the Elastic Load Balancer (4m) · Elastic Load Balancer Architecture - PART1 (10m) · Elastic Load Balancer Architecture - PART2 (13m)',awsRef:['aws-ha-01','aws-ha-02','aws-ha-03','aws-ha-04'],dsa:'GFG Adv: DP intro — Fibonacci memoization, climbing stairs',main:'🆕 Method-level security (@PreAuthorize, @PostAuthorize, SpEL)',mt:'spring',rot:'SD HLD: Notification Service (queue-based, retry, DLQ)',rt:'sd',cRef:'sd-hld-notification'},
    {d:'2026-12-09',dsa:'GFG Adv: DP — House Robber I & II (linear DP)',main:'📺 L176-177 · Maven Introduction + POM-1',mt:'spring',rot:'Cloud GitHub Actions / Jenkins CI/CD pipeline',rt:'cloud'},
    {d:'2026-12-10',aws:'☁️ HA & Scaling — ALB vs NLB (16m) · Launch Configuration and Templates (4m) · Auto-Scaling Groups (16m)',awsRef:['aws-ha-05','aws-ha-06','aws-ha-07'],dsa:'GFG Adv: DP — Coin Change',main:'📺 L178-179 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance)',mt:'spring',rot:'Hands-on: CI/CD pipeline draft (build → test → docker push)',rt:'hands-on'},
    {d:'2026-12-11',dsa:'GFG Adv: DP — LIS (O(n²) + O(n log n))',main:'📺 L180 · POM-4 (Build Configurations + Profiles)',mt:'spring',rot:'Full week rev + 3rd external mock (SD + LLD, 90min)',rt:'mock'},
    {d:'2026-12-12',aws:'☁️ HA & Scaling — ASG Scaling Policies (10m) · ASG Lifecycle Hooks (5m) · ASG HealthCheck Comparison - EC2 vs ELB (4m) · SSL Offload & Session Stickiness (12m) · Seeing Session Stickiness in Action (13m)',awsRef:['aws-ha-08','aws-ha-09','aws-ha-10','aws-ha-11','aws-ha-12'],dsa:'GFG Adv: DP — LCS (2D DP), edit distance',main:'🆕 OAuth2 awareness (Daily Code Buffer)',mt:'spring',rot:'SD: Distributed locks (Redis/ZooKeeper)',rt:'sd',cRef:'sd-hld-distributed-locks'},
    {d:'2026-12-13',dsa:'GFG Adv: DP — 0/1 Knapsack + space optimization',main:'🌟 Virtual Threads (Java 21 / Project Loom) intro',mt:'java',rot:'Hands-on: Distributed tracing in microservices (Sleuth/OpenTelemetry)',rt:'hands-on'},
    {d:'2026-12-14',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE1 - PART1 (14m) · Architecture Evolution - STAGE1 - PART2 (11m) · Architecture Evolution - STAGE2 (13m)',awsRef:['aws-ha-13','aws-ha-14','aws-ha-15'],dsa:'GFG Adv: DP — Subset Sum, Partition Equal Subset',main:'🌟 Spring Boot 3.2 virtual threads integration (spring.threads.virtual.enabled)',mt:'spring',rot:'Behavioral start: Draft first 4 STAR stories',rt:'behavioral'},
  ]},
  {wn:17,phase:'Phase 3: Distributed',title:'Spring L187-193 Boot + Full-loop sims',days:[
    {d:'2026-12-15',dsa:'GFG Adv: DP — Unique Paths I/II, Min Path Sum',main:'📺 L187-188 · Spring Boot Introduction + Features',mt:'spring',rot:'STAR story #5-6 (production incident, leadership)',rt:'behavioral'},
    {d:'2026-12-16',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE3 (20m) · Architecture Evolution - STAGE4 (18m)',awsRef:['aws-ha-16','aws-ha-17'],dsa:'GFG Adv: DP — Max Product Subarray, Buy/Sell cooldown',main:'📺 L189 + L191 · Boot with Eclipse + Initializr (skip L190 STS)',mt:'spring',rot:'Hands-on: CRaC awareness reading',rt:'hands-on'},
    {d:'2026-12-17',dsa:'GFG Adv: DP — Longest Palindromic Subseq',main:'📺 L192-193 · Postman + User Forms Application',mt:'spring',rot:'Full-loop simulation #1 (3hr) — Java + Spring + 1 SD + 5 DSA',rt:'mock'},
    {d:'2026-12-18',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE 5 - PART1 (12m) · Architecture Evolution - STAGE 5 - PART2 (15m) · Architecture Evolution - STAGE6 (6m) · Gateway Load Balancer (14m)',awsRef:['aws-ha-18','aws-ha-19','aws-ha-20','aws-ha-21'],dsa:'GFG Adv: DP final — Word Break, mixed DP problems',main:'🆕 @SpringBootApplication deep + Auto-config flow (in28minutes)',mt:'spring',rot:'Full week rev + STAR story #7-8 + plan',rt:'revision'},
    {d:'2026-12-19',dsa:'GFG Adv: Greedy intro — Activity Selection, fractional knapsack',main:'🆕 Custom Auto-Configuration + @ConditionalOnXxx (Baeldung)',mt:'spring',rot:'Full week revision + weak-area list + plan next week',rt:'revision'},
    {d:'2026-12-20',aws:'☁️ Serverless & App — Architecture Deep Dive - PART1 (9m) · Architecture Deep Dive - PART2 (13m)',awsRef:['aws-srvls-01','aws-srvls-02'],dsa:'GFG Adv: Greedy — Job Sequencing, N meetings',main:'🆕 application.properties vs yml + Profiles + @ConfigurationProperties deep',mt:'spring',rot:'Hands-on: Final mocks scheduling, weak areas list',rt:'hands-on'},
    {d:'2026-12-21',dsa:'GFG Adv: Greedy — Huffman intro, minimum platforms',main:'🆕 Custom Spring Boot Starter (Daily Code Buffer)',mt:'spring',rot:'STAR story #9-10 + per-company prep doc (Walmart, PayPal)',rt:'behavioral'},
  ]},
  {wn:18,phase:'Phase 3: Distributed',title:'Spring L194-200 Boot+JDBC + Backtracking + Mocks',days:[
    {d:'2026-12-22',aws:'☁️ Serverless & App — AWS Lambda - PART1 (11m) · AWS Lambda - PART2 (14m) · AWS Lambda - PART3 (17m)',awsRef:['aws-srvls-03','aws-srvls-04','aws-srvls-05'],dsa:'GFG Adv: Greedy — Min coins, Gas Station, Jump Game',main:'📺 L194-195 · Spring Boot with Spring JDBC-1,2',mt:'spring',rot:'Mock 4 (External, 90min, Java + Spring deep)',rt:'mock'},
    {d:'2026-12-23',dsa:'GFG Adv: Backtracking — N-Queens (revisit), Sudoku Solver',main:'📺 L196-197 · Spring Boot with Spring JDBC-3,4',mt:'spring',rot:'SD: Distributed messaging system (Kafka deep design)',rt:'sd',cRef:'sd-hld-messaging'},
    {d:'2026-12-24',aws:'☁️ Serverless & App — CloudWatchEvents and EventBridge (7m) · Automated EC2 Control using Lambda and Events - PART1 (14m) · Automated EC2 Control using Lambda and Events - PART2 (19m)',awsRef:['aws-srvls-06','aws-srvls-07','aws-srvls-08'],dsa:'GFG Adv: Backtracking — Combination Sum, Permutations',main:'📺 L198-199 · Spring Data JDBC-1,2',mt:'spring',rot:'Hands-on: 20 unit tests for service layer with Mockito',rt:'hands-on'},
    {d:'2026-12-25',dsa:'GFG Adv: Backtracking — Word Search, Palindrome Partitioning',main:'📺 L200 + 🆕 Spring Boot Actuator deep (Daily Code Buffer)',mt:'spring',rot:'Full week rev + Mock 5 (Behavioral, 60min)',rt:'mock'},
    {d:'2026-12-26',aws:'☁️ Serverless & App — Serverless Architecture (13m) · Simple Notification Service (8m) · Step Functions (16m)',awsRef:['aws-srvls-09','aws-srvls-10','aws-srvls-11'],dsa:'GFG Adv: Mathematics — GCD, sieve of Eratosthenes',main:'🆕 Micrometer + Prometheus + Grafana setup (Tanzu)',mt:'spring',rot:'SD: Real-time chat app (presence + history + WebSocket)',rt:'sd',cRef:'sd-hld-chat'},
    {d:'2026-12-27',dsa:'GFG Adv: Bit Magic — count set bits, single number variants',main:'🆕 @Async + @Scheduled (TaskExecutor config)',mt:'spring',rot:'Hands-on: Build basic WebSocket chat endpoint',rt:'hands-on'},
    {d:'2026-12-28',aws:'☁️ Serverless & App — API Gateway 101 (16m) · Pet-Cuddle-o-Tron - PART1 (5m) · Pet-Cuddle-o-Tron - PART2 (8m) · Pet-Cuddle-o-Tron - PART3 (12m)',awsRef:['aws-srvls-12','aws-srvls-13','aws-srvls-14','aws-srvls-15'],dsa:'GFG Adv: Trie intro — insert, search, prefix match',main:'🆕 Microservices: API Gateway (Spring Cloud Gateway)',mt:'spring',rot:'Mock 6 (Tech + LLD, 90min)',rt:'mock'},
  ]},
  {wn:19,phase:'Phase 3: Distributed',title:'Spring Microservices deep + Trie + Disjoint Set + Interviews',days:[
    {d:'2026-12-29',dsa:'GFG Adv: Trie — autocomplete system, search suggestions',main:'🆕 Inter-service communication: RestTemplate vs WebClient vs OpenFeign',mt:'spring',rot:'Real interview (per opportunity schedule)',rt:'mock'},
    {d:'2026-12-30',aws:'☁️ Serverless & App — Pet-Cuddle-o-Tron - PART4 (13m) · Pet-Cuddle-o-Tron - PART5 (14m) · Pet-Cuddle-o-Tron - PART6 (3m) · Simple Queue Service (16m)',awsRef:['aws-srvls-16','aws-srvls-17','aws-srvls-18','aws-srvls-19'],dsa:'GFG Adv: Trie — Word Search II, longest word',main:'🆕 OpenFeign declarative clients (Daily Code Buffer)',mt:'spring',rot:'SD: Search autocomplete (Trie + caching)',rt:'sd',cRef:'sd-hld-autocomplete'},
    {d:'2026-12-31',dsa:'GFG Adv: Disjoint Set — Union-Find, path compression',main:'🆕 Resilience4j: Circuit Breaker + Retry + Bulkhead + Timeout',mt:'spring',rot:'Hands-on: Saga for Order → Payment → Inventory',rt:'hands-on'},
    {d:'2027-01-01',aws:'☁️ Serverless & App — SQS Standard vs FIFO Queues (3m) · SQS Delay Queues (5m) · SQS Dead-Letter Queues (4m) · Kinesis Data Streams (8m) · Kinesis Data Firehose (9m) · Kinesis Data Analytics (9m) · Kinesis Video Streams (5m)',awsRef:['aws-srvls-20','aws-srvls-21','aws-srvls-22','aws-srvls-23','aws-srvls-24','aws-srvls-25','aws-srvls-26'],dsa:'GFG Adv: Disjoint Set — provinces, redundant connection',main:'🆕 Resilience4j continued + Spring Cloud Config',mt:'spring',rot:'Full week rev + Mock 7 (Full loop, 3hr)',rt:'mock'},
    {d:'2027-01-02',dsa:'GFG Adv: Disjoint Set DONE — DSA Advanced 90% complete!',main:'🆕 Kafka basics + Spring Kafka Producer',mt:'spring',rot:'SD: Stock exchange / trading system (LLD + HLD hybrid)',rt:'sd',cRef:'sd-hld-stock'},
    {d:'2027-01-03',aws:'☁️ Serverless & App — Amazon Cognito - User and Identity Pools (15m) · AWS Glue 101 (6m) · Amazon MQ 101 (8m) · Amazon AppFlow (4m)',awsRef:['aws-srvls-27','aws-srvls-28','aws-srvls-29','aws-srvls-30'],dsa:'GFG: Mixed Hard problems revision (top 10 across DSA Adv)',main:'🆕 Spring Kafka Consumer + manual offset commit',mt:'spring',rot:'Real interview cycle continues',rt:'mock'},
    {d:'2027-01-04',dsa:'GFG: Mixed graph + DP problems (5 each)',main:'🆕 Kafka Error Handling + DLQ + retry topics',mt:'spring',rot:'Hands-on: TestContainers integration tests',rt:'hands-on'},
  ]},
  {wn:20,phase:'Phase 3: Distributed',title:'Spring 2026 Modern + Comprehensive Mocks',days:[
    {d:'2027-01-05',aws:'☁️ CloudFront & CDN — Cloudfront Architecture (15m) · CloudFront (CF) - Behaviours (9m) · CloudFront - TTL and Invalidations (14m)',awsRef:['aws-cdn-01','aws-cdn-02','aws-cdn-03'],dsa:'DSA revision: Top 20 problems across all topics (timed)',main:'🆕 Spring Cache abstraction + Redis basics',mt:'spring',rot:'Mock 8 (External, System Design, 90min)',rt:'mock'},
    {d:'2027-01-06',dsa:'DSA revision: Top 10 graph + top 10 DP',main:'🆕 RedisTemplate + Cache patterns deep',mt:'spring',rot:'SD: News feed deep redesign',rt:'sd',cRef:'sd-hld-news-feed-deep'},
    {d:'2027-01-07',aws:'☁️ CloudFront & CDN — ACM (11m) · Cloudfront and SSL/TLS (15m) · CloudFront - Origin Types & Origin Architecture (10m)',awsRef:['aws-cdn-04','aws-cdn-05','aws-cdn-06'],dsa:'DSA revision: Linked List + Tree patterns mix',main:'🆕 Spring Boot Testing: @SpringBootTest + MockMvc (Philip Riecks)',mt:'spring',rot:'Hands-on: Stress test microservices with concurrent requests',rt:'hands-on'},
    {d:'2027-01-08',dsa:'DSA revision: Hard problems from earlier weeks',main:'🆕 Slice tests (@WebMvcTest, @DataJpaTest) + TestContainers',mt:'spring',rot:'Full week rev + Mock 9 (Full loop + Behavioral, 3hr)',rt:'mock'},
    {d:'2027-01-09',aws:'☁️ CloudFront & CDN — Adding a CDN to a static Website-PART1 (16m) · Adding a CDN to a static Website-PART2 (12m) · Adding an Alternate CNAME and SSL (11m)',awsRef:['aws-cdn-07','aws-cdn-08','aws-cdn-09'],dsa:'DSA revision: Patterns review',main:'🌟 Spring Modulith (Oliver Drotbohm)',mt:'spring',rot:'Behavioral: STAR story #11-12 (tradeoffs, recent learning)',rt:'behavioral'},
    {d:'2027-01-10',dsa:'DSA revision: System design + DSA integration',main:'🌟 GraalVM Native + Spring AOT + RestClient/JdbcClient',mt:'spring',rot:'PHASE 3 RETRO — strong/weak, plan Phase 4',rt:'revision'},
  ]},
  {wn:21,phase:'Phase 4: Polish + Offer',title:'Pure mocking + weak topic patching + active interviews',days:[
    {d:'2027-01-11',aws:'☁️ CloudFront & CDN — Securing CF and S3 using OAI (9m) · CloudFront - Private Distribution & Behaviours (8m) · Using Origin Access Control (OAC) (11m) · Lambda@Edge (8m) · Global Accelerator (10m)',awsRef:['aws-cdn-10','aws-cdn-11','aws-cdn-12','aws-cdn-13','aws-cdn-14'],dsa:'Top 5 array + LL problems (40min each)',main:'Java REV: Collections + HashMap internals + ConcurrentHashMap',mt:'rev',rot:'Mock 10 (Java focused, 90min)',rt:'mock'},
    {d:'2027-01-12',dsa:'Top 5 tree + BST problems',main:'Spring REV: Lifecycle deep, AOP, transactions',mt:'rev',rot:'Real interview OR per-company prep (Walmart-specific)',rt:'mock'},
    {d:'2027-01-13',aws:'☁️ Advanced VPC — VPC Flow Logs (10m) · Egress-Only Internet gateway (7m) · VPC Endpoints (Gateway) (11m) · VPC Endpoints (Interface) (11m)',awsRef:['aws-vpcadv-01','aws-vpcadv-02','aws-vpcadv-03','aws-vpcadv-04'],dsa:'Top 5 graph + DP problems',main:'Java REV: Concurrency: threads, sync, volatile, CompletableFuture, VT',mt:'rev',rot:'Mock 11 (System Design, 90min)',rt:'mock'},
    {d:'2027-01-14',dsa:'Top 5 hashing + sliding window patterns',main:'Spring REV: Boot + JPA + Security flow end-to-end',mt:'rev',rot:'Full week retro + STAR story drilling (12 stories × 5min)',rt:'revision'},
    {d:'2027-01-15',aws:'☁️ Advanced VPC — VPC Endpoints - Interface - PART1 (12m) · VPC Endpoints - Gateway - PART2 (10m) · Egress-Only Internet Gateway - PART3 (8m) · VPC Peering (9m)',awsRef:['aws-vpcadv-05','aws-vpcadv-06','aws-vpcadv-07','aws-vpcadv-08'],dsa:'Top 5 stack + queue + monotonic patterns',main:'Java REV: JVM (memory, GC, OOM scenarios)',mt:'rev',rot:'Real interview OR HR research (salary, RSU, joining)',rt:'mock'},
    {d:'2027-01-16',dsa:'Top 5 heap + greedy problems',main:'Spring REV: Microservices: discovery, gateway, resilience4j, kafka',mt:'rev',rot:'Mock 12 (Behavioral + SD hybrid, 90min)',rt:'mock'},
    {d:'2027-01-17',aws:'☁️ Advanced VPC + Hybrid & Migration — VPC Peering demo (23m) · Border Gateway Protocol 101 (17m)',awsRef:['aws-vpcadv-09','aws-hybrid-01'],dsa:'Top 10 mixed problems (timed, no help)',main:'Java REV: Modern Java (records, sealed, pattern matching, VT)',mt:'rev',rot:'Behavioral: refine top 6 stories with feedback',rt:'behavioral'},
  ]},
  {wn:22,phase:'Phase 4: Polish + Offer',title:'Final SD designs + Spring deep revision',days:[
    {d:'2027-01-18',dsa:'DSA practice: tree + graph + hard mix',main:'Spring REV: Custom Boot starters + auto-config flow',mt:'rev',rot:'SD: Twitter Search (elasticsearch + caching)',rt:'sd',cRef:'sd-hld-twitter-search'},
    {d:'2027-01-19',aws:'☁️ Hybrid & Migration — IPSec VPN Fundamentals (15m) · AWS Site-to-Site VPN (18m) · Simple Site2Site VPN - STAGE0 - SETUP (5m)',awsRef:['aws-hybrid-02','aws-hybrid-03','aws-hybrid-04'],dsa:'DSA practice: DP hard problems + recursion deep',main:'Java REV: Production diagnostics — thread dumps, heap dumps, JFR',mt:'rev',rot:'Mock 13 (Full loop 3hr — Java + Spring + SD + Behavioral)',rt:'mock'},
    {d:'2027-01-20',dsa:'DSA practice: LL + array hard problems',main:'Spring REV: Observability + distributed tracing',mt:'rev',rot:'SD: Distributed file storage (S3/HDFS-like)',rt:'sd',cRef:'sd-hld-file-storage'},
    {d:'2027-01-21',aws:'☁️ Hybrid & Migration — Simple Site2Site VPN - STAGE1 - AWS VPN (10m) · Simple Site2Site VPN - STAGE2 - onprep pfSense Config (17m) · Simple Site2Site VPN - STAGE3 - Routing & Security (10m) · Simple Site2Site VPN - STAGE4 - Testing (6m) · Simple Site2Site VPN - STAGE5 - Cleanup (2m)',awsRef:['aws-hybrid-05','aws-hybrid-06','aws-hybrid-07','aws-hybrid-08','aws-hybrid-09'],dsa:'DSA practice: top weak topic from mocks',main:'Java REV: Design patterns + SOLID refactoring',mt:'rev',rot:'Full week retro + Mock retro + plan interview schedule',rt:'revision'},
    {d:'2027-01-22',dsa:'DSA practice: company-specific patterns',main:'Spring REV: Testing (MockMvc, slice, TestContainers)',mt:'rev',rot:'Real interview OR per-company prep (PayPal)',rt:'mock'},
    {d:'2027-01-23',aws:'☁️ Hybrid & Migration — Direct Connect (DX) Concepts (10m) · Direct Connect (DX) Resilience (14m) · Direct Connect (DX) - Public VIF + VPN (Encryption) (7m) · Transit Gateway (10m)',awsRef:['aws-hybrid-10','aws-hybrid-11','aws-hybrid-12','aws-hybrid-13'],dsa:'DSA: 5 hard problems timed (45min each)',main:'Java REV: Generics + Streams API deep',mt:'rev',rot:'Mock 14 (Tech deep + LLD, 90min)',rt:'mock'},
    {d:'2027-01-24',dsa:'DSA: review top patterns',main:'Spring REV: Caching strategies (Redis deep) + invalidation',mt:'rev',rot:'Behavioral: HR/manager drilling (5 question types)',rt:'behavioral'},
  ]},
  {wn:23,phase:'Phase 4: Polish + Offer',title:'Interview surge + Trade-off articulation',days:[
    {d:'2027-01-25',aws:'☁️ Hybrid & Migration — Storage Gateway - Volume (14m) · Storage Gateway - Tape (VTL) (12m) · Storage Gateway - File (12m)',awsRef:['aws-hybrid-14','aws-hybrid-15','aws-hybrid-16'],dsa:'DSA: mixed medium (LC), 4 in 2hr',main:'Java REV: Final pass on weakest 5 topics',mt:'rev',rot:'Mock 15 (Stranger via Pramp)',rt:'mock'},
    {d:'2027-01-26',dsa:'DSA: revisit unsolved hard problems',main:'Spring REV: Final pass on Spring weakest topics',mt:'rev',rot:'Real interview OR negotiation prep',rt:'mock'},
    {d:'2027-01-27',aws:'☁️ Hybrid & Migration — Snowball / Edge / Snowmobile (11m) · Directory Service (16m) · DataSync (9m)',awsRef:['aws-hybrid-17','aws-hybrid-18','aws-hybrid-19'],dsa:'DSA: company tag practice (Walmart)',main:'Java REV: Threading hard problems',mt:'rev',rot:'SD: Live streaming (Twitch/YouTube)',rt:'sd',cRef:'sd-hld-live-streaming'},
    {d:'2027-01-28',dsa:'DSA: company tag practice (PayPal/Paytm SQL+DSA)',main:'Spring REV: Final read of Boot internals docs',mt:'rev',rot:'Full week retro + write down weaknesses',rt:'revision'},
    {d:'2027-01-29',aws:'☁️ Hybrid & Migration + Security & Ops — FSx for Windows Servers (12m) · FSx For Lustre (14m) · AWS Transfer Family (10m) · AWS Secrets Manager (8m)',awsRef:['aws-hybrid-20','aws-hybrid-21','aws-hybrid-22','aws-sec-01'],dsa:'DSA: trie + DP combined',main:'Java REV: Code-review pass on all project commits',mt:'rev',rot:'Real interview + post-interview notes',rt:'mock'},
    {d:'2027-01-30',dsa:'DSA: hard problems revisit',main:'Spring REV: Reactive vs Virtual Threads + WebFlux',mt:'rev',rot:'Mock 16 (Full loop, 3hr — final loop simulation)',rt:'mock'},
    {d:'2027-01-31',aws:'☁️ Security & Ops — Application Layer (L7) Firewall (8m) · Web Application Firewall (WAF), WEBACLs, Rule Groups and Rules (19m) · AWS Shield (10m)',awsRef:['aws-sec-02','aws-sec-03','aws-sec-04'],dsa:'DSA: SQL + DSA combined',main:'Java REV: Last revision pass: 25-Q rapid quiz',mt:'rev',rot:'Tradeoff articulation drills: 10 classic tradeoffs',rt:'behavioral'},
  ]},
  {wn:24,phase:'Phase 4: Polish + Offer',title:'Offer negotiation begins',days:[
    {d:'2027-02-01',dsa:'DSA: 20-min rapid review',main:'Java + Spring REV: Walkthrough notebook end-to-end',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-02-02',aws:'☁️ Security & Ops — CloudHSM (15m) · AWS Config (6m) · Amazon Macie (12m)',awsRef:['aws-sec-05','aws-sec-06','aws-sec-07'],dsa:'DSA: light, revisit weakest 2 topics',main:'Java REV: Final weak-topic patch',mt:'rev',rot:'Mock 17 (Behavioral, full HM round)',rt:'mock'},
    {d:'2027-02-03',dsa:'DSA: 1 medium problem (timed, walkthrough)',main:'Spring REV: Company tech stack alignment',mt:'rev',rot:'SD: company-specific design (Walmart inventory, PayPal payments)',rt:'sd',cRef:'sd-hld-company'},
    {d:'2027-02-04',aws:'☁️ Security & Ops + CloudFormation — Amazon Macie demo (16m) · Amazon Inspector (6m) · Amazon Guardduty (4m) · CloudFormation Physical & Logical Resources (8m)',awsRef:['aws-sec-08','aws-sec-09','aws-sec-10','aws-cfn-01'],dsa:'DSA: rest mode (revise notes only)',main:'REV: Compile final cheat sheets (1-pager per topic)',mt:'rev',rot:'Full week retro + negotiate pending offers',rt:'revision'},
    {d:'2027-02-05',dsa:'DSA: top 3 problems from mock failures',main:'Java REV: 30-min quiz · 30 Q&A on weak areas',mt:'rev',rot:'Real interview OR final-round prep',rt:'mock'},
    {d:'2027-02-06',aws:'☁️ CloudFormation — Simple Non Portable Template - PART1 (10m) · Simple Non Portable Template - PART2 (11m) · CloudFormation Template and Pseudo Parameters (7m) · CloudFormation Intrinsic Functions (14m)',awsRef:['aws-cfn-02','aws-cfn-03','aws-cfn-04','aws-cfn-05'],dsa:'DSA: 2 graph + 2 DP medium problems',main:'Spring REV: Boot startup flow end-to-end + observability',mt:'rev',rot:'Mock 18 (Tech + SD final, 90min)',rt:'mock'},
    {d:'2027-02-07',dsa:'DSA: light · LC tagged for last 5 days',main:'Java + Spring REV: Final weak topic from mocks',mt:'rev',rot:'Behavioral: 12 STAR stories — final polish',rt:'behavioral'},
  ]},
  {wn:25,phase:'Phase 4: Polish + Offer',title:'Acceptance phase + Cushion for delayed loops',days:[
    {d:'2027-02-08',aws:'☁️ CloudFormation — CloudFormation Mappings (4m) · CloudFormation Outputs (4m) · Template v2 - Portable (14m) · CloudFormation Conditions (7m) · CloudFormation DependsOn (7m)',awsRef:['aws-cfn-06','aws-cfn-07','aws-cfn-08','aws-cfn-09','aws-cfn-10'],dsa:'DSA: 1 hard problem (timed)',main:'Final Java cheat sheet + interview Q&A pack',mt:'rev',rot:'Real interview / negotiation call',rt:'mock'},
    {d:'2027-02-09',dsa:'DSA: revise notes + rapid pattern recognition',main:'Final Spring cheat sheet + Q&A pack',mt:'rev',rot:'Mock 19 (any weak area, 90min)',rt:'mock'},
    {d:'2027-02-10',aws:'☁️ CloudFormation — CloudFormation Wait Conditions & cfn-signal (12m) · CloudFormation Nested Stacks (14m) · CloudFormation Cross-Stack References (10m) · CloudFormation Stack Sets (9m)',awsRef:['aws-cfn-11','aws-cfn-12','aws-cfn-13','aws-cfn-14'],dsa:'DSA: 30-min warm-up only',main:'Final SD cheat sheet + tradeoff articulation reps',mt:'rev',rot:'SD: final review of 10 designs (1-page each)',rt:'sd'},
    {d:'2027-02-11',dsa:'DSA: light · weakest pattern revisit',main:'Behavioral: 12 STAR stories rapid-fire (1min each)',mt:'rev',rot:'Full week retro + decision: which offer to accept',rt:'revision'},
    {d:'2027-02-12',aws:'☁️ CloudFormation — CloudFormation Deletion Policy (5m) · CloudFormation Stack Roles (7m) · CloudFormation Init (CFN-INIT) (9m) · CloudFormation cfn-hup (4m)',awsRef:['aws-cfn-15','aws-cfn-16','aws-cfn-17','aws-cfn-18'],dsa:'DSA: 2 medium problems (relaxed pace)',main:'Java REV: Coffee-table revision: scan everything',mt:'rev',rot:'Real interview / counter-offer discussion',rt:'mock'},
    {d:'2027-02-13',dsa:'DSA: 1 hard problem timed',main:'Spring REV: Coffee-table revision: scan everything',mt:'rev',rot:'Mock 20 (Final mock, 90min, any topic)',rt:'mock'},
    {d:'2027-02-14',aws:'☁️ CloudFormation — wait conditions, cfnsignal, cfninit and cfnhup-PART1 (13m) · wait conditions, cfnsignal, cfninit and cfnhup-PART2 (15m) · CloudFormation ChangeSets (11m)',awsRef:['aws-cfn-19','aws-cfn-20','aws-cfn-21'],dsa:'DSA: full revision day · no new problems',main:'REV: Final notes consolidation, single PDF',mt:'rev',rot:'HR negotiation tactics: counter, hold, decline drafts',rt:'behavioral'},
  ]},
  {wn:26,phase:'Phase 4: Polish + Offer',title:'Final interviews + final offer push',days:[
    {d:'2027-02-15',dsa:'DSA: warm-up only · 30min',main:'REV: Just sleep & light revision',mt:'rev',rot:'Real interview / final-round support',rt:'mock'},
    {d:'2027-02-16',aws:'☁️ CloudFormation + DynamoDB & NoSQL — CloudFormation Custom Resources (11m) · CloudFormation Custom Resources-PART1 (9m) · CloudFormation Custom Resources-PART2 (13m) · DynamoDB - Architecture (11m)',awsRef:['aws-cfn-22','aws-cfn-23','aws-cfn-24','aws-ddb-01'],dsa:'DSA: warm-up only',main:'REV: Specific topic per next-day interview',mt:'rev',rot:'Real interview · per-company prep doc',rt:'mock'},
    {d:'2027-02-17',dsa:'DSA: 1 problem light',main:'REV: Mock retro from week',mt:'rev',rot:'Real interview / manager round',rt:'mock'},
    {d:'2027-02-18',aws:'☁️ DynamoDB & NoSQL — DynamoDB - Operations, Consistency and Performance-PART1 (13m) · DynamoDB - Operations, Consistency and Performance-PART2 (11m) · DynamoDB Local and Global Secondary Indexes (13m) · DynamoDB - Streams & Lambda Triggers (9m)',awsRef:['aws-ddb-02','aws-ddb-03','aws-ddb-04','aws-ddb-05'],dsa:'DSA: rest mode',main:'REV: Behavioral STAR drilling',mt:'rev',rot:'Strategy: which offer to choose',rt:'behavioral'},
    {d:'2027-02-19',dsa:'DSA: warm-up',main:'REV: Whatever feels weakest 24h before',mt:'rev',rot:'Real interview / culture round',rt:'mock'},
    {d:'2027-02-20',aws:'☁️ DynamoDB & NoSQL — DynamoDB - Global Tables (5m) · DynamoDB - Accelerator (DAX) (11m) · DynamoDB - TTL (5m) · Amazon Athena (8m)',awsRef:['aws-ddb-06','aws-ddb-07','aws-ddb-08','aws-ddb-09'],dsa:'DSA: warm-up',main:'REV: Light · sleep well',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-02-21',dsa:'DSA: rest',main:'REV: Compile written cheat sheet per company',mt:'rev',rot:'Negotiation calls · counter-offer drafts',rt:'behavioral'},
  ]},
  {wn:27,phase:'Phase 4: Polish + Offer',title:'Negotiation final stretch + onboarding prep',days:[
    {d:'2027-02-22',aws:'☁️ DynamoDB & NoSQL — Athena Demo - PART1 (14m) · Athena Demo - PART2 (12m) · Elasticache (13m)',awsRef:['aws-ddb-10','aws-ddb-11','aws-ddb-12'],dsa:'DSA: 1 problem light or rest',main:'REV: Stand by for remaining interviews',mt:'rev',rot:'Final-round support',rt:'mock'},
    {d:'2027-02-23',dsa:'DSA: rest',main:'REV: Sleep & maintenance',mt:'rev',rot:'Offer negotiation final call · accept/decline',rt:'mock'},
    {d:'2027-02-24',aws:'☁️ DynamoDB & NoSQL + ML 101 — Redshift Architecture (12m) · Redshift DR and Resilience (4m) · Amazon Comprehend (7m) · Amazon Kendra (5m) · Amazon Lex (6m) · Amazon Polly (4m) · Amazon Rekognition (4m)',awsRef:['aws-ddb-13','aws-ddb-14','aws-ml-01','aws-ml-02','aws-ml-03','aws-ml-04','aws-ml-05'],dsa:'DSA: rest',main:'REV: Onboarding research (new company stack)',mt:'rev',rot:'Compare offers final spreadsheet',rt:'revision'},
    {d:'2027-02-25',dsa:'DSA: rest',main:'REV: Onboarding tech prep (new company\'s stack)',mt:'rev',rot:'Full retro + plan onboarding',rt:'revision'},
    {d:'2027-02-26',aws:'☁️ ML 101 + Other Services — Amazon Textract (9m) · Amazon Transcribe (5m) · Amazon Translate (5m) · Amazon Forecast 101 (4m) · Amazon Fraud Detector (4m) · Amazon SageMaker (6m) · AWS Local Zones (9m)',awsRef:['aws-ml-06','aws-ml-07','aws-ml-08','aws-ml-09','aws-ml-10','aws-ml-11','aws-other-01'],dsa:'DSA: rest',main:'REV: Tech stack research for accepted company',mt:'rev',rot:'Resignation/notice prep (if needed)',rt:'revision'},
    {d:'2027-02-27',dsa:'DSA: rest',main:'REV: Tech stack research continues',mt:'rev',rot:'Joining bonus / RSU final negotiation',rt:'revision'},
    {d:'2027-02-28',aws:'☁️ Exam Technique — General AWS Exam Technique - 3 Phase Approach (9m) · General AWS Question Technique - PART1 (14m) · General AWS Question Technique - PART2 (9m)',awsRef:['aws-exam-01','aws-exam-02','aws-exam-03'],dsa:'DSA: rest',main:'REV: Begin onboarding course (free week!)',mt:'rev',rot:'Sign offer · close offer letters · notify others',rt:'revision'},
  ]},
  {wn:27.5,phase:'Phase 4: Polish + Offer',title:'Buffer / decompress / onboarding ramp-up',isBuffer:true,days:[
    {d:'2027-03-01',activity:'Onboarding tech research · light DSA review'},
    {d:'2027-03-02',activity:'Update LinkedIn, resume · notify network'},
    {d:'2027-03-03',activity:'Decompress day · process the journey'},
    {d:'2027-03-04',activity:'Onboarding prep for new role'},
    {d:'2027-03-05',activity:'🎉 FINAL DAY OF PLAN · OFFER LOCKED · ONBOARDING NEXT'},
  ]},
];

// ─── STATE ─────────────────────────────────────────────────────────────────

function getDefaultTracks() {
  const t = {};
  ['java','spring','sql','sd','cloud'].forEach(k => { t[k] = {}; });
  return t;
}

const STATE_VERSION = '4.0';   // GFG moved from vc/pc counters to per-video done{}

function getDefaultState() {
  const topics = {};
  GFG_MODULES.forEach(m => m.topics.forEach(t => {
    topics[t.id] = {done:{}};
  }));
  return {version:STATE_VERSION, gfg:{topics}, dailyChecks:{}, dailyLog:{}, tracks:getDefaultTracks()};
}

// Older states (version < 4.0) stored GFG progress as vc/pc counters, which
// don't map onto per-video done{} sets — those get a fresh start. Anything
// already logged for slot A under the old shape is dropped too, so a stale
// snapshot can't render with missing video/duration fields.
function migrateGfg(s) {
  if (s.version === STATE_VERSION) return s;
  s.gfg = getDefaultState().gfg;
  Object.keys(s.dailyLog || {}).forEach(d => { if (s.dailyLog[d]) delete s.dailyLog[d].a; });
  Object.keys(s.dailyChecks || {}).forEach(d => { if (s.dailyChecks[d]) delete s.dailyChecks[d].a; });
  s.version = STATE_VERSION;
  return s;
}

function loadState() {
  try {
    const raw = localStorage.getItem(activeStorageKey());
    if (!raw) return getDefaultState();
    const s = JSON.parse(raw);
    if (!s.dailyChecks) s.dailyChecks = {};
    if (!s.dailyLog) s.dailyLog = {};
    if (!s.gfg) { const d = getDefaultState(); s.gfg = d.gfg; }
    // backfill per-track keys too — an older state may carry tracks:{} and
    // leave STATE.tracks.java undefined
    if (!s.tracks) s.tracks = getDefaultTracks();
    else Object.keys(getDefaultTracks()).forEach(k => { if (!s.tracks[k]) s.tracks[k] = {}; });
    return migrateGfg(s);
  } catch(e) { return getDefaultState(); }
}

function saveState(s) {
  s.lastUpdated = new Date().toISOString();
  try { localStorage.setItem(activeStorageKey(), JSON.stringify(s)); } catch(e) {}
  syncToFirestore(s);
}

let STATE = loadState();

// ─── DATE UTILS ────────────────────────────────────────────────────────────

function todayStr() {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
}

function dayName(dateStr) {
  const [y,mo,d] = dateStr.split('-').map(Number);
  return ['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(y, mo-1, d).getDay()];
}

function fmtDate(dateStr) {
  const [y,mo,d] = dateStr.split('-').map(Number);
  const dt = new Date(y, mo-1, d);
  return dt.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric', year:'numeric'});
}

function findDay(dateStr) {
  for (let wi = 0; wi < WEEKS.length; wi++) {
    const w = WEEKS[wi];
    for (let di = 0; di < w.days.length; di++) {
      if (w.days[di].d === dateStr) return {week:w, wi, day:w.days[di], di};
    }
  }
  return null;
}

function daysBetween(a, b) {
  const da = new Date(a), db = new Date(b);
  return Math.round((db - da) / 86400000);
}

// ─── DYNAMIC SCHEDULER ─────────────────────────────────────────────────────
// No day's workload is stored anywhere. Three things are fixed — the
// curriculum lists (GFG_MODULES / TRACK_DEFS), the per-slot hour budget, and
// the weekly rhythm (which stream owns which slot) — and everything else is
// recomputed from whatever is still unfinished, on every render.
//
// Finish four AWS lessons on a day that only asked for two and tomorrow simply
// starts at the fifth: the queue is shorter, so the remaining work is spread
// again over the remaining sessions. Fall behind and the same maths makes the
// later days heavier. Progress can arrive from the Today tab (ticking a slot
// completes exactly what that slot was showing) or from a track/GFG page
// (marking items directly); both feed the same queues.

const SLOT_H = {a: 2, b: 2.5, c: 1.5, d: 2};
// Slot A is a 2h block, but only real GFG video runtime is auto-scheduled —
// ~1.5h/day of watching, leaving the remaining ~30min for practicing the
// problems yourself (untracked). Once the video backlog is empty the slot
// hands over at the full 2h, same as every other stream.
const GFG_DAILY_VIDEO_H = 1.5;
// Slot C is a 1.5h block on SQL days, but only 1h of real course video is
// auto-scheduled — the rest is yours to practice queries. Once the course
// backlog is empty the slot hands over at the full 1.5h, same as DSA above.
const SQL_DAILY_H = 1;

const STREAMS = {
  dsa:    {label: 'DSA · GFG',      badge: 'dsa'},
  java:   {label: 'Java',           badge: 'java',   track: 'java'},
  spring: {label: 'Spring',         badge: 'spring', track: 'spring'},
  sql:    {label: 'SQL / DB',       badge: 'sql',    track: 'sql'},
  sd:     {label: 'System Design',  badge: 'sd',     track: 'sd'},
  aws:    {label: 'AWS · SAA',      badge: 'cloud',  track: 'cloud',
           group: g => g.id.indexOf('cl-saa-') === 0},
  clocal: {label: 'Docker / K8s',   badge: 'cloud',  track: 'cloud',
           group: g => g.id.indexOf('cl-saa-') !== 0},
};

// Day parity drives both alternating slots. Day 1 is an "even" day.
// When a stream's backlog runs dry its sessions don't go to waste — they're
// handed to the next stream that still has work. Slot B is a Java/Spring pair
// and Slot D an AWS/SD pair, so the partner takes the whole flow first; the
// rest of the chain is a last resort so no session is ever idle while work
// remains anywhere.
const HANDOVER = {
  java:   ['spring', 'sd', 'aws', 'dsa'],
  spring: ['java', 'sd', 'aws', 'dsa'],
  aws:    ['sd', 'clocal', 'java', 'spring', 'dsa'],
  sd:     ['aws', 'java', 'spring', 'dsa'],
  sql:    ['sd', 'java', 'spring', 'dsa'],
  clocal: ['aws', 'sd', 'dsa'],
  dsa:    ['sd', 'java', 'spring', 'aws'],
};

function isEvenDay(dateStr) {
  const i = daysBetween(PLAN_START, dateStr);
  return ((i % 2) + 2) % 2 === 0;
}

// Which stream owns a slot. Slots that return null (mocks, behavioural work,
// hands-on coding, revision) have no enumerable queue and keep the authored
// prose from the day object.
function streamForSlot(day, slot) {
  const even = isEvenDay(day.d);
  if (slot === 'a') return 'dsa';                                    // every day
  if (slot === 'b') return even ? 'java' : 'spring';                 // alternating
  if (slot === 'd') return even ? 'aws' : 'sd';                      // alternating
  if (slot === 'c') return ({sql: 'sql', sd: 'sd', cloud: 'clocal'})[day.rt] || null;
  return null;
}

// The full ordered backlog for a stream, curriculum order, one entry per
// thing you can actually tick off.
function streamUnits(id) {
  if (id === 'dsa') {
    const out = [];
    GFG_MODULES.forEach(m => m.topics.forEach(t => {
      t.v.forEach((vid, i) => out.push({s:'dsa', kind:'gfg', topic:t.id, topicName:t.name, name:vid.n, gname:m.name, idx:i+1, w:vid.s/3600}));
    }));
    return out;
  }
  const st = STREAMS[id], def = TRACK_DEFS[st.track], out = [];
  def.groups.forEach(g => {
    if (st.group && !st.group(g)) return;
    g.topics.forEach(t => out.push({s:id, kind:'track', track:st.track, group:g.id, gname:g.name, id:t.id, name:t.name, w:Math.max(0.05, t.h)}));
  });
  return out;
}

function unitDone(u) {
  if (u.kind === 'gfg') {
    const s = STATE.gfg.topics[u.topic];
    return !!(s && s.done && s.done[u.idx]);
  }
  return ((STATE.tracks[u.track] || {})[u.id] || 'not-started') === 'done';
}

// Spread an ordered backlog over ordered sessions, weighted by each session's
// hours, without reordering anything. Each session takes units until its share
// of the cumulative total is met.
function distribute(units, slots) {
  const out = slots.map(() => []);
  if (!units.length || !slots.length) return out;
  const totW = units.reduce((a, u) => a + u.w, 0);
  const totH = slots.reduce((a, s) => a + s.h, 0);
  let i = 0, cum = 0, cumH = 0;
  for (let k = 0; k < slots.length; k++) {
    cumH += slots[k].h;
    const target = totW * (cumH / totH);
    while (i < units.length) {
      // never leave an early session empty while work still outnumbers sessions
      const mustFill = !out[k].length && (units.length - i) >= (slots.length - k);
      if (!mustFill && cum + units[i].w / 2 > target) break;
      out[k].push(units[i]); cum += units[i].w; i++;
    }
  }
  while (i < units.length) out[out.length - 1].push(units[i++]);
  return out;
}

let _plan = null;
function invalidatePlan() { _plan = null; }
function getPlan() { if (!_plan) _plan = buildPlan(); return _plan; }

function buildPlan() {
  const today = todayStr();
  const from = today < PLAN_START ? PLAN_START : today;
  const slotsBy = {}, byDate = {}, pace = {};

  // How much is genuinely left in each stream, before anything is scheduled.
  const remaining = {};
  Object.keys(STREAMS).forEach(st => {
    remaining[st] = streamUnits(st).filter(u => !unitDone(u)).length;
  });

  // A slot belongs to its stream while that stream still has work; once it is
  // empty the slot passes down the handover chain.
  function resolveStream(primary) {
    if (!primary) return null;
    const chain = [primary].concat(HANDOVER[primary] || []);
    for (let i = 0; i < chain.length; i++) if (remaining[chain[i]]) return chain[i];
    return null;
  }

  // DSA (Slot A) and SQL (Slot C, on its designated days) don't hold every
  // session their slot could ever offer just because their backlog is
  // nonzero — each only needs enough sessions to cover its real content at
  // its daily budget. The rest frees up to the handover chain immediately,
  // same as if the stream had actually finished. Shrinks as items get
  // marked done, so streams behind them pull those sessions in sooner.
  const CAPPED = {
    a: {stream: 'dsa', dailyH: GFG_DAILY_VIDEO_H},
    c: {stream: 'sql', dailyH: SQL_DAILY_H},
  };
  const capState = {};
  Object.keys(CAPPED).forEach(sl => {
    const {stream, dailyH} = CAPPED[sl];
    const hoursLeft = streamUnits(stream).filter(u => !unitDone(u)).reduce((a, u) => a + u.w, 0);
    capState[sl] = {stream, dailyH, needed: Math.ceil(hoursLeft / dailyH), seen: 0};
  });

  WEEKS.forEach(w => {
    if (w.isBuffer) return;
    w.days.forEach(d => {
      if (d.d < from) return;
      ['a','b','c','d'].forEach(sl => {
        if ((STATE.dailyChecks[d.d] || {})[sl]) return;   // already spent
        const primary = streamForSlot(d, sl);
        const cap = CAPPED[sl];
        let st;
        if (cap && primary === cap.stream) {
          const cs = capState[sl];
          if (cs.seen < cs.needed) { st = cs.stream; cs.seen++; }
          else {
            // Today's budget for this stream is used up — hand the session
            // down its chain like any exhausted stream; if nothing else
            // needs it either, it gets a bonus session rather than idling.
            st = (HANDOVER[cs.stream] || []).find(s => remaining[s]) || (remaining[cs.stream] ? cs.stream : null);
          }
        } else {
          st = resolveStream(primary);
        }
        if (!st) return;
        const h = (cap && st === cap.stream) ? cap.dailyH : SLOT_H[sl];
        (slotsBy[st] = slotsBy[st] || []).push({date: d.d, slot: sl, h});
      });
    });
  });

  // Baseline = the whole curriculum over every session the plan ever had.
  // Comparing today's density against it is what "behind" actually means, and
  // it works for streams measured in hours and in problem counts alike. DSA
  // and SQL's baselines are their full content rounded up to whole sessions
  // at their daily budget, since that — not every Slot A/C they touch — is
  // what they were ever really sized for.
  const baseH = {};
  const cappedStreams = new Set(Object.values(CAPPED).map(c => c.stream));
  WEEKS.forEach(w => {
    if (w.isBuffer) return;
    w.days.forEach(d => ['a','b','c','d'].forEach(sl => {
      const st = streamForSlot(d, sl);
      if (st && !cappedStreams.has(st)) baseH[st] = (baseH[st] || 0) + SLOT_H[sl];
    }));
  });
  Object.keys(CAPPED).forEach(sl => {
    const {stream, dailyH} = CAPPED[sl];
    const fullH = streamUnits(stream).reduce((a, u) => a + u.w, 0);
    baseH[stream] = Math.ceil(fullH / dailyH) * dailyH;
  });

  Object.keys(STREAMS).forEach(st => {
    const slots = slotsBy[st] || [];
    const units = streamUnits(st);
    const todo = units.filter(u => !unitDone(u));
    distribute(todo, slots).forEach((chunk, i) => {
      const s = slots[i];
      (byDate[s.date] = byDate[s.date] || {})[s.slot] = {stream: st, units: chunk};
    });
    const wLeft = todo.reduce((a, u) => a + u.w, 0);
    const hLeft = slots.reduce((a, s) => a + s.h, 0);
    const wAll  = units.reduce((a, u) => a + u.w, 0);
    const basis = baseH[st] ? wAll / baseH[st] : 0;      // planned work per hour
    const now   = hLeft ? wLeft / hLeft : 0;             // work per hour still needed
    pace[st] = {
      left: todo.length, total: units.length, done: units.length - todo.length,
      sessions: slots.length,
      load: slots.length ? wLeft / slots.length : 0,
      hoursLeft: hLeft,
      ratio: basis ? now / basis : 0,                    // 1.0 = dead on plan
      stuck: !slots.length && todo.length > 0,
    };
  });

  return {byDate, pace, from};
}

// What a given slot shows: the log if it has already been completed (so the
// display doesn't move under you after ticking), otherwise the live projection.
function assignmentFor(date, slot) {
  const log = (STATE.dailyLog || {})[date];
  if (log && log[slot]) return {stream: log[slot].stream, units: log[slot].units, logged: true};
  const a = (getPlan().byDate[date] || {})[slot];
  return a ? {stream: a.stream, units: a.units, logged: false} : null;
}

function applyUnits(units, done) {
  units.forEach(u => {
    if (u.kind === 'gfg') {
      const s = STATE.gfg.topics[u.topic] = STATE.gfg.topics[u.topic] || {done: {}};
      if (done) s.done[u.idx] = true; else delete s.done[u.idx];
    } else {
      if (!STATE.tracks[u.track]) STATE.tracks[u.track] = {};
      STATE.tracks[u.track][u.id] = done ? 'done' : 'not-started';
    }
  });
}

// Re-render everything the plan feeds. Called after any completion, from
// whichever direction it came.
let CURRENT_TAB = 'today';
let SHOWN_WEEK = null;
function refreshPlan() {
  invalidatePlan();
  if (document.getElementById('panel-today')) renderToday();
  if (SHOWN_WEEK !== null && document.getElementById('week-detail')) showWeek(SHOWN_WEEK);
  if (CURRENT_TAB === 'gfg') renderGFG();
  if (TRACK_DEFS[CURRENT_TAB]) renderTrackTab(CURRENT_TAB);
}

function fmtH(h) {
  if (h >= 1) return (Math.round(h * 10) / 10) + 'h';
  return Math.round(h * 60) + 'm';
}

// ─── TABS ──────────────────────────────────────────────────────────────────

function showTab(id, btn) {
  CURRENT_TAB = id;
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tb').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  (btn || event.target).classList.add('active');
  if (id === 'today')  renderToday();
  if (id === 'weeks')  renderWeeks();
  if (id === 'gfg')    renderGFG();
  if (id === 'java')   renderTrackTab('java');
  if (id === 'spring') renderTrackTab('spring');
  if (id === 'sql')    renderTrackTab('sql');
  if (id === 'sd')     renderTrackTab('sd');
  if (id === 'cloud')  renderTrackTab('cloud');
  if (id === 'budget') renderBudget();
  if (id === 'rules')  renderRules();
}

// ─── TRACK BADGE ───────────────────────────────────────────────────────────

function trackBadge(track, label) {
  const map = {java:'java',spring:'spring',dsa:'dsa',sql:'sql',sd:'sd',cloud:'cloud',mock:'mock',rev:'rev','hands-on':'hands-on',behavioral:'behavioral',revision:'revision'};
  return `<span class="slot-badge ${map[track]||'revision'}">${label}</span>`;
}

// ─── TODAY TAB ─────────────────────────────────────────────────────────────

function renderToday() {
  const today = todayStr();
  const el = document.getElementById('panel-today');

  if (today < PLAN_START) {
    const days = daysBetween(today, PLAN_START);
    el.innerHTML = `<div class="pre-plan">
      <div class="pre-plan-big">${days}</div>
      <div class="pre-plan-lbl">days until the plan begins</div>
      <div class="pre-plan-date">Day 1 starts ${fmtDate(PLAN_START)}</div>
      <div style="margin-top:20px;font-size:12px;color:var(--dim)">Preview below — Week 1 · Core Java + DSA Big-O start</div>
    </div>
    ${renderDayContent(WEEKS[0].days[0], WEEKS[0], true)}`;
    updatePill('Starts in '+days+'d');
    return;
  }

  if (today > PLAN_END) {
    el.innerHTML = `<div class="pre-plan">
      <div class="pre-plan-big">✓</div>
      <div class="pre-plan-lbl">Plan complete — offer locked, onboarding next</div>
    </div>`;
    updatePill('Plan complete');
    return;
  }

  const found = findDay(today);
  if (!found) {
    el.innerHTML = `<div class="pre-plan">
      <div class="pre-plan-big">—</div>
      <div class="pre-plan-lbl">Rest day · no session scheduled</div>
      <div class="pre-plan-date">${fmtDate(today)}</div>
      <div style="margin-top:14px;font-size:12px;color:var(--dim)">Nothing is due. Anything you do today still counts — mark it on a track page and the plan pulls forward.</div>
    </div>`;
    updatePill('Rest day');
    return;
  }

  const {week, wi, day} = found;
  const dayNum = daysBetween(PLAN_START, today) + 1;
  const totalDays = daysBetween(PLAN_START, PLAN_END) + 1;
  const daysLeft = daysBetween(today, PLAN_END);

  updatePill(`Day ${dayNum} of ${totalDays}`);

  el.innerHTML = `
    <div class="today-banner">
      <div class="tb-phase">● ACTIVE · WEEK ${week.wn} · ${week.phase.toUpperCase()}</div>
      <div class="tb-date">${fmtDate(today)}</div>
      <div class="tb-week">${week.title} · ${daysLeft} days left</div>
    </div>
    ${renderDayContent(day, week, false)}
    ${renderPace()}
    <div class="card">
      <div class="lbl">This week · at a glance</div>
      ${renderWeekStrip(week, today)}
    </div>`;
}

function renderDayContent(day, week, preview) {
  if (week.isBuffer && day.activity) {
    return `<div class="card"><div class="slot-content">${day.activity}</div></div>`;
  }
  const checks = STATE.dailyChecks[day.d] || {};
  return ['a','b','c','d'].map(sl => {
    const m = slotMeta(day, sl);
    return slotBlock(sl.toUpperCase(), m.label, m.badge, m.content, day.d, sl, checks[sl], preview);
  }).join('');
}

// A slot is either stream-backed (content computed from the live queue) or
// prose-backed (mocks, behavioural, hands-on, revision — nothing to enumerate).
function slotMeta(day, slot) {
  const primary = streamForSlot(day, slot);
  const H = SLOT_H[slot];
  if (!primary) {
    const text  = slot === 'b' ? day.main : slot === 'c' ? day.rot : '';
    const badge = slot === 'b' ? day.mt : day.rt;
    const name  = slot === 'b' ? 'MAIN' : 'ROTATING';
    return {label: `${name} · ${H}h`, badge: badge, content: text || '—', stream: null};
  }
  const a  = assignmentFor(day.d, slot);
  const st = (a && a.stream) || primary;
  const S  = STREAMS[st];
  const took = st !== primary ? ` ↺ from ${STREAMS[primary].label}` : '';
  return {label: `${S.label} · ${H}h${took}`, badge: S.badge,
          content: renderUnits(st, a), stream: st};
}

function renderUnits(streamId, a) {
  const units = a ? a.units : null;
  if (!units || !units.length) {
    return `<span style="color:var(--dim)">Backlog clear — free session. Pull ahead or revise.</span>`;
  }
  if (streamId === 'dsa') return renderGfgUnits(units);

  let html = '', lastG = null;
  units.forEach(u => {
    if (u.gname !== lastG) { html += `<div class="u-group">${u.gname}</div>`; lastG = u.gname; }
    html += `<div class="u-item">${linkedName(u.name, u.track, u.group)}</div>`;
  });
  const h = units.reduce((s, u) => s + u.w, 0);
  return html + `<div class="u-meta">${units.length} item${units.length > 1 ? 's' : ''} · ~${fmtH(h)} of material</div>`;
}

// Consecutive videos from the same topic collapse into one run, listing
// every real video title in the run and the total watch time.
function renderGfgUnits(units) {
  const runs = [];
  units.forEach(u => {
    const last = runs[runs.length - 1];
    if (last && last.topic === u.topic && u.idx === last.to + 1) { last.to = u.idx; last.h += u.w; last.titles.push(u.name); }
    else runs.push({topic: u.topic, topicName: u.topicName, gname: u.gname, from: u.idx, to: u.idx, h: u.w, titles: [u.name]});
  });
  let html = '', lastG = null;
  runs.forEach(r => {
    if (r.gname !== lastG) { html += `<div class="u-group">${r.gname}</div>`; lastG = r.gname; }
    const n = r.to - r.from + 1;
    const countLbl = n > 1 ? ` <span style="color:var(--dim)">(${n} videos)</span>` : '';
    html += `<div class="u-item"><strong>${r.topicName}</strong>${countLbl} · ${fmtH(r.h)}
      <div style="color:var(--dim);font-size:11.5px;margin-top:1px">${r.titles.join(' · ')}</div></div>`;
  });
  const totH = units.reduce((s, u) => s + u.w, 0);
  return html + `<div class="u-meta">${units.length} video${units.length > 1 ? 's' : ''} · ${fmtH(totH)} today</div>`;
}

function slotBlock(letter, label, badgeClass, content, date, slot, checked, preview) {
  const isDone = !!checked;
  const chk = preview ? '' : `
    <div class="chk-row${isDone ? ' done' : ''}" onclick="toggleSlot('${date}','${slot}')">
      <div class="chk-box">${isDone ? '✓' : ''}</div>
      <span class="chk-lbl">${isDone ? 'Done ✓' : 'Mark as done'}</span>
    </div>`;
  return `<div class="slot-block">
    <div class="slot-header">
      ${trackBadge(badgeClass, letter + ' · ' + label)}
    </div>
    <div class="slot-content">${content}</div>${chk}
  </div>`;
}

// Ticking a slot completes exactly what that slot was showing, and records it
// so the day keeps reading the same afterwards. Unticking puts it all back.
function toggleSlot(date, slot) {
  const checks = STATE.dailyChecks[date] = STATE.dailyChecks[date] || {};
  if (!checks[slot]) {
    const a = assignmentFor(date, slot);
    if (a && a.units && a.units.length) {
      applyUnits(a.units, true);
      STATE.dailyLog = STATE.dailyLog || {};
      (STATE.dailyLog[date] = STATE.dailyLog[date] || {})[slot] = {stream: a.stream, units: a.units};
    }
    checks[slot] = true;
  } else {
    const log = (STATE.dailyLog || {})[date];
    if (log && log[slot]) { applyUnits(log[slot].units, false); delete log[slot]; }
    delete checks[slot];
  }
  invalidatePlan();
  saveState(STATE);
  refreshPlan();
}

// How far ahead or behind each stream is running, right now.
function renderPace() {
  const pace = getPlan().pace;
  const rows = Object.keys(STREAMS).filter(k => pace[k] && pace[k].total).map(k => {
    const p = pace[k], S = STREAMS[k];
    const pct = p.total ? Math.round(p.done / p.total * 100) : 0;
    const per = p.sessions
      ? fmtH(p.load) + ' / session'
      : (p.left ? 'no sessions remain' : 'complete');
    let flag = '', cls = '';
    if (p.stuck)              { flag = `⚠ ${p.left} stranded`; cls = ' behind'; }
    else if (!p.left)         { flag = '✓ clear';              cls = ' ahead'; }
    else if (p.ratio >= 1.15) { flag = `${p.ratio.toFixed(1)}× pace`; cls = ' behind'; }
    else if (p.ratio <= 0.9)  { flag = `${p.ratio.toFixed(1)}× pace`; cls = ' ahead'; }
    else                      { flag = 'on plan'; }
    return `<div class="pace-row">
      ${trackBadge(S.badge, S.label)}
      <div class="pace-bar"><div class="pace-fill${cls}" style="width:${pct}%"></div></div>
      <div class="pace-num">${p.done}/${p.total}</div>
      <div class="pace-rate">${p.sessions} left · ${per}</div>
      <div class="pace-flag${cls}">${flag}</div>
    </div>`;
  }).join('');
  return `<div class="card">
    <div class="lbl">Pace · anything left undone rolls forward into the sessions that remain</div>
    ${rows}
  </div>`;
}

function renderWeekStrip(week, today) {
  return `<div class="week-strip">${week.days.map(d => {
    const dn = dayName(d.d);
    const dateNum = d.d.split('-')[2];
    const isToday = d.d === today;
    const checks = STATE.dailyChecks[d.d] || {};
    const done = [checks.a, checks.b, checks.c, checks.d].filter(Boolean).length;
    let cls = isToday ? ' today' : (done === 4 ? ' done-day' : '');
    return `<div class="wday${cls}" title="${d.activity||''}">
      <div class="wday-name">${dn}</div>
      <div class="wday-date">${dateNum}</div>
      <div class="wday-dots">
        <div class="wdot${checks.a?' done':''}"></div>
        <div class="wdot${checks.b?' done':''}"></div>
        <div class="wdot${checks.c?' done':''}"></div>
        <div class="wdot${checks.d?' done':''}"></div>
      </div>
    </div>`;
  }).join('')}</div>`;
}

function updatePill(text) {
  const p = document.getElementById('day-pill');
  if (p) p.textContent = text;
}

// ─── WEEKS TAB ─────────────────────────────────────────────────────────────

function renderWeeks() {
  const today = todayStr();
  const found = findDay(today);
  const currentWi = found ? found.wi : 0;
  const el = document.getElementById('panel-weeks');

  const opts = WEEKS.map((w, i) => {
    const cur = i === currentWi ? ' ◀ CURRENT' : '';
    return `<option value="${i}"${i===currentWi?' selected':''}>Week ${w.wn} · ${w.title}${cur}</option>`;
  }).join('');

  el.innerHTML = `
    <div class="week-selector">
      <label>JUMP TO →</label>
      <select id="week-select" onchange="showWeek(this.value)">${opts}</select>
    </div>
    <div id="week-detail"></div>`;
  showWeek(currentWi);
}

function showWeek(idx) {
  idx = parseInt(idx);
  SHOWN_WEEK = idx;
  const w = WEEKS[idx];
  const today = todayStr();
  const start = w.days[0]?.d || '';
  const end = w.days[w.days.length-1]?.d || '';

  let html = `<div class="week-header">
    <div class="wh-phase">${w.phase.toUpperCase()}</div>
    <div class="wh-title">Week ${w.wn} · ${w.title}</div>
    <div class="wh-range">${start} → ${end} · ${w.days.length} days</div>
  </div>`;

  w.days.forEach(d => {
    const isToday = d.d === today;
    const dn = dayName(d.d);
    const dateNum = d.d.split('-').slice(1).join('/');
    html += `<div class="week-day-row">
      <div class="wdr-header">
        <span class="wdr-day">${dn}</span>
        <span class="wdr-date">${dateNum}</span>
        ${isToday ? '<span class="wdr-today-badge">TODAY</span>' : ''}
      </div>
      <div class="wdr-slots">`;
    if (w.isBuffer && d.activity) {
      html += `<div class="wdr-slot"><span class="wdr-slot-tag">—</span><span class="wdr-slot-text">${d.activity}</span></div>`;
    } else {
      const checks = STATE.dailyChecks[d.d] || {};
      ['a','b','c','d'].forEach(sl => {
        const m = slotMeta(d, sl);
        const tick = checks[sl] ? '<span class="wdr-tick">✓</span>' : '';
        html += `<div class="wdr-slot">${trackBadge(m.badge, sl.toUpperCase())}<span class="wdr-slot-text" style="margin-left:6px">${m.content}</span>${tick}</div>`;
      });
    }
    html += `</div></div>`;
  });

  document.getElementById('week-detail').innerHTML = html;
}

// ─── GFG TRACKER ───────────────────────────────────────────────────────────

function calcTopicStats(t, s) {
  const done = (s && s.done) || {};
  let doneCount = 0, doneH = 0, totalH = 0;
  t.v.forEach((vid, i) => {
    totalH += vid.s / 3600;
    if (done[i + 1]) { doneCount++; doneH += vid.s / 3600; }
  });
  const total = t.v.length;
  return {total, done: doneCount, pct: total ? Math.round(doneCount / total * 100) : 0, totalH, doneH};
}

function calcModuleStats(m) {
  let total = 0, done = 0, totalH = 0, doneH = 0;
  m.topics.forEach(t => {
    const ts = calcTopicStats(t, STATE.gfg.topics[t.id]);
    total += ts.total; done += ts.done; totalH += ts.totalH; doneH += ts.doneH;
  });
  return {total, done, pct: total ? Math.round(done / total * 100) : 0, totalH, doneH};
}

// Which module/topic accordions are open — UI-only, not persisted.
const GFG_OPEN = {modules: new Set(), topics: new Set()};

function toggleModule(id) {
  if (GFG_OPEN.modules.has(id)) GFG_OPEN.modules.delete(id); else GFG_OPEN.modules.add(id);
  renderGFG();
}

function toggleTopic(id) {
  if (GFG_OPEN.topics.has(id)) GFG_OPEN.topics.delete(id); else GFG_OPEN.topics.add(id);
  renderGFG();
}

function toggleVideo(topicId, idx, ev) {
  if (ev) ev.stopPropagation();
  const s = STATE.gfg.topics[topicId] = STATE.gfg.topics[topicId] || {done: {}};
  if (s.done[idx]) delete s.done[idx]; else s.done[idx] = true;
  saveState(STATE);
  invalidatePlan();
  renderGFG();
  if (document.getElementById('panel-today')) renderToday();
  if (SHOWN_WEEK !== null && document.getElementById('week-detail')) showWeek(SHOWN_WEEK);
}

function renderGFG() {
  const el = document.getElementById('panel-gfg');
  const mStats = GFG_MODULES.map(m => calcModuleStats(m));
  const overall = mStats.reduce((a, s) => ({total: a.total + s.total, done: a.done + s.done, totalH: a.totalH + s.totalH, doneH: a.doneH + s.doneH}), {total: 0, done: 0, totalH: 0, doneH: 0});
  const overallPct = overall.total ? Math.round(overall.done / overall.total * 100) : 0;

  const statCards = [...mStats.map((s, i) => `
    <div class="stat-card">
      <div class="stat-num">${s.pct}%</div>
      <div class="stat-sub">${s.done}/${s.total} videos · ${fmtH(s.doneH)}/${fmtH(s.totalH)}</div>
      <div class="stat-lbl">${GFG_MODULES[i].name}</div>
      <div class="prog-bg" style="margin-top:6px"><div class="prog-fill" style="width:${s.pct}%;background:${GFG_MODULES[i].color}"></div></div>
    </div>`),
    `<div class="stat-card">
      <div class="stat-num">${overallPct}%</div>
      <div class="stat-sub">${overall.done}/${overall.total} videos · ${fmtH(overall.doneH)}/${fmtH(overall.totalH)}</div>
      <div class="stat-lbl">Overall GFG</div>
      <div class="prog-bg" style="margin-top:6px"><div class="prog-fill" style="width:${overallPct}%;background:var(--accent)"></div></div>
    </div>`
  ].join('');

  let html = `<div class="stats-grid">${statCards}</div>`;

  GFG_MODULES.forEach((m, mi) => {
    const ms = mStats[mi];
    const mOpen = GFG_OPEN.modules.has(m.id);
    html += `<div class="module-section">
      <div class="module-header" onclick="toggleModule('${m.id}')" style="cursor:pointer">
        <div>
          <div style="font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--dim);letter-spacing:0.08em;margin-bottom:2px">MODULE ${mi + 1}</div>
          <div class="module-name"><span class="gfg-chevron${mOpen ? ' open' : ''}">▸</span>${m.name}</div>
        </div>
        <div style="text-align:right">
          <div class="module-pct">${ms.pct}%</div>
          <div style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace">${ms.done}/${ms.total} · ${fmtH(ms.doneH)}/${fmtH(ms.totalH)}</div>
        </div>
      </div>
      <div class="module-prog"><div class="fill" id="mbar-${m.id}" style="width:${ms.pct}%;background:${m.color}"></div></div>`;

    if (mOpen) m.topics.forEach((t, ti) => {
      const ts = calcTopicStats(t, STATE.gfg.topics[t.id]);
      const cls = ts.pct >= 100 ? 't-done' : (ts.pct > 0 ? 't-prog' : '');
      const tOpen = GFG_OPEN.topics.has(t.id);
      html += `<div class="topic-row ${cls}" onclick="toggleTopic('${t.id}')" style="cursor:pointer">
        <div class="topic-num"><span class="gfg-chevron${tOpen ? ' open' : ''}">▸</span>${String(ti + 1).padStart(2, '0')}</div>
        <div class="topic-info">
          <div class="topic-name">${t.name}</div>
          <div class="topic-counts">${ts.total} videos · ${fmtH(ts.totalH)}</div>
        </div>
        <div class="topic-pct">${ts.pct}%</div>
        <div class="topic-mini-bar"><div class="fill" style="width:${ts.pct}%"></div></div>
      </div>`;

      if (tOpen) {
        const done = (STATE.gfg.topics[t.id] || {}).done || {};
        html += `<div class="video-list">` + t.v.map((vid, vi) => {
          const idx = vi + 1, isDone = !!done[idx];
          return `<div class="video-row${isDone ? ' done' : ''}" onclick="toggleVideo('${t.id}',${idx},event)">
            <div class="video-box">${isDone ? '✓' : ''}</div>
            <div class="video-name">${vid.n}</div>
            <div class="video-dur">${fmtH(vid.s / 3600)}</div>
          </div>`;
        }).join('') + `</div>`;
      }
    });
    html += `</div>`;
  });

  html += `<div style="text-align:center;padding-bottom:10px">
    <button class="reset-btn" onclick="resetAll()">⟲ Reset ALL progress (GFG + every track + daily ticks)</button>
  </div>`;

  el.innerHTML = html;
}

// Clears every counter, track state, daily check and log. saveState pushes the
// cleared state to Firestore too — otherwise the next sign-in would pull the
// old document straight back down and undo the reset.
function resetAll() {
  if (!confirm('Reset ALL progress?\n\nThis clears GFG counters, every track, and all daily ticks — on this device and in your synced account. It cannot be undone.')) return;
  localStorage.removeItem(activeStorageKey());
  STATE = getDefaultState();
  saveState(STATE);
  invalidatePlan();
  renderGFG();
  refreshPlan();
}

// ─── TRACKS TAB ────────────────────────────────────────────────────────────

function renderTracks() {
  const tracks = [
    {name:'Java (Non-GFG)', hours:195, pct:16.8, color:'var(--java)', when:'Weeks 1–19 (Parts A–F)', desc:'Core foundations, concurrency mastery, JVM & performance, Modern Java 9–21, design patterns, testing'},
    {name:'Spring', hours:230, pct:19.9, color:'var(--spring)', when:'Weeks 1–17 (Blocks 1–9)', desc:'Core IoC, MVC/REST, Boot internals, Data/JPA, Security, Microservices, Kafka, Redis, Modern Spring 2026'},
    {name:'DSA (GFG)', hours:330, pct:28.5, color:'var(--dsa)', when:'Weeks 1–27 (daily Slot A)', desc:'56 topics: DSA Basics + Java Libraries + DSA Advanced · 555 videos + 514 problems'},
    {name:'SQL / DB', hours:95, pct:8.2, color:'var(--sql)', when:'Weeks 1–12 heavy (Slot C Mon/Wed)', desc:'SELECT, JOINs, Window functions, Indexes, Query optimization, Transactions, Schema design'},
    {name:'System Design', hours:85, pct:7.3, color:'var(--sd)', when:'Weeks 2+ (Slot C Fri)', desc:'10 HLD walkthroughs + 3 LLD + building blocks (Idempotency, Rate limiting, Caching, Consistent hashing)'},
    {name:'Mock + Behavioral', hours:95, pct:8.2, color:'var(--mock)', when:'Weeks 9–27 (20+ mocks)', desc:'20+ mock interviews · 12 STAR stories · Full loop simulations · Company-specific prep (Walmart, PayPal, Swiggy)'},
    {name:'Cloud (Docker/K8s/AWS)', hours:35, pct:3.0, color:'var(--cloud)', when:'Weeks 13–16 (Slot C)', desc:'Docker + Compose · Kubernetes (Pods, Deploy, HPA) · AWS (EC2, S3, RDS, EKS) · CI/CD pipelines'},
    {name:'Buffer / Revision', hours:78, pct:6.7, color:'var(--rev)', when:'Throughout (Sundays + Phase 4)', desc:'Weekly self-quiz · Phase retros · Weak area patching · Final cheat sheets'},
  ];

  document.getElementById('panel-tracks').innerHTML = `
    <div class="card"><div class="lbl">Time budget · 1,158 hours total</div>
      <div class="track-grid">${tracks.map(t => `
        <div class="track-card" style="border-left-color:${t.color}">
          <div class="tc-track" style="color:${t.color}">${t.name}</div>
          <div><span class="tc-hours">${t.hours}h</span><span class="tc-pct">${t.pct}%</span></div>
          <div class="tc-desc">${t.desc}</div>
          <div class="tc-when">${t.when}</div>
        </div>`).join('')}
      </div>
    </div>`;
}

// ─── BUDGET TAB ────────────────────────────────────────────────────────────

function renderBudget() {
  // Everything here is derived from WEEKS so it can never drift from the plan.
  const LBL = {
    java:'Java', spring:'Spring', rev:'Buffer/Revision', revision:'Buffer/Revision',
    sql:'SQL/DB', 'hands-on':'Hands-on coding', sd:'System Design',
    mock:'Mock/Behavioral', behavioral:'Mock/Behavioral', cloud:'Cloud'
  };
  const COLOR = {
    'DSA (GFG)':'#457b9d', 'Spring':'#6a994e', 'Java':'#e76f51', 'SQL/DB':'#a87fb8',
    'Mock/Behavioral':'#e63946', 'Buffer/Revision':'#666', 'System Design':'#e9c46a',
    'AWS (SAA course)':'#2a9d8f', 'Hands-on coding':'#4a8fb0', 'Cloud':'#2a9d8f'
  };

  const acc = {};
  const add = (k, h) => { acc[k] = (acc[k] || 0) + h; };
  let planDays = 0;

  WEEKS.forEach(w => {
    if (w.isBuffer) return;
    w.days.forEach(d => {
      planDays++;
      add('DSA (GFG)', 2);                              // Slot A
      add(LBL[d.mt] || 'Buffer/Revision', 2.5);         // Slot B
      add(LBL[d.rt] || 'Buffer/Revision', 1.5);         // Slot C
      const i = daysBetween(PLAN_START, d.d);           // Slot D
      add(((i % 2) + 2) % 2 === 0 ? 'AWS (SAA course)' : 'System Design', 2);
    });
  });

  const total = planDays * 8;
  const items = Object.keys(acc)
    .map(k => ({name:k, h:acc[k], color:COLOR[k] || '#888'}))
    .sort((a, b) => b.h - a.h);

  const bar = items.map(it =>
    `<div class="budget-seg" style="width:${(it.h/total*100).toFixed(1)}%;background:${it.color}" title="${it.name}: ${it.h}h"></div>`
  ).join('');

  const cards = items.map(it => `
    <div class="bcard">
      <div class="bcard-dot" style="background:${it.color}"></div>
      <div class="bcard-info">
        <div class="bcard-name">${it.name}</div>
        <div class="bcard-h">${it.h}h · ${(it.h/total*100).toFixed(1)}%</div>
      </div>
      <div class="prog-bg" style="width:80px"><div class="prog-fill" style="width:${(it.h/total*100).toFixed(1)}%;background:${it.color}"></div></div>
    </div>`).join('');

  const shortDate = ds => {
    const [y,mo,dd] = ds.split('-').map(Number);
    return new Date(y, mo-1, dd).toLocaleDateString('en-US', {month:'short', day:'numeric'});
  };

  const phases = [];
  WEEKS.forEach(w => {
    const nm = w.isBuffer ? 'Buffer / decompress' : w.phase;
    let p = phases.find(x => x.name === nm);
    if (!p) { p = {name:nm, wks:[], days:0, first:w.days[0].d, last:null}; phases.push(p); }
    p.wks.push(w.wn);
    p.days += w.days.length;
    p.last = w.days[w.days.length-1].d;
  });

  const phaseRows = phases.map(p => `<tr>
    <td style="color:var(--text);font-weight:500">${p.name}</td>
    <td style="color:var(--dim);font-family:'JetBrains Mono',monospace">W${p.wks[0]}–${p.wks[p.wks.length-1]}</td>
    <td style="color:var(--dim)">${shortDate(p.first)} – ${shortDate(p.last)}</td>
    <td style="color:var(--muted);text-align:right;font-family:'JetBrains Mono',monospace">${p.days}d · ${p.name.indexOf('Buffer')===0?'—':p.days*8+'h'}</td>
  </tr>`).join('');

  document.getElementById('panel-budget').innerHTML = `
    <div class="card">
      <div class="lbl">${total.toLocaleString()} hours · ${planDays} study days × 8h · allocation</div>
      <div class="budget-bar">${bar}</div>
      <div class="budget-grid">${cards}</div>
    </div>
    <div class="card">
      <div class="lbl">Phase breakdown</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr style="border-bottom:1px solid var(--line2)">
          <th style="text-align:left;padding:6px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);font-weight:700;letter-spacing:0.08em">PHASE</th>
          <th style="text-align:left;padding:6px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);font-weight:700">WKS</th>
          <th style="text-align:left;padding:6px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);font-weight:700">DATES</th>
          <th style="text-align:right;padding:6px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);font-weight:700">BUDGET</th>
        </tr></thead>
        <tbody>${phaseRows}</tbody>
      </table>
    </div>`;
}

// ─── RULES TAB ─────────────────────────────────────────────────────────────

function renderRules() {
  document.getElementById('panel-rules').innerHTML = `
    <div class="rule-block">
      <div class="rule-title">DAILY 4-SLOT STRUCTURE (8 hours every day)</div>
      <div class="rule-item"><span class="rule-bullet">A</span><div><strong style="color:var(--dsa)">DSA · 2h</strong> — GFG Complete Interview Prep videos, real durations, auto-paced to ~1.5h/day; the rest of the slot is your own problem practice. Daily, no exceptions.</div></div>
      <div class="rule-item"><span class="rule-bullet">B</span><div><strong style="color:var(--java)">JAVA ↔ SPRING · 2.5h</strong> — alternating days. Java on even day numbers, Spring on odd.</div></div>
      <div class="rule-item"><span class="rule-bullet">C</span><div><strong style="color:var(--sql)">ROTATING · 1.5h</strong> — SQL (Mon/Wed) · Hands-on (Tue/Thu) · System Design (Fri) · Cloud/Revision (Sat/Sun). On SQL days, course video is auto-paced to ~1h; the rest is your own query practice.</div></div>
      <div class="rule-item"><span class="rule-bullet">D</span><div><strong style="color:var(--cloud)">AWS ↔ SYSTEM DESIGN · 2h</strong> — alternating days. AWS on even day numbers, System Design on odd.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">HANDOVER · WHAT HAPPENS WHEN A STREAM RUNS OUT</div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Slot B is a <strong style="color:var(--java)">Java</strong>/<strong style="color:var(--spring)">Spring</strong> pair and Slot D an <strong style="color:var(--cloud)">AWS</strong>/<strong style="color:var(--sd)">System Design</strong> pair. Two pipes into one slot.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Empty one and its partner takes the whole flow — finish Java and every Slot B becomes Spring, so Spring runs <strong>2.5h every day</strong> instead of every other day.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Drain both and the slot falls through to whatever still has a backlog (SD → AWS → DSA). A session is never left idle while work remains anywhere.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>A handed-over slot is marked <strong>↺</strong> so you can see where the time came from.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">SLOT D · AWS TRACK (alternate days, 94 sessions · 188h)</div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Adrian Cantrill <strong>SAA-C03</strong> — all 339 lessons (60.6h of video) spread evenly across every AWS day.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Budget ≈ <strong>39 min of video per session</strong>. The rest of the 2h is for the [DEMO] builds, notes, and the section quiz.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Do every <strong>[DEMO]</strong> hands-on in your own account. Watching a demo does not count as done.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong>Tear down billable resources</strong> at the end of each session — NAT Gateways, RDS instances, and EKS clusters cost money while idle.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>Ticking Slot D auto-marks that day's lessons on the <strong>Cloud tab</strong>.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">THE TWO DAY TYPES</div>
      <div class="rule-item"><span class="rule-bullet">A</span><div><strong style="color:var(--java)">Java</strong> + <strong style="color:var(--cloud)">AWS</strong> day — Slot B pulls Java (Parts A–F), Slot D pulls the SAA course. 94 of them.</div></div>
      <div class="rule-item"><span class="rule-bullet">B</span><div><strong style="color:var(--spring)">Spring</strong> + <strong style="color:var(--sd)">System Design</strong> day — Slot B pulls Spring (L1–L200), Slot D pulls SD. 94 of them.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div>They alternate strictly, starting with a Java + AWS day. Weekdays are irrelevant — the rotation never depends on which day of the week it is.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">SLOT C · THE ONLY PER-DAY SLOT</div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong style="color:var(--sql)">SQL</strong>, <strong style="color:var(--sd)">System Design</strong> and <strong style="color:var(--cloud)">Docker/K8s</strong> days pull from their queues like every other stream.</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong>Hands-on, mocks, behavioural and revision</strong> days keep their written brief — there is no list to work through, so nothing to schedule.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">HARD RULES</div>
      <div class="rule-item"><span class="rule-bullet">1</span><div>Never skip DSA. Slot A is non-negotiable every single day, including weekends.</div></div>
      <div class="rule-item"><span class="rule-bullet">2</span><div>All 56 GFG topics start at 0%. Only real GFG videos are tracked — problem practice is on you, no articles, MCQs, or contests.</div></div>
      <div class="rule-item"><span class="rule-bullet">3</span><div>Take notes after every block. Write in your Notion/notebook within 10 minutes of finishing.</div></div>
      <div class="rule-item"><span class="rule-bullet">4</span><div>Weekly self-quiz every Sunday. 10–15 Q&A on the week's content, no notes.</div></div>
      <div class="rule-item"><span class="rule-bullet">5</span><div>1.5× rule — if a topic takes longer, cut Slot C instead of Slot A, B or D.</div></div>
      <div class="rule-item"><span class="rule-bullet">9</span><div>Nothing is scheduled to a date in advance. Whatever you leave undone rolls into the sessions that remain — check the pace card before deciding to skip.</div></div>
      <div class="rule-item"><span class="rule-bullet">6</span><div>Module order is strict: DSA Basics → Libraries (Java) → DSA Advanced. Never skip ahead.</div></div>
      <div class="rule-item"><span class="rule-bullet">7</span><div>Sunday is a full 8-hour day. Not a light day. Not a rest day.</div></div>
      <div class="rule-item"><span class="rule-bullet">8</span><div>Never skip an AWS day. Missing one pushes the whole SAA course back two calendar days.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">INTERVIEW READINESS MILESTONES</div>
      <div class="rule-item"><span class="rule-bullet">Sep 13</span><div>4/10 — End of Phase 1 · mid-service screens · AWS: accounts, fundamentals, IAM &amp; Orgs done</div></div>
      <div class="rule-item"><span class="rule-bullet">Oct 11</span><div>5/10 — Easy product first rounds · AWS: S3 + VPC done, EC2 underway</div></div>
      <div class="rule-item"><span class="rule-bullet">Nov 8</span><div>6/10 — End of Phase 2 · mid-product tech rounds · start applying · AWS: EC2 + ECS/Fargate done</div></div>
      <div class="rule-item"><span class="rule-bullet">Dec 12</span><div>7/10 — Product-company loops · AWS: Route 53, RDS/Aurora done, ALB/ASG underway</div></div>
      <div class="rule-item"><span class="rule-bullet">Jan 3</span><div>8/10 — End of Phase 3 · full loops · AWS: Serverless (Lambda/SQS/SNS/API GW) + CloudFront done</div></div>
      <div class="rule-item"><span class="rule-bullet">Feb 21</span><div>9/10 — SAA course complete (all 339 lessons) · offer signed, onboarding next</div></div>
    </div>`;
}

// ─── INIT ──────────────────────────────────────────────────────────────────
// Nothing renders and nothing is interactive until a signed-in Google user
// is confirmed — the loading screen covers the page until Firebase reports
// its first auth state, then either the sign-in gate or the app itself is
// shown. There is no "use without sync" path: every session is tied to a
// Google account, so the same account always sees the same Firestore doc
// regardless of device.

function showApp() {
  const loading = document.getElementById('loading-screen');
  const gate = document.getElementById('signin-overlay');
  const app = document.getElementById('app');
  if (loading) loading.style.display = 'none';
  if (gate) gate.classList.remove('visible');
  if (app) app.style.display = '';
}

function showSignInGate() {
  const loading = document.getElementById('loading-screen');
  const gate = document.getElementById('signin-overlay');
  const app = document.getElementById('app');
  if (loading) loading.style.display = 'none';
  if (app) app.style.display = 'none';
  if (gate) gate.classList.add('visible');
}

function init() {
  // Firebase auth relay — this fires once for the initial auth check (even
  // if the answer is "no user") and again on every sign-in/sign-out.
  window.addEventListener('ansh-auth', e => {
    const user = e.detail.user;
    const btn = document.getElementById('auth-btn');
    if (user) {
      CURRENT_USER = user;
      STATE = loadState();   // re-read under this account's own local cache key
      if (btn) { btn.textContent = 'Sign Out (' + (user.displayName || user.email || 'account').split(' ')[0] + ')'; btn.className = 'auth-btn signed-in'; }
      listenToFirestore(user.uid).then(() => {
        renderToday();
        renderRules();
        showApp();
      });
    } else {
      CURRENT_USER = null;
      stopListeningToFirestore();
      if (btn) { btn.textContent = 'Sign In'; btn.className = 'auth-btn'; }
      showSignInGate();
    }
  });

  let lastDate = todayStr();
  setInterval(() => {
    const now = todayStr();
    if (now !== lastDate) { lastDate = now; if (CURRENT_USER) renderToday(); }
  }, 60000);
}

// ─── FIREBASE ──────────────────────────────────────────────────────────────
// CURRENT_USER is declared up top, near STORAGE_KEY — see the comment there.

function handleAuth() {
  if (CURRENT_USER) {
    window.signOut(window.firebaseAuth).catch(()=>{});
  } else {
    window.signInWithPopup(window.firebaseAuth, window.firebaseProvider).catch(()=>{});
  }
}

// Fires on every single edit, immediately — no debounce, no batching. The
// write is async (doesn't block the click), but it's issued the instant
// saveState() runs, so another signed-in device's live listener (see
// listenToFirestore below) sees it as fast as Firestore delivers it.
function syncToFirestore(s) {
  if (!CURRENT_USER) return;
  const ref = window.firestoreDoc(window.firebaseDB, 'ansh_tracker', CURRENT_USER.uid);
  window.firestoreSetDoc(ref, s).catch(e => console.warn('Firestore save failed', e));
}

function applyRemoteState(remote) {
  // same backfill loadState applies, so an older remote doc can't leave
  // dailyLog or a per-track key undefined
  if (!remote.dailyChecks) remote.dailyChecks = {};
  if (!remote.dailyLog) remote.dailyLog = {};
  if (!remote.gfg) remote.gfg = getDefaultState().gfg;
  if (!remote.tracks) remote.tracks = getDefaultTracks();
  else Object.keys(getDefaultTracks()).forEach(k => { if (!remote.tracks[k]) remote.tracks[k] = {}; });
  STATE = migrateGfg(remote);
  invalidatePlan();
  localStorage.setItem(activeStorageKey(), JSON.stringify(STATE));
  // re-render active panel
  const active = document.querySelector('.panel.active');
  if (active) {
    const id = active.id.replace('panel-','');
    const btn = document.querySelector('.tb.active');
    showTab(id, btn);
  }
}

let _unsubscribeFirestore = null;

// A one-time fetch means a tab left open never learns about an edit made
// on another device — this device would show stale data until manually
// reloaded. A live listener fixes that: it fires immediately with whatever
// is in Firestore right now (serving as the initial load) and again every
// time the document changes on any device, for as long as this tab stays
// open and signed in.
function listenToFirestore(uid) {
  if (_unsubscribeFirestore) { _unsubscribeFirestore(); _unsubscribeFirestore = null; }
  const ref = window.firestoreDoc(window.firebaseDB, 'ansh_tracker', uid);
  return new Promise(resolve => {
    let settled = false;
    const done = () => { if (!settled) { settled = true; resolve(); } };
    _unsubscribeFirestore = window.firestoreOnSnapshot(ref, snap => {
      // Our own writes echo back through this same listener — first as an
      // optimistic local event (hasPendingWrites), then again once the
      // server confirms it. Both echoes carry the lastUpdated stamp we
      // just set ourselves, so skip re-applying state we already have;
      // only a genuinely different lastUpdated means another device wrote
      // something new.
      if (snap.metadata.hasPendingWrites) return done();
      if (snap.exists()) {
        const remote = snap.data();
        if (remote.lastUpdated !== STATE.lastUpdated) applyRemoteState(remote);
      }
      done();
    }, err => { console.warn('Firestore listen failed', err); done(); });
  });
}

function stopListeningToFirestore() {
  if (_unsubscribeFirestore) { _unsubscribeFirestore(); _unsubscribeFirestore = null; }
}

// ─── TRACK TOPICS DATA ─────────────────────────────────────────────────────

const TRACK_DEFS = {
  java: {
    name:'Java', color:'#e76f51', totalHours:226,
    groups:[
      {id:'java-a', name:'Part A · Language Foundations', hours:25, topics:[
        {id:'java-jvm-jre-jdk', name:'JVM vs JRE vs JDK — what each actually contains', h:0.5, p:'V.High'},
        {id:'java-compilation', name:'Compilation pipeline: javac → bytecode → JIT', h:0.75, p:'V.High'},
        {id:'java-classpath', name:'Classpath, class file structure, javap', h:0.75, p:'High'},
        {id:'java-primitive-types', name:'Primitive types, ranges, literals, underscores', h:0.5, p:'V.High'},
        {id:'java-casting', name:'Widening vs narrowing casts, integer overflow', h:0.5, p:'V.High'},
        {id:'java-autoboxing', name:'Autoboxing and unboxing — where the compiler inserts them', h:0.5, p:'V.High'},
        {id:'java-integer-cache', name:'Integer cache (-128..127) and the == comparison trap', h:0.5, p:'V.High'},
        {id:'java-operators', name:'Operators and precedence, ternary, bitwise', h:0.5, p:'Medium'},
        {id:'java-control-flow', name:'Control flow, labelled break and continue', h:0.5, p:'Medium'},
        {id:'java-switch-classic', name:'Classic switch statement and fallthrough', h:0.5, p:'Medium'},
        {id:'java-array-basics', name:'Array declaration, initialisation, default values', h:0.5, p:'High'},
        {id:'java-array-multi', name:'Multi-dimensional and jagged arrays', h:0.5, p:'High'},
        {id:'java-arrays-class', name:'Arrays utility class: sort, fill, copyOf, equals, deepEquals', h:1, p:'High'},
        {id:'java-constructors', name:'Classes, objects, constructors, constructor overloading', h:0.75, p:'V.High'},
        {id:'java-init-order', name:'Initialisation order: static blocks, instance blocks, constructor', h:0.75, p:'V.High'},
        {id:'java-this-super-chain', name:'this() and super() chaining rules', h:0.5, p:'V.High'},
        {id:'java-extends-override', name:'extends and method overriding rules', h:0.75, p:'V.High'},
        {id:'java-dynamic-dispatch', name:'Dynamic method dispatch — vtable intuition', h:1, p:'V.High'},
        {id:'java-covariant-returns', name:'Covariant return types', h:0.25, p:'High'},
        {id:'java-ctor-hierarchy', name:'Constructor chaining through a hierarchy', h:0.5, p:'V.High'},
        {id:'java-overload-resolution', name:'Overload resolution order: widening → boxing → varargs', h:1, p:'V.High'},
        {id:'java-hiding', name:'Overriding vs hiding — static methods and fields', h:1, p:'V.High'},
        {id:'java-access-modifiers', name:'Access modifiers: public, protected, default, private', h:0.75, p:'V.High'},
        {id:'java-encapsulation', name:'Encapsulation, getters/setters, JavaBeans convention', h:0.5, p:'V.High'},
        {id:'java-composition', name:'Composition over inheritance — when to prefer which', h:0.75, p:'V.High'},
        {id:'java-abstract-classes', name:'Abstract classes and when they beat interfaces', h:0.5, p:'V.High'},
        {id:'java-interfaces', name:'Interfaces and multiple inheritance of type', h:0.5, p:'V.High'},
        {id:'java-default-methods', name:'Default methods on interfaces', h:0.5, p:'V.High'},
        {id:'java-static-private-iface', name:'Static and private interface methods', h:0.5, p:'High'},
        {id:'java-diamond', name:'Diamond resolution rules for default methods', h:0.5, p:'V.High'},
        {id:'java-kw-static', name:'static — fields, methods, nested classes, init order', h:0.5, p:'V.High'},
        {id:'java-kw-final', name:'final — variable, method, class; effectively final', h:0.5, p:'V.High'},
        {id:'java-kw-this-super', name:'this and super — semantics and edge cases', h:0.5, p:'High'},
        {id:'java-kw-instanceof', name:'instanceof and pattern instanceof', h:0.5, p:'V.High'},
        {id:'java-object-core', name:'Object methods: toString, equals, hashCode', h:0.5, p:'V.High'},
        {id:'java-object-rest', name:'Object methods: clone, getClass, finalize (and why it died)', h:0.5, p:'High'},
        {id:'java-wrappers', name:'Wrapper classes, valueOf vs new, parsing', h:0.5, p:'V.High'},
        {id:'java-boxing-pitfalls', name:'Autoboxing pitfalls inside collections', h:0.5, p:'V.High'},
        {id:'java-enum-basics', name:'Enums: values, valueOf, ordinal, switch on enum', h:0.5, p:'High'},
        {id:'java-enum-advanced', name:'Enums with fields, constructors and abstract methods', h:0.5, p:'High'},
        {id:'java-enum-collections', name:'EnumMap and EnumSet', h:0.5, p:'High'},
        {id:'java-nested-classes', name:'Static nested vs inner classes', h:0.5, p:'High'},
        {id:'java-anon-local', name:'Local and anonymous classes', h:0.25, p:'Medium'},
        {id:'java-varargs', name:'varargs — syntax and ambiguity rules', h:0.25, p:'Medium'},
      ]},
      {id:'java-b', name:'Part B · Strings & Immutability', hours:5.5, topics:[
        {id:'java-string-pool', name:'String pool and interning', h:0.5, p:'V.High'},
        {id:'java-string-immutable', name:'String immutability — why, and what it buys', h:0.5, p:'V.High'},
        {id:'java-string-equality', name:'== vs equals for strings, and intern() in practice', h:0.5, p:'V.High'},
        {id:'java-stringbuilder', name:'StringBuilder vs StringBuffer — and the concat rewrite', h:0.75, p:'V.High'},
        {id:'java-compact-strings', name:'Compact strings (Java 9) — byte[] plus coder', h:0.5, p:'High'},
        {id:'java-string-methods', name:'String API: split, join, format, strip, lines, repeat', h:0.5, p:'High'},
        {id:'java-text-blocks', name:'Text blocks and incidental whitespace rules', h:0.25, p:'High'},
        {id:'java-immutable-design', name:'Designing an immutable class — the full checklist', h:1, p:'V.High'},
        {id:'java-defensive-copy', name:'Defensive copying on the way in and out', h:1, p:'V.High'},
      ]},
      {id:'java-c', name:'Part C · Exceptions', hours:6, topics:[
        {id:'java-exc-hierarchy', name:'Throwable hierarchy: Error, Exception, RuntimeException', h:0.5, p:'V.High'},
        {id:'java-checked-debate', name:'Checked vs unchecked — the design debate, and what to use', h:1, p:'V.High'},
        {id:'java-exc-basics', name:'try / catch / finally semantics', h:0.5, p:'V.High'},
        {id:'java-finally-return', name:'finally vs return — the interaction that surprises people', h:0.75, p:'V.High'},
        {id:'java-multi-catch', name:'Multi-catch and precise rethrow', h:0.5, p:'High'},
        {id:'java-try-with-resources', name:'try-with-resources and AutoCloseable', h:0.75, p:'V.High'},
        {id:'java-suppressed', name:'Suppressed exceptions and getSuppressed()', h:0.5, p:'High'},
        {id:'java-custom-exc', name:'Custom exceptions and exception-design best practice', h:0.75, p:'V.High'},
        {id:'java-stack-traces', name:'Stack traces, causes, and wrapping without losing context', h:0.75, p:'High'},
      ]},
      {id:'java-d', name:'Part D · Collections', hours:32, topics:[
        {id:'java-coll-hierarchy', name:'Collection → List / Set / Queue / Deque hierarchy', h:1, p:'V.High'},
        {id:'java-map-outside', name:'Why Map is not a Collection', h:0.5, p:'V.High'},
        {id:'java-arraylist-growth', name:'ArrayList: 1.5x growth factor and System.arraycopy on resize', h:1, p:'V.High'},
        {id:'java-arraylist-capacity', name:'ensureCapacity, trimToSize, and why they matter', h:0.75, p:'V.High'},
        {id:'java-linkedlist', name:'LinkedList internals — doubly linked nodes', h:0.5, p:'High'},
        {id:'java-cache-locality', name:'Pointer chasing vs cache locality — why LinkedList is usually the wrong answer', h:1, p:'V.High'},
        {id:'java-hashmap-buckets', name:'HashMap: bucket array, Node, and the index formula (n-1) & hash', h:1, p:'V.High'},
        {id:'java-hashmap-hash', name:'hash() spreading — XOR of high bits into low, and why', h:1, p:'V.High'},
        {id:'java-hashmap-pow2', name:'Why capacity must be a power of two', h:0.75, p:'V.High'},
        {id:'java-hashmap-loadfactor', name:'Load factor 0.75 — the space/collision trade-off', h:0.75, p:'V.High'},
        {id:'java-hashmap-resize', name:'Resize and rehash: cost, and the split into lo/hi lists', h:1.25, p:'V.High'},
        {id:'java-hashmap-treeify', name:'Treeification at 8 nodes, untreeify at 6, and the O(log n) bound', h:1.25, p:'V.High'},
        {id:'java-hashmap-java78', name:'The Java 7 → 8 rewrite and the concurrent-resize infinite loop it fixed', h:1, p:'V.High'},
        {id:'java-hashmap-threadsafe', name:'Why HashMap is still not thread-safe', h:0.5, p:'V.High'},
        {id:'java-linkedhashmap', name:'LinkedHashMap: insertion order vs access order', h:1, p:'V.High'},
        {id:'java-lru-cache', name:'removeEldestEntry — build an LRU cache', h:1.5, p:'V.High'},
        {id:'java-treemap-rbtree', name:'TreeMap and TreeSet on a red-black tree', h:1, p:'V.High'},
        {id:'java-navigablemap', name:'NavigableMap: floorKey, ceilingKey, headMap, subMap, descendingMap', h:1, p:'V.High'},
        {id:'java-treemap-nulls', name:'Why TreeMap rejects nulls and requires ordering', h:0.5, p:'V.High'},
        {id:'java-sets', name:'HashSet, LinkedHashSet, TreeSet — backing structures', h:1, p:'High'},
        {id:'java-arraydeque', name:'ArrayDeque — circular buffer, and why it beats Stack', h:1, p:'V.High'},
        {id:'java-priorityqueue', name:'PriorityQueue — binary heap, and its iteration order gotcha', h:1, p:'V.High'},
        {id:'java-equals-contract', name:'The equals contract: reflexive, symmetric, transitive, consistent', h:1, p:'V.High'},
        {id:'java-hashcode-contract', name:'The hashCode contract and both directions of the equals/hashCode rule', h:1, p:'V.High'},
        {id:'java-mutable-keys', name:'Mutable keys in a HashMap — the silent lookup failure', h:1, p:'V.High'},
        {id:'java-comparable', name:'Comparable and natural ordering', h:0.5, p:'V.High'},
        {id:'java-comparator', name:'Comparator, comparing/thenComparing/reversed', h:0.75, p:'V.High'},
        {id:'java-consistent-equals', name:'Consistent-with-equals — why TreeSet can disagree with equals', h:0.75, p:'V.High'},
        {id:'java-fail-fast', name:'Fail-fast iterators, modCount and ConcurrentModificationException', h:1, p:'V.High'},
        {id:'java-fail-safe', name:'Fail-safe iterators, and why CME is best-effort not guaranteed', h:0.75, p:'V.High'},
        {id:'java-safe-removal', name:'Removing during iteration: Iterator.remove and removeIf', h:0.75, p:'V.High'},
        {id:'java-list-of', name:'List.of — immutable, null-hostile', h:0.5, p:'V.High'},
        {id:'java-arrays-aslist', name:'Arrays.asList — a fixed-size view backed by the array', h:0.75, p:'V.High'},
        {id:'java-unmodifiable', name:'Collections.unmodifiableList — an unmodifiable view, not a copy', h:0.75, p:'V.High'},
        {id:'java-collections-util', name:'Collections utility: sort, binarySearch, reverse, shuffle', h:0.75, p:'High'},
        {id:'java-synchronized-views', name:'Collections.synchronizedX views and their iteration caveat', h:0.5, p:'High'},
        {id:'java-iterable', name:'Iterator, Iterable, ListIterator — and writing your own', h:1, p:'Medium'},
      ]},
      {id:'java-e', name:'Part E · Generics', hours:9.5, topics:[
        {id:'java-erasure', name:'Type erasure — what the compiler actually emits', h:1, p:'V.High'},
        {id:'java-erasure-consequences', name:'Consequences: no new T[], no runtime type checks', h:0.75, p:'V.High'},
        {id:'java-signature-clash', name:'Erased signature collisions', h:0.5, p:'High'},
        {id:'java-bounded-types', name:'Bounded type parameters (extends, multiple bounds)', h:0.75, p:'V.High'},
        {id:'java-wildcards', name:'Wildcards vs type parameters — when each applies', h:1, p:'V.High'},
        {id:'java-pecs', name:'PECS: Producer Extends, Consumer Super', h:1.25, p:'V.High'},
        {id:'java-collections-copy', name:'Deriving Collections.copy(List<? super T>, List<? extends T>) from first principles', h:1.25, p:'V.High'},
        {id:'java-invariance', name:'Generic invariance vs array covariance', h:1, p:'V.High'},
        {id:'java-arraystore', name:'Why ArrayStoreException exists', h:0.5, p:'V.High'},
        {id:'java-bridge-methods', name:'Bridge methods — what they are and when they appear', h:0.75, p:'High'},
        {id:'java-heap-pollution', name:'Heap pollution and @SafeVarargs', h:0.75, p:'High'},
      ]},
      {id:'java-f', name:'Part F · Lambdas & Functional Interfaces', hours:9.25, topics:[
        {id:'java-lambda-indy', name:'What a lambda compiles to: invokedynamic, not an anonymous class', h:1.25, p:'V.High'},
        {id:'java-lambda-metafactory', name:'LambdaMetafactory and lazily linked call sites', h:1, p:'V.High'},
        {id:'java-lambda-singleton', name:'Non-capturing lambdas cached as singletons; capturing ones are not', h:0.75, p:'V.High'},
        {id:'java-effectively-final', name:'Effectively-final capture — why mutable locals are refused', h:0.75, p:'V.High'},
        {id:'java-functional-iface', name:'@FunctionalInterface — the contract', h:0.5, p:'V.High'},
        {id:'java-builtin-fns', name:'Function, BiFunction, Supplier, Consumer, Predicate', h:0.75, p:'V.High'},
        {id:'java-operators-fn', name:'UnaryOperator and BinaryOperator', h:0.25, p:'High'},
        {id:'java-primitive-fns', name:'Primitive specializations (IntFunction, ToIntFunction, IntPredicate) and why', h:0.75, p:'High'},
        {id:'java-mref-static', name:'Method reference: static (Integer::parseInt)', h:0.5, p:'V.High'},
        {id:'java-mref-bound', name:'Method reference: bound instance (str::length)', h:0.5, p:'V.High'},
        {id:'java-mref-unbound', name:'Method reference: unbound instance (String::length) — the distinction', h:0.75, p:'V.High'},
        {id:'java-mref-ctor', name:'Method reference: constructor (ArrayList::new)', h:0.25, p:'V.High'},
        {id:'java-fn-compose', name:'Function.compose vs andThen', h:0.75, p:'High'},
        {id:'java-predicate-combine', name:'Predicate.and / or / negate', h:0.5, p:'High'},
      ]},
      {id:'java-g', name:'Part G · Streams & Optional', hours:26.5, topics:[
        {id:'java-stream-anatomy', name:'Pipeline anatomy: source → intermediate → terminal', h:0.75, p:'V.High'},
        {id:'java-stream-laziness', name:'Laziness — nothing runs until the terminal operation', h:1, p:'V.High'},
        {id:'java-stream-fusion', name:'Fusion of stateless ops into a single pass', h:0.75, p:'V.High'},
        {id:'java-short-circuit', name:'Short-circuiting: findFirst, anyMatch, limit', h:0.75, p:'V.High'},
        {id:'java-stateful-ops', name:'Stateless vs stateful intermediate operations', h:0.75, p:'V.High'},
        {id:'java-sorted-barrier', name:'sorted and distinct buffer the whole stream — sorted is a full barrier', h:1.25, p:'V.High'},
        {id:'java-collect-tolist', name:'Collectors.toList / toSet / toUnmodifiableList', h:0.5, p:'V.High'},
        {id:'java-collect-tomap', name:'Collectors.toMap, the duplicate-key IllegalStateException, and the merge overload', h:1, p:'V.High'},
        {id:'java-groupingby', name:'groupingBy — the basic form and the map factory', h:0.75, p:'V.High'},
        {id:'java-downstream-1', name:'Downstream collectors: counting, summingInt, averagingInt', h:0.75, p:'V.High'},
        {id:'java-downstream-2', name:'Downstream collectors: mapping, filtering, flatMapping', h:0.75, p:'V.High'},
        {id:'java-downstream-3', name:'Downstream collectors: reducing, collectingAndThen', h:0.75, p:'V.High'},
        {id:'java-nested-grouping', name:'Nested groupingBy for multi-level breakdowns', h:0.75, p:'V.High'},
        {id:'java-partitioningby', name:'partitioningBy — and why it is not just groupingBy on a boolean', h:0.5, p:'V.High'},
        {id:'java-teeing', name:'Collectors.teeing (Java 12+)', h:0.5, p:'High'},
        {id:'java-custom-collector', name:'Writing a Collector: supplier, accumulator, combiner, finisher', h:1.5, p:'V.High'},
        {id:'java-collector-chars', name:'Collector characteristics: CONCURRENT, UNORDERED, IDENTITY_FINISH', h:0.5, p:'High'},
        {id:'java-reduce-vs-collect', name:'reduce vs collect — and why string concat via reduce is O(n²)', h:1.25, p:'V.High'},
        {id:'java-reduce-3arg', name:'Three-arg reduce and the associativity requirement', h:1, p:'V.High'},
        {id:'java-parallel-basics', name:'Parallel streams and the common ForkJoinPool', h:1, p:'V.High'},
        {id:'java-parallel-when', name:'When parallel helps (large, CPU-bound, splittable) and when it hurts', h:1, p:'V.High'},
        {id:'java-parallel-io', name:'Blocking I/O in a parallel stream starves the common pool for the whole JVM', h:1, p:'V.High'},
        {id:'java-spliterator', name:'Spliterator and how source characteristics drive split quality', h:1, p:'High'},
        {id:'java-encounter-order', name:'Encounter order cost and unordered()', h:0.5, p:'High'},
        {id:'java-stream-single-use', name:'Streams are single-use', h:0.25, p:'V.High'},
        {id:'java-stream-side-effects', name:'Side effects in map/filter — and why peek is debugging only', h:0.75, p:'V.High'},
        {id:'java-flatmap', name:'flatMap and substream closing', h:0.75, p:'V.High'},
        {id:'java-primitive-streams', name:'IntStream, LongStream, DoubleStream, boxed, mapToObj', h:0.75, p:'High'},
        {id:'java-stream-generators', name:'Stream.iterate and Stream.generate with limit', h:0.5, p:'High'},
        {id:'java-takewhile', name:'takeWhile and dropWhile (Java 9), mapMulti (Java 16)', h:0.5, p:'High'},
        {id:'java-optional-design', name:'Optional as a return type — not a field, not a parameter', h:0.75, p:'V.High'},
        {id:'java-optional-api', name:'Optional: map, flatMap, filter, or, ifPresentOrElse', h:0.75, p:'V.High'},
        {id:'java-optional-orelse', name:'orElse vs orElseGet — eager vs lazy, a real bug source', h:0.75, p:'V.High'},
        {id:'java-optional-get', name:'Never get() without isPresent — prefer orElseThrow', h:0.5, p:'V.High'},
      ]},
      {id:'java-h', name:'Part H · Concurrency', hours:59.75, topics:[
        {id:'java-thread-lifecycle', name:'Thread lifecycle and states', h:0.75, p:'V.High'},
        {id:'java-runnable-callable', name:'Runnable vs Callable', h:0.5, p:'V.High'},
        {id:'java-daemon-join', name:'Daemon threads and join()', h:0.5, p:'V.High'},
        {id:'java-thread-stop', name:'Why Thread.stop, suspend and resume were deprecated', h:0.5, p:'V.High'},
        {id:'java-interrupt-protocol', name:'Interruption as a cooperative protocol: interrupt, isInterrupted, interrupted', h:1, p:'V.High'},
        {id:'java-interrupt-handling', name:'Handling InterruptedException — never swallow it, restore the flag', h:1, p:'V.High'},
        {id:'java-happens-before', name:'The Java Memory Model: happens-before relationships', h:1.5, p:'V.High'},
        {id:'java-visibility', name:'Visibility vs atomicity vs ordering — three separate problems', h:1.5, p:'V.High'},
        {id:'java-reordering', name:'Instruction reordering by compiler, JIT and CPU', h:1, p:'V.High'},
        {id:'java-volatile', name:'volatile semantics — visibility and ordering, not atomicity', h:1.25, p:'V.High'},
        {id:'java-volatile-increment', name:'Why count++ on a volatile is still broken', h:0.75, p:'V.High'},
        {id:'java-false-sharing', name:'False sharing and cache lines', h:1, p:'High'},
        {id:'java-dcl', name:'Double-checked locking and why it needs volatile', h:1, p:'V.High'},
        {id:'java-sync-monitor', name:'synchronized: the monitor, object vs class level', h:1, p:'V.High'},
        {id:'java-sync-reentrancy', name:'Reentrancy, and lock escalation (biased → lightweight → heavyweight)', h:1, p:'V.High'},
        {id:'java-wait-notify', name:'wait / notify / notifyAll and the monitor handshake', h:1, p:'V.High'},
        {id:'java-spurious-wakeup', name:'Always wait in a while loop — spurious wakeups', h:0.75, p:'V.High'},
        {id:'java-producer-consumer', name:'Producer-consumer by hand with wait/notify', h:1, p:'V.High'},
        {id:'java-reentrantlock', name:'ReentrantLock: tryLock, timed lock, lockInterruptibly', h:1.25, p:'V.High'},
        {id:'java-lock-fairness', name:'Lock fairness and its throughput cost', h:0.5, p:'High'},
        {id:'java-conditions', name:'Multiple Condition objects on one lock', h:0.75, p:'V.High'},
        {id:'java-rwlock', name:'ReadWriteLock — and its writer-starvation trap', h:1, p:'High'},
        {id:'java-stampedlock', name:'StampedLock and optimistic reads', h:1, p:'High'},
        {id:'java-deadlock', name:'Deadlock: the four conditions, and lock ordering as the fix', h:1.5, p:'V.High'},
        {id:'java-livelock', name:'Livelock and starvation', h:1, p:'V.High'},
        {id:'java-cas', name:'Compare-and-swap and the atomic classes', h:1.25, p:'V.High'},
        {id:'java-aba', name:'The ABA problem and AtomicStampedReference', h:1.25, p:'V.High'},
        {id:'java-longadder', name:'LongAdder vs AtomicLong — striping under contention', h:1, p:'High'},
        {id:'java-chm-structure', name:'ConcurrentHashMap: CAS on bin heads plus per-bin synchronized', h:1.5, p:'V.High'},
        {id:'java-chm-vs-java7', name:'Why it is no longer segment locking (the Java 7 design)', h:0.75, p:'V.High'},
        {id:'java-chm-atomic-ops', name:'compute, merge and computeIfAbsent atomicity', h:1.25, p:'V.High'},
        {id:'java-chm-recursive', name:'The recursive computeIfAbsent deadlock', h:0.75, p:'V.High'},
        {id:'java-cow-list', name:'CopyOnWriteArrayList and when the write cost is acceptable', h:1, p:'High'},
        {id:'java-skiplist', name:'ConcurrentSkipListMap for sorted concurrent access', h:1, p:'High'},
        {id:'java-bq-array-linked', name:'ArrayBlockingQueue vs LinkedBlockingQueue', h:1, p:'V.High'},
        {id:'java-bq-synchronous', name:'SynchronousQueue — the zero-capacity handoff', h:0.5, p:'V.High'},
        {id:'java-bq-delay-priority', name:'DelayQueue and PriorityBlockingQueue', h:1, p:'High'},
        {id:'java-tpe-params', name:'ThreadPoolExecutor: core size, max size, keep-alive, queue, factory, handler', h:1.5, p:'V.High'},
        {id:'java-tpe-queue-interaction', name:'The queue/maxPoolSize interaction — an unbounded queue means max is never reached', h:1.5, p:'V.High'},
        {id:'java-tpe-factories', name:'Why newFixedThreadPool and newCachedThreadPool are discouraged', h:1, p:'V.High'},
        {id:'java-tpe-rejection', name:'Rejection policies: Abort, CallerRuns, Discard, DiscardOldest', h:0.75, p:'V.High'},
        {id:'java-scheduled-executor', name:'ScheduledExecutorService — fixed rate vs fixed delay', h:0.75, p:'High'},
        {id:'java-executor-shutdown', name:'shutdown vs shutdownNow vs awaitTermination', h:1, p:'V.High'},
        {id:'java-future-limits', name:'Future and why its API is not enough', h:0.5, p:'V.High'},
        {id:'java-cf-supply', name:'CompletableFuture: supplyAsync and runAsync', h:0.75, p:'V.High'},
        {id:'java-cf-chaining', name:'thenApply vs thenCompose vs thenCombine', h:1.5, p:'V.High'},
        {id:'java-cf-combinators', name:'allOf and anyOf', h:0.75, p:'V.High'},
        {id:'java-cf-errors', name:'exceptionally, handle, whenComplete', h:1, p:'V.High'},
        {id:'java-cf-executors', name:'Which executor each stage runs on — the async-suffix distinction', h:1, p:'V.High'},
        {id:'java-countdownlatch', name:'CountDownLatch — one-shot', h:0.5, p:'V.High'},
        {id:'java-cyclicbarrier', name:'CyclicBarrier — reusable, with a barrier action', h:0.5, p:'V.High'},
        {id:'java-semaphore', name:'Semaphore — permits and bounded concurrency', h:0.5, p:'V.High'},
        {id:'java-phaser-exchanger', name:'Phaser and Exchanger', h:0.5, p:'High'},
        {id:'java-forkjoin', name:'ForkJoinPool and work-stealing', h:1, p:'High'},
        {id:'java-recursive-task', name:'RecursiveTask and RecursiveAction', h:1, p:'High'},
        {id:'java-threadlocal', name:'ThreadLocal — legitimate uses', h:0.75, p:'V.High'},
        {id:'java-threadlocal-leak', name:'The ThreadLocal memory leak in pooled threads', h:1, p:'V.High'},
        {id:'java-vt-model', name:'Virtual threads: carrier threads, mounting and unmounting', h:1.25, p:'V.High'},
        {id:'java-vt-why', name:'Why virtual threads make thread-per-request viable again', h:0.75, p:'V.High'},
        {id:'java-vt-pinning', name:'Pinning — synchronized blocks and native frames pin the carrier', h:1, p:'V.High'},
        {id:'java-vt-antipatterns', name:'Why pooling virtual threads is an anti-pattern; newVirtualThreadPerTaskExecutor', h:0.75, p:'V.High'},
        {id:'java-structured-conc', name:'Structured concurrency — check status for your target JDK', h:1, p:'High'},
        {id:'java-scoped-values', name:'Scoped values as a ThreadLocal replacement', h:1, p:'High'},
      ]},
      {id:'java-i', name:'Part I · JVM & Memory', hours:15.25, topics:[
        {id:'java-heap-generations', name:'Heap generations: eden, survivor, old', h:1, p:'High'},
        {id:'java-stack-vs-heap', name:'Stack vs heap allocation, frames and locals', h:0.75, p:'High'},
        {id:'java-escape-analysis', name:'Escape analysis and scalar replacement', h:0.75, p:'High'},
        {id:'java-gc-g1', name:'G1 — the default collector', h:1, p:'High'},
        {id:'java-gc-low-pause', name:'ZGC and Shenandoah — low-pause collectors', h:0.75, p:'High'},
        {id:'java-gc-parallel-serial', name:'Parallel and Serial collectors, and when they still fit', h:0.75, p:'High'},
        {id:'java-references', name:'Strong, soft, weak and phantom references', h:1, p:'High'},
        {id:'java-weakhashmap', name:'WeakHashMap — and where it actually helps', h:0.5, p:'High'},
        {id:'java-classloading', name:'Class loading and the parent-delegation model', h:1, p:'High'},
        {id:'java-classloader-custom', name:'Custom class loaders and where frameworks use them', h:1, p:'Medium'},
        {id:'java-oom-variants', name:'OutOfMemoryError variants and what each means', h:1, p:'V.High'},
        {id:'java-heap-dump', name:'Heap dumps and analysing a leak', h:1, p:'V.High'},
        {id:'java-thread-dump', name:'Thread dumps — reading a deadlock', h:1, p:'V.High'},
        {id:'java-jfr', name:'JDK Flight Recorder and jcmd', h:1, p:'V.High'},
        {id:'java-jit-tiers', name:'JIT and tiered compilation', h:1, p:'Medium'},
        {id:'java-jvm-flags', name:'JVM flags worth knowing (-Xms, -Xmx, GC selection)', h:1, p:'Medium'},
        {id:'java-cleaner', name:'Cleaner instead of finalizers', h:0.75, p:'Medium'},
      ]},
      {id:'java-j', name:'Part J · Modern Java 8 → 21+', hours:9.75, topics:[
        {id:'java-records', name:'Records: generated equals, hashCode, toString', h:0.75, p:'V.High'},
        {id:'java-records-compact', name:'Compact constructors and validation in records', h:0.75, p:'V.High'},
        {id:'java-sealed', name:'Sealed classes and interfaces, permits clauses', h:1, p:'V.High'},
        {id:'java-pattern-instanceof', name:'Pattern matching for instanceof', h:0.75, p:'V.High'},
        {id:'java-pattern-switch', name:'Pattern matching for switch, guards, exhaustiveness', h:1, p:'V.High'},
        {id:'java-record-patterns', name:'Record deconstruction patterns', h:0.75, p:'V.High'},
        {id:'java-switch-expressions', name:'Switch expressions and yield', h:0.75, p:'V.High'},
        {id:'java-text-blocks-2', name:'Text blocks in practice', h:0.25, p:'High'},
        {id:'java-var', name:'var — and when it hurts readability', h:0.5, p:'V.High'},
        {id:'java-helpful-npe', name:'Enhanced NullPointerException messages', h:0.25, p:'High'},
        {id:'java-jpms', name:'The module system (JPMS) conceptually', h:1, p:'Medium'},
        {id:'java-jpms-impact', name:'How JPMS affects reflection and classpath issues', h:1, p:'Medium'},
        {id:'java-api-roundup', name:'Java 9→21 API roundup: List.of, HttpClient, isBlank/strip/lines', h:1, p:'High'},
      ]},
      {id:'java-k', name:'Part K · I/O, Serialization & Reflection', hours:9.75, topics:[
        {id:'java-nio-path', name:'NIO.2: Path and Files', h:0.75, p:'High'},
        {id:'java-nio-streams', name:'Files.lines — a stream you must close; walk and find', h:0.75, p:'High'},
        {id:'java-io-classic', name:'Classic java.io streams and readers, decorators', h:0.75, p:'Medium'},
        {id:'java-buffers', name:'ByteBuffer: position, limit, capacity, flip', h:1, p:'Medium'},
        {id:'java-channels-mmap', name:'Channels and memory-mapped files', h:1, p:'Medium'},
        {id:'java-serialization', name:'Serialization mechanics: serialVersionUID, transient, readObject', h:1, p:'High'},
        {id:'java-serialization-bad', name:'Why serialization is considered a design mistake — prefer JSON/protobuf', h:1, p:'High'},
        {id:'java-reflection', name:'Reflection: Class, Method, Field, setAccessible', h:1, p:'High'},
        {id:'java-annotations', name:'Annotations and retention policies', h:0.75, p:'High'},
        {id:'java-annotation-processing', name:'How frameworks consume annotations at runtime', h:0.75, p:'High'},
        {id:'java-dynamic-proxies', name:'Dynamic proxies and how Spring AOP leans on them', h:1, p:'High'},
      ]},
      {id:'java-l', name:'Part L · Design & Quality', hours:12.25, topics:[
        {id:'java-srp', name:'SRP — Single Responsibility Principle', h:0.5, p:'V.High'},
        {id:'java-ocp', name:'OCP — Open/Closed Principle', h:0.5, p:'V.High'},
        {id:'java-lsp', name:'LSP — Liskov Substitution Principle', h:0.5, p:'V.High'},
        {id:'java-isp', name:'ISP — Interface Segregation Principle', h:0.5, p:'V.High'},
        {id:'java-dip', name:'DIP — Dependency Inversion Principle', h:0.5, p:'V.High'},
        {id:'java-singleton', name:'Singleton — four implementations and their trade-offs', h:0.75, p:'High'},
        {id:'java-factory', name:'Factory Method and Abstract Factory', h:0.75, p:'High'},
        {id:'java-builder', name:'Builder', h:0.5, p:'High'},
        {id:'java-adapter', name:'Adapter', h:0.5, p:'High'},
        {id:'java-decorator', name:'Decorator', h:0.5, p:'High'},
        {id:'java-proxy-pat', name:'Proxy', h:0.5, p:'High'},
        {id:'java-facade', name:'Facade', h:0.5, p:'High'},
        {id:'java-strategy', name:'Strategy', h:0.5, p:'High'},
        {id:'java-observer', name:'Observer', h:0.5, p:'High'},
        {id:'java-template', name:'Template Method', h:0.5, p:'High'},
        {id:'java-command', name:'Command', h:0.5, p:'High'},
        {id:'java-clean-code', name:'DRY, KISS, YAGNI and common code smells', h:0.75, p:'High'},
        {id:'java-refactoring', name:'Refactoring moves worth knowing by name', h:0.75, p:'High'},
        {id:'java-logging', name:'Logging: SLF4J, Logback, MDC, correlation IDs', h:1, p:'High'},
        {id:'java-maven', name:'Maven lifecycle and dependency resolution', h:0.75, p:'High'},
        {id:'java-gradle', name:'Gradle basics and when it beats Maven', h:0.5, p:'Medium'},
      ]},
      {id:'java-m', name:'Part M · Testing', hours:5.75, topics:[
        {id:'java-junit-lifecycle', name:'JUnit 5 lifecycle and annotations', h:0.75, p:'High'},
        {id:'java-junit-assertions', name:'Assertions, assertThrows, assumptions', h:0.5, p:'High'},
        {id:'java-junit-parameterized', name:'Parameterized and nested tests', h:0.75, p:'High'},
        {id:'java-mockito-basics', name:'Mockito: mock, stub, spy', h:0.75, p:'High'},
        {id:'java-mockito-verify', name:'verify, ArgumentCaptor, argument matchers', h:0.75, p:'High'},
        {id:'java-mockito-injection', name:'@Mock, @InjectMocks and their pitfalls', h:0.5, p:'High'},
        {id:'java-test-aaa', name:'Arrange-Act-Assert and test naming', h:0.5, p:'Medium'},
        {id:'java-tdd', name:'TDD basics — red, green, refactor', h:0.75, p:'Medium'},
        {id:'java-coverage', name:'JaCoCo coverage and what it does not tell you', h:0.5, p:'Medium'},
      ]},
    ]
  },

  spring: {
    name:'Spring', color:'#6a994e', totalHours:141, courseUrl:'https://www.durgasoftonline.com/s/courses/5ee5e2c60cf258afb2078619/take',
    groups:[
      {id:'sp-all', name:'Spring Framework Lectures (L1–L200)', hours:141.005, topics:[
        {id:'sp-l1', name:'L1 · Enterprise Architecture, 1/2/3-Tier (1 of 3)', h:0.333, p:'V.High'},
        {id:'sp-l2', name:'L2 · Enterprise Architecture, 1/2/3-Tier (2 of 3)', h:0.333, p:'V.High'},
        {id:'sp-l3', name:'L3 · Enterprise Architecture, 1/2/3-Tier (3 of 3)', h:0.333, p:'V.High'},
        {id:'sp-l4', name:'L4 · Model 1 vs Model 2', h:0.333, p:'V.High'},
        {id:'sp-l5', name:'L5 · MVC Architecture', h:0.333, p:'V.High'},
        {id:'sp-l6', name:'L6 · Framework comparison', h:0.333, p:'V.High'},
        {id:'sp-l7', name:'L7 · Spring history', h:0.333, p:'V.High'},
        {id:'sp-l8', name:'L8 · Modules', h:0.333, p:'V.High'},
        {id:'sp-l9', name:'L9 · App Development-1', h:0.333, p:'V.High'},
        {id:'sp-l10', name:'L10 · App Dev-2', h:0.667, p:'V.High'},
        {id:'sp-l11', name:'L11 · 3', h:0.667, p:'V.High'},
        {id:'sp-l12', name:'L12 · BeanFactory Resources', h:0.667, p:'V.High'},
        {id:'sp-l13', name:'L13 · ApplicationContext, BeanFactory vs ApplicationContext (1 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l14', name:'L14 · ApplicationContext, BeanFactory vs ApplicationContext (2 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l15', name:'L15 · ApplicationContext, BeanFactory vs ApplicationContext (3 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l16', name:'L16 · Beans + Scopes (singleton/prototype/request/session) (1 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l17', name:'L17 · Beans + Scopes (singleton/prototype/request/session) (2 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l18', name:'L18 · Beans + Scopes (singleton/prototype/request/session) (3 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l19', name:'L19 · Java Configurations', h:0.667, p:'V.High'},
        {id:'sp-l20', name:'L20 · Bean Lifecycle (init', h:0.667, p:'V.High'},
        {id:'sp-l21', name:'L21 · Destroy)', h:0.667, p:'V.High'},
        {id:'sp-l22', name:'L22 · Bean Lifecycle deep', h:0.667, p:'V.High'},
        {id:'sp-l23', name:'L23 · Inheritance', h:0.667, p:'V.High'},
        {id:'sp-l24', name:'L24 · BeanPostProcessor', h:0.667, p:'V.High'},
        {id:'sp-l25', name:'L25 · IoC + Constructor DI + Setter DI + List/Set/Map (1 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l26', name:'L26 · IoC + Constructor DI + Setter DI + List/Set/Map (2 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l27', name:'L27 · IoC + Constructor DI + Setter DI + List/Set/Map (3 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l28', name:'L28 · Circular DI', h:0.667, p:'V.High'},
        {id:'sp-l29', name:'L29 · Constructor vs Setter', h:0.667, p:'V.High'},
        {id:'sp-l30', name:'L30 · Namespaces', h:0.667, p:'V.High'},
        {id:'sp-l31', name:'L31 · C-Namespace + Autowiring + Bean Collaboration + XML autowiring (1 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l32', name:'L32 · C-Namespace + Autowiring + Bean Collaboration + XML autowiring (2 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l33', name:'L33 · C-Namespace + Autowiring + Bean Collaboration + XML autowiring (3 of 3)', h:0.667, p:'V.High'},
        {id:'sp-l34', name:'L34 · Annotation-Based Autowiring', h:1.0, p:'V.High'},
        {id:'sp-l35', name:'L35 · Autodiscovery-1 (@Component)', h:1.0, p:'V.High'},
        {id:'sp-l36', name:'L36 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations) (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l37', name:'L37 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations) (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l38', name:'L38 · Autodiscovery-4', h:1.0, p:'V.High'},
        {id:'sp-l39', name:'L39 · Java-Based Autowiring (@Configuration deep)', h:1.0, p:'V.High'},
        {id:'sp-l40', name:'L40 · Explicit Wiring vs Autowiring drawbacks', h:1.0, p:'High'},
        {id:'sp-l41', name:'L41 · Method Injection', h:1.0, p:'High'},
        {id:'sp-l42', name:'L42 · Method Replacement', h:1.0, p:'High'},
        {id:'sp-l43', name:'L43 · Bean Validations-1', h:1.0, p:'V.High'},
        {id:'sp-l44', name:'L44 · 2', h:1.0, p:'V.High'},
        {id:'sp-l45', name:'L45 · Bean Validations-3', h:1.0, p:'High'},
        {id:'sp-l46', name:'L46 · Event Handling', h:1.0, p:'High'},
        {id:'sp-l47', name:'L47 · Custom Event Handling', h:1.0, p:'High'},
        {id:'sp-l48', name:'L48 · Internationalization-1', h:1.0, p:'High'},
        {id:'sp-l49', name:'L49 · Internationalization-2', h:1.0, p:'Medium'},
        {id:'sp-l50', name:'L50 · Bean Manipulations & Wrappers-1', h:1.0, p:'Medium'},
        {id:'sp-l51', name:'L51 · Bean Wrappers-2', h:1.0, p:'Medium'},
        {id:'sp-l52', name:'L52 · Property Editors', h:1.0, p:'Medium'},
        {id:'sp-l53', name:'L53 · Profiling', h:1.0, p:'High'},
        {id:'sp-l54', name:'L54 · SpEL-1', h:1.0, p:'High'},
        {id:'sp-l55', name:'L55 · SpEL-2', h:1.0, p:'High'},
        {id:'sp-l56', name:'L56 · 3', h:1.0, p:'High'},
        {id:'sp-l57', name:'L57 · DAO Introduction', h:1.0, p:'V.High'},
        {id:'sp-l60', name:'L60 · Spring DAO Exceptions + Spring JDBC Intro (1 of 1)', h:1.0, p:'V.High'},
        {id:'sp-l61', name:'L61 · JdbcTemplate-1', h:1.0, p:'V.High'},
        {id:'sp-l62', name:'L62 · 2 (basic queries)', h:1.0, p:'V.High'},
        {id:'sp-l63', name:'L63 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper) (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l64', name:'L64 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper) (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l65', name:'L65 · Positional + Named Parameters (1 of 1)', h:1.0, p:'V.High'},
        {id:'sp-l66', name:'L66 · NamedParameterJdbcTemplate-1', h:1.0, p:'V.High'},
        {id:'sp-l67', name:'L67 · 2', h:1.0, p:'V.High'},
        {id:'sp-l73', name:'L73 · Batch Updates-1', h:1.0, p:'High'},
        {id:'sp-l74', name:'L74 · 2', h:1.0, p:'High'},
        {id:'sp-l75', name:'L75 · Stored Procedures and Functions-1', h:1.0, p:'High'},
        {id:'sp-l76', name:'L76 · 2', h:1.0, p:'High'},
        {id:'sp-l77', name:'L77 · Stored Procedures and Functions-3', h:1.0, p:'High'},
        {id:'sp-l78', name:'L78 · 4', h:1.0, p:'High'},
        {id:'sp-l79', name:'L79 · BLOB and CLOB-1', h:1.0, p:'Medium'},
        {id:'sp-l80', name:'L80 · BLOB and CLOB-2', h:1.0, p:'Medium'},
        {id:'sp-l81', name:'L81 · 3', h:1.0, p:'Medium'},
        {id:'sp-l82', name:'L82 · Connection Pooling-1,2 + HikariCP modern config (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l83', name:'L83 · Connection Pooling-1,2 + HikariCP modern config (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l84', name:'L84 · Connection Pooling-3', h:1.0, p:'High'},
        {id:'sp-l85', name:'L85 · 4', h:1.0, p:'High'},
        {id:'sp-l91', name:'L91 · AOP Introduction', h:1.0, p:'V.High'},
        {id:'sp-l92', name:'L92 · Terminology', h:1.0, p:'V.High'},
        {id:'sp-l93', name:'L93 · Advices', h:1.0, p:'V.High'},
        {id:'sp-l94', name:'L94 · Pointcuts', h:1.0, p:'V.High'},
        {id:'sp-l95', name:'L95 · MethodBeforeAdvice-1', h:1.0, p:'V.High'},
        {id:'sp-l96', name:'L96 · MethodBeforeAdvice-2', h:1.0, p:'V.High'},
        {id:'sp-l97', name:'L97 · AfterAdvice', h:1.0, p:'V.High'},
        {id:'sp-l98', name:'L98 · ThrowsAdvice', h:1.0, p:'V.High'},
        {id:'sp-l99', name:'L99 · AroundAdvice', h:1.0, p:'V.High'},
        {id:'sp-l100', name:'L100 · AspectJ Style AOP', h:1.0, p:'High'},
        {id:'sp-l101', name:'L101 · Declarative-1', h:1.0, p:'High'},
        {id:'sp-l102', name:'L102 · Declarative-2', h:1.0, p:'High'},
        {id:'sp-l103', name:'L103 · AspectJ Annotation Style-1', h:1.0, p:'High'},
        {id:'sp-l104', name:'L104 · AspectJ Annotation-2', h:1.0, p:'V.High'},
        {id:'sp-l105', name:'L105 · Transactions Intro', h:1.0, p:'V.High'},
        {id:'sp-l106', name:'L106 · ACID + Isolation + Transaction Support in Spring (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l107', name:'L107 · ACID + Isolation + Transaction Support in Spring (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l108', name:'L108 · Programmatic Transaction Management-1', h:1.0, p:'V.High'},
        {id:'sp-l109', name:'L109 · 2', h:1.0, p:'V.High'},
        {id:'sp-l110', name:'L110 · Declarative Tx with XML', h:1.0, p:'V.High'},
        {id:'sp-l111', name:'L111 · Annotations', h:1.0, p:'V.High'},
        {id:'sp-l112', name:'L112 · Hibernate Intro', h:1.0, p:'V.High'},
        {id:'sp-l113', name:'L113 · Application', h:1.0, p:'V.High'},
        {id:'sp-l114', name:'L114 · Spring-Hibernate Integration-1', h:1.0, p:'V.High'},
        {id:'sp-l115', name:'L115 · 2', h:1.0, p:'V.High'},
        {id:'sp-l116', name:'L116 · Spring-Hibernate Integration-3', h:1.0, p:'V.High'},
        {id:'sp-l117', name:'L117 · JPA Intro', h:1.0, p:'V.High'},
        {id:'sp-l118', name:'L118 · JPA Application', h:1.0, p:'V.High'},
        {id:'sp-l119', name:'L119 · Spring-JPA Integration', h:1.0, p:'V.High'},
        {id:'sp-l120', name:'L120 · Spring Web MVC Introduction-1', h:1.0, p:'V.High'},
        {id:'sp-l121', name:'L121 · 2', h:1.0, p:'V.High'},
        {id:'sp-l122', name:'L122 · MVC Elements + Flow + DispatcherServlet (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l123', name:'L123 · MVC Elements + Flow + DispatcherServlet (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l124', name:'L124 · HandlerMapping + Controller + ViewResolver basics (1 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l125', name:'L125 · HandlerMapping + Controller + ViewResolver basics (2 of 2)', h:1.0, p:'V.High'},
        {id:'sp-l126', name:'L126 · Spring MVC Application', h:1.0, p:'V.High'},
        {id:'sp-l127', name:'L127 · Internal Flow-1', h:1.0, p:'V.High'},
        {id:'sp-l128', name:'L128 · MVC Application-2,3 + Login Application (1 of 2)', h:1.0, p:'High'},
        {id:'sp-l129', name:'L129 · MVC Application-2,3 + Login Application (2 of 2)', h:1.0, p:'High'},
        {id:'sp-l130', name:'L130 · @SessionAttribute + @RequestParam + REST intro (1 of 1)', h:1.0, p:'High'},
        {id:'sp-l147', name:'L147 · BeanNameUrlHandlerMapping', h:1.0, p:'High'},
        {id:'sp-l148', name:'L148 · SimpleUrlHandlerMapping', h:1.0, p:'High'},
        {id:'sp-l149', name:'L149 · DefaultAnnotationHandlerMapping', h:1.0, p:'High'},
        {id:'sp-l150', name:'L150 · HandlerInterceptor-1', h:1.0, p:'High'},
        {id:'sp-l151', name:'L151 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource) (1 of 2)', h:1.0, p:'High'},
        {id:'sp-l152', name:'L152 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource) (2 of 2)', h:1.0, p:'High'},
        {id:'sp-l153', name:'L153 · XMLViewResolver', h:1.0, p:'V.High'},
        {id:'sp-l154', name:'L154 · Exception Handling (@ControllerAdvice)', h:1.0, p:'V.High'},
        {id:'sp-l155', name:'L155 · RFC 7807 + Global error handling supplement (1 of 1)', h:1.0, p:'V.High'},
        {id:'sp-l156', name:'L156 · File Uploading', h:1.0, p:'High'},
        {id:'sp-l157', name:'L157 · File Downloading', h:1.0, p:'High'},
        {id:'sp-l158', name:'L158 · Internationalization-1 + CORS configuration (1 of 1)', h:2.0, p:'High'},
        {id:'sp-l171', name:'L171 · Web Security Introduction', h:1.0, p:'V.High'},
        {id:'sp-l172', name:'L172 · Authentication Mechanisms-1', h:1.0, p:'V.High'},
        {id:'sp-l173', name:'L173 · Authentication Mechanisms-2', h:1.0, p:'V.High'},
        {id:'sp-l174', name:'L174 · 3', h:1.0, p:'V.High'},
        {id:'sp-l175', name:'L175 · Spring Security Models + Spring Security 6 architecture (1 of 1)', h:1.0, p:'V.High'},
        {id:'sp-l176', name:'L176 · Maven Introduction', h:1.0, p:'High'},
        {id:'sp-l177', name:'L177 · POM-1', h:1.0, p:'High'},
        {id:'sp-l178', name:'L178 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance) (1 of 2)', h:1.0, p:'High'},
        {id:'sp-l179', name:'L179 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance) (2 of 2)', h:1.0, p:'High'},
        {id:'sp-l180', name:'L180 · POM-4 (Build Configurations + Profiles) (1 of 1)', h:1.0, p:'High'},
        {id:'sp-l187', name:'L187 · Spring Boot Introduction', h:1.0, p:'V.High'},
        {id:'sp-l188', name:'L188 · Features', h:1.0, p:'V.High'},
        {id:'sp-l189-191', name:'L189+L191 · Boot with Eclipse + Initializr', h:2.0, p:'High'},
        {id:'sp-l192', name:'L192 · Postman', h:1.0, p:'High'},
        {id:'sp-l193', name:'L193 · User Forms Application', h:1.0, p:'High'},
        {id:'sp-l194', name:'L194 · Spring Boot with Spring JDBC-1', h:1.0, p:'V.High'},
        {id:'sp-l195', name:'L195 · 2', h:1.0, p:'V.High'},
        {id:'sp-l196', name:'L196 · Spring Boot with Spring JDBC-3', h:1.0, p:'V.High'},
        {id:'sp-l197', name:'L197 · 4', h:1.0, p:'V.High'},
        {id:'sp-l198', name:'L198 · Spring Data JDBC-1', h:1.0, p:'V.High'},
        {id:'sp-l199', name:'L199 · 2', h:1.0, p:'V.High'},
        {id:'sp-l200', name:'L200 · Spring Boot Actuator deep', h:2.0, p:'High'},
      ]},
    ]
  },

  sql: {
    name:'SQL / DB', color:'#a87fb8', totalHours:12.45, courseUrl:'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/learn/lecture/34511736#overview',
    groups:[
      {id:'sql-getting-started-and-installation', name:'Getting Started & Installation', hours:0.32, topics:[
        {id:'sql-getting-started-and-installation-1', name:'Section Introduction', h:0.0172, p:'V.High'},
        {id:'sql-getting-started-and-installation-2', name:'What Is A Database?', h:0.1211, p:'V.High'},
        {id:'sql-getting-started-and-installation-3', name:'SQL vs. MySQL', h:0.0972, p:'V.High'},
        {id:'sql-getting-started-and-installation-4', name:'Installation: START HERE!', h:0.0881, p:'V.High'}
      ]},
      {id:'sql-creating-databases-and-tables', name:'Creating Databases & Tables', hours:0.81, topics:[
        {id:'sql-creating-databases-and-tables-1', name:'Section Introduction', h:0.0192, p:'V.High'},
        {id:'sql-creating-databases-and-tables-2', name:'Showing Databases', h:0.0708, p:'V.High'},
        {id:'sql-creating-databases-and-tables-3', name:'Creating Databases', h:0.0819, p:'V.High'},
        {id:'sql-creating-databases-and-tables-4', name:'Dropping and Using Databases', h:0.0922, p:'V.High'},
        {id:'sql-creating-databases-and-tables-5', name:'Introducing Tables', h:0.0883, p:'V.High'},
        {id:'sql-creating-databases-and-tables-6', name:'Data Types: The Basics', h:0.1272, p:'V.High'},
        {id:'sql-creating-databases-and-tables-7', name:'Basic Datatypes Challenge', h:0.0431, p:'V.High'},
        {id:'sql-creating-databases-and-tables-8', name:'Creating Tables', h:0.0825, p:'V.High'},
        {id:'sql-creating-databases-and-tables-9', name:'How Do We Know It Worked?', h:0.0758, p:'V.High'},
        {id:'sql-creating-databases-and-tables-10', name:'Dropping Tables', h:0.0361, p:'V.High'},
        {id:'sql-creating-databases-and-tables-11', name:'Tables Basics Activity', h:0.0433, p:'V.High'},
        {id:'sql-creating-databases-and-tables-12', name:'MySQL Comments', h:0.0533, p:'V.High'}
      ]},
      {id:'sql-inserting-data', name:'Inserting Data', hours:0.89, topics:[
        {id:'sql-inserting-data-1', name:'Section Introduction', h:0.0278, p:'V.High'},
        {id:'sql-inserting-data-2', name:'INSERT: The Basics', h:0.0622, p:'V.High'},
        {id:'sql-inserting-data-3', name:'A Quick Preview of SELECT', h:0.0289, p:'V.High'},
        {id:'sql-inserting-data-4', name:'Multi-inserts', h:0.08, p:'V.High'},
        {id:'sql-inserting-data-5', name:'INSERT Exercise', h:0.0908, p:'V.High'},
        {id:'sql-inserting-data-6', name:'Working With NOT NULL', h:0.0944, p:'V.High'},
        {id:'sql-inserting-data-7', name:'Sidenote: Quotes In MySQL', h:0.0703, p:'V.High'},
        {id:'sql-inserting-data-8', name:'Adding DEFAULT Values', h:0.1086, p:'V.High'},
        {id:'sql-inserting-data-9', name:'Introducing Primary Keys', h:0.0825, p:'V.High'},
        {id:'sql-inserting-data-10', name:'Working With AUTO_INCREMENT', h:0.1203, p:'V.High'},
        {id:'sql-inserting-data-11', name:'Create Table/ Insert Exercise', h:0.1219, p:'V.High'}
      ]},
      {id:'sql-crud-basics', name:'CRUD Basics', hours:0.56, topics:[
        {id:'sql-crud-basics-1', name:'Section Introduction', h:0.025, p:'V.High'},
        {id:'sql-crud-basics-2', name:'Introducing CRUD', h:0.0308, p:'V.High'},
        {id:'sql-crud-basics-3', name:'Officially Introducing SELECT', h:0.0536, p:'V.High'},
        {id:'sql-crud-basics-4', name:'The WHERE clause', h:0.0589, p:'V.High'},
        {id:'sql-crud-basics-5', name:'Rapid Fire Exercises', h:0.0236, p:'V.High'},
        {id:'sql-crud-basics-6', name:'Rapid Fire Exercises SOLUTION', h:0.0486, p:'V.High'},
        {id:'sql-crud-basics-7', name:'Aliases', h:0.0369, p:'V.High'},
        {id:'sql-crud-basics-8', name:'Using UPDATE', h:0.09, p:'V.High'},
        {id:'sql-crud-basics-9', name:'A Quick Rule Of Thumb', h:0.0289, p:'V.High'},
        {id:'sql-crud-basics-10', name:'UPDATE Exercise', h:0.0178, p:'V.High'},
        {id:'sql-crud-basics-11', name:'UPDATE Exercise SOLUTION', h:0.0503, p:'V.High'},
        {id:'sql-crud-basics-12', name:'Introducing DELETE', h:0.0436, p:'V.High'},
        {id:'sql-crud-basics-13', name:'DELETE Exercise', h:0.0161, p:'V.High'},
        {id:'sql-crud-basics-14', name:'DELETE Exercise SOLUTION', h:0.0375, p:'V.High'}
      ]},
      {id:'sql-crud-challenge', name:'CRUD Challenge', hours:0.39, topics:[
        {id:'sql-crud-challenge-1', name:'Section Introduction', h:0.0311, p:'V.High'},
        {id:'sql-crud-challenge-2', name:'Introducing the CRUD Challenge', h:0.0864, p:'V.High'},
        {id:'sql-crud-challenge-3', name:'CRUD Challenge Solution: Creating', h:0.1353, p:'V.High'},
        {id:'sql-crud-challenge-4', name:'CRUD Challenge Solution: Reading', h:0.0283, p:'V.High'},
        {id:'sql-crud-challenge-5', name:'CRUD Challenge Solution: Updating', h:0.0567, p:'V.High'},
        {id:'sql-crud-challenge-6', name:'CRUD Challenge Solution: Deleting', h:0.0472, p:'V.High'}
      ]},
      {id:'sql-string-functions', name:'String Functions', hours:1.24, topics:[
        {id:'sql-string-functions-1', name:'Section Introduction', h:0.0344, p:'V.High'},
        {id:'sql-string-functions-2', name:'The World Of String Functions', h:0.0311, p:'V.High'},
        {id:'sql-string-functions-3', name:'Loading Our Books Data', h:0.0903, p:'V.High'},
        {id:'sql-string-functions-4', name:'CONCAT', h:0.1472, p:'V.High'},
        {id:'sql-string-functions-5', name:'SUBSTRING', h:0.1253, p:'V.High'},
        {id:'sql-string-functions-6', name:'Combining String Functions', h:0.1136, p:'V.High'},
        {id:'sql-string-functions-7', name:'Sidenote: SQL Formatting', h:0.0739, p:'V.High'},
        {id:'sql-string-functions-8', name:'REPLACE', h:0.0953, p:'V.High'},
        {id:'sql-string-functions-9', name:'REVERSE', h:0.0583, p:'V.High'},
        {id:'sql-string-functions-10', name:'CHAR_LENGTH', h:0.0472, p:'V.High'},
        {id:'sql-string-functions-11', name:'UPPER & LOWER', h:0.0633, p:'V.High'},
        {id:'sql-string-functions-12', name:'Other String Functions', h:0.1056, p:'V.High'},
        {id:'sql-string-functions-13', name:'String Functions Exercise', h:0.0619, p:'V.High'},
        {id:'sql-string-functions-14', name:'String Functions Exerise SOLUTION', h:0.1922, p:'V.High'}
      ]},
      {id:'sql-refining-selections', name:'Refining Selections', hours:0.9, topics:[
        {id:'sql-refining-selections-1', name:'Section Introduction', h:0.0097, p:'V.High'},
        {id:'sql-refining-selections-2', name:'Adding Some New Books', h:0.0239, p:'V.High'},
        {id:'sql-refining-selections-3', name:'DISTINCT', h:0.1033, p:'V.High'},
        {id:'sql-refining-selections-4', name:'ORDER BY', h:0.1103, p:'V.High'},
        {id:'sql-refining-selections-5', name:'More On ORDER BY', h:0.1053, p:'V.High'},
        {id:'sql-refining-selections-6', name:'LIMIT', h:0.0942, p:'V.High'},
        {id:'sql-refining-selections-7', name:'LIKE', h:0.1206, p:'V.High'},
        {id:'sql-refining-selections-8', name:'Escaping Wildcards', h:0.0342, p:'V.High'},
        {id:'sql-refining-selections-9', name:'Refining Selections Exercise', h:0.0514, p:'V.High'},
        {id:'sql-refining-selections-10', name:'Refining Selections Exercise SOLUTION', h:0.2444, p:'V.High'}
      ]},
      {id:'sql-aggregate-functions', name:'Aggregate Functions', hours:1.09, topics:[
        {id:'sql-aggregate-functions-1', name:'Section Introduction', h:0.0656, p:'V.High'},
        {id:'sql-aggregate-functions-2', name:'Count Basics', h:0.1258, p:'V.High'},
        {id:'sql-aggregate-functions-3', name:'GROUP BY', h:0.1697, p:'V.High'},
        {id:'sql-aggregate-functions-4', name:'MIN and MAX Basics', h:0.0625, p:'V.High'},
        {id:'sql-aggregate-functions-5', name:'Subqueries', h:0.1069, p:'V.High'},
        {id:'sql-aggregate-functions-6', name:'Grouping By Multiple Columns', h:0.0797, p:'V.High'},
        {id:'sql-aggregate-functions-7', name:'MIN and MAX With GROUP BY', h:0.0972, p:'V.High'},
        {id:'sql-aggregate-functions-8', name:'SUM', h:0.0625, p:'V.High'},
        {id:'sql-aggregate-functions-9', name:'AVG', h:0.0397, p:'V.High'},
        {id:'sql-aggregate-functions-10', name:'Aggregate Functions Docs', h:0.0214, p:'V.High'},
        {id:'sql-aggregate-functions-11', name:'Agg Functions Exercise', h:0.0475, p:'V.High'},
        {id:'sql-aggregate-functions-12', name:'Agg Functions Exercise SOLUTION', h:0.2097, p:'V.High'}
      ]},
      {id:'sql-revisiting-data-types', name:'Revisiting Data Types', hours:1.77, topics:[
        {id:'sql-revisiting-data-types-1', name:'Section Introduction', h:0.0322, p:'V.High'},
        {id:'sql-revisiting-data-types-2', name:'Surveying Other Data Types', h:0.0478, p:'V.High'},
        {id:'sql-revisiting-data-types-3', name:'CHAR vs. VARCHAR', h:0.2014, p:'V.High'},
        {id:'sql-revisiting-data-types-4', name:'INT, TINYINT, BIGINT, etc.', h:0.0836, p:'V.High'},
        {id:'sql-revisiting-data-types-5', name:'DECIMAL', h:0.1153, p:'V.High'},
        {id:'sql-revisiting-data-types-6', name:'FLOAT & DOUBLE', h:0.0919, p:'V.High'},
        {id:'sql-revisiting-data-types-7', name:'DATE and TIME', h:0.0769, p:'V.High'},
        {id:'sql-revisiting-data-types-8', name:'Working With Dates', h:0.1275, p:'V.High'},
        {id:'sql-revisiting-data-types-9', name:'CURDATE, CURTIME, & NOW', h:0.0708, p:'V.High'},
        {id:'sql-revisiting-data-types-10', name:'Date Functions', h:0.1008, p:'V.High'},
        {id:'sql-revisiting-data-types-11', name:'Time Functions', h:0.0342, p:'V.High'},
        {id:'sql-revisiting-data-types-12', name:'Formatting Dates', h:0.1536, p:'V.High'},
        {id:'sql-revisiting-data-types-13', name:'Date Math', h:0.1783, p:'V.High'},
        {id:'sql-revisiting-data-types-14', name:'TIMESTAMPS', h:0.0578, p:'V.High'},
        {id:'sql-revisiting-data-types-15', name:'DEFAULT & ON UPDATE TIMESTAMPS', h:0.1161, p:'V.High'},
        {id:'sql-revisiting-data-types-16', name:'Data Types Exercise', h:0.06, p:'V.High'},
        {id:'sql-revisiting-data-types-17', name:'Data Types Exercise SOLUTION', h:0.2211, p:'V.High'}
      ]},
      {id:'sql-comparison-and-logical-operators', name:'Comparison & Logical Operators', hours:1.36, topics:[
        {id:'sql-comparison-and-logical-operators-1', name:'Section Introduction', h:0.0456, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-2', name:'Not Equal', h:0.0489, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-3', name:'NOT LIKE', h:0.0558, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-4', name:'Greater Than', h:0.0656, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-5', name:'Less Than Or Equal To', h:0.0492, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-6', name:'Logical AND', h:0.1481, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-7', name:'Logical OR', h:0.0939, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-8', name:'Between', h:0.0797, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-9', name:'Comparing Dates', h:0.1375, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-10', name:'The IN Operator', h:0.1411, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-11', name:'CASE', h:0.1461, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-12', name:'IS NULL', h:0.0342, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-13', name:'Exercise', h:0.0569, p:'V.High'},
        {id:'sql-comparison-and-logical-operators-14', name:'Exercise SOLUTION', h:0.2561, p:'V.High'}
      ]},
      {id:'sql-constraints-and-alter-table', name:'Constraints & ALTER TABLE', hours:0.63, topics:[
        {id:'sql-constraints-and-alter-table-1', name:'UNIQUE Constraint', h:0.0619, p:'V.High'},
        {id:'sql-constraints-and-alter-table-2', name:'CHECK Constraints', h:0.0828, p:'V.High'},
        {id:'sql-constraints-and-alter-table-3', name:'Named Constraints', h:0.0703, p:'V.High'},
        {id:'sql-constraints-and-alter-table-4', name:'Multiple Column Constraints', h:0.0889, p:'V.High'},
        {id:'sql-constraints-and-alter-table-5', name:'ALTER TABLE: Adding Columns', h:0.0939, p:'V.High'},
        {id:'sql-constraints-and-alter-table-6', name:'ALTER TABLE: Dropping Columns', h:0.0317, p:'V.High'},
        {id:'sql-constraints-and-alter-table-7', name:'ALTER TABLE: Renaming', h:0.0619, p:'V.High'},
        {id:'sql-constraints-and-alter-table-8', name:'ALTER TABLE: Modifying Columns', h:0.0653, p:'V.High'},
        {id:'sql-constraints-and-alter-table-9', name:'ALTER TABLE: Constraints', h:0.07, p:'V.High'}
      ]},
      {id:'sql-one-to-many-and-joins', name:'One to Many & Joins', hours:1.61, topics:[
        {id:'sql-one-to-many-and-joins-1', name:'Section Introduction', h:0.0325, p:'V.High'},
        {id:'sql-one-to-many-and-joins-2', name:'Data is Messy', h:0.1744, p:'V.High'},
        {id:'sql-one-to-many-and-joins-3', name:'Relationships Basics', h:0.0767, p:'V.High'},
        {id:'sql-one-to-many-and-joins-4', name:'One to Many Relationship', h:0.2092, p:'V.High'},
        {id:'sql-one-to-many-and-joins-5', name:'Working with FOREIGN KEY', h:0.1853, p:'V.High'},
        {id:'sql-one-to-many-and-joins-6', name:'Cross Joins', h:0.1331, p:'V.High'},
        {id:'sql-one-to-many-and-joins-7', name:'Inner Joins', h:0.1478, p:'V.High'},
        {id:'sql-one-to-many-and-joins-8', name:'Inner Joins With Group By', h:0.0814, p:'V.High'},
        {id:'sql-one-to-many-and-joins-9', name:'Left Join', h:0.1181, p:'V.High'},
        {id:'sql-one-to-many-and-joins-10', name:'Left Join With Group By', h:0.0597, p:'V.High'},
        {id:'sql-one-to-many-and-joins-11', name:'Right Join', h:0.0744, p:'V.High'},
        {id:'sql-one-to-many-and-joins-12', name:'On Delete Cascade', h:0.0933, p:'V.High'},
        {id:'sql-one-to-many-and-joins-13', name:'Joins Exercise', h:0.0503, p:'V.High'},
        {id:'sql-one-to-many-and-joins-14', name:'Joins Exercise SOLUTION', h:0.1783, p:'V.High'}
      ]},
      {id:'sql-many-to-many', name:'Many to Many', hours:0.88, topics:[
        {id:'sql-many-to-many-1', name:'Many to Many — full section (course video)', h:0.8833, p:'V.High'}
      ]},
    ]
  },

  sd: {
    name:'System Design', color:'#e9c46a', totalHours:39.08, courseUrl:'https://interviewready.io/course-page/system-design-course',
    groups:[
      {id:'sd-basics-intro', name:'Basics · How Do I Use This Course?', hours:0.054, topics:[
        {id:'sd-basics-intro-1', name:'What do we offer?', h:0.0539, p:'V.High'}
      ]},
      {id:'sd-basics-ecommerce', name:'Basics · Building an Ecommerce App: 1 to 1M', hours:2.254, topics:[
        {id:'sd-basics-ecommerce-1', name:'#1: What is System Design?', h:0.1386, p:'V.High'},
        {id:'sd-basics-ecommerce-2', name:'#2: A star-tup is born!', h:0.0731, p:'V.High'},
        {id:'sd-basics-ecommerce-3', name:'#3: Where are the pages?', h:0.1611, p:'V.High'},
        {id:'sd-basics-ecommerce-4', name:'#4: Debugging in the trenches', h:0.1236, p:'V.High'},
        {id:'sd-basics-ecommerce-5', name:'#4.1: Hard questions, harder answers', h:0.1175, p:'V.High'},
        {id:'sd-basics-ecommerce-6', name:'#5: Serverless or Server-More?', h:0.2483, p:'V.High'},
        {id:'sd-basics-ecommerce-7', name:'#6: Database-like Memory, Cache-like Recall', h:0.3208, p:'V.High'},
        {id:'sd-basics-ecommerce-8', name:'#7: The case of the Expensive Cache', h:0.2281, p:'V.High'},
        {id:'sd-basics-ecommerce-9', name:'#8: Sale Day Jitters', h:0.4028, p:'V.High'},
        {id:'sd-basics-ecommerce-10', name:'#9: A new CTO is born!', h:0.2772, p:'V.High'},
        {id:'sd-basics-ecommerce-11', name:'#10: Concluding the series!', h:0.1625, p:'V.High'}
      ]},
      {id:'sd-concepts-db', name:'Concepts · Databases Deep Dive', hours:0.265, topics:[
        {id:'sd-concepts-db-1', name:'What are Databases?', h:0.0775, p:'V.High'},
        {id:'sd-concepts-db-2', name:'Storage and Retrieval', h:0.0733, p:'V.High'},
        {id:'sd-concepts-db-3', name:'What is a NoSQL database?', h:0.04, p:'V.High'},
        {id:'sd-concepts-db-4', name:'Types of Databases: Graph, TimeSeries and Object', h:0.0375, p:'V.High'},
        {id:'sd-concepts-db-5', name:'What database should you choose?', h:0.0367, p:'V.High'}
      ]},
      {id:'sd-concepts-consistency', name:'Concepts · Consistency in Distributed Systems', hours:0.639, topics:[
        {id:'sd-concepts-consistency-1', name:'What is Data Consistency?', h:0.025, p:'V.High'},
        {id:'sd-concepts-consistency-2', name:'Linearizable Consistency', h:0.0536, p:'V.High'},
        {id:'sd-concepts-consistency-3', name:'Eventual Consistency', h:0.0306, p:'V.High'},
        {id:'sd-concepts-consistency-4', name:'Causal Consistency', h:0.0764, p:'V.High'},
        {id:'sd-concepts-consistency-5', name:'Quorum', h:0.1081, p:'V.High'},
        {id:'sd-concepts-consistency-6', name:'Data Consistency Levels Tradeoffs', h:0.0333, p:'V.High'},
        {id:'sd-concepts-consistency-7', name:'Transaction Isolation Levels - Read Uncommitted Data', h:0.0533, p:'V.High'},
        {id:'sd-concepts-consistency-8', name:'Read Committed', h:0.0622, p:'V.High'},
        {id:'sd-concepts-consistency-9', name:'Repeatable Reads', h:0.0889, p:'V.High'},
        {id:'sd-concepts-consistency-10', name:'Serializable Isolation Level', h:0.0333, p:'V.High'},
        {id:'sd-concepts-consistency-11', name:'Transaction Level Implementations', h:0.0606, p:'V.High'},
        {id:'sd-concepts-consistency-12', name:'Conclusion - Transaction Isolation', h:0.0142, p:'V.High'}
      ]},
      {id:'sd-concepts-caches', name:'Concepts · Caches Deep Dive', hours:0.552, topics:[
        {id:'sd-concepts-caches-1', name:'Caching: Basics', h:0.19, p:'V.High'},
        {id:'sd-concepts-caches-2', name:'Write Policies: Write Back Policy', h:0.0764, p:'V.High'},
        {id:'sd-concepts-caches-3', name:'Write Through Policy', h:0.0425, p:'V.High'},
        {id:'sd-concepts-caches-4', name:'Write Around Policy', h:0.0564, p:'V.High'},
        {id:'sd-concepts-caches-5', name:'Replacement Policies: LRU, LFU and Segmented LRU', h:0.1872, p:'V.High'}
      ]},
      {id:'sd-concepts-networks', name:'Concepts · Networks Deep Dive', hours:0.948, topics:[
        {id:'sd-concepts-networks-1', name:'Breakdown: The physical layer', h:0.0494, p:'V.High'},
        {id:'sd-concepts-networks-2', name:'Breakdown: The Routing Layer', h:0.0556, p:'V.High'},
        {id:'sd-concepts-networks-3', name:'Breakdown: The behavioral layer', h:0.0775, p:'V.High'},
        {id:'sd-concepts-networks-4', name:'Connecting to the internet: ISPs, DNS and everything in between', h:0.1247, p:'V.High'},
        {id:'sd-concepts-networks-5', name:'Internal routing: MAC addresses and NAT', h:0.1147, p:'V.High'},
        {id:'sd-concepts-networks-6', name:'HTTP, WebSockets, TCP and UDP', h:0.1475, p:'V.High'},
        {id:'sd-concepts-networks-7', name:'Communication Standards: REST, GraphQL and GRPC', h:0.1214, p:'V.High'},
        {id:'sd-concepts-networks-8', name:'Head of line blocking', h:0.0878, p:'V.High'},
        {id:'sd-concepts-networks-9', name:'Video transmission: WebRTC and HTTP-DASH', h:0.1692, p:'V.High'}
      ]},
      {id:'sd-concepts-replication', name:'Concepts · Database Replication and Migration', hours:0.676, topics:[
        {id:'sd-concepts-replication-1', name:'Primary Replica Architectures', h:0.0517, p:'V.High'},
        {id:'sd-concepts-replication-2', name:'WAL and Change Data Capture', h:0.0669, p:'V.High'},
        {id:'sd-concepts-replication-3', name:'Write Amplification and Split Brain', h:0.0675, p:'V.High'},
        {id:'sd-concepts-replication-4', name:'Database Migrations', h:0.1697, p:'V.High'},
        {id:'sd-concepts-replication-5', name:'Migrating the Database', h:0.1303, p:'V.High'},
        {id:'sd-concepts-replication-6', name:'Migration Across Regions', h:0.1897, p:'V.High'}
      ]},
      {id:'sd-concepts-security', name:'Concepts · Security in Distributed Systems', hours:0.594, topics:[
        {id:'sd-concepts-security-1', name:'Security aspects in distributed systems', h:0.0625, p:'V.High'},
        {id:'sd-concepts-security-2', name:'Token Based Auth', h:0.1528, p:'V.High'},
        {id:'sd-concepts-security-3', name:'SSO and OAuth', h:0.0836, p:'V.High'},
        {id:'sd-concepts-security-4', name:'Access Control Lists and Rule Engines', h:0.1056, p:'V.High'},
        {id:'sd-concepts-security-5', name:'Attack Vectors - Hackers, Developers and Code', h:0.0811, p:'V.High'},
        {id:'sd-concepts-security-6', name:'How videos are protected inside CDNs', h:0.1086, p:'V.High'}
      ]},
      {id:'sd-concepts-observability', name:'Concepts · Observability in Distributed Systems', hours:0.275, topics:[
        {id:'sd-concepts-observability-1', name:'Introduction to Observability', h:0.0167, p:'V.High'},
        {id:'sd-concepts-observability-2', name:'Logging - Best Practices', h:0.0358, p:'V.High'},
        {id:'sd-concepts-observability-3', name:'Monitoring Metrics', h:0.0239, p:'V.High'},
        {id:'sd-concepts-observability-4', name:'Anomaly Detection: Holt-Winters Algorithm', h:0.12, p:'V.High'},
        {id:'sd-concepts-observability-5', name:'Root Cause Analysis', h:0.0689, p:'V.High'},
        {id:'sd-concepts-observability-6', name:'Conclusion to Observability', h:0.01, p:'V.High'}
      ]},
      {id:'sd-concepts-paxos', name:'Concepts · Distributed Consensus with Paxos', hours:0.451, topics:[
        {id:'sd-concepts-paxos-1', name:'The Problem of Distributed Consensus', h:0.0911, p:'V.High'},
        {id:'sd-concepts-paxos-2', name:'Basic Algorithm', h:0.1294, p:'V.High'},
        {id:'sd-concepts-paxos-3', name:'Improving the algorithm', h:0.0492, p:'V.High'},
        {id:'sd-concepts-paxos-4', name:'Termination Conditions', h:0.1211, p:'V.High'},
        {id:'sd-concepts-paxos-5', name:'Practical Considerations', h:0.06, p:'V.High'}
      ]},
      {id:'sd-concepts-ratelimit', name:'Concepts · Distributed Rate Limiting', hours:0.46, topics:[
        {id:'sd-concepts-ratelimit-1', name:'The Oracle and the Timer Wheel', h:0.265, p:'V.High'},
        {id:'sd-concepts-ratelimit-2', name:'Partitioning and Real-life Optimisations', h:0.1953, p:'V.High'}
      ]},
      {id:'sd-concepts-tradeoffs', name:'Concepts · System Design Tradeoffs', hours:0.848, topics:[
        {id:'sd-concepts-tradeoffs-1', name:'Introduction to design tradeoffs', h:0.0661, p:'V.High'},
        {id:'sd-concepts-tradeoffs-2', name:'Pull vs. Push Architectures', h:0.2056, p:'V.High'},
        {id:'sd-concepts-tradeoffs-3', name:'Memory vs. Latency', h:0.0286, p:'V.High'},
        {id:'sd-concepts-tradeoffs-4', name:'Throughput vs. Latency', h:0.1447, p:'V.High'},
        {id:'sd-concepts-tradeoffs-5', name:'Consistency vs. Availability', h:0.0969, p:'V.High'},
        {id:'sd-concepts-tradeoffs-6', name:'Latency vs. Accuracy', h:0.1094, p:'V.High'},
        {id:'sd-concepts-tradeoffs-7', name:'SQL vs. NoSQL databases', h:0.0967, p:'V.High'},
        {id:'sd-concepts-tradeoffs-8', name:'Relations Between Tradeoffs', h:0.1003, p:'V.High'}
      ]},
      {id:'sd-hld-gmail', name:'High Level Design · Design an Emailing Service like Gmail', hours:0.768, topics:[
        {id:'sd-hld-gmail-1', name:'Scope and Requirement setting', h:0.0058, p:'V.High'},
        {id:'sd-hld-gmail-2', name:'Chapter #1: Service Registration and Proxies', h:0.2419, p:'V.High'},
        {id:'sd-hld-gmail-3', name:'Chapter #2: Authentication & Global Caching', h:0.1575, p:'V.High'},
        {id:'sd-hld-gmail-4', name:'Chapter #3: API contracts & Versioning', h:0.1567, p:'V.High'},
        {id:'sd-hld-gmail-5', name:'Chapter #4: Sending, Tagging & Searching Emails', h:0.0847, p:'V.High'},
        {id:'sd-hld-gmail-6', name:'Chapter #5: Contacts & Groups', h:0.1217, p:'V.High'}
      ]},
      {id:'sd-hld-chess', name:'High Level Design · Chess Design: A Highly Scalable Turn-Based Gaming Website', hours:0.758, topics:[
        {id:'sd-hld-chess-1', name:'Requirements of a chess website', h:0.1936, p:'V.High'},
        {id:'sd-hld-chess-2', name:'Handling connections at scale', h:0.2317, p:'V.High'},
        {id:'sd-hld-chess-3', name:'Consistent Hashing vs. Sharding', h:0.1706, p:'V.High'},
        {id:'sd-hld-chess-4', name:'Connection related thundering herds', h:0.075, p:'V.High'},
        {id:'sd-hld-chess-5', name:'Request Batching and Conclusion', h:0.0872, p:'V.High'}
      ]},
      {id:'sd-hld-hotstar', name:'High Level Design · Hotstar: Live Video Streaming Design', hours:0.427, topics:[
        {id:'sd-hld-hotstar-1', name:'Live Streaming Requirement Breakdown', h:0.0881, p:'V.High'},
        {id:'sd-hld-hotstar-2', name:'Video Ingestion and Transformation', h:0.0856, p:'V.High'},
        {id:'sd-hld-hotstar-3', name:'Transferring processed videos to end users', h:0.1319, p:'V.High'},
        {id:'sd-hld-hotstar-4', name:'Virtual Advertising for live sports events', h:0.1219, p:'V.High'}
      ]},
      {id:'sd-hld-google-docs', name:'High Level Design · Google Docs: Collaborative Editor Design', hours:0.81, topics:[
        {id:'sd-hld-google-docs-1', name:'Google Docs Requirements', h:0.0978, p:'V.High'},
        {id:'sd-hld-google-docs-2', name:'Document Schema', h:0.0947, p:'V.High'},
        {id:'sd-hld-google-docs-3', name:'Storing Documents', h:0.0528, p:'V.High'},
        {id:'sd-hld-google-docs-4', name:'Version History', h:0.0928, p:'V.High'},
        {id:'sd-hld-google-docs-5', name:'Avoiding Thundering Herds in Crons', h:0.0531, p:'V.High'},
        {id:'sd-hld-google-docs-6', name:'Compression and Caching', h:0.0464, p:'V.High'},
        {id:'sd-hld-google-docs-7', name:'Concurrent Writes with Locks', h:0.1389, p:'V.High'},
        {id:'sd-hld-google-docs-8', name:'Operational Transform Overview', h:0.1297, p:'V.High'},
        {id:'sd-hld-google-docs-9', name:'Permission Management', h:0.1039, p:'V.High'}
      ]},
      {id:'sd-hld-uber', name:'High Level Design · Design a Cab Aggregator App like Uber', hours:0.779, topics:[
        {id:'sd-hld-uber-1', name:'Requirements of a cab aggregator', h:0.1117, p:'V.High'},
        {id:'sd-hld-uber-2', name:'Static Pricing of Rides', h:0.145, p:'V.High'},
        {id:'sd-hld-uber-3', name:'Ride Matching', h:0.1511, p:'V.High'},
        {id:'sd-hld-uber-4', name:'Calculating Estimated Time of Arrival', h:0.2069, p:'V.High'},
        {id:'sd-hld-uber-5', name:'Matching Drivers with Live Rides', h:0.1644, p:'V.High'}
      ]},
      {id:'sd-hld-maps', name:'High Level Design · Design a Location Based Service like Google Maps', hours:0.897, topics:[
        {id:'sd-hld-maps-1', name:'Requirements of a Map application', h:0.1361, p:'V.High'},
        {id:'sd-hld-maps-2', name:'Routing Challenges in Maps', h:0.1128, p:'V.High'},
        {id:'sd-hld-maps-3', name:'Partitioning Algorithm: Splitting the graph into regions', h:0.0864, p:'V.High'},
        {id:'sd-hld-maps-4', name:'Finding the shortest path - A* search', h:0.1272, p:'V.High'},
        {id:'sd-hld-maps-5', name:'GeoHash and other proximity filters', h:0.1069, p:'V.High'},
        {id:'sd-hld-maps-6', name:'Detecting traffic jams and broadcasting updates', h:0.1625, p:'V.High'},
        {id:'sd-hld-maps-7', name:'Calculating an accurate and efficient estimated time of arrival', h:0.1653, p:'V.High'}
      ]},
      {id:'sd-hld-whatsapp-calling', name:'High Level Design · WhatsApp Calling App', hours:0.581, topics:[
        {id:'sd-hld-whatsapp-calling-1', name:'Calling App Design', h:0.2367, p:'V.High'},
        {id:'sd-hld-whatsapp-calling-2', name:'Concept #1: Breaking calls into dialogs', h:0.1161, p:'V.High'},
        {id:'sd-hld-whatsapp-calling-3', name:'Concept #2: The state machine', h:0.0561, p:'V.High'},
        {id:'sd-hld-whatsapp-calling-4', name:'Concept #3: Charging Users', h:0.0675, p:'V.High'},
        {id:'sd-hld-whatsapp-calling-5', name:'Concept #4: Consistent Hashing for caching call state', h:0.105, p:'V.High'}
      ]},
      {id:'sd-hld-recommendation', name:'High Level Design · Recommendation Engine Design', hours:0.354, topics:[
        {id:'sd-hld-recommendation-1', name:'Converting data sources to a lake', h:0.1008, p:'V.High'},
        {id:'sd-hld-recommendation-2', name:'The Map Reduce Architecture', h:0.0589, p:'V.High'},
        {id:'sd-hld-recommendation-3', name:'Fault tolerance and engineering optimizations', h:0.0508, p:'V.High'},
        {id:'sd-hld-recommendation-4', name:'Real time analytics', h:0.0953, p:'V.High'},
        {id:'sd-hld-recommendation-5', name:'Ranking restaurants in real time and batch', h:0.0478, p:'V.High'}
      ]},
      {id:'sd-paper-memcached', name:'Research Paper Analysis · Scaling Memcached at Facebook', hours:7.877, topics:[
        {id:'sd-paper-memcached-1', name:'Caching for Social Media', h:1.9556, p:'V.High'},
        {id:'sd-paper-memcached-2', name:'Caching for Social Media - Revision', h:2.0947, p:'V.High'},
        {id:'sd-paper-memcached-3', name:'Cascading Failures and Code Caches', h:2.3247, p:'V.High'},
        {id:'sd-paper-memcached-4', name:'Managing consistency across regions', h:1.5017, p:'V.High'}
      ]},
      {id:'sd-paper-zanzibar', name:'Research Paper Analysis · Google\'s Authorization Service (Zanzibar)', hours:6.228, topics:[
        {id:'sd-paper-zanzibar-1', name:'Motivation and Data Model', h:2.0564, p:'V.High'},
        {id:'sd-paper-zanzibar-2', name:'APIs and Google Spanner', h:1.7056, p:'V.High'},
        {id:'sd-paper-zanzibar-3', name:'Overall Architecture and Optimizations', h:2.0269, p:'V.High'},
        {id:'sd-paper-zanzibar-4', name:'Rate Limiting and Request Collapsing', h:0.4394, p:'V.High'}
      ]},
      {id:'sd-paper-gorilla', name:'Research Paper Analysis · Timeseries Databases: Gorilla and Monarch', hours:2.548, topics:[
        {id:'sd-paper-gorilla-1', name:'What is a time series database?', h:0.0467, p:'V.High'},
        {id:'sd-paper-gorilla-2', name:'Requirements', h:0.0661, p:'V.High'},
        {id:'sd-paper-gorilla-3', name:'Data Schema', h:0.0786, p:'V.High'},
        {id:'sd-paper-gorilla-4', name:'Compression Algorithms', h:0.1964, p:'V.High'},
        {id:'sd-paper-gorilla-5', name:'Persistence', h:0.0742, p:'V.High'},
        {id:'sd-paper-gorilla-6', name:'Tradeoffs - Choosing a time window', h:0.0733, p:'V.High'},
        {id:'sd-paper-gorilla-7', name:'Load Balancing', h:0.0714, p:'V.High'},
        {id:'sd-paper-gorilla-8', name:'Replication and Fault tolerance', h:0.0267, p:'V.High'},
        {id:'sd-paper-gorilla-9', name:'Monarch\'s architecture', h:0.1022, p:'V.High'},
        {id:'sd-paper-gorilla-10', name:'System features', h:0.0406, p:'V.High'},
        {id:'sd-paper-gorilla-11', name:'Query Optimization', h:0.0625, p:'V.High'},
        {id:'sd-paper-gorilla-12', name:'Livestream: GorillaDB Timeseries database', h:1.0647, p:'V.High'},
        {id:'sd-paper-gorilla-13', name:'Livestream: GorillaDB Timeseries database II', h:0.6444, p:'V.High'}
      ]},
      {id:'sd-paper-tao', name:'Research Paper Analysis · TAO: An In-Memory Graph Database by Meta', hours:3.196, topics:[
        {id:'sd-paper-tao-1', name:'Usecases and Data Schema', h:1.2781, p:'V.High'},
        {id:'sd-paper-tao-2', name:'Data Consistency and evictions', h:1.3833, p:'V.High'},
        {id:'sd-paper-tao-3', name:'Cache Features for the graph', h:0.5342, p:'V.High'}
      ]},
      {id:'sd-paper-dremel', name:'Research Paper Analysis · Google Dremel: Interactive Analytics', hours:1.23, topics:[
        {id:'sd-paper-dremel-1', name:'Google Dremel', h:1.23, p:'V.High'}
      ]},
      {id:'sd-paper-kafka', name:'Research Paper Analysis · Apache Kafka (Feb 2025)', hours:1.867, topics:[
        {id:'sd-paper-kafka-1', name:'Kafka Paper Reading - Combined', h:1.8667, p:'V.High'}
      ]},
      {id:'sd-paper-spark', name:'Research Paper Analysis · Apache Spark', hours:1.19, topics:[
        {id:'sd-paper-spark-1', name:'Apache Spark - Combined', h:1.19, p:'V.High'}
      ]},
      {id:'sd-paper-milvus', name:'Research Paper Analysis · Milvus DB', hours:1.556, topics:[
        {id:'sd-paper-milvus-1', name:'What are Vectors?', h:0.9228, p:'V.High'},
        {id:'sd-paper-milvus-2', name:'Vector Indexes - HNSW', h:0.6328, p:'V.High'}
      ]},
    ]
  },

  cloud: {
    name:'Cloud / Docker / K8s / AWS', color:'#2a9d8f', totalHours:212,
    groups:[
      {id:'cl-docker', name:'Docker', hours:12, topics:[
        {id:'cloud-docker-basics-1', name:'Containers vs VMs', h:1.0, p:'V.High'},
        {id:'cloud-docker-basics-2', name:'Dockerfile: FROM, COPY, RUN', h:1.0, p:'V.High'},
        {id:'cloud-docker-basics-3', name:'CMD vs ENTRYPOINT', h:1.0, p:'V.High'},
        {id:'cloud-docker-basics-4', name:'Image layers and caching', h:1.0, p:'V.High'},
        {id:'cloud-docker-compose-1', name:'Compose services and dependencies', h:0.75, p:'V.High'},
        {id:'cloud-docker-compose-2', name:'Volumes', h:0.75, p:'V.High'},
        {id:'cloud-docker-compose-3', name:'Networks', h:0.75, p:'V.High'},
        {id:'cloud-docker-compose-4', name:'Healthchecks', h:0.75, p:'V.High'},
        {id:'cloud-docker-networking-1', name:'Bridge networking', h:1.0, p:'High'},
        {id:'cloud-docker-networking-2', name:'Host and overlay networking', h:1.0, p:'High'},
        {id:'cloud-docker-spring-boot-1', name:'Multi-stage builds', h:1.0, p:'V.High'},
        {id:'cloud-docker-spring-boot-2', name:'JVM flags for containers', h:1.0, p:'V.High'},
        {id:'cloud-docker-spring-boot-3', name:'Image size and layering for Spring Boot', h:1.0, p:'V.High'},
      ]},
      {id:'cl-k8s', name:'Kubernetes', hours:12, topics:[
        {id:'cloud-k8s-architecture-1', name:'Control plane: API server, etcd, scheduler', h:1.0, p:'High'},
        {id:'cloud-k8s-architecture-2', name:'Nodes: kubelet, kube-proxy, runtime', h:1.0, p:'High'},
        {id:'cloud-k8s-workloads-1', name:'Pods', h:0.75, p:'V.High'},
        {id:'cloud-k8s-workloads-2', name:'Deployments and ReplicaSets', h:0.75, p:'V.High'},
        {id:'cloud-k8s-workloads-3', name:'StatefulSets', h:0.75, p:'V.High'},
        {id:'cloud-k8s-workloads-4', name:'DaemonSets', h:0.75, p:'V.High'},
        {id:'cloud-k8s-services-1', name:'ClusterIP, NodePort, LoadBalancer', h:1.0, p:'V.High'},
        {id:'cloud-k8s-services-2', name:'Ingress and ingress controllers', h:1.0, p:'V.High'},
        {id:'cloud-k8s-config-1', name:'ConfigMaps', h:0.5, p:'V.High'},
        {id:'cloud-k8s-config-2', name:'Secrets', h:0.5, p:'V.High'},
        {id:'cloud-k8s-probes-1', name:'Liveness probes', h:0.5, p:'V.High'},
        {id:'cloud-k8s-probes-2', name:'Readiness and startup probes', h:0.5, p:'V.High'},
        {id:'cloud-k8s-hpa',          name:'Horizontal Pod Autoscaler (HPA)',                               h:1, p:'High'},
        {id:'cloud-k8s-deploy-1', name:'Deploy Spring Boot to Minikube', h:1.0, p:'High'},
        {id:'cloud-k8s-deploy-2', name:'Rolling updates and rollbacks', h:1.0, p:'High'},
      ]},
      {id:'cl-saa-intro', name:'SAA · INTRODUCTION & SCENARIO', hours:2, topics:[
        {id:'aws-intro-01', name:'Introduction (4m)', h:0.07, p:'Medium'},
        {id:'aws-intro-02', name:'AWS Exams (18m)', h:0.29, p:'Medium'},
        {id:'aws-intro-03', name:'Scenario - Animals4life (13m)', h:0.22, p:'Medium'},
        {id:'aws-intro-04', name:'Connect with other students and your instructor (3m)', h:0.05, p:'Medium'},
      ]},
      {id:'cl-saa-acct', name:'SAA · Course Fundamentals and AWS Accounts', hours:4, topics:[
        {id:'aws-acct-01', name:'AWS Accounts - The basics (12m)', h:0.19, p:'V.High'},
        {id:'aws-acct-02', name:'Creating an AWS Account (5m)', h:0.09, p:'V.High'},
        {id:'aws-acct-03', name:'Multi-factor Authentication (MFA) (8m)', h:0.14, p:'V.High'},
        {id:'aws-acct-04', name:'Adding MFA - General Account Root User (5m)', h:0.08, p:'V.High'},
        {id:'aws-acct-05', name:'Identity and Access Management (IAM) Basics (13m)', h:0.22, p:'V.High'},
        {id:'aws-acct-06', name:'Creating IAMADMIN user & adding MFA (8m)', h:0.14, p:'V.High'},
        {id:'aws-acct-07', name:'IAM Access Keys (7m)', h:0.12, p:'V.High'},
        {id:'aws-acct-08', name:'Creating Access keys and setting up AWS CLI v2 tools (18m)', h:0.30, p:'V.High'},
      ]},
      {id:'cl-saa-fund', name:'SAA · AWS Fundamentals', hours:11, topics:[
        {id:'aws-fund-01', name:'AWS Public vs Private Services (7m)', h:0.12, p:'V.High'},
        {id:'aws-fund-02', name:'AWS Global Infrastructure (15m)', h:0.25, p:'V.High'},
        {id:'aws-fund-03', name:'AWS Default Virtual Private Cloud (VPC) (15m)', h:0.26, p:'V.High'},
        {id:'aws-fund-04', name:'Elastic Compute Cloud (EC2) Basics (15m)', h:0.25, p:'V.High'},
        {id:'aws-fund-05', name:'My First EC2 Instance - PART1 (10m)', h:0.17, p:'V.High'},
        {id:'aws-fund-06', name:'My First EC2 Instance - PART2 (4m)', h:0.07, p:'V.High'},
        {id:'aws-fund-07', name:'Simple Storage Service (S3) Basics (16m)', h:0.26, p:'V.High'},
        {id:'aws-fund-08', name:'My First S3 Bucket (19m)', h:0.31, p:'V.High'},
        {id:'aws-fund-09', name:'CloudFormation (CFN) Basics (12m)', h:0.21, p:'V.High'},
        {id:'aws-fund-10', name:'Simple Automation With CloudFormation (CFN) (16m)', h:0.26, p:'V.High'},
        {id:'aws-fund-11', name:'CloudWatch (CW) Basics (14m)', h:0.23, p:'V.High'},
        {id:'aws-fund-12', name:'Simple Monitoring with Cloudwatch (16m)', h:0.26, p:'V.High'},
        {id:'aws-fund-13', name:'Shared Responsibility Model (6m)', h:0.11, p:'V.High'},
        {id:'aws-fund-14', name:'High-Availability vs Fault-Tolerance vs Disaster Recovery (17m)', h:0.29, p:'V.High'},
        {id:'aws-fund-15', name:'Route53 (R53) Fundamentals (6m)', h:0.11, p:'V.High'},
        {id:'aws-fund-16', name:'Registering a Domain with route53 (10m)', h:0.16, p:'V.High'},
        {id:'aws-fund-17', name:'DNS Record Types (13m)', h:0.22, p:'V.High'},
      ]},
      {id:'cl-saa-iam', name:'SAA · IAM, ACCOUNTS AND AWS ORGANISATIONS', hours:11, topics:[
        {id:'aws-iam-01', name:'IAM Identity Policies (16m)', h:0.26, p:'V.High'},
        {id:'aws-iam-02', name:'IAM Users and ARNs (14m)', h:0.23, p:'V.High'},
        {id:'aws-iam-03', name:'Simple Identity Permissions in AWS (16m)', h:0.27, p:'V.High'},
        {id:'aws-iam-04', name:'IAM Groups (8m)', h:0.13, p:'V.High'},
        {id:'aws-iam-05', name:'Permissions control using IAM Groups (9m)', h:0.16, p:'V.High'},
        {id:'aws-iam-06', name:'IAM Roles - The Tech (8m)', h:0.14, p:'V.High'},
        {id:'aws-iam-07', name:'When to use IAM Roles (15m)', h:0.26, p:'V.High'},
        {id:'aws-iam-08', name:'Service-linked Roles & PassRole (5m)', h:0.09, p:'V.High'},
        {id:'aws-iam-09', name:'AWS Organizations (13m)', h:0.22, p:'V.High'},
        {id:'aws-iam-10', name:'AWS Organizations demo (20m)', h:0.33, p:'V.High'},
        {id:'aws-iam-11', name:'Service Control Policies (SCPs) (13m)', h:0.21, p:'V.High'},
        {id:'aws-iam-12', name:'Using Service Control Policies (17m)', h:0.28, p:'V.High'},
        {id:'aws-iam-13', name:'CloudWatch Logs (7m)', h:0.12, p:'V.High'},
        {id:'aws-iam-14', name:'CloudTrail (12m)', h:0.19, p:'V.High'},
        {id:'aws-iam-15', name:'Implementing an Organizational Trail (18m)', h:0.31, p:'V.High'},
        {id:'aws-iam-16', name:'AWS Control Tower 101 (16m)', h:0.26, p:'V.High'},
      ]},
      {id:'cl-saa-s3', name:'SAA · SIMPLE STORAGE SERVICE (S3)', hours:16, topics:[
        {id:'aws-s3-01', name:'S3 Security (Resource Policies & ACLs) (18m)', h:0.31, p:'V.High'},
        {id:'aws-s3-02', name:'S3 Static Hosting (11m)', h:0.18, p:'V.High'},
        {id:'aws-s3-03', name:'Creating a static website with S3 (18m)', h:0.30, p:'V.High'},
        {id:'aws-s3-04', name:'Object Versioning & MFA Delete (8m)', h:0.13, p:'V.High'},
        {id:'aws-s3-05', name:'S3 Versioning (16m)', h:0.26, p:'V.High'},
        {id:'aws-s3-06', name:'S3 Performance Optimization (12m)', h:0.20, p:'V.High'},
        {id:'aws-s3-07', name:'S3 Performance (5m)', h:0.09, p:'V.High'},
        {id:'aws-s3-08', name:'Key Management Service (KMS) (19m)', h:0.31, p:'V.High'},
        {id:'aws-s3-09', name:'KMS - Encrypting the battleplans with KMS (13m)', h:0.21, p:'V.High'},
        {id:'aws-s3-10', name:'S3 Object Encryption CSE/SSE (24m)', h:0.39, p:'V.High'},
        {id:'aws-s3-11', name:'Object Encryption and Role Separation (15m)', h:0.25, p:'V.High'},
        {id:'aws-s3-12', name:'S3 Bucket Keys (6m)', h:0.10, p:'V.High'},
        {id:'aws-s3-13', name:'S3 Object Storage Classes - PART1 (9m)', h:0.16, p:'V.High'},
        {id:'aws-s3-14', name:'S3 Object Storage Classes - PART2 (12m)', h:0.19, p:'V.High'},
        {id:'aws-s3-15', name:'S3 Lifecycle Configuration (8m)', h:0.14, p:'V.High'},
        {id:'aws-s3-16', name:'S3 Replication (14m)', h:0.23, p:'V.High'},
        {id:'aws-s3-17', name:'Cross-Region Replication of an S3 Static Website (20m)', h:0.33, p:'V.High'},
        {id:'aws-s3-18', name:'S3 PreSigned URLs (11m)', h:0.19, p:'V.High'},
        {id:'aws-s3-19', name:'Creating and using PresignedURLs (18m)', h:0.31, p:'V.High'},
        {id:'aws-s3-20', name:'S3 Select and Glacier Select (6m)', h:0.09, p:'V.High'},
        {id:'aws-s3-21', name:'S3 Events (5m)', h:0.08, p:'V.High'},
        {id:'aws-s3-22', name:'S3 Access Logs (3m)', h:0.05, p:'V.High'},
        {id:'aws-s3-23', name:'S3 Object Lock (10m)', h:0.16, p:'V.High'},
        {id:'aws-s3-24', name:'S3 Access Points (6m)', h:0.10, p:'V.High'},
        {id:'aws-s3-25', name:'Multi-Region Access Points (MRAP) (20m)', h:0.34, p:'V.High'},
      ]},
      {id:'cl-saa-vpc', name:'SAA · VIRTUAL PRIVATE CLOUD (VPC) BASICS', hours:10, topics:[
        {id:'aws-vpc-01', name:'VPC Sizing and Structure - PART1 (12m)', h:0.20, p:'V.High'},
        {id:'aws-vpc-02', name:'VPC Sizing and Structure - PART2 (11m)', h:0.19, p:'V.High'},
        {id:'aws-vpc-03', name:'Custom VPCs - PART1 - THEORY (10m)', h:0.17, p:'V.High'},
        {id:'aws-vpc-04', name:'Custom VPCs - PART2 - DEMO (6m)', h:0.09, p:'V.High'},
        {id:'aws-vpc-05', name:'VPC Subnets (11m)', h:0.18, p:'V.High'},
        {id:'aws-vpc-06', name:'Implement multi-tier VPC subnets (15m)', h:0.25, p:'V.High'},
        {id:'aws-vpc-07', name:'VPC Routing, Internet Gateway & Bastion Hosts (18m)', h:0.29, p:'V.High'},
        {id:'aws-vpc-08', name:'Configuring A4L public subnets and Jumpbox - PART1 (14m)', h:0.23, p:'V.High'},
        {id:'aws-vpc-09', name:'Configuring A4L public subnets and Jumpbox - PART2 (12m)', h:0.19, p:'V.High'},
        {id:'aws-vpc-10', name:'Stateful vs Stateless Firewalls (14m)', h:0.23, p:'V.High'},
        {id:'aws-vpc-11', name:'Network Access Control Lists (NACLs) (13m)', h:0.21, p:'V.High'},
        {id:'aws-vpc-12', name:'Security Groups (SG) (12m)', h:0.20, p:'V.High'},
        {id:'aws-vpc-13', name:'NAT & NAT Gateway - PART1 (14m)', h:0.23, p:'V.High'},
        {id:'aws-vpc-14', name:'NAT & NAT Gateway - PART2 (11m)', h:0.19, p:'V.High'},
        {id:'aws-vpc-15', name:'Implementing private internet access using NAT Gateways (19m)', h:0.32, p:'V.High'},
      ]},
      {id:'cl-saa-ec2', name:'SAA · ELASTIC COMPUTE CLOUD (EC2) BASICS', hours:18, topics:[
        {id:'aws-ec2-01', name:'Virtualization 101 (12m)', h:0.21, p:'V.High'},
        {id:'aws-ec2-02', name:'EC2 Architecture and Resilience (13m)', h:0.21, p:'V.High'},
        {id:'aws-ec2-03', name:'EC2 Instance Types - PART1 (12m)', h:0.20, p:'V.High'},
        {id:'aws-ec2-04', name:'EC2 Instance Types - PART2 (8m)', h:0.14, p:'V.High'},
        {id:'aws-ec2-05', name:'EC2 SSH vs EC2 Instance Connect (17m)', h:0.28, p:'V.High'},
        {id:'aws-ec2-06', name:'Storage Refresher (14m)', h:0.24, p:'V.High'},
        {id:'aws-ec2-07', name:'Elastic Block Store (EBS) Service Architecture (9m)', h:0.15, p:'V.High'},
        {id:'aws-ec2-08', name:'EBS Volume Types - General Purpose (9m)', h:0.16, p:'V.High'},
        {id:'aws-ec2-09', name:'EBS Volume Types - Provisioned IOPS (6m)', h:0.10, p:'V.High'},
        {id:'aws-ec2-10', name:'EBS Volume Types - HDD-Based (5m)', h:0.08, p:'V.High'},
        {id:'aws-ec2-11', name:'Instance Store Volumes - Architecture (9m)', h:0.15, p:'V.High'},
        {id:'aws-ec2-12', name:'Choosing between the EC2 Instance Store and EBS (9m)', h:0.15, p:'V.High'},
        {id:'aws-ec2-13', name:'Snapshots, Restore & Fast Snapshot Restore (FSR) (11m)', h:0.18, p:'V.High'},
        {id:'aws-ec2-14', name:'EBS Volumes - PART1 (15m)', h:0.25, p:'V.High'},
        {id:'aws-ec2-15', name:'EBS Volumes - PART2 (14m)', h:0.24, p:'V.High'},
        {id:'aws-ec2-16', name:'EBS Volumes - PART3 (14m)', h:0.24, p:'V.High'},
        {id:'aws-ec2-17', name:'EBS Encryption (8m)', h:0.14, p:'V.High'},
        {id:'aws-ec2-18', name:'Network Interfaces, Instance IPs and DNS (16m)', h:0.27, p:'V.High'},
        {id:'aws-ec2-19', name:'Manual Install of Wordpress on EC2 - PART1 (12m)', h:0.21, p:'V.High'},
        {id:'aws-ec2-20', name:'Manual Install of Wordpress on EC2 - PART2 (13m)', h:0.21, p:'V.High'},
        {id:'aws-ec2-21', name:'Amazon Machine Images (AMI) (14m)', h:0.23, p:'V.High'},
        {id:'aws-ec2-22', name:'Creating an Animals4life AMI - PART1 (10m)', h:0.16, p:'V.High'},
        {id:'aws-ec2-23', name:'Creating an Animals4life AMI - PART2 (11m)', h:0.18, p:'V.High'},
        {id:'aws-ec2-24', name:'Copying & Sharing an AMI (9m)', h:0.14, p:'V.High'},
        {id:'aws-ec2-25', name:'EC2 Purchase Options - PART1 (9m)', h:0.16, p:'V.High'},
        {id:'aws-ec2-26', name:'EC2 Purchase Options - PART2 (12m)', h:0.20, p:'V.High'},
        {id:'aws-ec2-27', name:'Reserved Instances - the rest (12m)', h:0.20, p:'V.High'},
        {id:'aws-ec2-28', name:'Instance Status Checks & Auto Recovery (8m)', h:0.13, p:'V.High'},
        {id:'aws-ec2-29', name:'Shutdown, Terminate & Termination Protection (6m)', h:0.09, p:'V.High'},
        {id:'aws-ec2-30', name:'Horizontal & Vertical Scaling (11m)', h:0.19, p:'V.High'},
        {id:'aws-ec2-31', name:'Instance Metadata (16m)', h:0.26, p:'V.High'},
      ]},
      {id:'cl-saa-ecs', name:'SAA · CONTAINERS & ECS', hours:5, topics:[
        {id:'aws-ecs-01', name:'Introduction to Containers (17m)', h:0.29, p:'V.High'},
        {id:'aws-ecs-02', name:'Creating container of cats Docker Image (18m)', h:0.30, p:'V.High'},
        {id:'aws-ecs-03', name:'ECS - Concepts (10m)', h:0.17, p:'V.High'},
        {id:'aws-ecs-04', name:'ECS - Cluster Mode (13m)', h:0.22, p:'V.High'},
        {id:'aws-ecs-05', name:'Deploying container of cats using Fargate (13m)', h:0.22, p:'V.High'},
        {id:'aws-ecs-06', name:'Elastic Container Registry (ECR) (4m)', h:0.07, p:'V.High'},
        {id:'aws-ecs-07', name:'Kubernetes 101 (11m)', h:0.19, p:'V.High'},
        {id:'aws-ecs-08', name:'Elastic Kubernetes Service (EKS) 101 (6m)', h:0.10, p:'V.High'},
      ]},
      {id:'cl-saa-ec2adv', name:'SAA · ADVANCED EC2', hours:8, topics:[
        {id:'aws-ec2adv-01', name:'Bootstrapping EC2 using User Data (10m)', h:0.17, p:'High'},
        {id:'aws-ec2adv-02', name:'Bootstrapping Wordpress Installation - PART1 (15m)', h:0.25, p:'High'},
        {id:'aws-ec2adv-03', name:'Bootstrapping Wordpress Installation - PART2 (7m)', h:0.11, p:'High'},
        {id:'aws-ec2adv-04', name:'Enhanced Bootstrapping with CFN-INIT (12m)', h:0.20, p:'High'},
        {id:'aws-ec2adv-05', name:'CFN-INIT and CFN Creation Policies (12m)', h:0.21, p:'High'},
        {id:'aws-ec2adv-06', name:'EC2 Instance Roles & Profile (4m)', h:0.07, p:'High'},
        {id:'aws-ec2adv-07', name:'Using EC2 Instance Roles (14m)', h:0.23, p:'High'},
        {id:'aws-ec2adv-08', name:'SSM Parameter Store (6m)', h:0.10, p:'High'},
        {id:'aws-ec2adv-09', name:'Parameter Store (16m)', h:0.27, p:'High'},
        {id:'aws-ec2adv-10', name:'System and Application Logging on EC2 (6m)', h:0.10, p:'High'},
        {id:'aws-ec2adv-11', name:'Logging and Metrics with CloudWatch Agent-PART1 (12m)', h:0.20, p:'High'},
        {id:'aws-ec2adv-12', name:'Logging and Metrics with CloudWatch Agent-PART2 (8m)', h:0.14, p:'High'},
        {id:'aws-ec2adv-13', name:'EC2 Placement Groups (14m)', h:0.24, p:'High'},
        {id:'aws-ec2adv-14', name:'Dedicated Hosts (9m)', h:0.15, p:'High'},
        {id:'aws-ec2adv-15', name:'Enhanced Networking & EBS Optimized (7m)', h:0.12, p:'High'},
      ]},
      {id:'cl-saa-r53', name:'SAA · Route 53 - Global DNS', hours:5, topics:[
        {id:'aws-r53-01', name:'R53 Public Hosted Zones (6m)', h:0.11, p:'High'},
        {id:'aws-r53-02', name:'R53 Private Hosted Zones (5m)', h:0.09, p:'High'},
        {id:'aws-r53-03', name:'CNAME vs R53 Alias (5m)', h:0.09, p:'High'},
        {id:'aws-r53-04', name:'Simple Routing (2m)', h:0.04, p:'High'},
        {id:'aws-r53-05', name:'R53 Health Checks (13m)', h:0.21, p:'High'},
        {id:'aws-r53-06', name:'Failover Routing (2m)', h:0.03, p:'High'},
        {id:'aws-r53-07', name:'Using R53 and Failover Routing-PART1 (17m)', h:0.28, p:'High'},
        {id:'aws-r53-08', name:'Using R53 and Failover Routing-PART2 (6m)', h:0.11, p:'High'},
        {id:'aws-r53-09', name:'Multi Value Routing (3m)', h:0.04, p:'High'},
        {id:'aws-r53-10', name:'Weighted Routing (3m)', h:0.06, p:'High'},
        {id:'aws-r53-11', name:'Latency Routing (3m)', h:0.05, p:'High'},
        {id:'aws-r53-12', name:'Geolocation Routing (5m)', h:0.08, p:'High'},
        {id:'aws-r53-13', name:'Geoproximity (5m)', h:0.08, p:'High'},
        {id:'aws-r53-14', name:'R53 Interoperability (12m)', h:0.20, p:'High'},
        {id:'aws-r53-15', name:'Implementing DNSSEC using Route53 (18m)', h:0.30, p:'High'},
      ]},
      {id:'cl-saa-rds', name:'SAA · Relational Database Service (RDS)', hours:12, topics:[
        {id:'aws-rds-01', name:'Database Refresher & MODELS - PART1 (9m)', h:0.15, p:'V.High'},
        {id:'aws-rds-02', name:'Database Refresher & MODELS - PART2 (15m)', h:0.25, p:'V.High'},
        {id:'aws-rds-03', name:'ACID vs BASE (11m)', h:0.18, p:'V.High'},
        {id:'aws-rds-04', name:'Databases on EC2 (13m)', h:0.22, p:'V.High'},
        {id:'aws-rds-05', name:'Splitting Wordpress Monolith => APP & DB (18m)', h:0.30, p:'V.High'},
        {id:'aws-rds-06', name:'Relational Database Service (RDS) Architecture (12m)', h:0.19, p:'V.High'},
        {id:'aws-rds-07', name:'Migrating EC2 DB into RDS - PART1 (18m)', h:0.31, p:'V.High'},
        {id:'aws-rds-08', name:'Migrating EC2 DB into RDS - PART2 (13m)', h:0.22, p:'V.High'},
        {id:'aws-rds-09', name:'RDS MultiAZ - Instance and Cluster (12m)', h:0.20, p:'V.High'},
        {id:'aws-rds-10', name:'RDS Automatic Backup, RDS Snapshots and Restore (9m)', h:0.15, p:'V.High'},
        {id:'aws-rds-11', name:'RDS Read-Replicas (7m)', h:0.11, p:'V.High'},
        {id:'aws-rds-12', name:'MultiAZ & Snapshot Restore with RDS - PART1 (14m)', h:0.23, p:'V.High'},
        {id:'aws-rds-13', name:'MultiAZ & Snapshot Restore with RDS - PART2 (12m)', h:0.20, p:'V.High'},
        {id:'aws-rds-14', name:'RDS Data Security (7m)', h:0.12, p:'V.High'},
        {id:'aws-rds-15', name:'RDS Custom (5m)', h:0.09, p:'V.High'},
        {id:'aws-rds-16', name:'Aurora Architecture (14m)', h:0.23, p:'V.High'},
        {id:'aws-rds-17', name:'Aurora Serverless (10m)', h:0.16, p:'V.High'},
        {id:'aws-rds-18', name:'Aurora Global Database (5m)', h:0.09, p:'V.High'},
        {id:'aws-rds-19', name:'Multi-master writes (8m)', h:0.13, p:'V.High'},
        {id:'aws-rds-20', name:'RDS Proxy (10m)', h:0.16, p:'V.High'},
        {id:'aws-rds-21', name:'Database Migration Service (DMS) (11m)', h:0.18, p:'V.High'},
      ]},
      {id:'cl-saa-efs', name:'SAA · NETWORK STORAGE & DATA LIFECYCLE', hours:3, topics:[
        {id:'aws-efs-01', name:'EFS Architecture (9m)', h:0.15, p:'Medium'},
        {id:'aws-efs-02', name:'Implementing EFS - PART1 (9m)', h:0.15, p:'Medium'},
        {id:'aws-efs-03', name:'Implementing EFS - PART2 (12m)', h:0.19, p:'Medium'},
        {id:'aws-efs-04', name:'Using EFS with Wordpress (16m)', h:0.27, p:'Medium'},
        {id:'aws-efs-05', name:'AWS Backup (7m)', h:0.11, p:'Medium'},
      ]},
      {id:'cl-saa-ha', name:'SAA · HA & SCALING', hours:12, topics:[
        {id:'aws-ha-01', name:'Regional and Global AWS Architecture (11m)', h:0.18, p:'V.High'},
        {id:'aws-ha-02', name:'Evolution of the Elastic Load Balancer (4m)', h:0.07, p:'V.High'},
        {id:'aws-ha-03', name:'Elastic Load Balancer Architecture - PART1 (10m)', h:0.17, p:'V.High'},
        {id:'aws-ha-04', name:'Elastic Load Balancer Architecture - PART2 (13m)', h:0.21, p:'V.High'},
        {id:'aws-ha-05', name:'ALB vs NLB (16m)', h:0.27, p:'V.High'},
        {id:'aws-ha-06', name:'Launch Configuration and Templates (4m)', h:0.07, p:'V.High'},
        {id:'aws-ha-07', name:'Auto-Scaling Groups (16m)', h:0.27, p:'V.High'},
        {id:'aws-ha-08', name:'ASG Scaling Policies (10m)', h:0.17, p:'V.High'},
        {id:'aws-ha-09', name:'ASG Lifecycle Hooks (5m)', h:0.08, p:'V.High'},
        {id:'aws-ha-10', name:'ASG HealthCheck Comparison - EC2 vs ELB (4m)', h:0.06, p:'V.High'},
        {id:'aws-ha-11', name:'SSL Offload & Session Stickiness (12m)', h:0.20, p:'V.High'},
        {id:'aws-ha-12', name:'Seeing Session Stickiness in Action (13m)', h:0.22, p:'V.High'},
        {id:'aws-ha-13', name:'Architecture Evolution - STAGE1 - PART1 (14m)', h:0.24, p:'V.High'},
        {id:'aws-ha-14', name:'Architecture Evolution - STAGE1 - PART2 (11m)', h:0.18, p:'V.High'},
        {id:'aws-ha-15', name:'Architecture Evolution - STAGE2 (13m)', h:0.22, p:'V.High'},
        {id:'aws-ha-16', name:'Architecture Evolution - STAGE3 (20m)', h:0.33, p:'V.High'},
        {id:'aws-ha-17', name:'Architecture Evolution - STAGE4 (18m)', h:0.30, p:'V.High'},
        {id:'aws-ha-18', name:'Architecture Evolution - STAGE 5 - PART1 (12m)', h:0.19, p:'V.High'},
        {id:'aws-ha-19', name:'Architecture Evolution - STAGE 5 - PART2 (15m)', h:0.25, p:'V.High'},
        {id:'aws-ha-20', name:'Architecture Evolution - STAGE6 (6m)', h:0.10, p:'V.High'},
        {id:'aws-ha-21', name:'Gateway Load Balancer (14m)', h:0.23, p:'V.High'},
      ]},
      {id:'cl-saa-srvls', name:'SAA · SERVERLESS AND APPLICATION SERVICES', hours:16, topics:[
        {id:'aws-srvls-01', name:'Architecture Deep Dive - PART1 (9m)', h:0.15, p:'V.High'},
        {id:'aws-srvls-02', name:'Architecture Deep Dive - PART2 (13m)', h:0.22, p:'V.High'},
        {id:'aws-srvls-03', name:'AWS Lambda - PART1 (11m)', h:0.19, p:'V.High'},
        {id:'aws-srvls-04', name:'AWS Lambda - PART2 (14m)', h:0.23, p:'V.High'},
        {id:'aws-srvls-05', name:'AWS Lambda - PART3 (17m)', h:0.28, p:'V.High'},
        {id:'aws-srvls-06', name:'CloudWatchEvents and EventBridge (7m)', h:0.12, p:'V.High'},
        {id:'aws-srvls-07', name:'Automated EC2 Control using Lambda and Events - PART1 (14m)', h:0.23, p:'V.High'},
        {id:'aws-srvls-08', name:'Automated EC2 Control using Lambda and Events - PART2 (19m)', h:0.31, p:'V.High'},
        {id:'aws-srvls-09', name:'Serverless Architecture (13m)', h:0.22, p:'V.High'},
        {id:'aws-srvls-10', name:'Simple Notification Service (8m)', h:0.13, p:'V.High'},
        {id:'aws-srvls-11', name:'Step Functions (16m)', h:0.27, p:'V.High'},
        {id:'aws-srvls-12', name:'API Gateway 101 (16m)', h:0.27, p:'V.High'},
        {id:'aws-srvls-13', name:'Pet-Cuddle-o-Tron - PART1 (5m)', h:0.08, p:'V.High'},
        {id:'aws-srvls-14', name:'Pet-Cuddle-o-Tron - PART2 (8m)', h:0.14, p:'V.High'},
        {id:'aws-srvls-15', name:'Pet-Cuddle-o-Tron - PART3 (12m)', h:0.21, p:'V.High'},
        {id:'aws-srvls-16', name:'Pet-Cuddle-o-Tron - PART4 (13m)', h:0.21, p:'V.High'},
        {id:'aws-srvls-17', name:'Pet-Cuddle-o-Tron - PART5 (14m)', h:0.23, p:'V.High'},
        {id:'aws-srvls-18', name:'Pet-Cuddle-o-Tron - PART6 (3m)', h:0.04, p:'V.High'},
        {id:'aws-srvls-19', name:'Simple Queue Service (16m)', h:0.26, p:'V.High'},
        {id:'aws-srvls-20', name:'SQS Standard vs FIFO Queues (3m)', h:0.06, p:'V.High'},
        {id:'aws-srvls-21', name:'SQS Delay Queues (5m)', h:0.08, p:'V.High'},
        {id:'aws-srvls-22', name:'SQS Dead-Letter Queues (4m)', h:0.07, p:'V.High'},
        {id:'aws-srvls-23', name:'Kinesis Data Streams (8m)', h:0.13, p:'V.High'},
        {id:'aws-srvls-24', name:'Kinesis Data Firehose (9m)', h:0.15, p:'V.High'},
        {id:'aws-srvls-25', name:'Kinesis Data Analytics (9m)', h:0.15, p:'V.High'},
        {id:'aws-srvls-26', name:'Kinesis Video Streams (5m)', h:0.09, p:'V.High'},
        {id:'aws-srvls-27', name:'Amazon Cognito - User and Identity Pools (15m)', h:0.25, p:'V.High'},
        {id:'aws-srvls-28', name:'AWS Glue 101 (6m)', h:0.11, p:'V.High'},
        {id:'aws-srvls-29', name:'Amazon MQ 101 (8m)', h:0.14, p:'V.High'},
        {id:'aws-srvls-30', name:'Amazon AppFlow (4m)', h:0.06, p:'V.High'},
      ]},
      {id:'cl-saa-cdn', name:'SAA · GLOBAL CONTENT DELIVERY AND OPTIMIZATION', hours:8, topics:[
        {id:'aws-cdn-01', name:'Cloudfront Architecture (15m)', h:0.25, p:'High'},
        {id:'aws-cdn-02', name:'CloudFront (CF) - Behaviours (9m)', h:0.16, p:'High'},
        {id:'aws-cdn-03', name:'CloudFront - TTL and Invalidations (14m)', h:0.23, p:'High'},
        {id:'aws-cdn-04', name:'ACM (11m)', h:0.19, p:'High'},
        {id:'aws-cdn-05', name:'Cloudfront and SSL/TLS (15m)', h:0.25, p:'High'},
        {id:'aws-cdn-06', name:'CloudFront - Origin Types & Origin Architecture (10m)', h:0.17, p:'High'},
        {id:'aws-cdn-07', name:'Adding a CDN to a static Website-PART1 (16m)', h:0.27, p:'High'},
        {id:'aws-cdn-08', name:'Adding a CDN to a static Website-PART2 (12m)', h:0.21, p:'High'},
        {id:'aws-cdn-09', name:'Adding an Alternate CNAME and SSL (11m)', h:0.19, p:'High'},
        {id:'aws-cdn-10', name:'Securing CF and S3 using OAI (9m)', h:0.15, p:'High'},
        {id:'aws-cdn-11', name:'CloudFront - Private Distribution & Behaviours (8m)', h:0.13, p:'High'},
        {id:'aws-cdn-12', name:'Using Origin Access Control (OAC) (11m)', h:0.19, p:'High'},
        {id:'aws-cdn-13', name:'Lambda@Edge (8m)', h:0.13, p:'High'},
        {id:'aws-cdn-14', name:'Global Accelerator (10m)', h:0.17, p:'High'},
      ]},
      {id:'cl-saa-vpcadv', name:'SAA · ADVANCED VPC Networking', hours:5, topics:[
        {id:'aws-vpcadv-01', name:'VPC Flow Logs (10m)', h:0.17, p:'High'},
        {id:'aws-vpcadv-02', name:'Egress-Only Internet gateway (7m)', h:0.11, p:'High'},
        {id:'aws-vpcadv-03', name:'VPC Endpoints (Gateway) (11m)', h:0.19, p:'High'},
        {id:'aws-vpcadv-04', name:'VPC Endpoints (Interface) (11m)', h:0.19, p:'High'},
        {id:'aws-vpcadv-05', name:'VPC Endpoints - Interface - PART1 (12m)', h:0.20, p:'High'},
        {id:'aws-vpcadv-06', name:'VPC Endpoints - Gateway - PART2 (10m)', h:0.17, p:'High'},
        {id:'aws-vpcadv-07', name:'Egress-Only Internet Gateway - PART3 (8m)', h:0.13, p:'High'},
        {id:'aws-vpcadv-08', name:'VPC Peering (9m)', h:0.15, p:'High'},
        {id:'aws-vpcadv-09', name:'VPC Peering demo (23m)', h:0.38, p:'High'},
      ]},
      {id:'cl-saa-hybrid', name:'SAA · HYBRID ENVIRONMENTS AND MIGRATION', hours:13, topics:[
        {id:'aws-hybrid-01', name:'Border Gateway Protocol 101 (17m)', h:0.29, p:'Medium'},
        {id:'aws-hybrid-02', name:'IPSec VPN Fundamentals (15m)', h:0.25, p:'Medium'},
        {id:'aws-hybrid-03', name:'AWS Site-to-Site VPN (18m)', h:0.30, p:'Medium'},
        {id:'aws-hybrid-04', name:'Simple Site2Site VPN - STAGE0 - SETUP (5m)', h:0.08, p:'Medium'},
        {id:'aws-hybrid-05', name:'Simple Site2Site VPN - STAGE1 - AWS VPN (10m)', h:0.17, p:'Medium'},
        {id:'aws-hybrid-06', name:'Simple Site2Site VPN - STAGE2 - onprep pfSense Config (17m)', h:0.29, p:'Medium'},
        {id:'aws-hybrid-07', name:'Simple Site2Site VPN - STAGE3 - Routing & Security (10m)', h:0.17, p:'Medium'},
        {id:'aws-hybrid-08', name:'Simple Site2Site VPN - STAGE4 - Testing (6m)', h:0.10, p:'Medium'},
        {id:'aws-hybrid-09', name:'Simple Site2Site VPN - STAGE5 - Cleanup (2m)', h:0.03, p:'Medium'},
        {id:'aws-hybrid-10', name:'Direct Connect (DX) Concepts (10m)', h:0.16, p:'Medium'},
        {id:'aws-hybrid-11', name:'Direct Connect (DX) Resilience (14m)', h:0.23, p:'Medium'},
        {id:'aws-hybrid-12', name:'Direct Connect (DX) - Public VIF + VPN (Encryption) (7m)', h:0.11, p:'Medium'},
        {id:'aws-hybrid-13', name:'Transit Gateway (10m)', h:0.17, p:'Medium'},
        {id:'aws-hybrid-14', name:'Storage Gateway - Volume (14m)', h:0.24, p:'Medium'},
        {id:'aws-hybrid-15', name:'Storage Gateway - Tape (VTL) (12m)', h:0.20, p:'Medium'},
        {id:'aws-hybrid-16', name:'Storage Gateway - File (12m)', h:0.20, p:'Medium'},
        {id:'aws-hybrid-17', name:'Snowball / Edge / Snowmobile (11m)', h:0.18, p:'Medium'},
        {id:'aws-hybrid-18', name:'Directory Service (16m)', h:0.26, p:'Medium'},
        {id:'aws-hybrid-19', name:'DataSync (9m)', h:0.16, p:'Medium'},
        {id:'aws-hybrid-20', name:'FSx for Windows Servers (12m)', h:0.19, p:'Medium'},
        {id:'aws-hybrid-21', name:'FSx For Lustre (14m)', h:0.23, p:'Medium'},
        {id:'aws-hybrid-22', name:'AWS Transfer Family (10m)', h:0.17, p:'Medium'},
      ]},
      {id:'cl-saa-sec', name:'SAA · SECURITY, DEPLOYMENT & OPERATIONS', hours:5, topics:[
        {id:'aws-sec-01', name:'AWS Secrets Manager (8m)', h:0.13, p:'High'},
        {id:'aws-sec-02', name:'Application Layer (L7) Firewall (8m)', h:0.13, p:'High'},
        {id:'aws-sec-03', name:'Web Application Firewall (WAF), WEBACLs, Rule Groups and Rules (19m)', h:0.32, p:'High'},
        {id:'aws-sec-04', name:'AWS Shield (10m)', h:0.16, p:'High'},
        {id:'aws-sec-05', name:'CloudHSM (15m)', h:0.24, p:'High'},
        {id:'aws-sec-06', name:'AWS Config (6m)', h:0.10, p:'High'},
        {id:'aws-sec-07', name:'Amazon Macie (12m)', h:0.20, p:'High'},
        {id:'aws-sec-08', name:'Amazon Macie demo (16m)', h:0.26, p:'High'},
        {id:'aws-sec-09', name:'Amazon Inspector (6m)', h:0.11, p:'High'},
        {id:'aws-sec-10', name:'Amazon Guardduty (4m)', h:0.07, p:'High'},
      ]},
      {id:'cl-saa-cfn', name:'SAA · Infrastructure as Code (CloudFormation)', hours:12, topics:[
        {id:'aws-cfn-01', name:'CloudFormation Physical & Logical Resources (8m)', h:0.12, p:'High'},
        {id:'aws-cfn-02', name:'Simple Non Portable Template - PART1 (10m)', h:0.17, p:'High'},
        {id:'aws-cfn-03', name:'Simple Non Portable Template - PART2 (11m)', h:0.19, p:'High'},
        {id:'aws-cfn-04', name:'CloudFormation Template and Pseudo Parameters (7m)', h:0.11, p:'High'},
        {id:'aws-cfn-05', name:'CloudFormation Intrinsic Functions (14m)', h:0.24, p:'High'},
        {id:'aws-cfn-06', name:'CloudFormation Mappings (4m)', h:0.07, p:'High'},
        {id:'aws-cfn-07', name:'CloudFormation Outputs (4m)', h:0.06, p:'High'},
        {id:'aws-cfn-08', name:'Template v2 - Portable (14m)', h:0.23, p:'High'},
        {id:'aws-cfn-09', name:'CloudFormation Conditions (7m)', h:0.12, p:'High'},
        {id:'aws-cfn-10', name:'CloudFormation DependsOn (7m)', h:0.12, p:'High'},
        {id:'aws-cfn-11', name:'CloudFormation Wait Conditions & cfn-signal (12m)', h:0.20, p:'High'},
        {id:'aws-cfn-12', name:'CloudFormation Nested Stacks (14m)', h:0.23, p:'High'},
        {id:'aws-cfn-13', name:'CloudFormation Cross-Stack References (10m)', h:0.17, p:'High'},
        {id:'aws-cfn-14', name:'CloudFormation Stack Sets (9m)', h:0.15, p:'High'},
        {id:'aws-cfn-15', name:'CloudFormation Deletion Policy (5m)', h:0.09, p:'High'},
        {id:'aws-cfn-16', name:'CloudFormation Stack Roles (7m)', h:0.11, p:'High'},
        {id:'aws-cfn-17', name:'CloudFormation Init (CFN-INIT) (9m)', h:0.15, p:'High'},
        {id:'aws-cfn-18', name:'CloudFormation cfn-hup (4m)', h:0.07, p:'High'},
        {id:'aws-cfn-19', name:'wait conditions, cfnsignal, cfninit and cfnhup-PART1 (13m)', h:0.21, p:'High'},
        {id:'aws-cfn-20', name:'wait conditions, cfnsignal, cfninit and cfnhup-PART2 (15m)', h:0.24, p:'High'},
        {id:'aws-cfn-21', name:'CloudFormation ChangeSets (11m)', h:0.18, p:'High'},
        {id:'aws-cfn-22', name:'CloudFormation Custom Resources (11m)', h:0.18, p:'High'},
        {id:'aws-cfn-23', name:'CloudFormation Custom Resources-PART1 (9m)', h:0.15, p:'High'},
        {id:'aws-cfn-24', name:'CloudFormation Custom Resources-PART2 (13m)', h:0.22, p:'High'},
      ]},
      {id:'cl-saa-ddb', name:'SAA · NOSQL Databases & DynamoDB', hours:7, topics:[
        {id:'aws-ddb-01', name:'DynamoDB - Architecture (11m)', h:0.18, p:'V.High'},
        {id:'aws-ddb-02', name:'DynamoDB - Operations, Consistency and Performance-PART1 (13m)', h:0.22, p:'V.High'},
        {id:'aws-ddb-03', name:'DynamoDB - Operations, Consistency and Performance-PART2 (11m)', h:0.19, p:'V.High'},
        {id:'aws-ddb-04', name:'DynamoDB Local and Global Secondary Indexes (13m)', h:0.21, p:'V.High'},
        {id:'aws-ddb-05', name:'DynamoDB - Streams & Lambda Triggers (9m)', h:0.15, p:'V.High'},
        {id:'aws-ddb-06', name:'DynamoDB - Global Tables (5m)', h:0.09, p:'V.High'},
        {id:'aws-ddb-07', name:'DynamoDB - Accelerator (DAX) (11m)', h:0.18, p:'V.High'},
        {id:'aws-ddb-08', name:'DynamoDB - TTL (5m)', h:0.08, p:'V.High'},
        {id:'aws-ddb-09', name:'Amazon Athena (8m)', h:0.14, p:'V.High'},
        {id:'aws-ddb-10', name:'Athena Demo - PART1 (14m)', h:0.23, p:'V.High'},
        {id:'aws-ddb-11', name:'Athena Demo - PART2 (12m)', h:0.19, p:'V.High'},
        {id:'aws-ddb-12', name:'Elasticache (13m)', h:0.21, p:'V.High'},
        {id:'aws-ddb-13', name:'Redshift Architecture (12m)', h:0.19, p:'V.High'},
        {id:'aws-ddb-14', name:'Redshift DR and Resilience (4m)', h:0.06, p:'V.High'},
      ]},
      {id:'cl-saa-ml', name:'SAA · Machine Learning 101', hours:3, topics:[
        {id:'aws-ml-01', name:'Amazon Comprehend (7m)', h:0.12, p:'Low'},
        {id:'aws-ml-02', name:'Amazon Kendra (5m)', h:0.08, p:'Low'},
        {id:'aws-ml-03', name:'Amazon Lex (6m)', h:0.10, p:'Low'},
        {id:'aws-ml-04', name:'Amazon Polly (4m)', h:0.07, p:'Low'},
        {id:'aws-ml-05', name:'Amazon Rekognition (4m)', h:0.07, p:'Low'},
        {id:'aws-ml-06', name:'Amazon Textract (9m)', h:0.14, p:'Low'},
        {id:'aws-ml-07', name:'Amazon Transcribe (5m)', h:0.08, p:'Low'},
        {id:'aws-ml-08', name:'Amazon Translate (5m)', h:0.08, p:'Low'},
        {id:'aws-ml-09', name:'Amazon Forecast 101 (4m)', h:0.07, p:'Low'},
        {id:'aws-ml-10', name:'Amazon Fraud Detector (4m)', h:0.06, p:'Low'},
        {id:'aws-ml-11', name:'Amazon SageMaker (6m)', h:0.09, p:'Low'},
      ]},
      {id:'cl-saa-other', name:'SAA · Other Services & Features', hours:1, topics:[
        {id:'aws-other-01', name:'AWS Local Zones (9m)', h:0.15, p:'Low'},
      ]},
      {id:'cl-saa-exam', name:'SAA · EXAM', hours:2, topics:[
        {id:'aws-exam-01', name:'General AWS Exam Technique - 3 Phase Approach (9m)', h:0.15, p:'High'},
        {id:'aws-exam-02', name:'General AWS Question Technique - PART1 (14m)', h:0.24, p:'High'},
        {id:'aws-exam-03', name:'General AWS Question Technique - PART2 (9m)', h:0.15, p:'High'},
      ]},
    ]
  },
};

// ─── TRACK TAB RENDERING ───────────────────────────────────────────────────

const AWS_COURSE_URL = 'https://learn.cantrill.io/courses/1820301/lectures/41301625';

// The course home/start page for a topic's source, where we have one — Spring
// and SQL are single courses (track-wide), AWS is one course but only for the
// SAA groups within Cloud (Docker/K8s topics aren't from that course).
function courseUrlFor(track, groupId) {
  const def = TRACK_DEFS[track];
  if (def && def.courseUrl) return def.courseUrl;
  if (track === 'cloud' && groupId && groupId.indexOf('cl-saa-') === 0) return AWS_COURSE_URL;
  return null;
}

function linkedName(name, track, groupId) {
  const url = courseUrlFor(track, groupId);
  if (!url) return name;
  return `<a class="topic-link" href="${url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${name}</a>`;
}

function priClass(p) {
  return {'V.High':'pri-vh', 'High':'pri-h', 'Medium':'pri-m', 'Low':'pri-l'}[p] || 'pri-m';
}

function calcGroupStats(trackId, group) {
  const t = STATE.tracks[trackId] || {};
  let done = 0, prog = 0;
  group.topics.forEach(tp => {
    const st = t[tp.id] || 'not-started';
    if (st === 'done') done++;
    else if (st === 'in-progress') prog++;
  });
  return {done, prog, total: group.topics.length};
}

function renderTrackTab(trackId) {
  const def = TRACK_DEFS[trackId];
  if (!def) return;
  const el = document.getElementById('panel-'+trackId);

  // overview row per group
  let totalDone = 0, totalTopics = 0;
  def.groups.forEach(g => {
    const s = calcGroupStats(trackId, g);
    totalDone += s.done; totalTopics += g.topics.length;
  });
  const overallPct = totalTopics ? Math.round(totalDone/totalTopics*100) : 0;

  let html = `<div class="card" style="border-left:3px solid ${def.color}">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div>
        <div class="lbl" style="margin:0;color:${def.color}">${def.name}</div>
        <div id="overall-stats-${trackId}" style="font-size:12px;color:var(--dim);font-family:'JetBrains Mono',monospace;margin-top:2px">${def.totalHours}h total · ${totalDone}/${totalTopics} topics done</div>
      </div>
      <div id="overall-pct-${trackId}" style="font-size:24px;font-weight:700;font-family:'JetBrains Mono',monospace;color:${def.color}">${overallPct}%</div>
    </div>
    <div class="prog-bg" style="height:8px"><div class="prog-fill" id="overall-bar-${trackId}" style="width:${overallPct}%;background:${def.color};height:8px"></div></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-top:12px">
      ${def.groups.map(g => {
        const s = calcGroupStats(trackId, g);
        const p = s.total ? Math.round(s.done/s.total*100) : 0;
        return `<div class="track-overview" style="padding:8px 10px">
          <div class="to-bar" style="flex:1"><div class="to-bar-fill" id="mini-bar-${trackId}-${g.id}" style="width:${p}%;background:${def.color}"></div></div>
          <div id="mini-pct-${trackId}-${g.id}" style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace;min-width:32px;text-align:right">${p}%</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;

  def.groups.forEach(g => {
    const s = calcGroupStats(trackId, g);
    const pct = s.total ? Math.round(s.done/s.total*100) : 0;
    html += `<div class="track-section">
      <div class="track-section-hdr">
        <div>
          <div class="track-section-title">${g.name}</div>
          <div id="gsub-${trackId}-${g.id}" style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace;margin-top:1px">${g.hours}h · ${s.done}/${s.total} done${s.prog?' · '+s.prog+' in progress':''}</div>
        </div>
        <div id="gpct-${trackId}-${g.id}" class="track-pct-lbl" style="color:${def.color}">${pct}%</div>
      </div>
      <div class="track-section-prog" style="background:var(--surface2)"><div class="fill" id="gbar-${trackId}-${g.id}" style="width:${pct}%;background:${def.color}"></div></div>
      ${g.topics.map((tp, i) => {
        const st = (STATE.tracks[trackId]||{})[tp.id] || 'not-started';
        const cls = st === 'done' ? 's-done' : st === 'in-progress' ? 's-prog' : '';
        return `<div class="tr-row ${cls}" id="trr-${tp.id}">
          <div class="tr-num">${String(i+1).padStart(2,'0')}</div>
          <div class="tr-info">
            <div class="tr-name">${linkedName(tp.name, trackId, g.id)}</div>
            <div class="tr-meta-row">
              <span class="tr-hours">${tp.h}h</span>
              <span class="tr-pri ${priClass(tp.p)}">${tp.p}</span>
            </div>
          </div>
          <div class="tr-btns">
            <button class="trb trb-p" onclick="setTrackTopic('${trackId}','${tp.id}','in-progress','${g.id}')">→ Prog</button>
            <button class="trb trb-d" onclick="setTrackTopic('${trackId}','${tp.id}','done','${g.id}')">✓ Done</button>
          </div>
        </div>`;
      }).join('')}
    </div>`;
  });

  el.innerHTML = html;
}

function setTrackTopic(trackId, topicId, newState, groupId, force) {
  if (!STATE.tracks[trackId]) STATE.tracks[trackId] = {};
  const cur = STATE.tracks[trackId][topicId] || 'not-started';
  // force=true skips toggle (used by daily-check sync); otherwise toggle: same state → not-started
  STATE.tracks[trackId][topicId] = (!force && cur === newState) ? 'not-started' : newState;
  saveState(STATE);

  const st = STATE.tracks[trackId][topicId];
  const row = document.getElementById('trr-'+topicId);
  if (row) {
    row.className = 'tr-row' + (st==='done'?' s-done':st==='in-progress'?' s-prog':'');
  }
  // update group bars + labels
  const def = TRACK_DEFS[trackId];
  if (!def) return;
  let totalDone = 0, totalTopics = 0;
  def.groups.forEach(g => {
    const s = calcGroupStats(trackId, g);
    const p = s.total ? Math.round(s.done/s.total*100) : 0;
    totalDone += s.done; totalTopics += g.topics.length;
    const gb = document.getElementById('gbar-'+trackId+'-'+g.id);
    if (gb) gb.style.width = p+'%';
    const gpct = document.getElementById('gpct-'+trackId+'-'+g.id);
    if (gpct) gpct.textContent = p+'%';
    const gsub = document.getElementById('gsub-'+trackId+'-'+g.id);
    if (gsub) gsub.textContent = g.hours+'h · '+s.done+'/'+s.total+' done'+(s.prog?' · '+s.prog+' in progress':'');
    const mb = document.getElementById('mini-bar-'+trackId+'-'+g.id);
    if (mb) mb.style.width = p+'%';
    const mp = document.getElementById('mini-pct-'+trackId+'-'+g.id);
    if (mp) mp.textContent = p+'%';
  });
  // update overall header
  const op = totalTopics ? Math.round(totalDone/totalTopics*100) : 0;
  const ob = document.getElementById('overall-bar-'+trackId);
  if (ob) ob.style.width = op+'%';
  const opct = document.getElementById('overall-pct-'+trackId);
  if (opct) opct.textContent = op+'%';
  const ostats = document.getElementById('overall-stats-'+trackId);
  if (ostats) ostats.textContent = def.totalHours+'h total · '+totalDone+'/'+totalTopics+' topics done';
  invalidatePlan();
  if (document.getElementById('panel-today')) renderToday();
  if (SHOWN_WEEK !== null && document.getElementById('week-detail')) showWeek(SHOWN_WEEK);
}

// TRACK_DEFS is declared below the render code, so boot last — the scheduler
// reads the curriculum lists on its very first render.
init();

// ── PWA install prompt ──
// Only fires when the browser itself has verified the page is truly
// installable (valid manifest, correctly-sized icons, an active service
// worker with a fetch handler) — this is what separates a real "Install
// app" from the fallback "Add to Home Screen" bookmark behavior. Safari
// doesn't support this event at all; there, Add to Home Screen (with the
// apple-mobile-web-app-capable meta tag already set) is the only
// installation path iOS offers, so no button is shown or needed there.
var deferredInstallPrompt;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredInstallPrompt = e;
  var btn = document.createElement('button');
  btn.textContent = 'Install App';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px 18px;' +
    'background:var(--accent);color:var(--bg);border:none;border-radius:10px;' +
    'font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:700;' +
    'cursor:pointer;z-index:9999;box-shadow:0 4px 14px rgba(0,0,0,0.4)';
  document.body.appendChild(btn);
  btn.addEventListener('click', async function() {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    btn.remove();
  });
});
