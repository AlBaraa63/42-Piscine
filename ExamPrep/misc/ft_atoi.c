#include <unistd.h>
#include <stdio.h>

int	ft_atoi(const char *str)
{
	int i = 0;
	int sign = 1;
	int sum = 0;

	while (str[i] == ' ' || (str[i] >= 9 && str[i] <= 13))
		i++;

	if (str[i] == '-')
	{
		sign *= sign;
		i++;
	}

	while (str[i] >= '0' && str[i] <= '9')
	{
		sum = (sum * 10)+ (str[i]- '0');
	}
	return (sign * sum);
}

int	main(void)
{
	char *n = "     -1234ab567";

	// The original atoi is in the Library <stdlib.h>
	// printf("Or: %d\n", atoi(n));
	printf("My: %d\n", ft_atoi(n));
} 
