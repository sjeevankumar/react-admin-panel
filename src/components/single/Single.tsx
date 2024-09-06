import "./single.scss"
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

type Props = {
  id: number
  img?: string
  title: string
  info: object
  chart?: {
    dataKeys: { name: string; color: string }[]
    data: object[]
  }
  activities?: { time: string; text: string }[]
}

const Single = (props: Props) => {
  const { img, title, info, chart, activities } = props

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="" />}
            <h1>{title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="chart">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip children={undefined} title={undefined} /> */}
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>

        {activities && (
          <ul>
            {activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Single
