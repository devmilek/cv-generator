import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface BasicsFormFields {
    imageSrc: string
    firstName: string
    lastName: string
    jobTitle: string
    email: string
    website: string
    phone: string
    country: string
    city: string
}

export interface ExperienceEntry {
    id: string
    jobTitle: string
    employer: string
    startDate?: Date
    endDate?: Date
    location?: string
    summary?: string
    website?: string
}

interface CVStore {
    basics: BasicsFormFields
    experience: ExperienceEntry[]
    updateBasics: (data: Partial<BasicsFormFields>) => void
    resetBasics: () => void
    addExperience: (entry: ExperienceEntry) => void
    updateExperience: (id: string, data: Partial<ExperienceEntry>) => void
    deleteExperience: (id: string) => void
    resetExperience: () => void
}

const initialBasics: BasicsFormFields = {
    imageSrc: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    website: '',
    phone: '',
    country: '',
    city: ''
}

export const useCVStore = create<CVStore>()(
    persist(
        (set) => ({
            basics: initialBasics,
            experience: [],
            updateBasics: (data) =>
                set((state) => ({
                    basics: { ...state.basics, ...data }
                })),
            resetBasics: () =>
                set(() => ({
                    basics: initialBasics
                })),
            addExperience: (entry) =>
                set((state) => ({
                    experience: [...state.experience, entry]
                })),
            updateExperience: (id, data) =>
                set((state) => ({
                    experience: state.experience.map((entry) =>
                        entry.id === id ? { ...entry, ...data } : entry
                    )
                })),
            deleteExperience: (id) =>
                set((state) => ({
                    experience: state.experience.filter((entry) => entry.id !== id)
                })),
            resetExperience: () =>
                set(() => ({
                    experience: []
                }))
        }),
        {
            name: 'cv-storage'
        }
    )
)