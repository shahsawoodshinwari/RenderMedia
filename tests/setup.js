import { vi } from 'vitest'

// Mock MazLazyImg component to prevent CSS issues
vi.mock('maz-ui/components/MazLazyImg', () => ({
  default: {},
}))

// Ignore CSS imports globally
vi.mock('maz-ui/components/assets/MazLazyImg.TL9A0G4-.css', () => ({}))
