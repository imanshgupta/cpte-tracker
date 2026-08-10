// ─── DATA ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'java-prep-tracker-v2';
const PLAN_START = '2026-08-11';
const PLAN_END   = '2027-02-20';

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
    {d:'2026-08-11',aws:'☁️ SAA Intro — Introduction (4m) · AWS Exams (18m) · Scenario - Animals4life (13m) · Connect with other students and your instructor (3m)',awsRef:['aws-intro-01','aws-intro-02','aws-intro-03','aws-intro-04'],dsa:'GFG DSA intro + Analysis of Algorithms videos 1-6',main:'Java Fundamentals: types, primitives, JVM/JRE/JDK, classpath',mt:'java',rot:'Setup: GitHub repo, IntelliJ, Spring Boot starter project',rt:'hands-on'},
    {d:'2026-08-12',dsa:'GFG: Big-O videos 7-12 + 5 complexity practice + Arrays intro',main:'📺 L1-3 (rev) · Enterprise Architecture, 1/2/3-Tier',mt:'spring',rot:'📺 SQL Bootcamp S1 Basics (18min) + S2: SELECT, DISTINCT, COUNT · 10 practice Q',rt:'sql',cRef:'sql-bc-s1'},
    {d:'2026-08-13',aws:'☁️ Accounts & IAM — AWS Accounts - The basics (12m) · Creating an AWS Account (5m) · Multi-factor Authentication (MFA) (8m) · Adding MFA - General Account Root User (5m) · Identity and Access Management (IAM) Basics (13m)',awsRef:['aws-acct-01','aws-acct-02','aws-acct-03','aws-acct-04','aws-acct-05'],dsa:'GFG: Arrays intro + Largest + 2nd Largest + Reverse Array',main:'Java OOP fundamentals: inheritance, polymorphism deep, super/this',mt:'java',rot:'Hands-on: Refactor Spring Boot starter with 2 beans constructor injection',rt:'hands-on'},
    {d:'2026-08-14',dsa:'GFG: Arrays — Left/Right Rotation by K',main:'📺 L4-6 (rev) · Model 1 vs Model 2, MVC Architecture, Framework comparison',mt:'spring',rot:'Full Week-so-far revision + self-quiz (10 Q)',rt:'revision'},
    {d:'2026-08-15',aws:'☁️ Accounts & IAM + AWS Fundamentals — Creating IAMADMIN user & adding MFA (8m) · IAM Access Keys (7m) · Creating Access keys and setting up AWS CLI v2 tools (18m) · AWS Public vs Private Services (7m)',awsRef:['aws-acct-06','aws-acct-07','aws-acct-08','aws-fund-01'],dsa:'GFG: Arrays — Kadane\'s Algorithm + variants',main:'Java OOP: Abstraction, Encapsulation, IS-A vs HAS-A',mt:'java',rot:'📺 SQL Bootcamp S2: WHERE 1&2, ORDER BY, LIMIT, BETWEEN, IN, LIKE/ILIKE + exercises',rt:'sql',cRef:'sql-bc-s2'},
    {d:'2026-08-16',dsa:'GFG: Arrays — Stock Buy/Sell + Move Zeroes',main:'📺 L7-9 (rev) · Spring history + modules + App Development-1',mt:'spring',rot:'Hands-on: Trace bean creation in Spring Boot app, log lifecycle',rt:'hands-on'},
    {d:'2026-08-17',aws:'☁️ AWS Fundamentals — AWS Global Infrastructure (15m) · AWS Default Virtual Private Cloud (VPC) (15m) · Elastic Compute Cloud (EC2) Basics (15m)',awsRef:['aws-fund-02','aws-fund-03','aws-fund-04'],dsa:'GFG: Arrays — Set Matrix Zeros + Pascal\'s Triangle',main:'Java Method overloading vs overriding, dynamic dispatch',mt:'java',rot:'📺 SQL Bootcamp S3: Aggregation Functions, GROUP BY 1&2, HAVING (33min) + practice',rt:'sql',cRef:'sql-bc-s3'},
  ]},
  {wn:2,phase:'Phase 1: Foundation',title:'Spring L10-21 revision + Exception Handling + Annotations',days:[
    {d:'2026-08-18',dsa:'GFG: Arrays — Next Permutation + Sort 0/1/2',main:'📺 L10-12 (rev) · App Dev-2,3 + BeanFactory Resources',mt:'spring',rot:'Hands-on: BeanFactory experiment — load from XML vs Java config',rt:'hands-on'},
    {d:'2026-08-19',aws:'☁️ AWS Fundamentals — My First EC2 Instance - PART1 (10m) · My First EC2 Instance - PART2 (4m) · Simple Storage Service (S3) Basics (16m)',awsRef:['aws-fund-05','aws-fund-06','aws-fund-07'],dsa:'GFG: Arrays final — Merge Intervals + Find Duplicate',main:'Java Abstract class vs Interface, Java 8 defaults, diamond problem',mt:'java',rot:'📺 LLD S1 · Game Engine — OOP design thinking (45min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s1'},
    {d:'2026-08-20',dsa:'GFG: Recursion intro + factorial, sum-N, power',main:'📺 L13-15 (rev) · ApplicationContext, BeanFactory vs ApplicationContext',mt:'spring',rot:'Hands-on: Inspect ApplicationContext, list all beans programmatically',rt:'hands-on'},
    {d:'2026-08-21',aws:'☁️ AWS Fundamentals — My First S3 Bucket (19m) · CloudFormation (CFN) Basics (12m)',awsRef:['aws-fund-08','aws-fund-09'],dsa:'GFG: Recursion — Fibonacci + palindrome check',main:'Java Static keyword deep + Final keyword deep',mt:'java',rot:'Full week revision + self-quiz (15 Q)',rt:'revision'},
    {d:'2026-08-22',dsa:'GFG: Recursion — generate subsets (backtracking intro)',main:'📺 L16-18 (rev) · Beans + Scopes (singleton/prototype/request/session)',mt:'spring',rot:'📺 SQL Bootcamp S4: JOINs intro, AS statement, INNER JOIN, FULL OUTER JOIN (37min) + 10Q',rt:'sql'},
    {d:'2026-08-23',aws:'☁️ AWS Fundamentals — Simple Automation With CloudFormation (CFN) (16m) · CloudWatch (CW) Basics (14m) · Simple Monitoring with Cloudwatch (16m)',awsRef:['aws-fund-10','aws-fund-11','aws-fund-12'],dsa:'GFG: Recursion — print all permutations',main:'Java String pool, immutability, intern(), == vs equals',mt:'java',rot:'Hands-on: Test bean scopes — singleton vs prototype counter',rt:'hands-on'},
    {d:'2026-08-24',dsa:'GFG: Recursion — N-Queens intro, subset sum',main:'📺 L19-21 (rev) · Java Configurations + Bean Lifecycle (init, destroy)',mt:'spring',rot:'📺 SQL Bootcamp S4: LEFT/RIGHT JOIN, UNION, JOIN challenge tasks (31min) + practice',rt:'sql',cRef:'sql-bc-s4'},
  ]},
  {wn:3,phase:'Phase 1: Foundation',title:'Spring L22-35 revision finish + L35 NEW + Hashing + Searching',days:[
    {d:'2026-08-25',aws:'☁️ AWS Fundamentals — Shared Responsibility Model (6m) · High-Availability vs Fault-Tolerance vs Disaster Recovery (17m) · Route53 (R53) Fundamentals (6m) · Registering a Domain with route53 (10m)',awsRef:['aws-fund-13','aws-fund-14','aws-fund-15','aws-fund-16'],dsa:'GFG: Hashing intro + frequency counter',main:'📺 L22-24 (rev) · Bean Lifecycle deep + Inheritance + BeanPostProcessor',mt:'spring',rot:'Hands-on: Custom BeanPostProcessor for logging',rt:'hands-on'},
    {d:'2026-08-26',dsa:'GFG: Hashing — 2 Sum, anagram check',main:'Java StringBuilder vs StringBuffer, perf benchmark',mt:'java',rot:'📺 LLD S2 · SRP (45min) + S3 · Prototype Pattern (35min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s2','sd-lld-s3']},
    {d:'2026-08-27',aws:'☁️ AWS Fundamentals + IAM & Orgs — DNS Record Types (13m) · IAM Identity Policies (16m) · IAM Users and ARNs (14m)',awsRef:['aws-fund-17','aws-iam-01','aws-iam-02'],dsa:'GFG: Hashing — first unique char, longest subarray sum K',main:'📺 L25-27 (rev) · IoC + Constructor DI + Setter DI + List/Set/Map',mt:'spring',rot:'Hands-on: Implement equals/hashCode, test in HashSet/HashMap',rt:'hands-on'},
    {d:'2026-08-28',dsa:'GFG: Hashing — group anagrams, subarray with XOR',main:'📺 L28-30 (rev) · Circular DI + Constructor vs Setter + Namespaces',mt:'spring',rot:'Full week revision + self-quiz',rt:'revision'},
    {d:'2026-08-29',aws:'☁️ IAM & Orgs — Simple Identity Permissions in AWS (16m) · IAM Groups (8m) · Permissions control using IAM Groups (9m) · IAM Roles - The Tech (8m)',awsRef:['aws-iam-03','aws-iam-04','aws-iam-05','aws-iam-06'],dsa:'GFG: Searching — Binary Search variants (first/last occurrence)',main:'Java Exception handling: hierarchy, checked vs unchecked, try-with-resources',mt:'java',rot:'📺 SQL Bootcamp S5: Timestamps, Math functions, String functions, SubQuery (47min) + exercises',rt:'sql',cRef:'sql-bc-s5'},
    {d:'2026-08-30',dsa:'GFG: Searching — Binary Search on Answer (sqrt, peak)',main:'📺 L31-33 (rev) · C-Namespace + Autowiring + Bean Collaboration + XML autowiring',mt:'spring',rot:'Hands-on: Refactor project to use @Autowired with @Qualifier + @Primary',rt:'hands-on'},
    {d:'2026-08-31',aws:'☁️ IAM & Orgs — When to use IAM Roles (15m) · Service-linked Roles & PassRole (5m) · AWS Organizations (13m)',awsRef:['aws-iam-07','aws-iam-08','aws-iam-09'],dsa:'GFG: Searching final — Search in rotated sorted array',main:'📺 L34 (rev) + 📺 L35 (new) · Annotation-Based Autowiring + Autodiscovery-1 (@Component)',mt:'spring',rot:'📺 SQL Bootcamp S5: Self-Join + S6: Keys/Constraints + S7: CASE, COALESCE, CAST (53min)',rt:'sql',cRef:'sql-bc-s6'},
  ]},
  {wn:4,phase:'Phase 1: Foundation',title:'Spring NEW content begins · Autodiscovery + Linked List',days:[
    {d:'2026-09-01',dsa:'GFG: Sorting — Merge Sort (recursion tree + O(n log n))',main:'📺 L36-37 · Autodiscovery-2,3 (@Service, @Repository, meta-annotations)',mt:'spring',rot:'Hands-on: Refactor project — clean @Service/@Repository separation',rt:'hands-on'},
    {d:'2026-09-02',aws:'☁️ IAM & Orgs — AWS Organizations demo (20m) · Service Control Policies (SCPs) (13m)',awsRef:['aws-iam-10','aws-iam-11'],dsa:'GFG: Sorting — Quick Sort (partition logic)',main:'Java Object class methods, Wrapper classes, autoboxing',mt:'java',rot:'📺 LLD S4 · DRY + Iterator (30min) + S5 · OCP + Builder (40min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s4','sd-lld-s5']},
    {d:'2026-09-03',dsa:'GFG: Sorting + Linked List intro',main:'📺 L38-39 · Autodiscovery-4 + Java-Based Autowiring (@Configuration deep)',mt:'spring',rot:'Hands-on: Pure Java config (no XML) for 3 beans',rt:'hands-on'},
    {d:'2026-09-04',aws:'☁️ IAM & Orgs — Using Service Control Policies (17m) · CloudWatch Logs (7m) · CloudTrail (12m)',awsRef:['aws-iam-12','aws-iam-13','aws-iam-14'],dsa:'GFG: Linked List — Reverse (iterative + recursive)',main:'Java Generics basics: type params, wildcards, PECS',mt:'java',rot:'Full week revision + self-quiz + plan Week 5',rt:'revision'},
    {d:'2026-09-05',dsa:'GFG: Linked List — Detect Cycle (Floyd\'s), find cycle start',main:'📺 L40 · Explicit Wiring vs Autowiring drawbacks · 🆕 Bean Validation API supplement (Baeldung)',mt:'spring',rot:'📺 SQL Bootcamp S7: NULLIF, Views (25min) + Phase 1 SQL done — full review + exercises',rt:'sql',cRef:'sql-bc-s7'},
    {d:'2026-09-06',aws:'☁️ IAM & Orgs — Implementing an Organizational Trail (18m) · AWS Control Tower 101 (16m)',awsRef:['aws-iam-15','aws-iam-16'],dsa:'GFG: Linked List — Merge two sorted, find middle',main:'Java I/O & NIO basics, Files/Path, BufferedReader/Writer',mt:'java',rot:'Hands-on: refactor project to DTO + MapStruct (🆕 supplement Amigoscode)',rt:'hands-on'},
    {d:'2026-09-07',dsa:'GFG: Linked List — Palindrome, Remove Nth from end',main:'📺 L41-42 · Method Injection + Method Replacement',mt:'spring',rot:'PHASE 1 RETRO + plan Phase 2',rt:'revision'},
  ]},
  {wn:5,phase:'Phase 2: Core Backend',title:'Spring L43-48 Validations + Events + LL deep + Threading',days:[
    {d:'2026-09-08',aws:'☁️ S3 — S3 Security (Resource Policies & ACLs) (18m) · S3 Static Hosting (11m)',awsRef:['aws-s3-01','aws-s3-02'],dsa:'GFG: LL — Merge K sorted (intro to heap)',main:'Java Part B start: Thread vs Runnable, lifecycle, daemon threads',mt:'java',rot:'Hands-on: Multi-threaded counter demo, race condition reproduction',rt:'hands-on'},
    {d:'2026-09-09',dsa:'GFG: LL — Add two numbers as LL',main:'📺 L43-44 · Bean Validations-1,2',mt:'spring',rot:'📺 Adv SQL S2: Subqueries overview, FROM subqueries, CTEs, Comparison subqueries',rt:'sql'},
    {d:'2026-09-10',aws:'☁️ S3 — Creating a static website with S3 (18m) · Object Versioning & MFA Delete (8m) · S3 Versioning (16m)',awsRef:['aws-s3-03','aws-s3-04','aws-s3-05'],dsa:'GFG: LL — Intersection of 2 LL, sort LL',main:'Java start()/run(), join, sleep, yield, interrupt',mt:'java',rot:'Hands-on: Custom @Constraint with Bean Validation API',rt:'hands-on'},
    {d:'2026-09-11',dsa:'GFG: LL Circular + Doubly intro',main:'📺 L45-46 · Bean Validations-3 + Event Handling',mt:'spring',rot:'📺 LLD S6 · LSP — Liskov Substitution Principle (31min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s6'},
    {d:'2026-09-12',aws:'☁️ S3 — S3 Performance Optimization (12m) · S3 Performance (5m) · Key Management Service (KMS) (19m)',awsRef:['aws-s3-06','aws-s3-07','aws-s3-08'],dsa:'GFG: Stack intro + Valid Parentheses + Reverse Stack',main:'Java synchronized: method/block/static, intrinsic lock',mt:'java',rot:'📺 Adv SQL S2: IN/NOT IN, ANY/ALL, EXISTS, Recursive CTEs + exercises',rt:'sql',cRef:'sql-adv-s2'},
    {d:'2026-09-13',dsa:'GFG: Stack — Next Greater Element (monotonic stack)',main:'📺 L47-48 · Custom Event Handling + Internationalization-1',mt:'spring',rot:'Hands-on: Publish + listen to custom events in app',rt:'hands-on'},
    {d:'2026-09-14',aws:'☁️ S3 — KMS - Encrypting the battleplans with KMS (13m) · S3 Object Encryption CSE/SSE (24m)',awsRef:['aws-s3-09','aws-s3-10'],dsa:'GFG: Stack — Stock Span, Largest Rectangle in Histogram',main:'Java volatile, visibility vs atomicity, happens-before',mt:'java',rot:'📺 Adv SQL S3: Window Functions — OVER, PARTITION BY, ordering, frames (41min) + practice',rt:'sql',cRef:'sql-adv-s3'},
  ]},
  {wn:6,phase:'Phase 2: Core Backend',title:'Spring L49-57 SpEL + Bean Wrappers + Profiling + DAO intro',days:[
    {d:'2026-09-15',dsa:'GFG: Stack — getMin O(1), 2 stacks problem',main:'📺 L49-50 · Internationalization-2 + Bean Manipulations & Wrappers-1',mt:'spring',rot:'Hands-on: i18n message bundles for app',rt:'hands-on'},
    {d:'2026-09-16',aws:'☁️ S3 — Object Encryption and Role Separation (15m) · S3 Bucket Keys (6m) · S3 Object Storage Classes - PART1 (9m) · S3 Object Storage Classes - PART2 (12m)',awsRef:['aws-s3-11','aws-s3-12','aws-s3-13','aws-s3-14'],dsa:'GFG: Queue intro + implementations (array/LL)',main:'Java wait/notify/notifyAll, monitor, spurious wakeups',mt:'java',rot:'📺 LLD S7 · ISP + DIP + Singleton + Chain of Responsibility (39min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s7'},
    {d:'2026-09-17',dsa:'GFG: Queue using stacks + Sliding Window Max (Deque)',main:'📺 L51-52 · Bean Wrappers-2 + Property Editors',mt:'spring',rot:'Hands-on: Custom PropertyEditor for date formatting',rt:'hands-on'},
    {d:'2026-09-18',aws:'☁️ S3 — S3 Lifecycle Configuration (8m) · S3 Replication (14m) · Cross-Region Replication of an S3 Static Website (20m)',awsRef:['aws-s3-15','aws-s3-16','aws-s3-17'],dsa:'GFG: Deque + LRU Cache (HashMap + DLL)',main:'📺 L53-54 · Profiling + SpEL-1',mt:'spring',rot:'Full week rev + self-mock 30min Q&A + plan',rt:'revision'},
    {d:'2026-09-19',dsa:'GFG: Tree intro + traversals (preorder/inorder/postorder)',main:'📺 L55-56 · SpEL-2,3',mt:'spring',rot:'📺 Adv SQL S4: Self/Cross/Full/USING/Natural joins (35min) + S5: UNION, INTERSECT, EXCEPT (20min)',rt:'sql',cRef:['sql-adv-s4','sql-adv-s5']},
    {d:'2026-09-20',aws:'☁️ S3 — S3 PreSigned URLs (11m) · Creating and using PresignedURLs (18m) · S3 Select and Glacier Select (6m) · S3 Events (5m) · S3 Access Logs (3m)',awsRef:['aws-s3-18','aws-s3-19','aws-s3-20','aws-s3-21','aws-s3-22'],dsa:'GFG: Tree — Level order (BFS), zigzag',main:'Java ExecutorService, Executors factory (fixed/cached/single/scheduled)',mt:'java',rot:'Hands-on: Submit 10 tasks to fixed pool of 3, observe queueing',rt:'hands-on'},
    {d:'2026-09-21',dsa:'GFG: Tree — Height, Diameter, recursion pattern',main:'📺 L57 · DAO Introduction',mt:'spring',rot:'📺 Adv SQL S6: Grouping Sets, CUBE, ROLLUP, multi-dimensional aggregations (33min) + exercises',rt:'sql',cRef:'sql-adv-s6'},
  ]},
  {wn:7,phase:'Phase 2: Core Backend',title:'Spring L60-67 DAO + JdbcTemplate + Tree + CompletableFuture',days:[
    {d:'2026-09-22',aws:'☁️ S3 — S3 Object Lock (10m) · S3 Access Points (6m) · Multi-Region Access Points (MRAP) (20m)',awsRef:['aws-s3-23','aws-s3-24','aws-s3-25'],dsa:'GFG: Tree — LCA (classic recursion)',main:'📺 L60 · Spring DAO Exceptions + Spring JDBC Intro',mt:'spring',rot:'📺 Adv SQL S7: Info schema, Comments, Constraints, Foreign keys (53min) + exercises',rt:'sql',cRef:'sql-adv-s7'},
    {d:'2026-09-23',dsa:'GFG: Tree — Boundary, Top/Bottom/Left/Right view',main:'Java Callable vs Runnable, Future, get() blocks',mt:'java',rot:'Hands-on: Trace JDBC driver loading, connection setup',rt:'hands-on'},
    {d:'2026-09-24',aws:'☁️ VPC Basics — VPC Sizing and Structure - PART1 (12m) · VPC Sizing and Structure - PART2 (11m) · Custom VPCs - PART1 - THEORY (10m) · Custom VPCs - PART2 - DEMO (6m)',awsRef:['aws-vpc-01','aws-vpc-02','aws-vpc-03','aws-vpc-04'],dsa:'GFG: Tree — Path Sum problems, max path sum',main:'📺 L61-62 · JdbcTemplate-1,2 (basic queries)',mt:'spring',rot:'📺 LLD S8 · Memento + Proxy + Flyweight (25min) + S9 · TDD + State + Strategy + Factory (28min) [InterviewReady]',rt:'sd',cRef:['sd-lld-s8','sd-lld-s9']},
    {d:'2026-09-25',dsa:'GFG: Tree — Symmetric, Same, Invert',main:'📺 L63-64 · JdbcTemplate-3,4 (RowMapper, BeanPropertyRowMapper)',mt:'spring',rot:'Full week rev + self-mock 45min + plan',rt:'revision'},
    {d:'2026-09-26',aws:'☁️ VPC Basics — VPC Subnets (11m) · Implement multi-tier VPC subnets (15m) · VPC Routing, Internet Gateway & Bastion Hosts (18m)',awsRef:['aws-vpc-05','aws-vpc-06','aws-vpc-07'],dsa:'GFG: BST — Insert, Search, Delete',main:'📺 L65 · Positional + Named Parameters',mt:'spring',rot:'📺 Adv SQL S8: Transactions — BEGIN/COMMIT/ROLLBACK, SAVEPOINT, DB locks (47min) + practice',rt:'sql',cRef:'sql-adv-s8'},
    {d:'2026-09-27',dsa:'GFG: BST — Validate BST (inorder + range)',main:'📺 L66-67 · NamedParameterJdbcTemplate-1,2',mt:'spring',rot:'Hands-on: Convert SQL repository to NamedParameterJdbcTemplate',rt:'hands-on'},
    {d:'2026-09-28',aws:'☁️ VPC Basics — Configuring A4L public subnets and Jumpbox - PART1 (14m) · Configuring A4L public subnets and Jumpbox - PART2 (12m) · Stateful vs Stateless Firewalls (14m)',awsRef:['aws-vpc-08','aws-vpc-09','aws-vpc-10'],dsa:'GFG: BST — Kth smallest, LCA in BST',main:'Java CompletableFuture deep: thenApply, thenCompose, thenCombine',mt:'java',rot:'📺 Adv SQL S9: Range + List partitioning + Table inheritance (start, ~45min)',rt:'sql'},
  ]},
  {wn:8,phase:'Phase 2: Core Backend',title:'Spring L73-81 Batch + StoredProc + BLOB + Heap',days:[
    {d:'2026-09-29',dsa:'GFG: Heap intro + PriorityQueue API + Build heap O(n)',main:'📺 L73-74 · Batch Updates-1,2',mt:'spring',rot:'📺 LLD S10 · Strategy Pattern — deep dive (42min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s10'},
    {d:'2026-09-30',aws:'☁️ VPC Basics — Network Access Control Lists (NACLs) (13m) · Security Groups (SG) (12m)',awsRef:['aws-vpc-11','aws-vpc-12'],dsa:'GFG: Heap — Kth Largest, Top K Frequent',main:'📺 L75-76 · Stored Procedures and Functions-1,2',mt:'spring',rot:'Hands-on: Batch insert 10k rows with batchUpdate',rt:'hands-on'},
    {d:'2026-10-01',dsa:'GFG: Heap — Median Data Stream (two heaps), Merge K sorted lists',main:'📺 L77-78 · Stored Procedures and Functions-3,4',mt:'spring',rot:'📺 LLD S11 · Command Pattern + PubSub (34min) [InterviewReady]',rt:'sd',cRef:'sd-lld-s11'},
    {d:'2026-10-02',aws:'☁️ VPC Basics — NAT & NAT Gateway - PART1 (14m) · NAT & NAT Gateway - PART2 (11m) · Implementing private internet access using NAT Gateways (19m)',awsRef:['aws-vpc-13','aws-vpc-14','aws-vpc-15'],dsa:'GFG: Heap — Task Scheduler, Sliding Window Median',main:'📺 L79 · BLOB and CLOB-1',mt:'spring',rot:'Full week rev + self-mock (URL Shortener whiteboard)',rt:'revision'},
    {d:'2026-10-03',dsa:'GFG: DSA Basics DONE! Start Libraries — Collection Overview',main:'📺 L80-81 · BLOB and CLOB-2,3',mt:'spring',rot:'📺 Adv SQL S9: Hash partitioning + partitioning exercises (finish S9)',rt:'sql',cRef:'sql-adv-s9'},
    {d:'2026-10-04',aws:'☁️ EC2 Basics — Virtualization 101 (12m) · EC2 Architecture and Resilience (13m) · EC2 Instance Types - PART1 (12m) · EC2 Instance Types - PART2 (8m)',awsRef:['aws-ec2-01','aws-ec2-02','aws-ec2-03','aws-ec2-04'],dsa:'GFG Libraries — Lambda Expressions deep',main:'Java Atomic classes (AtomicInteger, AtomicLong), CAS basics',mt:'java',rot:'Hands-on: Upload/download PDFs with BLOB',rt:'hands-on'},
    {d:'2026-10-05',dsa:'GFG Libraries — Streams intro (map, filter, forEach, reduce)',main:'Java BlockingQueue (ArrayBlocking, LinkedBlocking, etc.)',mt:'java',rot:'Hands-on: Producer-Consumer with BlockingQueue properly',rt:'hands-on'},
  ]},
  {wn:9,phase:'Phase 2: Core Backend',title:'Spring L82-85 Connection Pooling + JPA start + First apply!',days:[
    {d:'2026-10-06',aws:'☁️ EC2 Basics — EC2 SSH vs EC2 Instance Connect (17m) · Storage Refresher (14m) · Elastic Block Store (EBS) Service Architecture (9m)',awsRef:['aws-ec2-05','aws-ec2-06','aws-ec2-07'],dsa:'GFG Libraries — Streams Collectors deep (groupingBy, partitioningBy)',main:'📺 L82-83 · Connection Pooling-1,2 + 🆕 HikariCP modern config (Daily Code Buffer)',mt:'spring',rot:'⌨️ MC-S1 · Splitwise — machine coding walkthrough (53min) [InterviewReady]',rt:'sd',cRef:'sd-mc-s1'},
    {d:'2026-10-07',dsa:'GFG Libraries — ArrayList + LinkedList',main:'📺 L84-85 · Connection Pooling-3,4',mt:'spring',rot:'Hands-on: HikariCP tuning for Spring Boot app',rt:'hands-on'},
    {d:'2026-10-08',aws:'☁️ EC2 Basics — EBS Volume Types - General Purpose (9m) · EBS Volume Types - Provisioned IOPS (6m) · EBS Volume Types - HDD-Based (5m) · Instance Store Volumes - Architecture (9m) · Choosing between the EC2 Instance Store and EBS (9m)',awsRef:['aws-ec2-08','aws-ec2-09','aws-ec2-10','aws-ec2-11','aws-ec2-12'],dsa:'GFG Libraries — Stack + Queue (Java specific)',main:'🆕 Spring Data JPA intro (Telusko) — CrudRepository, JpaRepository',mt:'spring',rot:'📺 Adv SQL S10: Views — Creating, Updating, Materialized, Recursive views (1h 10min)',rt:'sql',cRef:'sql-adv-s10'},
    {d:'2026-10-09',dsa:'GFG Libraries — Deque + PriorityQueue deep',main:'🆕 Spring Data JPA: derived queries, @Query custom',mt:'spring',rot:'Full week rev + self-mock + APPLY TO FIRST 3 EASY COMPANIES',rt:'revision'},
    {d:'2026-10-10',aws:'☁️ EC2 Basics — Snapshots, Restore & Fast Snapshot Restore (FSR) (11m)',awsRef:['aws-ec2-13'],dsa:'GFG Libraries — HashSet + LinkedHashSet',main:'🆕 Spring Data JPA: Projections + Specifications',mt:'spring',rot:'📺 Adv SQL S11: PL/pgSQL functions (36min) + S12: Stored Procedures (31min)',rt:'sql',cRef:['sql-adv-s11','sql-adv-s12']},
    {d:'2026-10-11',dsa:'GFG Libraries — TreeSet, NavigableSet methods',main:'🆕 N+1 problem deep (Vlad Mihalcea) + JOIN FETCH',mt:'spring',rot:'Hands-on: Reproduce N+1, fix with JOIN FETCH, verify SQL count',rt:'hands-on'},
    {d:'2026-10-12',aws:'☁️ EC2 Basics — EBS Volumes - PART1 (15m) · EBS Volumes - PART2 (14m) · EBS Volumes - PART3 (14m)',awsRef:['aws-ec2-14','aws-ec2-15','aws-ec2-16'],dsa:'GFG Libraries — HashMap + LinkedHashMap deep',main:'🆕 @EntityGraph + Fetch types (LAZY/EAGER) deep',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt1 — LRU design + start [InterviewReady]',rt:'sd'},
  ]},
  {wn:10,phase:'Phase 2: Core Backend',title:'Spring L91-99 AOP + JPA Cascading + Microservices intro',days:[
    {d:'2026-10-13',dsa:'GFG Libraries — TreeMap, NavigableMap',main:'📺 L91-92 · AOP Introduction + Terminology',mt:'spring',rot:'⌨️ MC-S2 · In-Memory Cache pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s2'},
    {d:'2026-10-14',aws:'☁️ EC2 Basics — EBS Encryption (8m) · Network Interfaces, Instance IPs and DNS (16m)',awsRef:['aws-ec2-17','aws-ec2-18'],dsa:'GFG Libraries — String class (Java methods deep)',main:'📺 L93 · Advices + 🆕 Cascading + dirty checking (Thorben Janssen)',mt:'spring',rot:'Hands-on: Cascading test — orphan removal scenarios',rt:'hands-on'},
    {d:'2026-10-15',dsa:'GFG Libraries — Comparator & Comparable',main:'📺 L94-95 · Pointcuts + MethodBeforeAdvice-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt1 — design + start [InterviewReady]',rt:'sd'},
    {d:'2026-10-16',aws:'☁️ EC2 Basics — Manual Install of Wordpress on EC2 - PART1 (12m) · Manual Install of Wordpress on EC2 - PART2 (13m) · Amazon Machine Images (AMI) (14m)',awsRef:['aws-ec2-19','aws-ec2-20','aws-ec2-21'],dsa:'GFG Libraries — Arrays Class + Collections class',main:'📺 L96-97 · MethodBeforeAdvice-2 + AfterAdvice',mt:'spring',rot:'Full week rev + self-mock (E-commerce design) + @Aspect logging interceptor',rt:'revision'},
    {d:'2026-10-17',dsa:'GFG Libraries — Sorting (Java, custom comparators)',main:'📺 L98-99 · ThrowsAdvice + AroundAdvice',mt:'spring',rot:'📺 Adv SQL S13: Triggers — create, trigger functions, before/after, enable/disable (39min)',rt:'sql',cRef:'sql-adv-s13'},
    {d:'2026-10-18',aws:'☁️ EC2 Basics — Creating an Animals4life AMI - PART1 (10m) · Creating an Animals4life AMI - PART2 (11m) · Copying & Sharing an AMI (9m)',awsRef:['aws-ec2-22','aws-ec2-23','aws-ec2-24'],dsa:'GFG: Libraries DONE! Start DSA Advanced — Mathematics intro',main:'Java Generics deep: type erasure, why new T[] fails, PECS examples',mt:'java',rot:'Hands-on: Build @Around aspect for method timing',rt:'hands-on'},
    {d:'2026-10-19',dsa:'GFG Advanced — Bit Magic essentials (XOR tricks, single number)',main:'🆕 Optimistic vs Pessimistic locking (@Version, @Lock)',mt:'spring',rot:'📺 Adv SQL S14: EXPLAIN, EXPLAIN ANALYZE, TRUNCATE, COPY (start, ~40min)',rt:'sql'},
  ]},
  {wn:11,phase:'Phase 2: Core Backend',title:'Spring L100-107 AspectJ + Transactions + Microservices basics',days:[
    {d:'2026-10-20',aws:'☁️ EC2 Basics — EC2 Purchase Options - PART1 (9m) · EC2 Purchase Options - PART2 (12m) · Reserved Instances - the rest (12m) · Instance Status Checks & Auto Recovery (8m) · Shutdown, Terminate & Termination Protection (6m)',awsRef:['aws-ec2-25','aws-ec2-26','aws-ec2-27','aws-ec2-28','aws-ec2-29'],dsa:'GFG Adv: Arrays — sliding window patterns',main:'📺 L100-101 · AspectJ Style AOP + Declarative-1',mt:'spring',rot:'⌨️ MC-S3 · Event Bus pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s3'},
    {d:'2026-10-21',dsa:'GFG Adv: Arrays — prefix sum advanced + difference arrays',main:'📺 L102-103 · Declarative-2 + AspectJ Annotation Style-1',mt:'spring',rot:'Hands-on: @Aspect + @Pointcut expressions practice',rt:'hands-on'},
    {d:'2026-10-22',aws:'☁️ EC2 Basics + Containers & ECS — Horizontal & Vertical Scaling (11m) · Instance Metadata (16m) · Introduction to Containers (17m)',awsRef:['aws-ec2-30','aws-ec2-31','aws-ecs-01'],dsa:'GFG Adv: Searching — binary search on answer (deep)',main:'📺 L104-105 · AspectJ Annotation-2 + Transactions Intro',mt:'spring',rot:'Hands-on: @Transactional on service layer, observe rollback',rt:'hands-on'},
    {d:'2026-10-23',dsa:'GFG Adv: Sorting — count inversions, merge sort variations',main:'📺 L106-107 · ACID + Isolation + Transaction Support in Spring',mt:'spring',rot:'Full week rev + self-mock (Payment Service design)',rt:'revision'},
    {d:'2026-10-24',aws:'☁️ Containers & ECS — Creating container of cats Docker Image (18m) · ECS - Concepts (10m) · ECS - Cluster Mode (13m)',awsRef:['aws-ecs-02','aws-ecs-03','aws-ecs-04'],dsa:'GFG Adv: Strings — KMP intro, pattern matching',main:'🆕 Microservices vs Monolith intro (in28minutes)',mt:'spring',rot:'📺 Adv SQL S14: Arrays, JSON/JSONB, Extensions + exercises (finish S14)',rt:'sql',cRef:'sql-adv-s14'},
    {d:'2026-10-25',dsa:'GFG Adv: Strings — anagram patterns, palindromes',main:'Java Part C start: JVM architecture: classloaders, runtime data areas',mt:'java',rot:'Hands-on: Split monolith into User + Order Service',rt:'hands-on'},
    {d:'2026-10-26',aws:'☁️ Containers & ECS + Advanced EC2 — Deploying container of cats using Fargate (13m) · Elastic Container Registry (ECR) (4m) · Kubernetes 101 (11m) · Elastic Kubernetes Service (EKS) 101 (6m) · Bootstrapping EC2 using User Data (10m)',awsRef:['aws-ecs-05','aws-ecs-06','aws-ecs-07','aws-ecs-08','aws-ec2adv-01'],dsa:'GFG Adv: Strings — Longest Palindromic Substring',main:'🆕 Service Discovery (Eureka concept)',mt:'spring',rot:'SQL interview prep: CTEs + Window Functions mock questions (practice-only)',rt:'sql',cRef:'sql-prep-1'},
  ]},
  {wn:12,phase:'Phase 2: Core Backend',title:'Spring L108-119 Tx mgmt + Hibernate/JPA + Phase 2 wrap',days:[
    {d:'2026-10-27',dsa:'GFG Adv: LL — Reverse in K groups, flatten LL',main:'📺 L108-109 · Programmatic Transaction Management-1,2',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt1 — token bucket + sliding window design [InterviewReady]',rt:'sd'},
    {d:'2026-10-28',aws:'☁️ Advanced EC2 — Bootstrapping Wordpress Installation - PART1 (15m) · Bootstrapping Wordpress Installation - PART2 (7m) · Enhanced Bootstrapping with CFN-INIT (12m) · CFN-INIT and CFN Creation Policies (12m)',awsRef:['aws-ec2adv-02','aws-ec2adv-03','aws-ec2adv-04','aws-ec2adv-05'],dsa:'GFG Adv: LL — clone with random pointer, LRU deep',main:'📺 L110-111 · Declarative Tx with XML + Annotations',mt:'spring',rot:'Hands-on: @Transactional on multiple service methods',rt:'hands-on'},
    {d:'2026-10-29',dsa:'GFG Adv: Stack — monotonic stack patterns deep',main:'🆕 @Transactional propagation deep (REQUIRES_NEW, NESTED, MANDATORY)',mt:'spring',rot:'⌨️ MC-S4 · Rate Limiter pt2 — complete + review [InterviewReady]',rt:'sd',cRef:'sd-mc-s4'},
    {d:'2026-10-30',aws:'☁️ Advanced EC2 — EC2 Instance Roles & Profile (4m) · Using EC2 Instance Roles (14m) · SSM Parameter Store (6m) · Parameter Store (16m) · System and Application Logging on EC2 (6m)',awsRef:['aws-ec2adv-06','aws-ec2adv-07','aws-ec2adv-08','aws-ec2adv-09','aws-ec2adv-10'],dsa:'GFG Adv: Stack — expression evaluation, infix-postfix',main:'📺 L112-113 · Hibernate Intro + Application',mt:'spring',rot:'Full week rev + self-mock (Food Delivery design)',rt:'revision'},
    {d:'2026-10-31',dsa:'GFG Adv: Queue & Deque — sliding window deep',main:'📺 L114-115 · Spring-Hibernate Integration-1,2',mt:'spring',rot:'SQL interview prep: EXPLAIN ANALYZE + query optimization + index problems',rt:'sql',cRef:'sql-prep-2'},
    {d:'2026-11-01',aws:'☁️ Advanced EC2 — Logging and Metrics with CloudWatch Agent-PART1 (12m) · Logging and Metrics with CloudWatch Agent-PART2 (8m) · EC2 Placement Groups (14m) · Dedicated Hosts (9m)',awsRef:['aws-ec2adv-11','aws-ec2adv-12','aws-ec2adv-13','aws-ec2adv-14'],dsa:'GFG Adv: Queue — implement using arrays, design problems',main:'📺 L116-117 · Spring-Hibernate Integration-3 + JPA Intro',mt:'spring',rot:'Hands-on: Migrate Hibernate config to Spring Data JPA',rt:'hands-on'},
    {d:'2026-11-02',dsa:'GFG Adv: Tree advanced — Construct from preorder/inorder',main:'📺 L118-119 · JPA Application + Spring-JPA Integration',mt:'spring',rot:'SQL interview prep: Transactions + ACID isolation levels + partitioning problems',rt:'sql',cRef:'sql-prep-3'},
  ]},
  {wn:13,phase:'Phase 3: Distributed',title:'Spring L120-130 MVC + Docker + JVM Diagnostics',days:[
    {d:'2026-11-03',aws:'☁️ Advanced EC2 + Route 53 — Enhanced Networking & EBS Optimized (7m) · R53 Public Hosted Zones (6m) · R53 Private Hosted Zones (5m) · CNAME vs R53 Alias (5m) · Simple Routing (2m) · R53 Health Checks (13m) · Failover Routing (2m)',awsRef:['aws-ec2adv-15','aws-r53-01','aws-r53-02','aws-r53-03','aws-r53-04','aws-r53-05','aws-r53-06'],dsa:'GFG Adv: Tree — Construct from inorder+postorder, serialize/deserialize',main:'📺 L120-121 · Spring Web MVC Introduction-1,2',mt:'spring',rot:'Cloud start: Docker basics: container vs VM, Dockerfile',rt:'cloud'},
    {d:'2026-11-04',dsa:'GFG Adv: Tree — Vertical order, all paths',main:'📺 L122-123 · MVC Elements + Flow + DispatcherServlet',mt:'spring',rot:'Hands-on: Dockerfile for Spring Boot, multi-stage build',rt:'hands-on'},
    {d:'2026-11-05',aws:'☁️ Route 53 — Using R53 and Failover Routing-PART1 (17m) · Using R53 and Failover Routing-PART2 (6m) · Multi Value Routing (3m) · Weighted Routing (3m) · Latency Routing (3m) · Geolocation Routing (5m) · Geoproximity (5m)',awsRef:['aws-r53-07','aws-r53-08','aws-r53-09','aws-r53-10','aws-r53-11','aws-r53-12','aws-r53-13'],dsa:'GFG Adv: Tree — Burning tree, time to burn from target',main:'📺 L124-125 · HandlerMapping + Controller + ViewResolver basics',mt:'spring',rot:'Cloud Docker Compose: services, volumes, networks',rt:'cloud'},
    {d:'2026-11-06',dsa:'GFG Adv: BST — Inorder successor/predecessor, fix swapped',main:'📺 L126-127 · Spring MVC Application + Internal Flow-1',mt:'spring',rot:'Full week rev + self-mock + JVM diagnostics: thread dump (jstack)',rt:'revision'},
    {d:'2026-11-07',aws:'☁️ Route 53 — R53 Interoperability (12m) · Implementing DNSSEC using Route53 (18m)',awsRef:['aws-r53-14','aws-r53-15'],dsa:'GFG Adv: BST — Convert sorted array to BST, merge 2 BSTs',main:'Java Heap dump analysis (jmap, MAT), memory leaks',mt:'java',rot:'Hands-on: Compose for app + Postgres + Redis + Kafka',rt:'hands-on'},
    {d:'2026-11-08',dsa:'GFG Adv: Heap advanced — design problems with heap',main:'📺 L128-129 · MVC Application-2,3 + Login Application (annotations focus)',mt:'spring',rot:'Cloud K8s intro: Pods, ReplicaSets, Deployments, Services',rt:'cloud'},
    {d:'2026-11-09',aws:'☁️ RDS & Aurora — Database Refresher & MODELS - PART1 (9m) · Database Refresher & MODELS - PART2 (15m) · ACID vs BASE (11m)',awsRef:['aws-rds-01','aws-rds-02','aws-rds-03'],dsa:'GFG Adv: Heap — Sliding window median (deep), median stream',main:'📺 L130 · @SessionAttribute + @RequestParam + 🆕 REST intro (Daily Code Buffer)',mt:'spring',rot:'SQL final mock: end-to-end challenge (JOIN + CTE + Window Function + EXPLAIN)',rt:'sql',cRef:'sql-prep-4'},
  ]},
  {wn:14,phase:'Phase 3: Distributed',title:'Spring L147-155 Handler Mapping + ViewResolver + LLD + Modern Java',days:[
    {d:'2026-11-10',dsa:'GFG Adv: Graph intro + representations + BFS',main:'📺 L147-148 · BeanNameUrlHandlerMapping + SimpleUrlHandlerMapping',mt:'spring',rot:'⌨️ InterviewReady LLD Test + Full Review Session',rt:'sd',cRef:'sd-mc-test'},
    {d:'2026-11-11',aws:'☁️ RDS & Aurora — Databases on EC2 (13m) · Splitting Wordpress Monolith => APP & DB (18m) · Relational Database Service (RDS) Architecture (12m)',awsRef:['aws-rds-04','aws-rds-05','aws-rds-06'],dsa:'GFG Adv: Graph — DFS (recursive + iterative)',main:'📺 L149-150 · DefaultAnnotationHandlerMapping + HandlerInterceptor-1',mt:'spring',rot:'Cloud K8s: ConfigMaps, Secrets, namespaces, RBAC',rt:'cloud'},
    {d:'2026-11-12',dsa:'GFG Adv: Graph — Connected components (islands variants)',main:'📺 L151-152 · HandlerInterceptor-2 + View Resolvers (URLBased, InternalResource)',mt:'spring',rot:'Hands-on: Deploy Spring Boot to Minikube/Kind, kubectl basics',rt:'hands-on'},
    {d:'2026-11-13',aws:'☁️ RDS & Aurora — Migrating EC2 DB into RDS - PART1 (18m) · Migrating EC2 DB into RDS - PART2 (13m) · RDS MultiAZ - Instance and Cluster (12m)',awsRef:['aws-rds-07','aws-rds-08','aws-rds-09'],dsa:'GFG Adv: Graph — Cycle detection',main:'📺 L153-154 · XMLViewResolver + Exception Handling (@ControllerAdvice)',mt:'spring',rot:'Full week rev + first external mock (Pramp/friend, 1hr Java)',rt:'mock'},
    {d:'2026-11-14',dsa:'GFG Adv: Graph — Bipartite check',main:'📺 L155 + 🆕 RFC 7807 + Global error handling supplement',mt:'spring',rot:'SD: News Feed / Timeline — fanout strategies',rt:'sd',cRef:'sd-hld-news-feed'},
    {d:'2026-11-15',aws:'☁️ RDS & Aurora — RDS Automatic Backup, RDS Snapshots and Restore (9m) · RDS Read-Replicas (7m) · MultiAZ & Snapshot Restore with RDS - PART1 (14m) · MultiAZ & Snapshot Restore with RDS - PART2 (12m)',awsRef:['aws-rds-10','aws-rds-11','aws-rds-12','aws-rds-13'],dsa:'GFG Adv: Graph — Topological Sort (Kahn\'s + DFS)',main:'Java Java 14-17: switch expressions, text blocks, records',mt:'java',rot:'Hands-on: Liveness/Readiness probes in K8s deployment',rt:'hands-on'},
    {d:'2026-11-16',dsa:'GFG Adv: Graph — Course Schedule (topo sort applied)',main:'🆕 DTOs vs Entities + MapStruct (Amigoscode)',mt:'spring',rot:'Cloud K8s: Service types + HPA',rt:'cloud'},
  ]},
  {wn:15,phase:'Phase 3: Distributed',title:'Spring L156-175 File handling + Security + Virtual Threads ⭐',days:[
    {d:'2026-11-17',aws:'☁️ RDS & Aurora — RDS Data Security (7m) · RDS Custom (5m) · Aurora Architecture (14m) · Aurora Serverless (10m) · Aurora Global Database (5m)',awsRef:['aws-rds-14','aws-rds-15','aws-rds-16','aws-rds-17','aws-rds-18'],dsa:'GFG Adv: Graph — Dijkstra (PQ-based shortest path)',main:'📺 L156-157 · File Uploading + File Downloading',mt:'spring',rot:'SD: Distributed Cache / Key-Value Store — consistent hashing',rt:'sd'},
    {d:'2026-11-18',dsa:'GFG Adv: Graph — Bellman-Ford',main:'📺 L158 · Internationalization-1 + 🆕 CORS configuration',mt:'spring',rot:'Cloud AWS: EC2, S3, RDS, ELB, CloudWatch, IAM',rt:'cloud'},
    {d:'2026-11-19',aws:'☁️ RDS & Aurora + EFS & Backup — Multi-master writes (8m) · RDS Proxy (10m) · Database Migration Service (DMS) (11m) · EFS Architecture (9m)',awsRef:['aws-rds-19','aws-rds-20','aws-rds-21','aws-efs-01'],dsa:'GFG Adv: Graph — Floyd-Warshall (all-pairs)',main:'📺 L171-172 · Web Security Introduction + Authentication Mechanisms-1',mt:'spring',rot:'Hands-on: Enable virtual threads (🌟 supplement Dan Vega), benchmark',rt:'hands-on'},
    {d:'2026-11-20',dsa:'GFG Adv: Graph — Word Ladder, Islands variations',main:'📺 L173-174 · Authentication Mechanisms-2,3',mt:'spring',rot:'Full week rev + 2nd external mock (Spring focus, 1hr)',rt:'mock'},
    {d:'2026-11-22',dsa:'GFG Adv: Graph — Course Schedule II, Alien Dictionary',main:'📺 L175 · Spring Security Models + 🆕 Spring Security 6 architecture (Daily Code Buffer)',mt:'spring',rot:'SD HLD: URL Shortener full walkthrough — hashing, DB, cache, scale',rt:'sd',cRef:'sd-hld-url-shortener'},
    {d:'2026-11-23',aws:'☁️ EFS & Backup — Implementing EFS - PART1 (9m) · Implementing EFS - PART2 (12m) · Using EFS with Wordpress (16m) · AWS Backup (7m)',awsRef:['aws-efs-02','aws-efs-03','aws-efs-04','aws-efs-05'],dsa:'GFG Adv: Graph — Clone Graph (DFS/BFS with HashMap)',main:'🆕 JWT auth filter implementation (Bouali Ali)',mt:'spring',rot:'Cloud AWS: SQS, ECS, EKS, Fargate, ECR + CI/CD',rt:'cloud'},
    {d:'2026-11-24',dsa:'GFG Adv: Graph — Network Delay Time, Min cost path',main:'🆕 JWT continued — OncePerRequestFilter, token extraction',mt:'spring',rot:'SD HLD: Rate Limiter full walkthrough — token bucket, sliding window',rt:'sd',cRef:'sd-hld-rate-limiter'},
  ]},
  {wn:16,phase:'Phase 3: Distributed',title:'Spring L176-180 Maven + Security finish + DP + Virtual Threads',days:[
    {d:'2026-11-25',aws:'☁️ HA & Scaling — Regional and Global AWS Architecture (11m) · Evolution of the Elastic Load Balancer (4m) · Elastic Load Balancer Architecture - PART1 (10m) · Elastic Load Balancer Architecture - PART2 (13m)',awsRef:['aws-ha-01','aws-ha-02','aws-ha-03','aws-ha-04'],dsa:'GFG Adv: DP intro — Fibonacci memoization, climbing stairs',main:'🆕 Method-level security (@PreAuthorize, @PostAuthorize, SpEL)',mt:'spring',rot:'SD HLD: Notification Service (queue-based, retry, DLQ)',rt:'sd',cRef:'sd-hld-notification'},
    {d:'2026-11-26',dsa:'GFG Adv: DP — House Robber I & II (linear DP)',main:'📺 L176-177 · Maven Introduction + POM-1',mt:'spring',rot:'Cloud GitHub Actions / Jenkins CI/CD pipeline',rt:'cloud'},
    {d:'2026-11-27',aws:'☁️ HA & Scaling — ALB vs NLB (16m) · Launch Configuration and Templates (4m) · Auto-Scaling Groups (16m)',awsRef:['aws-ha-05','aws-ha-06','aws-ha-07'],dsa:'GFG Adv: DP — Coin Change',main:'📺 L178-179 · POM-2 + POM-3 (Dependency mgmt + scope + inheritance)',mt:'spring',rot:'Hands-on: CI/CD pipeline draft (build → test → docker push)',rt:'hands-on'},
    {d:'2026-11-28',dsa:'GFG Adv: DP — LIS (O(n²) + O(n log n))',main:'📺 L180 · POM-4 (Build Configurations + Profiles)',mt:'spring',rot:'Full week rev + 3rd external mock (SD + LLD, 90min)',rt:'mock'},
    {d:'2026-11-29',aws:'☁️ HA & Scaling — ASG Scaling Policies (10m) · ASG Lifecycle Hooks (5m) · ASG HealthCheck Comparison - EC2 vs ELB (4m) · SSL Offload & Session Stickiness (12m) · Seeing Session Stickiness in Action (13m)',awsRef:['aws-ha-08','aws-ha-09','aws-ha-10','aws-ha-11','aws-ha-12'],dsa:'GFG Adv: DP — LCS (2D DP), edit distance',main:'🆕 OAuth2 awareness (Daily Code Buffer)',mt:'spring',rot:'SD: Distributed locks (Redis/ZooKeeper)',rt:'sd',cRef:'sd-hld-distributed-locks'},
    {d:'2026-11-30',dsa:'GFG Adv: DP — 0/1 Knapsack + space optimization',main:'🌟 Virtual Threads (Java 21 / Project Loom) intro',mt:'java',rot:'Hands-on: Distributed tracing in microservices (Sleuth/OpenTelemetry)',rt:'hands-on'},
    {d:'2026-12-01',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE1 - PART1 (14m) · Architecture Evolution - STAGE1 - PART2 (11m) · Architecture Evolution - STAGE2 (13m)',awsRef:['aws-ha-13','aws-ha-14','aws-ha-15'],dsa:'GFG Adv: DP — Subset Sum, Partition Equal Subset',main:'🌟 Spring Boot 3.2 virtual threads integration (spring.threads.virtual.enabled)',mt:'spring',rot:'Behavioral start: Draft first 4 STAR stories',rt:'behavioral'},
  ]},
  {wn:17,phase:'Phase 3: Distributed',title:'Spring L187-193 Boot + Full-loop sims',days:[
    {d:'2026-12-02',dsa:'GFG Adv: DP — Unique Paths I/II, Min Path Sum',main:'📺 L187-188 · Spring Boot Introduction + Features',mt:'spring',rot:'STAR story #5-6 (production incident, leadership)',rt:'behavioral'},
    {d:'2026-12-03',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE3 (20m) · Architecture Evolution - STAGE4 (18m)',awsRef:['aws-ha-16','aws-ha-17'],dsa:'GFG Adv: DP — Max Product Subarray, Buy/Sell cooldown',main:'📺 L189 + L191 · Boot with Eclipse + Initializr (skip L190 STS)',mt:'spring',rot:'Hands-on: CRaC awareness reading',rt:'hands-on'},
    {d:'2026-12-04',dsa:'GFG Adv: DP — Longest Palindromic Subseq',main:'📺 L192-193 · Postman + User Forms Application',mt:'spring',rot:'Full-loop simulation #1 (3hr) — Java + Spring + 1 SD + 5 DSA',rt:'mock'},
    {d:'2026-12-05',aws:'☁️ HA & Scaling — Architecture Evolution - STAGE 5 - PART1 (12m) · Architecture Evolution - STAGE 5 - PART2 (15m) · Architecture Evolution - STAGE6 (6m) · Gateway Load Balancer (14m)',awsRef:['aws-ha-18','aws-ha-19','aws-ha-20','aws-ha-21'],dsa:'GFG Adv: DP final — Word Break, mixed DP problems',main:'🆕 @SpringBootApplication deep + Auto-config flow (in28minutes)',mt:'spring',rot:'Full week rev + STAR story #7-8 + plan',rt:'revision'},
    {d:'2026-12-06',dsa:'GFG Adv: Greedy intro — Activity Selection, fractional knapsack',main:'🆕 Custom Auto-Configuration + @ConditionalOnXxx (Baeldung)',mt:'spring',rot:'Full week revision + weak-area list + plan next week',rt:'revision'},
    {d:'2026-12-07',aws:'☁️ Serverless & App — Architecture Deep Dive - PART1 (9m) · Architecture Deep Dive - PART2 (13m)',awsRef:['aws-srvls-01','aws-srvls-02'],dsa:'GFG Adv: Greedy — Job Sequencing, N meetings',main:'🆕 application.properties vs yml + Profiles + @ConfigurationProperties deep',mt:'spring',rot:'Hands-on: Final mocks scheduling, weak areas list',rt:'hands-on'},
    {d:'2026-12-08',dsa:'GFG Adv: Greedy — Huffman intro, minimum platforms',main:'🆕 Custom Spring Boot Starter (Daily Code Buffer)',mt:'spring',rot:'STAR story #9-10 + per-company prep doc (Walmart, PayPal)',rt:'behavioral'},
  ]},
  {wn:18,phase:'Phase 3: Distributed',title:'Spring L194-200 Boot+JDBC + Backtracking + Mocks',days:[
    {d:'2026-12-09',aws:'☁️ Serverless & App — AWS Lambda - PART1 (11m) · AWS Lambda - PART2 (14m) · AWS Lambda - PART3 (17m)',awsRef:['aws-srvls-03','aws-srvls-04','aws-srvls-05'],dsa:'GFG Adv: Greedy — Min coins, Gas Station, Jump Game',main:'📺 L194-195 · Spring Boot with Spring JDBC-1,2',mt:'spring',rot:'Mock 4 (External, 90min, Java + Spring deep)',rt:'mock'},
    {d:'2026-12-10',dsa:'GFG Adv: Backtracking — N-Queens (revisit), Sudoku Solver',main:'📺 L196-197 · Spring Boot with Spring JDBC-3,4',mt:'spring',rot:'SD: Distributed messaging system (Kafka deep design)',rt:'sd',cRef:'sd-hld-messaging'},
    {d:'2026-12-11',aws:'☁️ Serverless & App — CloudWatchEvents and EventBridge (7m) · Automated EC2 Control using Lambda and Events - PART1 (14m) · Automated EC2 Control using Lambda and Events - PART2 (19m)',awsRef:['aws-srvls-06','aws-srvls-07','aws-srvls-08'],dsa:'GFG Adv: Backtracking — Combination Sum, Permutations',main:'📺 L198-199 · Spring Data JDBC-1,2',mt:'spring',rot:'Hands-on: 20 unit tests for service layer with Mockito',rt:'hands-on'},
    {d:'2026-12-12',dsa:'GFG Adv: Backtracking — Word Search, Palindrome Partitioning',main:'📺 L200 + 🆕 Spring Boot Actuator deep (Daily Code Buffer)',mt:'spring',rot:'Full week rev + Mock 5 (Behavioral, 60min)',rt:'mock'},
    {d:'2026-12-13',aws:'☁️ Serverless & App — Serverless Architecture (13m) · Simple Notification Service (8m) · Step Functions (16m)',awsRef:['aws-srvls-09','aws-srvls-10','aws-srvls-11'],dsa:'GFG Adv: Mathematics — GCD, sieve of Eratosthenes',main:'🆕 Micrometer + Prometheus + Grafana setup (Tanzu)',mt:'spring',rot:'SD: Real-time chat app (presence + history + WebSocket)',rt:'sd',cRef:'sd-hld-chat'},
    {d:'2026-12-14',dsa:'GFG Adv: Bit Magic — count set bits, single number variants',main:'🆕 @Async + @Scheduled (TaskExecutor config)',mt:'spring',rot:'Hands-on: Build basic WebSocket chat endpoint',rt:'hands-on'},
    {d:'2026-12-15',aws:'☁️ Serverless & App — API Gateway 101 (16m) · Pet-Cuddle-o-Tron - PART1 (5m) · Pet-Cuddle-o-Tron - PART2 (8m) · Pet-Cuddle-o-Tron - PART3 (12m)',awsRef:['aws-srvls-12','aws-srvls-13','aws-srvls-14','aws-srvls-15'],dsa:'GFG Adv: Trie intro — insert, search, prefix match',main:'🆕 Microservices: API Gateway (Spring Cloud Gateway)',mt:'spring',rot:'Mock 6 (Tech + LLD, 90min)',rt:'mock'},
  ]},
  {wn:19,phase:'Phase 3: Distributed',title:'Spring Microservices deep + Trie + Disjoint Set + Interviews',days:[
    {d:'2026-12-16',dsa:'GFG Adv: Trie — autocomplete system, search suggestions',main:'🆕 Inter-service communication: RestTemplate vs WebClient vs OpenFeign',mt:'spring',rot:'Real interview (per opportunity schedule)',rt:'mock'},
    {d:'2026-12-17',aws:'☁️ Serverless & App — Pet-Cuddle-o-Tron - PART4 (13m) · Pet-Cuddle-o-Tron - PART5 (14m) · Pet-Cuddle-o-Tron - PART6 (3m) · Simple Queue Service (16m)',awsRef:['aws-srvls-16','aws-srvls-17','aws-srvls-18','aws-srvls-19'],dsa:'GFG Adv: Trie — Word Search II, longest word',main:'🆕 OpenFeign declarative clients (Daily Code Buffer)',mt:'spring',rot:'SD: Search autocomplete (Trie + caching)',rt:'sd',cRef:'sd-hld-autocomplete'},
    {d:'2026-12-18',dsa:'GFG Adv: Disjoint Set — Union-Find, path compression',main:'🆕 Resilience4j: Circuit Breaker + Retry + Bulkhead + Timeout',mt:'spring',rot:'Hands-on: Saga for Order → Payment → Inventory',rt:'hands-on'},
    {d:'2026-12-19',aws:'☁️ Serverless & App — SQS Standard vs FIFO Queues (3m) · SQS Delay Queues (5m) · SQS Dead-Letter Queues (4m) · Kinesis Data Streams (8m) · Kinesis Data Firehose (9m) · Kinesis Data Analytics (9m) · Kinesis Video Streams (5m)',awsRef:['aws-srvls-20','aws-srvls-21','aws-srvls-22','aws-srvls-23','aws-srvls-24','aws-srvls-25','aws-srvls-26'],dsa:'GFG Adv: Disjoint Set — provinces, redundant connection',main:'🆕 Resilience4j continued + Spring Cloud Config',mt:'spring',rot:'Full week rev + Mock 7 (Full loop, 3hr)',rt:'mock'},
    {d:'2026-12-20',dsa:'GFG Adv: Disjoint Set DONE — DSA Advanced 90% complete!',main:'🆕 Kafka basics + Spring Kafka Producer',mt:'spring',rot:'SD: Stock exchange / trading system (LLD + HLD hybrid)',rt:'sd',cRef:'sd-hld-stock'},
    {d:'2026-12-21',aws:'☁️ Serverless & App — Amazon Cognito - User and Identity Pools (15m) · AWS Glue 101 (6m) · Amazon MQ 101 (8m) · Amazon AppFlow (4m)',awsRef:['aws-srvls-27','aws-srvls-28','aws-srvls-29','aws-srvls-30'],dsa:'GFG: Mixed Hard problems revision (top 10 across DSA Adv)',main:'🆕 Spring Kafka Consumer + manual offset commit',mt:'spring',rot:'Real interview cycle continues',rt:'mock'},
    {d:'2026-12-22',dsa:'GFG: Mixed graph + DP problems (5 each)',main:'🆕 Kafka Error Handling + DLQ + retry topics',mt:'spring',rot:'Hands-on: TestContainers integration tests',rt:'hands-on'},
  ]},
  {wn:20,phase:'Phase 3: Distributed',title:'Spring 2026 Modern + Comprehensive Mocks',days:[
    {d:'2026-12-23',aws:'☁️ CloudFront & CDN — Cloudfront Architecture (15m) · CloudFront (CF) - Behaviours (9m) · CloudFront - TTL and Invalidations (14m)',awsRef:['aws-cdn-01','aws-cdn-02','aws-cdn-03'],dsa:'DSA revision: Top 20 problems across all topics (timed)',main:'🆕 Spring Cache abstraction + Redis basics',mt:'spring',rot:'Mock 8 (External, System Design, 90min)',rt:'mock'},
    {d:'2026-12-24',dsa:'DSA revision: Top 10 graph + top 10 DP',main:'🆕 RedisTemplate + Cache patterns deep',mt:'spring',rot:'SD: News feed deep redesign',rt:'sd',cRef:'sd-hld-news-feed-deep'},
    {d:'2026-12-25',aws:'☁️ CloudFront & CDN — ACM (11m) · Cloudfront and SSL/TLS (15m) · CloudFront - Origin Types & Origin Architecture (10m)',awsRef:['aws-cdn-04','aws-cdn-05','aws-cdn-06'],dsa:'DSA revision: Linked List + Tree patterns mix',main:'🆕 Spring Boot Testing: @SpringBootTest + MockMvc (Philip Riecks)',mt:'spring',rot:'Hands-on: Stress test microservices with concurrent requests',rt:'hands-on'},
    {d:'2026-12-26',dsa:'DSA revision: Hard problems from earlier weeks',main:'🆕 Slice tests (@WebMvcTest, @DataJpaTest) + TestContainers',mt:'spring',rot:'Full week rev + Mock 9 (Full loop + Behavioral, 3hr)',rt:'mock'},
    {d:'2026-12-27',aws:'☁️ CloudFront & CDN — Adding a CDN to a static Website-PART1 (16m) · Adding a CDN to a static Website-PART2 (12m) · Adding an Alternate CNAME and SSL (11m)',awsRef:['aws-cdn-07','aws-cdn-08','aws-cdn-09'],dsa:'DSA revision: Patterns review',main:'🌟 Spring Modulith (Oliver Drotbohm)',mt:'spring',rot:'Behavioral: STAR story #11-12 (tradeoffs, recent learning)',rt:'behavioral'},
    {d:'2026-12-28',dsa:'DSA revision: System design + DSA integration',main:'🌟 GraalVM Native + Spring AOT + RestClient/JdbcClient',mt:'spring',rot:'PHASE 3 RETRO — strong/weak, plan Phase 4',rt:'revision'},
  ]},
  {wn:21,phase:'Phase 4: Polish + Offer',title:'Pure mocking + weak topic patching + active interviews',days:[
    {d:'2026-12-29',aws:'☁️ CloudFront & CDN — Securing CF and S3 using OAI (9m) · CloudFront - Private Distribution & Behaviours (8m) · Using Origin Access Control (OAC) (11m) · Lambda@Edge (8m) · Global Accelerator (10m)',awsRef:['aws-cdn-10','aws-cdn-11','aws-cdn-12','aws-cdn-13','aws-cdn-14'],dsa:'Top 5 array + LL problems (40min each)',main:'Java REV: Collections + HashMap internals + ConcurrentHashMap',mt:'rev',rot:'Mock 10 (Java focused, 90min)',rt:'mock'},
    {d:'2026-12-30',dsa:'Top 5 tree + BST problems',main:'Spring REV: Lifecycle deep, AOP, transactions',mt:'rev',rot:'Real interview OR per-company prep (Walmart-specific)',rt:'mock'},
    {d:'2026-12-31',aws:'☁️ Advanced VPC — VPC Flow Logs (10m) · Egress-Only Internet gateway (7m) · VPC Endpoints (Gateway) (11m) · VPC Endpoints (Interface) (11m)',awsRef:['aws-vpcadv-01','aws-vpcadv-02','aws-vpcadv-03','aws-vpcadv-04'],dsa:'Top 5 graph + DP problems',main:'Java REV: Concurrency: threads, sync, volatile, CompletableFuture, VT',mt:'rev',rot:'Mock 11 (System Design, 90min)',rt:'mock'},
    {d:'2027-01-01',dsa:'Top 5 hashing + sliding window patterns',main:'Spring REV: Boot + JPA + Security flow end-to-end',mt:'rev',rot:'Full week retro + STAR story drilling (12 stories × 5min)',rt:'revision'},
    {d:'2027-01-02',aws:'☁️ Advanced VPC — VPC Endpoints - Interface - PART1 (12m) · VPC Endpoints - Gateway - PART2 (10m) · Egress-Only Internet Gateway - PART3 (8m) · VPC Peering (9m)',awsRef:['aws-vpcadv-05','aws-vpcadv-06','aws-vpcadv-07','aws-vpcadv-08'],dsa:'Top 5 stack + queue + monotonic patterns',main:'Java REV: JVM (memory, GC, OOM scenarios)',mt:'rev',rot:'Real interview OR HR research (salary, RSU, joining)',rt:'mock'},
    {d:'2027-01-03',dsa:'Top 5 heap + greedy problems',main:'Spring REV: Microservices: discovery, gateway, resilience4j, kafka',mt:'rev',rot:'Mock 12 (Behavioral + SD hybrid, 90min)',rt:'mock'},
    {d:'2027-01-04',aws:'☁️ Advanced VPC + Hybrid & Migration — VPC Peering demo (23m) · Border Gateway Protocol 101 (17m)',awsRef:['aws-vpcadv-09','aws-hybrid-01'],dsa:'Top 10 mixed problems (timed, no help)',main:'Java REV: Modern Java (records, sealed, pattern matching, VT)',mt:'rev',rot:'Behavioral: refine top 6 stories with feedback',rt:'behavioral'},
  ]},
  {wn:22,phase:'Phase 4: Polish + Offer',title:'Final SD designs + Spring deep revision',days:[
    {d:'2027-01-05',dsa:'DSA practice: tree + graph + hard mix',main:'Spring REV: Custom Boot starters + auto-config flow',mt:'rev',rot:'SD: Twitter Search (elasticsearch + caching)',rt:'sd',cRef:'sd-hld-twitter-search'},
    {d:'2027-01-06',aws:'☁️ Hybrid & Migration — IPSec VPN Fundamentals (15m) · AWS Site-to-Site VPN (18m) · Simple Site2Site VPN - STAGE0 - SETUP (5m)',awsRef:['aws-hybrid-02','aws-hybrid-03','aws-hybrid-04'],dsa:'DSA practice: DP hard problems + recursion deep',main:'Java REV: Production diagnostics — thread dumps, heap dumps, JFR',mt:'rev',rot:'Mock 13 (Full loop 3hr — Java + Spring + SD + Behavioral)',rt:'mock'},
    {d:'2027-01-07',dsa:'DSA practice: LL + array hard problems',main:'Spring REV: Observability + distributed tracing',mt:'rev',rot:'SD: Distributed file storage (S3/HDFS-like)',rt:'sd',cRef:'sd-hld-file-storage'},
    {d:'2027-01-08',aws:'☁️ Hybrid & Migration — Simple Site2Site VPN - STAGE1 - AWS VPN (10m) · Simple Site2Site VPN - STAGE2 - onprep pfSense Config (17m) · Simple Site2Site VPN - STAGE3 - Routing & Security (10m) · Simple Site2Site VPN - STAGE4 - Testing (6m) · Simple Site2Site VPN - STAGE5 - Cleanup (2m)',awsRef:['aws-hybrid-05','aws-hybrid-06','aws-hybrid-07','aws-hybrid-08','aws-hybrid-09'],dsa:'DSA practice: top weak topic from mocks',main:'Java REV: Design patterns + SOLID refactoring',mt:'rev',rot:'Full week retro + Mock retro + plan interview schedule',rt:'revision'},
    {d:'2027-01-09',dsa:'DSA practice: company-specific patterns',main:'Spring REV: Testing (MockMvc, slice, TestContainers)',mt:'rev',rot:'Real interview OR per-company prep (PayPal)',rt:'mock'},
    {d:'2027-01-10',aws:'☁️ Hybrid & Migration — Direct Connect (DX) Concepts (10m) · Direct Connect (DX) Resilience (14m) · Direct Connect (DX) - Public VIF + VPN (Encryption) (7m) · Transit Gateway (10m)',awsRef:['aws-hybrid-10','aws-hybrid-11','aws-hybrid-12','aws-hybrid-13'],dsa:'DSA: 5 hard problems timed (45min each)',main:'Java REV: Generics + Streams API deep',mt:'rev',rot:'Mock 14 (Tech deep + LLD, 90min)',rt:'mock'},
    {d:'2027-01-11',dsa:'DSA: review top patterns',main:'Spring REV: Caching strategies (Redis deep) + invalidation',mt:'rev',rot:'Behavioral: HR/manager drilling (5 question types)',rt:'behavioral'},
  ]},
  {wn:23,phase:'Phase 4: Polish + Offer',title:'Interview surge + Trade-off articulation',days:[
    {d:'2027-01-12',aws:'☁️ Hybrid & Migration — Storage Gateway - Volume (14m) · Storage Gateway - Tape (VTL) (12m) · Storage Gateway - File (12m)',awsRef:['aws-hybrid-14','aws-hybrid-15','aws-hybrid-16'],dsa:'DSA: mixed medium (LC), 4 in 2hr',main:'Java REV: Final pass on weakest 5 topics',mt:'rev',rot:'Mock 15 (Stranger via Pramp)',rt:'mock'},
    {d:'2027-01-13',dsa:'DSA: revisit unsolved hard problems',main:'Spring REV: Final pass on Spring weakest topics',mt:'rev',rot:'Real interview OR negotiation prep',rt:'mock'},
    {d:'2027-01-14',aws:'☁️ Hybrid & Migration — Snowball / Edge / Snowmobile (11m) · Directory Service (16m) · DataSync (9m)',awsRef:['aws-hybrid-17','aws-hybrid-18','aws-hybrid-19'],dsa:'DSA: company tag practice (Walmart)',main:'Java REV: Threading hard problems',mt:'rev',rot:'SD: Live streaming (Twitch/YouTube)',rt:'sd',cRef:'sd-hld-live-streaming'},
    {d:'2027-01-15',dsa:'DSA: company tag practice (PayPal/Paytm SQL+DSA)',main:'Spring REV: Final read of Boot internals docs',mt:'rev',rot:'Full week retro + write down weaknesses',rt:'revision'},
    {d:'2027-01-16',aws:'☁️ Hybrid & Migration + Security & Ops — FSx for Windows Servers (12m) · FSx For Lustre (14m) · AWS Transfer Family (10m) · AWS Secrets Manager (8m)',awsRef:['aws-hybrid-20','aws-hybrid-21','aws-hybrid-22','aws-sec-01'],dsa:'DSA: trie + DP combined',main:'Java REV: Code-review pass on all project commits',mt:'rev',rot:'Real interview + post-interview notes',rt:'mock'},
    {d:'2027-01-17',dsa:'DSA: hard problems revisit',main:'Spring REV: Reactive vs Virtual Threads + WebFlux',mt:'rev',rot:'Mock 16 (Full loop, 3hr — final loop simulation)',rt:'mock'},
    {d:'2027-01-18',aws:'☁️ Security & Ops — Application Layer (L7) Firewall (8m) · Web Application Firewall (WAF), WEBACLs, Rule Groups and Rules (19m) · AWS Shield (10m)',awsRef:['aws-sec-02','aws-sec-03','aws-sec-04'],dsa:'DSA: SQL + DSA combined',main:'Java REV: Last revision pass: 25-Q rapid quiz',mt:'rev',rot:'Tradeoff articulation drills: 10 classic tradeoffs',rt:'behavioral'},
  ]},
  {wn:24,phase:'Phase 4: Polish + Offer',title:'Offer negotiation begins',days:[
    {d:'2027-01-19',dsa:'DSA: 20-min rapid review',main:'Java + Spring REV: Walkthrough notebook end-to-end',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-01-20',aws:'☁️ Security & Ops — CloudHSM (15m) · AWS Config (6m) · Amazon Macie (12m)',awsRef:['aws-sec-05','aws-sec-06','aws-sec-07'],dsa:'DSA: light, revisit weakest 2 topics',main:'Java REV: Final weak-topic patch',mt:'rev',rot:'Mock 17 (Behavioral, full HM round)',rt:'mock'},
    {d:'2027-01-21',dsa:'DSA: 1 medium problem (timed, walkthrough)',main:'Spring REV: Company tech stack alignment',mt:'rev',rot:'SD: company-specific design (Walmart inventory, PayPal payments)',rt:'sd',cRef:'sd-hld-company'},
    {d:'2027-01-22',aws:'☁️ Security & Ops + CloudFormation — Amazon Macie demo (16m) · Amazon Inspector (6m) · Amazon Guardduty (4m) · CloudFormation Physical & Logical Resources (8m)',awsRef:['aws-sec-08','aws-sec-09','aws-sec-10','aws-cfn-01'],dsa:'DSA: rest mode (revise notes only)',main:'REV: Compile final cheat sheets (1-pager per topic)',mt:'rev',rot:'Full week retro + negotiate pending offers',rt:'revision'},
    {d:'2027-01-23',dsa:'DSA: top 3 problems from mock failures',main:'Java REV: 30-min quiz · 30 Q&A on weak areas',mt:'rev',rot:'Real interview OR final-round prep',rt:'mock'},
    {d:'2027-01-24',aws:'☁️ CloudFormation — Simple Non Portable Template - PART1 (10m) · Simple Non Portable Template - PART2 (11m) · CloudFormation Template and Pseudo Parameters (7m) · CloudFormation Intrinsic Functions (14m)',awsRef:['aws-cfn-02','aws-cfn-03','aws-cfn-04','aws-cfn-05'],dsa:'DSA: 2 graph + 2 DP medium problems',main:'Spring REV: Boot startup flow end-to-end + observability',mt:'rev',rot:'Mock 18 (Tech + SD final, 90min)',rt:'mock'},
    {d:'2027-01-25',dsa:'DSA: light · LC tagged for last 5 days',main:'Java + Spring REV: Final weak topic from mocks',mt:'rev',rot:'Behavioral: 12 STAR stories — final polish',rt:'behavioral'},
  ]},
  {wn:25,phase:'Phase 4: Polish + Offer',title:'Acceptance phase + Cushion for delayed loops',days:[
    {d:'2027-01-26',aws:'☁️ CloudFormation — CloudFormation Mappings (4m) · CloudFormation Outputs (4m) · Template v2 - Portable (14m) · CloudFormation Conditions (7m) · CloudFormation DependsOn (7m)',awsRef:['aws-cfn-06','aws-cfn-07','aws-cfn-08','aws-cfn-09','aws-cfn-10'],dsa:'DSA: 1 hard problem (timed)',main:'Final Java cheat sheet + interview Q&A pack',mt:'rev',rot:'Real interview / negotiation call',rt:'mock'},
    {d:'2027-01-27',dsa:'DSA: revise notes + rapid pattern recognition',main:'Final Spring cheat sheet + Q&A pack',mt:'rev',rot:'Mock 19 (any weak area, 90min)',rt:'mock'},
    {d:'2027-01-28',aws:'☁️ CloudFormation — CloudFormation Wait Conditions & cfn-signal (12m) · CloudFormation Nested Stacks (14m) · CloudFormation Cross-Stack References (10m) · CloudFormation Stack Sets (9m)',awsRef:['aws-cfn-11','aws-cfn-12','aws-cfn-13','aws-cfn-14'],dsa:'DSA: 30-min warm-up only',main:'Final SD cheat sheet + tradeoff articulation reps',mt:'rev',rot:'SD: final review of 10 designs (1-page each)',rt:'sd'},
    {d:'2027-01-29',dsa:'DSA: light · weakest pattern revisit',main:'Behavioral: 12 STAR stories rapid-fire (1min each)',mt:'rev',rot:'Full week retro + decision: which offer to accept',rt:'revision'},
    {d:'2027-01-30',aws:'☁️ CloudFormation — CloudFormation Deletion Policy (5m) · CloudFormation Stack Roles (7m) · CloudFormation Init (CFN-INIT) (9m) · CloudFormation cfn-hup (4m)',awsRef:['aws-cfn-15','aws-cfn-16','aws-cfn-17','aws-cfn-18'],dsa:'DSA: 2 medium problems (relaxed pace)',main:'Java REV: Coffee-table revision: scan everything',mt:'rev',rot:'Real interview / counter-offer discussion',rt:'mock'},
    {d:'2027-01-31',dsa:'DSA: 1 hard problem timed',main:'Spring REV: Coffee-table revision: scan everything',mt:'rev',rot:'Mock 20 (Final mock, 90min, any topic)',rt:'mock'},
    {d:'2027-02-01',aws:'☁️ CloudFormation — wait conditions, cfnsignal, cfninit and cfnhup-PART1 (13m) · wait conditions, cfnsignal, cfninit and cfnhup-PART2 (15m) · CloudFormation ChangeSets (11m)',awsRef:['aws-cfn-19','aws-cfn-20','aws-cfn-21'],dsa:'DSA: full revision day · no new problems',main:'REV: Final notes consolidation, single PDF',mt:'rev',rot:'HR negotiation tactics: counter, hold, decline drafts',rt:'behavioral'},
  ]},
  {wn:26,phase:'Phase 4: Polish + Offer',title:'Final interviews + final offer push',days:[
    {d:'2027-02-02',dsa:'DSA: warm-up only · 30min',main:'REV: Just sleep & light revision',mt:'rev',rot:'Real interview / final-round support',rt:'mock'},
    {d:'2027-02-03',aws:'☁️ CloudFormation + DynamoDB & NoSQL — CloudFormation Custom Resources (11m) · CloudFormation Custom Resources-PART1 (9m) · CloudFormation Custom Resources-PART2 (13m) · DynamoDB - Architecture (11m)',awsRef:['aws-cfn-22','aws-cfn-23','aws-cfn-24','aws-ddb-01'],dsa:'DSA: warm-up only',main:'REV: Specific topic per next-day interview',mt:'rev',rot:'Real interview · per-company prep doc',rt:'mock'},
    {d:'2027-02-04',dsa:'DSA: 1 problem light',main:'REV: Mock retro from week',mt:'rev',rot:'Real interview / manager round',rt:'mock'},
    {d:'2027-02-05',aws:'☁️ DynamoDB & NoSQL — DynamoDB - Operations, Consistency and Performance-PART1 (13m) · DynamoDB - Operations, Consistency and Performance-PART2 (11m) · DynamoDB Local and Global Secondary Indexes (13m) · DynamoDB - Streams & Lambda Triggers (9m)',awsRef:['aws-ddb-02','aws-ddb-03','aws-ddb-04','aws-ddb-05'],dsa:'DSA: rest mode',main:'REV: Behavioral STAR drilling',mt:'rev',rot:'Strategy: which offer to choose',rt:'behavioral'},
    {d:'2027-02-06',dsa:'DSA: warm-up',main:'REV: Whatever feels weakest 24h before',mt:'rev',rot:'Real interview / culture round',rt:'mock'},
    {d:'2027-02-07',aws:'☁️ DynamoDB & NoSQL — DynamoDB - Global Tables (5m) · DynamoDB - Accelerator (DAX) (11m) · DynamoDB - TTL (5m) · Amazon Athena (8m)',awsRef:['aws-ddb-06','aws-ddb-07','aws-ddb-08','aws-ddb-09'],dsa:'DSA: warm-up',main:'REV: Light · sleep well',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2027-02-08',dsa:'DSA: rest',main:'REV: Compile written cheat sheet per company',mt:'rev',rot:'Negotiation calls · counter-offer drafts',rt:'behavioral'},
  ]},
  {wn:27,phase:'Phase 4: Polish + Offer',title:'Negotiation final stretch + onboarding prep',days:[
    {d:'2027-02-09',aws:'☁️ DynamoDB & NoSQL — Athena Demo - PART1 (14m) · Athena Demo - PART2 (12m) · Elasticache (13m)',awsRef:['aws-ddb-10','aws-ddb-11','aws-ddb-12'],dsa:'DSA: 1 problem light or rest',main:'REV: Stand by for remaining interviews',mt:'rev',rot:'Final-round support',rt:'mock'},
    {d:'2027-02-10',dsa:'DSA: rest',main:'REV: Sleep & maintenance',mt:'rev',rot:'Offer negotiation final call · accept/decline',rt:'mock'},
    {d:'2027-02-11',aws:'☁️ DynamoDB & NoSQL + ML 101 — Redshift Architecture (12m) · Redshift DR and Resilience (4m) · Amazon Comprehend (7m) · Amazon Kendra (5m) · Amazon Lex (6m) · Amazon Polly (4m) · Amazon Rekognition (4m)',awsRef:['aws-ddb-13','aws-ddb-14','aws-ml-01','aws-ml-02','aws-ml-03','aws-ml-04','aws-ml-05'],dsa:'DSA: rest',main:'REV: Onboarding research (new company stack)',mt:'rev',rot:'Compare offers final spreadsheet',rt:'revision'},
    {d:'2027-02-12',dsa:'DSA: rest',main:'REV: Onboarding tech prep (new company\'s stack)',mt:'rev',rot:'Full retro + plan onboarding',rt:'revision'},
    {d:'2027-02-13',aws:'☁️ ML 101 + Other Services — Amazon Textract (9m) · Amazon Transcribe (5m) · Amazon Translate (5m) · Amazon Forecast 101 (4m) · Amazon Fraud Detector (4m) · Amazon SageMaker (6m) · AWS Local Zones (9m)',awsRef:['aws-ml-06','aws-ml-07','aws-ml-08','aws-ml-09','aws-ml-10','aws-ml-11','aws-other-01'],dsa:'DSA: rest',main:'REV: Tech stack research for accepted company',mt:'rev',rot:'Resignation/notice prep (if needed)',rt:'revision'},
    {d:'2027-02-14',dsa:'DSA: rest',main:'REV: Tech stack research continues',mt:'rev',rot:'Joining bonus / RSU final negotiation',rt:'revision'},
    {d:'2027-02-15',aws:'☁️ Exam Technique — General AWS Exam Technique - 3 Phase Approach (9m) · General AWS Question Technique - PART1 (14m) · General AWS Question Technique - PART2 (9m)',awsRef:['aws-exam-01','aws-exam-02','aws-exam-03'],dsa:'DSA: rest',main:'REV: Begin onboarding course (free week!)',mt:'rev',rot:'Sign offer · close offer letters · notify others',rt:'revision'},
  ]},
  {wn:27.5,phase:'Phase 4: Polish + Offer',title:'Buffer / decompress / onboarding ramp-up',isBuffer:true,days:[
    {d:'2027-02-16',activity:'Onboarding tech research · light DSA review'},
    {d:'2027-02-17',activity:'Update LinkedIn, resume · notify network'},
    {d:'2027-02-18',activity:'Decompress day · process the journey'},
    {d:'2027-02-19',activity:'Onboarding prep for new role'},
    {d:'2027-02-20',activity:'🎉 FINAL DAY OF PLAN · OFFER LOCKED · ONBOARDING NEXT'},
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
  return {version:'3.0', gfg:{topics}, dailyChecks:{}, dailyLog:{}, tracks:getDefaultTracks()};
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const s = JSON.parse(raw);
    if (!s.dailyChecks) s.dailyChecks = {};
    if (!s.dailyLog) s.dailyLog = {};
    if (!s.gfg) { const d = getDefaultState(); s.gfg = d.gfg; }
    // backfill per-track keys too — an older state may carry tracks:{} and
    // leave STATE.tracks.java undefined
    if (!s.tracks) s.tracks = getDefaultTracks();
    else Object.keys(getDefaultTracks()).forEach(k => { if (!s.tracks[k]) s.tracks[k] = {}; });
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
const GFG_UNIT_W = {v: 1, p: 1.4};   // a practice problem costs more than a video

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
      for (let i = 1; i <= t.vt; i++) out.push({s:'dsa', kind:'gfg', topic:t.id, name:t.name, gname:m.name, type:'v', idx:i, w:GFG_UNIT_W.v});
      for (let i = 1; i <= t.pt; i++) out.push({s:'dsa', kind:'gfg', topic:t.id, name:t.name, gname:m.name, type:'p', idx:i, w:GFG_UNIT_W.p});
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
    const s = STATE.gfg.topics[u.topic] || {};
    return u.type === 'v' ? u.idx <= (s.vc || 0) : u.idx <= (s.pc || 0);
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

  WEEKS.forEach(w => {
    if (w.isBuffer) return;
    w.days.forEach(d => {
      if (d.d < from) return;
      ['a','b','c','d'].forEach(sl => {
        if ((STATE.dailyChecks[d.d] || {})[sl]) return;   // already spent
        const st = resolveStream(streamForSlot(d, sl));
        if (!st) return;
        (slotsBy[st] = slotsBy[st] || []).push({date: d.d, slot: sl, h: SLOT_H[sl]});
      });
    });
  });

  // Baseline = the whole curriculum over every session the plan ever had.
  // Comparing today's density against it is what "behind" actually means, and
  // it works for streams measured in hours and in problem counts alike.
  const baseH = {};
  WEEKS.forEach(w => {
    if (w.isBuffer) return;
    w.days.forEach(d => ['a','b','c','d'].forEach(sl => {
      const st = streamForSlot(d, sl);
      if (st) baseH[st] = (baseH[st] || 0) + SLOT_H[sl];
    }));
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
      const s = STATE.gfg.topics[u.topic] = STATE.gfg.topics[u.topic] || {vc: 0, pc: 0};
      const f = u.type === 'v' ? 'vc' : 'pc';
      s[f] = done ? Math.max(s[f] || 0, u.idx) : Math.min(s[f] || 0, u.idx - 1);
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
    html += `<div class="u-item">${u.name}</div>`;
  });
  const h = units.reduce((s, u) => s + u.w, 0);
  return html + `<div class="u-meta">${units.length} item${units.length > 1 ? 's' : ''} · ~${fmtH(h)} of material</div>`;
}

// Consecutive videos/problems from the same topic collapse into a range.
function renderGfgUnits(units) {
  const runs = [];
  units.forEach(u => {
    const last = runs[runs.length - 1];
    if (last && last.topic === u.topic && last.type === u.type && u.idx === last.to + 1) last.to = u.idx;
    else runs.push({topic: u.topic, name: u.name, gname: u.gname, type: u.type, from: u.idx, to: u.idx});
  });
  let html = '', lastG = null;
  runs.forEach(r => {
    if (r.gname !== lastG) { html += `<div class="u-group">${r.gname}</div>`; lastG = r.gname; }
    const kind  = r.type === 'v' ? 'videos' : 'problems';
    const range = r.from === r.to ? `#${r.from}` : `#${r.from}–${r.to}`;
    const n = r.to - r.from + 1;
    html += `<div class="u-item"><strong>${r.name}</strong> · ${kind} ${range} <span style="color:var(--dim)">(${n})</span></div>`;
  });
  return html + `<div class="u-meta">${units.length} item${units.length > 1 ? 's' : ''} today</div>`;
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
      ? (k === 'dsa' ? (Math.round(p.load * 10) / 10) + ' items' : fmtH(p.load)) + ' / session'
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

  invalidatePlan();
  if (document.getElementById('panel-today')) renderToday();
  if (SHOWN_WEEK !== null && document.getElementById('week-detail')) showWeek(SHOWN_WEEK);
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
      <div class="rule-item"><span class="rule-bullet">A</span><div><strong style="color:var(--dsa)">DSA · 2h</strong> — GFG Complete Interview Prep (videos + problems). Daily, no exceptions.</div></div>
      <div class="rule-item"><span class="rule-bullet">B</span><div><strong style="color:var(--java)">JAVA ↔ SPRING · 2.5h</strong> — alternating days. Java on even day numbers, Spring on odd.</div></div>
      <div class="rule-item"><span class="rule-bullet">C</span><div><strong style="color:var(--sql)">ROTATING · 1.5h</strong> — SQL (Mon/Wed) · Hands-on (Tue/Thu) · System Design (Fri) · Cloud/Revision (Sat/Sun)</div></div>
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
      <div class="rule-item"><span class="rule-bullet">2</span><div>All 56 GFG topics start at 0%. Only videos + problems counted — no articles, MCQs, or contests.</div></div>
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
      <div class="rule-item"><span class="rule-bullet">Sep 7</span><div>4/10 — End of Phase 1 · mid-service screens · AWS: accounts, fundamentals, IAM &amp; Orgs done</div></div>
      <div class="rule-item"><span class="rule-bullet">Oct 5</span><div>5/10 — Easy product first rounds · AWS: S3 + VPC done, EC2 underway</div></div>
      <div class="rule-item"><span class="rule-bullet">Nov 2</span><div>6/10 — End of Phase 2 · mid-product tech rounds · start applying · AWS: EC2 + ECS/Fargate done</div></div>
      <div class="rule-item"><span class="rule-bullet">Dec 6</span><div>7/10 — Product-company loops · AWS: Route 53, RDS/Aurora done, ALB/ASG underway</div></div>
      <div class="rule-item"><span class="rule-bullet">Dec 28</span><div>8/10 — End of Phase 3 · full loops · AWS: Serverless (Lambda/SQS/SNS/API GW) + CloudFront done</div></div>
      <div class="rule-item"><span class="rule-bullet">Feb 15</span><div>9/10 — SAA course complete (all 339 lessons) · offer signed, onboarding next</div></div>
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
    name:'Java', color:'#e76f51', totalHours:250,
    groups:[
      {id:'java-a', name:'Part A · Language Foundations', hours:25, topics:[
        {id:'java-jvm-basics', name:'JVM / JRE / JDK, compilation pipeline, bytecode, classpath', h:2, p:'V.High'},
        {id:'java-primitives', name:'Primitives, literals, casting, autoboxing + Integer cache trap', h:2, p:'V.High'},
        {id:'java-operators', name:'Operators, control flow, labelled break/continue, switch basics', h:1.5, p:'Medium'},
        {id:'java-arrays', name:'Arrays, multi-dimensional arrays, Arrays utility class', h:2, p:'High'},
        {id:'java-objects-init', name:'Classes, constructors, initialisation order (static + instance blocks)', h:2, p:'V.High'},
        {id:'java-inheritance', name:'Inheritance and dynamic method dispatch (vtable intuition)', h:2.5, p:'V.High'},
        {id:'java-overload-override', name:'Overload resolution rules vs overriding, covariant returns', h:2, p:'V.High'},
        {id:'java-encapsulation', name:'Encapsulation, access modifiers, composition over inheritance', h:2, p:'V.High'},
        {id:'java-abstract-iface', name:'Abstract classes vs interfaces, default/static/private methods, diamond resolution', h:2.5, p:'V.High'},
        {id:'java-keywords', name:'static, final, this, super, instanceof — semantics and edge cases', h:2, p:'V.High'},
        {id:'java-object-wrappers', name:'Object class methods (toString/equals/hashCode/clone/getClass), wrapper classes', h:2, p:'V.High'},
        {id:'java-enums-nested', name:'Enums (EnumMap/EnumSet, behaviour), nested/inner/local/anonymous classes, varargs', h:2.5, p:'High'},
      ]},
      {id:'java-b', name:'Part B · Strings & Immutability', hours:6, topics:[
        {id:'java-string-pool', name:'String pool, immutability, intern(), == vs equals', h:2, p:'V.High'},
        {id:'java-stringbuilder', name:'StringBuilder vs StringBuffer, compact strings (Java 9), formatting, text blocks', h:2, p:'V.High'},
        {id:'java-immutability', name:'Designing immutable classes + defensive copying', h:2, p:'V.High'},
      ]},
      {id:'java-c', name:'Part C · Exceptions', hours:6, topics:[
        {id:'java-exc-hierarchy', name:'Exception hierarchy, checked vs unchecked and the design debate', h:2, p:'V.High'},
        {id:'java-exc-flow', name:'try/catch/finally, finally-vs-return interaction, multi-catch', h:2, p:'V.High'},
        {id:'java-exc-resources', name:'try-with-resources, AutoCloseable, suppressed exceptions, custom exceptions', h:2, p:'V.High'},
      ]},
      {id:'java-d', name:'Part D · Collections', hours:37.5, topics:[
        {id:'java-coll-hierarchy', name:'Hierarchy: Collection → List/Set/Queue/Deque, and why Map sits outside it', h:2, p:'V.High'},
        {id:'java-arraylist', name:'ArrayList internals: 1.5x growth, System.arraycopy on resize, ensureCapacity', h:2.5, p:'V.High'},
        {id:'java-linkedlist', name:'LinkedList vs ArrayList: pointer chasing, cache locality, why LinkedList is usually the wrong answer', h:2, p:'V.High'},
        {id:'java-hashmap-1', name:'HashMap 1: buckets, hash() spreading (XOR high bits), (n-1) & hash, power-of-two capacity', h:3, p:'V.High'},
        {id:'java-hashmap-2', name:'HashMap 2: load factor 0.75, resize and rehash cost', h:2.5, p:'V.High'},
        {id:'java-hashmap-3', name:'HashMap 3: treeify at 8 / untreeify at 6, red-black bounds, Java 7→8 change, still not thread-safe', h:3, p:'V.High'},
        {id:'java-linkedhashmap', name:'LinkedHashMap: insertion vs access order, removeEldestEntry — build an LRU cache', h:2.5, p:'V.High'},
        {id:'java-treemap', name:'TreeMap/TreeSet: red-black tree, NavigableMap (floorKey/ceilingKey/headMap/subMap), null rejection', h:2.5, p:'V.High'},
        {id:'java-sets', name:'HashSet, LinkedHashSet, TreeSet — backing structures and trade-offs', h:2, p:'High'},
        {id:'java-queue-deque', name:'Queue and Deque: ArrayDeque internals, PriorityQueue (binary heap)', h:2.5, p:'V.High'},
        {id:'java-equals-hashcode', name:'equals/hashCode contract both directions, mutable keys, silent lookup failure', h:3, p:'V.High'},
        {id:'java-comparable', name:'Comparable vs Comparator, consistent-with-equals caveat for TreeSet/TreeMap', h:2, p:'V.High'},
        {id:'java-iterators', name:'Fail-fast vs fail-safe, modCount, ConcurrentModificationException, correct removal (Iterator.remove / removeIf)', h:2.5, p:'V.High'},
        {id:'java-immutable-coll', name:'List.of vs Arrays.asList vs Collections.unmodifiableList — three different things', h:2, p:'V.High'},
        {id:'java-collections-util', name:'Collections and Arrays utility classes: sort, binarySearch, synchronized/unmodifiable views', h:2, p:'High'},
        {id:'java-custom-iterable', name:'Iterator / Iterable / ListIterator, and writing a custom Iterable', h:1.5, p:'Medium'},
      ]},
      {id:'java-e', name:'Part E · Generics', hours:11, topics:[
        {id:'java-erasure', name:'Type erasure and its consequences: no new T[], no runtime checks, signature collisions', h:2.5, p:'V.High'},
        {id:'java-bounded-wildcards', name:'Bounded types, wildcards vs type parameters', h:2, p:'V.High'},
        {id:'java-pecs', name:'PECS from first principles — deriving Collections.copy yourself', h:2.5, p:'V.High'},
        {id:'java-variance', name:'Generic invariance vs array covariance, and why ArrayStoreException exists', h:2, p:'V.High'},
        {id:'java-bridge-varargs', name:'Bridge methods, @SafeVarargs, heap pollution', h:2, p:'High'},
      ]},
      {id:'java-f', name:'Part F · Lambdas & Functional Interfaces', hours:11.5, topics:[
        {id:'java-lambda-compile', name:'What a lambda really compiles to: invokedynamic + LambdaMetafactory, lazily linked call sites', h:2.5, p:'V.High'},
        {id:'java-lambda-capture', name:'Non-capturing lambdas cached as singletons vs capturing ones; effectively-final capture', h:2, p:'V.High'},
        {id:'java-functional-ifaces', name:'@FunctionalInterface and the built-in set (Function, Supplier, Consumer, Predicate, operators)', h:2, p:'V.High'},
        {id:'java-primitive-fn', name:'Primitive specializations (IntFunction, ToIntFunction…) and why they exist', h:1.5, p:'High'},
        {id:'java-method-refs', name:'Method references — all four forms; why String::length is unbound and str::length is bound', h:2, p:'V.High'},
        {id:'java-fn-composition', name:'Function.compose vs andThen, Predicate.and/or/negate', h:1.5, p:'High'},
      ]},
      {id:'java-g', name:'Part G · Streams & Optional', hours:31, topics:[
        {id:'java-stream-pipeline', name:'Pipeline mechanics: source → lazy intermediate → eager terminal, operation fusion', h:2.5, p:'V.High'},
        {id:'java-short-circuit', name:'Short-circuiting operations: findFirst, anyMatch, limit', h:1.5, p:'V.High'},
        {id:'java-stateful-ops', name:'Stateless vs stateful ops — sorted and distinct buffer everything; sorted is a full barrier', h:2.5, p:'V.High'},
        {id:'java-collectors-1', name:'Collectors 1: toList/toSet/toMap, duplicate-key IllegalStateException, the merge-function overload', h:2.5, p:'V.High'},
        {id:'java-collectors-2', name:'Collectors 2: groupingBy with downstream — counting, summingInt, mapping, filtering, flatMapping, reducing, collectingAndThen', h:3, p:'V.High'},
        {id:'java-collectors-3', name:'Collectors 3: nested groupingBy, partitioningBy, teeing', h:2.5, p:'V.High'},
        {id:'java-custom-collector', name:'Writing a custom Collector: supplier / accumulator / combiner / finisher', h:2.5, p:'V.High'},
        {id:'java-reduce-collect', name:'reduce vs collect, why string concat via reduce is O(n²), three-arg reduce and associativity', h:2.5, p:'V.High'},
        {id:'java-parallel-streams', name:'Parallel streams: the common ForkJoinPool, when they help vs hurt, blocking I/O starving the JVM', h:3, p:'V.High'},
        {id:'java-spliterator', name:'Spliterator, source characteristics (SIZED/ORDERED/IMMUTABLE), encounter order cost, unordered()', h:2, p:'High'},
        {id:'java-stream-pitfalls', name:'Pitfalls: single-use streams, side effects in map/filter, peek, flatMap substreams', h:2, p:'V.High'},
        {id:'java-primitive-streams', name:'IntStream/LongStream/DoubleStream, boxed, mapToObj, iterate/generate, takeWhile/dropWhile, mapMulti', h:2, p:'High'},
        {id:'java-optional', name:'Optional as a return type; map/flatMap/filter/or/ifPresentOrElse; orElse vs orElseGet; orElseThrow', h:2.5, p:'V.High'},
      ]},
      {id:'java-h', name:'Part H · Concurrency', hours:64.5, topics:[
        {id:'java-thread-basics', name:'Thread lifecycle and states, Runnable vs Callable, daemon threads, join, why Thread.stop died', h:2.5, p:'V.High'},
        {id:'java-interruption', name:'Interruption as a cooperative protocol — interrupt/isInterrupted/InterruptedException, never swallow it', h:2, p:'V.High'},
        {id:'java-jmm-1', name:'JMM 1: happens-before, and visibility vs atomicity vs ordering', h:3, p:'V.High'},
        {id:'java-jmm-2', name:'JMM 2: instruction reordering, volatile semantics, why volatile count++ is still broken', h:3, p:'V.High'},
        {id:'java-jmm-3', name:'JMM 3: false sharing and cache lines, double-checked locking and why it needs volatile', h:2.5, p:'V.High'},
        {id:'java-synchronized', name:'synchronized: monitors, object vs class level, reentrancy, biased/lightweight/heavyweight escalation', h:3, p:'V.High'},
        {id:'java-wait-notify', name:'wait/notify/notifyAll — always in a while loop, spurious wakeups, producer-consumer', h:2.5, p:'V.High'},
        {id:'java-reentrantlock', name:'ReentrantLock: tryLock, timed lock, lockInterruptibly, fairness, multiple Conditions', h:2.5, p:'V.High'},
        {id:'java-rwlock', name:'ReadWriteLock and StampedLock optimistic reads', h:2, p:'High'},
        {id:'java-deadlock', name:'Deadlock: the four conditions and lock ordering as the fix; livelock; starvation', h:2.5, p:'V.High'},
        {id:'java-atomics-cas', name:'Atomics and CAS: compareAndSet, the ABA problem, AtomicStampedReference', h:2.5, p:'V.High'},
        {id:'java-longadder', name:'LongAdder vs AtomicLong under contention (striping)', h:1.5, p:'High'},
        {id:'java-chm-internals', name:'ConcurrentHashMap internals: CAS on bin heads + per-bin synchronized (not Java 7 segments)', h:3, p:'V.High'},
        {id:'java-chm-atomics', name:'CHM compute/merge/computeIfAbsent atomicity, and the recursive computeIfAbsent deadlock', h:2.5, p:'V.High'},
        {id:'java-cow-skiplist', name:'CopyOnWriteArrayList and when write cost is acceptable; ConcurrentSkipListMap', h:2, p:'High'},
        {id:'java-blocking-queues', name:'BlockingQueue family: ArrayBlockingQueue, LinkedBlockingQueue, SynchronousQueue, DelayQueue, PriorityBlockingQueue', h:2.5, p:'V.High'},
        {id:'java-tpe-config', name:'ThreadPoolExecutor parameters and the queue/maxPoolSize interaction — unbounded queue means maxPool is never reached', h:3, p:'V.High'},
        {id:'java-tpe-pitfalls', name:'Why newFixedThreadPool/newCachedThreadPool are discouraged in production; rejection handlers', h:2.5, p:'V.High'},
        {id:'java-executor-lifecycle', name:'ScheduledExecutorService; graceful shutdown — shutdown vs shutdownNow vs awaitTermination', h:2, p:'V.High'},
        {id:'java-cf-1', name:'CompletableFuture 1: supplyAsync, thenApply vs thenCompose vs thenCombine', h:3, p:'V.High'},
        {id:'java-cf-2', name:'CompletableFuture 2: allOf/anyOf, exceptionally/handle/whenComplete, which executor each stage runs on', h:3, p:'V.High'},
        {id:'java-coordination', name:'CountDownLatch, CyclicBarrier, Semaphore, Phaser, Exchanger — when each fits', h:2.5, p:'V.High'},
        {id:'java-forkjoin', name:'ForkJoinPool and work-stealing; RecursiveTask / RecursiveAction', h:2, p:'High'},
        {id:'java-threadlocal', name:'ThreadLocal: legitimate uses, and the memory leak in pools if you skip remove()', h:2, p:'V.High'},
        {id:'java-virtual-threads', name:'Virtual threads: carrier threads, mounting/unmounting, pinning (prefer ReentrantLock over synchronized), why pooling them is an anti-pattern', h:3, p:'V.High'},
        {id:'java-structured-conc', name:'Structured concurrency and scoped values — check status for your target JDK', h:2, p:'High'},
      ]},
      {id:'java-i', name:'Part I · JVM & Memory', hours:15.5, topics:[
        {id:'java-heap-layout', name:'Heap generations, stack vs heap allocation, escape analysis', h:2.5, p:'High'},
        {id:'java-gc-algorithms', name:'GC algorithms: G1 (default), ZGC, Shenandoah, Parallel — conceptual trade-offs', h:2.5, p:'High'},
        {id:'java-references', name:'Strong/soft/weak/phantom references and where WeakHashMap fits', h:2, p:'High'},
        {id:'java-classloading', name:'Class loading and the parent-delegation model', h:2, p:'High'},
        {id:'java-oom-diagnosis', name:'OutOfMemoryError variants and diagnosis: heap dump, jmap, jstack, JFR', h:3, p:'V.High'},
        {id:'java-jit-flags', name:'JIT and tiered compilation; the JVM flags worth knowing', h:2, p:'Medium'},
        {id:'java-cleaner', name:'Cleaner instead of finalizers; intern() from the JVM side', h:1.5, p:'Medium'},
      ]},
      {id:'java-j', name:'Part J · Modern Java 8 → 21+', hours:12, topics:[
        {id:'java-records', name:'Records: generated equals/hashCode/toString, compact constructors', h:2, p:'V.High'},
        {id:'java-sealed', name:'Sealed classes and interfaces', h:1.5, p:'V.High'},
        {id:'java-pattern-matching', name:'Pattern matching for instanceof and switch, record deconstruction patterns', h:2.5, p:'V.High'},
        {id:'java-switch-var', name:'Switch expressions with yield, text blocks, var (and when it hurts readability)', h:2, p:'V.High'},
        {id:'java-jpms', name:'The module system (JPMS) conceptually, and its effect on reflection and classpath', h:2, p:'Medium'},
        {id:'java-api-roundup', name:'Java 9→21 API roundup: List.of, HttpClient, isBlank/strip/lines, enhanced NPE messages', h:2, p:'High'},
      ]},
      {id:'java-k', name:'Part K · I/O, Serialization & Reflection', hours:10.5, topics:[
        {id:'java-nio2', name:'NIO.2: Path, Files, Files.lines (a stream you must close), directory walking', h:2, p:'High'},
        {id:'java-buffers-channels', name:'Buffers and channels, memory-mapped files', h:2, p:'Medium'},
        {id:'java-serialization', name:'Serialization and why it is considered a design mistake; serialVersionUID, transient, preferring JSON/protobuf', h:2, p:'High'},
        {id:'java-reflection', name:'Reflection and annotations, retention policies, how frameworks use them', h:2.5, p:'High'},
        {id:'java-dynamic-proxies', name:'Dynamic proxies (and how Spring AOP leans on them)', h:2, p:'High'},
      ]},
      {id:'java-l', name:'Part L · Design & Quality', hours:12.5, topics:[
        {id:'java-solid', name:'SOLID principles, with refactoring examples', h:2.5, p:'V.High'},
        {id:'java-patterns-creational', name:'Creational patterns: Singleton (4 implementations), Factory, Builder', h:2.5, p:'High'},
        {id:'java-patterns-structural', name:'Structural patterns: Adapter, Decorator, Proxy, Facade', h:2, p:'High'},
        {id:'java-patterns-behavioral', name:'Behavioural patterns: Strategy, Observer, Template, Command', h:2, p:'High'},
        {id:'java-clean-code', name:'DRY/KISS/YAGNI, code smells, refactoring moves', h:1.5, p:'High'},
        {id:'java-logging-build', name:'Logging (SLF4J, Logback, MDC, correlation IDs) and build tools (Maven lifecycle, Gradle)', h:2, p:'High'},
      ]},
      {id:'java-m', name:'Part M · Testing', hours:6.5, topics:[
        {id:'java-junit5', name:'JUnit 5: lifecycle, parameterized tests, assertions', h:2, p:'High'},
        {id:'java-mockito', name:'Mockito: mock/spy/inject, ArgumentCaptor, verify', h:2.5, p:'High'},
        {id:'java-test-patterns', name:'Testing patterns: AAA, TDD basics, JaCoCo coverage', h:2, p:'Medium'},
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
    name:'Cloud / Docker / K8s / AWS', color:'#2a9d8f', totalHours:212,
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
  invalidatePlan();
  if (document.getElementById('panel-today')) renderToday();
  if (SHOWN_WEEK !== null && document.getElementById('week-detail')) showWeek(SHOWN_WEEK);
}

// TRACK_DEFS is declared below the render code, so boot last — the scheduler
// reads the curriculum lists on its very first render.
init();
