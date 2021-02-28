export const transform = data =>
  data.reduce(
    (acc, current) => {
      const { revenue, game, os, country } = current;
      acc.totalRevenue += revenue;
      if (!acc.applications[game]) {
        acc.applications[game] = {
          name: game,
          revenue: 0,
          countries: {},
        };
      }
      acc.applications[game].revenue += revenue;
      if (!acc.applications[game].countries[country]) {
        acc.applications[game].countries[country] = {
          name: country,
          revenue: 0,
          platforms: {},
        };
      }
      acc.applications[game].countries[country].revenue += revenue;
      if (!acc.applications[game].countries[country].platforms[os]) {
        acc.applications[game].countries[country].platforms[os] = {
          name: os,
          revenue: 0,
        };
      }
      acc.applications[game].countries[country].platforms[
        os
      ].revenue += revenue;
      return acc;
    },
    {
      applications: {},
      totalRevenue: 0,
    },
  );
