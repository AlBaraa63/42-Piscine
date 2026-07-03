/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strstr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aalolabi <aalolabi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/06/19 22:13:33 by aalolabi          #+#    #+#             */
/*   Updated: 2026/06/21 20:26:07 by aalolabi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strstr(char *str, char *to_find)
{
	int	i;
	int	j;

	i = 0;
	while (str[i] != '\0')
	{
		j = 0;
		while (str[i + j] != '\0' && str[i + j] == to_find[j])
			j++;
		if (to_find[j] == '\0')
			return (&str[i]);
		i++;
	}
	if (to_find[0] == '\0')
		return (str);
	return (0);
}

#include <stdio.h>

char	*ft_strstr(char *str, char *to_find);

int main(void)
{
	printf("%s\n", ft_strstr("hello world", "world"));   // "world"
	printf("%s\n", ft_strstr("hello world", "hello"));   // "hello world"
	printf("%s\n", ft_strstr("hello world", "xyz"));     // (null)
	printf("%s\n", ft_strstr("hello world", ""));        // "hello world"
	printf("%s\n", ft_strstr("abc", "abcd"));             // (null, to_find longer than str)
	return (0);
}
