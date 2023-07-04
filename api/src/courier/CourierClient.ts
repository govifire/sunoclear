import { CourierClient } from "@trycourier/courier";
import { config } from "../config/config.js";

function makeCourierClient() {
  // Creates a client
  const courier = CourierClient({ authorizationToken: "pk_prod_E8WVBW81964E3ZJG9EWPF47GB548" });

  async function send(
    email: string,
    template: string,
    data: Record<string, string>,
  ) {
    const { requestId } = await courier.send(
      {
        message: {
          data,
          template,
          to: {
            email,
          },
        },
      },
    );

    return requestId;
  }

  return {
    send,
  };
}

export const courierClient = makeCourierClient();
