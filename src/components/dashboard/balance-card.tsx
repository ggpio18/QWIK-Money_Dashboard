import { component$ } from '@builder.io/qwik';

export const BalanceCard = component$(() => {
  return (
    <div class="bg-teal-700 rounded-xl p-6 text-white">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-sm font-medium opacity-80">Total Balance</h2>
          <p class="text-3xl font-semibold mt-1">€320,845.20</p>
          <div class="flex items-center mt-2">
            <span class="text-teal-300">+15.16%</span>
            <span class="ml-2 opacity-60">vs last month</span>
          </div>
        </div>
        <div class="flex space-x-3">
          <button class="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-500">
            + Add
          </button>
          <button class="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-500">
            Send
          </button>
          <button class="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-500">
            Request
          </button>
        </div>
      </div>
    </div>
  );
});