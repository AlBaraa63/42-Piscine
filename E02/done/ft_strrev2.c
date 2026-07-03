char	*ft_strrev(char *str)
{
    int len;
    int is;
    int ir;
    int r;

    len = 0;
    while(str[len])
        len++;
    
    char revrce[len + 1];
    is = len - 1;
    ir = 0;
    while (is >= 0)
    {
        revrce[ir] = str[is];
        is--;
        ir++;
    }
    revrce[ir] = '\0';

    r = 0;
    while (revrce[r])
    {
        str[r] = revrce[r];
        r++;
    }
    return str;
}

#include <stdio.h>

int main(void)
{
	char string[] = "AlBaraa";

	printf("before: %s\n", string);
	ft_strrev(string);
	printf("after:  %s\n", string);
	return (0);
}