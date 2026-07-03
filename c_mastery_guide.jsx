import { useState } from "react";

const sections = [
  { id: "what-is-c", label: "🧠 What Is C?" },
  { id: "variables", label: "📦 Variables & Types" },
  { id: "ascii", label: "🔢 ASCII & Characters" },
  { id: "write", label: "✍️ The write() Function" },
  { id: "functions", label: "🔧 Functions" },
  { id: "loops", label: "🔁 Loops" },
  { id: "conditionals", label: "🔀 Conditionals" },
  { id: "char-arithmetic", label: "➕ Char Arithmetic" },
  { id: "nested-loops", label: "🔄 Nested Loops" },
  { id: "print-numbers", label: "🔟 Printing Integers" },
  { id: "combinations", label: "🎲 Combinations" },
  { id: "memory", label: "🏠 Memory & Addresses" },
  { id: "pointers", label: "👉 Pointers" },
  { id: "multi-pointers", label: "👉👉 Multi-Level Pointers" },
  { id: "pointer-params", label: "🔄 Pointers as Output" },
  { id: "strings", label: "📝 Strings" },
  { id: "arrays", label: "📋 Arrays" },
  { id: "sorting", label: "📊 Sorting" },
];

function Code({ children }) {
  return (
    <pre className="bg-gray-900 text-green-300 rounded-lg p-4 text-sm overflow-x-auto my-3 font-mono leading-relaxed">
      {children}
    </pre>
  );
}

function Tip({ children }) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg my-3 text-sm text-yellow-900">
      💡 {children}
    </div>
  );
}

function Warning({ children }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg my-3 text-sm text-red-900">
      ⚠️ {children}
    </div>
  );
}

function Analogy({ children }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg my-3 text-sm text-blue-900">
      🌍 Real world: {children}
    </div>
  );
}

function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-gray-800 mt-2 mb-4 pb-2 border-b-2 border-indigo-200">
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return <h3 className="text-lg font-semibold text-indigo-700 mt-5 mb-2">{children}</h3>;
}

function P({ children }) {
  return <p className="text-gray-700 leading-relaxed my-2">{children}</p>;
}

