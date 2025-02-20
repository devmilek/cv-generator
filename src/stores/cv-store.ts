import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Step = 'basic' | "summary" | 'experience' | 'education';

export interface BasicsFormFields {
    imageSrc?: string
    firstName?: string
    lastName?: string
    jobTitle?: string
    email?: string
    website?: string
    phone?: string
    country?: string
    city?: string
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

export interface EducationEntry {
    id: string
    institution: string
    degree: string
    areaOfStudy?: string
    startDate?: Date
    endDate?: Date
    score?: string
    summary?: string
}

interface CVStore {
    basics: BasicsFormFields
    experience: ExperienceEntry[]
    education: EducationEntry[]
    step: Step
    updateBasics: (data: Partial<BasicsFormFields>) => void
    resetBasics: () => void
    addExperience: (entry: ExperienceEntry) => void
    updateExperience: (id: string, data: Partial<ExperienceEntry>) => void
    deleteExperience: (id: string) => void
    resetExperience: () => void
    addEducation: (entry: EducationEntry) => void
    updateEducation: (id: string, data: Partial<EducationEntry>) => void
    deleteEducation: (id: string) => void
    resetEducation: () => void
    updateStep: (step: Step) => void
    resetStep: () => void
    nextStep: () => void
    previousStep: () => void
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

export const steps: Step[] = ['basic', 'summary', 'experience', 'education']

export const useCVStore = create<CVStore>()(
    persist(
        (set, get) => ({
            basics: initialBasics,
            experience: [],
            education: [],
            step: 'basic',
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
                })),
            addEducation: (entry) =>
                set((state) => ({
                    education: [...state.education, entry]
                })),
            updateEducation: (id, data) =>
                set((state) => ({
                    education: state.education.map((entry) =>
                        entry.id === id ? { ...entry, ...data } : entry
                    )
                })),
            deleteEducation: (id) =>
                set((state) => ({
                    education: state.education.filter((entry) => entry.id !== id)
                })),
            resetEducation: () =>
                set(() => ({
                    education: []
                })),
            updateStep: (step) =>
                set(() => ({
                    step
                })),
            resetStep: () =>
                set(() => ({
                    step: 'basic'
                })),
            nextStep: () => {
                const currentStep = get().step
                const currentIndex = steps.indexOf(currentStep)
                const nextIndex = Math.min(currentIndex + 1, steps.length - 1)
                set({ step: steps[nextIndex] })
            },
            previousStep: () => {
                const currentStep = get().step
                const currentIndex = steps.indexOf(currentStep)
                const prevIndex = Math.max(currentIndex - 1, 0)
                set({ step: steps[prevIndex] })
            }
        }),
        {
            name: 'cv-storage'
        }
    )
)