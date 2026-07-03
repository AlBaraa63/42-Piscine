#include <unistd.h>

char *ft_rev_print (char *str)
{
    int i = 0;

    if (!str)
    {
        write(1, "\n", 1);
        return str;
    }
    while (str[i] != '\0')
        i++;
    i--;

    while (i >= 0)
    {
        write(1, &str[i], 1);
        i--;
    }
    write(1, "\n", 1);
    return (str);
}

int main(int argc, char **argv)
{
	if (argc > 1)
		ft_rev_print(argv[1]);
	else
		ft_rev_print(NULL);
	return (0);
}