const content = {
  "what-is-c": (
    <div>
      <SectionTitle id="what-is-c">🧠 What Is C?</SectionTitle>
      <P>C is one of the oldest and most powerful programming languages ever made. It was created in the early 1970s and almost everything that exists in computers today — operating systems, drivers, compilers — was built with C or was influenced by it.</P>
      <Analogy>Think of C as speaking directly to the machine. Other languages (Python, JavaScript) are like asking a translator to talk to the machine. C lets you talk to it yourself — which is powerful, but requires more precision.</Analogy>

      <SubTitle>How does a C program work?</SubTitle>
      <P>You write code in a <strong>.c file</strong>. Then a <strong>compiler</strong> (like cc or gcc) transforms that human-readable code into binary — the 1s and 0s the computer actually understands.</P>
      <Code>{`// Your code (human readable)
// ft_putchar.c

// After running: cc ft_putchar.c -o myprogram
// You get a binary file the computer can run`}</Code>

      <SubTitle>The 42 Compilation Rule</SubTitle>
      <P>At 42, the compiler always uses these flags, which make it extremely strict:</P>
      <Code>{`cc -Wall -Wextra -Werror ft_putchar.c`}</Code>
      <P><strong>-Wall</strong> = show all warnings. <strong>-Wextra</strong> = show extra warnings. <strong>-Werror</strong> = treat ANY warning as an error (your code won't compile if there's a warning).</P>
      <Warning>This means even a tiny mistake stops your code from compiling. This is actually good — it forces clean code.</Warning>

      <SubTitle>The 42 Norm</SubTitle>
      <P>42 also enforces a style guide called the <strong>Norm</strong>. Key rules include: functions can't be more than 25 lines, max 5 functions per file, variable declarations only at the top of a function, and no for loops (only while). The norminette tool checks this.</P>
    </div>
  ),

  "variables": (
    <div>
      <SectionTitle id="variables">📦 Variables & Types</SectionTitle>
      <P>A variable is a named box where you store a value. Every variable has a <strong>type</strong> — the type tells C what kind of data goes in the box.</P>
      <Analogy>A variable is like a labeled jar. The label is the name, the type is what kind of thing fits in the jar (coins, sugar, marbles), and the value is what's actually inside.</Analogy>

      <SubTitle>The two main types you use in C00/C01</SubTitle>
      <Code>{`int age = 25;       // A whole number (integer)
                     // Range: -2,147,483,648 to 2,147,483,647

char letter = 'A';  // A single character
                     // Stored as a number under the hood (65 for 'A')
                     // Always use single quotes for chars`}</Code>

      <SubTitle>Declaring vs Assigning</SubTitle>
      <Code>{`// Declaration — creating the jar, giving it a label
int score;

// Assignment — putting something in the jar
score = 100;

// Both at once
int score = 100;`}</Code>

      <Tip>In C (at 42, with the Norm), you must declare ALL variables at the very top of a function, before any code runs. You can't declare a variable in the middle.</Tip>

      <SubTitle>What happens if you don't initialise?</SubTitle>
      <Code>{`int x;
// x contains GARBAGE — whatever was in that memory before.
// Always initialize your variables!

int x = 0;  // Safe — you know what's in there`}</Code>

      <SubTitle>The void type</SubTitle>
      <P><strong>void</strong> means "nothing". You use it for functions that don't return a value and don't take parameters:</P>
      <Code>{`void ft_print_alphabet(void);
// Returns nothing, takes nothing`}</Code>
    </div>
  ),

  "ascii": (
    <div>
      <SectionTitle id="ascii">🔢 ASCII & Characters</SectionTitle>
      <P>Here's the secret that unlocks many C exercises: <strong>characters are just numbers</strong>.</P>
      <P>Computers only understand numbers. So when you type the letter 'A', the computer stores the number <strong>65</strong>. This mapping of characters to numbers is called <strong>ASCII</strong> (American Standard Code for Information Interchange).</P>
      <Analogy>Imagine a secret codebook where every letter, digit, and symbol has a number. 'A' = 65, 'B' = 66, 'a' = 97, '0' = 48. ASCII is that codebook.</Analogy>

      <SubTitle>The key ASCII values to memorise</SubTitle>
      <Code>{`'0' = 48    '1' = 49    ...    '9' = 57    (digits: 48 to 57)
'A' = 65    'B' = 66    ...    'Z' = 90    (uppercase: 65 to 90)
'a' = 97    'b' = 98    ...    'z' = 122   (lowercase: 97 to 122)

// The gap between uppercase and lowercase is always 32
// 'A' (65) + 32 = 'a' (97)

// The digits are sequential too:
// '0' (48) + 1 = '1' (49), + 2 = '2' (50), etc.`}</Code>

      <SubTitle>Why does this matter?</SubTitle>
      <P>Because you can do math with characters! Since 'a' = 97 and 'b' = 98, you can loop through the alphabet like this:</P>
      <Code>{`char c = 'a';          // c holds the number 97
c = c + 1;             // c now holds 98 = 'b'
c = c + 1;             // c now holds 99 = 'c'
// ...and so on until 'z' (122)`}</Code>

      <Tip>This is the key insight behind ft_print_alphabet — you loop from 'a' (97) to 'z' (122), incrementing by 1 each time, and write each character.</Tip>

      <SubTitle>char is just a small int</SubTitle>
      <Code>{`char c = 'A';
int n = c;    // n is now 65 — completely valid!

// You can compare them too:
if (c == 65)  // same as if (c == 'A')
    // this is true!`}</Code>
    </div>
  ),

  "write": (
    <div>
      <SectionTitle id="write">✍️ The write() Function</SectionTitle>
      <P>In the 42 Piscine, the only function you're allowed for output is <strong>write()</strong>. No printf, no putchar — just write.</P>
      <P>write() is a system call — a direct request to the operating system to write bytes to a file.</P>

      <SubTitle>The write signature</SubTitle>
      <Code>{`#include <unistd.h>

// write(file_descriptor, address_of_data, number_of_bytes)
write(1, &c, 1);`}</Code>

      <SubTitle>Breaking down write(1, &c, 1)</SubTitle>
      <Code>{`1       // File descriptor 1 = standard output (your terminal screen)
        // (0 = stdin/keyboard, 1 = stdout/screen, 2 = stderr/errors)

&c      // The address of the variable c
        // & means "give me the ADDRESS of this variable"
        // write() needs to know WHERE in memory to find the data

1       // Number of bytes to write — one character = 1 byte`}</Code>

      <Analogy>write() is like a delivery service. You say: "Deliver to destination 1 (the screen), pick up from this address (&c), and deliver 1 item." The delivery guy goes to the address, picks up the character, and puts it on screen.</Analogy>

      <SubTitle>Putting it together: ft_putchar</SubTitle>
      <Code>{`void ft_putchar(char c)
{
    write(1, &c, 1);
}`}</Code>
      <P>This is the foundation of everything. Every other exercise in C00 is built on top of this — calling ft_putchar (or write directly) in a loop or with conditions.</P>

      <Tip>You need to include the header: <code>#include &lt;unistd.h&gt;</code> at the top of any file that uses write().</Tip>
    </div>
  ),

  "functions": (
    <div>
      <SectionTitle id="functions">🔧 Functions</SectionTitle>
      <P>A function is a reusable block of code with a name. You define it once, then call it whenever you need it. Functions are the core building blocks of C.</P>
      <Analogy>A function is like a recipe. You write the recipe once (define it). Then whenever you want cake, you follow the recipe (call it). The ingredients are the parameters, and the cake that comes out is the return value.</Analogy>

      <SubTitle>Anatomy of a function</SubTitle>
      <Code>{`//  return_type   name    (parameters)
    void          ft_putchar(char c)
    {
        // function body — what it does
        write(1, &c, 1);
    }
//  ^ opening brace         ^ closing brace`}</Code>

      <SubTitle>The prototype (declaration)</SubTitle>
      <P>In C, you must tell the compiler about a function before you use it. This is called a prototype (or declaration). It's like a preview:</P>
      <Code>{`// Prototype — tells the compiler: "this function exists, trust me"
void ft_putchar(char c);

// Definition — the actual implementation
void ft_putchar(char c)
{
    write(1, &c, 1);
}`}</Code>

      <SubTitle>Return values</SubTitle>
      <Code>{`// void = returns nothing
void ft_putchar(char c)
{
    write(1, &c, 1);
    // no return needed
}

// int = returns an integer
int ft_strlen(char *str)
{
    int i = 0;
    while (str[i])
        i++;
    return (i);   // must return something!
}`}</Code>

      <SubTitle>Parameters vs Arguments</SubTitle>
      <Code>{`// 'c' is the PARAMETER — it's a placeholder in the definition
void ft_putchar(char c)
{
    write(1, &c, 1);
}

// 'A' is the ARGUMENT — the actual value you pass in
ft_putchar('A');   // 'A' gets copied into 'c' inside the function`}</Code>

      <Warning>C is pass-by-value. When you call ft_putchar('A'), a COPY of 'A' is made and given to the function. The original is not touched. (This changes with pointers — more on that later.)</Warning>
    </div>
  ),

  "loops": (
    <div>
      <SectionTitle id="loops">🔁 Loops</SectionTitle>
      <P>A loop repeats a block of code as long as a condition is true. Without loops, you'd have to write write() 26 times to print the alphabet!</P>

      <SubTitle>The while loop</SubTitle>
      <P>The Norm at 42 bans for loops. You'll use <strong>while</strong> loops for everything:</P>
      <Code>{`while (condition)
{
    // this code runs again and again
    // as long as condition is true
}`}</Code>

      <SubTitle>ft_print_alphabet using a while loop</SubTitle>
      <Code>{`void ft_print_alphabet(void)
{
    char c;

    c = 'a';          // start at 'a' (ASCII 97)
    while (c <= 'z')  // keep going while c hasn't passed 'z' (122)
    {
        write(1, &c, 1);  // print the current character
        c++;              // move to the next character (c = c + 1)
    }
}
// Output: abcdefghijklmnopqrstuvwxyz`}</Code>

      <SubTitle>The reverse — ft_print_reverse_alphabet</SubTitle>
      <Code>{`void ft_print_reverse_alphabet(void)
{
    char c;

    c = 'z';          // start at 'z'
    while (c >= 'a')  // go DOWN until we've printed 'a'
    {
        write(1, &c, 1);
        c--;          // go backwards (c = c - 1)
    }
}
// Output: zyxwvutsrqponmlkjihgfedcba`}</Code>

      <SubTitle>ft_print_numbers</SubTitle>
      <Code>{`void ft_print_numbers(void)
{
    char c;

    c = '0';          // '0' = ASCII 48
    while (c <= '9')  // '9' = ASCII 57
    {
        write(1, &c, 1);
        c++;
    }
}
// Output: 0123456789`}</Code>

      <Tip>Notice that we always loop with a char (not an int) when printing characters. This way we can pass &c directly to write().</Tip>

      <SubTitle>Common loop pitfalls</SubTitle>
      <Code>{`// INFINITE LOOP — forgot to increment! Program hangs forever.
while (c <= 'z')
{
    write(1, &c, 1);
    // oops! c never changes, so condition is always true
}

// OFF-BY-ONE — wrong comparison operator
while (c < 'z')   // stops at 'y', misses 'z'!
while (c <= 'z')  // correct — stops AFTER printing 'z'`}</Code>
    </div>
  ),

  "conditionals": (
    <div>
      <SectionTitle id="conditionals">🔀 Conditionals</SectionTitle>
      <P>Conditionals let your code make decisions — do this OR do that, depending on the situation.</P>

      <SubTitle>Basic if / else</SubTitle>
      <Code>{`if (condition)
{
    // runs if condition is TRUE (non-zero)
}
else
{
    // runs if condition is FALSE (zero)
}`}</Code>

      <SubTitle>ft_is_negative — the perfect example</SubTitle>
      <Code>{`void ft_is_negative(int n)
{
    if (n < 0)
        write(1, "N", 1);   // negative: print 'N'
    else
        write(1, "P", 1);   // positive or zero: print 'P'
}`}</Code>

      <Tip>When there's only ONE line in the if/else body, you don't need braces {}. The Norm sometimes prefers this style.</Tip>

      <SubTitle>Comparison operators</SubTitle>
      <Code>{`n < 0    // less than zero
n > 0    // greater than zero
n == 0   // equal to zero (NOTE: == not =)
n != 0   // not equal to zero
n <= 0   // less than OR equal to zero
n >= 0   // greater than OR equal to zero`}</Code>

      <Warning>One of the most common bugs in C: using = (assignment) instead of == (comparison). <code>if (n = 0)</code> sets n to 0 and the condition is always false. <code>if (n == 0)</code> checks if n equals 0.</Warning>

      <SubTitle>Logical operators</SubTitle>
      <Code>{`// && means AND — both must be true
if (n > 0 && n < 10)   // n is between 1 and 9

// || means OR — at least one must be true
if (n < 0 || n > 100)  // n is negative OR greater than 100

// ! means NOT — flips true/false
if (!done)             // same as: if (done == 0)`}</Code>

      <SubTitle>Truthiness in C</SubTitle>
      <P>C has no real boolean type. Any integer is either <strong>true (non-zero)</strong> or <strong>false (zero)</strong>.</P>
      <Code>{`if (1)   // true  — always runs
if (0)   // false — never runs
if (-5)  // true  — any non-zero value is true
if (42)  // true`}</Code>
    </div>
  ),

  "char-arithmetic": (
    <div>
      <SectionTitle id="char-arithmetic">➕ Char Arithmetic</SectionTitle>
      <P>Since characters are numbers, you can do math with them. This is the trick that makes many exercises elegant.</P>

      <SubTitle>Converting a digit number to a char digit</SubTitle>
      <P>This is crucial for ft_putnbr. The number 5 and the character '5' are different things:</P>
      <Code>{`int n = 5;      // The actual NUMBER 5
char c = '5';   // The CHARACTER '5' = ASCII 53

// To convert the number 5 to the character '5':
char c = 5 + '0';   // 5 + 48 = 53 = '5'   ✓

// More generally:
// digit + '0' gives you the character for that digit
// '0' + 0 = '0'
// '0' + 1 = '1'
// '0' + 9 = '9'`}</Code>

      <Tip>The formula <code>digit + '0'</code> is fundamental for printing numbers. You use it inside ft_putnbr.</Tip>

      <SubTitle>Extracting individual digits</SubTitle>
      <Code>{`int n = 1234;

n % 10    // = 4  (the last digit)
n / 10    // = 123 (everything except the last digit)

123 % 10  // = 3  (last digit of 123)
123 / 10  // = 12 (everything except the last digit)

12 % 10   // = 2
12 / 10   // = 1

1 % 10    // = 1
1 / 10    // = 0  (done!)`}</Code>

      <SubTitle>How ft_putnbr works step by step</SubTitle>
      <Code>{`// To print 1234:
// 1. Print 1, then 2, then 3, then 4
// But you can only get the LAST digit easily with % 10
// So: print everything before 4, THEN print 4

void ft_putnbr(int nb)
{
    char c;

    if (nb < 0)               // Handle negative numbers
    {
        write(1, "-", 1);     // Print the minus sign
        nb = -nb;             // Make it positive
    }
    if (nb >= 10)             // If more than one digit...
        ft_putnbr(nb / 10);   // ...first print all digits before the last
    c = nb % 10 + '0';        // Convert last digit to character
    write(1, &c, 1);          // Print it
}`}</Code>

      <Warning>Special case: INT_MIN = -2147483648. If you do <code>nb = -nb</code> on INT_MIN, you get INT_MIN again (overflow!). You must handle this case specially by casting to a larger type or treating it separately.</Warning>
    </div>
  ),

  "nested-loops": (
    <div>
      <SectionTitle id="nested-loops">🔄 Nested Loops</SectionTitle>
      <P>A nested loop is a loop inside another loop. The inner loop runs completely for every single step of the outer loop. This is how you generate combinations.</P>
      <Analogy>Think of a clock. The outer loop is the hour hand — it moves 12 times. For each hour, the inner loop is the minute hand — it makes a full 60-step rotation. Total steps: 12 × 60 = 720.</Analogy>

      <SubTitle>Simple nested loop example</SubTitle>
      <Code>{`// Let's print all pairs of digits 0-2:
// 00, 01, 02, 10, 11, 12, 20, 21, 22

int i = 0;
while (i <= 2)         // outer: i goes 0, 1, 2
{
    int j = 0;
    while (j <= 2)     // inner: j goes 0, 1, 2 for EACH value of i
    {
        // print i, then j
        j++;
    }
    i++;
}`}</Code>

      <SubTitle>ft_print_comb — unique combinations of 3 digits</SubTitle>
      <P>The key trick: make each later digit always greater than the one before it. This automatically ensures uniqueness and order.</P>
      <Code>{`// We want: 012, 013, ..., 789
// Rule: first digit < second digit < third digit

void ft_print_comb(void)
{
    int i;
    int j;
    int k;
    char combo[3];  // or use write directly

    i = 0;
    while (i <= 7)          // first digit: 0 to 7 (needs 2 more after it)
    {
        j = i + 1;          // second digit always > first
        while (j <= 8)      // second digit: up to 8 (needs 1 more after)
        {
            k = j + 1;      // third digit always > second
            while (k <= 9)
            {
                // print i, j, k
                // print ", " if not the last combination
                k++;
            }
            j++;
        }
        i++;
    }
}`}</Code>

      <SubTitle>ft_print_comb2 — pairs of two-digit numbers</SubTitle>
      <Code>{`// Each "number" is two digits (00 to 99)
// We want all pairs where the first < the second
// 00 01, 00 02, ..., 98 99

// Each number from 0 to 99 has:
// tens digit = n / 10
// units digit = n % 10

void ft_print_comb2(void)
{
    int i;
    int j;

    i = 0;
    while (i <= 98)       // first number: 00 to 98
    {
        j = i + 1;        // second number always > first
        while (j <= 99)
        {
            // print tens of i, units of i, space, tens of j, units of j
            // print ", " if not last pair
            j++;
        }
        i++;
    }
}`}</Code>
    </div>
  ),

  "print-numbers": (
    <div>
      <SectionTitle id="print-numbers">🔟 Printing Integers (ft_putnbr)</SectionTitle>
      <P>Printing an integer is tricky because you can only write one character at a time. You need to break the number into individual digits.</P>

      <SubTitle>The core idea: recursion</SubTitle>
      <P><strong>Recursion</strong> is when a function calls itself. ft_putnbr is a perfect example: to print 1234, you first print 123 (by calling ft_putnbr(123)), then print 4.</P>
      <Code>{`ft_putnbr(1234)
  → ft_putnbr(123)    // first handle 1, 2, 3
      → ft_putnbr(12)
          → ft_putnbr(1)
              → ft_putnbr(0)? No! 1 < 10, so just print '1'
          → print '2'
      → print '3'
  → print '4'

// Result: 1 2 3 4 → "1234" ✓`}</Code>

      <SubTitle>The full ft_putnbr</SubTitle>
      <Code>{`void ft_putnbr(int nb)
{
    char c;

    if (nb == -2147483648)    // special case: INT_MIN
    {
        write(1, "-2147483648", 10);
        return ;
    }
    if (nb < 0)               // negative number
    {
        write(1, "-", 1);     // print the minus sign
        nb = -nb;             // make positive (now safe since we caught INT_MIN)
    }
    if (nb >= 10)             // more than one digit?
        ft_putnbr(nb / 10);   // print everything except the last digit
    c = nb % 10 + '0';        // convert last digit to char
    write(1, &c, 1);          // print it
}`}</Code>

      <SubTitle>How every part works</SubTitle>
      <Code>{`nb % 10         // extracts the last digit
                // 1234 % 10 = 4, 123 % 10 = 3, etc.

nb / 10         // removes the last digit
                // 1234 / 10 = 123, 123 / 10 = 12, etc.
                // in C, integer division discards the decimal

nb % 10 + '0'  // converts digit to character
                // 4 + '0' = 4 + 48 = 52 = '4'`}</Code>

      <Tip>Recursion always needs a "base case" — a condition where it STOPS calling itself. Here, the base case is when nb &lt; 10 (single digit), and we just print it without recursing.</Tip>
    </div>
  ),

  "combinations": (
    <div>
      <SectionTitle id="combinations">🎲 Generalised Combinations (ft_print_combn)</SectionTitle>
      <P>ft_print_combn is the hardest exercise in C00. It generalises ft_print_comb to work for any n distinct digits. When n=3, it behaves like ft_print_comb. When n=2, it's pairs like 01, 02, ..., 89.</P>
      <P>Since n can vary, you can't use a fixed number of nested loops. You need <strong>recursion</strong> — a function that calls itself to simulate any depth of nesting.</P>

      <SubTitle>The idea</SubTitle>
      <Code>{`// Think of it as filling n slots one by one:
// Slot 1: some digit d1
// Slot 2: some digit d2 > d1
// Slot 3: some digit d3 > d2
// ...
// Slot n: some digit dn > d(n-1)

// A recursive function fills one slot, then calls itself
// to fill the remaining slots`}</Code>

      <SubTitle>Implementation approach</SubTitle>
      <Code>{`// We need an array to store digits as we pick them
// and a recursive helper

void  fill_comb(int n, int depth, int start, int *digits, int total_n)
{
    int i;

    i = start;
    while (i <= 9 - (n - depth - 1))
    {
        digits[depth] = i;
        if (depth == n - 1)
        {
            // All n digits chosen — print them!
            // (with ", " between combos)
        }
        else
        {
            // Pick the next digit (must be > current)
            fill_comb(n, depth + 1, i + 1, digits, total_n);
        }
        i++;
    }
}

void ft_print_combn(int n)
{
    int digits[9];  // max 9 digits

    fill_comb(n, 0, 0, digits, n);
}`}</Code>

      <Tip>The condition <code>i &lt;= 9 - (n - depth - 1)</code> ensures you don't pick a digit that's too large to complete the combination. For example, if n=3 and you're picking the first digit, it can't be higher than 7 (since you need 2 more digits after it, taking up 8 and 9).</Tip>
    </div>
  ),

  "memory": (
    <div>
      <SectionTitle id="memory">🏠 Memory & Addresses</SectionTitle>
      <P>This is the foundation of C01. Understanding memory is what separates C from most other languages.</P>
      <Analogy>Imagine your computer's RAM (memory) as a huge street of houses. Each house has a unique number (address) and can hold a small amount of data. When you create a variable, the computer assigns it a house (or a few houses, depending on the type).</Analogy>

      <SubTitle>Every variable lives at an address</SubTitle>
      <Code>{`int x = 42;
// The computer reserves some memory and stores 42 there.
// Let's say x lives at address 0x7fff5204 (a made-up example)

// You can find out the address with &
printf("Address of x: %p\n", &x);  // e.g., 0x7fff5204
printf("Value of x:   %d\n", x);   // 42`}</Code>

      <SubTitle>How big are different types?</SubTitle>
      <Code>{`// Different types need different amounts of memory:
char   → 1 byte  (1 house)
int    → 4 bytes (4 houses in a row)

// If int x lives at address 100:
// x occupies addresses 100, 101, 102, 103`}</Code>

      <SubTitle>The & operator — "give me the address"</SubTitle>
      <Code>{`int x = 42;
&x    // This gives you the ADDRESS where x is stored
      // Not the value 42 — the location of the box holding 42

// You've already used this! In write():
write(1, &c, 1);
// &c says: "the character is stored at THIS address, go get it"

// & is called the "address-of" operator`}</Code>

      <SubTitle>Why does this matter?</SubTitle>
      <P>Normally, when you pass a variable to a function, a copy is made. The original can't be changed. But if you pass the <em>address</em>, the function can go to that address and change the original. This is what pointers are for.</P>
    </div>
  ),

  "pointers": (
    <div>
      <SectionTitle id="pointers">👉 Pointers</SectionTitle>
      <P>A pointer is a variable that stores an <strong>address</strong> — it "points to" where something is in memory.</P>
      <Analogy>A pointer is like a note that says "the treasure is in house number 1042." The note itself isn't the treasure — it tells you where to find it. A pointer isn't the value — it stores the address of the value.</Analogy>

      <SubTitle>Declaring a pointer</SubTitle>
      <Code>{`int *p;    // p is a pointer to an int
           // The * means "pointer to"
           // p will store the ADDRESS of an int

char *str; // str is a pointer to a char
           // (strings are char pointers — more on this later)`}</Code>

      <SubTitle>The two pointer operators</SubTitle>
      <Code>{`int x = 42;
int *p;

p = &x;   // & = "address of" — store x's address in p
           // p now points to x

*p        // * = "dereference" — go to the address stored in p and get the value
          // *p is 42 (the value at the address p holds)

*p = 100; // CHANGE the value at the address p points to
          // x is now 100! We changed x through the pointer`}</Code>

      <SubTitle>ft_ft — the simplest pointer exercise</SubTitle>
      <Code>{`void ft_ft(int *nbr)
{
    *nbr = 42;   // Go to the address nbr points to, put 42 there
}

// How it's called:
int x = 0;
ft_ft(&x);    // Pass the ADDRESS of x
// Now x == 42! The function changed x directly`}</Code>

      <SubTitle>Visualising pointer and value</SubTitle>
      <Code>{`int x = 0;     // x is at address, say, 200. Value: 0
int *p = &x;   // p is at address, say, 300. Value: 200 (stores x's address)

// When you write *p:
// → go to address stored in p (200)
// → read/write the int there (x)

*p = 42;
// → goes to address 200
// → writes 42 there
// → x is now 42`}</Code>

      <Tip>The * does double duty in C: in a declaration (<code>int *p</code>) it means "p is a pointer." In an expression (<code>*p</code>) it means "dereference — get the value at the address."</Tip>

      <SubTitle>ft_swap — swapping values through pointers</SubTitle>
      <Code>{`void ft_swap(int *a, int *b)
{
    int temp;

    temp = *a;    // save value at a
    *a = *b;      // put value of b into address a
    *b = temp;    // put saved value into address b
}

// Usage:
int x = 5;
int y = 10;
ft_swap(&x, &y);
// Now x == 10, y == 5`}</Code>
    </div>
  ),

  "multi-pointers": (
    <div>
      <SectionTitle id="multi-pointers">👉👉 Multi-Level Pointers</SectionTitle>
      <P>A pointer stores an address. But a pointer itself is a variable — which means it also lives at an address. You can have a pointer to a pointer!</P>
      <Analogy>A pointer to a pointer is like a map that leads to another map. The first map says "go to room 3." In room 3, there's another map that says "the treasure is in drawer 7." You follow two levels of indirection.</Analogy>

      <SubTitle>Pointer to a pointer</SubTitle>
      <Code>{`int x = 42;
int *p = &x;    // p points to x
int **pp = &p;  // pp points to p (which points to x)

// To get x through pp, you dereference TWICE:
**pp   // first * → get p (the address of x)
       // second * → get x (the value at the address of x)
       // result: 42

**pp = 100;   // changes x to 100!`}</Code>

      <SubTitle>ft_ultimate_ft — 9 levels of pointers!</SubTitle>
      <Code>{`void ft_ultimate_ft(int *********nbr)
{
    *********nbr = 42;
    // Dereferences 9 times to get to the int and set it to 42
}

// The concept is the same as ft_ft, just 9 levels deep.
// Each * in the parameter type means "one more level of pointer."
// Each * in *********nbr peels off one level.`}</Code>

      <SubTitle>Why do multi-pointers exist in practice?</SubTitle>
      <Code>{`// A common real use: modifying a pointer inside a function
// If you want a function to change where a pointer points:

void change_pointer(int **pp, int *new_target)
{
    *pp = new_target;  // change what p points to
}

int x = 1;
int y = 2;
int *p = &x;  // p points to x

change_pointer(&p, &y);  // pass address of p
// Now p points to y!`}</Code>

      <Tip>At 42, multi-level pointers are rarely needed beyond this exercise, but they train you to understand the indirection chain clearly. Every extra * is one more "follow the address" step.</Tip>
    </div>
  ),

  "pointer-params": (
    <div>
      <SectionTitle id="pointer-params">🔄 Pointers as Output Parameters</SectionTitle>
      <P>C functions can only return ONE value. But what if you need to return two? You use pointers as "output parameters" — the caller passes addresses, the function writes results directly into those addresses.</P>
      <Analogy>It's like handing someone two empty boxes and saying "put the result in box 1 and the leftover in box 2." They return both answers simultaneously, without needing to "return" anything from the function.</Analogy>

      <SubTitle>ft_div_mod — computing two values at once</SubTitle>
      <Code>{`void ft_div_mod(int a, int b, int *div, int *mod)
{
    *div = a / b;   // quotient goes into address div
    *mod = a % b;   // remainder goes into address mod
}

// Usage:
int result;
int leftover;

ft_div_mod(10, 3, &result, &leftover);
// result  = 3   (10 / 3 = 3)
// leftover = 1  (10 % 3 = 1)

// a and b are regular ints — passed BY VALUE (copies)
// div and mod are pointers — the function can write back through them`}</Code>

      <SubTitle>ft_ultimate_div_mod — pointers as both input AND output</SubTitle>
      <Code>{`void ft_ultimate_div_mod(int *a, int *b)
{
    int div;
    int mod;

    div = *a / *b;   // compute with the VALUES at the addresses
    mod = *a % *b;
    *a = div;        // write result back to address a
    *b = mod;        // write result back to address b
}

// Here a and b serve as BOTH input and output
// You read from them (*a, *b) and write back to them (*a = ..., *b = ...)`}</Code>

      <Warning>Order matters! In ft_ultimate_div_mod, you MUST compute both div and mod before writing them back. If you write *a = *a / *b first, then *a has changed and *a % *b gives the wrong answer!</Warning>

      <SubTitle>The pattern in summary</SubTitle>
      <Code>{`// Regular parameter — read-only, function gets a copy
void func(int n)    { /* n is a copy */ }

// Pointer parameter — function CAN modify the original
void func(int *n)   { *n = 42; /* modifies the original */ }

// Caller must pass the address when function expects a pointer
int x = 0;
func(&x);    // pass address so func can write to x`}</Code>
    </div>
  ),

  "strings": (
    <div>
      <SectionTitle id="strings">📝 Strings</SectionTitle>
      <P>In C, there is no "string type." A string is just an array of characters ending with a special character: <strong>\0</strong> (the null character, ASCII value 0). This is called the null terminator.</P>
      <Analogy>A string is like a sentence in a book where the last word is always "STOP." You read word by word until you hit "STOP." C reads character by character until it hits \0.</Analogy>

      <SubTitle>How strings are stored</SubTitle>
      <Code>{`char *str = "Hello";
// In memory:
// Address: 100  101  102  103  104  105
// Value:   'H'  'e'  'l'  'l'  'o'  '\0'
//                                     ^ this MUST be here!

// \0 is the null terminator — ASCII value 0 — marks the end of the string
// It's automatically added when you use a string literal "..."`}</Code>

      <SubTitle>ft_putstr — printing a string character by character</SubTitle>
      <Code>{`void ft_putstr(char *str)
{
    int i;

    i = 0;
    while (str[i] != '\0')   // keep going until we hit \0
    {
        write(1, &str[i], 1);  // print one character
        i++;
    }
}

// Alternative using pointer arithmetic (same result):
void ft_putstr(char *str)
{
    while (*str)              // *str is 0 (false) when we hit '\0'
    {
        write(1, str, 1);
        str++;                // advance the pointer to the next char
    }
}`}</Code>

      <SubTitle>ft_strlen — counting characters</SubTitle>
      <Code>{`int ft_strlen(char *str)
{
    int i;

    i = 0;
    while (str[i] != '\0')   // loop until null terminator
        i++;
    return (i);              // i now holds the number of chars (NOT counting \0)
}

// "Hello" → returns 5 (H, e, l, l, o)
//           NOT 6 — we don't count the '\0'`}</Code>

      <SubTitle>str[i] vs *(str + i)</SubTitle>
      <Code>{`// These are identical in C:
str[i]      // subscript notation — human-friendly
*(str + i)  // pointer arithmetic — "go i steps from str, then dereference"

// str is a pointer to the first character
// str + 1 points to the second character
// str + i points to the i-th character
// *(str + i) is the value of the i-th character`}</Code>

      <Warning>Never forget the null terminator when working with strings. If you create a char array manually, you must add \0 yourself, or functions like ft_strlen will keep reading beyond your string (undefined behavior).</Warning>
    </div>
  ),

  "arrays": (
    <div>
      <SectionTitle id="arrays">📋 Arrays</SectionTitle>
      <P>An array is a sequence of elements of the same type, stored contiguously in memory. You access elements by index (position), starting from 0.</P>
      <Analogy>An array is like a numbered row of lockers. Locker 0, Locker 1, Locker 2, etc. They're all the same size (same type), right next to each other, and you access them by number (index).</Analogy>

      <SubTitle>Declaring and using arrays</SubTitle>
      <Code>{`int tab[5];           // array of 5 ints: tab[0] to tab[4]
int tab[5] = {3, 1, 4, 1, 5};  // declare and initialize

tab[0]  // first element: 3
tab[1]  // second element: 1
tab[4]  // fifth (last) element: 5
tab[5]  // DANGER: out of bounds! undefined behavior`}</Code>

      <SubTitle>Arrays and pointers — the connection</SubTitle>
      <Code>{`int tab[5] = {10, 20, 30, 40, 50};
int *p = tab;   // tab itself IS a pointer to the first element!
                // You don't need & for arrays (tab == &tab[0])

p[0]   // 10   same as tab[0]
p[1]   // 20   same as tab[1]
*p     // 10   same as tab[0] — pointer to first element
*(p+1) // 20   same as tab[1]`}</Code>

      <SubTitle>ft_rev_int_tab — reversing an array</SubTitle>
      <Code>{`void ft_rev_int_tab(int *tab, int size)
{
    int i;
    int j;
    int temp;

    i = 0;
    j = size - 1;    // j starts at the last element
    while (i < j)    // meet in the middle
    {
        temp = tab[i];    // save left element
        tab[i] = tab[j];  // put right element in left position
        tab[j] = temp;    // put saved element in right position
        i++;
        j--;
    }
}

// Example: {1, 2, 3, 4, 5} → {5, 4, 3, 2, 1}
// Step 1: swap tab[0]=1 and tab[4]=5 → {5, 2, 3, 4, 1}
// Step 2: swap tab[1]=2 and tab[3]=4 → {5, 4, 3, 2, 1}
// Step 3: i=2, j=2 → i < j is false → stop (middle element stays)`}</Code>

      <Tip>When passing an array to a function, you always pass a pointer to its first element. Changes made inside the function affect the original array — no copy is made.</Tip>
    </div>
  ),

  "sorting": (
    <div>
      <SectionTitle id="sorting">📊 Sorting (ft_sort_int_tab)</SectionTitle>
      <P>Sorting means arranging elements in order (ascending = smallest to largest). ft_sort_int_tab sorts an array of integers from smallest to biggest.</P>

      <SubTitle>Bubble Sort — the simplest sorting algorithm</SubTitle>
      <P>Bubble sort works by repeatedly comparing adjacent elements and swapping them if they're in the wrong order. Large values "bubble up" to the end.</P>
      <Code>{`void ft_sort_int_tab(int *tab, int size)
{
    int i;
    int temp;
    int swapped;

    swapped = 1;
    while (swapped)         // repeat until no swaps were made in a full pass
    {
        swapped = 0;
        i = 0;
        while (i < size - 1)
        {
            if (tab[i] > tab[i + 1])    // are neighbours in wrong order?
            {
                temp = tab[i];           // swap them
                tab[i] = tab[i + 1];
                tab[i + 1] = temp;
                swapped = 1;             // signal that a swap happened
            }
            i++;
        }
    }
}`}</Code>

      <SubTitle>Visualising bubble sort on {5, 3, 1, 4, 2}</SubTitle>
      <Code>{`Pass 1: {5, 3, 1, 4, 2}
  5>3? swap → {3, 5, 1, 4, 2}
  5>1? swap → {3, 1, 5, 4, 2}
  5>4? swap → {3, 1, 4, 5, 2}
  5>2? swap → {3, 1, 4, 2, 5}  ← 5 is in place

Pass 2: {3, 1, 4, 2, 5}
  3>1? swap → {1, 3, 4, 2, 5}
  3>4? no
  4>2? swap → {1, 3, 2, 4, 5}  ← 4 is in place

Pass 3: {1, 3, 2, 4, 5}
  1>3? no
  3>2? swap → {1, 2, 3, 4, 5}  ← done!

Pass 4: no swaps → stop.
Result: {1, 2, 3, 4, 5} ✓`}</Code>

      <SubTitle>Selection Sort — another simple approach</SubTitle>
      <Code>{`// Find the minimum, put it first. Find next minimum, put it second. Etc.
void ft_sort_int_tab(int *tab, int size)
{
    int i;
    int j;
    int min_idx;
    int temp;

    i = 0;
    while (i < size - 1)
    {
        min_idx = i;            // assume current position is minimum
        j = i + 1;
        while (j < size)        // find actual minimum in remaining array
        {
            if (tab[j] < tab[min_idx])
                min_idx = j;
            j++;
        }
        if (min_idx != i)       // swap minimum into position i
        {
            temp = tab[i];
            tab[i] = tab[min_idx];
            tab[min_idx] = temp;
        }
        i++;
    }
}`}</Code>

      <Tip>Both approaches are valid for the Piscine. Bubble sort is simpler to understand. Selection sort makes fewer swaps. Either works for the sizes you'll encounter at this level.</Tip>

      <SubTitle>Putting it all together — the full learning path</SubTitle>
      <Code>{`C00: Basics of output and logic
  write() → loops → conditionals → char arithmetic → nested loops → recursion

C01: Memory and indirection
  addresses (&) → pointers (*) → dereferencing (*p) → multi-level pointers
  → pointers as output → strings (char * + \0) → arrays → sorting

This is the entire foundation of C.
Master these, and you can tackle any future Piscine module.`}</Code>
    </div>
  ),
};

