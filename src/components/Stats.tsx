interface Stat {
  number: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;