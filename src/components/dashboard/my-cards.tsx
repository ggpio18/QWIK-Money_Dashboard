import { component$ } from '@builder.io/qwik';

export const MyCards = component$(() => {
  return (
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-semibold text-gray-900">My Cards</h2>
        <button class="text-sm text-teal-600">See All →</button>
      </div>

      <div class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
        <div class="flex justify-between items-start mb-8">
          <div>
            <p class="text-sm opacity-80">Current Balance</p>
            <p class="text-2xl font-semibold mt-1">€4,540.20</p>
          </div>
          <span class="text-2xl">VISA</span>
        </div>
        <div class="text-lg tracking-widest">**** **** **** 2334</div>
      </div>
    </div>
  );
});