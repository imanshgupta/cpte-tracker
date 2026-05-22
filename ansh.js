// ─── DATA ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'java-prep-tracker-v2';
const PLAN_START = '2026-05-25';
const PLAN_END   = '2026-12-04';

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

// All dates shifted +4 days from original CALENDAR.md (plan now starts May 25)
const WEEKS = [
  {wn:1,phase:'Phase 1: Foundation',title:'Core Java + DSA Big-O start',days:[
    {d:'2026-05-25',dsa:'GFG DSA intro + Analysis of Algorithms videos 1-6 + 3 Big-O snippets',main:'Java Fundamentals: types, primitives, JVM/JRE/JDK, classpath',mt:'java',rot:'Setup: GitHub repo, Notion notes, IntelliJ, Spring Boot starter',rt:'hands-on'},
    {d:'2026-05-26',dsa:'GFG: Big-O videos 7-12 + 5 complexity practice + Arrays intro',main:'Spring: What is Spring, IoC concept, first Spring Boot project',mt:'spring',rot:'SQL: SELECT, WHERE, ORDER BY, LIMIT (15 problems)',rt:'sql'},
    {d:'2026-05-27',dsa:'GFG: Arrays intro + Largest + 2nd Largest + Reverse Array',main:'Java OOP fundamentals: inheritance, polymorphism, super/this',mt:'java',rot:'Hands-on: refactor Spring Boot with 2 beans constructor injection',rt:'hands-on'},
    {d:'2026-05-28',dsa:'GFG: Arrays — Left/Right Rotation by K + 1 more problem',main:'Spring DI types (constructor/setter/field), why constructor wins',mt:'spring',rot:'Full Week revision + self-quiz (10 Q)',rt:'revision'},
    {d:'2026-05-29',dsa:'GFG: Arrays — Kadane\'s Algorithm + variants',main:'Java OOP: Abstraction, Encapsulation, IS-A vs HAS-A',mt:'java',rot:'SQL: DISTINCT, CASE WHEN, COALESCE, pattern matching (10 problems)',rt:'sql'},
    {d:'2026-05-30',dsa:'GFG: Arrays — Stock Buy/Sell + Move Zeroes',main:'Spring Bean lifecycle deep, @PostConstruct, @PreDestroy',mt:'spring',rot:'Hands-on: add Spring beans with lifecycle hooks, trace logs',rt:'hands-on'},
    {d:'2026-05-31',dsa:'GFG: Arrays — Set Matrix Zeros + Pascal\'s Triangle',main:'Java Method overloading vs overriding, dynamic dispatch',mt:'java',rot:'SQL: INNER JOIN deep (10 problems)',rt:'sql'},
  ]},
  {wn:2,phase:'Phase 1: Foundation',title:'Exception Handling + Spring annotations',days:[
    {d:'2026-06-01',dsa:'GFG: Arrays — Next Permutation + Sort 0/1/2 (Dutch Flag)',main:'Spring Bean scopes, circular dependencies',mt:'spring',rot:'Hands-on: prototype + singleton interaction, Provider pattern',rt:'hands-on'},
    {d:'2026-06-02',dsa:'GFG: Arrays final — Merge Intervals + Find Duplicate',main:'Java Abstract class vs Interface, Java 8 defaults, diamond problem',mt:'java',rot:'SD: scalability (vertical vs horizontal), load balancers L4 vs L7',rt:'sd'},
    {d:'2026-06-03',dsa:'GFG: Recursion intro + factorial, sum-N, power',main:'Spring @Component/@Service/@Repository/@Controller differences',mt:'spring',rot:'Hands-on: build Shape hierarchy (abstract + interface)',rt:'hands-on'},
    {d:'2026-06-04',dsa:'GFG: Recursion — Fibonacci + palindrome check',main:'Java Static keyword deep + Final keyword deep',mt:'java',rot:'Full week revision + self-quiz (15 Q)',rt:'revision'},
    {d:'2026-06-05',dsa:'GFG: Recursion — generate subsets (backtracking intro)',main:'Spring @Autowired modes, @Qualifier, @Primary',mt:'spring',rot:'SQL: LEFT/RIGHT/FULL OUTER JOIN, SELF JOIN (10 problems)',rt:'sql'},
    {d:'2026-06-06',dsa:'GFG: Recursion — print all permutations',main:'Java String pool, immutability, intern(), == vs equals',mt:'java',rot:'Hands-on: Spring Java config (no XML) for 3 beans',rt:'hands-on'},
    {d:'2026-06-07',dsa:'GFG: Recursion — N-Queens intro, subset sum',main:'Spring @Configuration, @Bean, @Import',mt:'spring',rot:'SQL: ANTI JOIN, SEMI JOIN, join performance (10 problems)',rt:'sql'},
  ]},
  {wn:3,phase:'Phase 1: Foundation',title:'Hashing + Spring MVC start',days:[
    {d:'2026-06-08',dsa:'GFG: Hashing intro + frequency counter',main:'Java StringBuilder vs StringBuffer, perf benchmark',mt:'java',rot:'Hands-on: String benchmark exercise, compare 100k concats',rt:'hands-on'},
    {d:'2026-06-09',dsa:'GFG: Hashing — 2 Sum, anagram check',main:'Spring MVC intro: DispatcherServlet, request lifecycle',mt:'spring',rot:'SD: Caching concepts (cache-aside, write-through, CDN)',rt:'sd'},
    {d:'2026-06-10',dsa:'GFG: Hashing — first unique char, longest subarray sum K',main:'Java equals() + hashCode() contract deep, Object class methods',mt:'java',rot:'Hands-on: implement equals/hashCode, stress-test in HashSet/HashMap',rt:'hands-on'},
    {d:'2026-06-11',dsa:'GFG: Hashing — group anagrams, subarray with XOR',main:'Spring @RequestMapping, @GetMapping, @PostMapping, @PathVariable',mt:'spring',rot:'Full week revision + self-quiz',rt:'revision'},
    {d:'2026-06-12',dsa:'GFG: Searching — Binary Search variants (first/last occurrence)',main:'Java Exception handling: hierarchy, checked vs unchecked',mt:'java',rot:'SQL: COUNT/SUM/AVG/MIN/MAX, GROUP BY, HAVING (10 problems)',rt:'sql'},
    {d:'2026-06-13',dsa:'GFG: Searching — Binary Search on Answer (sqrt, peak)',main:'Spring @RequestBody, @ResponseBody, ResponseEntity, @RequestHeader',mt:'spring',rot:'Hands-on: build /api/products CRUD with all parameter types',rt:'hands-on'},
    {d:'2026-06-14',dsa:'GFG: Searching final — Search in rotated sorted array',main:'Java Custom exceptions, exception chaining, try-with-resources',mt:'java',rot:'SQL: Subqueries (scalar, correlated, top-N per group) (10 problems)',rt:'sql'},
  ]},
  {wn:4,phase:'Phase 1: Foundation',title:'Linked List + Spring error handling + Phase 1 wrap',days:[
    {d:'2026-06-15',dsa:'GFG: Sorting — Merge Sort (recursion tree + O(n log n))',main:'Spring @ControllerAdvice + @ExceptionHandler + RFC 7807',mt:'spring',rot:'Hands-on: add global exception handler + custom error response',rt:'hands-on'},
    {d:'2026-06-16',dsa:'GFG: Sorting — Quick Sort (partition logic)',main:'Java Object class methods, Wrapper classes, autoboxing',mt:'java',rot:'SD: Database scaling (replicas, read/write split, sharding)',rt:'sd'},
    {d:'2026-06-17',dsa:'GFG: Sorting + Linked List intro',main:'Spring REST best practices: HTTP status, idempotency, versioning',mt:'spring',rot:'Hands-on: add @Valid + bean validation annotations',rt:'hands-on'},
    {d:'2026-06-18',dsa:'GFG: Linked List — Reverse (iterative + recursive)',main:'Java Generics basics: type params, wildcards, PECS',mt:'java',rot:'Full week revision + self-quiz + plan Week 5',rt:'revision'},
    {d:'2026-06-19',dsa:'GFG: Linked List — Detect Cycle (Floyd\'s), find cycle start',main:'Spring DTOs vs Entities, MapStruct intro, layered architecture',mt:'spring',rot:'SQL: CTEs (WITH clause), recursive CTEs (10 problems)',rt:'sql'},
    {d:'2026-06-20',dsa:'GFG: Linked List — Merge two sorted, find middle (slow-fast)',main:'Java I/O & NIO basics, Files/Path, BufferedReader/Writer',mt:'java',rot:'Hands-on: refactor project to DTO + MapStruct',rt:'hands-on'},
    {d:'2026-06-21',dsa:'GFG: Linked List — Palindrome, Remove Nth from end',main:'Spring Mid-Phase-1 self-mock (45min Q&A on Java+Spring)',mt:'spring',rot:'Phase 1 Retro: identify weak topics, plan Phase 2',rt:'revision'},
  ]},
  {wn:5,phase:'Phase 2: Core Backend',title:'Linked List deep + Threading start + JPA basics',days:[
    {d:'2026-06-22',dsa:'GFG: LL — Merge K sorted (intro to heap)',main:'Java Part B start: Thread vs Runnable, lifecycle, daemon threads',mt:'java',rot:'Hands-on: Convert Product to JPA @Entity, basic repo',rt:'hands-on'},
    {d:'2026-06-23',dsa:'GFG: LL — Add two numbers as LL',main:'Spring Data JPA: @Entity, @Id, @GeneratedValue',mt:'spring',rot:'SQL: Window Functions — ROW_NUMBER, RANK, DENSE_RANK (10 problems)',rt:'sql'},
    {d:'2026-06-24',dsa:'GFG: LL — Intersection of 2 LL, sort LL',main:'Java start()/run(), join, sleep, yield, interrupt',mt:'java',rot:'Hands-on: Multi-threaded counter demo, race condition',rt:'hands-on'},
    {d:'2026-06-25',dsa:'GFG: LL Circular + Doubly intro',main:'Spring JPA Relationships: @OneToOne, @OneToMany, mappedBy, cascade',mt:'spring',rot:'Full week rev + SD: Message Queues (Kafka vs RabbitMQ vs SQS)',rt:'sd'},
    {d:'2026-06-26',dsa:'GFG: Stack intro + Valid Parentheses + Reverse Stack',main:'Java synchronized: method/block/static, intrinsic lock',mt:'java',rot:'SQL: LAG, LEAD, FIRST_VALUE, running totals (10 problems)',rt:'sql'},
    {d:'2026-06-27',dsa:'GFG: Stack — Next Greater Element (monotonic stack)',main:'Spring Fetch types: LAZY vs EAGER, N+1 problem',mt:'spring',rot:'Hands-on: Reproduce N+1, fix with JOIN FETCH, verify SQL count',rt:'hands-on'},
    {d:'2026-06-28',dsa:'GFG: Stack — Stock Span, Largest Rectangle in Histogram',main:'Java volatile, visibility vs atomicity, happens-before',mt:'java',rot:'SQL: Window frames (ROWS vs RANGE), moving averages (10 problems)',rt:'sql'},
  ]},
  {wn:6,phase:'Phase 2: Core Backend',title:'Stack/Queue + Concurrency utilities + Transactions',days:[
    {d:'2026-06-29',dsa:'GFG: Stack — getMin O(1), 2 stacks problem',main:'Spring @Transactional intro: propagation REQUIRED, rollback rules',mt:'spring',rot:'Hands-on: @Transactional service method, observe rollback',rt:'hands-on'},
    {d:'2026-06-30',dsa:'GFG: Queue intro + implementations (array/LL)',main:'Java wait/notify/notifyAll, monitor, spurious wakeups',mt:'java',rot:'SD: Distributed transactions (Saga, 2PC awareness)',rt:'sd'},
    {d:'2026-07-01',dsa:'GFG: Queue using stacks + Sliding Window Max (Deque)',main:'Spring @Transactional propagation: REQUIRES_NEW, NESTED, MANDATORY',mt:'spring',rot:'Hands-on: nested @Transactional, test all propagations',rt:'hands-on'},
    {d:'2026-07-02',dsa:'GFG: Deque + LRU Cache (HashMap + DLL)',main:'Java Producer-Consumer with wait/notify, build BlockingQueue manually',mt:'java',rot:'Full week rev + self-mock 30min Q&A + plan',rt:'revision'},
    {d:'2026-07-03',dsa:'GFG: Tree intro + traversals (preorder/inorder/postorder)',main:'Spring Isolation levels: READ_UNCOMMITTED → SERIALIZABLE',mt:'spring',rot:'SQL: Indexes intro — B-tree, primary, secondary, EXPLAIN basics',rt:'sql'},
    {d:'2026-07-04',dsa:'GFG: Tree — Level order (BFS), zigzag',main:'Java ExecutorService, Executors factory (fixed/cached/single/scheduled)',mt:'java',rot:'Hands-on: Submit 10 tasks to fixed pool of 3, observe queueing',rt:'hands-on'},
    {d:'2026-07-05',dsa:'GFG: Tree — Height, Diameter, recursion pattern',main:'Spring Optimistic vs Pessimistic locking, @Version, @Lock',mt:'spring',rot:'SQL: Composite indexes, covering indexes, leftmost prefix',rt:'sql'},
  ]},
  {wn:7,phase:'Phase 2: Core Backend',title:'Tree + BST + CompletableFuture + Boot fundamentals',days:[
    {d:'2026-07-06',dsa:'GFG: Tree — LCA (classic recursion)',main:'Spring @SpringBootApplication, auto-config magic, @EnableAutoConfiguration',mt:'spring',rot:'SQL: EXPLAIN ANALYZE deep, sargable predicates (10 problems)',rt:'sql'},
    {d:'2026-07-07',dsa:'GFG: Tree — Boundary, Top/Bottom/Left/Right view',main:'Java Callable vs Runnable, Future, get() blocks',mt:'java',rot:'Hands-on: Trace auto-config, custom bean overrides',rt:'hands-on'},
    {d:'2026-07-08',dsa:'GFG: Tree — Path Sum problems, max path sum',main:'Spring application.properties vs yml, profiles, @ConfigurationProperties',mt:'spring',rot:'SD: Building block — Idempotency patterns deep',rt:'sd'},
    {d:'2026-07-09',dsa:'GFG: Tree — Symmetric, Same, Invert',main:'Java CompletableFuture intro: thenApply, thenCompose, thenCombine',mt:'java',rot:'Full week rev + self-mock 45min + plan',rt:'revision'},
    {d:'2026-07-10',dsa:'GFG: BST — Insert, Search, Delete',main:'Spring Profiles deep, @Profile, multiple profiles',mt:'spring',rot:'SQL: Transactions — ACID, isolation deep (10 problems)',rt:'sql'},
    {d:'2026-07-11',dsa:'GFG: BST — Validate BST (inorder + range)',main:'Java CompletableFuture deep: exceptionally, handle, allOf, anyOf',mt:'java',rot:'Hands-on: Async pipeline fetchUser → fetchOrders → fetchDetails',rt:'hands-on'},
    {d:'2026-07-12',dsa:'GFG: BST — Kth smallest, LCA in BST',main:'Spring Boot DevTools, CommandLineRunner',mt:'spring',rot:'SQL: MVCC, locking (row/table, shared/exclusive) (10 problems)',rt:'sql'},
  ]},
  {wn:8,phase:'Phase 2: Core Backend',title:'Heap + ConcurrentHashMap + Actuator + First SD designs',days:[
    {d:'2026-07-13',dsa:'GFG: Heap intro + PriorityQueue API + Build heap O(n)',main:'Spring Actuator: health, info, metrics, env, beans, loggers',mt:'spring',rot:'SD: URL Shortener full walkthrough — hashing, DB, cache, scale',rt:'sd'},
    {d:'2026-07-14',dsa:'GFG: Heap — Kth Largest, Top K Frequent',main:'Java ConcurrentHashMap deep (Java 7 vs Java 8), vs Hashtable',mt:'java',rot:'Hands-on: ConcurrentHashMap stress test',rt:'hands-on'},
    {d:'2026-07-15',dsa:'GFG: Heap — Median Data Stream (two heaps), Merge K sorted lists',main:'Spring Custom health indicator, Micrometer, Prometheus metrics',mt:'spring',rot:'SD: Rate Limiter full walkthrough — token bucket, sliding window',rt:'sd'},
    {d:'2026-07-16',dsa:'GFG: Heap — Task Scheduler, Sliding Window Median',main:'Java Atomic classes (AtomicInteger, AtomicLong), CAS basics',mt:'java',rot:'Full week rev + self-mock (URL Shortener whiteboard)',rt:'revision'},
    {d:'2026-07-17',dsa:'GFG: DSA Basics DONE! Start Libraries — Collection Overview',main:'Spring Custom Actuator endpoint, secure endpoints',mt:'spring',rot:'SQL: Normalization (1NF/2NF/3NF), denormalization tradeoffs',rt:'sql'},
    {d:'2026-07-18',dsa:'GFG Libraries — Lambda Expressions deep',main:'Java BlockingQueue (ArrayBlocking, LinkedBlocking, etc.)',mt:'java',rot:'Hands-on: Producer-Consumer with BlockingQueue properly',rt:'hands-on'},
    {d:'2026-07-19',dsa:'GFG Libraries — Streams intro (map, filter, forEach, reduce)',main:'Spring Connection pooling: HikariCP defaults, tuning basics',mt:'spring',rot:'SQL: Schema design — surrogate vs natural keys, audit, soft deletes',rt:'sql'},
  ]},
  {wn:9,phase:'Phase 2: Core Backend',title:'Streams + Spring Security + first interviews start!',days:[
    {d:'2026-07-20',dsa:'GFG Libraries — Streams Collectors deep (groupingBy, partitioningBy, toMap)',main:'Spring Security intro: filter chain, SecurityContext, UserDetailsService',mt:'spring',rot:'SD: Notification Service (queue-based, retry, DLQ)',rt:'sd'},
    {d:'2026-07-21',dsa:'GFG Libraries — ArrayList + LinkedList',main:'Java Lock interface, ReentrantLock, ReadWriteLock',mt:'java',rot:'Hands-on: Form-based auth, in-memory users, BCrypt',rt:'hands-on'},
    {d:'2026-07-22',dsa:'GFG Libraries — Stack + Queue (Java specific)',main:'Spring Security JWT structure (header.payload.signature), access vs refresh',mt:'spring',rot:'SQL: NoSQL awareness — MongoDB basics + Cassandra (5 problems)',rt:'sql'},
    {d:'2026-07-23',dsa:'GFG Libraries — Deque + PriorityQueue deep',main:'Java StampedLock, Condition variables',mt:'java',rot:'Full week rev + self-mock + Apply to first 3 easy companies',rt:'revision'},
    {d:'2026-07-24',dsa:'GFG Libraries — HashSet + LinkedHashSet',main:'Spring Security JWT auth filter (OncePerRequestFilter)',mt:'spring',rot:'SQL: Redis basics (data types, TTL, pub/sub, use cases)',rt:'sql'},
    {d:'2026-07-25',dsa:'GFG Libraries — TreeSet, NavigableSet methods',main:'Java CountDownLatch, CyclicBarrier, Semaphore, Phaser',mt:'java',rot:'Hands-on: Full JWT auth on /api/orders, 401 if no token',rt:'hands-on'},
    {d:'2026-07-26',dsa:'GFG Libraries — HashMap + LinkedHashMap deep (internals)',main:'Spring Security @PreAuthorize, @PostAuthorize, @Secured',mt:'spring',rot:'SD: Authentication patterns (JWT, OAuth2, session)',rt:'sd'},
  ]},
  {wn:10,phase:'Phase 2: Core Backend',title:'Libraries finish + Microservices start',days:[
    {d:'2026-07-27',dsa:'GFG Libraries — TreeMap, NavigableMap',main:'Spring CORS, CSRF for stateless, SecurityFilterChain',mt:'spring',rot:'Hands-on: Role-based access (ADMIN vs USER), test both',rt:'hands-on'},
    {d:'2026-07-28',dsa:'GFG Libraries — String class (Java methods deep)',main:'Java ThreadLocal + memory leak pitfalls in pools',mt:'java',rot:'SD: E-commerce Order Service (Walmart-style)',rt:'sd'},
    {d:'2026-07-29',dsa:'GFG Libraries — Comparator & Comparable',main:'Spring Microservices vs monolith, service discovery (Eureka concept)',mt:'spring',rot:'Hands-on: Split monolith into User + Order Service',rt:'hands-on'},
    {d:'2026-07-30',dsa:'GFG Libraries — Arrays Class + Collections class',main:'Java Race conditions, deadlocks (code + break), livelock, starvation',mt:'java',rot:'Full week rev + self-mock (E-commerce design)',rt:'revision'},
    {d:'2026-07-31',dsa:'GFG Libraries — Sorting (Java, custom comparators)',main:'Spring API Gateway (Spring Cloud Gateway), routes, filters',mt:'spring',rot:'SQL: Stored procs, functions, triggers (awareness)',rt:'sql'},
    {d:'2026-08-01',dsa:'GFG: Libraries DONE! Start DSA Advanced — Mathematics intro',main:'Java Generics deep: type erasure, why new T[] fails, PECS examples',mt:'java',rot:'Hands-on: Gateway routing to User + Order services',rt:'hands-on'},
    {d:'2026-08-02',dsa:'GFG Advanced — Bit Magic essentials (XOR tricks, single number)',main:'Spring Inter-service communication: RestTemplate, WebClient, Feign',mt:'spring',rot:'SQL: Views + materialized views, refresh strategies',rt:'sql'},
  ]},
  {wn:11,phase:'Phase 2: Core Backend',title:'Advanced Arrays + Kafka start + Resilience4j',days:[
    {d:'2026-08-03',dsa:'GFG Adv: Arrays — sliding window patterns',main:'Spring OpenFeign declarative clients, interceptors',mt:'spring',rot:'Hands-on: Feign client from Order → User service',rt:'hands-on'},
    {d:'2026-08-04',dsa:'GFG Adv: Arrays — prefix sum advanced + difference arrays',main:'Java CompletableFuture advanced (combining N futures)',mt:'java',rot:'SD: Payment Service (PayPal-style)',rt:'sd'},
    {d:'2026-08-05',dsa:'GFG Adv: Searching — binary search on answer (deep)',main:'Spring Resilience4j: Circuit Breaker, Retry, Timeout, Bulkhead',mt:'spring',rot:'Hands-on: Resilience4j circuit breaker on Feign client',rt:'hands-on'},
    {d:'2026-08-06',dsa:'GFG Adv: Sorting — count inversions, merge sort variations',main:'Java Part C start: JVM architecture: classloaders, runtime data areas',mt:'java',rot:'Full week rev + self-mock (Payment Service design)',rt:'revision'},
    {d:'2026-08-07',dsa:'GFG Adv: Strings — KMP intro, pattern matching',main:'Spring Kafka intro: broker/topic/partition/producer/consumer/CG/offset',mt:'spring',rot:'SQL: DB-specific features (Postgres JSONB, MySQL ON DUPLICATE)',rt:'sql'},
    {d:'2026-08-08',dsa:'GFG Adv: Strings — anagram patterns, palindromes',main:'Java JVM memory areas: Heap, Stack, Metaspace, PC Register',mt:'java',rot:'Hands-on: Local Kafka (Docker), @KafkaListener on OrderCreated',rt:'hands-on'},
    {d:'2026-08-09',dsa:'GFG Adv: Strings — Longest Palindromic Substring',main:'Spring Kafka Producer (KafkaTemplate, acks, retries, idempotent)',mt:'spring',rot:'SQL: Migrations (Flyway, Liquibase, naming conventions)',rt:'sql'},
  ]},
  {wn:12,phase:'Phase 2: Core Backend',title:'GC + Kafka consumer + Caching/Redis',days:[
    {d:'2026-08-10',dsa:'GFG Adv: LL — Reverse in K groups, flatten LL',main:'Java GC algorithms: Serial, Parallel, CMS, G1, ZGC, Shenandoah',mt:'java',rot:'SD: Food Delivery (Swiggy-style) — order splitting, location-based',rt:'sd'},
    {d:'2026-08-11',dsa:'GFG Adv: LL — clone with random pointer, LRU deep',main:'Spring Kafka Consumer: manual offset commit, max poll, rebalancing',mt:'spring',rot:'Hands-on: Manual offset commit, simulate consumer crash',rt:'hands-on'},
    {d:'2026-08-12',dsa:'GFG Adv: Stack — monotonic stack patterns deep',main:'Java GC deep: Minor vs Major vs Full GC, GC roots',mt:'java',rot:'SD: Database choice (SQL vs NoSQL when)',rt:'sd'},
    {d:'2026-08-13',dsa:'GFG Adv: Stack — expression evaluation, infix-postfix',main:'Spring Kafka error handling: DefaultErrorHandler, retry topics, DLQ',mt:'spring',rot:'Full week rev + self-mock (Food Delivery design)',rt:'revision'},
    {d:'2026-08-14',dsa:'GFG Adv: Queue & Deque — sliding window deep',main:'Java OOM types (Heap, Metaspace, GC overhead, Direct buffer)',mt:'java',rot:'SQL: Backup/recovery, HA awareness, point-in-time recovery',rt:'sql'},
    {d:'2026-08-15',dsa:'GFG Adv: Queue — implement using arrays, design problems',main:'Spring Redis basics, RedisTemplate, @Cacheable, @CacheEvict',mt:'spring',rot:'Hands-on: Wire DLQ for failed Kafka messages, poison-pill test',rt:'hands-on'},
    {d:'2026-08-16',dsa:'GFG Adv: Tree advanced — Construct from preorder/inorder',main:'Java JVM tuning flags (-Xms, -Xmx, -Xss, GC flags)',mt:'java',rot:'SQL: Security — SQL injection, prepared statements, RLS',rt:'sql'},
  ]},
  {wn:13,phase:'Phase 3: Distributed',title:'Tree/BST adv + JVM diagnostics + Docker start',days:[
    {d:'2026-08-17',dsa:'GFG Adv: Tree — Construct from inorder+postorder, serialize/deserialize',main:'Java Part C: Production diagnostics: thread dump (jstack)',mt:'java',rot:'Cloud start: Docker basics: container vs VM, Dockerfile',rt:'cloud'},
    {d:'2026-08-18',dsa:'GFG Adv: Tree — Vertical order, all paths',main:'Spring Boot Internals: auto-config flow, spring.factories',mt:'spring',rot:'Hands-on: Dockerfile for Spring Boot, multi-stage build',rt:'hands-on'},
    {d:'2026-08-19',dsa:'GFG Adv: Tree — Burning tree, time to burn from target',main:'Java Heap dump analysis (jmap, MAT), memory leaks',mt:'java',rot:'Cloud Docker Compose: services, volumes, networks, healthchecks',rt:'cloud'},
    {d:'2026-08-20',dsa:'GFG Adv: BST — Inorder successor/predecessor, fix swapped',main:'Spring Custom auto-config, @ConditionalOnXxx, my-logging-starter',mt:'spring',rot:'Full week rev + self-mock (Spring Boot startup flow whiteboard)',rt:'revision'},
    {d:'2026-08-21',dsa:'GFG Adv: BST — Convert sorted array to BST, merge 2 BSTs',main:'Java JFR (Java Flight Recorder), async-profiler',mt:'java',rot:'Hands-on: Compose for app + Postgres + Redis + Kafka',rt:'hands-on'},
    {d:'2026-08-22',dsa:'GFG Adv: Heap advanced — design problems with heap',main:'Spring Custom Spring Boot starter (publish to local repo)',mt:'spring',rot:'Cloud K8s intro: Pods, ReplicaSets, Deployments, Services',rt:'cloud'},
    {d:'2026-08-23',dsa:'GFG Adv: Heap — Sliding window median (deep), median stream',main:'Java OutOfMemoryError types + debugging methodology',mt:'java',rot:'SQL deep: Query optimization patterns',rt:'sql'},
  ]},
  {wn:14,phase:'Phase 3: Distributed',title:'Graph start + Modern Java + K8s deep + LLD intro',days:[
    {d:'2026-08-24',dsa:'GFG Adv: Graph intro + representations (adj list vs matrix) + BFS',main:'Java Part D start: Java 9: List.of, Map.of, private interface methods',mt:'java',rot:'SD: Ride-Sharing (Uber-like) — matching, geo-index, surge',rt:'sd'},
    {d:'2026-08-25',dsa:'GFG Adv: Graph — DFS (recursive + iterative), path tracking',main:'Spring Scheduling: @Scheduled (cron), @Async, TaskExecutor',mt:'spring',rot:'Cloud K8s: ConfigMaps, Secrets, namespaces, RBAC basics',rt:'cloud'},
    {d:'2026-08-26',dsa:'GFG Adv: Graph — Connected components (islands variants)',main:'Java Java 10-11: var, HttpClient, isBlank/strip/lines',mt:'java',rot:'Hands-on: Deploy Spring Boot to Minikube/Kind, kubectl basics',rt:'hands-on'},
    {d:'2026-08-27',dsa:'GFG Adv: Graph — Cycle detection (undirected DFS, directed DFS+rec stack)',main:'Spring Testing: @SpringBootTest, @WebMvcTest, @DataJpaTest, slice tests',mt:'spring',rot:'Full week rev + first external mock (Pramp/friend, 1hr Java)',rt:'mock'},
    {d:'2026-08-28',dsa:'GFG Adv: Graph — Bipartite check (BFS coloring)',main:'Java Java 14-17: switch expressions, text blocks, records',mt:'java',rot:'SD: News Feed / Timeline — fanout strategies, ranking',rt:'sd'},
    {d:'2026-08-29',dsa:'GFG Adv: Graph — Topological Sort (Kahn\'s BFS + DFS-based)',main:'Spring MockMvc deep + @MockBean + TestContainers',mt:'spring',rot:'Hands-on: Liveness/Readiness probes in K8s deployment',rt:'hands-on'},
    {d:'2026-08-30',dsa:'GFG Adv: Graph — Course Schedule (topo sort applied)',main:'Java Java 17: sealed classes, pattern matching for instanceof',mt:'java',rot:'Cloud K8s: Service types + HPA',rt:'cloud'},
  ]},
  {wn:15,phase:'Phase 3: Distributed',title:'Graph advanced + Virtual Threads ⭐ + AWS + LLD',days:[
    {d:'2026-08-31',dsa:'GFG Adv: Graph — Dijkstra (PQ-based shortest path)',main:'Java Part D: Virtual Threads (Java 21 / Project Loom) intro ⭐',mt:'java',rot:'SD: Distributed Cache / Key-Value Store — consistent hashing',rt:'sd'},
    {d:'2026-09-01',dsa:'GFG Adv: Graph — Bellman-Ford (negative edges)',main:'Spring Boot 3.2: spring.threads.virtual.enabled=true',mt:'spring',rot:'Cloud AWS: EC2, S3, RDS, ELB, CloudWatch, IAM',rt:'cloud'},
    {d:'2026-09-02',dsa:'GFG Adv: Graph — Floyd-Warshall (all-pairs shortest)',main:'Java Virtual Threads deep: structured concurrency ⭐',mt:'java',rot:'Hands-on: Enable virtual threads, benchmark vs platform threads',rt:'hands-on'},
    {d:'2026-09-03',dsa:'GFG Adv: Graph — Word Ladder, Islands variations',main:'Spring Modern HTTP clients: RestClient (3.2+) and JdbcClient',mt:'spring',rot:'Full week rev + 2nd external mock (Spring focus, 1hr)',rt:'mock'},
    {d:'2026-09-04',dsa:'GFG Adv: Graph — Minimum Spanning Tree (Prim\'s, Kruskal\'s)',main:'Java Java 21: pattern matching for switch, record patterns',mt:'java',rot:'System Design LLD start — UML basics, class diagrams',rt:'sd'},
    {d:'2026-09-05',dsa:'GFG Adv: Graph — Clone Graph (DFS/BFS with HashMap)',main:'Spring Modulith intro (modular monolith pattern)',mt:'spring',rot:'Cloud AWS: SQS, ECS, EKS, Fargate, ECR + CI/CD flow',rt:'cloud'},
    {d:'2026-09-06',dsa:'GFG Adv: Graph — Network Delay Time, Min cost path',main:'Java Reactive awareness: Mono/Flux vs virtual threads tradeoffs',mt:'java',rot:'LLD: Parking Lot — full walkthrough with classes',rt:'sd'},
  ]},
  {wn:16,phase:'Phase 3: Distributed',title:'DP start + Design Patterns + 2nd LLD',days:[
    {d:'2026-09-07',dsa:'GFG Adv: DP intro — Fibonacci memoization, climbing stairs',main:'Java Part E start: SOLID Principles deep (refactoring examples)',mt:'java',rot:'LLD: Splitwise — full walkthrough',rt:'sd'},
    {d:'2026-09-08',dsa:'GFG Adv: DP — House Robber I & II (linear DP)',main:'Spring Custom auto-config + @ConditionalOnProperty (revise)',mt:'spring',rot:'Cloud GitHub Actions / Jenkins CI/CD pipeline basics',rt:'cloud'},
    {d:'2026-09-09',dsa:'GFG Adv: DP — Coin Change (min + count ways)',main:'Java Patterns: Creational: Singleton (4 impls), Factory, Builder',mt:'java',rot:'Hands-on: CI/CD pipeline draft (build → test → docker push → deploy)',rt:'hands-on'},
    {d:'2026-09-10',dsa:'GFG Adv: DP — LIS (O(n²) + O(n log n))',main:'Spring Spring AI awareness — ChatClient, embeddings, RAG',mt:'spring',rot:'Full week rev + 3rd external mock (SD + LLD, 90min)',rt:'mock'},
    {d:'2026-09-11',dsa:'GFG Adv: DP — LCS (2D DP), edit distance',main:'Java Patterns: Structural: Adapter, Decorator, Proxy, Facade',mt:'java',rot:'SD: Distributed locks (Redis/ZooKeeper)',rt:'sd'},
    {d:'2026-09-12',dsa:'GFG Adv: DP — 0/1 Knapsack + space optimization',main:'Spring Observability deep: Micrometer + Prometheus + Grafana',mt:'spring',rot:'Hands-on: Distributed tracing in microservices (Sleuth/OpenTelemetry)',rt:'hands-on'},
    {d:'2026-09-13',dsa:'GFG Adv: DP — Subset Sum, Partition Equal Subset',main:'Java Patterns: Behavioral: Strategy, Observer, Template, Command',mt:'java',rot:'Behavioral start: Draft first 4 STAR stories',rt:'behavioral'},
  ]},
  {wn:17,phase:'Phase 3: Distributed',title:'DP grid + 🚨 Genpact last day (Sep 19) + Full-loop sims',days:[
    {d:'2026-09-14',dsa:'GFG Adv: DP — Unique Paths I/II, Min Path Sum, Triangle',main:'Java Part E: DRY/KISS/YAGNI + code smells + refactoring',mt:'java',rot:'STAR story #5-6 (production incident, leadership)',rt:'behavioral'},
    {d:'2026-09-15',dsa:'GFG Adv: DP — Max Product Subarray, Buy/Sell with cooldown',main:'Spring GraalVM Native Image + Spring Native awareness',mt:'spring',rot:'Hands-on: CRaC awareness reading',rt:'hands-on'},
    {d:'2026-09-16',dsa:'GFG Adv: DP — Longest Palindromic Subseq, palindromic substring DP',main:'Java Part E: Logging deep: SLF4J + Logback, MDC, correlation IDs',mt:'java',rot:'Full-loop simulation #1 (3hr) — Java + Spring + 1 SD + 5 DSA',rt:'mock'},
    {d:'2026-09-17',dsa:'GFG Adv: DP final — Word Break, mixed DP problems',main:'Spring HikariCP tuning, multi-datasource, read replicas',mt:'spring',rot:'Full week rev + STAR story #7-8 + plan',rt:'revision'},
    {d:'2026-09-18',dsa:'GFG Adv: Greedy intro — Activity Selection, fractional knapsack',main:'Java Part E: Build Tools: Maven lifecycle, scopes, plugins',mt:'java',rot:'STAR story #9-10 + per-company prep doc (Walmart, PayPal)',rt:'behavioral'},
    {d:'2026-09-19',dsa:'GFG Adv: Greedy — Job Sequencing, N meetings in one room',main:'Spring Connection pool deep, slow query handling',mt:'spring',rot:'🚨 GENPACT LAST WORKING DAY · light day (~3h study + handover)',rt:'revision'},
    {d:'2026-09-20',dsa:'GFG Adv: Greedy — Huffman intro, minimum platforms',main:'Java Part E: Maven vs Gradle, dependency conflicts',mt:'java',rot:'Hands-on: Final mocks scheduling, weak areas list',rt:'hands-on'},
  ]},
  {wn:18,phase:'Phase 3: Distributed',title:'🚀 Full-time prep mode + Backtracking + heavy mocks',days:[
    {d:'2026-09-21',dsa:'GFG Adv: Greedy — Min coins, Gas Station, Jump Game',main:'Java Part F start: JUnit 5 (lifecycle, parameterized, assertions)',mt:'java',rot:'Mock 4 (External, 90min, Java + Spring deep)',rt:'mock'},
    {d:'2026-09-22',dsa:'GFG Adv: Backtracking — N-Queens (revisit deep), Sudoku Solver',main:'Spring Profiles deep, Vault integration awareness',mt:'spring',rot:'SD: Distributed messaging system (Kafka deep design)',rt:'sd'},
    {d:'2026-09-23',dsa:'GFG Adv: Backtracking — Combination Sum I/II, Permutations',main:'Java Part F: Mockito (mock/spy/inject, ArgumentCaptor, verify)',mt:'java',rot:'Hands-on: 20 unit tests for service layer with Mockito',rt:'hands-on'},
    {d:'2026-09-24',dsa:'GFG Adv: Backtracking — Word Search, Palindrome Partitioning',main:'Spring Reactive (Mono/Flux conceptual, MVC vs WebFlux)',mt:'spring',rot:'Full week rev + Mock 5 (Behavioral, 60min)',rt:'mock'},
    {d:'2026-09-25',dsa:'GFG Adv: Mathematics — GCD, sieve of Eratosthenes',main:'Java Part F: TDD basics, AAA pattern, JaCoCo coverage',mt:'java',rot:'SD: Real-time chat app (presence + history + WebSocket)',rt:'sd'},
    {d:'2026-09-26',dsa:'GFG Adv: Bit Magic — count set bits, single number variants',main:'Spring WebSocket basics + STOMP awareness',mt:'spring',rot:'Hands-on: Build basic WebSocket chat endpoint',rt:'hands-on'},
    {d:'2026-09-27',dsa:'GFG Adv: Trie intro — insert, search, prefix match',main:'Java Part F: Test coverage philosophy, integration vs unit',mt:'java',rot:'Mock 6 (Tech + LLD, 90min)',rt:'mock'},
  ]},
  {wn:19,phase:'Phase 3: Distributed',title:'Trie + Disjoint Set + Heavy interview cycle',days:[
    {d:'2026-09-28',dsa:'GFG Adv: Trie — autocomplete system, search suggestions',main:'Java JVM tuning practical + container-aware JVM',mt:'java',rot:'Real interview (per opportunity schedule)',rt:'mock'},
    {d:'2026-09-29',dsa:'GFG Adv: Trie — Word Search II, longest word in dictionary',main:'Spring Saga pattern (orchestration vs choreography)',mt:'spring',rot:'SD: Search autocomplete (Trie + caching)',rt:'sd'},
    {d:'2026-09-30',dsa:'GFG Adv: Disjoint Set — Union-Find, path compression',main:'Java Reflection deep (where Spring uses it), dynamic proxies',mt:'java',rot:'Hands-on: Saga for Order → Payment → Inventory',rt:'hands-on'},
    {d:'2026-10-01',dsa:'GFG Adv: Disjoint Set — provinces, redundant connection',main:'Spring File handling (MultipartFile), JavaMailSender',mt:'spring',rot:'Full week rev + Mock 7 (Full loop, 3hr)',rt:'mock'},
    {d:'2026-10-02',dsa:'GFG Adv: Disjoint Set DONE — DSA Advanced 90% complete!',main:'Java Modules (Java 9 JPMS awareness), Java Security basics',mt:'java',rot:'SD: Stock exchange / trading system (LLD + HLD hybrid)',rt:'sd'},
    {d:'2026-10-03',dsa:'GFG: Mixed Hard problems revision (top 10 across DSA Adv)',main:'Spring i18n basics, MessageSource, locale resolution',mt:'spring',rot:'Real interview cycle continues',rt:'mock'},
    {d:'2026-10-04',dsa:'GFG: Mixed graph + DP problems (5 each)',main:'Java Part F finish: TestContainers, WireMock',mt:'java',rot:'Hands-on: TestContainers integration tests',rt:'hands-on'},
  ]},
  {wn:20,phase:'Phase 3: Distributed',title:'Phase 3 close + Comprehensive mocks',days:[
    {d:'2026-10-05',dsa:'DSA revision: Top 20 problems across all topics (timed)',main:'Java REV: Concurrency deep dive (2026 focus areas)',mt:'java',rot:'Mock 8 (External, System Design, 90min)',rt:'mock'},
    {d:'2026-10-06',dsa:'DSA revision: Top 10 graph + top 10 DP problems',main:'Spring REV: Virtual threads + Spring Boot 3.x patterns',mt:'spring',rot:'SD: News feed deep redesign (weak area patch)',rt:'sd'},
    {d:'2026-10-07',dsa:'DSA revision: Linked List + Tree patterns mix',main:'Java Production debugging scenarios (OOM, thread dump)',mt:'java',rot:'Hands-on: Stress test microservices with concurrent requests',rt:'hands-on'},
    {d:'2026-10-08',dsa:'DSA revision: Hard problems from earlier weeks (graph/DP)',main:'Spring Microservices patterns deep — bulkhead, circuit, retries',mt:'spring',rot:'Full week rev + Mock 9 (Full loop + Behavioral, 3hr)',rt:'mock'},
    {d:'2026-10-09',dsa:'DSA revision: Patterns review (sliding window, two pointers, monotonic)',main:'Java Memory leak debugging case studies',mt:'java',rot:'Behavioral: STAR story #11-12 (tradeoffs, recent learning)',rt:'behavioral'},
    {d:'2026-10-10',dsa:'DSA revision: System design + DSA integration (LRU, Tree variants)',main:'Spring Boot startup deep — phases, listeners, failure analyzers',mt:'spring',rot:'Phase 3 Retro — strong/weak, plan Phase 4',rt:'revision'},
  ]},
  {wn:21,phase:'Phase 4: Polish + Offer',title:'Pure mocking + weak topic patching + active interviews',days:[
    {d:'2026-10-12',dsa:'Top 5 array + LL problems (40min each)',main:'Java REV: Collections + HashMap internals + ConcurrentHashMap',mt:'rev',rot:'Mock 10 (Java focused, 90min)',rt:'mock'},
    {d:'2026-10-13',dsa:'Top 5 tree + BST problems',main:'Spring REV: Lifecycle deep, AOP, transactions',mt:'rev',rot:'Real interview OR Walmart-specific prep',rt:'mock'},
    {d:'2026-10-14',dsa:'Top 5 graph + DP problems',main:'Java REV: Concurrency: threads, sync, volatile, CompletableFuture, VT',mt:'rev',rot:'Mock 11 (System Design, 90min)',rt:'mock'},
    {d:'2026-10-15',dsa:'Top 5 hashing + sliding window patterns',main:'Spring REV: Boot + JPA + Security flow end-to-end',mt:'rev',rot:'Full week retro + STAR story drilling (12 stories × 5min)',rt:'revision'},
    {d:'2026-10-16',dsa:'Top 5 stack + queue + monotonic patterns',main:'Java REV: JVM (memory, GC, OOM scenarios)',mt:'rev',rot:'Real interview OR HR research (salary, RSU, joining)',rt:'mock'},
    {d:'2026-10-17',dsa:'Top 5 heap + greedy problems',main:'Spring REV: Microservices: discovery, gateway, resilience4j, kafka',mt:'rev',rot:'Mock 12 (Behavioral + SD hybrid, 90min)',rt:'mock'},
    {d:'2026-10-18',dsa:'Top 10 mixed problems (timed, no help)',main:'Java REV: Modern Java (records, sealed, pattern matching, VT)',mt:'rev',rot:'Behavioral: refine top 6 stories with feedback',rt:'behavioral'},
  ]},
  {wn:22,phase:'Phase 4: Polish + Offer',title:'Final SD designs + Spring deep revision',days:[
    {d:'2026-10-19',dsa:'DSA practice: tree + graph + hard mix',main:'Spring REV: Custom Boot starters + auto-config flow',mt:'rev',rot:'SD: Twitter Search (elasticsearch + caching)',rt:'sd'},
    {d:'2026-10-20',dsa:'DSA practice: DP hard problems + recursion deep',main:'Java REV: Production diagnostics — thread dumps, heap dumps, JFR',mt:'rev',rot:'Mock 13 (Full loop 3hr — Java + Spring + SD + Behavioral)',rt:'mock'},
    {d:'2026-10-21',dsa:'DSA practice: LL + array hard problems',main:'Spring REV: Observability + distributed tracing',mt:'rev',rot:'SD: Distributed file storage (S3/HDFS-like)',rt:'sd'},
    {d:'2026-10-22',dsa:'DSA practice: top weak topic from mocks',main:'Java REV: Design patterns + SOLID refactoring',mt:'rev',rot:'Full week retro + Mock retro + plan interview schedule',rt:'revision'},
    {d:'2026-10-23',dsa:'DSA practice: company-specific patterns (LC Walmart/PayPal tags)',main:'Spring REV: Testing (MockMvc, slice, TestContainers)',mt:'rev',rot:'Real interview OR PayPal-specific prep',rt:'mock'},
    {d:'2026-10-24',dsa:'DSA: 5 hard problems timed (45min each)',main:'Java REV: Generics + Streams API deep (custom collectors)',mt:'rev',rot:'Mock 14 (Tech deep + LLD, 90min)',rt:'mock'},
    {d:'2026-10-25',dsa:'DSA: review top patterns',main:'Spring REV: Caching strategies (Redis deep) + invalidation',mt:'rev',rot:'Behavioral: HR/manager drilling (5 question types)',rt:'behavioral'},
  ]},
  {wn:23,phase:'Phase 4: Polish + Offer',title:'Interview surge + Trade-off articulation',days:[
    {d:'2026-10-26',dsa:'DSA: mixed medium (LC), 4 problems in 2hr',main:'Java REV: Final pass on weakest 5 topics',mt:'rev',rot:'Mock 15 (Stranger via Pramp — random)',rt:'mock'},
    {d:'2026-10-27',dsa:'DSA: revisit unsolved hard problems',main:'Spring REV: Final pass on Spring weakest topics',mt:'rev',rot:'Real interview OR negotiation prep: target CTC ranges',rt:'mock'},
    {d:'2026-10-28',dsa:'DSA: company tag practice (Walmart arrays on LC)',main:'Java REV: Threading hard problems',mt:'rev',rot:'SD: Live streaming (Twitch/YouTube) — full design',rt:'sd'},
    {d:'2026-10-29',dsa:'DSA: company tag practice (PayPal/Paytm SQL + DSA)',main:'Spring REV: Final read of Boot internals docs',mt:'rev',rot:'Full week retro + write down weaknesses still felt',rt:'revision'},
    {d:'2026-10-30',dsa:'DSA: trie + DP combined',main:'Java REV: Code-review pass on all project commits',mt:'rev',rot:'Real interview + post-interview reflection notes',rt:'mock'},
    {d:'2026-10-31',dsa:'DSA: hard problems revisit (top 5 weak from mocks)',main:'Spring REV: Reactive vs Virtual Threads + WebFlux',mt:'rev',rot:'Mock 16 (Full loop, 3hr — final loop simulation)',rt:'mock'},
    {d:'2026-11-01',dsa:'DSA: SQL + DSA combined (find Nth, sliding window)',main:'Java REV: Last revision pass: 25-Q rapid quiz',mt:'rev',rot:'Tradeoff articulation drills: 10 classic tradeoffs',rt:'behavioral'},
  ]},
  {wn:24,phase:'Phase 4: Polish + Offer',title:'Offer negotiation begins',days:[
    {d:'2026-11-02',dsa:'DSA: 20-min rapid review (patterns talk-through)',main:'Java + Spring REV: Walkthrough notebook end-to-end',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2026-11-03',dsa:'DSA: light, revisit weakest 2 topics (1 problem each)',main:'Java REV: Final weak-topic patch',mt:'rev',rot:'Mock 17 (Behavioral focused, full HM round)',rt:'mock'},
    {d:'2026-11-04',dsa:'DSA: 1 medium problem (timed, walkthrough)',main:'Spring REV: Company tech stack alignment',mt:'rev',rot:'SD: company-specific design (Walmart inventory, PayPal payments)',rt:'sd'},
    {d:'2026-11-05',dsa:'DSA: rest mode (revise notes only)',main:'REV: Compile final cheat sheets (1-pager per topic)',mt:'rev',rot:'Full week retro + negotiate pending offers',rt:'revision'},
    {d:'2026-11-06',dsa:'DSA: top 3 problems from mock failures',main:'Java REV: 30-min quiz · 30 Q&A on weak areas',mt:'rev',rot:'Real interview OR final-round prep',rt:'mock'},
    {d:'2026-11-07',dsa:'DSA: 2 graph + 2 DP medium problems',main:'Spring REV: Boot startup flow end-to-end + observability',mt:'rev',rot:'Mock 18 (Tech + SD final, 90min)',rt:'mock'},
    {d:'2026-11-08',dsa:'DSA: light · LeetCode tagged for last 5 days',main:'Java + Spring REV: Final weak topic from mocks',mt:'rev',rot:'Behavioral: 12 STAR stories — final polish',rt:'behavioral'},
  ]},
  {wn:25,phase:'Phase 4: Polish + Offer',title:'Acceptance phase + Cushion for delayed loops',days:[
    {d:'2026-11-09',dsa:'DSA: 1 hard problem (timed, full attempt)',main:'Final Java cheat sheet + interview Q&A pack',mt:'rev',rot:'Real interview / negotiation call',rt:'mock'},
    {d:'2026-11-10',dsa:'DSA: revise notes + rapid pattern recognition',main:'Final Spring cheat sheet + Q&A pack',mt:'rev',rot:'Mock 19 (any weak area, 90min)',rt:'mock'},
    {d:'2026-11-11',dsa:'DSA: 30-min warm-up only (no new content)',main:'Final SD cheat sheet + tradeoff articulation reps',mt:'rev',rot:'SD: final review of 10 designs (1-page each)',rt:'sd'},
    {d:'2026-11-12',dsa:'DSA: light · weakest pattern revisit',main:'Behavioral: 12 STAR stories rapid-fire (1min each)',mt:'rev',rot:'Full week retro + decision: which offer to accept',rt:'revision'},
    {d:'2026-11-13',dsa:'DSA: 2 medium problems (relaxed pace)',main:'Java REV: Coffee-table revision: scan everything',mt:'rev',rot:'Real interview / counter-offer discussion',rt:'mock'},
    {d:'2026-11-14',dsa:'DSA: 1 hard problem timed',main:'Spring REV: Coffee-table revision: scan everything',mt:'rev',rot:'Mock 20 (Final mock, 90min, any topic)',rt:'mock'},
    {d:'2026-11-15',dsa:'DSA: full revision day · no new problems',main:'REV: Final notes consolidation, single PDF',mt:'rev',rot:'HR negotiation tactics: counter, hold, decline drafts',rt:'behavioral'},
  ]},
  {wn:26,phase:'Phase 4: Polish + Offer',title:'Final interviews + final offer push',days:[
    {d:'2026-11-16',dsa:'DSA: warm-up only · 30min · 1 easy problem',main:'REV: Just sleep & light revision',mt:'rev',rot:'Real interview / final-round support',rt:'mock'},
    {d:'2026-11-17',dsa:'DSA: warm-up only',main:'REV: Specific topic per next-day interview',mt:'rev',rot:'Real interview · per-company prep doc',rt:'mock'},
    {d:'2026-11-18',dsa:'DSA: 1 problem light',main:'REV: Mock retro from week',mt:'rev',rot:'Real interview / manager round',rt:'mock'},
    {d:'2026-11-19',dsa:'DSA: rest mode',main:'REV: Behavioral STAR drilling',mt:'rev',rot:'Strategy session: which offer to choose',rt:'behavioral'},
    {d:'2026-11-20',dsa:'DSA: warm-up',main:'REV: Whatever feels weakest 24h before',mt:'rev',rot:'Real interview / culture round',rt:'mock'},
    {d:'2026-11-21',dsa:'DSA: warm-up',main:'REV: Light · sleep well',mt:'rev',rot:'Real interview / final round',rt:'mock'},
    {d:'2026-11-22',dsa:'DSA: rest',main:'REV: Compile written cheat sheet per company',mt:'rev',rot:'Negotiation calls · counter-offer drafts',rt:'behavioral'},
  ]},
  {wn:27,phase:'Phase 4: Polish + Offer',title:'Negotiation final stretch + onboarding prep',days:[
    {d:'2026-11-23',dsa:'DSA: 1 problem light or rest',main:'REV: Stand by for remaining interviews',mt:'rev',rot:'Final-round support',rt:'mock'},
    {d:'2026-11-24',dsa:'DSA: rest',main:'REV: Sleep & maintenance',mt:'rev',rot:'Offer negotiation final call · accept/decline',rt:'mock'},
    {d:'2026-11-25',dsa:'DSA: rest',main:'REV: Onboarding research (new company stack)',mt:'rev',rot:'Compare offers final spreadsheet',rt:'revision'},
    {d:'2026-11-26',dsa:'DSA: rest',main:'REV: Onboarding tech prep (new company\'s stack)',mt:'rev',rot:'Full retro + plan onboarding',rt:'revision'},
    {d:'2026-11-27',dsa:'DSA: rest',main:'REV: Tech stack research for accepted company',mt:'rev',rot:'Resignation/notice prep (if needed)',rt:'revision'},
    {d:'2026-11-28',dsa:'DSA: rest',main:'REV: Tech stack research continues',mt:'rev',rot:'Joining bonus / RSU final negotiation',rt:'revision'},
    {d:'2026-11-29',dsa:'DSA: rest',main:'REV: Begin onboarding course (free week!)',mt:'rev',rot:'Sign offer · close offer letters · notify others',rt:'revision'},
  ]},
  {wn:27.5,phase:'Phase 4: Polish + Offer',title:'Buffer / decompress / onboarding ramp-up',isBuffer:true,days:[
    {d:'2026-11-30',activity:'Onboarding tech research (new company stack) · light DSA review'},
    {d:'2026-12-01',activity:'Update LinkedIn, resume · notify network'},
    {d:'2026-12-02',activity:'Decompress day · process the journey · take stock'},
    {d:'2026-12-03',activity:'Onboarding prep for new role · meet recruiter for joining logistics'},
    {d:'2026-12-04',activity:'🎉 FINAL DAY OF PLAN · OFFER LOCKED · ONBOARDING NEXT'},
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
  return `
    ${slotBlock('A','DSA · 2h','dsa',day.dsa,'dsa',day.d,'a',checks.a)}
    ${slotBlock('B',`MAIN · 2.5h`,day.mt,day.main,day.mt,day.d,'b',checks.b)}
    ${slotBlock('C','ROTATING · 1.5h',day.rt,day.rot,day.rt,day.d,'c',checks.c)}`;
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
}

function renderWeekStrip(week, today) {
  return `<div class="week-strip">${week.days.map(d => {
    const dn = dayName(d.d);
    const dateNum = d.d.split('-')[2];
    const isToday = d.d === today;
    const checks = STATE.dailyChecks[d.d] || {};
    const done = [checks.a, checks.b, checks.c].filter(Boolean).length;
    let cls = isToday ? ' today' : (done === 3 ? ' done-day' : '');
    return `<div class="wday${cls}" title="${d.dsa||d.activity||''}">
      <div class="wday-name">${dn}</div>
      <div class="wday-date">${dateNum}</div>
      <div class="wday-dots">
        <div class="wdot${checks.a?' done':''}"></div>
        <div class="wdot${checks.b?' done':''}"></div>
        <div class="wdot${checks.c?' done':''}"></div>
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
    {name:'Phase 1: Foundation',     weeks:'1–4',  dates:'May 25 – Jun 21', days:28, h:168},
    {name:'Phase 2: Core Backend',   weeks:'5–12', dates:'Jun 22 – Aug 16', days:56, h:336},
    {name:'Phase 3: Distributed',    weeks:'13–20',dates:'Aug 17 – Oct 11', days:56, h:336},
    {name:'Phase 4: Polish + Offer', weeks:'21–27.5',dates:'Oct 12 – Dec 4', days:52, h:318},
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
      <div class="rule-item"><span class="rule-bullet">Jun 21</span><div>4/10 — Can clear Cognizant / Capgemini / mid-service screens</div></div>
      <div class="rule-item"><span class="rule-bullet">Jul 26</span><div>5/10 — TCS Digital, easy product first rounds</div></div>
      <div class="rule-item"><span class="rule-bullet">Aug 16</span><div>6/10 — Mid-product tech rounds · start applying</div></div>
      <div class="rule-item"><span class="rule-bullet">Sep 13</span><div>7/10 — Paytm / Swiggy lower-bar rounds</div></div>
      <div class="rule-item"><span class="rule-bullet">Oct 11</span><div>8/10 — Walmart / PayPal / Paytm / Swiggy full loops</div></div>
      <div class="rule-item"><span class="rule-bullet">Dec 4</span><div>9/10 — Offer signed, polished, onboarding next</div></div>
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
    name:'Spring', color:'#6a994e', totalHours:230,
    groups:[
      {id:'sp-1', name:'Block 1 · Core (IoC, DI, Beans, AOP)', hours:35, topics:[
        {id:'spring-ioc-di',      name:'Spring Core / IoC / DI (foundation)',                             h:12, p:'V.High'},
        {id:'spring-beans',       name:'Spring Beans (lifecycle, scopes, circular deps)',                  h:9,  p:'V.High'},
        {id:'spring-annotations', name:'Spring Annotations (Component/Service/Autowired/Configuration)',   h:6,  p:'V.High'},
        {id:'spring-aop',         name:'Spring AOP (proxies, advice types, pointcuts)',                    h:7,  p:'High'},
        {id:'spring-events',      name:'Spring Application Events (publisher/listener)',                   h:1,  p:'Medium'},
      ]},
      {id:'sp-2', name:'Block 2 · MVC + REST + Validation', hours:30, topics:[
        {id:'spring-mvc',           name:'Spring MVC (DispatcherServlet, lifecycle, annotations)',         h:12, p:'V.High'},
        {id:'spring-rest-api',      name:'REST API design (status codes, DTOs, versioning, HATEOAS)',      h:8,  p:'V.High'},
        {id:'spring-validation',    name:'Validation (@Valid, @Validated, custom validators)',              h:4,  p:'V.High'},
        {id:'spring-error-handling',name:'@ControllerAdvice + @ExceptionHandler + RFC 7807',               h:4,  p:'V.High'},
        {id:'spring-file-email',    name:'File Handling (MultipartFile) + JavaMailSender',                 h:2,  p:'Medium'},
      ]},
      {id:'sp-3', name:'Block 3 · Boot Fundamentals + Internals', hours:25, topics:[
        {id:'spring-boot-fundamentals', name:'@SpringBootApplication, auto-config, starters',             h:10, p:'V.High'},
        {id:'spring-boot-config',       name:'application.properties/yml + Profiles + @ConfigurationProperties', h:4, p:'High'},
        {id:'spring-actuator',          name:'Actuator + custom health indicators',                       h:4,  p:'High'},
        {id:'spring-boot-internals',    name:'Auto-config flow + custom starters',                        h:7,  p:'High'},
      ]},
      {id:'sp-4', name:'Block 4 · Data / JPA / Transactions', hours:30, topics:[
        {id:'spring-data-jpa',       name:'Spring Data JPA / Hibernate (entities, relationships, fetch types, N+1)', h:18, p:'V.High'},
        {id:'spring-jdbc-jdbcclient',name:'Spring JDBC + JdbcClient (3.2+)',                              h:3,  p:'Medium'},
        {id:'spring-transactional',  name:'@Transactional (propagation, isolation, rollback)',             h:5,  p:'V.High'},
        {id:'spring-locking',        name:'Optimistic vs Pessimistic locking, @Version, @Lock',           h:2,  p:'High'},
        {id:'spring-connection-pool',name:'HikariCP tuning, multi-datasource, read replicas',             h:2,  p:'High'},
      ]},
      {id:'sp-5', name:'Block 5 · Security', hours:20, topics:[
        {id:'spring-security-basics',    name:'Security filter chain, UserDetailsService, BCrypt',         h:5,  p:'V.High'},
        {id:'spring-security-jwt',       name:'JWT auth filter (OncePerRequestFilter, token extraction)',  h:6,  p:'V.High'},
        {id:'spring-security-method',    name:'Method-level security (@PreAuthorize, @PostAuthorize)',     h:3,  p:'V.High'},
        {id:'spring-security-cors-csrf', name:'CORS configuration, CSRF for stateless apps',              h:3,  p:'High'},
        {id:'spring-security-oauth2',    name:'OAuth2 awareness (authorization server vs resource server)',h:3,  p:'High'},
      ]},
      {id:'sp-6', name:'Block 6 · Microservices + Cloud', hours:25, topics:[
        {id:'spring-cloud-discovery', name:'Microservices intro, service discovery (Eureka concept)',      h:4,  p:'V.High'},
        {id:'spring-cloud-gateway',   name:'API Gateway (Spring Cloud Gateway, routes, filters)',          h:5,  p:'V.High'},
        {id:'spring-inter-service',   name:'Inter-service communication (RestTemplate, WebClient, OpenFeign, RestClient)', h:5, p:'V.High'},
        {id:'spring-resilience4j',    name:'Resilience4j (Circuit Breaker, Retry, Timeout, Bulkhead)',     h:6,  p:'V.High'},
        {id:'spring-cloud-config',    name:'Spring Cloud Config (config server, refresh scope)',           h:3,  p:'High'},
        {id:'spring-saga-pattern',    name:'Saga pattern (orchestration vs choreography)',                 h:2,  p:'High'},
      ]},
      {id:'sp-7', name:'Block 7 · Messaging + Caching', hours:25, topics:[
        {id:'spring-kafka',             name:'Kafka (producer/consumer, manual offset, DLQ, retry topics)', h:13, p:'V.High'},
        {id:'spring-rabbitmq',          name:'RabbitMQ (lite, compare with Kafka)',                         h:3,  p:'Medium'},
        {id:'spring-cache-abstraction', name:'Spring Cache abstraction (@Cacheable, @CacheEvict)',          h:4,  p:'High'},
        {id:'spring-redis',             name:'Redis basics (RedisTemplate, data types, TTL, eviction)',     h:5,  p:'High'},
      ]},
      {id:'sp-8', name:'Block 8 · Testing + Observability', hours:15, topics:[
        {id:'spring-testing-slice',  name:'@SpringBootTest, @WebMvcTest, @DataJpaTest, MockMvc',           h:6,  p:'High'},
        {id:'spring-testcontainers', name:'TestContainers (real DB integration tests)',                    h:3,  p:'High'},
        {id:'spring-logging-mdc',    name:'Logging deep (SLF4J, Logback, MDC, correlation IDs)',           h:3,  p:'Medium'},
        {id:'spring-observability',  name:'Micrometer + Prometheus + Grafana + distributed tracing',       h:3,  p:'High'},
      ]},
      {id:'sp-9', name:'Block 9 · Modern Spring 2026', hours:25, topics:[
        {id:'spring-virtual-threads',  name:'Spring Boot 3.2+ Virtual Threads integration',                h:6,  p:'V.High'},
        {id:'spring-modulith',         name:'Spring Modulith (modular monolith pattern)',                  h:4,  p:'High'},
        {id:'spring-native-graalvm',   name:'GraalVM Native Image + Spring Native',                       h:3,  p:'Medium'},
        {id:'spring-crac',             name:'CRaC (Coordinated Restore at Checkpoint) awareness',          h:2,  p:'Medium'},
        {id:'spring-async-scheduling', name:'Scheduling (@Scheduled) + @Async + TaskExecutor',             h:4,  p:'High'},
        {id:'spring-webflux-awareness',name:'Spring WebFlux (Mono/Flux, when vs virtual threads)',         h:3,  p:'Medium'},
        {id:'spring-ai-awareness',     name:'Spring AI awareness (ChatClient, embeddings, RAG basics)',    h:2,  p:'Low'},
        {id:'spring-websocket',        name:'WebSocket basics + STOMP',                                    h:1,  p:'Low'},
      ]},
    ]
  },

  sql: {
    name:'SQL / DB', color:'#a87fb8', totalHours:95,
    groups:[
      {id:'sql-core', name:'Core SQL', hours:30, topics:[
        {id:'sql-fundamentals',   name:'SQL Fundamentals (DDL/DML/DQL/DCL/TCL)',                   h:3,   p:'V.High'},
        {id:'sql-select',         name:'SELECT Mastery (WHERE, CASE, COALESCE, LIKE)',              h:4,   p:'V.High'},
        {id:'sql-joins',          name:'Joins (all types, ANTI/SEMI, multi-table)',                 h:6,   p:'V.High'},
        {id:'sql-aggregations',   name:'Aggregations & Grouping (HAVING, conditional)',             h:4,   p:'V.High'},
        {id:'sql-subqueries',     name:'Subqueries (scalar, correlated, top-N per group)',          h:4,   p:'V.High'},
        {id:'sql-ctes',           name:'CTEs (recursive for hierarchies)',                          h:3,   p:'High'},
        {id:'sql-window',         name:'Window Functions (ROW_NUMBER, LAG/LEAD, frames)',           h:6,   p:'V.High'},
        {id:'sql-set-ops',        name:'Set Operations (UNION, INTERSECT, EXCEPT)',                 h:1.5, p:'Medium'},
      ]},
      {id:'sql-perf', name:'Performance & Design', hours:37, topics:[
        {id:'sql-indexes',          name:'Indexes & Performance (B-tree, composite, covering)',     h:8,   p:'V.High'},
        {id:'sql-optimization',     name:'Query Optimization (EXPLAIN ANALYZE, sargable)',          h:6,   p:'V.High'},
        {id:'sql-transactions',     name:'Transactions & Concurrency (ACID, isolation, MVCC)',      h:6,   p:'V.High'},
        {id:'sql-normalization',    name:'Normalization & Schema Design (1NF–3NF)',                 h:4,   p:'V.High'},
        {id:'sql-views',            name:'Views & Materialized Views',                              h:2,   p:'High'},
        {id:'sql-procs-triggers',   name:'Stored Procs, Functions, Triggers',                      h:2,   p:'Medium'},
        {id:'sql-migrations',       name:'Migrations (Flyway, Liquibase)',                          h:2,   p:'High'},
        {id:'sql-interview-problems',name:'Interview SQL Problems (Nth salary, gaps/islands)',      h:8,   p:'V.High'},
      ]},
      {id:'sql-advanced', name:'Advanced & Distributed', hours:28, topics:[
        {id:'sql-db-specific',  name:'DB-specific (MySQL, Postgres, Oracle)',                       h:4,   p:'High'},
        {id:'sql-nosql',        name:'NoSQL Awareness (MongoDB, Cassandra, Redis)',                 h:5,   p:'High'},
        {id:'sql-scaling',      name:'Scaling Strategies (replicas, sharding)',                     h:4,   p:'High'},
        {id:'sql-cap',          name:'CAP Theorem & Distributed DB Basics',                        h:2,   p:'High'},
        {id:'sql-security',     name:'Security (SQL injection, prepared stmts, RLS)',              h:1.5, p:'High'},
        {id:'sql-backup-ha',    name:'Backup, Recovery, HA awareness',                             h:1.5, p:'Medium'},
        {id:'sql-monitoring',   name:'Monitoring & Troubleshooting (slow query, locks)',            h:2,   p:'High'},
      ]},
    ]
  },

  sd: {
    name:'System Design', color:'#e9c46a', totalHours:85,
    groups:[
      {id:'sd-a', name:'Part A · Foundations', hours:15, topics:[
        {id:'sd-scalability',       name:'Scalability (vertical vs horizontal)',                    h:1, p:'V.High'},
        {id:'sd-lb',                name:'Load balancing (L4 vs L7, algorithms)',                   h:2, p:'V.High'},
        {id:'sd-caching',           name:'Caching strategies (cache-aside, write-through, CDN)',    h:3, p:'V.High'},
        {id:'sd-db-scaling',        name:'Database scaling (replication, sharding, partitioning)',  h:3, p:'V.High'},
        {id:'sd-cap',               name:'CAP theorem & consistency models',                        h:1, p:'V.High'},
        {id:'sd-acid-base',         name:'ACID vs BASE',                                            h:1, p:'High'},
        {id:'sd-message-queues',    name:'Message queues (Kafka vs RabbitMQ vs SQS)',               h:2, p:'V.High'},
        {id:'sd-consistent-hashing',name:'Consistent hashing',                                     h:1, p:'High'},
        {id:'sd-bloom-filters',     name:'Bloom filters',                                           h:1, p:'Medium'},
      ]},
      {id:'sd-b', name:'Part B · Building Blocks', hours:10, topics:[
        {id:'sd-api-patterns',    name:'API design patterns (REST, GraphQL, gRPC)',                 h:2, p:'High'},
        {id:'sd-idempotency',     name:'Idempotency patterns',                                      h:2, p:'V.High'},
        {id:'sd-rate-limiting',   name:'Rate limiting algorithms',                                  h:2, p:'V.High'},
        {id:'sd-auth-patterns',   name:'Authentication patterns (JWT, OAuth2, session)',            h:2, p:'High'},
        {id:'sd-distributed-tx',  name:'Distributed transactions (Saga, 2PC)',                     h:2, p:'High'},
      ]},
      {id:'sd-c', name:'Part C · HLD Walkthroughs (10 designs × 3h)', hours:30, topics:[
        {id:'sd-hld-url-shortener',    name:'URL Shortener',                                        h:3, p:'V.High'},
        {id:'sd-hld-rate-limiter',     name:'Rate Limiter',                                        h:3, p:'V.High'},
        {id:'sd-hld-notification',     name:'Notification Service',                                h:3, p:'V.High'},
        {id:'sd-hld-ecommerce',        name:'E-commerce Order Service (Walmart-style)',             h:3, p:'V.High'},
        {id:'sd-hld-payment',          name:'Payment Service (PayPal-style)',                       h:3, p:'V.High'},
        {id:'sd-hld-food-delivery',    name:'Food Delivery (Swiggy-style)',                         h:3, p:'V.High'},
        {id:'sd-hld-ride-sharing',     name:'Ride-Sharing (Uber-like)',                             h:3, p:'High'},
        {id:'sd-hld-news-feed',        name:'News Feed / Timeline',                                h:3, p:'High'},
        {id:'sd-hld-distributed-cache',name:'Distributed Cache / Key-Value Store',                 h:3, p:'High'},
        {id:'sd-hld-chat',             name:'Chat Application',                                    h:3, p:'High'},
      ]},
      {id:'sd-d', name:'Part D · LLD', hours:10, topics:[
        {id:'sd-lld-fundamentals', name:'LLD fundamentals (UML, class diagrams)',                   h:2, p:'V.High'},
        {id:'sd-lld-parking-lot',  name:'Parking Lot LLD',                                         h:3, p:'V.High'},
        {id:'sd-lld-splitwise',    name:'Splitwise LLD',                                           h:3, p:'High'},
        {id:'sd-lld-cache',        name:'In-memory Cache LLD (with code)',                         h:2, p:'High'},
      ]},
      {id:'sd-e', name:'Part E · Framework & Articulation', hours:10, topics:[
        {id:'sd-reshaded',   name:'RESHADED framework practice',                                    h:2, p:'V.High'},
        {id:'sd-tradeoffs',  name:'Tradeoff articulation drills (10 classic tradeoffs)',            h:2, p:'V.High'},
        {id:'sd-capacity',   name:'Capacity estimation (back-of-envelope)',                         h:1, p:'High'},
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
        <div style="font-size:12px;color:var(--dim);font-family:'JetBrains Mono',monospace;margin-top:2px">${def.totalHours}h total · ${totalDone}/${totalTopics} topics done</div>
      </div>
      <div style="font-size:24px;font-weight:700;font-family:'JetBrains Mono',monospace;color:${def.color}">${overallPct}%</div>
    </div>
    <div class="prog-bg" style="height:8px"><div class="prog-fill" id="overall-bar-${trackId}" style="width:${overallPct}%;background:${def.color};height:8px"></div></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-top:12px">
      ${def.groups.map(g => {
        const s = calcGroupStats(trackId, g);
        const p = s.total ? Math.round(s.done/s.total*100) : 0;
        return `<div class="track-overview" style="padding:8px 10px">
          <div class="to-bar" style="flex:1"><div class="to-bar-fill" style="width:${p}%;background:${def.color}"></div></div>
          <div style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace;min-width:32px;text-align:right">${p}%</div>
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
          <div style="font-size:10px;color:var(--dim);font-family:'JetBrains Mono',monospace;margin-top:1px">${g.hours}h · ${s.done}/${s.total} done${s.prog?' · '+s.prog+' in progress':''}</div>
        </div>
        <div class="track-pct-lbl" style="color:${def.color}">${pct}%</div>
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

function setTrackTopic(trackId, topicId, newState, groupId) {
  if (!STATE.tracks[trackId]) STATE.tracks[trackId] = {};
  const cur = STATE.tracks[trackId][topicId] || 'not-started';
  // toggle: clicking same state = back to not-started
  STATE.tracks[trackId][topicId] = (cur === newState) ? 'not-started' : newState;
  saveState(STATE);

  const st = STATE.tracks[trackId][topicId];
  const row = document.getElementById('trr-'+topicId);
  if (row) {
    row.className = 'tr-row' + (st==='done'?' s-done':st==='in-progress'?' s-prog':'');
  }
  // update group bar + overall bar
  const def = TRACK_DEFS[trackId];
  if (!def) return;
  def.groups.forEach(g => {
    const s = calcGroupStats(trackId, g);
    const p = s.total ? Math.round(s.done/s.total*100) : 0;
    const gb = document.getElementById('gbar-'+trackId+'-'+g.id);
    if (gb) gb.style.width = p+'%';
  });
  let totalDone = 0, totalTopics = 0;
  def.groups.forEach(g => { const s = calcGroupStats(trackId, g); totalDone+=s.done; totalTopics+=g.topics.length; });
  const op = totalTopics ? Math.round(totalDone/totalTopics*100) : 0;
  const ob = document.getElementById('overall-bar-'+trackId);
  if (ob) ob.style.width = op+'%';
}
