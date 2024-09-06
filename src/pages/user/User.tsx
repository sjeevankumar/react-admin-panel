import "./user.scss"
import Single from "../../components/single/Single"
import { singleUser } from "../../data"

const User = () => {
  //Fetch data and send to Single component
  return (
    <div>
      <Single {...singleUser} />
    </div>
  )
}

export default User
