import React, { useState } from 'react';
import { Briefcase, Plus } from 'lucide-react';
import { ExperienceCard } from './components/ExperienceCard';
import type { Experience } from './components/ExperienceCard';
import { Button } from '../../components/ui/Button';
import { AddExperienceModal } from './AddExperienceModal';

// --- Mock Data ---

const mockExperience: Experience[] = [
    {
        id: '1',
        role: 'Senior Frontend Developer',
        company: 'NOWER Enterprise',
        location: 'Remoto',
        startDate: 'Ene 2024',
        endDate: 'Presente',
        current: true,
        description: 'Liderando el desarrollo de la arquitectura del frontend utilizando React y TailwindCSS. Implementación de sistemas de diseño escalables y optimización del rendimiento web.',
        skills: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'Vite']
    },
    {
        id: '2',
        role: 'Full Stack Developer',
        company: 'Tech Solutions LATAM',
        location: 'Híbrido - Cochabamba',
        startDate: 'Mar 2022',
        endDate: 'Dic 2023',
        current: false,
        description: 'Desarrollo de APIs RESTful con Node.js y Express. Creación de dashboards interactivos para gestión de datos de clientes corporativos.',
        skills: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker']
    }
];



export const ExperienceList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#17262C]/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shadow-inner">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Experiencia</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tu trayectoria y evolución profesional.</p>
                    </div>
                </div>
                <Button variant="primary" icon={Plus} onClick={() => setIsModalOpen(true)}>
                    Añadir Experiencia
                </Button>
            </div>

            {/* Timeline Container - Tinted the line slightly purple! */}
            <div className="relative border-l-2 border-purple-100 dark:border-slate-800 ml-4 md:ml-6 space-y-8 pb-4">

                {mockExperience.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </div>
            <AddExperienceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};