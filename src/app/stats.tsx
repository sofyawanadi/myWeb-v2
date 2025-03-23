export default function StatsSection() {
   const stats = [
      { value: "3", label: "Years of experience" },
      { value: "8", label: "Projects completed" },
      { value: "2", label: "Technologies mastered" },
      { value: "138", label: "Code commits" },
   ];

   return (
      <div className="container mx-auto flex justify-center gap-12 py-10 mt-12">
         {stats.map((stat, index) => (
            <div key={index} className="text-center " >
               <span className="text-4xl font-bold">
                  {stat.value}
               </span>
               <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
         ))}
      </div>
   );
}
