#include <unistd.h>
#include <stdio.h>

char    *ft_strcpy(char *s1, char *s2)
{
	int i = 0;
	while(s2[i])
	{
		s1[i] = s2[i];
		i++;
	}
	s1[i] = '\0';
	return s1;
}
int	main(void)
{
	char	s1[] = "ahamd";
	char	s2[] = "word";

	printf("Before: %s\n", s1);
	ft_strcpy(s1, s2);
	printf("After: %s\n", s1);
}
