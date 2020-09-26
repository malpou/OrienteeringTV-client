import store from "@/store";
import { getJSON } from "@/utils/objectCreation";
import axios from "axios";

export function updateTop5(id: number, control: string) {
  axios
    .get(
      `http://${store.state.meosDomain}/meos?get=result&class=${id}&to=${control}`
    )
    .then(res => {
      const resObj = getJSON(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { person } = resObj.MOPComplete.results;
    })
    .catch(e => console.log(e));
}
