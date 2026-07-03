char	*ft_strrev(char *str)
{
    int len = 0;
    int is;
    int ir;

    while (str[len])
        len++;
    char rstr[len + 1];

    is = len - 1;
    ir = 0;

    while( is >= 0)
    {
        rstr[ir] = str[is];
        ir++;
        is--;
    }
    rstr[ir] = '\0';

    int j = 0; 
    while (rstr[j])
    {
        str[j] = rstr[j];
        j++;
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