import { component$ } from '@builder.io/qwik';

export const StatCards = component$(() => {
  const stats = [
    {
      title: 'Business Account',
      amount: '€8,672.20',
      change: '+16.05%',
      positive: true,
    },
    {
      title: 'Total Savings',
      amount: '€3,765.35',
      change: '-4.25%',
      positive: false,
    },
    {
      title: 'Tax Reserve',
      amount: '€14,376.16',
      change: '+2.05%',
      positive: true,
    },
    {
      title: 'Income',
      amount: '€12,378.20',
      change: '+6.05%',
      positive: true,
    },
  ];

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="text-sm font-medium text-gray-500">{stat.title}</h3>
          <p class="text-2xl font-semibold text-gray-900 mt-2">{stat.amount}</p>
          <div class="flex items-center mt-2">
            <span
              class={`text-sm font-medium ${
                stat.positive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {stat.change}
            </span>
            <span class="text-sm text-gray-500 ml-2">vs last period</span>
          </div>
        </div>
      ))}
    </div>
  );
});