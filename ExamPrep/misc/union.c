#include <unistd.h>

int main(int ac, char **av)
{
	int i;
	int j;
	int k;
	char ud[256] = {0};

	if (ac == 3)
	{
		i = 1;
		while (i < ac)
		{
			j = 0;
			while (av[i][j] != '\0')
			{
				k = 0;
				while(ud[k] != '\0' && ud[k] != av[i][j])
					k++;
				if (ud[k] == '\0')
                  	ud[k] = av[i][j];
				j++;
			}
			i++;
		}
		i = 0;
		while (ud[i])
		{
			write(1, &ud[i], 1);
			i++;
		}
	}
	write(1, "\n", 1);
	return(0);
}
