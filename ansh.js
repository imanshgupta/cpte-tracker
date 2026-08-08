// ─── DATA ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'java-prep-tracker-v2';
const PLAN_START = '2026-08-10';
const PLAN_END   = '2027-02-19';

const GFG_MODULES = [
  { id:'basics', name:'DSA Basics', color:'#457b9d', topics:[
    {id:'basics-dsa-intro',    name:'DSA — What, Why and How?',    vt:2,  pt:0 },
    {id:'basics-analysis',     name:'Analysis of Algorithms',       vt:15, pt:0 },
    {id:'basics-arrays',       name:'Arrays',                       vt:12, pt:15},
    {id:'basics-recursion',    name:'Recursion',                    vt:14, pt:13},
    {id:'basics-hashing',      name:'Hashing',                      vt:17, pt:2 },
    {id:'basics-searching',    name:'Searching',                    vt:3,  pt:5 },
    {id:'basics-sorting',      name:'Sorting',                      vt:33, pt:9 },
    {id:'basics-ll',           name:'Linked List',                  vt:20, pt:18},
    {id:'basics-circular-ll',  name:'Circular Linked List',         vt:9,  pt:9 },
    {id:'basics-doubly-ll',    name:'Doubly Linked List',           vt:9,  pt:13},
    {id:'basics-stack',        name:'Stack',                        vt:6,  pt:2 },
    {id:'basics-queue',        name:'Queue',                        vt:4,  pt:2 },
    {id:'basics-dequeue',      name:'Dequeue',                      vt:2,  pt:0 },
    {id:'basics-tree',         name:'Tree',                         vt:15, pt:32},
    {id:'basics-bst',          name:'Binary Search Tree',           vt:19, pt:9 },
    {id:'basics-heap',         name:'Heap',                         vt:5,  pt:1 },
  ]},
  { id:'libraries', name:'Libraries (Java)', color:'#6a994e', topics:[
    {id:'libs-collection-overview', name:'Collection Overview',         vt:9,  pt:0 },
    {id:'libs-lambda',              name:'Java Lambda Expressions',     vt:3,  pt:3 },
    {id:'libs-streams',             name:'Java Streams',                vt:4,  pt:4 },
    {id:'libs-arraylist',           name:'ArrayList',                   vt:7,  pt:6 },
    {id:'libs-linkedlist',          name:'LinkedList (Java)',           vt:3,  pt:3 },
    {id:'libs-stack',               name:'Stack (Java)',                vt:6,  pt:9 },
    {id:'libs-queue',               name:'Queue (Java)',                vt:2,  pt:5 },
    {id:'libs-deque',               name:'Deque (Java)',                vt:2,  pt:5 },
    {id:'libs-priority-queue',      name:'PriorityQueue',               vt:5,  pt:7 },
    {id:'libs-hashset',             name:'HashSet and LinkedHashSet',   vt:5,  pt:4 },
    {id:'libs-treeset',             name:'TreeSet',                     vt:2,  pt:3 },
    {id:'libs-hashmap',             name:'HashMap and LinkedHashMap',   vt:6,  pt:4 },
    {id:'libs-treemap',             name:'TreeMap',                     vt:4,  pt:5 },
    {id:'libs-string',              name:'String (Java)',               vt:6,  pt:6 },
    {id:'libs-comparator',          name:'Comparator & Comparable',     vt:3,  pt:2 },
    {id:'libs-arrays-class',        name:'Arrays Class',                vt:9,  pt:4 },
    {id:'libs-collections-class',   name:'Collections class',           vt:6,  pt:6 },
    {id:'libs-sorting',             name:'Sorting (Java)',              vt:10, pt:5 },
  ]},
  { id:'advanced', name:'DSA Advanced', color:'#d4a373', topics:[
    {id:'adv-mathematics',  name:'Mathematics',                      vt:12, pt:11},
    {id:'adv-bit-magic',    name:'Bit Magic',                        vt:12, pt:12},
    {id:'adv-recursion',    name:'Recursion (Adv)',                  vt:3,  pt:7 },
    {id:'adv-arrays',       name:'Arrays (Adv)',                     vt:19, pt:20},
    {id:'adv-searching',    name:'Searching (Adv)',                  vt:16, pt:13},
    {id:'adv-sorting',      name:'Sorting (Adv)',                    vt:12, pt:16},
    {id:'adv-matrix',       name:'Matrix',                           vt:12, pt:15},
    {id:'adv-hashing',      name:'Hashing (Adv)',                    vt:12, pt:19},
    {id:'adv-strings',      name:'Strings (Adv)',                    vt:19, pt:33},
    {id:'adv-ll',           name:'Linked List (Adv)',                vt:12, pt:13},
    {id:'adv-stack',        name:'Stack (Adv)',                      vt:17, pt:11},
    {id:'adv-queue-deque',  name:'Queue and Deque (Adv)',            vt:6,  pt:3 },
    {id:'adv-tree',         name:'Tree (Adv)',                       vt:15, pt:27},
    {id:'adv-bst',          name:'Binary Search Tree (Adv)',         vt:13, pt:14},
    {id:'adv-heap',         name:'Heap (Adv)',                       vt:5,  pt:8 },
    {id:'adv-graph',        name:'Graph',                            vt:29, pt:23},
    {id:'adv-greedy',       name:'Greedy',                           vt:12, pt:6 },
    {id:'adv-backtracking', name:'Backtracking',                     vt:4,  pt:8 },
    {id:'adv-dp',           name:'Dynamic Programming',              vt:30, pt:28},
    {id:'adv-trie',         name:'Trie',                             vt:4,  pt:6 },
    {id:'adv-segment-bit',  name:'Segment and Binary Indexed Trees', vt:9,  pt:6 },
    {id:'adv-disjoint-set', name:'Disjoint Set',                     vt:5,  pt:4 },
  ]},
];

