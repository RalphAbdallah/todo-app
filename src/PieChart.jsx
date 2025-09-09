import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const TaskPieChart = ({ COLORS, Data }) => {

  //console.log(COLORS);
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={Data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        startAngle={0}       // 👈 define a fixed starting angle
        endAngle={360}       // 👈 ensures full circle is covered
        animationBegin={0}
        animationDuration={800}
        animationEasing="ease-out"
      >
        {Data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default TaskPieChart;
