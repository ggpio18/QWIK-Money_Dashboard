import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Sidebar } from '~/components/sidebar/sidebar';
import { TopNav } from '~/components/top-nav/top-nav';
import { Dashboard } from '~/components/dashboard/dashboard';

export default component$(() => {
  return (
    <div class="flex h-screen bg-gray-50">
      <Sidebar />
      <div class="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <Dashboard />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sequence - Financial Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Professional financial management dashboard',
    },
  ],
};