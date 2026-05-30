import { create } from 'zustand'

export const useMirrorStore = create((set, get) => ({
  selectedViewpoint: null,
  customViewpoint: '',
  analysisResult: null,
  isLoading: false,
  isLocked: false,
  isFallback: false,

  selectViewpoint: (viewpoint) =>
    set({ selectedViewpoint: viewpoint, customViewpoint: '', analysisResult: null }),

  setCustomViewpoint: (text) =>
    set({ customViewpoint: text, selectedViewpoint: null, analysisResult: null }),

  startAnalysis: () => set({ isLoading: true, analysisResult: null }),

  setResult: (result, isFallback = false) =>
    set({ analysisResult: result, isLoading: false, isFallback }),

  setError: (error) =>
    set({ analysisResult: { error }, isLoading: false }),

  resetAnalysis: () =>
    set({ analysisResult: null, isLoading: false }),

  triggerHardStop: () => set({ isLocked: true }),

  getActiveText: () => {
    const { selectedViewpoint, customViewpoint } = get()
    return selectedViewpoint?.text || customViewpoint || null
  },
}))
