import { component$ } from '@builder.io/qwik';
import { BalanceCard } from './balance-card';
import { CashFlow } from './cash-flow';
import { StatCards } from './stat-cards';
import { RecentActivity } from './recent-activity';
import { MyCards } from './my-cards';

export const Dashboard = component$(() => {
  return (
    <main class="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto space-y-6">
        <BalanceCard />
        <CashFlow />
        <StatCards />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <MyCards />
        </div>
      </div>
    </main>
  );
});