char *ft_strcpy(char *dest, char *src)
{
	int 		i;
	i = 0;
	while (*src)
	{
		dest[i] = *src;
		i++;
		src++;
	}
	dest[i] = '\0';
	return (dest);
}
