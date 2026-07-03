/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strjoin.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aalolabi <aalolabi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/06/29 18:29:08 by aalolabi          #+#    #+#             */
/*   Updated: 2026/06/29 19:33:29 by aalolabi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

static int	ft_strlen(char *str)
{
	int	len;

	len = 0;
	while (str[len])
		len++;
	return (len);
}

static int	ft_total_len(int size, char **strs, char *sep)
{
	int	total;
	int	sep_len;
	int	i;

	total = 0;
	sep_len = ft_strlen(sep);
	i = 0;
	while (i < size)
	{
		total += ft_strlen(strs[i]);
		if (i < size - 1)
			total += sep_len;
		i++;
	}
	return (total);
}

static void	ft_fill(char *result, int size, char **strs, char *sep)
{
	int	pos;
	int	i;
	int	j;

	pos = 0;
	i = 0;
	while (i < size)
	{
		j = 0;
		while (strs[i][j])
			result[pos++] = strs[i][j++];
		if (i < size - 1)
		{
			j = 0;
			while (sep[j])
				result[pos++] = sep[j++];
		}
		i++;
	}
	result[pos] = '\0';
}

char	*ft_strjoin(int size, char **strs, char *sep)
{
	char	*result;
	int		total;

	if (size == 0)
	{
		result = (char *)malloc(1);
		if (result)
			result[0] = '\0';
		return (result);
	}
	total = ft_total_len(size, strs, sep);
	result = (char *)malloc(total + 1);
	if (!result)
		return (NULL);
	ft_fill(result, size, strs, sep);
	return (result);
}
