void ft_ultimate_div_mod(int *a, int *b)
{
    int divid;
    int mod;

    divid = *a / *b;
    mod = *a % *b;
    *a = divid;
    *b = mod;
}