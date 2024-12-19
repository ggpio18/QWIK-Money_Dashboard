import { component$ } from '@builder.io/qwik';

export const TopNav = component$(() => {
  return (
    <header class="bg-white border-b border-gray-200">
      <div class="px-6 py-4 flex items-center justify-between">
        <div class="flex items-center flex-1">
          <div class="w-64 max-w-xs">
            <input
              type="search"
              placeholder="Search..."
              class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div class="ml-6">
            <button class="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              18 Oct 2024 - 18 Nov 2024
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <button class="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            Export Report
          </button>
        </div>
      </div>
    </header>
  );
});