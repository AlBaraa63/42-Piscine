#include <stdio.h>

char    *ft_strrev(char *str)
{
	int i = 0;
	while (str[i])
		i++;

	char temp;
	int last = i -1;
	while (last > i)
	{
		temp = str[i];
		str[i ] = str[last];
		str[last] = temp;

		i++;
		last--;
	}
	return str;
	
}
int	main(void)
{
	char	str[17] = "words and letters";

	printf("Regular String: %s\n", str);
	printf("Reversed String: %s\n", ft_strrev(str));
} 
