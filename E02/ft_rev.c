
#include <unistd.h>

char    *ft_strrev(char *str)
{
    int i = 0;
    while (str[i])
        i++;

    while (i >= 0)
    {
        write(1, &str[i], 1);
        i--;
    }
    write(1, "\n", 1);
    return str;
}


#include <stdio.h>

int main(void)
{
	char string[] = "AlBaraa";

	ft_strrev(string);
	printf("%s\n", string);
	return (0);
}