import { useMirrorStore } from '../stores/mirrorStore'

export function useHardStop() {
  const { isLocked, triggerHardStop } = useMirrorStore()
  return { isLocked, triggerHardStop }
}
