import React from "react";
import { TrendingUp, ArrowUpRight, Zap, Navigation, Award, AlertTriangle, Cpu, CircleDot } from "lucide-react";

interface AnalyticsProps {
  totalDeliveries: number;
  activeVehicles: number;
  predictedDemand: string;
  congestionRisk: number;
  utilization: number;
  efficiency: number;
  emissionsSaved: number;
  activeScenarioName: string;
}

export default function ExecutiveAnalytics({
  totalDeliveries,
  activeVehicles,
  predictedDemand,
  congestionRisk,
  utilization,
  efficiency,
  emissionsSaved,
  activeScenarioName,
}: AnalyticsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {/* 1. Total Deliveries */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFEDE1] rounded-full filter blur-md opacity-30"></div>
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">TOTAL ROUTINGS</span>
          <ArrowUpRight className="w-4 h-4 text-[#E15307]" />
        </div>
        <div className="z-10">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-black">
            {totalDeliveries.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-[#E15307] font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+14.2% today</span>
          </div>
        </div>
      </div>

      {/* 2. Active Vehicles */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">ACTIVE FLEET</span>
          <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
        </div>
        <div className="z-10">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-black">
            {activeVehicles}
          </span>
          <div className="flex items-center gap-1.5 mt-1 text-[11px] text-emerald-800 font-bold">
            <CircleDot className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
            <span>94% Auton. EVs</span>
          </div>
        </div>
      </div>

      {/* 3. Predicted Demand Index */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">PREDICTION DEMAND</span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        <div className="z-10">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-700">
            {predictedDemand}
          </span>
          <div className="text-[10px] text-neutral-900 mt-1 uppercase font-black truncate">
            {activeScenarioName}
          </div>
        </div>
      </div>

      {/* 4. Congestion Risk */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">CONGESTION RISK</span>
          <AlertTriangle className={`w-3.5 h-3.5 ${congestionRisk > 60 ? "text-rose-600" : "text-amber-500"}`} />
        </div>
        <div className="z-10">
          <span className={`text-xl sm:text-2xl font-black tracking-tight ${congestionRisk > 65 ? "text-red-700 animate-pulse" : "text-amber-600"}`}>
            {congestionRisk}%
          </span>
          <div className="w-full bg-neutral-200 rounded-full h-1.5 mt-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${congestionRisk > 60 ? "bg-red-500" : "bg-amber-500"}`}
              style={{ width: `${congestionRisk}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 5. Fleet Utilization */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">FLEET OPTIM</span>
          <Navigation className="w-3.5 h-3.5 text-sky-600" />
        </div>
        <div className="z-10">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-black">
            {utilization}%
          </span>
          <div className="items-center mt-1 text-[11px] text-sky-800 font-bold">
            <span>+8.9% capacity load</span>
          </div>
        </div>
      </div>

      {/* 6. Network Efficiency Score */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">NET EFFICIENCY</span>
          <Cpu className="w-3.5 h-3.5 text-violet-600" />
        </div>
        <div className="z-10">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-800">
            {efficiency}/100
          </span>
          <div className="w-full bg-neutral-200 rounded-full h-1.5 mt-1.5 overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${efficiency}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 7. Carbon Credits */}
      <div className="bg-white border-2 border-neutral-300 hover:border-[#FFB800] rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2 z-10">
          <span className="text-[10px] text-neutral-800 font-extrabold uppercase tracking-wider">CARBON SAVED</span>
          <Award className="w-3.5 h-3.5 text-teal-600" />
        </div>
        <div className="z-10">
          <div className="text-xl sm:text-2xl font-black tracking-tight text-teal-700">
            {emissionsSaved} CC
          </div>
          <div className="mt-1 flex flex-col text-[10px] font-bold leading-normal text-neutral-800">
            <span>Offset: <strong className="text-teal-700">{emissionsSaved}t CO₂</strong></span>
            <span>Value: <strong className="text-emerald-700">${(emissionsSaved * 45).toLocaleString()}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
