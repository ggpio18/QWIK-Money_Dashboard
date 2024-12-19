import { component$ } from '@builder.io/qwik';

export const RecentActivity = component$(() => {
  const transactions = [
    {
      name: 'Thea Lawrence',
      date: 'Aug - Oct 15 2024',
      amount: '€150.00',
      status: 'Success',
      method: 'Credit Card',
    },
    {
      name: 'Amy March',
      date: 'Sept - May 04 2024',
      amount: '€250.00',
      status: 'Pending',
      method: 'Bank Transfer',
    },
  ];

  return (
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-sm border border-gray-200 rounded-lg">
            Filter
          </button>
          <button class="px-3 py-1 text-sm border border-gray-200 rounded-lg">
            Sort
          </button>
        </div>
      </div>

      <div class="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.name}
            class="flex items-center justify-between py-3 border-b border-gray-100"
          >
            <div>
              <p class="font-medium text-gray-900">{tx.name}</p>
              <p class="text-sm text-gray-500">{tx.date}</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-gray-900">{tx.amount}</p>
              <p class="text-sm text-gray-500">{tx.method}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});