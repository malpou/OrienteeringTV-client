import axios from "axios";
import { jsonRes } from "./jsonResult";
import { jsonSta } from "./jsonStart";

function bodytemplate(): BodyTemplate {
  return {
    model: {
      fields: [
        {
          defaultValue: "JSON Object",
          id: "JSON",
          title: "JSON",
          type: "text"
        }
      ]
    },
    payload: {
      JSON: {
        content: []
      }
    }
  };
}

export function sendData(nodeID: number, data: jsonRes[] | jsonSta[]) {
  const newBody = bodytemplate();
  const length = data.length;
  for (let x = 0; x < length; x++) {
    const element = data[x];
    newBody.payload.JSON.content.push(element);
  }
  newBody.payload.JSON = JSON.stringify(newBody.payload.JSON);

  const jsonData = JSON.stringify(newBody);

  axios
    .put(
      `https://app.singular.live/apiv1/datanodes/${nodeID}/data`,
      JSON.stringify(jsonData),
      {
        headers: {
          "Content-Type": "application/json"
        },
        auth: {
          username: "info@fiforientering.dk",
          password: "Kompashuset"
        }
      }
    )
    .then(function(response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error);
    });
}

type BodyTemplate = {
  model: {
    fields: {
      defaultValue: string;
      id: string;
      title: string;
      type: string;
    }[];
  };
  payload: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    JSON: any;
  };
};
