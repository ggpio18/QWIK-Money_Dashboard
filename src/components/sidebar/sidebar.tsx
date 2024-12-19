import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Sidebar = component$(() => {
  const menuItems = [
    { label: 'Dashboard', icon: '📊', active: true },
    { label: 'Payment', icon: '💳' },
    { label: 'Transactions', icon: '📝' },
    { label: 'Cards', icon: '💳' },
    { label: 'Capital', icon: '💰' },
    { label: 'Vaults', icon: '🔒' },
    { label: 'Reports', icon: '📈' },
    { label: 'Earnings', icon: '💹' },
  ];

  return (
    <aside class="w-64 bg-white border-r border-gray-200">
      <div class="h-full flex flex-col">
        <div class="p-4 border-b border-gray-200">
          <h1 class="text-xl font-semibold text-gray-800">Sequence</h1>
        </div>
        
        <nav class="flex-1 p-4">
          <ul class="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  class={`flex items-center px-4 py-2 text-sm rounded-lg ${
                    item.active
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span class="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div class="p-4 border-t border-gray-200">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-gray-200"></div>
            <div>
              <p class="text-sm font-medium text-gray-700">Young Alaska</p>
              <p class="text-xs text-gray-500">Pro Account</p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-sm text-gray-600">Pro Mode</span>
            <button class="w-12 h-6 rounded-full bg-teal-500"></button>
          </div>
        </div>
      </div>
    </aside>
  );
});