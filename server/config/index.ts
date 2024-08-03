import { config } from "dotenv"

const ConfigEnv = () => {
    config({ path: 'path/.env' })
}
export default ConfigEnv