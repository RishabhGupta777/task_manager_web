import { default as FeatureCard } from "./_featureCard";

export default () => {
  const featureData = [
    {
      title: "Secure Login",
      description: "Securely Access your account and access your tasks from any device.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      rotateClass: "rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      title: "Task Grouping",
      description: "Group Tasks based on their status of completion. Keeping you focused on what needs to be done.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      rotateClass: "-rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Easy Task Generation and Deletion",
      description: "Creating and managing your tasks has never been easier! Let us handle the tasks so you can focus on what really matters.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      rotateClass: "rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything you need to stay productive</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
