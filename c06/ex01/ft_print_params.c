int main(int ac, char **av)
{
    int i;
    int j;
    i = 1;

    while(ac >  i)
    {
        j = 0;
        while(av[i][j] != '\0')
        {
            write(1, &av[i][j], 1);
            j++;
        }
        i++;
        write(1, "\n", 1);
    }
    return 0;
}