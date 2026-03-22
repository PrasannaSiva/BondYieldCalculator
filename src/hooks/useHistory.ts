import { useState, useEffect, useCallback } from 'react';
import { CalculationHistory, BondInputs, BondResults } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Keep history small so we don't slowly bloat device storage.
const STORAGE_KEY = '@bond_calc_history';
const MAX_HISTORY = 10;
interface UseHistoryReturn {
  history: CalculationHistory[];
  loading: boolean;
  addEntry: (inputs: BondInputs, results: BondResults) => void;
  clearHistory: () => Promise<void>;
}
export function useHistory(): UseHistoryReturn {
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as CalculationHistory[];
          setHistory(parsed);
        }
      } catch (error) {
        console.error('Failed to load history:', error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);
  const persist = useCallback(async (items: CalculationHistory[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save history:', error);
    }
  }, []);
  const addEntry = useCallback(
    (inputs: BondInputs, results: BondResults) => {
      const newEntry: CalculationHistory = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        inputs,
        results,
      };
      setHistory(prev => {
        // Functional update keeps the persisted list in sync with state.
        const updated = [newEntry, ...prev].slice(0, MAX_HISTORY);
        persist(updated);
        return updated;
      });
    },
    [persist],
  );
  const clearHistory = useCallback(async () => {
    setHistory([]);
    await AsyncStorage.removeItem(STORAGE_KEY);
  }, []);
  return {
    history,
    loading,
    addEntry,
    clearHistory,
  };
}
