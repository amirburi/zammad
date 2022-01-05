// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import type { SingleValueStore } from '@common/types/store'
import { defineStore } from 'pinia'

const useApplicationLoadedStore = defineStore('applicationLoaded', {
  state: (): SingleValueStore<boolean> => {
    return {
      value: false,
    }
  },
  getters: {
    loading(): boolean {
      return !this.value
    },
  },
  actions: {
    setLoaded(): void {
      this.value = true

      const loadingAppElement: Maybe<HTMLElement> =
        document.getElementById('loading-app')
      if (loadingAppElement) {
        loadingAppElement.remove()
      }
    },
  },
})

export default useApplicationLoadedStore
