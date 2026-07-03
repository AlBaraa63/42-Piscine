int ft_iterative_factorial(int nb)
{
	int result = 1;
	if (nb < 0)
		return 0;
	while (nb > 1)
	{
		result = result * nb;
		nb--;
	}
	return result;
}

#include <stdio.h>

int	ft_iterative_factorial(int nb);

int	main(void)
{
	printf("factorial(-1) = %d\n", ft_iterative_factorial(-1));
	printf("factorial(0)  = %d\n", ft_iterative_factorial(0));
	printf("factorial(1)  = %d\n", ft_iterative_factorial(1));
	printf("factorial(5)  = %d\n", ft_iterative_factorial(5));
	printf("factorial(10) = %d\n", ft_iterative_factorial(10));
	return (0);
}
