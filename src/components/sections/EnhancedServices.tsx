import React from 'react';
import { motion } from 'framer-motion';
import { Pen, Layers, Cog, Wrench, Building, Home, Box, Zap, Calendar, Calculator, Code, FileCode, Coffee, Terminal, Bot, BarChart, Ruler, Compass, Grid3X3, Settings, Cpu, Database, Monitor, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
const EnhancedServices = () => {
  const {
    translations
  } = useLanguage();
  const cadServices = [{
    name: 'AutoCAD',
    icon: Pen,
    link: 'https://www.autodesk.com/products/autocad/overview'
  }, {
    name: 'CREO',
    icon: Cog,
    link: 'https://www.ptc.com/en/products/cad/creo'
  }, {
    name: 'CATIA',
    icon: Layers,
    link: 'https://www.3ds.com/products-services/catia/'
  }, {
    name: 'Solid Works',
    icon: Wrench,
    link: 'https://www.solidworks.com/'
  }, {
    name: 'NX CAD & NX CAM',
    icon: Settings,
    link: 'https://www.plm.automation.siemens.com/global/en/products/nx/'
  }, {
    name: 'ANSYS Workbench',
    icon: Activity,
    link: 'https://www.ansys.com/products/structures/ansys-mechanical'
  }, {
    name: 'Hypermesh',
    icon: Grid3X3,
    link: 'https://www.altair.com/hypermesh/'
  }, {
    name: 'AutoCAD Civil 3D',
    icon: Ruler,
    link: 'https://www.autodesk.com/products/autocad-civil-3d/overview'
  }, {
    name: 'Revit Architecture',
    icon: Building,
    link: 'https://www.autodesk.com/products/revit/overview'
  }, {
    name: '3Ds Max',
    icon: Box,
    link: 'https://www.autodesk.com/products/3ds-max/overview'
  }, {
    name: 'STAAD.PRO',
    icon: Home,
    link: 'https://www.bentley.com/en/products/brands/staad'
  }, {
    name: 'ETABS',
    icon: Building,
    link: 'https://www.csiamerica.com/products/etabs'
  }, {
    name: 'AutoCAD Electrical',
    icon: Zap,
    link: 'https://www.autodesk.com/products/autocad-electrical/overview'
  }, {
    name: 'MS Project',
    icon: Calendar,
    link: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software'
  }, {
    name: 'Primavera',
    icon: Calendar,
    link: 'https://www.oracle.com/industries/construction-engineering/primavera-p6/'
  }, {
    name: 'Building Estimation',
    icon: Calculator,
    link: '#'
  }];
  const softwareServices = [{
    name: 'C Programming',
    icon: Code,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
  }, {
    name: 'C++',
    icon: FileCode,
    link: 'https://isocpp.org/'
  }, {
    name: 'JAVA',
    icon: Coffee,
    link: 'https://www.oracle.com/java/'
  }, {
    name: 'PYTHON',
    icon: Terminal,
    link: 'https://www.python.org/'
  }, {
    name: 'Machine Learning',
    icon: Bot,
    link: 'https://www.tensorflow.org/'
  }, {
    name: 'Data Science',
    icon: BarChart,
    link: 'https://www.datasciencecentral.com/'
  }];
  const ServiceCard = ({
    service,
    index
  }: {
    service: any;
    index: number;
  }) => <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className="group">
      <a href={service.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-red-900/90 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-500 dark:hover:border-red-400">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 dark:from-red-500 dark:to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-red-100 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
          {service.name}
        </h4>
      </a>
    </motion.div>;
  return <div className="bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 dark:from-red-900 dark:via-red-800 dark:to-red-700 transition-colors duration-300">
      {/* CAD Services Section */}
      <section id="services" className="py-20 bg-lime-800">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-300 bg-clip-text mb-4 text-slate-50">
              PROFESSIONAL CAD & ENGINEERING SERVICES
            </h2>
            <p className="text-xl text-amber-400">Industry-standard software training</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cadServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section id="software-courses" className="py-20 bg-fuchsia-950">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-300 bg-clip-text mb-4 text-slate-50">
              SOFTWARE DEVELOPMENT COURSES
            </h2>
            <p className="text-xl text-amber-400">Master programming languages & data science</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {softwareServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>
      </section>
    </div>;
};
export default EnhancedServices;