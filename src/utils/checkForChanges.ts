import { ClassInfo } from "@/utils/types";
import store from "@/store";
import axios from "axios";
import * as utils from "@/utils/objectCreation";

export function checkForChanges(followedClass: ClassInfo): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    let changes = false;
    axios
      .get(
        `http://${store.state.meosDomain}:2009/meos?difference=${store.state.nextDifference}`
      )
      .then(res => {
        const resObj = utils.getJSON(res);
        if ("cmp" in resObj.MOPDiff) {
          if (Array.isArray(resObj.MOPDiff.cmp)) {
            resObj.MOPDiff.cmp.forEach(
              (element: { base: { $: { cls: string | number } }[] }) => {
                if (element.base[0].$.cls == followedClass.id) {
                  changes = true;
                }
              }
            );
          } else if (resObj.MOPDiff.cmp.base.cls === followedClass.id)
            return true;
        }
      })
      .catch(() => {
        store.commit("disconnected");
      })
      .then(() => {
        resolve(changes);
      });
  });
}
