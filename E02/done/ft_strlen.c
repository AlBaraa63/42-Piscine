int	ft_strlen(char *str)
{
    int i = 0;
    while(str[i])
        i++;
    
    return i;
}

#include <stdio.h>

int main(void)
{
    char *sne = "hello 12312 32112231";

    printf("%d\n", ft_strlen(sne));

}