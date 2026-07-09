//app/admin/page.tsx

import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/TopBar";
import { StatCard, StatusCard } from "@/components/admin/StatCard";
import EnergyConsumptionChart from "@/components/admin/EnergyConsumptionChart";
import TotalEnergyChart from "@/components/admin/TotalEnergyChart";
import MapCard from "@/components/admin/MapCard";
import DeviceStatusTable from "@/components/admin/DeviceStatusTable";
import RecentAlertsList from "@/components/admin/RecentAlertsList";
import AIInsightsPanel from "@/components/admin/AIInsightsPanel";
import theme from "@/config/theme.js";
import { statCards } from "@/data/mockData";
import { Zap, Building2, Gauge, AlertTriangle } from "lucide-react";


export default function () {
  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: theme.page.background }}
    >
      <Sidebar />

      <main className="flex-1">
        <TopBar />

        <div className="px-[8px] pb-[20px] relative">
          <h1
            className="mb-[30px] bg-white px-[6px] py-[10px] rounded-card"
            style={{ color: theme.page.heading }}
          >
            Smart energy management system in academic building
          </h1>

          {/* Stat cards */}
          <div className="flex gap-[30px] mb-[30px] flex-wrap">
            <StatCard
              variant="energyToday"
              icon={<Zap size={50} />}
              title="Energy Today"
              value={statCards.energyToday.value}
              unit={statCards.energyToday.unit}
              badgeText={statCards.energyToday.status}
            />
            <StatCard
              variant="realPower"
              icon={<Building2 size={50} />}
              title="Real Power"
              value={statCards.realPower.value}
              unit={statCards.realPower.unit}
              badgeText={statCards.realPower.status}
            />
            <StatCard
              variant="powerFactor"
              icon={<Gauge size={50} />}
              title="Power Factor"
              value={statCards.powerFactor.value}
              badgeText={statCards.powerFactor.status}
            />
            <StatusCard
              icon={<AlertTriangle size={50} />}
              count={statCards.statusAlert.count}
              label={statCards.statusAlert.label}
            />
          </div>

          {/* Charts */}
          <div className="flex gap-[20px] mb-[20px] flex-wrap">
            <EnergyConsumptionChart />
            <TotalEnergyChart />
          </div>

          {/* Map */}
          <div className="mb-[30px] ">
            <MapCard />
          </div>

          {/* Device Status + Recent Alerts */}
          <div className="flex gap-[20px] mb-[20px] flex-wrap">
            <DeviceStatusTable />
            <RecentAlertsList />
          </div>

          {/* AI Insights */}
          <AIInsightsPanel />
        </div>
      </main>
    </div>
  );
}