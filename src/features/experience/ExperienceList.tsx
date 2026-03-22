import React from 'react';
import { Briefcase, Plus, MoreVertical, Calendar, MapPin, Building2 } from 'lucide-react';

// --- Mock Data ---
interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    skills: string[];
}

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
        skills: ['React', 'TypeScript', 'Tailwind', 'Zustand']
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
        skills: ['Node.js', 'Express', 'MongoDB', 'React']
    }
];

export const ExperienceList: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#10221C]/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 shadow-inner">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Experiencia</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tu trayectoria y evolución profesional.</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-md shadow-purple-900/10 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-[#0B1120]">
                    <Plus className="h-4 w-4" />
                    Añadir Experiencia
                </button>
            </div>

            {/* Timeline Container */}
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8 pb-4">

                {mockExperience.map((exp, index) => (
                    <div key={exp.id} className="relative pl-8 md:pl-12">

                        {/* Timeline Dot */}
                        <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-4 border-slate-100 dark:border-[#0B1120] ${exp.current ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-600'
                            }`} />

                        {/* Experience Card */}
                        <div className="group bg-white dark:bg-[#17262C] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all">

                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Building2 className="h-4 w-4 text-purple-500" />
                                            {exp.company}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-slate-400" />
                                            {exp.startDate} — {exp.endDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Options Menu */}
                                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <MoreVertical className="h-5 w-5" />
                                </button>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            {/* Tech Stack Used */}
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-[#0B1120] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};