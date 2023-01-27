import { ICosmosWallet } from '@gotabit/wallet-core'
import { GotabitClient } from '@gotabit/client'

export interface GotabitContextType {
  client?: GotabitClient
  active: boolean
  activating: boolean
  accounts?: string[]
  wallet?: ICosmosWallet
  error?: Error
  disconnect: () => void
}