export default function App() {
  const [active, setActive] = useState("what-is-c");

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white flex flex-col flex-shrink-0 overflow-y-auto">
        <div className="p-4 border-b border-indigo-700">
          <div className="text-xs text-indigo-300 font-semibold uppercase tracking-widest mb-1">42 C Piscine</div>
          <div className="text-xl font-bold">C Mastery Guide</div>
          <div className="text-xs text-indigo-300 mt-1">C00 + C01 — From Zero to Pointer</div>
        </div>
        <nav className="flex-1 p-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all ${
                active === s.id
                  ? "bg-indigo-500 text-white font-semibold"
                  : "text-indigo-200 hover:bg-indigo-800"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-indigo-700 text-xs text-indigo-400 text-center">
          Built for the 42 Piscine learner
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          {content[active]}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {sections.findIndex((s) => s.id === active) > 0 && (
              <button
                onClick={() => setActive(sections[sections.findIndex((s) => s.id === active) - 1].id)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 text-sm font-medium"
              >
                ← {sections[sections.findIndex((s) => s.id === active) - 1].label}
              </button>
            )}
            <div />
            {sections.findIndex((s) => s.id === active) < sections.length - 1 && (
              <button
                onClick={() => setActive(sections[sections.findIndex((s) => s.id === active) + 1].id)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
              >
                {sections[sections.findIndex((s) => s.id === active) + 1].label} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
