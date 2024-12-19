import { component$ } from '@builder.io/qwik';

export const CashFlow = component$(() => {
  return (
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-semibold text-gray-900">Cash Flow</h2>
        <select class="text-sm border border-gray-200 rounded-lg px-3 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      
      <div class="h-64 flex items-end justify-between gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} class="flex flex-col items-center gap-2 flex-1">
            <div 
              class={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-teal-500' : 'bg-blue-600'}`} 
              style={`height: ${Math.random() * 100}%`}
            />
            <span class="text-xs text-gray-500">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
});