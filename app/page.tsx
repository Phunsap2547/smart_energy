import { Zap, Building2, Gauge, AlertTriangle } from "lucide-react";
import Sidebar from "@/components/user/Sidebar";
import TopBar from "@/components/user/TopBar";
import { StatCard, StatusCard } from "@/components/user/StatCard";
import EnergyConsumptionChart from "@/components/user/EnergyConsumptionChart";
import TotalEnergyChart from "@/components/user/TotalEnergyChart";
import MapCard from "@/components/user/MapCard";
import theme from "@/config/theme.js";
import { statCards } from "@/data/mockData";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: theme.page.background }}>
      <Sidebar />

      <main className="flex-1">
        <TopBar />

        <div className="px-[8px] pb-[20px] relative ">
          <div
            className="flex justify-center items-center mb-[30px] bg-white px-[20px] py-[10px] rounded-card shadow-card"
          >
            <h1
              className="text-xl font-bold text-center"
              style={{ color: theme.page.heading }}
            >
              Smart energy management system in academic building
            </h1>
          </div>

          {/* Stat cards */}
          <div className="flex gap-[30px] mb-[30px] flex-wrap"
          /*style={{ 
               background: theme.stats.energyToday.energytodayPillBg, }}*/
          >
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
          <div className="max-w-xl mx-auto">
            <MapCard />
          </div>
        </div>
      </main>
    </div>
  );
}
