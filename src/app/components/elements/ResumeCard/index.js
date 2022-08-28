import "./style.css"

function ResumeCard({ title, year, subtitle, description, Icon, education, experience }) {
    return (
        <div className="flex gap-4 mt-12 relative w-full ResumeCard">
            <div className="relative text-2xl mt-6 text-gray-500 ResumeCard__icon">
                <Icon size={30} />
            </div>
            <div>
                <p className="text-gray-400">
                    {year} {experience && 'as'} {education && 'for'} <b className="text-gray-200">{subtitle}</b>
                </p>
                <h4 className="text-xl mb-2 font-semibold text-white">{title}</h4>
                <p className="text-gray-500 text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ResumeCard