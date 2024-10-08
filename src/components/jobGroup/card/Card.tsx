export type JobCardProps = {
  title: string;
  description: string;
  icon: string;
};

const JobCard = ({ title, description, icon }: JobCardProps) => {
  return (
    <div className="job-card">
      <img src={icon} alt={title} className="job-icon" />
      <div className="job-text">
        <h3 className="job-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
