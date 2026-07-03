/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_iterative_factorial.c                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aalolabi <aalolabi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/06/20 22:53:29 by aalolabi          #+#    #+#             */
/*   Updated: 2026/06/28 14:02:05 by aalolabi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_iterative_factorial(int nb)
{
	int	i;
	int	r;

	if (nb < 0)
		return (0);
	r = 1;
	i = 1;
	while (i <= nb)
	{
		r = r * i;
		i++;
	}
	return (r);
}