const WEEKS = [
  {wn:1,phase:'Phase 1: Foundation',title:'Spring L1-9 revision + DSA Big-O + Core Java OOP',days:[
    {d:'2026-08-10',dsa:'GFG DSA intro + Analysis of Algorithms videos 1-6',main:'Java Fundamentals: types, primitives, JVM/JRE/JDK, classpath',mt:'java',rot:'Setup: GitHub repo, IntelliJ, Spring Boot starter project',rt:'hands-on'},
    {d:'2026-08-11',dsa:'GFG: Big-O videos 7-12 + 5 complexity practice + Arrays intro',main:'📺 L1-3 (rev) · Enterprise Architecture, 1/2/3-Tier',mt:'spring',rot:'📺 SQL Bootcamp S1 Basics (18min) + S2: SELECT, DISTINCT, COUNT · 10 practice Q',rt:'sql',cRef:'sql-bc-s1'},
    {d:'2026-08-12',dsa:'GFG: Arrays intro + Largest + 2nd Largest + Reverse Array',main:'Java OOP fundamentals: inheritance, polymorphism deep, super/this',mt:'java',rot:'Hands-on: Refactor Spring Boot starter with 2 beans constructor injection',rt:'hands-on'},
    {d:'2026-08-13',dsa:'GFG: Arrays — Left/Right Rotation by K',main:'📺 L4-6 (rev) · Model 1 vs Model 2, MVC Architecture, Framework comparison',mt:'spring',rot:'Full Week-so-far revision + self-quiz (10 Q)',rt:'revision'},
    {d:'2026-08-14',dsa:'GFG: Arrays — Kadane\'s Algorithm + variants',main:'Java OOP: Abstraction, Encapsulation, IS-A vs HAS-A',mt:'java',rot:'📺 SQL Bootcamp S2: WHERE 1&2, ORDER BY, LIMIT, BETWEEN, IN, LIKE/ILIKE + exercises',rt:'sql',cRef:'sql-bc-s2'},
    {d:'2026-08-15',dsa:'GFG: Arrays — Stock Buy/Sell + Move Zeroes',main:'📺 L7-9 (rev) · Spring history + modules + App Development-1',mt:'spring',rot:'Hands-on: Trace bean creation in Spring Boot app, log lifecycle',rt:'hands-on'},
    {d:'2026-08-16',dsa:'GFG: Arrays — Set Matrix Zeros + Pascal\'s Triangle',main:'Java Method overloading vs overriding, dynamic dispatch',mt:'java',rot:'📺 SQL Bootcamp S3: Aggregation Functions, GROUP BY 1&2, HAVING (33min) + practice',rt:'sql',cRef:'sql-bc-s3'},
  ]},
  {wn:2,phase:'Phase 1: Foundation',title:'Spring L10-21 revision + Exception Handling + Annotations',days:[
    {d:'2026-08-17',dsa:'GFG: Arrays — Next Permutation + Sort 0/1/2',main:'📺 L10-12 (rev) · App Dev-2,3 + BeanFactory Resources',mt:'spring',rot:'Hands-on: BeanFactory experiment — load from XML vs Java config',rt:'hands-on'},
    {d:'2026-08-18',dsa:'GFG: Arrays final — Merge Intervals + Find Duplicate',main:'Java Abstract class vs Interface, Java 8 defaults, diamond problem',mt:'java',rot:'📺 LLD S1 · Game Engine — OOP design thinking (45min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s1'},
    {d:'2026-08-19',dsa:'GFG: Recursion intro + factorial, sum-N, power',main:'📺 L13-15 (rev) · ApplicationContext, BeanFactory vs ApplicationContext',mt:'spring',rot:'Hands-on: Inspect ApplicationContext, list all beans programmatically',rt:'hands-on'},
    {d:'2026-08-20',dsa:'GFG: Recursion — Fibonacci + palindrome check',main:'Java Static keyword deep + Final keyword deep',mt:'java',rot:'Full week revision + self-quiz (15 Q)',rt:'revision'},
    {d:'2026-08-21',dsa:'GFG: Recursion — generate subsets (backtracking intro)',main:'📺 L16-18 (rev) · Beans + Scopes (singleton/prototype/request/session)',mt:'spring',rot:'📺 SQL Bootcamp S4: JOINs intro, AS statement, INNER JOIN, FULL OUTER JOIN (37min) + 10Q',rt:'sql'},
    {d:'2026-08-22',dsa:'GFG: Recursion — print all permutations',main:'Java String pool, immutability, intern(), == vs equals',mt:'java',rot:'Hands-on: Test bean scopes — singleton vs prototype counter',rt:'hands-on'},
    {d:'2026-08-23',dsa:'GFG: Recursion — N-Queens intro, subset sum',main:'📺 L19-21 (rev) · Java Configurations + Bean Lifecycle (init, destroy)',mt:'spring',rot:'📺 SQL Bootcamp S4: LEFT/RIGHT JOIN, UNION, JOIN challenge tasks (31min) + practice',rt:'sql',cRef:'sql-bc-s4'},
  ]},
  {wn:3,phase:'Phase 1: Foundation',title:'Spring L22-35 revision finish + L35 NEW + Hashing + Searching',days:[
    {d:'2026-08-24',dsa:'GFG: Hashing intro + frequency counter',main:'📺 L22-24 (rev) · Bean Lifecycle deep + Inheritance + BeanPostProcessor',mt:'spring',rot:'Hands-on: Custom BeanPostProcessor for logging',rt:'hands-on'},
    {d:'2026-08-25',dsa:'GFG: Hashing — 2 Sum, anagram check',main:'Java StringBuilder vs StringBuffer, perf benchmark',mt:'java',rot:'📺 LLD S2 · SRP (45min) + S3 · Prototype Pattern (35min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s2','sd-lld-s3']},
    {d:'2026-08-26',dsa:'GFG: Hashing — first unique char, longest subarray sum K',main:'📺 L25-27 (rev) · IoC + Constructor DI + Setter DI + List/Set/Map',mt:'spring',rot:'Hands-on: Implement equals/hashCode, test in HashSet/HashMap',rt:'hands-on'},
    {d:'2026-08-27',dsa:'GFG: Hashing — group anagrams, subarray with XOR',main:'📺 L28-30 (rev) · Circular DI + Constructor vs Setter + Namespaces',mt:'spring',rot:'Full week revision + self-quiz',rt:'revision'},
    {d:'2026-08-28',dsa:'GFG: Searching — Binary Search variants (first/last occurrence)',main:'Java Exception handling: hierarchy, checked vs unchecked, try-with-resources',mt:'java',rot:'📺 SQL Bootcamp S5: Timestamps, Math functions, String functions, SubQuery (47min) + exercises',rt:'sql',cRef:'sql-bc-s5'},
    {d:'2026-08-29',dsa:'GFG: Searching — Binary Search on Answer (sqrt, peak)',main:'📺 L31-33 (rev) · C-Namespace + Autowiring + Bean Collaboration + XML autowiring',mt:'spring',rot:'Hands-on: Refactor project to use @Autowired with @Qualifier + @Primary',rt:'hands-on'},
    {d:'2026-08-30',dsa:'GFG: Searching final — Search in rotated sorted array',main:'📺 L34 (rev) + 📺 L35 (new) · Annotation-Based Autowiring + Autodiscovery-1 (@Component)',mt:'spring',rot:'📺 SQL Bootcamp S5: Self-Join + S6: Keys/Constraints + S7: CASE, COALESCE, CAST (53min)',rt:'sql',cRef:'sql-bc-s6'},
  ]},
  {wn:4,phase:'Phase 1: Foundation',title:'Spring NEW content begins · Autodiscovery + Linked List',days:[
    {d:'2026-08-31',dsa:'GFG: Sorting — Merge Sort (recursion tree + O(n log n))',main:'📺 L36-37 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations)',mt:'spring',rot:'Hands-on: Refactor project — clean @Service/@Repository separation',rt:'hands-on'},
    {d:'2026-09-01',dsa:'GFG: Sorting — Quick Sort (partition logic)',main:'Java Object class methods, Wrapper classes, autoboxing',mt:'java',rot:'📺 LLD S4 · DRY + Iterator (30min) + S5 · OCP + Builder (40min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s4','sd-lld-s5']},
    {d:'2026-09-02',dsa:'GFG: Sorting + Linked List intro',main:'📺 L38-39 · Autodiscovery-4 + Java-Based Autowiring (@Configuration deep)',mt:'spring',rot:'Hands-on: Pure Java config (no XML) for 3 beans',rt:'hands-on'},
    {d:'2026-09-03',dsa:'GFG: Linked List — Reverse (iterative + recursive)',main:'Java Generics basics: type params, wildcards, PECS',mt:'java',rot:'Full week revision + self-quiz + plan Week 5',rt:'revision'},
    {d:'2026-09-04',dsa:'GFG: Linked List — Detect Cycle (Floyd\'s), find cycle start',main:'📺 L40 · Explicit Wiring vs Autowiring drawbacks · 🆕 Bean Validation API supplement (Baeldung)',mt:'spring',rot:'📺 SQL Bootcamp S7: NULLIF, Views (25min) + Phase 1 SQL done — full review + exercises',rt:'sql',cRef:'sql-bc-s7'},
    {d:'2026-09-05',dsa:'GFG: Linked List — Merge two sorted, find middle',main:'Java I/O & NIO basics, Files/Path, BufferedReader/Writer',mt:'java',rot:'Hands-on: refactor project to DTO + MapStruct (🆕 supplement Amigoscode)',rt:'hands-on'},
    {d:'2026-09-06',dsa:'GFG: Linked List — Palindrome, Remove Nth from end',main:'📺 L41-42 · Method Injection + Method Replacement',mt:'spring',rot:'PHASE 1 RETRO + plan Phase 2',rt:'revision'},
  ]},
  {wn:5,phase:'Phase 2: Core Backend',title:'Spring L43-48 Validations + Events + LL deep + Threading',days:[
    {d:'2026-09-07',dsa:'GFG: LL — Merge K sorted (intro to heap)',main:'Java Part B start: Thread vs Runnable, lifecycle, daemon threads',mt:'java',rot:'Hands-on: Multi-threaded counter demo, race condition reproduction',rt:'hands-on'},
    {d:'2026-09-08',dsa:'GFG: LL — Add two numbers as LL',main:'📺 L43-44 · Bean Validations-1,2',mt:'spring',rot:'📺 Adv SQL S2: Subqueries overview, FROM subqueries, CTEs, Comparison subqueries',rt:'sql'},
    {d:'2026-09-09',dsa:'GFG: LL — Intersection of 2 LL, sort LL',main:'Java start()/run(), join, sleep, yield, interrupt',mt:'java',rot:'Hands-on: Custom @Constraint with Bean Validation API',rt:'hands-on'},
    {d:'2026-09-10',dsa:'GFG: LL Circular + Doubly intro',main:'📺 L45-46 · Bean Validations-3 + Event Handling',mt:'spring',rot:'📺 LLD S6 · LSP — Liskov Substitution Principle (31min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s6'},
    {d:'2026-09-11',dsa:'GFG: Stack intro + Valid Parentheses + Reverse Stack',main:'Java synchronized: method/block/static, intrinsic lock',mt:'java',rot:'📺 Adv SQL S2: IN/NOT IN, ANY/ALL, EXISTS, Recursive CTEs + exercises',rt:'sql',cRef:'sql-adv-s2'},
    {d:'2026-09-12',dsa:'GFG: Stack — Next Greater Element (monotonic stack)',main:'📺 L47-48 · Custom Event Handling + Internationalization-1',mt:'spring',rot:'Hands-on: Publish + listen to custom events in app',rt:'hands-on'},
    {d:'2026-09-13',dsa:'GFG: Stack — Stock Span, Largest Rectangle in Histogram',main:'Java volatile, visibility vs atomicity, happens-before',mt:'java',rot:'📺 Adv SQL S3: Window Functions — OVER, PARTITION BY, ordering, frames (41min) + practice',rt:'sql',cRef:'sql-adv-s3'},
  ]},
  {wn:6,phase:'Phase 2: Core Backend',title:'Spring L49-57 SpEL + Bean Wrappers + Profiling + DAO intro',days:[
    {d:'2026-09-14',dsa:'GFG: Stack — getMin O(1), 2 stacks problem',main:'📺 L49-50 · Internationalization-2 + Bean Manipulations & Wrappers-1',mt:'spring',rot:'Hands-on: i18n message bundles for app',rt:'hands-on'},
    {d:'2026-09-15',dsa:'GFG: Queue intro + implementations (array/LL)',main:'Java wait/notify/notifyAll, monitor, spurious wakeups',mt:'java',rot:'📺 LLD S7 · ISP + DIP + Singleton + Chain of Responsibility (39min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s7'},
    {d:'2026-09-16',dsa:'GFG: Queue using stacks + Sliding Window Max (Deque)',main:'📺 L51-52 · Bean Wrappers-2 + Property Editors',mt:'spring',rot:'Hands-on: Custom PropertyEditor for date formatting',rt:'hands-on'},
    {d:'2026-09-17',dsa:'GFG: Deque + LRU Cache (HashMap + DLL)',main:'📺 L53-54 · Profiling + SpEL-1',mt:'spring',rot:'Full week rev + self-mock 30min Q&A + plan',rt:'revision'},
    {d:'2026-09-18',dsa:'GFG: Tree intro + traversals (preorder/inorder/postorder)',main:'📺 L55-56 · SpEL-2,3',mt:'spring',rot:'📺 Adv SQL S4: Self/Cross/Full/USING/Natural joins (35min) + S5: UNION, INTERSECT, EXCEPT (20min)',rt:'sql',cRef:['sql-adv-s4','sql-adv-s5']},
    {d:'2026-09-19',dsa:'GFG: Tree — Level order (BFS), zigzag',main:'Java ExecutorService, Executors factory (fixed/cached/single/scheduled)',mt:'java',rot:'Hands-on: Submit 10 tasks to fixed pool of 3, observe queueing',rt:'hands-on'},
    {d:'2026-09-20',dsa:'GFG: Tree — Height, Diameter, recursion pattern',main:'📺 L57 · DAO Introduction',mt:'spring',rot:'📺 Adv SQL S6: Grouping Sets, CUBE, ROLLUP, multi-dimensional aggregations (33min) + exercises',rt:'sql',cRef:'sql-adv-s6'},
  ]},
  {wn:7,phase:'Phase 2: Core Backend',title:'Spring L60-67 DAO + JdbcTemplate + Tree + CompletableFuture',days:[
    {d:'2026-09-21',dsa:'GFG: Tree — LCA (classic recursion)',main:'📺 L60 · Spring DAO Exceptions + Spring JDBC Intro',mt:'spring',rot:'📺 Adv SQL S7: Info schema, Comments, Constraints, Foreign keys (53min) + exercises',rt:'sql',cRef:'sql-adv-s7'},
    {d:'2026-09-22',dsa:'GFG: Tree — Boundary, Top/Bottom/Left/Right view',main:'Java Callable vs Runnable, Future, get() blocks',mt:'java',rot:'Hands-on: Trace JDBC driver loading, connection setup',rt:'hands-on'},
    {d:'2026-09-23',dsa:'GFG: Tree — Path Sum problems, max path sum',main:'📺 L61-62 · JdbcTemplate-1,2 (basic queries)',mt:'spring',rot:'📺 LLD S8 · Memento + Proxy + Flyweight (25min) + S9 · TDD + State + Strategy + Factory (28min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s8','sd-lld-s9']},
    {d:'2026-09-24',dsa:'GFG: Tree — Symmetric, Same, Invert',main:'📺 L63-64 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper)',mt:'spring',rot:'Full week rev + self-mock 45min + plan',rt:'revision'},
    {d:'2026-09-25',dsa:'GFG: BST — Insert, Search, Delete',main:'📺 L65 · Positional + Named Parameters',mt:'spring',rot:'📺 Adv SQL S8: Transactions — BEGIN/COMMIT/ROLLBACK, SAVEPOINT, DB locks (47min) + practice',rt:'sql',cRef:'sql-adv-s8'},
    {d:'2026-09-26',dsa:'GFG: BST — Validate BST (inorder + range)',main:'📺 L66-67 · NamedParameterJdbcTemplate-1,2',mt:'spring',rot:'Hands-on: Convert SQL repository to NamedParameterJdbcTemplate',rt:'hands-on'},
    {d:'2026-09-27',dsa:'GFG: BST — Kth smallest, LCA in BST',main:'Java CompletableFuture deep: thenApply, thenCompose, thenCombine',mt:'java',rot:'📺 Adv SQL S9: Range + List partitioning + Table inheritance (start, ~45min)',rt:'sql'},
  ]},
  {wn:8,phase:'Phase 2: Core Backend',title:'Spring L73-81 Batch + StoredProc + BLOB + Heap',days:[
    {d:'2026-09-28',dsa:'GFG: Heap intro + PriorityQueue API + Build heap O(n)',main:'📺 L73-74 · Batch Updates-1,2',mt:'spring',rot:'📺 LLD S10 · Strategy Pattern — deep dive (42min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s10'},
    {d:'2026-09-29',dsa:'GFG: Heap — Kth Largest, Top K Frequent',main:'📺 L75-76 · Stored Procedures and Functions-1,2',mt:'spring',rot:'Hands-on: Batch insert 10k rows with batchUpdate',rt:'hands-on'},
    {d:'2026-09-30',dsa:'GFG: Heap — Median Data Stream (two heaps), Merge K sorted lists',main:'📺 L77-78 · Stored Procedures and Functions-3,4',mt:'spring',rot:'📺 LLD S11 · Command Pattern + PubSub (34min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s11'},
    {d:'2026-10-01',dsa:'GFG: Heap — Task Scheduler, Sliding Window Median',main:'📺 L79 · BLOB and CLOB-1',mt:'spring',rot:'Full week rev + self-mock (URL Shortener whiteboard)',rt:'revision'},
    {d:'2026-10-02',dsa:'GFG: DSA Basics DONE! Start Libraries — Collection Overview',main:'📺 L80-81 · BLOB and CLOB-2,3',mt:'spring',rot:'📺 Adv SQL S9: Hash partitioning + partitioning exercises (finish S9)',rt:'sql',cRef:'sql-adv-s9'},
    {d:'2026-10-03',dsa:'GFG Libraries — Lambda Expressions deep',main:'Java Atomic classes (AtomicInteger, AtomicLong), CAS basics',mt:'java',rot:'Hands-on: Upload/download PDFs with BLOB',rt:'hands-on'},
    {d:'2026-10-04',dsa:'GFG Libraries — Streams intro (map, filter, forEach, reduce)',main:'Java BlockingQueue (ArrayBlocking, LinkedBlocking, etc.)',mt:'java',rot:'Hands-on: Producer-Consumer with BlockingQueue properly',rt:'hands-on'},
  ]},
  {wn:9,phase:'Phase 2: Core Backend',title:'Spring L82-85 Connection Pooling + JPA start + First apply!',days:[
    {d:'2026-10-05',dsa:'GFG Libraries — Streams Collectors deep (groupingBy, partitioningBy)',main:'📺 L82-83 · Connection Pooling-1,2 + 🆕 HikariCP modern config (Daily Code Buffer)',mt:'spring',rot:'⌨️ MC-S1 · Splitwise — machine coding walkthrough (53min) [InterviewReady]',rt:'sd',cRef:'sd-mc-s1'},
    {d:'2026-10-06',dsa:'GFG Libraries — ArrayList + LinkedList',main:'📺 L84-85 · Connection Pooling-3,4',mt:'spring',rot:'Hands-on: HikariCP tuning for Spring Boot app',rt:'hands-on'},
    {d:'2026-10-07',dsa:'GFG Libraries — Stack + Queue (Java specific)',main:'🆕 Spring Data JPA intro (Telusko) — CrudRepository, JpaRepository',mt:'spring',rot:'📺 Adv SQL S10: Views — Creating, Updating, Materialized, Recursive views (1h 10min)',rt:'sql',cRef:'sql-adv-s10'},
    {d:'2026-10-08',dsa:'GFG Libraries — Deque + PriorityQueue deep',main:'🆕 Spring Data JPA: derived queries, @Query custom',mt:'spring',rot:'Full week rev + self-mock + APPLY TO FIRST 3 EASY COMPANIES',rt:'revision'},
    {d:'2026-10-09',dsa:'GFG Libraries — HashSet + LinkedHashSet',main:'🆕 Spring Data JPA: Projections + Specifications',mt:'spring',rot:'📺 Adv SQL S11: PL/pgSQL functions (36min) + S12: Stored Procedures (31min)',rt:'sql',cRef:['sql-adv-s11','sql-adv-s12']},
    {d:'2026-10-10',dsa:'GFG Libraries — TreeSet, NavigableSet methods',main:'🆕 N+1 problem deep (Vlad Mihalcea) + JOIN FETCH',mt:'spring',rot:'Hands-on: Reproduce N+1, fix with JOIN FETCH, verify SQL count',rt:'hands-on'},
    {d:'2026-10-11',dsa:'GFG Libraries — HashMap + LinkedHashMap deep',main:'🆕 @EntityGraph + Fetch types (LAZY/EAGER) deep',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt1 — LRU design + start [InterviewReady]',rt:'sd'},
  ]},
  {wn:10,phase:'Phase 2: Core Backend',title:'Spring L91-99 AOP + JPA Cascading + Microservices intro',days:[
    {d:'2026-10-12',dsa:'GFG Libraries — TreeMap, NavigableMap',main:'📺 L91-92 · AOP Introduction + Terminology',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s2'},
    {d:'2026-10-13',dsa:'GFG Libraries — String class (Java methods deep)',main:'📺 L93 · Advices + 🆕 Cascading + dirty checking (Thorben Janssen)',mt:'spring',rot:'Hands-on: Cascading test — orphan removal scenarios',rt:'hands-on'},
    {d:'2026-10-14',dsa:'GFG Libraries — Comparator & Comparable',main:'📺 L94-95 · Pointcuts + MethodBeforeAdvice-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt1 — design + start [InterviewReady]',rt:'sd'},
    {d:'2026-10-15',dsa:'GFG Libraries — Arrays Class + Collections class',main:'📺 L96-97 · MethodBeforeAdvice-2 + AfterAdvice',mt:'spring',rot:'Full week rev + self-mock (E-commerce design) + @Aspect logging interceptor',rt:'revision'},
    {d:'2026-10-16',dsa:'GFG Libraries — Sorting (Java, custom comparators)',main:'📺 L98-99 · ThrowsAdvice + AroundAdvice',mt:'spring',rot:'📺 Adv SQL S13: Triggers — create, trigger functions, before/after, enable/disable (39min)',rt:'sql',cRef:'sql-adv-s13'},
    {d:'2026-10-17',dsa:'GFG: Libraries DONE! Start DSA Advanced — Mathematics intro',main:'Java Generics deep: type erasure, why new T[] fails, PECS examples',mt:'java',rot:'Hands-on: Build @Around aspect for method timing',rt:'hands-on'},
    {d:'2026-10-18',dsa:'GFG Advanced — Bit Magic essentials (XOR tricks, single number)',main:'🆕 Optimistic vs Pessimistic locking (@Version, @Lock)',mt:'spring',rot:'📺 Adv SQL S14: EXPLAIN, EXPLAIN ANALYZE, TRUNCATE, COPY (start, ~40min)',rt:'sql'},
  ]},
  {wn:11,phase:'Phase 2: Core Backend',title:'Spring L100-107 AspectJ + Transactions + Microservices basics',days:[
    {d:'2026-10-19',dsa:'GFG Adv: Arrays — sliding window patterns',main:'📺 L100-101 · AspectJ Style AOP + Declarative-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s3'},
    {d:'2026-10-20',dsa:'GFG Adv: Arrays — prefix sum advanced + difference arrays',main:'📺 L102-103 · Declarative-2 + AspectJ Annotation Style-1',mt:'spring',rot:'Hands-on: @Aspect + @Pointcut expressions practice',rt:'hands-on'},
    {d:'2026-10-21',dsa:'GFG Adv: Searching — binary search on answer (deep)',main:'📺 L104-105 · AspectJ Annotation-2 + Transactions Intro',mt:'spring',rot:'Hands-on: @Transactional on service layer, observe rollback',rt:'hands-on'},
    {d:'2026-10-22',dsa:'GFG Adv: Sorting — count inversions, merge sort variations',main:'📺 L106-107 · ACID + Isolation + Transaction Support in Spring',mt:'spring',rot:'Full week rev + self-mock (Payment Service design)',rt:'revision'},
    {d:'2026-10-23',dsa:'GFG Adv: Strings — KMP intro, pattern matching',main:'🆕 Microservices vs Monolith intro (in28minutes)',mt:'spring',rot:'📺 Adv SQL S14: Arrays, JSON/JSONB, Extensions + exercises (finish S14)',rt:'sql',cRef:'sql-adv-s14'},
    {d:'2026-10-24',dsa:'GFG Adv: Strings — anagram patterns, palindromes',main:'Java Part C start: JVM architecture: classloaders, runtime data areas',mt:'java',rot:'Hands-on: Split monolith into User + Order Service',rt:'hands-on'},
    {d:'2026-10-25',dsa:'GFG Adv: Strings — Longest Palindromic Substring',main:'🆕 Service Discovery (Eureka concept)',mt:'spring',rot:'SQL interview prep: CTEs + Window Functions mock questions (practice-only)',rt:'sql',cRef:'sql-prep-1'},
  ]},
  {wn:12,phase:'Phase 2: Core Backend',title:'Spring L108-119 Tx mgmt + Hibernate/JPA + Phase 2 wrap',days:[
    {d:'2026-10-26',dsa:'GFG Adv: LL — Reverse in K groups, flatten LL',main:'📺 L108-109 · Programmatic Transaction Management-1,2',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt1 — token bucket + sliding window design [InterviewReady]',rt:'sd'},
    {d:'2026-10-27',dsa:'GFG Adv: LL — clone with random pointer, LRU deep',main:'📺 L110-111 · Declarative Tx with XML + Annotations',mt:'spring',rot:'Hands-on: @Transactional on multiple service methods',rt:'hands-on'},
    {d:'2026-10-28',dsa:'GFG Adv: Stack — monotonic stack patterns deep',main:'🆕 @Transactional propagation deep (REQUIRES_NEW, NESTED, MANDATORY)',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s4'},
    {d:'2026-10-29',dsa:'GFG Adv: Stack — expression evaluation, infix-postfix',main:'📺 L112-113 · Hibernate Intro + Application',mt:'spring',rot:'Full week rev + self-mock (Food Delivery design)',rt:'revision'},
    {d:'2026-10-30',dsa:'GFG Adv: Queue & Deque — sliding window deep',main:'📺 L114-115 · Spring-Hibernate Integration-1,2',mt:'spring',rot:'SQL interview prep: EXPLAIN ANALYZE + query optimization + index problems',rt:'sql',cRef:'sql-prep-2'},
    {d:'2026-10-31',dsa:'GFG Adv: Queue — implement using arrays, design problems',main:'📺 L116-117 · Spring-Hibernate Integration-3 + JPA Intro',mt:'spring',rot:'Hands-on: Migrate Hibernate config to Spring Data JPA',rt:'hands-on'},
    {d:'2026-11-01',dsa:'GFG Adv: Tree advanced — Construct from preorder/inorder',main:'📺 L118-119 · JPA Application + Spring-JPA Integration',mt:'spring',rot:'SQL interview prep: Transactions + ACID isolation levels + partitioning problems',rt:'sql',cRef:'sql-prep-3'},
  ]},
  {wn:13,phase:'Phase 3: Distributed',title:'Spring L120-130 MVC + Docker + JVM Diagnostics',days:[
    {d:'2026-11-02',dsa:'GFG Adv: Tree — Construct from inorder+postorder, serialize/deserialize',main:'📺 L120-121 · Spring Web MVC Introduction-1,2',mt:'spring',rot:'Cloud start: Docker basics: container vs VM, Dockerfile',rt:'cloud'},
    {d:'2026-11-03',dsa:'GFG Adv: Tree — Vertical order, all paths',main:'📺 L122-123 · MVC Elements + Flow + DispatcherServlet',mt:'spring',rot:'Hands-on: Dockerfile for Spring Boot, multi-stage build',rt:'hands-on'},
    {d:'2026-11-04',dsa:'GFG Adv: Tree — Burning tree, time to burn from target',main:'📺 L124-125 · HandlerMapping + Controller + ViewResolver basics',mt:'spring',rot:'Cloud Docker Compose: services, volumes, networks',rt:'cloud'},
    {d:'2026-11-05',dsa:'GFG Adv: BST — Inorder successor/predecessor, fix swapped',main:'📺 L126-127 · Spring MVC Application + Internal Flow-1',mt:'spring',rot:'Full week rev + self-mock + JVM diagnostics: thread dump (jstack)',rt:'revision'},
    {d:'2026-11-06',dsa:'GFG Adv: BST — Convert sorted array to BST, merge 2 BSTs',main:'Java Heap dump analysis (jmap, MAT), memory leaks',mt:'java',rot:'Hands-on: Compose for app + Postgres + Redis + Kafka',rt:'hands-on'},
    {d:'2026-11-07',dsa:'GFG Adv: Heap advanced — design problems with heap',main:'📺 L128-129 · MVC Application-2,3 + Login Application (annotations focus)',mt:'spring',rot:'Cloud K8s intro: Pods, ReplicaSets, Deployments, Services',rt:'cloud'},
    {d:'2026-11-08',dsa:'GFG Adv: Heap — Sliding window median (deep), median stream',main:'📺 L130 · @SessionAttribute + @RequestParam + 🆕 REST intro (Daily Code Buffer)',mt:'spring',rot:'SQL final mock: end-to-end challenge (JOIN + CTE + Window Function + EXPLAIN)',rt:'sql',cRef:'sql-prep-4'},
  ]},
  {wn:14,phase:'Phase 3: Distributed',title:'Spring L147-155 Handler Mapping + ViewResolver + LLD + Modern Java',days:[
    {d:'2026-11-09',dsa:'GFG Adv: Graph intro + representations + BFS',main:'📺 L147-148 · BeanNameUrlHandlerMapping + SimpleUrlHandlerMapping',mt:'spring',rot:'⌨️ InterviewReady LLD Test + Full Review Session',rt:'sd',cRef:'sd-mc-test'},
    {d:'2026-11-10',dsa:'GFG Adv: Graph — DFS (recursive + iterative)',main:'📺 L149-150 · DefaultAnnotationHandlerMapping + HandlerInterceptor-1',mt:'spring',rot:'Cloud K8s: ConfigMaps, Secrets, namespaces, RBAC',rt:'cloud'},
    {d:'2026-11-11',dsa:'GFG Adv: Graph — Connected components (islands variants)',main:'📺 L151-152 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource)',mt:'spring',rot:'Hands-on: Deploy Spring Boot to Minikube/Kind, kubectl basics',rt:'hands-on'},
    {d:'2026-11-12',dsa:'GFG Adv: Graph — Cycle detection',main:'📺 L153-154 · XMLViewResolver + Exception Handling (@ControllerAdvice)',mt:'spring',rot:'Full week rev + first external mock (Pramp/friend, 1hr Java)',rt:'mock'},
    {d:'2026-11-13',dsa:'GFG Adv: Graph — Bipartite check',main:'📺 L155 + 🆕 RFC 7807 + Global error handling supplement',mt:'spring',rot:'SD: News Feed / Timeline — fanout strategies',rt:'sd',cRef:'sd-hld-news-feed'},
    {d:'2026-11-14',dsa:'GFG Adv: Graph — Topological Sort (Kahn\'s + DFS)',main:'Java Java 14-17: switch expressions, text blocks, records',mt:'java',rot:'Hands-on: Liveness/Readiness probes in K8s deployment',rt:'hands-on'},
    {d:'2026-11-15',dsa:'GFG Adv: Graph — Course Schedule (topo sort applied)',main:'🆕 DTOs vs Entities + MapStruct (Amigoscode)',mt:'spring',rot:'Cloud K8s: Service types + HPA',rt:'cloud'},
  ]},
  {wn:15,phase:'Phase 3: Distributed',title:'Spring L156-175 File handling + Security + Virtual Threads ⭐',days:[
    {d:'2026-11-16',dsa:'GFG Adv: Graph — Dijkstra (PQ-based shortest path)',main:'📺 L156-157 · File Uploading + File Downloading',mt:'spring',rot:'SD: Distributed Cache / Key-Value Store — consistent hashing',rt:'sd'},
    {d:'2026-11-17',dsa:'GFG Adv: Graph — Bellman-Ford',main:'📺 L158 · Internationalization-1 + 🆕 CORS configuration',mt:'spring',rot:'Cloud AWS: EC2, S3, RDS, ELB, CloudWatch, IAM',rt:'cloud'},
    {d:'2026-11-18',dsa:'GFG Adv: Graph — Floyd-Warshall (all-pairs)',main:'📺 L171-172 · Web Security Introduction + Authentication Mechanisms-1',mt:'spring',rot:'Hands-on: Enable virtual threads (🌟 supplement Dan Vega), benchmark',rt:'hands-on'},
    {d:'2026-11-19',dsa:'GFG Adv: Graph — Word Ladder, Islands variations',main:'📺 L173-174 · Authentication Mechanisms-2,3',mt:'spring',rot:'Full week rev + 2nd external mock (Spring focus, 1hr)',rt:'mock'},
    {d:'2026-11-21',dsa:'GFG Adv: Graph — Course Schedule II, Alien Dictionary',main:'📺 L175 · Spring Security Models + 🆕 Spring Security 6 architecture (Daily Code Buffer)',mt:'spring',rot:'SD HLD: URL Shortener full walkthrough — hashing, DB, cache, scale',rt:'sd',cRef:'sd-hld-url-shortener'},
    {d:'2026-11-22',dsa:'GFG Adv: Graph — Clone Graph (DFS/BFS with HashMap)',main:'🆕 JWT auth filter implementation (Bouali Ali)',mt:'spring',rot:'Cloud AWS: SQS, ECS, EKS, Fargate, ECR + CI/CD',rt:'cloud'},
    {d:'2026-11-23',dsa:'GFG Adv: Graph — Network Delay Time, Min cost path',main:'🆕 JWT continued — OncePerRequestFilter, token extraction',mt:'spring',rot:'SD HLD: Rate Limiter full walkthrough — token bucket, sliding window',rt:'sd',cRef:'sd-hld-rate-limiter'},
  ]},
  {wn:16,phase:'Phase 3: Distributed',title:'Spring L176-180 Maven + Security finish + DP + Virtual Threads',days:[
    {d:'2026-11-24',dsa:'GFG Adv: DP intro — Fibonacci memoization, climbing stairs',main:'🆕 Method-level security (@PreAuthorize, @PostAuthorize, SpEL)',mt:'spring',rot:'SD HLD: Notification Service (queue-based, retry, DLQ)',rt:'sd',cRef:'sd-hld-notification'},
    {d:'2026-11-25',dsa:'GFG Adv: DP — House Robber I & II (linear DP)',main:'📺 L176-177 · Maven Introduction + POM-1',mt:'spring',rot:'Cloud GitHub Actions / Jenkins CI/CD pipeline',rt:'cloud'},
    {d:'2026-11-26',dsa:'GFG Adv: DP — Coin Change',main:'📺 L178-179 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance)',mt:'spring',rot:'Hands-on: CI/CD pipeline draft (build → test → docker push)',rt:'hands-on'},
    {d:'2026-11-27',dsa:'GFG Adv: DP — LIS (O(n²) + O(n log n))',main:'📺 L180 · POM-4 (Build Configurations + Profiles)',mt:'spring',rot:'Full week rev + 3rd external mock (SD + LLD, 90min)',rt:'mock'},
    {d:'2026-11-28',dsa:'GFG Adv: DP — LCS (2D DP), edit distance',main:'🆕 OAuth2 awareness (Daily Code Buffer)',mt:'spring',rot:'SD: Distributed locks (Redis/ZooKeeper)',rt:'sd',cRef:'sd-hld-distributed-locks'},
    {d:'2026-11-29',dsa:'GFG Adv: DP — 0/1 Knapsack + space optimization',main:'🌟 Virtual Threads (Java 21 / Project Loom) intro',mt:'java',rot:'Hands-on: Distributed tracing in microservices (Sleuth/OpenTelemetry)',rt:'hands-on'},
    {d:'2026-11-30',dsa:'GFG Adv: DP — Subset Sum, Partition Equal Subset',main:'🌟 Spring Boot 3.2 virtual threads integration (spring.threads.virtual.enabled)',mt:'spring',rot:'Behavioral start: Draft first 4 STAR stories',rt:'behavioral'},
  ]},
  {wn:17,phase:'Phase 3: Distributed',title:'Spring L187-193 Boot + 🚨 Genpact last day + Full-loop sims',days:[
    {d:'2026-12-01',dsa:'GFG Adv: DP — Unique Paths I/II, Min Path Sum',main:'📺 L187-188 · Spring Boot Introduction + Features',mt:'spring',rot:'STAR story #5-6 (production incident, leadership)',rt:'behavioral'},
    {d:'2026-12-02',dsa:'GFG Adv: DP — Max Product Subarray, Buy/Sell cooldown',main:'📺 L189 + L191 · Boot with Eclipse + Initializr (skip L190 STS)',mt:'spring',rot:'Hands-on: CRaC awareness reading',rt:'hands-on'},
    {d:'2026-12-03',dsa:'GFG Adv: DP — Longest Palindromic Subseq',main:'📺 L192-193 · Postman + User Forms Application',mt:'spring',rot:'Full-loop simulation #1 (3hr) — Java + Spring + 1 SD + 5 DSA',rt:'mock'},
    {d:'2026-12-04',dsa:'GFG Adv: DP final — Word Break, mixed DP problems',main:'🆕 @SpringBootApplication deep + Auto-config flow (in28minutes)',mt:'spring',rot:'Full week rev + STAR story #7-8 + plan',rt:'revision'},
    {d:'2026-12-05',dsa:'GFG Adv: Greedy intro — Activity Selection, fractional knapsack',main:'🆕 Custom Auto-Configuration + @ConditionalOnXxx (Baeldung)',mt:'spring',rot:'🚨 GENPACT LAST WORKING DAY · light day (~3h study + handover)',rt:'revision'},
    {d:'2026-12-06',dsa:'GFG Adv: Greedy — Job Sequencing, N meetings',main:'🆕 application.properties vs yml + Profiles + @ConfigurationProperties deep',mt:'spring',rot:'Hands-on: Final mocks scheduling, weak areas list',rt:'hands-on'},
    {d:'2026-12-07',dsa:'GFG Adv: Greedy — Huffman intro, minimum platforms',main:'🆕 Custom Spring Boot Starter (Daily Code Buffer)',mt:'spring',rot:'STAR story #9-10 + per-company prep doc (Walmart, PayPal)',rt:'behavioral'},
  ]},
  {wn:18,phase:'Phase 3: Distributed',title:'🚀 Full-time prep + Spring L194-200 Boot+JDBC + Backtracking + Mocks',days:[
    {d:'2026-12-08',dsa:'GFG Adv: Greedy — Min coins, Gas Station, Jump Game',main:'📺 L194-195 · Spring Boot with Spring JDBC-1,2',mt:'spring',rot:'Mock 4 (External, 90min, Java + Spring deep)',rt:'mock'},
    {d:'2026-12-09',dsa:'GFG Adv: Backtracking — N-Queens (revisit), Sudoku Solver',main:'📺 L196-197 · Spring Boot with Spring JDBC-3,4',mt:'spring',rot:'SD: Distributed messaging system (Kafka deep design)',rt:'sd',cRef:'sd-hld-messaging'},
    {d:'2026-12-10',dsa:'GFG Adv: Backtracking — Combination Sum, Permutations',main:'📺 L198-199 · Spring Data JDBC-1,2',mt:'spring',rot:'Hands-on: 20 unit tests for service layer with Mockito',rt:'hands-on'},
    {d:'2026-12-11',dsa:'GFG Adv: Backtracking — Word Search, Palindrome Partitioning',main:'📺 L200 + 🆕 Spring Boot Actuator deep (Daily Code Buffer)',mt:'spring',rot:'Full week rev + Mock 5 (Behavioral, 60min)',rt:'mock'},
    {d:'2026-12-12',dsa:'GFG Adv: Mathematics — GCD, sieve of Eratosthenes',main:'🆕 Micrometer + Prometheus + Grafana setup (Tanzu)',mt:'spring',rot:'SD: Real-time chat app (presence + history + WebSocket)',rt:'sd',cRef:'sd-hld-chat'},
    {d:'2026-12-13',dsa:'GFG Adv: Bit Magic — count set bits, single number variants',main:'🆕 @Async + @Scheduled (TaskExecutor config)',mt:'spring',rot:'Hands-on: Build basic WebSocket chat endpoint',rt:'hands-on'},
    {d:'2026-12-14',dsa:'GFG Adv: Trie intro — insert, search, prefix match',main:'🆕 Microservices: API Gateway (Spring Cloud Gateway)',mt:'spring',rot:'Mock 6 (Tech + LLD, 90min)',rt:'mock'},
  ]},
  {wn:19,phase:'Phase 3: Distributed',title:'Spring Microservices deep + Trie + Disjoint Set + Interviews',days:[
    {d:'2026-12-15',dsa:'GFG Adv: Trie — autocomplete system, search suggestions',main:'🆕 Inter-service communication: RestTemplate vs WebClient vs OpenFeign',mt:'spring',rot:'Real interview (per opportunity schedule)',rt:'mock'},
    {d:'2026-12-16',dsa:'GFG Adv: Trie — Word Search II, longest word',main:'🆕 OpenFeign declarative clients (Daily Code Buffer)',mt:'spring',rot:'SD: Search autocomplete (Trie + caching)',rt:'sd',cRef:'sd-hld-autocomplete'},
    {d:'2026-12-17',dsa:'GFG Adv: Disjoint Set — Union-Find, path compression',main:'🆕 Resilience4j: Circuit Breaker + Retry + Bulkhead + Timeout',mt:'spring',rot:'Hands-on: Saga for Order → Payment → Inventory',rt:'hands-on'},
    {d:'2026-12-18',dsa:'GFG Adv: Disjoint Set — provinces, redundant connection',main:'🆕 Resilience4j continued + Spring Cloud Config',mt:'spring',rot:'Full week rev + Mock 7 (Full loop, 3hr)',rt:'mock'},
    {d:'2026-12-19',dsa:'GFG Adv: Disjoint Set DONE — DSA Advanced 90% complete!',main:'🆕 Kafka basics + Spring Kafka Producer',mt:'spring',rot:'SD: Stock exchange / trading system (LLD + HLD hybrid)',rt:'sd',cRef:'sd-hld-stock'},
    {d:'2026-12-20',dsa:'GFG: Mixed Hard problems revision (top 10 across DSA Adv)',main:'🆕 Spring Kafka Consumer + manual offset commit',mt:'spring',rot:'Real interview cycle continues',rt:'mock'},
    {d:'2026-12-21',dsa:'GFG: Mixed graph + DP problems (5 each)',main:'🆕 Kafka Error Handling + DLQ + retry topics',mt:'spring',rot:'Hands-on: TestContainers integration tests',rt:'hands-on'},
  ]},
  {wn:20,phase:'Phase 3: Distributed',title:'Spring 2026 Modern + Comprehensive Mocks',days:[
    {d:'2026-12-22',dsa:'DSA revision: Top 20 problems across all topics (timed)',main:'🆕 Spring Cache abstraction + Redis basics',mt:'spring',rot:'Mock 8 (External, System Design, 90min)',rt:'mock'},
    {d:'2026-12-23',dsa:'DSA revision: Top 10 graph + top 10 DP',main:'🆕 RedisTemplate + Cache patterns deep',mt:'spring',rot:'SD: News feed deep redesign',rt:'sd',cRef:'sd-hld-news-feed-deep'},
    {d:'2026-12-24',dsa:'DSA revision: Linked List + Tree patterns mix',main:'🆕 Spring Boot Testing: @SpringBootTest + MockMvc (Philip Riecks)',mt:'spring',rot:'Hands-on: Stress test microservices with concurrent requests',rt:'hands-on'},
    {d:'2026-12-25',dsa:'DSA revision: Hard problems from earlier weeks',main:'🆕 Slice tests (@WebMvcTest, @DataJpaTest) + TestContainers',mt:'spring',rot:'Full week rev + Mock 9 (Full loop + Behavioral, 3hr)',rt:'mock'},
    {d:'2026-12-26',dsa:'DSA revision: Patterns review',main:'🌟 Spring Modulith (Oliver Drotbohm)',mt:'spring',rot:'Behavioral: STAR story #11-12 (tradeoffs, recent learning)',rt:'behavioral'},
    {d:'2026-12-27',dsa:'DSA revision: System design + DSA integration',main:'🌟 GraalVM Native + Spring AOT + RestClient/JdbcClient',mt:'spring',rot:'PHASE 3 RETRO — strong/weak, plan Phase 4',rt:'revision'},
  ]},
  {wn:21,phase:'Phase 4: Polish + Offer',title:'Pure mocking + weak topic patching + active interviews',days:[
    {d:'2026-12-28',dsa:'Top 5 array + LL problems (40min each)',main:'Java REV: Collections + HashMap internals + ConcurrentHashMap',mt:'rev',rot:'Mock 10 (Java focused, 90min)',rt:'mock'},
    {d:'2026-12-29',dsa:'Top 5 tree + BST problems',main:'Spring REV: Lifecycle deep, AOP, transactions',mt:'rev',rot:'Real interview OR per-company prep (Walmart-specific)',rt:'mock'},
    {d:'2026-12-30',dsa:'Top 5 graph + DP problems',main:'Java REV: Concurrency: threads, sync, volatile, CompletableFuture, VT',mt:'rev',rot:'Mock 11 (System Design, 90min)',rt:'mock'},
    {d:'2026-12-31',dsa:'Top 5 hashing + sliding window patterns',main:'Spring REV: Boot + JPA + Security flow end-to-end',mt:'rev',rot:'Full week retro + STAR story drilling (12 stories × 5min)',rt:'revision'},
    {d:'2027-01-01',dsa:'Top 5 stack + queue + monotonic patterns',main:'Java REV: JVM (memory, GC, OOM scenarios)',mt:'rev',rot:'Real interview OR HR research (salary, RSU, joining)',rt:'mock'},
    {d:'2027-01-02',dsa:'Top 5 heap + greedy problems',main:'Spring REV: Microservices: discovery, gateway, resilience4j, kafka',mt:'rev',rot:'Mock 12 (Behavioral + SD hybrid, 90min)',rt:'mock'},
    {d:'2027-01-03',dsa:'Top 10 mixed problems (timed, no help)',main:'Java REV: Modern Java (records, sealed, pattern matching, VT)',mt:'rev',rot:'Behavioral: refine top 6 stories with feedback',rt:'behavioral'},
  ]},
  {wn:22,phase:'Phase 4: Polish + Offer',title:'Final SD designs + Spring deep revision',days:[
    {d:'2027-01-04',dsa:'DSA practice: tree + graph + hard mix',main:'Spring REV: Custom Boot starters + auto-config flow',mt:'rev',rot:'SD: Twitter Search (elasticsearch + caching)',rt:'sd',cRef:'sd-hld-twitter-search'},
    {d:'2027-01-05',dsa:'DSA practice: DP hard problems + recursion deep',main:'Java REV: Production diagnostics — thread dumps, heap dumps, JFR',mt:'rev',rot:'Mock 13 (Full loop 3hr — Java + Spring + SD + Behavioral)',rt:'mock'},
    {d:'2027-01-06',dsa:'DSA practice: LL + array hard problems',main:'Spring REV: Observability + distributed tracing',mt:'rev',rot:'SD: Distributed file storage (S3/HDFS-like)',rt:'sd',cRef:'sd-hld-file-storage'},
    {d:'2027-01-07',dsa:'DSA practice: top weak topic from mocks',main:'Java REV: Design patterns + SOLID refactoring',mt:'rev',rot:'Full week retro + Mock retro + plan interview schedule',rt:'revision'},
    {d:'2027-01-08',dsa:'DSA practice: company-specific patterns',main:'Spring REV: Testing (MockMvc, slice, TestContainers)',mt:'rev',rot:'Real interview OR per-company prep (PayPal)',rt:'mock'},
    {d:'2027-01-09',dsa:'DSA: 5 hard problems timed (45min each)',main:'Java REV: Generics + Streams API deep',mt:'rev',rot:'Mock 14 (Tech deep + LLD, 90min)',rt:'mock'},
    {d:'2027-01-10',dsa:'DSA: review top patterns',main:'Spring REV: Caching strategies (Redis deep) + invalidation',mt:'rev',rot:'Behavioral: HR/manager drilling (5 question types)',rt:'behavioral'},
  ]},
  {wn:23,phase:'Phase 4: Polish + Offer',title:'Interview surge + Trade-off articulation',days:[
    {d:'2027-01-11',dsa:'DSA: mixed medium (LC), 4 in 2hr',main:'Java REV: Final pass on weakest 5 topics',mt:'rev',rot:'Mock 15 (Stranger via Pramp)',rt:'mock'},
    {d:'2027-01-12',dsa:'DSA: revisit unsolved hard problems',main:'Spring REV: Final pass on Spring weakest topics',mt:'rev',rot:'Real interview OR negotiation prep',rt:'mock'},
    {d:'2027-01-13',dsa:'DSA: company tag practice (Walmart)',main:'Java REV: Threading hard problems',mt:'rev',rot:'SD: Live streaming (Twitch/YouTube)',rt:'sd',cRef:'sd-hld-live-streaming'},
    {d:'2027-01-14',dsa:'DSA: company tag practice (PayPal/Paytm SQL+DSA)',main:'Spring REV: Final read of Boot internals docs',mt:'rev',rot:'Full week retro + write down weaknesses',rt:'revision'},
    {d:'2027-01-15',dsa:'DSA: trie + DP combined',main:'Java REV: Code-review pass on all project commits',mt:'rev',rot:'Real interview + post-interview notes',rt:'mock'},
    {d:'2027-01-16',dsa:'DSA: hard problems revisit',main:'Spring REV: Reactive vs Virtual Threads + WebFlux',mt:'rev',rot:'Mock 16 (Full loop, 3hr — final loop simulation)',rt:'mock'},
    {d:'2027-01-17',dsa:'DSA: SQL + DSA combined',main:'Java REV: Last revision pass: 25-Q rapid quiz',mt:'rev',rot:'Tradeoff articulation drills: 10 classic tradeoffs',rt:'behavioral'},
  ]},
  {wn:24,phase:'Phase 4: Polish + Offer',title:'Offer negotiation begins',days:[
    {d:'2027-01-18',dsa:'DSA: 20-min rapid review',main:'Java + Spring REV: Walkthrough notebook end-to-end',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-01-19',dsa:'DSA: light, revisit weakest 2 topics',main:'Java REV: Final weak-topic patch',mt:'rev',rot:'Mock 17 (Behavioral, full HM round)',rt:'mock'},
    {d:'2027-01-20',dsa:'DSA: 1 medium problem (timed, walkthrough)',main:'Spring REV: Company tech stack alignment',mt:'rev',rot:'SD: company-specific design (Walmart inventory, PayPal payments)',rt:'sd',cRef:'sd-hld-company'},
    {d:'2027-01-21',dsa:'DSA: rest mode (revise notes only)',main:'REV: Compile final cheat sheets (1-pager per topic)',mt:'rev',rot:'Full week retro + negotiate pending offers',rt:'revision'},
    {d:'2027-01-22',dsa:'DSA: top 3 problems from mock failures',main:'Java REV: 30-min quiz · 30 Q&A on weak areas',mt:'rev',rot:'Real interview OR final-round prep',rt:'mock'},
    {d:'2027-01-23',dsa:'DSA: 2 graph + 2 DP medium problems',main:'Spring REV: Boot startup flow end-to-end + observability',mt:'rev',rot:'Mock 18 (Tech + SD final, 90min)',rt:'mock'},
    {d:'2027-01-24',dsa:'DSA: light · LC tagged for last 5 days',main:'Java + Spring REV: Final weak topic from mocks',mt:'rev',rot:'Behavioral: 12 STAR stories — final polish',rt:'behavioral'},
  ]},
  {wn:25,phase:'Phase 4: Polish + Offer',title:'Acceptance phase + Cushion for delayed loops',days:[
    {d:'2027-01-25',dsa:'DSA: 1 hard problem (timed)',main:'Final Java cheat sheet + interview Q&A pack',mt:'rev',rot:'Real interview / negotiation call',rt:'mock'},
    {d:'2027-01-26',dsa:'DSA: revise notes + rapid pattern recognition',main:'Final Spring cheat sheet + Q&A pack',mt:'rev',rot:'Mock 19 (any weak area, 90min)',rt:'mock'},
    {d:'2027-01-27',dsa:'DSA: 30-min warm-up only',main:'Final SD cheat sheet + tradeoff articulation reps',mt:'rev',rot:'SD: final review of 10 designs (1-page each)',rt:'sd'},
    {d:'2027-01-28',dsa:'DSA: light · weakest pattern revisit',main:'Behavioral: 12 STAR stories rapid-fire (1min each)',mt:'rev',rot:'Full week retro + decision: which offer to accept',rt:'revision'},
    {d:'2027-01-29',dsa:'DSA: 2 medium problems (relaxed pace)',main:'Java REV: Coffee-table revision: scan everything',mt:'rev',rot:'Real interview / counter-offer discussion',rt:'mock'},
    {d:'2027-01-30',dsa:'DSA: 1 hard problem timed',main:'Spring REV: Coffee-table revision: scan everything',mt:'rev',rot:'Mock 20 (Final mock, 90min, any topic)',rt:'mock'},
    {d:'2027-01-31',dsa:'DSA: full revision day · no new problems',main:'REV: Final notes consolidation, single PDF',mt:'rev',rot:'HR negotiation tactics: counter, hold, decline drafts',rt:'behavioral'},
  ]},
  {wn:26,phase:'Phase 4: Polish + Offer',title:'Final interviews + final offer push',days:[
    {d:'2027-02-01',dsa:'DSA: warm-up only · 30min',main:'REV: Just sleep & light revision',mt:'rev',rot:'Real interview / final-round support',rt:'mock'},
    {d:'2027-02-02',dsa:'DSA: warm-up only',main:'REV: Specific topic per next-day interview',mt:'rev',rot:'Real interview · per-company prep doc',rt:'mock'},
    {d:'2027-02-03',dsa:'DSA: 1 problem light',main:'REV: Mock retro from week',mt:'rev',rot:'Real interview / manager round',rt:'mock'},
    {d:'2027-02-04',dsa:'DSA: rest mode',main:'REV: Behavioral STAR drilling',mt:'rev',rot:'Strategy: which offer to choose',rt:'behavioral'},
    {d:'2027-02-05',dsa:'DSA: warm-up',main:'REV: Whatever feels weakest 24h before',mt:'rev',rot:'Real interview / culture round',rt:'mock'},
    {d:'2027-02-06',dsa:'DSA: warm-up',main:'REV: Light · sleep well',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-02-07',dsa:'DSA: rest',main:'REV: Compile written cheat sheet per company',mt:'rev',rot:'Negotiation calls · counter-offer drafts',rt:'behavioral'},
  ]},
  {wn:27,phase:'Phase 4: Polish + Offer',title:'Negotiation final stretch + onboarding prep',days:[
    {d:'2027-02-08',dsa:'DSA: 1 problem light or rest',main:'REV: Stand by for remaining interviews',mt:'rev',rot:'Final-round support',rt:'mock'},
    {d:'2027-02-09',dsa:'DSA: rest',main:'REV: Sleep & maintenance',mt:'rev',rot:'Offer negotiation final call · accept/decline',rt:'mock'},
    {d:'2027-02-10',dsa:'DSA: rest',main:'REV: Onboarding research (new company stack)',mt:'rev',rot:'Compare offers final spreadsheet',rt:'revision'},
    {d:'2027-02-11',dsa:'DSA: rest',main:'REV: Onboarding tech prep (new company\'s stack)',mt:'rev',rot:'Full retro + plan onboarding',rt:'revision'},
    {d:'2027-02-12',dsa:'DSA: rest',main:'REV: Tech stack research for accepted company',mt:'rev',rot:'Resignation/notice prep (if needed)',rt:'revision'},
    {d:'2027-02-13',dsa:'DSA: rest',main:'REV: Tech stack research continues',mt:'rev',rot:'Joining bonus / RSU final negotiation',rt:'revision'},
    {d:'2027-02-14',dsa:'DSA: rest',main:'REV: Begin onboarding course (free week!)',mt:'rev',rot:'Sign offer · close offer letters · notify others',rt:'revision'},
  ]},
  {wn:27.5,phase:'Phase 4: Polish + Offer',title:'Buffer / decompress / onboarding ramp-up',isBuffer:true,days:[
    {d:'2027-02-15',activity:'Onboarding tech research · light DSA review'},
    {d:'2027-02-16',activity:'Update LinkedIn, resume · notify network'},
    {d:'2027-02-17',activity:'Decompress day · process the journey'},
    {d:'2027-02-18',activity:'Onboarding prep for new role'},
    {d:'2027-02-19',activity:'🎉 FINAL DAY OF PLAN · OFFER LOCKED · ONBOARDING NEXT'},
  ]},
];

// ─── STATE ─────────────────────────────────────────────────────────────────

function getDefaultTracks() {
  const t = {};
  ['java','spring','sql','sd','cloud'].forEach(k => { t[k] = {}; });
  return t;
}

function getDefaultState() {
  const topics = {};
  GFG_MODULES.forEach(m => m.topics.forEach(t => {
    topics[t.id] = {vc:0, pc:0};
  }));
  return {version:'2.0', gfg:{topics}, dailyChecks:{}, tracks:getDefaultTracks()};
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const s = JSON.parse(raw);
    if (!s.dailyChecks) s.dailyChecks = {};
    if (!s.gfg) { const d = getDefaultState(); s.gfg = d.gfg; }
    if (!s.tracks) s.tracks = getDefaultTracks();
    return s;
  } catch(e) { return getDefaultState(); }
}

function saveState(s) {
  s.lastUpdated = new Date().toISOString();
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch(e) {}
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

// ─── TABS ──────────────────────────────────────────────────────────────────

function showTab(id, btn) {
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
    el.innerHTML = `<div class="pre-plan"><div class="pre-plan-lbl">Rest / buffer day</div></div>`;
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
  const d4 = slotDInfo(day);
  return `
    ${slotBlock('A','DSA · 2h','dsa',day.dsa,'dsa',day.d,'a',checks.a)}
    ${slotBlock('B',`MAIN · 2.5h`,day.mt,day.main,day.mt,day.d,'b',checks.b)}
    ${slotBlock('C','ROTATING · 1.5h',day.rt,day.rot,day.rt,day.d,'c',checks.c)}
    ${slotBlock('D',d4.label,d4.track,d4.content,d4.track,day.d,'d',checks.d)}`;
}

// Slot D alternates AWS (even day index) ↔ System Design (odd day index).
// Content falls back to a placeholder until per-day topics are filled in
// (add `aws:'…'` / `sysd:'…'` fields to a day object to populate it).
function slotDInfo(day) {
  const idx = daysBetween(PLAN_START, day.d);
  const isAws = ((idx % 2) + 2) % 2 === 0;
  const placeholder = '<span style="color:var(--dim)">Topics to be added</span>';
  return isAws
    ? {track:'cloud', label:'AWS · 2h',           content: day.aws  || placeholder}
    : {track:'sd',    label:'SYSTEM DESIGN · 2h', content: day.sysd || placeholder};
}

function slotBlock(letter, label, badgeClass, content, track, date, slot, checked) {
  const isDone = !!checked;
  return `<div class="slot-block">
    <div class="slot-header">
      ${trackBadge(badgeClass, letter+' · '+label)}
    </div>
    <div class="slot-content">${content}</div>
    <div class="chk-row${isDone?' done':''}" onclick="toggleSlot('${date}','${slot}',this)">
      <div class="chk-box">${isDone?'✓':''}</div>
      <span class="chk-lbl">${isDone?'Done ✓':'Mark as done'}</span>
    </div>
  </div>`;
}

function toggleSlot(date, slot, el) {
  if (!STATE.dailyChecks[date]) STATE.dailyChecks[date] = {};
  STATE.dailyChecks[date][slot] = !STATE.dailyChecks[date][slot];
  saveState(STATE);
  const done = !!STATE.dailyChecks[date][slot];
  el.classList.toggle('done', done);
  el.querySelector('.chk-box').textContent = done ? '✓' : '';
  el.querySelector('.chk-lbl').textContent = done ? 'Done ✓' : 'Mark as done';
  // refresh strip dots
  const stripEl = document.querySelector('.week-strip');
  if (stripEl) {
    const today = todayStr();
    const found = findDay(today);
    if (found) stripEl.innerHTML = renderWeekStrip(found.week, today);
  }
  // sync to individual track tabs
  syncSlotToTrack(date, slot, done);
}

function springRefFromText(text) {
  const all = [...text.matchAll(/L(\d+)(?:-(\d+))?/g)];
  if (!all.length) return null;
  const first = all[0][1];
  const last = all[all.length - 1][2] || all[all.length - 1][1];
  const id = (first === last) ? 'sp-l' + first : 'sp-l' + first + '-' + last;
  return TRACK_DEFS.spring.groups[0].topics.some(t => t.id === id) ? id : null;
}

function trackGroupForTopic(trackId, topicId) {
  const def = TRACK_DEFS[trackId];
  if (!def) return '';
  for (const g of def.groups) {
    if (g.topics.some(t => t.id === topicId)) return g.id;
  }
  return '';
}

function syncSlotToTrack(date, slot, done) {
  const found = findDay(date);
  if (!found) return;
  const day = found.day;
  const target = done ? 'done' : 'not-started';
  if (slot === 'b' && day.mt === 'spring') {
    const ref = springRefFromText(day.main);
    if (ref) setTrackTopic('spring', ref, target, 'sp-all', true);
  }
  if (slot === 'c' && day.rt === 'sql' && day.cRef) {
    const refs = Array.isArray(day.cRef) ? day.cRef : [day.cRef];
    refs.forEach(ref => setTrackTopic('sql', ref, target, trackGroupForTopic('sql', ref), true));
  }
  if (slot === 'c' && day.rt === 'sd' && day.cRef) {
    const refs = Array.isArray(day.cRef) ? day.cRef : [day.cRef];
    refs.forEach(ref => setTrackTopic('sd', ref, target, trackGroupForTopic('sd', ref), true));
  }
}

function renderWeekStrip(week, today) {
  return `<div class="week-strip">${week.days.map(d => {
    const dn = dayName(d.d);
    const dateNum = d.d.split('-')[2];
    const isToday = d.d === today;
    const checks = STATE.dailyChecks[d.d] || {};
    const done = [checks.a, checks.b, checks.c, checks.d].filter(Boolean).length;
    let cls = isToday ? ' today' : (done === 4 ? ' done-day' : '');
    return `<div class="wday${cls}" title="${d.dsa||d.activity||''}">
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
      html += `<div class="wdr-slot">${trackBadge('dsa','A')}<span class="wdr-slot-text" style="margin-left:6px">${d.dsa}</span></div>`;
      html += `<div class="wdr-slot">${trackBadge(d.mt,'B')}<span class="wdr-slot-text" style="margin-left:6px">${d.main}</span></div>`;
      html += `<div class="wdr-slot">${trackBadge(d.rt,'C')}<span class="wdr-slot-text" style="margin-left:6px">${d.rot}</span></div>`;
      const d4 = slotDInfo(d);
      html += `<div class="wdr-slot">${trackBadge(d4.track,'D')}<span class="wdr-slot-text" style="margin-left:6px">${d4.content}</span></div>`;
    }
    html += `</div></div>`;
  });

  document.getElementById('week-detail').innerHTML = html;
}

// ─── GFG TRACKER ───────────────────────────────────────────────────────────

function calcTopicPct(t, s) {
  const total = t.vt + t.pt;
  if (!total) return 0;
  const done = (s.vc||0) + (s.pc||0);
  return Math.round((done / total) * 100);
}

function calcModuleStats(m) {
  let total = 0, done = 0;
  m.topics.forEach(t => {
    const s = STATE.gfg.topics[t.id] || {vc:0,pc:0};
    total += t.vt + t.pt;
    done += (s.vc||0) + (s.pc||0);
  });
  return {total, done, pct: total ? Math.round(done/total*100) : 0};
}

function renderGFG() {
  const el = document.getElementById('panel-gfg');
  const mStats = GFG_MODULES.map(m => calcModuleStats(m));
  const overall = mStats.reduce((a,s) => ({total:a.total+s.total, done:a.done+s.done}), {total:0,done:0});
  const overallPct = overall.total ? Math.round(overall.done/overall.total*100) : 0;

  const statCards = [...mStats.map((s,i) => `
    <div class="stat-card">
      <div class="stat-num">${s.pct}%</div>
      <div class="stat-sub">${s.done}/${s.total} done</div>
      <div class="stat-lbl">${GFG_MODULES[i].name}</div>
      <div class="prog-bg" style="margin-top:6px"><div class="prog-fill" style="width:${s.pct}%;background:${GFG_MODULES[i].color}"></div></div>
    </div>`),
    `<div class="stat-card">
      <div class="stat-num">${overallPct}%</div>
      <div class="stat-sub">${overall.done}/${overall.total} done</div>
      <div class="stat-lbl">Overall GFG</div>
      <div class="prog-bg" style="margin-top:6px"><div class="prog-fill" style="width:${overallPct}%;background:var(--accent)"></div></div>
    </div>`
  ].join('');

  let html = `<div class="stats-grid">${statCards}</div>`;

  GFG_MODULES.forEach((m, mi) => {
    const ms = mStats[mi];
    html += `<div class="module-section">
      <div class="module-header">
        <div>
          <div style="font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--dim);letter-spacing:0.08em;margin-bottom:2px">MODULE ${mi+1}</div>
          <div class="module-name">${m.name}</div>
        </div>
        <div style="text-align:right">
          <div class="module-pct">${ms.pct}%</div>
          <div style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace">${ms.done}/${ms.total}</div>
        </div>
      </div>
      <div class="module-prog"><div class="fill" id="mbar-${m.id}" style="width:${ms.pct}%;background:${m.color}"></div></div>`;

    m.topics.forEach((t, ti) => {
      const s = STATE.gfg.topics[t.id] || {vc:0, pc:0};
      const pct = calcTopicPct(t, s);
      const cls = pct >= 95 ? 't-done' : (pct > 0 ? 't-prog' : '');
      html += `<div class="topic-row ${cls}" id="tr-${t.id}">
        <div class="topic-num">${String(ti+1).padStart(2,'0')}</div>
        <div class="topic-info">
          <div class="topic-name">${t.name}</div>
          <div class="topic-counts">${t.vt}v · ${t.pt}p</div>
        </div>
        <div class="topic-inputs">
          <div class="inp-grp">
            V
            <input type="number" min="0" max="${t.vt}" step="1" value="${s.vc||0}"
              onchange="updateTopic('${t.id}','vc',this.value,${t.vt},${t.pt})"
              oninput="clampInput(this,${t.vt})">
            <span style="color:var(--dim)">/${t.vt}</span>
          </div>
          <div class="inp-grp">
            P
            <input type="number" min="0" max="${t.pt}" step="1" value="${s.pc||0}"
              onchange="updateTopic('${t.id}','pc',this.value,${t.vt},${t.pt})"
              oninput="clampInput(this,${t.pt})"${t.pt===0?' disabled':''}>
            <span style="color:var(--dim)">/${t.pt}</span>
          </div>
        </div>
        <div class="topic-pct" id="pct-${t.id}">${pct}%</div>
        <div class="topic-mini-bar"><div class="fill" id="bar-${t.id}" style="width:${pct}%"></div></div>
      </div>`;
    });
    html += `</div>`;
  });

  html += `<div style="text-align:center;padding-bottom:10px">
    <button class="reset-btn" onclick="resetGFG()">⟲ Reset all GFG progress</button>
  </div>`;

  el.innerHTML = html;
}

function clampInput(inp, max) {
  let v = parseInt(inp.value) || 0;
  if (v < 0) v = 0;
  if (v > max) v = max;
  inp.value = v;
}

function updateTopic(id, field, val, vt, pt) {
  let v = parseInt(val) || 0;
  const max = field === 'vc' ? vt : pt;
  v = Math.min(Math.max(v, 0), max);
  if (!STATE.gfg.topics[id]) STATE.gfg.topics[id] = {vc:0, pc:0};
  STATE.gfg.topics[id][field] = v;
  saveState(STATE);

  const t = GFG_MODULES.flatMap(m => m.topics).find(x => x.id === id);
  const s = STATE.gfg.topics[id];
  const pct = calcTopicPct(t, s);

  // update row styling
  const row = document.getElementById('tr-'+id);
  if (row) {
    row.classList.remove('t-done','t-prog');
    if (pct >= 95) row.classList.add('t-done');
    else if (pct > 0) row.classList.add('t-prog');
  }
  const pctEl = document.getElementById('pct-'+id);
  if (pctEl) pctEl.textContent = pct+'%';
  const barEl = document.getElementById('bar-'+id);
  if (barEl) barEl.style.width = pct+'%';

  // update module bar + stat cards
  GFG_MODULES.forEach((m, mi) => {
    if (!m.topics.find(x => x.id === id)) return;
    const ms = calcModuleStats(m);
    const mb = document.getElementById('mbar-'+m.id);
    if (mb) mb.style.width = ms.pct+'%';
  });
}

function resetGFG() {
  if (!confirm('Reset all GFG progress? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  STATE = loadState();
  renderGFG();
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
  const items = [
    {name:'DSA (GFG)',      h:330, color:'#457b9d'},
    {name:'Spring',         h:230, color:'#6a994e'},
    {name:'Java',           h:195, color:'#e76f51'},
    {name:'SQL/DB',         h:95,  color:'#a87fb8'},
    {name:'Mock/Behavioral',h:95,  color:'#e63946'},
    {name:'Buffer/Revision',h:78,  color:'#666'},
    {name:'System Design',  h:85,  color:'#e9c46a'},
    {name:'Cloud',          h:35,  color:'#2a9d8f'},
  ];
  const total = 1158;

  const bar = items.map(it => `<div class="budget-seg" style="width:${(it.h/total*100).toFixed(1)}%;background:${it.color}" title="${it.name}: ${it.h}h"></div>`).join('');

  const cards = items.map(it => `
    <div class="bcard">
      <div class="bcard-dot" style="background:${it.color}"></div>
      <div class="bcard-info">
        <div class="bcard-name">${it.name}</div>
        <div class="bcard-h">${it.h}h · ${(it.h/total*100).toFixed(1)}%</div>
      </div>
      <div class="prog-bg" style="width:80px"><div class="prog-fill" style="width:${(it.h/total*100).toFixed(1)}%;background:${it.color}"></div></div>
    </div>`).join('');

  const phases = [
    {name:'Phase 1: Foundation',     weeks:'1–4',  dates:'May 21 – Jun 17', days:28, h:168},
    {name:'Phase 2: Core Backend',   weeks:'5–12', dates:'Jun 18 – Aug 12', days:56, h:336},
    {name:'Phase 3: Distributed',    weeks:'13–20',dates:'Aug 13 – Oct 7',  days:56, h:336},
    {name:'Phase 4: Polish + Offer', weeks:'21–27.5',dates:'Oct 8 – Nov 30', days:54, h:318},
  ];

  const phaseRows = phases.map(p => `<tr>
    <td style="color:var(--text);font-weight:500">${p.name}</td>
    <td style="color:var(--dim);font-family:'JetBrains Mono',monospace">W${p.weeks}</td>
    <td style="color:var(--dim)">${p.dates}</td>
    <td style="color:var(--muted);text-align:right;font-family:'JetBrains Mono',monospace">${p.days}d · ${p.h}h</td>
  </tr>`).join('');

  document.getElementById('panel-budget').innerHTML = `
    <div class="card">
      <div class="lbl">1,158 hours · allocation</div>
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
      <div class="rule-title">DAILY 3-SLOT STRUCTURE (6 hours every day)</div>
      <div class="rule-item"><span class="rule-bullet">A</span><div><strong style="color:var(--dsa)">DSA · 2h</strong> — GFG Complete Interview Prep (videos + problems). Daily, no exceptions.</div></div>
      <div class="rule-item"><span class="rule-bullet">B</span><div><strong style="color:var(--java)">MAIN · 2.5h</strong> — Java (Mon/Wed/Fri) or Spring (Tue/Thu/Sat). Sunday varies by phase.</div></div>
      <div class="rule-item"><span class="rule-bullet">C</span><div><strong style="color:var(--sql)">ROTATING · 1.5h</strong> — SQL (Mon/Wed) · Hands-on (Tue/Thu) · System Design (Fri) · Cloud/Revision (Sat/Sun)</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">SLOT B ROTATION</div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong>Mon / Wed / Fri</strong> — Java topics (Parts A → F)</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong>Tue / Thu / Sat</strong> — Spring topics (Blocks 1 → 9)</div></div>
      <div class="rule-item"><span class="rule-bullet">→</span><div><strong>Sunday</strong> — Varies by phase (full revision in Phase 1–2, mocks + revision in Phase 3–4)</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">SLOT C DEFAULT ROTATION</div>
      <div class="rule-item"><span class="rule-bullet">Mon</span><div>SQL deep practice</div></div>
      <div class="rule-item"><span class="rule-bullet">Tue</span><div>Hands-on coding (apply Spring from Slot B)</div></div>
      <div class="rule-item"><span class="rule-bullet">Wed</span><div>SQL deep practice</div></div>
      <div class="rule-item"><span class="rule-bullet">Thu</span><div>Hands-on coding</div></div>
      <div class="rule-item"><span class="rule-bullet">Fri</span><div>System Design concept / walkthrough</div></div>
      <div class="rule-item"><span class="rule-bullet">Sat</span><div>Hands-on coding / Cloud (Phase 3+)</div></div>
      <div class="rule-item"><span class="rule-bullet">Sun</span><div>Full week revision + self-quiz + plan next week</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">HARD RULES</div>
      <div class="rule-item"><span class="rule-bullet">1</span><div>Never skip DSA. Slot A is non-negotiable every single day, including weekends.</div></div>
      <div class="rule-item"><span class="rule-bullet">2</span><div>All 56 GFG topics start at 0%. Only videos + problems counted — no articles, MCQs, or contests.</div></div>
      <div class="rule-item"><span class="rule-bullet">3</span><div>Take notes after every block. Write in your Notion/notebook within 10 minutes of finishing.</div></div>
      <div class="rule-item"><span class="rule-bullet">4</span><div>Weekly self-quiz every Sunday. 10–15 Q&A on the week's content, no notes.</div></div>
      <div class="rule-item"><span class="rule-bullet">5</span><div>1.5× rule — if a topic takes longer, cut Slot C instead of Slot A or B.</div></div>
      <div class="rule-item"><span class="rule-bullet">6</span><div>Module order is strict: DSA Basics → Libraries (Java) → DSA Advanced. Never skip ahead.</div></div>
      <div class="rule-item"><span class="rule-bullet">7</span><div>Sunday is a full 6-hour day. Not a light day. Not a rest day.</div></div>
    </div>
    <div class="rule-block">
      <div class="rule-title">INTERVIEW READINESS MILESTONES</div>
      <div class="rule-item"><span class="rule-bullet">Jun 17</span><div>4/10 — Can clear Cognizant / Capgemini / mid-service screens</div></div>
      <div class="rule-item"><span class="rule-bullet">Jul 22</span><div>5/10 — TCS Digital, easy product first rounds</div></div>
      <div class="rule-item"><span class="rule-bullet">Aug 12</span><div>6/10 — Mid-product tech rounds · start applying</div></div>
      <div class="rule-item"><span class="rule-bullet">Sep 9</span><div>7/10 — Paytm / Swiggy lower-bar rounds</div></div>
      <div class="rule-item"><span class="rule-bullet">Oct 7</span><div>8/10 — Walmart / PayPal / Paytm / Swiggy full loops</div></div>
      <div class="rule-item"><span class="rule-bullet">Nov 30</span><div>9/10 — Offer signed, polished, onboarding next</div></div>
    </div>`;
}

// ─── INIT ──────────────────────────────────────────────────────────────────

function init() {
  renderToday();
  renderRules();

  // Firebase auth relay
  window.addEventListener('ansh-auth', e => {
    const user = e.detail.user;
    const btn = document.getElementById('auth-btn');
    if (user) {
      CURRENT_USER = user;
      if (btn) { btn.textContent = 'Sign Out'; btn.className = 'auth-btn signed-in'; }
      loadFromFirestore(user.uid);
    } else {
      CURRENT_USER = null;
      if (btn) { btn.textContent = 'Sign In'; btn.className = 'auth-btn'; }
    }
  });

  let lastDate = todayStr();
  setInterval(() => {
    const now = todayStr();
    if (now !== lastDate) { lastDate = now; renderToday(); }
  }, 60000);
}

init();

// ─── FIREBASE ──────────────────────────────────────────────────────────────

let CURRENT_USER = null;
let _syncTimer = null;

function handleAuth() {
  if (CURRENT_USER) {
    window.signOut(window.firebaseAuth).catch(()=>{});
  } else {
    window.signInWithPopup(window.firebaseAuth, window.firebaseProvider).catch(()=>{});
  }
}

function syncToFirestore(s) {
  if (!CURRENT_USER) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(async () => {
    try {
      const ref = window.firestoreDoc(window.firebaseDB, 'ansh_tracker', CURRENT_USER.uid);
      await window.firestoreSetDoc(ref, s);
    } catch(e) { console.warn('Firestore save failed', e); }
  }, 800);
}

async function loadFromFirestore(uid) {
  try {
    const ref = window.firestoreDoc(window.firebaseDB, 'ansh_tracker', uid);
    const snap = await window.firestoreGetDoc(ref);
    if (snap.exists()) {
      const remote = snap.data();
      if (!remote.tracks) remote.tracks = getDefaultTracks();
      if (!remote.dailyChecks) remote.dailyChecks = {};
      STATE = remote;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
      // re-render active panel
      const active = document.querySelector('.panel.active');
      if (active) {
        const id = active.id.replace('panel-','');
        const btn = document.querySelector('.tb.active');
        showTab(id, btn);
      }
    }
  } catch(e) { console.warn('Firestore load failed', e); }
}

// ─── TRACK TOPICS DATA ─────────────────────────────────────────────────────

const TRACK_DEFS = {
  java: {
    name:'Java (Non-GFG)', color:'#e76f51', totalHours:195,
    groups:[
      {id:'java-a', name:'Part A · Core Foundations', hours:45, topics:[
        {id:'java-fundamentals',       name:'Core Java Fundamentals (types, JVM/JRE/JDK, classpath)',        h:4,  p:'V.High'},
        {id:'java-oop',                name:'OOP Concepts (4 pillars, dispatch, super/this, composition)',    h:8,  p:'V.High'},
        {id:'java-abstract-interface', name:'Abstract Classes & Interfaces (Java 8 default/static)',          h:4,  p:'V.High'},
        {id:'java-keywords',           name:'Keywords Deep (static, final, this, super, instanceof)',         h:4,  p:'V.High'},
        {id:'java-string',             name:'String Handling (pool, immutability, SB vs SBuf, intern)',       h:5,  p:'V.High'},
        {id:'java-equals-hashcode',    name:'equals() + hashCode() contract deep',                           h:3,  p:'V.High'},
        {id:'java-exceptions',         name:'Exception Handling (hierarchy, custom, try-with-resources)',     h:6,  p:'V.High'},
        {id:'java-object-wrapper',     name:'Object class methods + Wrapper classes + autoboxing',            h:3,  p:'High'},
        {id:'java-generics',           name:'Generics (wildcards, PECS, type erasure, bounded types)',        h:4,  p:'High'},
        {id:'java-io-nio',             name:'I/O & NIO (basics, Files, Path)',                                h:2,  p:'Medium'},
        {id:'java-annotations',        name:'Annotations (built-in + custom basics)',                         h:2,  p:'Medium'},
      ]},
      {id:'java-b', name:'Part B · Concurrency Mastery', hours:50, topics:[
        {id:'java-threads-basics',          name:'Threads basics (Thread vs Runnable, lifecycle, daemon)',         h:6, p:'V.High'},
        {id:'java-sync-volatile-atomic',    name:'synchronized + volatile + atomic classes + CAS',                h:8, p:'V.High'},
        {id:'java-wait-notify',             name:'wait/notify/notifyAll + Producer-Consumer + BlockingQueue',      h:6, p:'V.High'},
        {id:'java-executor',               name:'ExecutorService + ThreadPoolExecutor + Callable/Future',         h:8, p:'V.High'},
        {id:'java-completable-future',      name:'CompletableFuture deep (thenApply/Compose/Combine)',             h:6, p:'V.High'},
        {id:'java-concurrent-collections',  name:'ConcurrentHashMap, CopyOnWriteArrayList, BlockingQueue variants',h:4, p:'V.High'},
        {id:'java-locks',                  name:'Lock interface, ReentrantLock, ReadWriteLock, StampedLock',      h:4, p:'High'},
        {id:'java-coordination',           name:'CountDownLatch, CyclicBarrier, Semaphore, Phaser',               h:3, p:'High'},
        {id:'java-threadlocal',            name:'ThreadLocal + memory leak pitfalls in pools',                    h:2, p:'High'},
        {id:'java-concurrency-scenarios',  name:'Race conditions, deadlocks, livelock, starvation',               h:3, p:'V.High'},
      ]},
      {id:'java-c', name:'Part C · JVM & Performance', hours:35, topics:[
        {id:'java-jvm-architecture',       name:'JVM architecture (class loaders, runtime data areas)',           h:4, p:'High'},
        {id:'java-memory-model',           name:'Memory model (heap, stack, metaspace, GC roots)',                h:5, p:'High'},
        {id:'java-gc-algorithms',          name:'GC algorithms (G1, ZGC, Shenandoah, Parallel, Serial)',          h:6, p:'High'},
        {id:'java-jvm-tuning',             name:'JVM tuning flags (-Xms, -Xmx, GC flags, common configs)',        h:3, p:'High'},
        {id:'java-production-diagnostics', name:'Production diagnostics (thread dump, heap dump, JFR)',            h:6, p:'V.High'},
        {id:'java-oom-debugging',          name:'OutOfMemoryError types + memory leak debugging',                  h:4, p:'V.High'},
        {id:'java-performance',            name:'Performance: escape analysis, JIT, string pool, object pooling', h:4, p:'Medium'},
        {id:'java-reflection',             name:'Reflection + Dynamic proxies (basic awareness for frameworks)',   h:3, p:'Medium'},
      ]},
      {id:'java-d', name:'Part D · Modern Java 9–21', hours:30, topics:[
        {id:'java-9',                    name:'Java 9 (modules awareness, factory methods, private interface methods)', h:3, p:'High'},
        {id:'java-10-11',                name:'Java 10–11 (var, HttpClient, isBlank/strip/lines)',                      h:3, p:'High'},
        {id:'java-14-17-records-switch', name:'Java 14–17: switch expressions, text blocks, records',                  h:6, p:'V.High'},
        {id:'java-17-sealed-pattern',    name:'Java 17: sealed classes, pattern matching for instanceof',               h:4, p:'V.High'},
        {id:'java-21-virtual-threads',   name:'Java 21: Virtual Threads (Project Loom) ⭐',                             h:8, p:'V.High'},
        {id:'java-21-pattern-record',    name:'Java 21: pattern matching for switch, record patterns',                  h:3, p:'High'},
        {id:'java-reactive-awareness',   name:'Reactive awareness: Mono/Flux conceptual (vs virtual threads)',          h:3, p:'Medium'},
      ]},
      {id:'java-e', name:'Part E · Design & Quality', hours:25, topics:[
        {id:'java-solid',               name:'SOLID Principles (deep, with refactoring examples)', h:4, p:'V.High'},
        {id:'java-patterns-creational', name:'Design Patterns: Creational (Singleton 4 impls, Factory, Builder)', h:5, p:'High'},
        {id:'java-patterns-structural', name:'Design Patterns: Structural (Adapter, Decorator, Proxy, Facade)',   h:4, p:'High'},
        {id:'java-patterns-behavioral', name:'Design Patterns: Behavioral (Strategy, Observer, Template, Command)',h:4, p:'High'},
        {id:'java-clean-code',          name:'DRY/KISS/YAGNI + code smells + refactoring',                        h:2, p:'High'},
        {id:'java-logging',             name:'Logging (SLF4J, Logback, MDC, correlation IDs)',                    h:3, p:'High'},
        {id:'java-build-tools',         name:'Build Tools (Maven lifecycle, Gradle basics, dependency resolution)', h:3, p:'Medium'},
      ]},
      {id:'java-f', name:'Part F · Testing', hours:10, topics:[
        {id:'java-junit5',            name:'JUnit 5 (lifecycle, parameterized, assertions)',        h:3, p:'High'},
        {id:'java-mockito',           name:'Mockito (mock/spy/inject, ArgumentCaptor, verify)',     h:4, p:'High'},
        {id:'java-testing-patterns',  name:'Testing patterns (AAA, TDD basics, JaCoCo coverage)',  h:3, p:'Medium'},
      ]},
    ]
  },

  spring: {
    name:'Spring', color:'#6a994e', totalHours:150,
    groups:[
      {id:'sp-all', name:'Spring Framework Lectures (L1–L200)', hours:150, topics:[
        {id:'sp-l1-3',     name:'L1-3 · Enterprise Architecture, 1/2/3-Tier',                              h:1, p:'V.High'},
        {id:'sp-l4-6',     name:'L4-6 · Model 1 vs Model 2, MVC Architecture, Framework comparison',       h:1, p:'V.High'},
        {id:'sp-l7-9',     name:'L7-9 · Spring history + modules + App Development-1',                     h:1, p:'V.High'},
        {id:'sp-l10-12',   name:'L10-12 · App Dev-2,3 + BeanFactory Resources',                            h:2, p:'V.High'},
        {id:'sp-l13-15',   name:'L13-15 · ApplicationContext, BeanFactory vs ApplicationContext',           h:2, p:'V.High'},
        {id:'sp-l16-18',   name:'L16-18 · Beans + Scopes (singleton/prototype/request/session)',            h:2, p:'V.High'},
        {id:'sp-l19-21',   name:'L19-21 · Java Configurations + Bean Lifecycle (init, destroy)',            h:2, p:'V.High'},
        {id:'sp-l22-24',   name:'L22-24 · Bean Lifecycle deep + Inheritance + BeanPostProcessor',           h:2, p:'V.High'},
        {id:'sp-l25-27',   name:'L25-27 · IoC + Constructor DI + Setter DI + List/Set/Map',                h:2, p:'V.High'},
        {id:'sp-l28-30',   name:'L28-30 · Circular DI + Constructor vs Setter + Namespaces',               h:2, p:'V.High'},
        {id:'sp-l31-33',   name:'L31-33 · C-Namespace + Autowiring + Bean Collaboration + XML autowiring', h:2, p:'V.High'},
        {id:'sp-l34-35',   name:'L34-35 · Annotation-Based Autowiring + Autodiscovery-1 (@Component)',     h:2, p:'V.High'},
        {id:'sp-l36-37',   name:'L36-37 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations)',    h:2, p:'V.High'},
        {id:'sp-l38-39',   name:'L38-39 · Autodiscovery-4 + Java-Based Autowiring (@Configuration deep)',  h:2, p:'V.High'},
        {id:'sp-l40',      name:'L40 · Explicit Wiring vs Autowiring drawbacks',                            h:1, p:'High'},
        {id:'sp-l41-42',   name:'L41-42 · Method Injection + Method Replacement',                          h:2, p:'High'},
        {id:'sp-l43-44',   name:'L43-44 · Bean Validations-1,2',                                           h:2, p:'V.High'},
        {id:'sp-l45-46',   name:'L45-46 · Bean Validations-3 + Event Handling',                            h:2, p:'High'},
        {id:'sp-l47-48',   name:'L47-48 · Custom Event Handling + Internationalization-1',                  h:2, p:'High'},
        {id:'sp-l49-50',   name:'L49-50 · Internationalization-2 + Bean Manipulations & Wrappers-1',       h:2, p:'Medium'},
        {id:'sp-l51-52',   name:'L51-52 · Bean Wrappers-2 + Property Editors',                             h:2, p:'Medium'},
        {id:'sp-l53-54',   name:'L53-54 · Profiling + SpEL-1',                                             h:2, p:'High'},
        {id:'sp-l55-56',   name:'L55-56 · SpEL-2,3',                                                       h:2, p:'High'},
        {id:'sp-l57',      name:'L57 · DAO Introduction',                                                   h:1, p:'V.High'},
        {id:'sp-l60',      name:'L60 · Spring DAO Exceptions + Spring JDBC Intro',                         h:1, p:'V.High'},
        {id:'sp-l61-62',   name:'L61-62 · JdbcTemplate-1,2 (basic queries)',                               h:2, p:'V.High'},
        {id:'sp-l63-64',   name:'L63-64 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper)',            h:2, p:'V.High'},
        {id:'sp-l65',      name:'L65 · Positional + Named Parameters',                                      h:1, p:'V.High'},
        {id:'sp-l66-67',   name:'L66-67 · NamedParameterJdbcTemplate-1,2',                                 h:2, p:'V.High'},
        {id:'sp-l73-74',   name:'L73-74 · Batch Updates-1,2',                                              h:2, p:'High'},
        {id:'sp-l75-76',   name:'L75-76 · Stored Procedures and Functions-1,2',                            h:2, p:'High'},
        {id:'sp-l77-78',   name:'L77-78 · Stored Procedures and Functions-3,4',                            h:2, p:'High'},
        {id:'sp-l79',      name:'L79 · BLOB and CLOB-1',                                                   h:1, p:'Medium'},
        {id:'sp-l80-81',   name:'L80-81 · BLOB and CLOB-2,3',                                              h:2, p:'Medium'},
        {id:'sp-l82-83',   name:'L82-83 · Connection Pooling-1,2 + HikariCP modern config',                h:2, p:'V.High'},
        {id:'sp-l84-85',   name:'L84-85 · Connection Pooling-3,4',                                         h:2, p:'High'},
        {id:'sp-l91-92',   name:'L91-92 · AOP Introduction + Terminology',                                 h:2, p:'V.High'},
        {id:'sp-l93',      name:'L93 · Advices',                                                           h:1, p:'V.High'},
        {id:'sp-l94-95',   name:'L94-95 · Pointcuts + MethodBeforeAdvice-1',                               h:2, p:'V.High'},
        {id:'sp-l96-97',   name:'L96-97 · MethodBeforeAdvice-2 + AfterAdvice',                             h:2, p:'V.High'},
        {id:'sp-l98-99',   name:'L98-99 · ThrowsAdvice + AroundAdvice',                                    h:2, p:'V.High'},
        {id:'sp-l100-101', name:'L100-101 · AspectJ Style AOP + Declarative-1',                            h:2, p:'High'},
        {id:'sp-l102-103', name:'L102-103 · Declarative-2 + AspectJ Annotation Style-1',                   h:2, p:'High'},
        {id:'sp-l104-105', name:'L104-105 · AspectJ Annotation-2 + Transactions Intro',                    h:2, p:'V.High'},
        {id:'sp-l106-107', name:'L106-107 · ACID + Isolation + Transaction Support in Spring',             h:2, p:'V.High'},
        {id:'sp-l108-109', name:'L108-109 · Programmatic Transaction Management-1,2',                      h:2, p:'V.High'},
        {id:'sp-l110-111', name:'L110-111 · Declarative Tx with XML + Annotations',                        h:2, p:'V.High'},
        {id:'sp-l112-113', name:'L112-113 · Hibernate Intro + Application',                                h:2, p:'V.High'},
        {id:'sp-l114-115', name:'L114-115 · Spring-Hibernate Integration-1,2',                             h:2, p:'V.High'},
        {id:'sp-l116-117', name:'L116-117 · Spring-Hibernate Integration-3 + JPA Intro',                   h:2, p:'V.High'},
        {id:'sp-l118-119', name:'L118-119 · JPA Application + Spring-JPA Integration',                     h:2, p:'V.High'},
        {id:'sp-l120-121', name:'L120-121 · Spring Web MVC Introduction-1,2',                              h:2, p:'V.High'},
        {id:'sp-l122-123', name:'L122-123 · MVC Elements + Flow + DispatcherServlet',                      h:2, p:'V.High'},
        {id:'sp-l124-125', name:'L124-125 · HandlerMapping + Controller + ViewResolver basics',             h:2, p:'V.High'},
        {id:'sp-l126-127', name:'L126-127 · Spring MVC Application + Internal Flow-1',                     h:2, p:'V.High'},
        {id:'sp-l128-129', name:'L128-129 · MVC Application-2,3 + Login Application',                     h:2, p:'High'},
        {id:'sp-l130',     name:'L130 · @SessionAttribute + @RequestParam + REST intro',                   h:1, p:'High'},
        {id:'sp-l147-148', name:'L147-148 · BeanNameUrlHandlerMapping + SimpleUrlHandlerMapping',          h:2, p:'High'},
        {id:'sp-l149-150', name:'L149-150 · DefaultAnnotationHandlerMapping + HandlerInterceptor-1',       h:2, p:'High'},
        {id:'sp-l151-152', name:'L151-152 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource)', h:2, p:'High'},
        {id:'sp-l153-154', name:'L153-154 · XMLViewResolver + Exception Handling (@ControllerAdvice)',     h:2, p:'V.High'},
        {id:'sp-l155',     name:'L155 · RFC 7807 + Global error handling supplement',                      h:1, p:'V.High'},
        {id:'sp-l156-157', name:'L156-157 · File Uploading + File Downloading',                            h:2, p:'High'},
        {id:'sp-l158',     name:'L158 · Internationalization-1 + CORS configuration',                      h:2, p:'High'},
        {id:'sp-l171-172', name:'L171-172 · Web Security Introduction + Authentication Mechanisms-1',      h:2, p:'V.High'},
        {id:'sp-l173-174', name:'L173-174 · Authentication Mechanisms-2,3',                                h:2, p:'V.High'},
        {id:'sp-l175',     name:'L175 · Spring Security Models + Spring Security 6 architecture',          h:1, p:'V.High'},
        {id:'sp-l176-177', name:'L176-177 · Maven Introduction + POM-1',                                   h:2, p:'High'},
        {id:'sp-l178-179', name:'L178-179 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance)',        h:2, p:'High'},
        {id:'sp-l180',     name:'L180 · POM-4 (Build Configurations + Profiles)',                          h:1, p:'High'},
        {id:'sp-l187-188', name:'L187-188 · Spring Boot Introduction + Features',                          h:2, p:'V.High'},
        {id:'sp-l189-191', name:'L189+L191 · Boot with Eclipse + Initializr',                              h:2, p:'High'},
        {id:'sp-l192-193', name:'L192-193 · Postman + User Forms Application',                             h:2, p:'High'},
        {id:'sp-l194-195', name:'L194-195 · Spring Boot with Spring JDBC-1,2',                             h:2, p:'V.High'},
        {id:'sp-l196-197', name:'L196-197 · Spring Boot with Spring JDBC-3,4',                             h:2, p:'V.High'},
        {id:'sp-l198-199', name:'L198-199 · Spring Data JDBC-1,2',                                         h:2, p:'V.High'},
        {id:'sp-l200',     name:'L200 · Spring Boot Actuator deep',                                         h:2, p:'High'},
      ]},
    ]
  },

  sql: {
    name:'SQL / DB', color:'#a87fb8', totalHours:20,
    groups:[
      {id:'sql-bc', name:'SQL Bootcamp · Optimised Path (Phase 1)', hours:6, topics:[
        {id:'sql-bc-s1', name:'S1 · Basics Refresher (pgAdmin, DB overview)',                              h:0.5, p:'V.High'},
        {id:'sql-bc-s2', name:'S2 · SQL Fundamentals (SELECT/WHERE/ORDER BY/LIMIT/BETWEEN/IN/LIKE)',       h:1.5, p:'V.High'},
        {id:'sql-bc-s3', name:'S3 · GROUP BY + Aggregations (SUM/AVG/COUNT/MIN/MAX) + HAVING',            h:1,   p:'V.High'},
        {id:'sql-bc-s4', name:'S4 · JOINs (INNER, FULL OUTER, LEFT/RIGHT, UNION, challenge)',             h:1.5, p:'V.High'},
        {id:'sql-bc-s5', name:'S5 · Advanced Essentials (Timestamps, Math/String functions, SubQuery, Self-Join)', h:1, p:'V.High'},
        {id:'sql-bc-s6', name:'S6 · DB Concepts (Primary Keys, Foreign Keys, Constraints)',               h:0.5, p:'High'},
        {id:'sql-bc-s7', name:'S7 · Conditional SQL (CASE, COALESCE, CAST, NULLIF, Views)',               h:1,   p:'V.High'},
      ]},
      {id:'sql-adv', name:'Advanced SQL Bootcamp (Phase 2)', hours:11, topics:[
        {id:'sql-adv-s2',  name:'S2 · Subqueries + CTEs (FROM, CTEs, comparison, IN/NOT IN, EXISTS, Recursive)', h:1.5, p:'V.High'},
        {id:'sql-adv-s3',  name:'S3 · Window Functions (OVER, PARTITION BY, ordering, frames)',           h:1,   p:'V.High'},
        {id:'sql-adv-s4',  name:'S4 · Advanced JOINs (Self, Cross, Full, USING, Natural joins)',          h:0.5, p:'High'},
        {id:'sql-adv-s5',  name:'S5 · Set Operations (UNION, INTERSECT, EXCEPT)',                         h:0.5, p:'High'},
        {id:'sql-adv-s6',  name:'S6 · Grouping Sets (CUBE, ROLLUP, multi-dimensional aggregations)',      h:0.5, p:'High'},
        {id:'sql-adv-s7',  name:'S7 · Schema Structures (Info schema, Constraints, Foreign keys)',        h:1,   p:'High'},
        {id:'sql-adv-s8',  name:'S8 · Transactions (BEGIN/COMMIT/ROLLBACK, SAVEPOINT, locks)',            h:1,   p:'V.High'},
        {id:'sql-adv-s9',  name:'S9 · Partitioning (Range, List, Hash, Table inheritance)',               h:1.5, p:'High'},
        {id:'sql-adv-s10', name:'S10 · Views (Creating, Updating, Materialized, Recursive)',              h:1,   p:'V.High'},
        {id:'sql-adv-s11', name:'S11 · SQL Functions (User-defined, PL/pgSQL)',                           h:0.5, p:'High'},
        {id:'sql-adv-s12', name:'S12 · Stored Procedures (creating, modifying)',                          h:0.5, p:'High'},
        {id:'sql-adv-s13', name:'S13 · Triggers (create, trigger functions, before/after)',               h:0.5, p:'High'},
        {id:'sql-adv-s14', name:'S14 · EXPLAIN ANALYZE + Arrays, JSON/JSONB, Extensions',                h:1,   p:'V.High'},
      ]},
      {id:'sql-prep', name:'Interview Practice', hours:3, topics:[
        {id:'sql-prep-1', name:'CTEs + Window Functions mock questions',                                   h:1,   p:'V.High'},
        {id:'sql-prep-2', name:'EXPLAIN ANALYZE + query optimization problems',                            h:1,   p:'V.High'},
        {id:'sql-prep-3', name:'Transactions + partitioning problems',                                     h:0.5, p:'High'},
        {id:'sql-prep-4', name:'Final end-to-end mock (JOIN + CTE + Window Function + EXPLAIN)',           h:0.5, p:'V.High'},
      ]},
    ]
  },

  sd: {
    name:'System Design', color:'#e9c46a', totalHours:92,
    groups:[
      {id:'sd-lld', name:'InterviewReady LLD Course', hours:12, topics:[
        {id:'sd-lld-s1',  name:'S1 · Game Engine — Intro to OOP Design Thinking',         h:0.75, p:'V.High'},
        {id:'sd-lld-s2',  name:'S2 · SRP — Single Responsibility Principle',              h:0.75, p:'V.High'},
        {id:'sd-lld-s3',  name:'S3 · Prototype Pattern',                                        h:0.5,  p:'V.High'},
        {id:'sd-lld-s4',  name:'S4 · DRY Principle + Iterator Pattern',                         h:0.5,  p:'V.High'},
        {id:'sd-lld-s5',  name:'S5 · OCP (Open/Closed Principle) + Builder Pattern',            h:0.75, p:'V.High'},
        {id:'sd-lld-s6',  name:'S6 · LSP — Liskov Substitution Principle',                 h:0.5,  p:'V.High'},
        {id:'sd-lld-s7',  name:'S7 · ISP + DIP + Singleton + Chain of Responsibility',          h:0.75, p:'V.High'},
        {id:'sd-lld-s8',  name:'S8 · Memento + Proxy + Flyweight (Memory Optimization)',        h:0.5,  p:'High'},
        {id:'sd-lld-s9',  name:'S9 · TDD + State + Strategy + Factory Patterns',                h:0.5,  p:'V.High'},
        {id:'sd-lld-s10', name:'S10 · Strategy Pattern — deep dive',                        h:0.75, p:'V.High'},
        {id:'sd-lld-s11', name:'S11 · Command Pattern + PubSub',                                 h:0.5,  p:'High'},
      ]},
      {id:'sd-mc', name:'Machine Coding Practice', hours:8, topics:[
        {id:'sd-mc-s1',   name:'MC-S1 · Splitwise — machine coding walkthrough',           h:1,    p:'V.High'},
        {id:'sd-mc-s2',   name:'MC-S2 · In-Memory Cache (LRU/LFU design)',                      h:2,    p:'V.High'},
        {id:'sd-mc-s3',   name:'MC-S3 · Event Bus',                                              h:2,    p:'V.High'},
        {id:'sd-mc-s4',   name:'MC-S4 · Rate Limiter',                                           h:2,    p:'V.High'},
        {id:'sd-mc-test', name:'LLD Test + Full Review Session',                                       h:1,    p:'V.High'},
      ]},
      {id:'sd-hld', name:'HLD Walkthroughs', hours:42, topics:[
        {id:'sd-hld-news-feed',         name:'News Feed / Timeline (fanout strategies)',              h:3, p:'V.High'},
        {id:'sd-hld-url-shortener',     name:'URL Shortener (hashing, DB, cache, scale)',             h:3, p:'V.High'},
        {id:'sd-hld-rate-limiter',      name:'Rate Limiter HLD (token bucket, sliding window)',       h:3, p:'V.High'},
        {id:'sd-hld-notification',      name:'Notification Service (queue, retry, DLQ)',              h:3, p:'V.High'},
        {id:'sd-hld-distributed-locks', name:'Distributed Locks (Redis/ZooKeeper)',                   h:2, p:'High'},
        {id:'sd-hld-messaging',         name:'Distributed Messaging — Kafka deep design',        h:3, p:'V.High'},
        {id:'sd-hld-chat',              name:'Real-time Chat App (WebSocket + presence)',             h:3, p:'High'},
        {id:'sd-hld-autocomplete',      name:'Search Autocomplete (Trie + caching)',                  h:3, p:'High'},
        {id:'sd-hld-stock',             name:'Stock Exchange / Trading System (LLD+HLD)',             h:3, p:'High'},
        {id:'sd-hld-news-feed-deep',    name:'News Feed Deep Redesign',                               h:3, p:'High'},
        {id:'sd-hld-twitter-search',    name:'Twitter Search (Elasticsearch + caching)',              h:3, p:'High'},
        {id:'sd-hld-file-storage',      name:'Distributed File Storage (S3/HDFS-like)',               h:3, p:'High'},
        {id:'sd-hld-live-streaming',    name:'Live Streaming (Twitch/YouTube)',                       h:3, p:'Medium'},
        {id:'sd-hld-company',           name:'Company-specific Design (Walmart/PayPal)',              h:3, p:'High'},
      ]},
      {id:'sd-fw', name:'Framework & Articulation', hours:10, topics:[
        {id:'sd-reshaded',   name:'RESHADED framework practice',                                      h:2, p:'V.High'},
        {id:'sd-tradeoffs',  name:'Tradeoff articulation drills (10 classic tradeoffs)',              h:2, p:'V.High'},
        {id:'sd-capacity',   name:'Capacity estimation (back-of-envelope)',                           h:1, p:'High'},
      ]},
    ]
  },

  cloud: {
    name:'Cloud / Docker / K8s / AWS', color:'#2a9d8f', totalHours:35,
    groups:[
      {id:'cl-docker', name:'Docker', hours:12, topics:[
        {id:'cloud-docker-basics',      name:'Container vs VM, Dockerfile (FROM/COPY/RUN/CMD/ENTRYPOINT)',   h:4, p:'V.High'},
        {id:'cloud-docker-compose',     name:'Docker Compose (services, volumes, networks, healthchecks)',   h:3, p:'V.High'},
        {id:'cloud-docker-networking',  name:'Container networking (bridge, host, overlay)',                 h:2, p:'High'},
        {id:'cloud-docker-spring-boot', name:'Containerize Spring Boot app (multi-stage builds, JVM flags)', h:3, p:'V.High'},
      ]},
      {id:'cl-k8s', name:'Kubernetes', hours:12, topics:[
        {id:'cloud-k8s-architecture', name:'Architecture (Master/Nodes, kubelet, etcd, API server)',         h:2, p:'High'},
        {id:'cloud-k8s-workloads',    name:'Pods, Deployments, ReplicaSets, StatefulSets, DaemonSets',       h:3, p:'V.High'},
        {id:'cloud-k8s-services',     name:'Services (ClusterIP, NodePort, LoadBalancer) + Ingress',         h:2, p:'V.High'},
        {id:'cloud-k8s-config',       name:'ConfigMaps + Secrets',                                          h:1, p:'V.High'},
        {id:'cloud-k8s-probes',       name:'Liveness/Readiness/Startup probes',                             h:1, p:'V.High'},
        {id:'cloud-k8s-hpa',          name:'Horizontal Pod Autoscaler (HPA)',                               h:1, p:'High'},
        {id:'cloud-k8s-deploy',       name:'Deploy Spring Boot to Minikube/Kind',                           h:2, p:'High'},
      ]},
      {id:'cl-aws', name:'Cloud / AWS / CI-CD', hours:11, topics:[
        {id:'cloud-aws-core',       name:'AWS top services (EC2, S3, RDS, ELB, CloudWatch, IAM)',            h:3, p:'High'},
        {id:'cloud-aws-containers', name:'AWS containers: ECS, EKS, Fargate, ECR',                          h:2, p:'High'},
        {id:'cloud-aws-msg-queue',  name:'AWS SQS, SNS basics',                                             h:1, p:'Medium'},
        {id:'cloud-cicd',           name:'CI/CD with GitHub Actions / Jenkins basics',                      h:3, p:'High'},
        {id:'cloud-12-factor',      name:'12-Factor App principles',                                        h:1, p:'High'},
        {id:'cloud-multi-cloud',    name:'AWS vs Azure vs GCP at-a-glance',                                 h:1, p:'Low'},
      ]},
    ]
  },
};

// ─── TRACK TAB RENDERING ───────────────────────────────────────────────────

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
            <div class="tr-name">${tp.name}</div>
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
}
