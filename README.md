# 42 Abu Dhabi - Piscine

My work from the 42 Abu Dhabi C Piscine. Passed the final exam with **66%**.

The Piscine is 42's introductory bootcamp: daily C exercises building from `printf`-less basics up to recursion and dynamic memory, plus a set of shell/Unix exercises. Below is a walkthrough of every exercise in this repo.

## Contents

- [C00 - The Basics](#c00---the-basics)
- [C01 - Pointers & Basic Functions](#c01---pointers--basic-functions)
- [C02 - String Manipulation I](#c02---string-manipulation-i)
- [C03 - String Manipulation II](#c03---string-manipulation-ii)
- [C04 - Strings, Numbers & argv](#c04---strings-numbers--argv)
- [C05 - Recursion & Algorithms](#c05---recursion--algorithms)
- [C06 - Program Arguments](#c06---program-arguments)
- [C07 - Dynamic Arrays & Strings](#c07---dynamic-arrays--strings)
- [Shell00 - Shell Basics](#shell00---shell-basics)
- [Shell01 - Shell Scripting](#shell01---shell-scripting)

---

## C00 - The Basics

First contact with C: no `printf`, only `write`. Focused on loops, conditionals, and basic character output.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_putchar.c` | Writes a single character using `write` |
| ex01 | `ft_print_alphabet.c` | Prints the alphabet `a` to `z` |
| ex02 | `ft_print_reverse_alphabet.c` | Prints the alphabet backwards, `z` to `a` |
| ex03 | `ft_print_numbers.c` | Prints digits `0` to `9` |
| ex04 | `ft_is_negative.c` | Prints `P`, `N`, or `Z` depending on the sign of an int |
| ex05 | `ft_print_comb.c` | Prints all increasing 3-digit combinations (`012`, `013`, ... `789`) |

## C01 - Pointers & Basic Functions

Introduces pointers: passing values by reference, multi-level indirection, and basic array/string handling.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_ft.c` | `void ft_ft(int *nbr)` - increments an int through a pointer |
| ex01 | `ft_ultimate_ft.c` | `void ft_ultimate_ft(int *********nbr)` - increments through 9 levels of pointer indirection |
| ex02 | `ft_swap.c` | Swaps two integers via pointers |
| ex03 | `ft_div_mod.c` | Computes both quotient and remainder in one call, writing to output pointers |
| ex04 | `ft_ultimate_div_mod.c` | Same as above, but `a` and `b` are replaced in place with the div/mod result |
| ex05 | `ft_putstr.c` | Prints a string using `write`, one char at a time |
| ex06 | `ft_strlen.c` | Reimplementation of `strlen` |
| ex07 | `ft_rev_int_tab.c` | Reverses an `int` array in place |
| ex08 | `ft_sort_int_tab.c` | Sorts an `int` array in place (bubble/selection sort) |

## C02 - String Manipulation I

Custom string library functions, operating in place on `char *` buffers.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_strcpy.c` | Reimplementation of `strcpy` |
| ex01 | `ft_strncpy.c` | Reimplementation of `strncpy` |
| ex02 | `ft_str_is_alpha.c` | Checks whether a string is only alphabetic characters |
| ex03 | `ft_str_is_numeric.c` | Checks whether a string is only digits |
| ex04 | `ft_str_is_lowercase.c` | Checks whether a string is all lowercase |
| ex05 | `ft_str_is_uppercase.c` | Checks whether a string is all uppercase |
| ex06 | `ft_str_is_printable.c` | Checks whether every character is printable |
| ex07 | `ft_strupcase.c` | Uppercases a string in place |
| ex08 | `ft_strlowcase.c` | Lowercases a string in place |

## C03 - String Manipulation II

Comparison and concatenation, plus substring search.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_strcmp.c` | Reimplementation of `strcmp` |
| ex01 | `ft_strncmp.c` | Reimplementation of `strncmp` |
| ex02 | `ft_strcat.c` | Reimplementation of `strcat` |
| ex03 | `ft_strncat.c` | Reimplementation of `strncat` |
| ex04 | `ft_strstr.c` | Reimplementation of `strstr` (find substring) |

## C04 - Strings, Numbers & argv

Bridges strings and numbers, and starts reading from `argv`.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_strlen.c` | `strlen`, called from `main` on `argv[1]` |
| ex01 | `ft_putstr.c` | Prints `argv[1]` |
| ex02 | `ft_putnbr.c` | Prints an integer passed as an argument |
| ex03 | `ft_atoi.c` | Reimplementation of `atoi` (string to int) |

## C05 - Recursion & Algorithms

Same problems solved twice: once iteratively, once recursively, then a couple of classic algorithms.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_iterative_factorial.c` | Factorial, iterative |
| ex01 | `ft_recursive_factorial.c` | Factorial, recursive |
| ex02 | `ft_iterative_power.c` | Power function, iterative |
| ex03 | `ft_recursive_power.c` | Power function, recursive |
| ex04 | `ft_fibonacci.c` | Fibonacci sequence, recursive |
| ex05 | `ft_sqrt.c` | Integer square root without using `math.h` |

## C06 - Program Arguments

Working directly with `argc`/`argv`.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_print_program_name.c` | Prints `argv[0]` (the program's own name) |
| ex01 | `ft_print_params.c` | Prints each argument on its own line |
| ex02 | `ft_rev_params.c` | Prints the arguments in reverse order |

## C07 - Dynamic Arrays & Strings

First use of `malloc`: functions that allocate and return new strings/arrays instead of writing in place.

| Exercise | File | What it does |
|---|---|---|
| ex00 | `ft_strdup.c` | Reimplementation of `strdup` |
| ex01 | `ft_range.c` | Allocates and fills an array with every int from `min` to `max` |
| ex02 | `ft_ultimate_range.c` | Same as `ft_range`, but allocates through a `int **` output parameter and returns the size |
| ex03 | `ft_strjoin.c` | Joins an array of strings with a separator into one allocated string |

## Shell00 - Shell Basics

Unix fundamentals: navigation, permissions, tar/compression, SSH keys, git, and diff/patch.

| Exercise | What it covers |
|---|---|
| ex00 | Basic file creation (`z`) |
| ex01 | Working with `tar` archives |
| ex02 | More `tar`/archive extraction |
| ex03 | Generating an SSH key pair (`id_rsa` / `id_rsa.pub`) |
| ex04 | Custom `ls` alias (`ls -mtp`) |
| ex05 | `git log` - listing the last 5 commit hashes |
| ex06 | `git ls-files` - listing files ignored by `.gitignore` |
| ex07 | `diff`/patch between two files (`a`, `b` -> `sw.diff`) |

## Shell01 - Shell Scripting

Short one-liner scripts combining core Unix tools.

| Exercise | File | What it does |
|---|---|---|
| ex01 | `print_groups.sh` | Lists a user's groups, comma-separated (`id -nG`, `tr`) |
| ex02 | `find_sh.sh` | Finds all `.sh` files recursively and prints their names without the extension |
| ex03 | `count_files.sh` | Counts every file/dir under the current directory (`find \| wc -l`) |
| ex04 | `MAC.sh` | Extracts MAC addresses from `ifconfig` output with a regex |
| ex06 | `skip.sh` | Prints every other line of `ls -l` output (`sed -n 'p;n'`) |
