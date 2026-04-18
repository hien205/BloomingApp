import { create } from "zustand";

type AlarmState = {
  bedtime: string;
  alarm: string;
  setBedtime: (time: string) => void;
  setAlarm: (time: string) => void;
};

export const useAlarmStore = create<AlarmState>((set) => ({
  bedtime: "09:00 PM",
alarm: "05:00 AM",
  setBedtime: (time) => set({ bedtime: time }),
  setAlarm: (time) => set({ alarm: time }),
}));