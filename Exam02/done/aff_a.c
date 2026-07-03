#include <unistd.h>
#include <stdio.h>

int main(int ac, char **av)
{
    int i = 0;
    if (ac == 2)
    {
        while (av[1][i])
        {    
            if (av[1][i] != 'A' || av[1][i] != 'a')
            {
                write(1, "a",1);
                break;
            } 
            else
                i++;
        }
        write(1,"\n",1);
    }
    else
    {
        write(1,"a\n",2)
    }
}