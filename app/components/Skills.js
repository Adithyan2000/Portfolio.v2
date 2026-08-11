function Skills(){
    const skills = ["React.js", "Javascript", "Redux Toolkit", "HTML/CSS", "Drupal"]
    return (
        <div className="bg-gray-900 py-20 px-6 text-white">
            <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) =>
                <div className="bg-gray-800 p-6 rounded-lg text-center text-lg font-medium" key={skill}>{skill}</div>
            )}
            </div>
        </div>
    )
}

export default Skills;