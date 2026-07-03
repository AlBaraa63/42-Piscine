#include <stdio.h>

void ft_swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 5;

    printf("Before swap: a = %d, b = %d\n", a, b);
    ft_swap(&a, &b);
    printf("After swap:  a = %d, b = %d\n", a, b);
    return (0);
}