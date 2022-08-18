const skills = [
  "ReactJs",
  "Angular",
  "javascript",
  "typescript",
  "nodejs",
  "dotnet core",
  "HTML",
  "CSS",
];
const MySkills = () => {
  return (
    <div className="section-box">
      <div className="w-full">
        <h2 className="title-underline relative text-blue-600 dark:text-white mb-5">
          My Skills
        </h2>
      </div>
      <ul className="grid grid-rows-4 grid-flow-col gap-4 shadow-md border border-blue-100 dark:border-gray-600 p-4 rounded-lg">
        {skills.map((el, index) => (
          <li className="text-blue-600 dark:text-white" key={index}>
            <span className="rounded-full bg-blue-600 inline-block mr-3 h-2 w-2"></span>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkills;
